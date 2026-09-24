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
 * MolMed revision is a third thing again: the Molecular Medicine course covers
 * some of these chapters in its own lectures, and each lecture has a deck of
 * cards written only from that lecture's slides, since that is what the exam
 * asks about. Those decks are scheduled separately from the book's own, so
 * revising for the exam never disturbs the reading. See the `molmed` section of
 * chapters.json, built from molmed/slides/ by build-manifest.py.
 *
 * The practice exam sits beside those decks: open questions per lecture, in the
 * style of the course's sample questions, answered in a text box and checked
 * against a model answer rather than scheduled. See exam.js.
 *
 * Hash routing keeps everything working on GitHub Pages with no server-side
 * rewrites:  #/ , #/chapter/<slug> , #/cards/<slug> , #/study/<slug|all> ,
 * #/papers , #/paper/<slug> , #/molmed , #/molmed/cards/<session> ,
 * #/molmed/study/<session|all> , #/molmed/exam ,
 * #/molmed/exam/<session|mock|official> , #/settings
 */
(function () {
  'use strict';

  var view = document.getElementById('view');
  var toastEl = document.getElementById('toast');
  var state = { manifest: null, chapters: null, molmed: [], molmedExam: null, loaded: false, error: null };
  var session = null;

  /* ---------- helpers ---------- */

  function esc(s) { return MD.escapeHtml(s); }

  // Write-ups render as an article: `##` is a top-level section (h2, under the
  // page's h1) and every heading gets an anchor so the sidebar can link to it.
  var NOTE_OPTS = { headingOffset: 0, minHeading: 2, ids: true };

  // The exam panel sits inside the molmed page rather than being a page of its
  // own, so its `##` sections render one level down, as h3.
  var PANEL_OPTS = { headingOffset: 1, minHeading: 3 };

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

  /* A question and its `Q+:` follow-ups travel as one unit. Grouping by the id
   * the parser assigned, rather than by adjacency, keeps chains intact when
   * cards from several decks are pooled together. */
  function groupsOf(cards) {
    var groups = [], byId = {};
    cards.forEach(function (card) {
      var key = card.group || card.id;
      if (!byId[key]) { byId[key] = []; groups.push(byId[key]); }
      byId[key].push(card);
    });
    return groups;
  }

  function flatten(groups) {
    return groups.reduce(function (out, g) { return out.concat(g); }, []);
  }

  /* The question a follow-up hangs off, looked up in the current session's pool. */
  function parentOf(card) {
    if (!card.followUp || !session) return null;
    for (var i = 0; i < session.pool.length; i++) {
      if (session.pool[i].id === card.group) return session.pool[i];
    }
    return null;
  }

  function excerpt(text, max) {
    text = (text || '').replace(/\s+/g, ' ').trim();
    return text.length > max ? text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…' : text;
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

  function sessionById(id) {
    for (var i = 0; i < state.molmed.length; i++) {
      if (state.molmed[i].id === id) return state.molmed[i];
    }
    return null;
  }

  function sessionCards(s) { return s && s.deck ? s.deck.cards : []; }

  function allMolmedCards() {
    return state.molmed.reduce(function (acc, s) { return acc.concat(sessionCards(s)); }, []);
  }

  function sessionQuestions(s) { return s && s.exam ? s.exam.cards : []; }

  function allQuestions() {
    return state.molmed.reduce(function (acc, s) { return acc.concat(sessionQuestions(s)); }, []);
  }

  function isOfficial(q) { return q.tags.indexOf('official') !== -1; }

  function isQA(q) { return q.tags.indexOf('qa') !== -1; }

  /* The written papers that have questions, in order: ['A'], later ['A', 'B']. */
  function examPapers() {
    var seen = [];
    state.molmed.forEach(function (s) {
      if (sessionQuestions(s).length && seen.indexOf(s.paper) === -1) seen.push(s.paper);
    });
    return seen.sort();
  }

  function paperName(paper) { return paper ? 'Part ' + paper : 'No paper set'; }

  // The same, mid-sentence: "Mock exam, part A".
  function paperLabel(paper) { return paper ? 'part ' + paper : 'no paper set'; }

  function mockHref(paper) { return '#/molmed/exam/mock-' + encodeURIComponent((paper || 'none').toLowerCase()); }

  /* The two written papers split the course: part A lists its sessions in the
   * exam details, everything else is part B. With no list, there is no split
   * and the page shows the sessions as one list, under paper ''. */
  function molmedPapers() {
    var split = state.molmed.some(function (s) { return s.paper; });
    return split ? ['A', 'B'] : [''];
  }

  function paperSessions(paper) {
    return state.molmed.filter(function (s) { return s.paper === paper; });
  }

  function paperFromSlug(slug) {
    var m = /^part-(\w+)$/.exec(slug || '');
    return m ? m[1].toUpperCase() : null;
  }

  /* What to call the deck a card came from, in a session pooling several decks.
   * A molmed card's deckId is `molmed:<session>`; a chapter card's is its slug. */
  function deckOwnerTitle(card) {
    if (!card) return '';
    if (card.deckId.indexOf('molmed:') === 0) {
      var s = sessionById(card.deckId.slice('molmed:'.length));
      return s ? sessionLabel(s) : '';
    }
    var ch = chapterBySlug(card.deckId);
    return ch ? ch.title : '';
  }

  /* "Session 3 · Ch 5" — short enough for a card corner, and says both the thing
   * you revise by (the lecture) and the thing it maps onto (the chapter). */
  function sessionLabel(s) {
    var tail = s.chapterNumber ? ' · Ch ' + s.chapterNumber + (s.part ? s.part : '') : '';
    return 'Session ' + s.id + tail;
  }

  function sessionTitle(s) {
    var ch = s.chapter ? chapterBySlug(s.chapter) : null;
    if (ch) return ch.title;
    if (s.kind === 'qa') return 'Q&A session';
    return s.title || sessionLabel(s);
  }

  function render(html) {
    // Navigating away destroys whatever iframe was playing, so bank its
    // position first: leaving a video by clicking a link is normal.
    stopWatching();
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

  /* One lecture of the Molecular Medicine course: its slides, and the revision
   * deck written from them. The deck id is namespaced with `molmed:` so its
   * cards get their own scheduling, separate from the chapter deck covering the
   * same material. */
  function loadMolmed(entry) {
    var session = {
      id: entry.session,
      lecturer: entry.lecturer || '',
      title: entry.title || '',
      part: entry.part || '',
      chapter: entry.chapter || null,
      chapterNumber: entry.chapterNumber || 0,
      kind: entry.kind || 'lecture',   // a Q&A or other session has no chapter
      slides: entry.slides || '',
      deck: null,
      exam: null,
      paper: entry.paper || ''     // which written paper examines it: A or B
    };
    var jobs = [];
    if (entry.deck) {
      jobs.push(getText('molmed/decks/' + entry.deck)
        .then(function (text) { session.deck = Deck.parse(text, 'molmed:' + entry.session, entry.deck); })
        .catch(function (e) { console.error('[molmed] deck failed for session ' + entry.session, e); }));
    }
    // Practice-exam questions share the deck format, so deck.js parses them,
    // but under an `exam:` id: they are never scheduled, only answered.
    if (entry.exam) {
      jobs.push(getText('molmed/exam/' + entry.exam)
        .then(function (text) { session.exam = Deck.parse(text, 'exam:' + entry.session, entry.exam); })
        .catch(function (e) { console.error('[molmed] exam questions failed for session ' + entry.session, e); }));
    }
    return Promise.all(jobs).then(function () { return session; });
  }

  function loadAll() {
    return getText('chapters.json')
      .then(function (text) { return JSON.parse(text); })
      .then(function (manifest) {
        state.manifest = manifest;
        // Metadata only. A paper's summary is fetched when you open it.
        Papers.init(manifest.papers);
        var slugs = (manifest.chapters || []).map(function (c) { return c.slug; });
        // videos.json is its own hand-edited file rather than part of the
        // manifest, and it is optional: if it fails, everything else still loads.
        var videos = Videos.load().then(function (data) { Videos.init(data, slugs); });
        var chapters = Promise.all((manifest.chapters || []).map(loadChapter));
        var molmed = Promise.all((manifest.molmed || []).map(loadMolmed));
        // The course's exam rules. Small, and wanted on the molmed page itself,
        // so it is fetched up front rather than on demand. Optional: if it is
        // missing the page simply does not show the panel.
        var exam = manifest.molmedExam
          ? getText('molmed/' + manifest.molmedExam)
              .then(function (text) { return MD.frontMatter(text); })
              .catch(function (e) { console.error('[molmed] exam details failed', e); return null; })
          : Promise.resolve(null);
        return Promise.all([videos, chapters, molmed, exam]);
      })
      .then(function (results) {
        state.chapters = results[1];
        state.molmed = results[2];
        state.molmedExam = results[3];
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
    var mm = SRS.counts(allMolmedCards());
    var molmedDue = mm.due + mm.learning;
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
            // MolMed cards are scheduled separately, so they would otherwise be
            // invisible from here until you went looking for them.
            (molmedDue
              ? '<a class="stat" href="#/molmed"><span class="stat-n">' + molmedDue + '</span><span class="stat-l">molmed due</span></a>'
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
      var nv = Videos.forChapter(ch.slug).length;

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
            (nv ? '<span class="muted small">' + nv + ' video' + (nv > 1 ? 's' : '') + '</span>' : '') +
            badges.join('') +
          '</div>' +
          (c.total ? '<div class="bar"><span style="width:' + (dp * 100).toFixed(1) + '%"></span></div>' : '') +
        '</div>' +
        '<div class="chapter-actions">' + actions.join('') + '</div>' +
      '</article>';
    }).join('');

    render(head + '<section class="chapter-list">' + list + '</section>');
  }

  /* ---------- chapter write-up ---------- */

  /* A third path segment, `#/chapter/<slug>/<heading-id>`, lands on one heading
   * of the write-up. That is what the "read more" link on a revision card uses,
   * so a card can point at the paragraphs it was condensed from. */
  function viewChapter(slug, anchor) {
    var ch = chapterBySlug(slug);
    if (!ch) return notFound('Chapter not found');
    if (!ch.notes) {
      return render(crumbs(ch.title) +
        '<div class="empty"><h2>' + esc(ch.title) + '</h2><p>No write-up for this chapter yet.</p>' +
        (cardsOf(ch).length ? '<p>' + studyLink(ch, 'btn btn-primary', 'Study the deck') + '</p>' : '') + '</div>' +
        chapterVideos(ch) +
        furtherReading(ch));
    }

    var c = SRS.counts(cardsOf(ch));
    var papers = Papers.forChapter(ch.slug).length;
    var videos = Videos.forChapter(ch.slug).length;
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
            (videos ? '<span>' + videos + ' video' + (videos > 1 ? 's' : '') + '</span>' : '') +
          '</p>' +
        '</header>' +
        '<div class="post-layout">' +
          '<nav class="toc" id="toc" aria-label="On this page"></nav>' +
          '<div class="prose" id="prose">' + body + '</div>' +
        '</div>' +
      '</article>' +
      (c.total ? practicePanel(ch, c) : '') +
      chapterVideos(ch) +
      furtherReading(ch) +
      chapterNav(slug)
    );

    buildToc();
    MD.typeset(view);
    if (anchor) requestAnimationFrame(function () { jumpTo(anchor); });
  }

  /* Scroll to a heading and flash it, so it is obvious where the jump landed in
   * what is often a very long page. An unknown id simply leaves you at the top. */
  function jumpTo(id) {
    var prose = view.querySelector('#prose');
    var target = prose && prose.querySelector('#' + CSS.escape(id));
    if (!target) return;
    target.scrollIntoView({ block: 'start' });
    target.classList.add('is-landed');
    setTimeout(function () { target.classList.remove('is-landed'); }, 2200);
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

  /* The searchable list of cards. Shared by a chapter deck and a molmed session
   * deck, which differ in what surrounds the list but not in the list itself.
   * Expects `#card-list` and `#search` to be in the rendered view already. */
  function paintCardList(cards) {
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
        return '<details class="browse-card' + (card.followUp ? ' is-follow-up' : '') + '">' +
          '<summary>' +
            '<span class="browse-front">' + MD.render(card.front || '(choices only)') + '</span>' +
            '<span class="browse-meta">' +
              (card.followUp ? '<span class="tag tag-follow-up">follow-up</span>' : '') +
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

    paintCardList(cards);
    view.querySelector('[data-act="reset-deck"]').addEventListener('click', function () {
      if (!confirm('Reset scheduling for all ' + cards.length + ' cards in “' + ch.title + '”?')) return;
      SRS.resetDeck(cards);
      toast('Progress reset for this chapter');
      viewCards(slug);
    });
  }

  /* ---------- molmed revision ---------- */

  function molmedCrumbs(leaf) {
    return '<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> ' +
      (leaf ? '<a href="#/molmed">MolMed revision</a> <span>/</span> ' + esc(leaf) : 'MolMed revision') +
    '</div>';
  }

  /* The course's own rules about the exam: format, marking and what is in scope.
   * Collapsed by default, because it is reference material you consult a few
   * times a term rather than something you read on the way to studying. */
  function examPanel() {
    var doc = state.molmedExam;
    if (!doc || !doc.body.trim()) return '';
    return '<details class="exam-panel">' +
      '<summary>' +
        '<span class="exam-title">' + esc(doc.meta.title || 'Exam details') + '</span>' +
        (doc.meta.description ? '<span class="exam-sub">' + esc(doc.meta.description) + '</span>' : '') +
      '</summary>' +
      '<div class="prose">' + MD.render(doc.body, PANEL_OPTS) + '</div>' +
    '</details>';
  }

  function viewMolmed() {
    if (!state.molmed.length) {
      return render(molmedCrumbs('') +
        '<div class="empty"><h2>No sessions yet</h2>' +
        '<p>Drop a lecture\u2019s slides in <code>molmed/slides/</code>, named ' +
        '<code>Session &lt;n&gt; - &lt;lecturer&gt;_&lt;title&gt;_Ch &lt;n&gt;.pdf</code>, then run ' +
        '<code>python3 build-manifest.py</code>.</p></div>');
    }

    var cards = allMolmedCards();
    var total = SRS.counts(cards);
    var pct = total.total ? total.seen / total.total : 0;
    var withDeck = state.molmed.filter(function (s) { return sessionCards(s).length; }).length;

    var head =
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<h1>MolMed revision</h1>' +
          '<p class="sub">The chapters the Molecular Medicine course lectures, with a deck per session ' +
            'written only from that session\u2019s slides \u2014 which is what the exam asks about.</p>' +
          '<div class="stat-row">' +
            '<div class="stat"><span class="stat-n">' + state.molmed.length + '</span><span class="stat-l">sessions</span></div>' +
            '<div class="stat"><span class="stat-n">' + withDeck + '</span><span class="stat-l">with cards</span></div>' +
            '<div class="stat"><span class="stat-n">' + (total.due + total.learning) + '</span><span class="stat-l">due now</span></div>' +
            '<div class="stat"><span class="stat-n">' + total.new + '</span><span class="stat-l">unseen</span></div>' +
          '</div>' +
          (total.due + total.learning + total.new
            ? '<a class="btn btn-primary btn-lg" href="#/molmed/study/all">Study everything due</a>'
            : '<span class="muted">Nothing due across the course.</span>') +
        '</div>' +
        '<div class="hero-ring">' + progressRing(pct) +
          '<div class="ring-label"><b>' + Math.round(pct * 100) + '%</b><span>introduced</span></div>' +
        '</div>' +
      '</section>';

    function sessionRow(s) {
      var c = SRS.counts(sessionCards(s));
      var dp = c.total ? c.seen / c.total : 0;
      var ch = s.chapter ? chapterBySlug(s.chapter) : null;

      var badges = [];
      if (c.due + c.learning) badges.push('<span class="pill pill-due">' + (c.due + c.learning) + ' due</span>');
      if (c.new) badges.push('<span class="pill pill-new">' + c.new + ' new</span>');
      if (c.total && !c.new && !(c.due + c.learning)) badges.push('<span class="pill pill-done">caught up</span>');
      // A session with no chapter (the Q&A) never gets a deck, so it is not "missing" one.
      if (!c.total && s.chapter) badges.push('<span class="pill pill-todo">no cards yet</span>');
      var nqa = s.kind === 'qa' ? allQuestions().filter(isQA).length : 0;

      var actions = [];
      if (c.total) {
        actions.push('<a class="btn btn-sm btn-primary" href="#/molmed/study/' + encodeURIComponent(s.id) + '">Study</a>');
        actions.push('<a class="btn btn-sm" href="#/molmed/cards/' + encodeURIComponent(s.id) + '">Cards</a>');
      }
      if (sessionQuestions(s).length) {
        actions.push('<a class="btn btn-sm" href="#/molmed/exam/' + encodeURIComponent(s.id) + '">Exam</a>');
      }
      if (nqa) actions.push('<a class="btn btn-sm btn-primary" href="#/molmed/exam/qa">Q&amp;A questions</a>');
      if (ch && ch.notes) actions.push('<a class="btn btn-sm" href="#/chapter/' + encodeURIComponent(ch.slug) + '">Write-up</a>');

      var nq = sessionQuestions(s).length + nqa;
      var meta = [];
      if (s.lecturer) meta.push('<span class="muted small">' + esc(s.lecturer) + '</span>');
      if (c.total) meta.push('<span class="muted small">' + c.total + ' cards</span>');
      if (nq) meta.push('<span class="muted small">' + nq + ' exam question' + (nq > 1 ? 's' : '') + '</span>');
      if (s.slides) meta.push('<a class="small" href="' + esc(encodeURI(s.slides)) + '" target="_blank" rel="noopener">Slides \u2197</a>');

      var href = c.total ? '#/molmed/cards/' + encodeURIComponent(s.id)
                         : ch && ch.notes ? '#/chapter/' + encodeURIComponent(ch.slug)
                         : nqa ? '#/molmed/exam/qa' : '#/molmed';
      var sub = s.kind === 'qa'
        ? 'Exam-style questions worked through in class, now in the practice exam with model answers'
        : s.title;

      return '<article class="chapter">' +
        '<div class="chapter-n">' + esc(s.id) + '</div>' +
        '<div class="chapter-main">' +
          '<a class="chapter-head" href="' + href + '">' +
            '<h3>' + esc(sessionTitle(s)) + '</h3>' +
            (sub ? '<p>' + esc(sub) + '</p>' : '') +
          '</a>' +
          '<div class="chapter-meta">' + meta.join('') + badges.join('') + '</div>' +
          (c.total ? '<div class="bar"><span style="width:' + (dp * 100).toFixed(1) + '%"></span></div>' : '') +
        '</div>' +
        '<div class="chapter-actions">' + actions.join('') + '</div>' +
      '</article>';
    }

    var papers = molmedPapers();
    var parts = papers.map(function (paper) {
      var rows = paperSessions(paper).map(sessionRow).join('');
      return paper ? paperSection(paper, rows) : '<section class="chapter-list">' + rows + '</section>';
    }).join('');

    // The exam details govern both papers, so they sit above the split.
    render(molmedCrumbs('') + head + examPanel() + parts);
    MD.typeset(view);
  }

  /* One written paper: its lectures, what is due in them, and its own study
   * and practice-exam entry points. */
  function paperSection(paper, rows) {
    var sessions = paperSessions(paper);
    var slug = 'part-' + paper.toLowerCase();
    var c = SRS.counts(sessions.reduce(function (acc, s) { return acc.concat(sessionCards(s)); }, []));
    var qs = sessions.reduce(function (acc, s) { return acc.concat(sessionQuestions(s)); }, []);
    var due = c.due + c.learning;

    var facts = [];
    if (sessions.length) {
      facts.push(sessions.length + ' session' + (sessions.length > 1 ? 's' : '') +
        (sessions.length > 1 ? ', ' + sessions[0].id + ' to ' + sessions[sessions.length - 1].id : ', session ' + sessions[0].id));
    }
    if (c.total) facts.push(c.total + ' cards');
    if (due) facts.push(due + ' due');
    if (qs.length) facts.push(qs.length + ' exam questions');

    var actions = [];
    if (due + c.new) actions.push('<a class="btn btn-sm btn-primary" href="#/molmed/study/' + slug + '">Study ' + esc(paperLabel(paper)) + '</a>');
    if (qs.length) {
      actions.push('<a class="btn btn-sm" href="' + mockHref(paper) + '">Mock exam</a>');
      actions.push('<a class="btn btn-sm" href="#/molmed/exam/' + slug + '">All exam questions</a>');
    }

    return '<section class="molmed-paper">' +
      '<div class="paper-bar">' +
        '<div>' +
          '<h2>' + esc(paperName(paper)) + '</h2>' +
          (facts.length ? '<p class="muted small">' + esc(facts.join(' \u00b7 ')) + '</p>' : '') +
        '</div>' +
        (actions.length ? '<div class="row">' + actions.join('') + '</div>' : '') +
      '</div>' +
      (rows
        ? '<div class="chapter-list">' + rows + '</div>'
        : '<div class="empty small paper-empty"><p>No lectures yet. ' + esc(paperName(paper)) +
          ' examines the lectures still to come; each appears here once its slides are in <code>molmed/slides/</code>.</p></div>') +
    '</section>';
  }

  function viewMolmedCards(id) {
    var s = sessionById(id);
    if (!s) return notFound('Session not found');
    var cards = sessionCards(s);
    if (!cards.length) {
      return render(molmedCrumbs(sessionLabel(s)) +
        '<div class="empty"><h2>No cards yet</h2>' +
        '<p>Add <code>molmed/decks/' + esc(s.id + '-' + (s.chapter || '')) + '.md</code> to build this deck.</p></div>');
    }
    var c = SRS.counts(cards);

    render(
      molmedCrumbs(sessionLabel(s)) +
      '<section class="page-head">' +
        '<div>' +
          '<h1>' + esc(sessionTitle(s)) + '</h1>' +
          '<p class="muted">' + esc(sessionLabel(s)) + (s.lecturer ? ' \u00b7 ' + esc(s.lecturer) : '') + ' \u2014 ' +
            c.total + ' cards, ' + c.new + ' new, ' + (c.due + c.learning) + ' due, ' + c.later + ' scheduled</p>' +
        '</div>' +
        '<div class="page-head-actions">' +
          '<a class="btn btn-primary" href="#/molmed/study/' + encodeURIComponent(s.id) + '">Study</a>' +
          '<button class="btn" type="button" data-act="reset-deck">Reset progress</button>' +
        '</div>' +
      '</section>' +
      '<div class="toolbar"><input id="search" class="input" type="search" placeholder="Search these cards\u2026" autocomplete="off"></div>' +
      '<section id="card-list" class="card-list"></section>'
    );

    paintCardList(cards);
    view.querySelector('[data-act="reset-deck"]').addEventListener('click', function () {
      if (!confirm('Reset scheduling for all ' + cards.length + ' cards in this session?')) return;
      SRS.resetDeck(cards);
      toast('Progress reset for this session');
      viewMolmedCards(id);
    });
  }

  /* ---------- practice exam ---------- */

  /* Open questions per lecture, answered in your own words. Nothing here is
   * scheduled: you write an answer, reveal the model answer, and score yourself
   * out of 10, as the paper does. What you wrote and scored is kept by exam.js. */

  var run = null;    // the practice run in progress: { scope, title, list, i, revealed }
  var saveTimer = null;

  function examCrumbs(leaf) {
    return '<div class="crumbs"><a href="#/">Chapters</a> <span>/</span> ' +
      '<a href="#/molmed">MolMed revision</a> <span>/</span> ' +
      (leaf ? '<a href="#/molmed/exam">Practice exam</a> <span>/</span> ' + esc(leaf) : 'Practice exam') +
    '</div>';
  }

  /* A question's opening, for lists: the stem up to its first **a)** part,
   * without figures or tables. The "Official sample question" lead-in stays,
   * since it is useful to see which ones those are. */
  function questionTitle(q) {
    var stem = q.front
      .replace(/\*\*[a-z]\)\*\*[\s\S]*$/, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/^\|.*$/gm, '');
    return excerpt(MD.plain(stem), 150);
  }

  function questionSession(q) {
    return sessionById(q.deckId.slice('exam:'.length));
  }

  /* Three bands, so a list of scores can be scanned by colour: full or nearly,
   * a pass, and under half, which is what to revisit. */
  function scoreBand(score) { return score >= 8 ? 'good' : score >= 5 ? 'mid' : 'low'; }

  function scorePill(score) {
    if (score === null) return '';
    return '<span class="pill pill-score-' + scoreBand(score) + '">' + score + '/' + Exam.MAX + '</span>';
  }

  function oneDecimal(x) { return (Math.round(x * 10) / 10).toFixed(1).replace(/\.0$/, ''); }

  function scoreTally(c) {
    if (!c.scored) return '<span class="pill pill-todo">not started</span>';
    var avg = c.points / c.scored;
    return '<span class="pill pill-score-' + scoreBand(avg) + '">avg ' + oneDecimal(avg) + '/' + Exam.MAX + '</span>' +
      (c.low ? '<span class="pill pill-score-low">' + c.low + ' to revisit</span>' : '') +
      (c.scored < c.total ? '<span class="muted small">' + c.scored + ' of ' + c.total + ' scored</span>' : '');
  }

  /* The questions a scope stands for. A mock exam mirrors the real paper: one
   * question per lecture, drawn at random, in lecture order. */
  function examScope(scope) {
    // `mock-a` is the mock for paper A; a bare `mock` means the first paper.
    var mock = /^mock(?:-(\w+))?$/.exec(scope);
    if (mock) {
      var paper = mock[1] ? (mock[1] === 'none' ? '' : mock[1].toUpperCase()) : (examPapers()[0] || '');
      var picks = state.molmed.filter(function (s) { return s.paper === paper; }).map(function (s) {
        var qs = sessionQuestions(s);
        return qs.length ? qs[Math.floor(Math.random() * qs.length)] : null;
      }).filter(Boolean);
      return { title: 'Mock exam, ' + paperLabel(paper), list: picks, pooled: true, mock: true };
    }
    var part = paperFromSlug(scope);
    if (part) {
      return {
        title: paperName(part) + ', all questions',
        list: paperSessions(part).reduce(function (acc, s) { return acc.concat(sessionQuestions(s)); }, []),
        pooled: true
      };
    }
    if (scope === 'official') {
      return { title: 'Official sample questions', list: allQuestions().filter(isOfficial), pooled: true };
    }
    if (scope === 'qa') {
      return { title: 'Q&A session questions', list: allQuestions().filter(isQA), pooled: true };
    }
    var s = sessionById(scope);
    if (!s) return null;
    return { title: sessionTitle(s), list: sessionQuestions(s), pooled: false, session: s };
  }

  function viewExamHome() {
    var qs = allQuestions();
    if (!qs.length) {
      return render(examCrumbs('') +
        '<div class="empty"><h2>No practice questions yet</h2>' +
        '<p>Add <code>molmed/exam/&lt;session&gt;-&lt;chapter-slug&gt;.md</code>, in the deck format, ' +
        'then run <code>python3 build-manifest.py</code>.</p></div>');
    }
    var c = Exam.counts(qs);
    var official = qs.filter(isOfficial).length;
    var qa = qs.filter(isQA).length;
    var papers = examPapers();

    function modeCard(href, title, sub) {
      return '<a class="exam-mode" href="' + href + '">' +
        '<span class="exam-mode-title">' + esc(title) + '</span>' +
        '<span class="exam-mode-sub">' + esc(sub) + '</span>' +
      '</a>';
    }

    var head =
      '<section class="page-head">' +
        '<div>' +
          '<h1>Practice exam</h1>' +
          '<p class="muted exam-intro">Open questions in the style of the course’s sample questions. ' +
            'Write your answer as you would on the paper, then reveal the model answer and score yourself out of 10, ' +
            'as each question on the paper is scored. Your answers stay in this browser.</p>' +
          '<div class="stat-row">' +
            '<div class="stat"><span class="stat-n">' + qs.length + '</span><span class="stat-l">questions</span></div>' +
            '<div class="stat"><span class="stat-n">' + c.written + '</span><span class="stat-l">answered</span></div>' +
            '<div class="stat"><span class="stat-n">' + (c.scored ? oneDecimal(c.points / c.scored) : '–') + '</span><span class="stat-l">average /10</span></div>' +
            '<div class="stat"><span class="stat-n">' + c.low + '</span><span class="stat-l">to revisit</span></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="exam-modes">' +
        papers.map(function (paper) {
          var n = state.molmed.filter(function (s) { return s.paper === paper && sessionQuestions(s).length; }).length;
          return modeCard(mockHref(paper), 'Mock exam, ' + paperLabel(paper),
            n + ' questions, one per lecture of ' + paperName(paper) + ', drawn at random and scored out of ' + (n * Exam.MAX) + ', as on the real paper.');
        }).join('') +
        (official ? modeCard('#/molmed/exam/official', 'Official sample questions',
          'The ' + official + ' questions the course released, with model answers.') : '') +
        (qa ? modeCard('#/molmed/exam/qa', 'Q&A session questions',
          'The ' + qa + ' questions worked through in the Q&A session, in the lecturers’ wording.') : '') +
      '</section>';

    function sessionRow(s) {
      var sq = sessionQuestions(s);
      var sc = Exam.counts(sq);
      var dp = sc.total ? sc.scored / sc.total : 0;
      var off = sq.filter(isOfficial).length;
      var nqa = sq.filter(isQA).length;
      return '<article class="chapter">' +
        '<div class="chapter-n">' + esc(s.id) + '</div>' +
        '<div class="chapter-main">' +
          '<a class="chapter-head" href="#/molmed/exam/' + encodeURIComponent(s.id) + '">' +
            '<h3>' + esc(sessionTitle(s)) + '</h3>' +
            (s.title ? '<p>' + esc(s.title) + '</p>' : '') +
          '</a>' +
          '<div class="chapter-meta">' +
            '<span class="muted small">' + sq.length + ' questions</span>' +
            (off ? '<span class="pill pill-new">' + off + ' official</span>' : '') +
            (nqa ? '<span class="pill pill-new">' + nqa + ' from Q&amp;A</span>' : '') +
            scoreTally(sc) +
          '</div>' +
          '<div class="bar"><span style="width:' + (dp * 100).toFixed(1) + '%"></span></div>' +
        '</div>' +
        '<div class="chapter-actions">' +
          '<a class="btn btn-sm btn-primary" href="#/molmed/exam/' + encodeURIComponent(s.id) + '">Practise</a>' +
        '</div>' +
      '</article>';
    }

    // One block per written paper, since each is its own exam. A paper with no
    // questions yet still gets its block, so the split reads the same as on the
    // molmed page.
    var list = molmedPapers().map(function (paper) {
      var sessions = paperSessions(paper).filter(function (s) { return sessionQuestions(s).length; });
      var pc = Exam.counts(sessions.reduce(function (acc, s) { return acc.concat(sessionQuestions(s)); }, []));
      if (!paper) return '<section class="chapter-list">' + sessions.map(sessionRow).join('') + '</section>';
      return '<section class="exam-paper">' +
        '<div class="reading-head">' +
          '<h2>' + esc(paperName(paper)) + '</h2>' +
          (pc.total
            ? '<span class="small muted">' + sessions.length + ' lectures · ' + pc.total + ' questions · ' + pc.scored + ' scored · ' +
              '<a href="#/molmed/exam/part-' + paper.toLowerCase() + '">Work through all</a></span>'
            : '') +
        '</div>' +
        (sessions.length
          ? '<div class="chapter-list">' + sessions.map(sessionRow).join('') + '</div>'
          : '<div class="empty small paper-empty"><p>No questions for ' + esc(paperName(paper)) + ' yet.</p></div>') +
      '</section>';
    }).join('');

    render(examCrumbs('') + head + list);
  }

  /* Coming back to the same scope keeps the run, so a mock exam keeps its
   * draw and you land on the question you left. */
  function viewExamRun(scope) {
    // A finished run starts over; for a mock exam that means a fresh draw.
    if (run && run.scope === scope && run.i >= run.list.length) run = null;
    if (!run || run.scope !== scope) {
      var sc = examScope(scope);
      if (!sc) return notFound('Session not found');
      if (!sc.list.length) {
        return render(examCrumbs(sc.title) +
          '<div class="empty"><h2>No questions here yet</h2><p><a href="#/molmed/exam">Back to the practice exam</a></p></div>');
      }
      run = { scope: scope, title: sc.title, list: sc.list, pooled: sc.pooled, mock: !!sc.mock, i: 0, revealed: false };
    }
    run.revealed = false;
    drawExam();
  }

  function saveDraft() {
    clearTimeout(saveTimer);
    saveTimer = null;
    var box = view.querySelector('#exam-answer');
    if (box && run && run.list[run.i]) Exam.setText(run.list[run.i].id, box.value);
  }

  function goTo(i) {
    saveDraft();
    run.i = i;
    run.revealed = false;
    if (run.i >= run.list.length) return examDone();
    drawExam();
  }

  function drawExam() {
    var q = run.list[run.i];
    var s = questionSession(q);
    var n = run.list.length;
    var pct = (run.i / n) * 100;
    var owner = [];
    if (s) owner.push(sessionLabel(s));
    if (s && s.lecturer) owner.push(s.lecturer);
    if (isOfficial(q)) owner.push('Official sample question');
    else if (isQA(q)) owner.push('From the Q&A session');
    var prev = Exam.score(q.id);

    render(
      '<section class="study exam-run">' +
        '<div class="study-top">' +
          '<a class="back" href="#/molmed/exam">← ' + esc(run.title) + '</a>' +
          '<div class="study-counts">' +
            (prev !== null ? '<span class="muted small">Last time</span>' + scorePill(prev) : '') +
            '<span class="muted">' + (run.i + 1) + ' / ' + n + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="bar thin"><span style="width:' + pct.toFixed(1) + '%"></span></div>' +
        '<article class="card exam-card">' +
          '<div class="card-deck">' + esc(owner.join(' · ')) + '</div>' +
          '<div class="card-front">' + MD.render(q.front) + '</div>' +
        '</article>' +
        '<section class="exam-work">' +
          '<label class="exam-label" for="exam-answer">Your answer</label>' +
          '<textarea id="exam-answer" class="input exam-answer" rows="9" spellcheck="true" ' +
            'placeholder="Write your answer as you would on the paper: brief, but not too brief, and always explained. It is saved in this browser as you type.">' +
            esc(Exam.text(q.id)) + '</textarea>' +
        '</section>' +
        '<div id="exam-model"></div>' +
        '<div class="controls" id="exam-controls"></div>' +
        '<nav class="exam-nav">' +
          '<button class="btn" type="button" data-act="prev"' + (run.i ? '' : ' disabled') + '>← Previous</button>' +
          '<button class="btn" type="button" data-act="next">' + (run.i + 1 < n ? 'Next →' : 'Finish') + '</button>' +
        '</nav>' +
        '<p class="hints" id="exam-hints"></p>' +
      '</section>'
    );

    var box = view.querySelector('#exam-answer');
    box.addEventListener('input', function () {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveDraft, 400);
    });
    box.addEventListener('blur', saveDraft);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); revealModel(); }
    });
    view.querySelector('[data-act="prev"]').addEventListener('click', function () { if (run.i) goTo(run.i - 1); });
    view.querySelector('[data-act="next"]').addEventListener('click', function () { goTo(run.i + 1); });

    drawExamControls();
  }

  function drawExamControls() {
    var controls = view.querySelector('#exam-controls');
    var hints = view.querySelector('#exam-hints');
    var q = run.list[run.i];
    if (!run.revealed) {
      controls.innerHTML = '<button class="btn btn-primary btn-lg" type="button" data-act="reveal">Show model answer</button>';
      controls.querySelector('[data-act="reveal"]').addEventListener('click', revealModel);
      hints.textContent = 'Ctrl+Enter in the answer box to reveal';
      return;
    }
    var current = Exam.score(q.id);
    var buttons = [];
    for (var p = 0; p <= Exam.MAX; p++) {
      buttons.push('<button class="btn exam-score exam-score-' + scoreBand(p) + (current === p ? ' is-on' : '') + '" type="button" ' +
        'data-score="' + p + '" aria-pressed="' + (current === p) + '">' + p + '</button>');
    }
    controls.innerHTML =
      '<div class="exam-marking">' +
        '<p class="exam-marking-q">How many of the 10 points would your answer earn?</p>' +
        '<div class="exam-scores" role="group" aria-label="Score out of 10">' + buttons.join('') + '</div>' +
      '</div>';
    controls.querySelectorAll('[data-score]').forEach(function (btn) {
      btn.addEventListener('click', function () { setExamScore(+btn.dataset.score); });
    });
    hints.textContent = '0 to 9 to score, F for full marks, then → for the next question';
  }

  function setExamScore(p) {
    var q = run.list[run.i];
    // Pressing the score that is already on clears it, so a slip can be undone.
    Exam.setScore(q.id, Exam.score(q.id) === p ? null : p);
    drawExamControls();
  }

  /* A model answer opens with an **In brief:** paragraph, what a full-marks
   * answer needs; it is set apart so it can be checked at a glance before
   * reading the full explanation. */
  function modelAnswerHTML(back) {
    var m = /^\*\*In brief:\*\*\s*([\s\S]*?)(?:\n\s*\n([\s\S]*))?$/.exec(back);
    if (!m) return '<div class="answer">' + MD.render(back) + '</div>';
    return '<div class="exam-brief"><span class="exam-brief-head">In brief</span>' + MD.render(m[1]) + '</div>' +
      (m[2] ? '<div class="answer">' + MD.render(m[2]) + '</div>' : '');
  }

  function revealModel() {
    if (!run || run.revealed) return;
    saveDraft();
    run.revealed = true;
    var q = run.list[run.i];
    var model = view.querySelector('#exam-model');
    model.innerHTML =
      '<section class="exam-model">' +
        '<h2 class="exam-model-head">Model answer</h2>' +
        modelAnswerHTML(q.back) +
      '</section>';
    MD.typeset(model);
    drawExamControls();
    model.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function examDone() {
    var c = Exam.counts(run.list);
    var rows = run.list.map(function (q, i) {
      var s = questionSession(q);
      return '<li class="exam-done-row">' +
        '<button class="exam-done-link" type="button" data-go="' + i + '">' +
          '<span class="exam-done-n">' + (i + 1) + '</span>' +
          '<span class="exam-done-text">' +
            (run.pooled && s ? '<span class="exam-done-owner">' + esc(sessionLabel(s)) + '</span>' : '') +
            esc(questionTitle(q)) +
          '</span>' +
        '</button>' +
        (scorePill(Exam.score(q.id)) || '<span class="pill pill-todo">not scored</span>') +
      '</li>';
    }).join('');

    // A mock is marked like the paper: every question counts, an unscored one
    // as zero, and the grade is the share of the total times ten.
    var max = run.list.length * Exam.MAX;
    var grade = Exam.grade(c.points, max);
    var passLine = Math.ceil(max * Exam.PASS);
    var verdict = run.mock
      ? '<p class="sub exam-verdict exam-verdict-' + (grade >= 5.5 ? 'pass' : 'fail') + '">' +
          c.points + ' of ' + max + ' points: a <b>' + oneDecimal(grade) + '</b>. ' +
          (grade >= 5.5 ? 'That passes' : 'That is below the pass') + ' (' + passLine + ' points gives a 5.5).' +
          (c.scored < c.total ? ' ' + (c.total - c.scored) + ' unscored question' + (c.total - c.scored > 1 ? 's count' : ' counts') + ' as zero.' : '') +
        '</p>'
      : (c.scored ? '<p class="sub">Average ' + oneDecimal(c.points / c.scored) + ' out of 10 over ' + c.scored + ' scored question' + (c.scored > 1 ? 's' : '') + '.</p>' : '');

    render(
      '<section class="done exam-done">' +
        '<div class="done-mark">✓</div>' +
        '<h1>' + esc(run.title) + ' done</h1>' +
        verdict +
        '<div class="stat-row centered">' +
          '<div class="stat"><span class="stat-n">' + c.points + '/' + (run.mock ? max : c.max) + '</span><span class="stat-l">points</span></div>' +
          '<div class="stat"><span class="stat-n">' + c.full + '</span><span class="stat-l">full marks</span></div>' +
          '<div class="stat"><span class="stat-n">' + c.low + '</span><span class="stat-l">under 5</span></div>' +
          '<div class="stat"><span class="stat-n">' + (c.total - c.scored) + '</span><span class="stat-l">not scored</span></div>' +
        '</div>' +
        '<ol class="exam-done-list">' + rows + '</ol>' +
        '<div class="done-actions">' +
          '<a class="btn btn-primary" href="#/molmed/exam">Back to practice exam</a>' +
          (run.mock
            ? '<button class="btn" type="button" data-act="redraw">New mock exam</button>'
            : '<button class="btn" type="button" data-act="restart">Start again</button>') +
        '</div>' +
      '</section>'
    );

    view.querySelectorAll('[data-go]').forEach(function (btn) {
      btn.addEventListener('click', function () { goTo(+btn.dataset.go); });
    });
    var again = view.querySelector('[data-act="restart"]');
    if (again) again.addEventListener('click', function () { goTo(0); });
    var redraw = view.querySelector('[data-act="redraw"]');
    if (redraw) redraw.addEventListener('click', function () { var sc = run.scope; run = null; viewExamRun(sc); });
  }

  /* Keys only act outside the answer box, so typing a digit or an arrow in your
   * answer never scores or skips anything. */
  function onExamKey(e) {
    if (!run || e.metaKey || e.ctrlKey || e.altKey) return;
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (!view.querySelector('.exam-run')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(run.i + 1); return; }
    if (e.key === 'ArrowLeft' && run.i) { e.preventDefault(); goTo(run.i - 1); return; }
    if (!run.revealed) return;
    if (/^[0-9]$/.test(e.key)) { e.preventDefault(); setExamScore(+e.key); }
    else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); setExamScore(Exam.MAX); }
  }

  // Leaving mid-sentence is normal; the debounce must not eat the last words.
  window.addEventListener('pagehide', function () { if (saveTimer) saveDraft(); });

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

  /* ---------- videos ---------- */

  // A video renders as a facade, not an iframe: the poster image with a play
  // button over it. The iframe is created on click, so opening a chapter costs
  // one image per video rather than a whole embedded player each.
  //
  // The facade is its own function because collapsing a card puts it back, not
  // only because the card is built from it.
  // Past this much, a video counts as finished: the bar fills and the next
  // click starts it over rather than dropping you into the closing credits.
  var WATCHED = 0.97;
  // Below this, resuming is more annoying than helpful — you have watched a
  // title card, and being put back there feels like the click did nothing.
  var RESUME_MIN = 15;

  /* Where a click should start the video, and what the button should say. */
  function resumePoint(v) {
    var rec = Videos.progress(v.key);
    var frac = Videos.fraction(rec, v.seconds);
    var at = (frac > 0 && frac < WATCHED && rec.t >= RESUME_MIN) ? rec.t : 0;
    return { frac: frac, at: at, done: frac >= WATCHED };
  }

  function videoFacade(v) {
    // alt="" on purpose: the heading next to it already names the video, so a
    // second copy would just be read out twice.
    var poster = v.thumb
      ? '<img class="video-thumb" src="' + esc(v.thumb) + '" alt="" loading="lazy" decoding="async"' +
        (v.thumbFallback ? ' data-thumb-fallback="' + esc(v.thumbFallback) + '"' : '') + '>'
      : '';

    var p = resumePoint(v);
    var hint = p.at ? 'Resume ' + Videos.clock(p.at) : (p.done ? 'Watch again' : 'Play here');
    var label = p.at ? 'Resume ' + v.title + ' at ' + Videos.clock(p.at) : 'Play ' + v.title;

    // Drawn last so it sits over the scrim. aria-hidden because the button it
    // covers already says "Resume 8:12", which is the same fact in words.
    var bar = p.frac > 0
      // A finished video is drawn full rather than at its true 99.4%: the
      // sliver of track left over reads as a glitch, not as "nearly done".
      ? '<div class="video-progress' + (p.done ? ' is-done' : '') + '" aria-hidden="true">' +
          '<span style="width:' + (p.done ? '100' : (p.frac * 100).toFixed(2)) + '%"></span>' +
        '</div>'
      : '';

    var body = v.embed
      ? '<button class="video-play" type="button" data-video="' + esc(v.id) + '" ' +
          'aria-label="' + esc(label) + '">' +
          '<span class="video-play-mark" aria-hidden="true">▶</span>' +
          '<span class="video-play-hint">' + esc(hint) + '</span>' +
        '</button>'
      : '<a class="video-play video-play-out" href="' + esc(v.watch) + '" target="_blank" rel="noopener">' +
          '<span class="video-play-mark" aria-hidden="true">↗</span>' +
          '<span class="video-play-hint">Open</span>' +
        '</a>';

    return poster + body + bar;
  }

  function frameClass(v) { return 'video-frame' + (v.thumb ? ' has-thumb' : ''); }

  function videoCard(v) {
    var meta = [];
    if (v.source) meta.push(esc(v.source));
    if (v.duration) meta.push(esc(v.duration));

    return '<article class="video-row" data-video-row="' + esc(v.id) + '">' +
      '<div class="' + frameClass(v) + '">' + videoFacade(v) + '</div>' +
      '<div class="video-body">' +
        '<h3>' + esc(v.title) + '</h3>' +
        (meta.length ? '<p class="video-cite">' + meta.join(' · ') + '</p>' : '') +
        (v.description ? '<p class="video-note">' + esc(v.description) + '</p>' : '') +
        (v.tags.length
          ? '<div class="video-tail">' + v.tags.map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('') + '</div>'
          : '') +
      '</div>' +
      (v.watch ? '<a class="paper-out" href="' + esc(v.watch) + '" target="_blank" rel="noopener" ' +
        'title="Open on ' + esc(v.provider || 'the source site') + '">Source ↗</a>' : '') +
    '</article>';
  }

  /* ---- watch progress ----
   *
   * With enablejsapi=1 the embed reports where the player has got to over
   * postMessage. We speak that protocol directly rather than loading YouTube's
   * player API script, which would pull a third-party script onto every page
   * and undo the point of the facade. The message format is YouTube's own and
   * undocumented, so nothing here trusts it: every field is checked, and if
   * they ever change it the cost is a bar that stops filling.
   */

  var YT_ORIGINS = ['https://www.youtube-nocookie.com', 'https://www.youtube.com'];
  var live = null;   // the one playing video, or null

  function tell(win, msg) {
    try { win.postMessage(JSON.stringify(msg), '*'); } catch (e) { /* gone */ }
  }

  function beginWatching(frame, v) {
    var f = frame.querySelector('iframe');
    if (!f || !v.key) return;
    live = { key: v.key, frame: f, t: 0, d: v.seconds || 0, heard: false, ticks: 0 };

    // The player answers only once it has loaded, and there is no event for
    // that from out here, so we keep saying hello until it replies. Twenty
    // tries is ten seconds; past that it is not going to.
    live.timer = setInterval(function () {
      if (!live) return;
      live.ticks++;
      if (!live.heard) {
        if (live.ticks <= 20 && f.contentWindow) {
          tell(f.contentWindow, { event: 'listening', id: 1, channel: 'widget' });
        }
      } else if (live.ticks % 20 === 0) {
        Videos.flush();   // roughly every ten seconds, not on every message
      }
    }, 500);
  }

  // Called whenever the iframe goes away: another video, a new page, or the
  // tab closing. This is the write that makes progress survive the session.
  function stopWatching() {
    if (!live) return;
    clearInterval(live.timer);
    if (live.t) { Videos.mark(live.key, live.t, live.d); Videos.flush(); }
    live = null;
  }

  window.addEventListener('message', function (e) {
    if (!live || YT_ORIGINS.indexOf(e.origin) === -1) return;
    var d;
    try { d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data; } catch (err) { return; }
    if (!d || !d.info) return;

    live.heard = true;
    if (typeof d.info.duration === 'number' && d.info.duration > 0) live.d = d.info.duration;
    if (typeof d.info.currentTime === 'number' && d.info.currentTime >= 0) {
      live.t = d.info.currentTime;
      Videos.mark(live.key, live.t, live.d);   // in memory; flushed on a timer
    }
  });

  // Closing the tab mid-video is the normal way to leave one unfinished, so it
  // has to be a save point. pagehide fires where unload is unreliable on mobile.
  window.addEventListener('pagehide', stopWatching);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && live && live.t) {
      Videos.mark(live.key, live.t, live.d);
      Videos.flush();
    }
  });

  // Put a card back the way it started. Replacing the frame's contents destroys
  // the iframe, which is also what stops the sound.
  function collapseVideo(card) {
    var v = Videos.get(card.getAttribute('data-video-row'));
    var frame = card.querySelector('.video-frame');
    stopWatching();   // before the rebuild, so the facade draws the new bar
    if (v && frame) {
      frame.innerHTML = videoFacade(v);
      frame.className = frameClass(v);
    }
    card.classList.remove('is-playing');
  }

  // Swap a facade for the real player. Only ever called from a click, so
  // autoplay is allowed and the reader does not have to press play twice.
  function playVideo(id) {
    var v = Videos.get(id);
    if (!v || !v.embed) return;
    var card = view.querySelector('[data-video-row="' + id + '"]');
    var row = card && card.querySelector('.video-frame');
    if (!row) return;

    // One player at a time. Two enlarged cards would mean two soundtracks, and
    // the enlarged state is what marks which video the page is currently on.
    // Collapsing a card above this one shortens the list, so hold the card the
    // reader actually clicked where it is instead of letting the page lurch.
    var top = card.getBoundingClientRect().top;
    var open = view.querySelectorAll('.video-row.is-playing');
    for (var i = 0; i < open.length; i++) {
      if (open[i].getAttribute('data-video-row') !== id) collapseVideo(open[i]);
    }
    var shift = card.getBoundingClientRect().top - top;
    if (shift) window.scrollBy(0, shift);

    // A saved position wins over the author's deep link: if you have watched
    // half of it, half is where you want to be, whatever t= said.
    var at = resumePoint(v).at || v.start;
    var sep = v.embed.indexOf('?') === -1 ? '?' : '&';
    var src = v.embed + sep + 'autoplay=1' + (at ? '&start=' + Math.floor(at) : '');

    row.innerHTML = '<iframe src="' + esc(src) + '" ' +
      'title="' + esc(v.title) + '" loading="lazy" allowfullscreen ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
      'referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    row.classList.remove('has-thumb');
    row.classList.add('is-playing');
    card.classList.add('is-playing');
    beginWatching(row, v);
    var f = row.querySelector('iframe');
    if (f) f.focus();
  }

  // Shown under a chapter: the lectures and talks that cover it.
  function chapterVideos(ch) {
    var videos = Videos.forChapter(ch.slug);
    if (!videos.length) return '';
    return '<section class="reading videos">' +
      '<div class="reading-head">' +
        '<h2>Videos</h2>' +
        '<span class="small muted">' + videos.length + ' for this chapter</span>' +
      '</div>' +
      '<div class="video-list">' + videos.map(videoCard).join('') + '</div>' +
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

  /* Admits whole groups until the limit is reached, so the last group may spill
   * past it. Splitting a chain would strand a follow-up without its question,
   * which is worse than a couple of cards over the daily cap. */
  function takeGroups(groups, limit) {
    var out = [], used = 0;
    for (var i = 0; i < groups.length && used < limit; i++) {
      out.push(groups[i]);
      used += groups[i].cards.length;
    }
    return out;
  }

  /* The queue is built from groups, not cards. A group is pulled in whole as
   * soon as any of its members comes up, which is what keeps a follow-up with
   * the question it continues even once their intervals have drifted apart. */
  function buildQueue(cards) {
    var now = Date.now();
    var dueReview = [], learning = [], fresh = [];

    groupsOf(cards).forEach(function (group) {
      var hasLearning = false, hasReview = false, hasNew = false, soonest = Infinity;
      group.forEach(function (card) {
        var st = SRS.get(card.id);
        if (st.s === 'new') { hasNew = true; return; }
        if (st.due > now) return;
        soonest = Math.min(soonest, st.due);
        if (st.s === 'review') hasReview = true; else hasLearning = true;
      });
      var entry = { cards: group, due: soonest };
      if (hasLearning) learning.push(entry);
      else if (hasReview) dueReview.push(entry);
      else if (hasNew) fresh.push(entry);
    });

    if (SRS.settings().shuffle) { shuffle(dueReview); shuffle(fresh); }
    learning.sort(function (a, b) { return a.due - b.due; });

    dueReview = takeGroups(dueReview, SRS.reviewRemaining());
    fresh = takeGroups(fresh, SRS.newRemaining());

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
    return flatten(queue.map(function (g) { return g.cards; }));
  }

  function viewStudy(scope) {
    var cards, title, home;
    if (scope === 'all') {
      cards = allCards();
      title = 'All chapters';
      home = '#/';
    } else if (scope === 'molmed:all') {
      cards = allMolmedCards();
      title = 'MolMed revision';
      home = '#/molmed';
    } else if (paperFromSlug(scope.slice('molmed:'.length))) {
      var paper = paperFromSlug(scope.slice('molmed:'.length));
      cards = paperSessions(paper).reduce(function (acc, s) { return acc.concat(sessionCards(s)); }, []);
      title = 'MolMed ' + paperLabel(paper);
      home = '#/molmed';
    } else if (scope.indexOf('molmed:') === 0) {
      var s = sessionById(scope.slice('molmed:'.length));
      if (!s) return notFound('Session not found');
      cards = sessionCards(s);
      title = sessionTitle(s);
      home = '#/molmed/cards/' + encodeURIComponent(s.id);
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
      session.queue = flatten(shuffle(groupsOf(session.pool)));
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
    // In a pooled session (everything, or all of molmed) say which deck a card
    // came from; inside one deck that would be the same line on every card.
    var owner = (session.scope === 'all' || session.scope === 'molmed:all' || /^molmed:part-/.test(session.scope))
      ? deckOwnerTitle(card) : '';
    // A follow-up carries the question it continues, so it still reads on its
    // own when a rating of Again brings it back later in the session.
    var follows = card.followUp ? parentOf(card) : null;

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
          (owner ? '<div class="card-deck">' + esc(owner) + '</div>' : '') +
          (follows ? '<div class="card-follows">' + esc(excerpt(MD.plain(follows.front), 110)) + '</div>' : '') +
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
    if (/^#\/molmed\/exam\//.test(location.hash)) return onExamKey(e);
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
        '<p class="muted">' + total.seen + ' of ' + total.total + ' cards introduced. Scheduling, video watch progress and practice-exam answers live in this browser\'s localStorage. Export carries all three to another device.</p>' +
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

    // Watch progress rides along as a sibling of `data` rather than inside it,
    // so srs.js stays unaware of videos and the two stay separate on disk.
    function exportAll() {
      var payload = JSON.parse(SRS.exportJSON());
      payload.videos = Videos.dump();
      payload.exam = Exam.dump();
      return JSON.stringify(payload, null, 2);
    }

    view.querySelector('[data-act="export"]').addEventListener('click', function () {
      var blob = new Blob([exportAll()], { type: 'application/json' });
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
          // SRS first: it is the half that validates the file, so a bad import
          // throws before any watch progress has been overwritten.
          var n = SRS.importJSON(reader.result);
          var parsed = JSON.parse(reader.result);
          var v = Videos.restore(parsed.videos);
          var a = Exam.restore(parsed.exam);
          toast('Imported ' + n + ' cards' + (v ? ', ' + v + ' videos' : '') + (a ? ', ' + a + ' exam answers' : '') + ' of progress');
          viewSettings();
        } catch (e) {
          alert('Could not import that file: ' + e.message);
        }
      };
      reader.readAsText(f);
    });

    view.querySelector('[data-act="reset"]').addEventListener('click', function () {
      if (!confirm('Delete all scheduling, history, watch progress and practice-exam answers? This cannot be undone.')) return;
      SRS.resetAll();
      Videos.forget();
      Exam.forget();
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
    var navKey = parts[0] === 'molmed' ? 'molmed'
               : parts[0] === 'study' ? 'study'
               : parts[0] === 'papers' || parts[0] === 'paper' ? 'papers'
               : parts[0] === 'settings' ? 'settings' : 'home';
    var nav = document.querySelector('[data-nav="' + navKey + '"]');
    if (nav) nav.classList.add('active');

    if (!state.loaded) return render('<div class="loading"><span class="spinner"></span> Loading…</div>');

    if (parts[0] === 'molmed') {
      if (parts[1] === 'exam' && parts[2]) return viewExamRun(decodeURIComponent(parts[2]));
      if (parts[1] === 'exam') return viewExamHome();
      if (parts[1] === 'cards' && parts[2]) return viewMolmedCards(decodeURIComponent(parts[2]));
      if (parts[1] === 'study' && parts[2]) return viewStudy('molmed:' + decodeURIComponent(parts[2]));
      return viewMolmed();
    }
    if (parts[0] === 'chapter' && parts[1]) {
      return viewChapter(decodeURIComponent(parts[1]),
                         parts[2] ? decodeURIComponent(parts[2]) : null);
    }
    if (parts[0] === 'cards' && parts[1]) return viewCards(decodeURIComponent(parts[1]));
    if (parts[0] === 'study' && parts[1]) return viewStudy(decodeURIComponent(parts[1]));
    if (parts[0] === 'paper' && parts[1]) return viewPaper(decodeURIComponent(parts[1]));
    if (parts[0] === 'papers') return viewPapers();
    if (parts[0] === 'settings') return viewSettings();
    return viewHome();
  }

  window.addEventListener('hashchange', function () { if (saveTimer) saveDraft(); route(); });
  document.addEventListener('keydown', onKey);

  // Delegated so it survives every re-render without rebinding per view.
  view.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-video]') : null;
    if (btn) playVideo(btn.getAttribute('data-video'));
  });

  // Not every video has a maxres poster. `error` does not bubble, hence capture.
  // Dropping the class returns the frame to the plain gradient facade, so a
  // video with no usable poster at all still looks deliberate.
  view.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.classList.contains('video-thumb')) return;
    var next = img.getAttribute('data-thumb-fallback');
    if (next) {
      img.removeAttribute('data-thumb-fallback');
      img.src = next;
    } else if (img.parentNode) {
      img.parentNode.classList.remove('has-thumb');
      img.parentNode.removeChild(img);
    }
  }, true);

  applyTheme(SRS.settings().theme);
  render('<div class="loading"><span class="spinner"></span> Loading…</div>');
  loadAll().then(route);
})();
