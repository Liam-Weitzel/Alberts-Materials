/* Minimal Markdown renderer with LaTeX, code blocks, tables, images and cloze.
 *
 * Deliberately small and dependency-free. Math and code are pulled out into
 * placeholders *before* any markdown or HTML escaping happens, so `_`, `*` and
 * `<` inside them survive untouched. Math is emitted as an empty <span> carrying
 * the TeX in a data attribute; MD.typeset() fills those in once KaTeX is around,
 * so rendering never blocks on the CDN.
 *
 * Two callers with different needs:
 *   cards      MD.render(text, { cloze: 'hide' })     headings demoted, no anchors
 *   write-ups  MD.render(text, NOTE_OPTS)              ## becomes h2 with an anchor
 */
window.MD = (function () {
  'use strict';

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  var OPEN = '\uE000', CLOSE = '\uE001';
  var ATOM_ANY = /\uE000\d+\uE001/g;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  }

  function attr(s) {
    return escapeHtml(s).replace(/\n/g, ' ');
  }

  function slugify(text, seen) {
    var base = String(text)
      .replace(ATOM_ANY, '')
      .replace(/[`*_~$]/g, '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section';
    if (!seen) return base;
    var slug = base, n = 2;
    while (seen[slug]) slug = base + '-' + n++;
    seen[slug] = true;
    return slug;
  }

  /* ---- front matter ---- */

  /* Leading `---` block of `key: value` pairs. `[a, b]` becomes an array. */
  function frontMatter(text) {
    var src = String(text == null ? '' : text).replace(/\r\n?/g, '\n');
    var meta = {};
    var m = /^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/.exec(src);
    if (!m) return { meta: meta, body: src };
    m[1].split('\n').forEach(function (line) {
      var kv = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line.trim());
      if (!kv) return;
      var value = kv[2].trim();
      if (/^\[.*\]$/.test(value)) {
        value = value.slice(1, -1).split(',').map(function (s) {
          return s.trim().replace(/^["']|["']$/g, '');
        }).filter(Boolean);
      } else {
        value = value.replace(/^["']|["']$/g, '');
      }
      meta[kv[1].toLowerCase()] = value;
    });
    return { meta: meta, body: src.slice(m[0].length) };
  }

  /* ---- inline ---- */

  function inline(text) {
    var t = escapeHtml(text);
    // [[paper-slug]] or [[paper-slug|your own words]] cites a paper summary.
    // With no label it renders as "Woese et al., 1990", resolved at
    // render time from the manifest, so a card can cite a paper by slug and
    // still read properly. An unknown slug stays visible rather than silently
    // linking nowhere.
    t = t.replace(/\[\[([^\[\]|]+?)(?:\|([^\[\]]+))?\]\]/g, function (m, slug, label) {
      var id = slug.trim();
      var known = window.Papers ? Papers.label(id) : null;
      return '<a class="paper-ref' + (known ? '' : ' is-missing') + '" href="#/paper/' +
        encodeURIComponent(id) + '">' + (label ? label.trim() : (known || id)) + '</a>';
    });
    t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (m, alt, src) {
      return '<img src="' + attr(src) + '" alt="' + attr(alt) + '" loading="lazy">';
    });
    t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, label, href) {
      var ext = /^[a-z]+:\/\//i.test(href) ? ' target="_blank" rel="noopener"' : '';
      return '<a href="' + attr(href) + '"' + ext + '>' + label + '</a>';
    });
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^\w*])\*([^*\n]+)\*(?![\w*])/g, '$1<em>$2</em>');
    t = t.replace(/(^|[^\w_])_([^_\n]+)_(?![\w_])/g, '$1<em>$2</em>');
    t = t.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    t = t.replace(/==([^=]+)==/g, '<mark>$1</mark>');
    return t;
  }

  /* ---- blocks ---- */

  function splitRow(line) {
    return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(function (c) { return c.trim(); });
  }

  function isTableSep(line) {
    return /^\s*\|?[\s:-]*-[-\s:|]*\|?\s*$/.test(line) && line.indexOf('-') !== -1 && line.indexOf('|') !== -1;
  }

  /* ctx: { isBlockAtom, headingOffset, ids, seen } */
  function blocks(text, out, ctx) {
    var lines = text.split('\n');
    var i = 0;

    function isBlank(s) { return !s || !s.trim(); }
    function atom(s) { return ctx.isBlockAtom && ctx.isBlockAtom(s); }

    while (i < lines.length) {
      var line = lines[i];

      if (isBlank(line)) { i++; continue; }

      if (atom(line)) { out.push(line.trim()); i++; continue; }

      var h = /^(#{1,6})\s+(.*)$/.exec(line);
      if (h) {
        var lvl = Math.min(6, Math.max(ctx.minHeading, h[1].length + ctx.headingOffset));
        var id = ctx.ids ? ' id="' + attr(slugify(h[2], ctx.seen)) + '"' : '';
        out.push('<h' + lvl + id + '>' + inline(h[2]) + '</h' + lvl + '>');
        i++;
        continue;
      }

      // table: a header row followed by a |---|---| separator
      if (line.indexOf('|') !== -1 && i + 1 < lines.length && isTableSep(lines[i + 1])) {
        var header = splitRow(line);
        var align = splitRow(lines[i + 1]).map(function (c) {
          if (/^:.*:$/.test(c)) return ' style="text-align:center"';
          if (/:$/.test(c)) return ' style="text-align:right"';
          return '';
        });
        i += 2;
        var body = [];
        while (i < lines.length && !isBlank(lines[i]) && lines[i].indexOf('|') !== -1) {
          body.push(splitRow(lines[i]));
          i++;
        }
        var thead = '<tr>' + header.map(function (c, n) {
          return '<th' + (align[n] || '') + '>' + inline(c) + '</th>';
        }).join('') + '</tr>';
        var tbody = body.map(function (row) {
          return '<tr>' + header.map(function (_, n) {
            return '<td' + (align[n] || '') + '>' + inline(row[n] == null ? '' : row[n]) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        out.push('<div class="table-wrap"><table><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>');
        continue;
      }

      if (/^>\s?/.test(line)) {
        var quote = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quote.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        var inner = [];
        blocks(quote.join('\n'), inner, ctx);
        out.push('<blockquote>' + inner.join('') + '</blockquote>');
        continue;
      }

      var bullet = /^[-*+]\s+(.*)$/.exec(line);
      var number = /^\d+[.)]\s+(.*)$/.exec(line);
      if (bullet || number) {
        var ordered = !!number;
        var items = [];
        while (i < lines.length) {
          var m = ordered ? /^\d+[.)]\s+(.*)$/.exec(lines[i]) : /^[-*+]\s+(.*)$/.exec(lines[i]);
          if (!m) {
            if (items.length && /^\s{2,}\S/.test(lines[i])) {
              items[items.length - 1] += '\n' + lines[i].trim();
              i++;
              continue;
            }
            break;
          }
          items.push(m[1]);
          i++;
        }
        var tag = ordered ? 'ol' : 'ul';
        out.push('<' + tag + '>' + items.map(function (it) {
          return '<li>' + inline(it).replace(/\n/g, '<br>') + '</li>';
        }).join('') + '</' + tag + '>');
        continue;
      }

      if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

      var para = [];
      while (i < lines.length && !isBlank(lines[i]) &&
             !/^(#{1,6}\s|>\s?|[-*+]\s|\d+[.)]\s)/.test(lines[i]) &&
             !/^(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i]) &&
             !atom(lines[i])) {
        para.push(lines[i]);
        i++;
      }
      if (para.length) {
        // A paragraph that is nothing but an image becomes a <figure>, using the
        // alt text as the caption.
        var lone = para.length === 1 && /^!\[([^\]]*)\]\(([^)\s]+)\)$/.exec(para[0].trim());
        if (lone) {
          out.push('<figure>' + inline(para[0].trim()) +
            (lone[1] ? '<figcaption>' + inline(lone[1]) + '</figcaption>' : '') + '</figure>');
        } else {
          out.push('<p>' + inline(para.join('\n')).replace(/\n/g, '<br>') + '</p>');
        }
      }
    }
    return out;
  }

  /* ---- entry point ---- */

  function render(src, opts) {
    opts = opts || {};
    var store = [];
    var blockAtom = {};
    function put(html, isBlock) {
      store.push(html);
      if (isBlock) blockAtom[store.length - 1] = true;
      return OPEN + (store.length - 1) + CLOSE;
    }
    var ATOM_LINE = new RegExp('^\\s*' + OPEN + '(\\d+)' + CLOSE + '\\s*$');
    function isBlockAtom(line) {
      var m = ATOM_LINE.exec(line);
      return !!m && blockAtom[+m[1]] === true;
    }

    var text = String(src == null ? '' : src).replace(/\r\n?/g, '\n');

    // 1. fenced code
    text = text.replace(/^```([\w+#-]*)[ \t]*\n([\s\S]*?)^```[ \t]*$/gm, function (m, lang, code) {
      var cls = lang ? ' class="language-' + attr(lang) + '"' : '';
      return put('<pre class="code"><code' + cls + '>' + escapeHtml(code.replace(/\n$/, '')) + '</code></pre>', true);
    });

    // 2. cloze deletions: {{hidden}} or {{hidden::hint}}
    text = text.replace(/\{\{(.+?)\}\}/g, function (m, body) {
      var parts = body.split('::');
      var answer = parts[0], hint = parts[1];
      if (opts.cloze === 'show') return put('<span class="cloze revealed">' + inline(answer) + '</span>');
      return put('<span class="cloze">' + (hint ? escapeHtml(hint) : '[ … ]') + '</span>');
    });

    // 3. math (display first, so $$ isn't eaten by the inline rule)
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, function (m, tex) {
      return put('<span class="math math-display" data-tex="' + attr(tex.trim()) + '" data-display="1"></span>');
    });
    text = text.replace(/`([^`\n]+)`/g, function (m, code) {
      return put('<code>' + escapeHtml(code) + '</code>');
    });
    text = text.replace(/\$(?!\s)((?:[^$\n\\]|\\.)+?)(?<!\s|\\)\$/g, function (m, tex) {
      return put('<span class="math" data-tex="' + attr(tex.trim()) + '" data-display="0"></span>');
    });

    var ctx = {
      isBlockAtom: isBlockAtom,
      headingOffset: opts.headingOffset == null ? 2 : opts.headingOffset,
      minHeading: opts.minHeading == null ? 1 : opts.minHeading,
      ids: !!opts.ids,
      seen: {}
    };
    var html = blocks(text, [], ctx).join('');

    var guard = 0;
    while (html.indexOf(OPEN) !== -1 && guard++ < 12) {
      html = html.replace(/\uE000(\d+)\uE001/g, function (m, idx) { return store[+idx]; });
    }
    return html;
  }

  /* ---- post-render enhancement ---- */

  function typeset(root) {
    if (!root) return;
    var maths = root.querySelectorAll('.math[data-tex]');
    for (var i = 0; i < maths.length; i++) {
      var el = maths[i];
      if (el.dataset.done === '1') continue;
      var tex = el.getAttribute('data-tex');
      var display = el.getAttribute('data-display') === '1';
      if (window.katex) {
        try {
          window.katex.render(tex, el, { displayMode: display, throwOnError: false, output: 'html' });
          el.dataset.done = '1';
          continue;
        } catch (e) { /* fall through to raw */ }
      }
      el.textContent = (display ? '$$' + tex + '$$' : '$' + tex + '$');
      el.classList.add('math-raw');
    }

    if (window.hljs) {
      var codes = root.querySelectorAll('pre.code > code[class^="language-"]');
      for (var j = 0; j < codes.length; j++) {
        if (codes[j].dataset.done === '1') continue;
        try { window.hljs.highlightElement(codes[j]); codes[j].dataset.done = '1'; } catch (e) {}
      }
    }
  }

  function reTypeset() { typeset(document.body); }
  window.addEventListener('katex-ready', reTypeset);
  window.addEventListener('hljs-ready', reTypeset);

  /* Plain-text projection, used for search and word counts. */
  function plain(src) {
    return String(src == null ? '' : src)
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/\{\{(.+?)\}\}/g, '$1')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[\[([^\[\]|]+?)(?:\|([^\[\]]+))?\]\]/g, function (m, slug, label) { return label || slug; })
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[#>*_`~$=|]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function words(src) {
    var t = plain(src);
    return t ? t.split(/\s+/).length : 0;
  }

  return {
    render: render, typeset: typeset, plain: plain, words: words,
    frontMatter: frontMatter, slugify: slugify, escapeHtml: escapeHtml
  };
})();
