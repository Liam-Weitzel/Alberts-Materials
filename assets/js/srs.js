/* SM-2 style spaced repetition with Anki-ish learning steps.
 *
 * All scheduling lives in the pure function schedule(state, rating, now); answer()
 * is just schedule + persist. That split lets the study UI show the real interval
 * on each rating button before you commit to it. */
window.SRS = (function () {
  'use strict';

  var KEY = 'alberts-srs-v1';
  var MIN = 60 * 1000;
  var DAY = 24 * 60 * MIN;

  var LEARN_STEPS = [1, 10];       // minutes
  var RELEARN_STEPS = [10];        // minutes
  var GRADUATE = 1;                // days, "Good" out of learning
  var EASY_GRADUATE = 4;           // days, "Easy" out of learning
  var MIN_EASE = 1.3, MAX_EASE = 3.0, MAX_IVL = 365;

  var DEFAULTS = { newPerDay: 20, maxReviews: 200, theme: 'auto', shuffle: true };

  var data = load();

  function load() {
    var fresh = { version: 1, cards: {}, settings: copy(DEFAULTS), daily: {} };
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return fresh;
      var d = JSON.parse(raw);
      return {
        version: 1,
        cards: d.cards || {},
        settings: merge(copy(DEFAULTS), d.settings || {}),
        daily: d.daily || {}
      };
    } catch (e) {
      console.warn('[srs] could not read saved progress, starting fresh', e);
      return fresh;
    }
  }

  function copy(o) { return JSON.parse(JSON.stringify(o)); }
  function merge(a, b) { for (var k in b) if (b.hasOwnProperty(k)) a[k] = b[k]; return a; }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.error('[srs] save failed', e);
    }
  }

  function today(now) {
    var d = new Date(now || Date.now());
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function fresh(id) {
    return { s: 'new', step: 0, ivl: 0, ease: 2.5, due: 0, reps: 0, lapses: 0, last: 0, id: id };
  }

  function get(id) {
    var c = data.cards[id];
    return c ? merge(fresh(id), c) : fresh(id);
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  /* Pure: returns the next state without touching storage. */
  function schedule(state, rating, now) {
    now = now || Date.now();
    var c = merge(fresh(state.id), state);
    var learning = c.s === 'new' || c.s === 'learning' || c.s === 'relearning';
    var wasNew = c.s === 'new';
    var wasRelearn = c.s === 'relearning';
    var steps = wasRelearn ? RELEARN_STEPS : LEARN_STEPS;

    if (learning) {
      if (rating === 'again') {
        c.step = 0;
        c.due = now + steps[0] * MIN;
        c.s = wasRelearn ? 'relearning' : 'learning';
      } else if (rating === 'hard') {
        c.s = wasRelearn ? 'relearning' : 'learning';
        c.due = now + steps[clamp(c.step, 0, steps.length - 1)] * MIN;
      } else if (rating === 'good') {
        // A card seen for the first time skips the 1-minute step: Good on a new
        // card means "I knew that", so it goes straight to the 10-minute step.
        var next = wasNew ? 1 : c.step + 1;
        if (next >= steps.length) {
          c.s = 'review';
          c.step = 0;
          c.ivl = wasRelearn ? Math.max(GRADUATE, Math.round(c.ivl)) : GRADUATE;
          c.due = now + c.ivl * DAY;
        } else {
          c.s = wasRelearn ? 'relearning' : 'learning';
          c.step = next;
          c.due = now + steps[next] * MIN;
        }
      } else { // easy
        c.s = 'review';
        c.step = 0;
        c.ivl = Math.max(EASY_GRADUATE, Math.round(c.ivl));
        c.due = now + c.ivl * DAY;
      }
    } else { // review
      var ivl = Math.max(1, c.ivl);
      if (rating === 'again') {
        c.lapses++;
        c.ease = clamp(c.ease - 0.2, MIN_EASE, MAX_EASE);
        c.s = 'relearning';
        c.step = 0;
        c.ivl = Math.max(1, Math.round(ivl * 0.5));
        c.due = now + RELEARN_STEPS[0] * MIN;
      } else {
        if (rating === 'hard') {
          c.ease = clamp(c.ease - 0.15, MIN_EASE, MAX_EASE);
          ivl = ivl * 1.2;
        } else if (rating === 'good') {
          ivl = ivl * c.ease;
        } else {
          c.ease = clamp(c.ease + 0.15, MIN_EASE, MAX_EASE);
          ivl = ivl * c.ease * 1.3;
        }
        c.ivl = clamp(Math.round(ivl), 1, MAX_IVL);
        c.due = now + c.ivl * DAY;
      }
    }

    c.reps++;
    c.last = now;
    return c;
  }

  function answer(id, rating, now) {
    now = now || Date.now();
    var before = get(id);
    var after = schedule(before, rating, now);
    data.cards[id] = after;

    var day = today(now);
    if (!data.daily[day]) data.daily[day] = { new: 0, reviews: 0 };
    // keep only the last 30 days of counters
    var keys = Object.keys(data.daily).sort();
    while (keys.length > 30) delete data.daily[keys.shift()];

    if (before.s === 'new') data.daily[day].new++;
    else data.daily[day].reviews++;

    save();
    return after;
  }

  /* "10m" / "1d" / "3.2mo" label for a rating button. */
  function preview(id, rating, now) {
    now = now || Date.now();
    var next = schedule(get(id), rating, now);
    return humanDelta(next.due - now);
  }

  function humanDelta(ms) {
    if (ms <= 0) return 'now';
    var mins = ms / MIN;
    if (mins < 60) return Math.max(1, Math.round(mins)) + 'm';
    if (mins < 60 * 24) return Math.round(mins / 60) + 'h';
    var days = mins / (60 * 24);
    if (days < 30) return Math.round(days) + 'd';
    if (days < 365) return (days / 30).toFixed(days < 60 ? 1 : 0) + 'mo';
    return (days / 365).toFixed(1) + 'y';
  }

  function dueLabel(state, now) {
    now = now || Date.now();
    if (state.s === 'new') return 'new';
    if (state.due <= now) return 'due now';
    return 'in ' + humanDelta(state.due - now);
  }

  function counts(cards, now) {
    now = now || Date.now();
    var out = { total: cards.length, new: 0, learning: 0, due: 0, later: 0, seen: 0 };
    cards.forEach(function (card) {
      var st = get(card.id);
      if (st.s === 'new') { out.new++; return; }
      out.seen++;
      if (st.due <= now) {
        if (st.s === 'review') out.due++; else out.learning++;
      } else out.later++;
    });
    return out;
  }

  function todayCounts(now) {
    return data.daily[today(now)] || { new: 0, reviews: 0 };
  }

  function newRemaining(now) {
    return Math.max(0, settings().newPerDay - todayCounts(now).new);
  }

  function reviewRemaining(now) {
    return Math.max(0, settings().maxReviews - todayCounts(now).reviews);
  }

  function settings() { return data.settings; }

  function setSetting(key, value) {
    data.settings[key] = value;
    save();
  }

  function resetDeck(cards) {
    cards.forEach(function (c) { delete data.cards[c.id]; });
    save();
  }

  function resetAll() {
    data = { version: 1, cards: {}, settings: data.settings, daily: {} };
    save();
  }

  function exportJSON() {
    return JSON.stringify({ exported: new Date().toISOString(), data: data }, null, 2);
  }

  function importJSON(text) {
    var parsed = JSON.parse(text);
    var incoming = parsed.data || parsed;
    if (!incoming || typeof incoming !== 'object' || !incoming.cards) throw new Error('Not an Alberts progress file');
    data = {
      version: 1,
      cards: incoming.cards || {},
      settings: merge(copy(DEFAULTS), incoming.settings || {}),
      daily: incoming.daily || {}
    };
    save();
    return Object.keys(data.cards).length;
  }

  return {
    get: get, answer: answer, schedule: schedule, preview: preview,
    counts: counts, dueLabel: dueLabel, humanDelta: humanDelta,
    todayCounts: todayCounts, newRemaining: newRemaining, reviewRemaining: reviewRemaining,
    settings: settings, setSetting: setSetting,
    resetDeck: resetDeck, resetAll: resetAll,
    exportJSON: exportJSON, importJSON: importJSON,
    DAY: DAY, MIN: MIN
  };
})();
