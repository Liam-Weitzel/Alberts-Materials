/* Router + views. Hash routing keeps everything working on GitHub Pages with no
 * server-side rewrites: #/ , #/deck/<id> , #/study/<id|all> , #/settings */
(function () {
  'use strict';

  var view = document.getElementById('view');
  var toastEl = document.getElementById('toast');
  var state = { manifest: null, decks: null, loaded: false, error: null };
  var session = null;

  /* ---------- helpers ---------- */

  function esc(s) { return MD.escapeHtml(s); }

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

  function allCards() {
    return state.decks.reduce(function (acc, d) { return acc.concat(d.cards); }, []);
  }

  function deckById(id) {
    for (var i = 0; i < state.decks.length; i++) if (state.decks[i].id === id) return state.decks[i];
    return null;
  }

  function render(html) {
    view.innerHTML = html;
    MD.typeset(view);
    window.scrollTo(0, 0);
  }

  /* ---------- loading ---------- */

  function loadDecks() {
    return fetch('decks/manifest.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('decks/manifest.json: HTTP ' + r.status);
        return r.json();
      })
      .then(function (manifest) {
        state.manifest = manifest;
        var files = manifest.decks || [];
        return Promise.all(files.map(function (file) {
          return fetch('decks/' + file, { cache: 'no-cache' })
            .then(function (r) {
              if (!r.ok) throw new Error(file + ': HTTP ' + r.status);
              return r.text();
            })
            .then(function (text) {
              return Deck.parse(text, file.replace(/\.md$/i, ''), file);
            })
            .catch(function (e) {
              console.error('[decks] failed to load', file, e);
              return null;
            });
        }));
      })
      .then(function (decks) {
        state.decks = decks.filter(Boolean);
        state.loaded = true;
      })
      .catch(function (e) {
        state.error = e.message;
        state.loaded = true;
      });
  }

  /* ---------- home ---------- */

  function progressRing(pct) {
    var r = 15.9155;
    return '<svg class="ring" viewBox="0 0 36 36" aria-hidden="true">' +
      '<circle class="ring-bg" cx="18" cy="18" r="' + r + '"></circle>' +
      '<circle class="ring-fg" cx="18" cy="18" r="' + r + '" stroke-dasharray="' + (pct * 100).toFixed(1) + ' 100"></circle>' +
      '</svg>';
  }

  function viewHome() {
    if (state.error) {
      return render('<div class="empty"><h2>Could not load decks</h2><p class="mono">' + esc(state.error) + '</p>' +
        '<p>Check that <code>decks/manifest.json</code> exists and lists your deck files.</p></div>');
    }
    if (!state.decks.length) {
      return render('<div class="empty"><h2>No decks yet</h2>' +
        '<p>Add a <code>.md</code> file to <code>decks/</code> and list it in <code>decks/manifest.json</code>.</p></div>');
    }

    var cards = allCards();
    var total = SRS.counts(cards);
    var td = SRS.todayCounts();
    var studied = total.seen;
    var pct = total.total ? studied / total.total : 0;

    var head =
      '<section class="hero">' +
        '<div class="hero-text">' +
          '<h1>' + esc(state.manifest.title || 'Flashcards') + '</h1>' +
          (state.manifest.description ? '<p class="sub">' + esc(state.manifest.description) + '</p>' : '') +
          '<div class="stat-row">' +
            '<div class="stat"><span class="stat-n">' + (total.due + total.learning) + '</span><span class="stat-l">due now</span></div>' +
            '<div class="stat"><span class="stat-n">' + total.new + '</span><span class="stat-l">unseen</span></div>' +
            '<div class="stat"><span class="stat-n">' + total.total + '</span><span class="stat-l">cards</span></div>' +
            '<div class="stat"><span class="stat-n">' + (td.new + td.reviews) + '</span><span class="stat-l">done today</span></div>' +
          '</div>' +
          '<a class="btn btn-primary btn-lg" href="#/study/all">Study everything due</a>' +
        '</div>' +
        '<div class="hero-ring">' + progressRing(pct) +
          '<div class="ring-label"><b>' + Math.round(pct * 100) + '%</b><span>introduced</span></div>' +
        '</div>' +
      '</section>';

    var grid = state.decks.map(function (d) {
      var c = SRS.counts(d.cards);
      var dp = c.total ? c.seen / c.total : 0;
      var badges = [];
      if (c.due + c.learning) badges.push('<span class="pill pill-due">' + (c.due + c.learning) + ' due</span>');
      if (c.new) badges.push('<span class="pill pill-new">' + c.new + ' new</span>');
      if (!badges.length) badges.push('<span class="pill pill-done">all caught up</span>');
      return '<article class="deck">' +
        '<a class="deck-head" href="#/deck/' + encodeURIComponent(d.id) + '">' +
          '<h3>' + esc(d.title) + '</h3>' +
          (d.description ? '<p>' + esc(d.description) + '</p>' : '') +
        '</a>' +
        '<div class="deck-badges">' + badges.join('') + '</div>' +
        '<div class="bar"><span style="width:' + (dp * 100).toFixed(1) + '%"></span></div>' +
        '<div class="deck-foot">' +
          '<span class="muted">' + c.total + ' cards</span>' +
          '<span class="deck-actions">' +
            '<a class="btn btn-sm" href="#/deck/' + encodeURIComponent(d.id) + '">Browse</a>' +
            '<a class="btn btn-sm btn-primary" href="#/study/' + encodeURIComponent(d.id) + '">Study</a>' +
          '</span>' +
        '</div>' +
      '</article>';
    }).join('');

    render(head + '<section class="deck-grid">' + grid + '</section>');
  }

  /* ---------- browse ---------- */

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

  function viewDeck(id) {
    var deck = deckById(id);
    if (!deck) return render('<div class="empty"><h2>Deck not found</h2><p><a href="#/">Back to decks</a></p></div>');
    var c = SRS.counts(deck.cards);

    render(
      '<div class="crumbs"><a href="#/">Decks</a> <span>/</span> ' + esc(deck.title) + '</div>' +
      '<section class="page-head">' +
        '<div>' +
          '<h1>' + esc(deck.title) + '</h1>' +
          (deck.description ? '<p class="sub">' + esc(deck.description) + '</p>' : '') +
          '<p class="muted">' + c.total + ' cards · ' + c.new + ' new · ' + (c.due + c.learning) + ' due · ' + c.later + ' scheduled</p>' +
        '</div>' +
        '<div class="page-head-actions">' +
          '<a class="btn btn-primary" href="#/study/' + encodeURIComponent(deck.id) + '">Study</a>' +
          '<button class="btn" type="button" data-act="reset-deck">Reset progress</button>' +
        '</div>' +
      '</section>' +
      '<div class="toolbar"><input id="search" class="input" type="search" placeholder="Search this deck…" autocomplete="off"></div>' +
      '<section id="card-list" class="card-list"></section>'
    );

    var listEl = view.querySelector('#card-list');
    var searchEl = view.querySelector('#search');

    function paint(filter) {
      var q = (filter || '').trim().toLowerCase();
      var matches = deck.cards.filter(function (card) { return !q || card.search.indexOf(q) !== -1; });
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
      if (!confirm('Reset scheduling for all ' + deck.cards.length + ' cards in “' + deck.title + '”?')) return;
      SRS.resetDeck(deck.cards);
      toast('Progress reset for this deck');
      viewDeck(id);
    });
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
    var cards, title;
    if (scope === 'all') {
      cards = allCards();
      title = 'All decks';
    } else {
      var deck = deckById(scope);
      if (!deck) return render('<div class="empty"><h2>Deck not found</h2><p><a href="#/">Back to decks</a></p></div>');
      cards = deck.cards;
      title = deck.title;
    }

    session = {
      scope: scope,
      title: title,
      pool: cards,
      queue: buildQueue(cards),
      done: 0,
      correct: 0,
      again: 0,
      startedAt: Date.now(),
      revealed: false,
      picked: [],
      checked: false
    };
    session.planned = session.queue.length;
    drawStudy();
  }

  function studyDone() {
    var mins = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
    var counts = SRS.counts(session.pool);
    var backHref = session.scope === 'all' ? '#/' : '#/deck/' + encodeURIComponent(session.scope);
    render(
      '<section class="done">' +
        '<div class="done-mark">✓</div>' +
        '<h1>' + (session.done ? 'Session complete' : 'Nothing due right now') + '</h1>' +
        (session.done
          ? '<p class="sub">' + session.done + ' cards in ' + mins + ' min · ' + session.again + ' marked <i>Again</i></p>'
          : '<p class="sub">Next cards in “' + esc(session.title) + '” become available as they fall due.</p>') +
        '<div class="stat-row centered">' +
          '<div class="stat"><span class="stat-n">' + counts.new + '</span><span class="stat-l">still new</span></div>' +
          '<div class="stat"><span class="stat-n">' + (counts.due + counts.learning) + '</span><span class="stat-l">due</span></div>' +
          '<div class="stat"><span class="stat-n">' + counts.later + '</span><span class="stat-l">scheduled</span></div>' +
        '</div>' +
        '<div class="done-actions">' +
          '<a class="btn btn-primary" href="' + backHref + '">Done</a>' +
          (counts.new || counts.due + counts.learning
            ? '<button class="btn" type="button" data-act="again-session">Keep going</button>' : '') +
          '<button class="btn" type="button" data-act="cram">Cram all cards</button>' +
        '</div>' +
      '</section>'
    );
    var again = view.querySelector('[data-act="again-session"]');
    if (again) again.addEventListener('click', function () { viewStudy(session.scope); });
    view.querySelector('[data-act="cram"]').addEventListener('click', function () {
      var pool = session.pool.slice();
      session.queue = shuffle(pool.slice());
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
    var deckName = state.decks.length > 1 && session.scope === 'all'
      ? (deckById(card.deckId) || {}).title : null;

    render(
      '<section class="study">' +
        '<div class="study-top">' +
          '<a class="back" href="' + (session.scope === 'all' ? '#/' : '#/deck/' + encodeURIComponent(session.scope)) + '">← ' + esc(session.title) + '</a>' +
          '<div class="study-counts">' +
            '<span class="tag tag-state tag-' + st.s + '">' + st.s + '</span>' +
            '<span class="muted">' + session.done + ' / ' + totalPlanned + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="bar thin"><span style="width:' + pct.toFixed(1) + '%"></span></div>' +
        '<article class="card" id="card">' +
          (deckName ? '<div class="card-deck">' + esc(deckName) + '</div>' : '') +
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
      if (card.back) {
        var ex = el('<div class="explain">' + MD.render(card.back) + '</div>');
        body.appendChild(ex);
      }
      var verdict = el('<div class="verdict ' + (session.lastCorrect ? 'ok' : 'no') + '">' +
        (session.lastCorrect ? '✓ Correct' : '✗ Not quite') + '</div>');
      body.insertBefore(verdict, body.firstChild);
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
        '<span class="rate-ivl">' + SRS.preview(card.id, r.key) + '</span>' +
        '<span class="rate-key">' + r.num + '</span></button>';
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
      var pos = Math.min(session.queue.length, rating === 'again' ? 3 : 6);
      session.queue.splice(pos, 0, card);
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
      '<div class="crumbs"><a href="#/">Decks</a> <span>/</span> Settings</div>' +
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
          '<dt>1 2 3 4</dt><dd>Again · Hard · Good · Easy</dd>' +
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
    var navKey = parts[0] === 'study' ? 'study' : parts[0] === 'settings' ? 'settings' : 'home';
    var nav = document.querySelector('[data-nav="' + navKey + '"]');
    if (nav) nav.classList.add('active');

    if (!state.loaded) return render('<div class="loading"><span class="spinner"></span> Loading decks…</div>');

    if (parts[0] === 'deck' && parts[1]) return viewDeck(decodeURIComponent(parts[1]));
    if (parts[0] === 'study' && parts[1]) return viewStudy(decodeURIComponent(parts[1]));
    if (parts[0] === 'settings') return viewSettings();
    return viewHome();
  }

  window.addEventListener('hashchange', route);
  document.addEventListener('keydown', onKey);

  applyTheme(SRS.settings().theme);
  render('<div class="loading"><span class="spinner"></span> Loading decks…</div>');
  loadDecks().then(route);
})();
