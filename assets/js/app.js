/* Router + views.
 *
 * The site is organised by chapter. A chapter is a write-up (notes/<slug>.md)
 * paired with a deck of cards (decks/<slug>.md). Either half can be missing while
 * you're mid-way through a chapter.
 *
 * Papers sit alongside rather than inside that. A paper (papers/<slug>.md) is a
 * standalone summary that names the chapters it belongs to, so it can surface
 * under several of them, or under none while you're still reading it. See
 * papers.js.
 *
 * Hash routing keeps everything working on GitHub Pages with no server-side
 * rewrites:  #/ , #/chapter/<slug> , #/cards/<slug> , #/study/<slug|all> ,
 * #/papers , #/paper/<slug> , #/settings
 */
(function () {
  'use strict';

  var view = document.getElementById('view');
  var toastEl = document.getElementById('toast');
  var state = { manifest: null, chapters: null, loaded: false, error: null };
  var session = null;

  /* ---------- helpers ---------- */

  function esc(s) { return MD.escapeHtml(s); }

  // Write-ups render as an article: `##` is a top-level section (h2, under the
  // page's h1) and every heading gets an anchor so the sidebar can link to it.
  var NOTE_OPTS = { headingOffset: 0, minHeading: 2, ids: true };

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2600);
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function chapterBySlug(slug) {
    for (var i = 0; i < state.chapters.length; i++) {
      if (state.chapters[i].slug === slug) return state.chapters[i];
    }
    return null;
  }

  function cardsOf(chapter) { return chapter && chapter.deck ? chapter.deck.cards : []; }

  function allCards() {
    return state.chapters.reduce(function (acc, c) { return acc.concat(cardsOf(c)); }, []);
  }

  function render(html) {
    view.innerHTML = html;
    MD.typeset(view);
    window.scrollTo(0, 0);
  }

  function prettify(slug) {
    return slug.replace(/^ch(\d+)[-_]?/i, 'Ch $1. ').replace(/[-_]/g, ' ')
      .replace(/\b\w/g, function (m) { return m.toUpperCase(); });
  }

  /* ---------- loading ---------- */

  function getText(url) {
    return fetch(url, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(url + ': HTTP ' + r.status);
      return r.text();
    });
  }

  function loadChapter(entry) {
    var chapter = {
      slug: entry.slug,
      title: null,
      description: '',
      notes: null,
      deck: null,
      tags: []
    };

    var jobs = [];

    if (entry.notes) {
      jobs.push(getText('notes/' + entry.notes).then(function (text) {
        var fm = MD.frontMatter(text);
        chapter.notes = {
          meta: fm.meta,
          body: fm.body,
          words: MD.words(fm.body),
          search: MD.plain(fm.body).toLowerCase()
        };
      }).catch(function (e) {
        console.error('[chapters] notes failed for ' + entry.slug, e);
      }));
    }

    if (entry.deck) {
      jobs.push(getText('decks/' + entry.deck).then(function (text) {
        chapter.deck = Deck.parse(text, entry.slug, entry.deck);
      }).catch(function (e) {
        console.error('[chapters] deck failed for ' + entry.slug, e);
      }));
    }

    return Promise.all(jobs).then(function () {
      var nm = chapter.notes ? chapter.notes.meta : {};
      chapter.title = nm.title || (chapter.deck && chapter.deck.title) || prettify(entry.slug);
      chapter.description = nm.description || (chapter.deck && chapter.deck.description) || '';
      var tags = nm.tags || (chapter.deck && chapter.deck.tags) || [];
      chapter.tags = typeof tags === 'string' ? tags.split(/[,\s]+/).filter(Boolean) : tags;
      chapter.date = nm.date || '';
      return chapter;
    });
  }

  function loadAll() {
    return getText('chapters.json')
      .then(function (text) { return JSON.parse(text); })
      .then(function (manifest) {
        state.manifest = manifest;
        // Metadata only. A paper's summary is fetched when you open it.
        Papers.init(manifest.papers);
        return Promise.all((manifest.chapters || []).map(loadChapter));
      })
      .then(function (chapters) {
        state.chapters = chapters;
        state.loaded = true;
      })
      .catch(function (e) {
        state.error = e.message;
        state.loaded = true;
      });
  }

  /* ---------- shared bits ---------- */

  function progressRing(pct) {
    var r = 15.9155;
    return '<svg class="ring" viewBox="0 0 36 36" aria-hidden="true">' +
      '<circle class="ring-bg" cx="18" cy="18" r="' + r + '"></circle>' +
      '<circle class="ring-fg" cx="18" cy="18" r="' + r + '" stroke-dasharray="' + (pct * 100).toFixed(1) + ' 100"></circle>' +
      '</svg>';
  }

  function readingTime(words) {
    return Math.max(1, Math.round(words / 220)) + ' min read';
  }

  function studyLink(chapter, cls, label) {
    return '<a class="' + cls + '" href="#/study/' + encodeURIComponent(chapter.slug) + '">' + label + '</a>';
  }

  /* ---------- home ---------- */

  function viewHome() {
    if (state.error) {
      return render('<div class="empty"><h2>Could not load the material</h2><p class="mono">' + esc(state.error) + '</p>' +
        '<p>Check that <code>chapters.json</code> exists and lists your chapters.</p></div>');
    }
    if (!state.chapters.length) {
      return render('<div class="empty"><h2>Nothing here yet</h2>' +
        '<p>Add a write-up to <code>notes/</code> or a deck to <code>decks/</code>, then run ' +
        '<code>python3 build-manifest.py</code>.</p></div>');
    }

    var cards = allCards();
    var total = SRS.counts(cards);
    var td = SRS.todayCounts();
    var pct = total.total ? total.seen / total.total : 0;
    var written = state.chapters.filter(function (c) { return c.notes; }).length;

    var head =
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<h1>' + esc(state.manifest.title || 'Materials') + '</h1>' +
          (state.manifest.description ? '<p class="sub">' + esc(state.manifest.description) + '</p>' : '') +
          '<div class="stat-row">' +
            '<div class="stat"><span class="stat-n">' + written + '</span><span class="stat-l">write-ups</span></div>' +
            '<div class="stat"><span class="stat-n">' + (total.due + total.learning) + '</span><span class="stat-l">due now</span></div>' +
            '<div class="stat"><span class="stat-n">' + total.new + '</span><span class="stat-l">unseen</span></div>' +
            '<div class="stat"><span class="stat-n">' + (td.new + td.reviews) + '</span><span class="stat-l">done today</span></div>' +
            (Papers.count()
              ? '<a class="stat" href="#/papers"><span class="stat-n">' + Papers.count() + '</span><span class="stat-l">papers</span></a>'
              : '') +
          '</div>' +
          (total.due + total.learning + total.new
            ? '<a class="btn btn-primary btn-lg" href="#/study/all">Study everything due</a>'
            : '<span class="muted">Nothing due across all chapters.</span>') +
        '</div>' +
        '<div class="hero-ring">' + progressRing(pct) +
          '<div class="ring-label"><b>' + Math.round(pct * 100) + '%</b><span>introduced</span></div>' +
        '</div>' +
      '</section>';

    var list = state.chapters.map(function (ch, i) {
      var c = SRS.counts(cardsOf(ch));
      var dp = c.total ? c.seen / c.total : 0;
      var np = Papers.forChapter(ch.slug).length;

      var badges = [];
      if (c.due + c.learning) badges.push('<span class="pill pill-due">' + (c.due + c.learning) + ' due</span>');
      if (c.new) badges.push('<span class="pill pill-new">' + c.new + ' new</span>');
      if (c.total && !c.new && !(c.due + c.learning)) badges.push('<span class="pill pill-done">caught up</span>');
      if (!c.total) badges.push('<span class="pill pill-todo">no cards yet</span>');
      if (!ch.notes) badges.push('<span class="pill pill-todo">no write-up yet</span>');

      var actions = [];
      if (ch.notes) actions.push('<a class="btn btn-sm btn-primary" href="#/chapter/' + encodeURIComponent(ch.slug) + '">Read</a>');
      if (c.total) {
        actions.push('<a class="btn btn-sm" href="#/cards/' + encodeURIComponent(ch.slug) + '">Cards</a>');
        actions.push(studyLink(ch, 'btn btn-sm', 'Study'));
      }

      var href = ch.notes ? '#/chapter/' + encodeURIComponent(ch.slug)
                          : (c.total ? '#/cards/' + encodeURIComponent(ch.slug) : '#/');

      return '<article class="chapter">' +
        '<div class="chapter-n">' + String(i + 1).padStart(2, '0') + '</div>' +
        '<div class="chapter-main">' +
          '<a class="chapter-head" href="' + href + '">' +
            '<h3>' + esc(ch.title) + '</h3>' +
            (ch.description ? '<p>' + esc(ch.description) + '</p>' : '') +
          '</a>' +
          '<div class="chapter-meta">' +
            (ch.notes ? '<span class="muted small">' + readingTime(ch.notes.words) + '</span>' : '') +
            (c.total ? '<span class="muted small">' + c.total + ' cards</span>' : '') +
            (np ? '<span class="muted small">' + np + ' paper' + (np > 1 ? 's' : '') + '</span>' : '') +
            badges.join('') +
          '</div>' +
          (c.total ? '<div class="bar"><span style="width:' + (dp * 100).toFixed(1) + '%"></span></div>' : '') +
        '</div>' +
        '<div class="chapter-actions">' + actions.join('') + '</div>' +
      '</article>';
    }).join('');

    render(head + '<section class="chapter-list">' + list + '</section>' + provenance());
  }

  /* Who wrote what. The site was built by an LLM; the material on it was not, and
   * a reader has no way to tell those apart without being told. */
  function provenance() {
    return '<aside class="notice">' +
      '<span class="notice-mark" aria-hidden="true">⚠</span>' +
      '<div>' +
        '<b>The code behind this site is AI-generated. The material on it is not.</b>' +
        '<p>The chapter write-ups, the flashcards and the paper summaries are written by ' +
        'hand, from my own reading. Everything else, meaning the site you are looking at, ' +
        'was written by an LLM.</p>' +
      '</div>' +
    '</aside>';
  }

  /* ---------- chapter write-up ---------- */

  function viewChapter(slug) {
    var ch = chapterBySlug(slug);
    if (!ch) return notFound('Chapter not found');
    if (!ch.notes) {
      return render(crumbs(ch.title) +
        '<div class="empty"><h2>' + esc(ch.title) + '</h2><p>No write-up for this chapter yet.</p>' +
        (cardsOf(ch).length ? '<p>' + studyLink(ch, 'btn btn-primary', 'Study the deck') + '</p>' : '') + '</div>' +
        furtherReading(ch));
    }

    var c = SRS.counts(cardsOf(ch));
    var papers = Papers.forChapter(ch.slug).length;
    var body = MD.render(ch.notes.body, NOTE_OPTS);

    render(
      crumbs(ch.title) +
      '<article class="post">' +
        '<header class="post-head">' +
          '<h1>' + esc(ch.title) + '</h1>' +
          (ch.description ? '<p class="sub">' + esc(ch.description) + '</p>' : '') +
          '<p class="post-meta">' +
            (ch.date ? '<span>' + esc(ch.date) + '</span>' : '') +
            '<span>' + readingTime(ch.notes.words) + '</span>' +
            (c.total ? '<span>' + c.total + ' cards</span>' : '') +
            (papers ? '<span>' + papers + ' paper' + (papers > 1 ? 's' : '') + '</span>' : '') +
          '</p>' +
        '</header>' +
        '<div class="post-layout">' +
          '<nav class="toc" id="toc" aria-label="On this page"></nav>' +
          '<div class="prose" id="prose">' + body + '</div>' +
        '</div>' +
      '</article>' +
      (c.total ? practicePanel(ch, c) : '') +
      furtherReading(ch) +
      chapterNav(slug)
    );

    buildToc();
    MD.typeset(view);
  }

  function practicePanel(ch, c) {
    var due = c.due + c.learning;
    var line = due ? due + ' cards due now'
             : c.new ? c.new + ' cards you have not seen yet'
             : 'All ' + c.total + ' cards are scheduled ahead';
    return '<section class="practice">' +
      '<div>' +
        '<h2>Practice this chapter</h2>' +
        '<p class="muted">' + line + '.</p>' +
      '</div>' +
      '<div class="row">' +
        '<a class="btn" href="#/cards/' + encodeURIComponent(ch.slug) + '">Browse cards</a>' +
        studyLink(ch, 'btn btn-primary', 'Study') +
      '</div>' +
    '</section>';
  }

  function chapterNav(slug) {
    var i = state.chapters.findIndex(function (c) { return c.slug === slug; });
    var prev = i > 0 ? state.chapters[i - 1] : null;
    var next = i >= 0 && i < state.chapters.length - 1 ? state.chapters[i + 1] : null;
    if (!prev && !next) return '';
    function link(ch, dir, label) {
      var href = ch.notes ? '#/chapter/' + encodeURIComponent(ch.slug) : '#/cards/' + encodeURIComponent(ch.slug);
      return '<a class="pager-link ' + dir + '" href="' + href + '">' +
        '<span class="pager-dir">' + label + '</span>' +
        '<span class="pager-title">' + esc(ch.title) + '</span></a>';
    }
    return '<nav class="pager">' +
      (prev ? link(prev, 'prev', 'Previous') : '<span></span>') +
      (next ? link(next, 'next', 'Next') : '<span></span>') +
    '</nav>';
  }

  function buildToc() {
    var prose = view.querySelector('#prose');
    var toc = view.querySelector('#toc');
    if (!prose || !toc) return;
    var heads = prose.querySelectorAll('h2[id], h3[id]');
    if (heads.length < 3) { toc.remove(); return; }
    var items = [];
    for (var i = 0; i < heads.length; i++) {
      items.push('<li class="toc-' + heads[i].tagName.toLowerCase() + '">' +
        '<a href="#' + heads[i].id + '">' + esc(heads[i].textContent) + '</a></li>');
    }
    toc.innerHTML = '<p class="toc-title">On this page</p><ul>' + items.join('') + '</ul>';

    // Plain #id links would fight the hash router, so scroll manually.
    toc.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      var target = prose.querySelector('#' + CSS.escape(a.getAttribute('href').slice(1)));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function crumbs(leaf, mid) {
    return '<div class="crumbs"><a href="#/">Chapters</a>' +
      (mid ? ' <span>/</span> ' + mid : '') +
      ' <span>/</span> ' + esc(leaf) + '</div>';
  }

  function notFound(msg) {
    return render('<div class="empty"><h2>' + esc(msg) + '</h2><p><a href="#/">Back to chapters</a></p></div>');
  }

  /* ---------- cards browser ---------- */

  function cardBackHTML(card) {
    if (card.type === 'mc') {
      var list = card.choices.map(function (ch) {
        return '<li class="' + (ch.correct ? 'is-correct' : 'is-wrong') + '">' +
          '<span class="tick">' + (ch.correct ? '✓' : '✗') + '</span>' +
          MD.render(ch.text) + '</li>';
      }).join('');
      return '<ul class="choices static">' + list + '</ul>' +
        (card.back ? '<div class="explain">' + MD.render(card.back) + '</div>' : '');
    }
    if (card.type === 'cloze') {
      return '<div class="cloze-answer">' + MD.render(card.front, { cloze: 'show' }) + '</div>' +
        (card.back ? '<div class="explain">' + MD.render(card.back) + '</div>' : '');
    }
    return MD.render(card.back);
  }

  function viewCards(slug) {
    var ch = chapterBySlug(slug);
    if (!ch) return notFound('Chapter not found');
    var cards = cardsOf(ch);
    if (!cards.length) {
      return render(crumbs('Cards', chapterCrumb(ch)) +
        '<div class="empty"><h2>No cards yet</h2><p>Add <code>decks/' + esc(ch.slug) + '.md</code> to build this deck.</p></div>');
    }
    var c = SRS.counts(cards);

    render(
      crumbs('Cards', chapterCrumb(ch)) +
      '<section class="page-head">' +
        '<div>' +
          '<h1>' + esc(ch.title) + '</h1>' +
          '<p class="muted">' + c.total + ' cards, ' + c.new + ' new, ' + (c.due + c.learning) + ' due, ' + c.later + ' scheduled</p>' +
        '</div>' +
        '<div class="page-head-actions">' +
          studyLink(ch, 'btn btn-primary', 'Study') +
          '<button class="btn" type="button" data-act="reset-deck">Reset progress</button>' +
        '</div>' +
      '</section>' +
      '<div class="toolbar"><input id="search" class="input" type="search" placeholder="Search these cards…" autocomplete="off"></div>' +
      '<section id="card-list" class="card-list"></section>'
    );

    var listEl = view.querySelector('#card-list');
    var searchEl = view.querySelector('#search');

    function paint(filter) {
      var q = (filter || '').trim().toLowerCase();
      var matches = cards.filter(function (card) { return !q || card.search.indexOf(q) !== -1; });
      if (!matches.length) {
        listEl.innerHTML = '<div class="empty small"><p>No cards match “' + esc(q) + '”.</p></div>';
        return;
      }
      listEl.innerHTML = matches.map(function (card) {
        var st = SRS.get(card.id);
        return '<details class="browse-card">' +
          '<summary>' +
            '<span class="browse-front">' + MD.render(card.front || '(choices only)') + '</span>' +
            '<span class="browse-meta">' +
              '<span class="tag tag-' + card.type + '">' + card.type + '</span>' +
              '<span class="tag tag-state tag-' + st.s + '">' + SRS.dueLabel(st) + '</span>' +
            '</span>' +
          '</summary>' +
          '<div class="browse-back">' + cardBackHTML(card) +
            (card.tags.length ? '<div class="card-tags">' + card.tags.map(function (t) {
              return '<span class="tag">#' + esc(t) + '</span>';
            }).join('') + '</div>' : '') +
          '</div>' +
        '</details>';
      }).join('');
      MD.typeset(listEl);
    }

    paint('');
    searchEl.addEventListener('input', function () { paint(searchEl.value); });
    view.querySelector('[data-act="reset-deck"]').addEventListener('click', function () {
      if (!confirm('Reset scheduling for all ' + cards.length + ' cards in “' + ch.title + '”?')) return;
      SRS.resetDeck(cards);
      toast('Progress reset for this chapter');
      viewCards(slug);
    });
  }

  /* ---------- papers ---------- */

  // One entry in a list of papers. `chips` adds the chapters it belongs to, which
  // the library wants and a chapter page doesn't (you're already standing in it).
  function paperRow(p, chips) {
    var meta = [];
    if (p.authors) meta.push(esc(p.authors));
    if (p.year) meta.push(esc(p.year));
    if (p.journal) meta.push('<i>' + esc(p.journal) + '</i>');

    var tail = [];
    if (chips) {
      p.chapters.forEach(function (slug) {
        var ch = chapterBySlug(slug);
        if (ch) tail.push('<a class="pill pill-chapter" href="#/chapter/' + encodeURIComponent(slug) + '">' + esc(ch.title) + '</a>');
      });
      if (!p.chapters.length) tail.push('<span class="pill pill-todo">unlinked</span>');
    }
    p.tags.forEach(function (t) { tail.push('<span class="tag">#' + esc(t) + '</span>'); });

    return '<article class="paper-row">' +
      '<a class="paper-head" href="' + Papers.href(p.slug) + '">' +
        '<h3>' + esc(p.title) + '</h3>' +
        (meta.length ? '<p class="paper-cite">' + meta.join(' · ') + '</p>' : '') +
      '</a>' +
      (p.excerpt ? '<p class="paper-excerpt">' + esc(p.excerpt) + '</p>' : '') +
      (tail.length ? '<div class="paper-tail">' + tail.join('') + '</div>' : '') +
      (p.link ? '<a class="paper-out" href="' + esc(p.link) + '" target="_blank" rel="noopener" ' +
        'title="Open the paper">Source ↗</a>' : '') +
    '</article>';
  }

  // Shown under a chapter write-up: what else to read on this topic.
  function furtherReading(ch) {
    var papers = Papers.forChapter(ch.slug);
    if (!papers.length) return '';
    return '<section class="reading">' +
      '<div class="reading-head">' +
        '<h2>Further reading</h2>' +
        '<a class="small" href="#/papers">All papers →</a>' +
      '</div>' +
      '<div class="paper-list">' + papers.map(function (p) { return paperRow(p, false); }).join('') +
      '</div>' +
    '</section>';
  }

  function viewPapers() {
    var papers = Papers.all();
    if (!papers.length) {
      return render('<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> Papers</div>' +
        '<div class="empty"><h2>No papers yet</h2>' +
        '<p>Write a summary into <code>papers/</code>, or let ' +
        '<code>python3 add-paper.py &lt;doi&gt; -c ch01</code> start one for you.</p></div>');
    }

    var linked = papers.filter(function (p) { return p.chapters.length; }).length;

    render(
      '<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> Papers</div>' +
      '<section class="page-head">' +
        '<div>' +
          '<h1>Papers</h1>' +
          '<p class="muted">' + papers.length + ' summaries, ' + linked + ' linked to a chapter</p>' +
        '</div>' +
      '</section>' +
      '<div class="toolbar"><input id="search" class="input" type="search" ' +
        'placeholder="Search by title, author, year or tag…" autocomplete="off"></div>' +
      '<section id="paper-list" class="paper-list"></section>'
    );

    var listEl = view.querySelector('#paper-list');
    var searchEl = view.querySelector('#search');

    function paint(filter) {
      var q = (filter || '').trim().toLowerCase();
      var matches = papers.filter(function (p) { return !q || p.search.indexOf(q) !== -1; });
      listEl.innerHTML = matches.length
        ? matches.map(function (p) { return paperRow(p, true); }).join('')
        : '<div class="empty small"><p>No papers match “' + esc(q) + '”.</p></div>';
    }

    paint('');
    searchEl.addEventListener('input', function () { paint(searchEl.value); });
  }

  function viewPaper(slug) {
    var p = Papers.get(slug);
    if (!p) {
      return render('<div class="empty"><h2>No paper called “' + esc(slug) + '”</h2>' +
        '<p>It may not be in <code>chapters.json</code> yet. Run ' +
        '<code>python3 build-manifest.py</code>.</p>' +
        '<p><a href="#/papers">Back to papers</a></p></div>');
    }

    var cite = [];
    if (p.authors) cite.push(esc(p.authors));
    if (p.journal) cite.push('<i>' + esc(p.journal) + '</i>');
    if (p.year) cite.push(esc(p.year));

    var homes = p.chapters.map(function (s) {
      var ch = chapterBySlug(s);
      return ch ? '<a class="pill pill-chapter" href="#/chapter/' + encodeURIComponent(s) + '">' + esc(ch.title) + '</a>' : '';
    }).join('');

    render(
      '<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> ' +
        '<a href="#/papers">Papers</a> <span>/</span> ' + esc(Papers.citation(p)) + '</div>' +
      '<article class="post">' +
        '<header class="post-head">' +
          '<h1>' + esc(p.title) + '</h1>' +
          (cite.length ? '<p class="sub">' + cite.join(', ') + '</p>' : '') +
          '<p class="post-meta">' +
            (p.date ? '<span>read ' + esc(p.date) + '</span>' : '') +
            (p.words ? '<span>' + readingTime(p.words) + '</span>' : '') +
            (p.link ? '<span><a href="' + esc(p.link) + '" target="_blank" rel="noopener">Source ↗</a></span>' : '') +
          '</p>' +
          (homes || p.tags.length
            ? '<div class="paper-tail">' + homes +
              p.tags.map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('') +
              '</div>'
            : '') +
        '</header>' +
        '<div class="post-layout">' +
          '<nav class="toc" id="toc" aria-label="On this page"></nav>' +
          '<div class="prose" id="prose">' +
            '<div class="loading"><span class="spinner"></span> Loading the summary…</div>' +
          '</div>' +
        '</div>' +
      '</article>'
    );

    // The body arrives after the frame above, so make sure we're still on this
    // page before writing into it.
    var token = location.hash;
    Papers.load(slug).then(function (doc) {
      if (location.hash !== token) return;
      var prose = view.querySelector('#prose');
      if (!prose) return;
      prose.innerHTML = MD.render(doc.body, NOTE_OPTS) || '<p class="muted">This summary is still empty.</p>';
      buildToc();
      MD.typeset(view);
    }).catch(function (e) {
      if (location.hash !== token) return;
      var prose = view.querySelector('#prose');
      if (prose) prose.innerHTML = '<div class="empty small"><p>Could not load this summary.</p>' +
        '<p class="mono small">' + esc(e.message) + '</p></div>';
    });
  }

  function chapterCrumb(ch) {
    if (!ch.notes) return esc(ch.title);
    return '<a href="#/chapter/' + encodeURIComponent(ch.slug) + '">' + esc(ch.title) + '</a>';
  }

  /* ---------- study ---------- */

  function buildQueue(cards) {
    var now = Date.now();
    var dueReview = [], learning = [], fresh = [];
    cards.forEach(function (card) {
      var st = SRS.get(card.id);
      if (st.s === 'new') fresh.push(card);
      else if (st.due <= now) (st.s === 'review' ? dueReview : learning).push(card);
    });

    if (SRS.settings().shuffle) { shuffle(dueReview); shuffle(fresh); }
    learning.sort(function (a, b) { return SRS.get(a.id).due - SRS.get(b.id).due; });

    dueReview = dueReview.slice(0, SRS.reviewRemaining());
    fresh = fresh.slice(0, SRS.newRemaining());

    // Interleave new cards through the review queue rather than front-loading them.
    var queue = learning.concat(dueReview);
    if (fresh.length) {
      if (!queue.length) queue = fresh;
      else {
        var every = Math.max(1, Math.floor(queue.length / fresh.length));
        var out = [], fi = 0;
        for (var i = 0; i < queue.length; i++) {
          out.push(queue[i]);
          if ((i + 1) % every === 0 && fi < fresh.length) out.push(fresh[fi++]);
        }
        while (fi < fresh.length) out.push(fresh[fi++]);
        queue = out;
      }
    }
    return queue;
  }

  function viewStudy(scope) {
    var cards, title, home;
    if (scope === 'all') {
      cards = allCards();
      title = 'All chapters';
      home = '#/';
    } else {
      var ch = chapterBySlug(scope);
      if (!ch) return notFound('Chapter not found');
      cards = cardsOf(ch);
      title = ch.title;
      home = ch.notes ? '#/chapter/' + encodeURIComponent(ch.slug) : '#/cards/' + encodeURIComponent(ch.slug);
    }

    if (!cards.length) {
      return render('<div class="empty"><h2>No cards to study</h2><p><a href="#/">Back to chapters</a></p></div>');
    }

    session = {
      scope: scope, title: title, home: home,
      pool: cards,
      queue: buildQueue(cards),
      done: 0, again: 0,
      startedAt: Date.now(),
      revealed: false, picked: [], checked: false
    };
    session.planned = session.queue.length;
    drawStudy();
  }

  function studyDone() {
    var mins = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
    var counts = SRS.counts(session.pool);
    render(
      '<section class="done">' +
        '<div class="done-mark">✓</div>' +
        '<h1>' + (session.done ? 'Session complete' : 'Nothing due right now') + '</h1>' +
        (session.done
          ? '<p class="sub">' + session.done + ' cards in ' + mins + ' min, ' + session.again + ' marked <i>Again</i></p>'
          : '<p class="sub">Cards in “' + esc(session.title) + '” become available as they fall due.</p>') +
        '<div class="stat-row centered">' +
          '<div class="stat"><span class="stat-n">' + counts.new + '</span><span class="stat-l">still new</span></div>' +
          '<div class="stat"><span class="stat-n">' + (counts.due + counts.learning) + '</span><span class="stat-l">due</span></div>' +
          '<div class="stat"><span class="stat-n">' + counts.later + '</span><span class="stat-l">scheduled</span></div>' +
        '</div>' +
        '<div class="done-actions">' +
          '<a class="btn btn-primary" href="' + session.home + '">Done</a>' +
          (counts.new || counts.due + counts.learning
            ? '<button class="btn" type="button" data-act="again-session">Keep going</button>' : '') +
          '<button class="btn" type="button" data-act="cram">Cram all cards</button>' +
        '</div>' +
      '</section>'
    );
    var again = view.querySelector('[data-act="again-session"]');
    if (again) again.addEventListener('click', function () { viewStudy(session.scope); });
    view.querySelector('[data-act="cram"]').addEventListener('click', function () {
      session.queue = shuffle(session.pool.slice());
      session.planned = session.queue.length;
      session.done = 0; session.again = 0; session.startedAt = Date.now();
      session.cram = true;
      drawStudy();
    });
  }

  function drawStudy() {
    if (!session.queue.length) return studyDone();

    var card = session.queue[0];
    session.revealed = false;
    session.picked = [];
    session.checked = false;

    var totalPlanned = Math.max(session.planned, session.done + session.queue.length);
    var pct = totalPlanned ? (session.done / totalPlanned) * 100 : 0;
    var st = SRS.get(card.id);
    var owner = session.scope === 'all' ? chapterBySlug(card.deckId) : null;

    render(
      '<section class="study">' +
        '<div class="study-top">' +
          '<a class="back" href="' + session.home + '">← ' + esc(session.title) + '</a>' +
          '<div class="study-counts">' +
            '<span class="tag tag-state tag-' + st.s + '">' + st.s + '</span>' +
            '<span class="muted">' + session.done + ' / ' + totalPlanned + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="bar thin"><span style="width:' + pct.toFixed(1) + '%"></span></div>' +
        '<article class="card" id="card">' +
          (owner ? '<div class="card-deck">' + esc(owner.title) + '</div>' : '') +
          '<div class="card-front">' + MD.render(card.front) + '</div>' +
          '<div class="card-body" id="card-body"></div>' +
        '</article>' +
        '<div class="controls" id="controls"></div>' +
        '<p class="hints" id="hints"></p>' +
      '</section>'
    );

    var body = view.querySelector('#card-body');

    if (card.type === 'mc') {
      body.innerHTML = '<ul class="choices" id="choices">' + card.choices.map(function (ch, i) {
        return '<li><button class="choice" type="button" data-i="' + i + '">' +
          '<span class="choice-key">' + String.fromCharCode(65 + i) + '</span>' +
          '<span class="choice-text">' + MD.render(ch.text) + '</span></button></li>';
      }).join('') + '</ul>' +
        (card.multi ? '<p class="muted small">Select all that apply.</p>' : '');
      MD.typeset(body);
      body.querySelectorAll('.choice').forEach(function (btn) {
        btn.addEventListener('click', function () { pickChoice(card, +btn.dataset.i); });
      });
    }

    drawControls(card);
    MD.typeset(view);
  }

  function pickChoice(card, i) {
    if (session.checked) return;
    var at = session.picked.indexOf(i);
    if (card.multi) {
      if (at === -1) session.picked.push(i); else session.picked.splice(at, 1);
    } else {
      session.picked = [i];
    }
    view.querySelectorAll('.choice').forEach(function (btn) {
      btn.classList.toggle('picked', session.picked.indexOf(+btn.dataset.i) !== -1);
    });
    if (!card.multi) checkChoices(card);
    else drawControls(card);
  }

  function checkChoices(card) {
    if (session.checked) return;
    session.checked = true;
    var right = true;
    card.choices.forEach(function (ch, i) {
      var picked = session.picked.indexOf(i) !== -1;
      if (picked !== !!ch.correct) right = false;
    });
    session.lastCorrect = right;
    view.querySelectorAll('.choice').forEach(function (btn) {
      var i = +btn.dataset.i;
      btn.classList.add('checked');
      btn.disabled = true;
      if (card.choices[i].correct) btn.classList.add('correct');
      else if (session.picked.indexOf(i) !== -1) btn.classList.add('wrong');
    });
    reveal(card);
  }

  function reveal(card) {
    if (session.revealed) return;
    session.revealed = true;
    var body = view.querySelector('#card-body');

    if (card.type === 'mc') {
      if (card.back) body.appendChild(el('<div class="explain">' + MD.render(card.back) + '</div>'));
      body.insertBefore(el('<div class="verdict ' + (session.lastCorrect ? 'ok' : 'no') + '">' +
        (session.lastCorrect ? '✓ Correct' : '✗ Not quite') + '</div>'), body.firstChild);
    } else if (card.type === 'cloze') {
      view.querySelector('.card-front').innerHTML = MD.render(card.front, { cloze: 'show' });
      if (card.back) body.innerHTML = '<div class="answer">' + MD.render(card.back) + '</div>';
    } else {
      body.innerHTML = '<hr class="card-rule"><div class="answer">' + MD.render(card.back) + '</div>';
    }

    if (card.tags.length) {
      body.appendChild(el('<div class="card-tags">' + card.tags.map(function (t) {
        return '<span class="tag">#' + esc(t) + '</span>';
      }).join('') + '</div>'));
    }

    MD.typeset(view);
    drawControls(card);
  }

  var RATINGS = [
    { key: 'again', label: 'Again', num: '1' },
    { key: 'hard', label: 'Hard', num: '2' },
    { key: 'good', label: 'Good', num: '3' },
    { key: 'easy', label: 'Easy', num: '4' }
  ];

  function drawControls(card) {
    var controls = view.querySelector('#controls');
    var hints = view.querySelector('#hints');
    if (!controls) return;

    if (!session.revealed) {
      if (card.type === 'mc') {
        if (card.multi) {
          controls.innerHTML = '<button class="btn btn-primary btn-lg" type="button" data-act="check"' +
            (session.picked.length ? '' : ' disabled') + '>Check answer</button>';
          controls.querySelector('[data-act="check"]').addEventListener('click', function () { checkChoices(card); });
          hints.textContent = 'A-D or 1-9 to toggle, Enter to check';
        } else {
          controls.innerHTML = '';
          hints.textContent = 'Pick an answer: A-D or 1-9';
        }
      } else {
        controls.innerHTML = '<button class="btn btn-primary btn-lg" type="button" data-act="show">Show answer</button>';
        controls.querySelector('[data-act="show"]').addEventListener('click', function () { reveal(card); });
        hints.textContent = 'Space or Enter to reveal';
      }
      return;
    }

    controls.innerHTML = '<div class="ratings">' + RATINGS.map(function (r) {
      return '<button class="btn rate rate-' + r.key + '" type="button" data-rate="' + r.key + '">' +
        '<span class="rate-label">' + r.label + '</span>' +
        '<span class="rate-ivl">' + SRS.preview(card.id, r.key) + '</span></button>';
    }).join('') + '</div>';
    controls.querySelectorAll('[data-rate]').forEach(function (btn) {
      btn.addEventListener('click', function () { rate(card, btn.dataset.rate); });
    });
    hints.textContent = '1 Again, 2 Hard, 3 Good, 4 Easy';
  }

  function rate(card, rating) {
    var next = SRS.answer(card.id, rating);
    session.done++;
    if (rating === 'again') session.again++;

    session.queue.shift();

    // Cards coming back within the session get requeued a few cards later.
    var soon = next.due - Date.now();
    if (!session.cram && soon <= 20 * SRS.MIN) {
      session.queue.splice(Math.min(session.queue.length, rating === 'again' ? 3 : 6), 0, card);
    } else if (session.cram && rating === 'again') {
      session.queue.splice(Math.min(session.queue.length, 3), 0, card);
    }

    drawStudy();
  }

  function onKey(e) {
    if (!session || !/^#\/study\//.test(location.hash)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    var card = session.queue[0];
    if (!card) return;

    if (!session.revealed) {
      if (card.type === 'mc') {
        var idx = -1;
        if (/^[a-zA-Z]$/.test(e.key)) idx = e.key.toLowerCase().charCodeAt(0) - 97;
        else if (/^[1-9]$/.test(e.key)) idx = +e.key - 1;
        if (idx >= 0 && idx < card.choices.length) { e.preventDefault(); pickChoice(card, idx); return; }
        if ((e.key === 'Enter' || e.key === ' ') && card.multi && session.picked.length) {
          e.preventDefault(); checkChoices(card);
        }
        return;
      }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); reveal(card); }
      return;
    }

    var map = { '1': 'again', '2': 'hard', '3': 'good', '4': 'easy' };
    if (map[e.key]) { e.preventDefault(); rate(card, map[e.key]); }
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); rate(card, 'good'); }
  }

  /* ---------- settings ---------- */

  function viewSettings() {
    var s = SRS.settings();
    var td = SRS.todayCounts();
    var total = SRS.counts(allCards());

    render(
      '<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> Settings</div>' +
      '<h1>Settings</h1>' +
      '<section class="panel">' +
        '<h2>Daily limits</h2>' +
        '<label class="field"><span>New cards per day</span>' +
          '<input class="input" type="number" min="0" max="500" id="newPerDay" value="' + s.newPerDay + '"></label>' +
        '<label class="field"><span>Maximum reviews per day</span>' +
          '<input class="input" type="number" min="0" max="9999" id="maxReviews" value="' + s.maxReviews + '"></label>' +
        '<label class="check"><input type="checkbox" id="shuffle"' + (s.shuffle ? ' checked' : '') + '><span>Shuffle the queue</span></label>' +
        '<p class="muted small">Today: ' + td.new + ' new, ' + td.reviews + ' reviews. ' +
          SRS.newRemaining() + ' new and ' + SRS.reviewRemaining() + ' reviews left in today\'s budget.</p>' +
      '</section>' +
      '<section class="panel">' +
        '<h2>Progress</h2>' +
        '<p class="muted">' + total.seen + ' of ' + total.total + ' cards introduced. Scheduling lives in this browser\'s localStorage. Export it to carry it to another device.</p>' +
        '<div class="row">' +
          '<button class="btn" type="button" data-act="export">Export progress</button>' +
          '<button class="btn" type="button" data-act="import">Import progress…</button>' +
          '<button class="btn btn-danger" type="button" data-act="reset">Reset everything</button>' +
        '</div>' +
        '<input type="file" id="import-file" accept="application/json,.json" hidden>' +
      '</section>' +
      '<section class="panel">' +
        '<h2>Keyboard</h2>' +
        '<dl class="keys">' +
          '<dt>Space / Enter</dt><dd>Show answer, then rate as <i>Good</i></dd>' +
          '<dt>1 2 3 4</dt><dd>Again, Hard, Good, Easy</dd>' +
          '<dt>A-Z or 1-9</dt><dd>Pick a multiple-choice option</dd>' +
        '</dl>' +
      '</section>'
    );

    view.querySelector('#newPerDay').addEventListener('change', function () {
      SRS.setSetting('newPerDay', Math.max(0, +this.value || 0));
      toast('Saved');
    });
    view.querySelector('#maxReviews').addEventListener('change', function () {
      SRS.setSetting('maxReviews', Math.max(0, +this.value || 0));
      toast('Saved');
    });
    view.querySelector('#shuffle').addEventListener('change', function () {
      SRS.setSetting('shuffle', this.checked);
      toast('Saved');
    });

    view.querySelector('[data-act="export"]').addEventListener('click', function () {
      var blob = new Blob([SRS.exportJSON()], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'alberts-progress-' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });

    var file = view.querySelector('#import-file');
    view.querySelector('[data-act="import"]').addEventListener('click', function () { file.click(); });
    file.addEventListener('change', function () {
      var f = file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var n = SRS.importJSON(reader.result);
          toast('Imported ' + n + ' cards of progress');
          viewSettings();
        } catch (e) {
          alert('Could not import that file: ' + e.message);
        }
      };
      reader.readAsText(f);
    });

    view.querySelector('[data-act="reset"]').addEventListener('click', function () {
      if (!confirm('Delete all scheduling and history? This cannot be undone.')) return;
      SRS.resetAll();
      toast('All progress cleared');
      viewSettings();
    });
  }

  /* ---------- theme ---------- */

  function applyTheme(mode) {
    if (mode === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', mode);
  }

  document.getElementById('theme-toggle').addEventListener('click', function () {
    var order = ['auto', 'light', 'dark'];
    var next = order[(order.indexOf(SRS.settings().theme) + 1) % order.length];
    SRS.setSetting('theme', next);
    applyTheme(next);
    toast('Theme: ' + next);
  });

  /* ---------- router ---------- */

  function route() {
    var hash = location.hash.replace(/^#/, '') || '/';
    var parts = hash.split('/').filter(Boolean);

    document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.remove('active'); });
    var navKey = parts[0] === 'study' ? 'study'
               : parts[0] === 'papers' || parts[0] === 'paper' ? 'papers'
               : parts[0] === 'settings' ? 'settings' : 'home';
    var nav = document.querySelector('[data-nav="' + navKey + '"]');
    if (nav) nav.classList.add('active');

    if (!state.loaded) return render('<div class="loading"><span class="spinner"></span> Loading…</div>');

    if (parts[0] === 'chapter' && parts[1]) return viewChapter(decodeURIComponent(parts[1]));
    if (parts[0] === 'cards' && parts[1]) return viewCards(decodeURIComponent(parts[1]));
    if (parts[0] === 'study' && parts[1]) return viewStudy(decodeURIComponent(parts[1]));
    if (parts[0] === 'paper' && parts[1]) return viewPaper(decodeURIComponent(parts[1]));
    if (parts[0] === 'papers') return viewPapers();
    if (parts[0] === 'settings') return viewSettings();
    return viewHome();
  }

  window.addEventListener('hashchange', route);
  document.addEventListener('keydown', onKey);

  applyTheme(SRS.settings().theme);
  render('<div class="loading"><span class="spinner"></span> Loading…</div>');
  loadAll().then(route);
})();
