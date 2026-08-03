/* Minimal Markdown renderer with LaTeX, code blocks, images and cloze support.
 *
 * Deliberately small and dependency-free. Math and code are pulled out into
 * placeholders *before* any markdown or HTML escaping happens, so `_`, `*` and
 * `<` inside them survive untouched. Math is emitted as an empty <span> carrying
 * the TeX in a data attribute; MD.typeset() fills those in once KaTeX is around,
 * which means rendering never blocks on the CDN. */
window.MD = (function () {
  'use strict';

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  var OPEN = '\uE000', CLOSE = '\uE001';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  }

  function attr(s) {
    return escapeHtml(s).replace(/\n/g, ' ');
  }

  /* ---- inline ---- */

  function inline(text) {
    var t = escapeHtml(text);
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

  /* `isBlockAtom` recognises a line that is nothing but a placeholder standing in
   * for block-level HTML (a code fence). Those get emitted on their own rather
   * than wrapped in a <p>, which would be invalid. */
  function blocks(text, out, isBlockAtom) {
    var lines = text.split('\n');
    var i = 0;

    function isBlank(s) { return !s || !s.trim(); }

    while (i < lines.length) {
      var line = lines[i];

      if (isBlank(line)) { i++; continue; }

      if (isBlockAtom && isBlockAtom(line)) { out.push(line.trim()); i++; continue; }

      var h = /^(#{1,6})\s+(.*)$/.exec(line);
      if (h) {
        var lvl = Math.min(6, h[1].length + 2); // demote: cards are already inside a page
        out.push('<h' + lvl + '>' + inline(h[2]) + '</h' + lvl + '>');
        i++;
        continue;
      }

      if (/^>\s?/.test(line)) {
        var quote = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quote.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        var inner = [];
        blocks(quote.join('\n'), inner, isBlockAtom);
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
            // continuation lines of the current item
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
             !(isBlockAtom && isBlockAtom(lines[i]))) {
        para.push(lines[i]);
        i++;
      }
      if (para.length) out.push('<p>' + inline(para.join('\n')).replace(/\n/g, '<br>') + '</p>');
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

    var html = blocks(text, [], isBlockAtom).join('');

    // restore placeholders (loops because stored HTML may itself contain them)
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

  // Late-arriving libraries: re-run over whatever is on screen.
  function reTypeset() { typeset(document.body); }
  window.addEventListener('katex-ready', reTypeset);
  window.addEventListener('hljs-ready', reTypeset);

  /* Plain-text projection, used for search. */
  function plain(src) {
    return String(src == null ? '' : src)
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/\{\{(.+?)\}\}/g, '$1')
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[#>*_`~$=]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  return { render: render, typeset: typeset, plain: plain, escapeHtml: escapeHtml };
})();
