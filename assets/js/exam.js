/* Practice exam: open questions answered in your own words.
 *
 * The questions live in molmed/exam/<session>-<chapter-slug>.md, one file per
 * lecture, in exactly the deck format (Q:/A: separated by `---`), so deck.js
 * parses them. What is different is how they are used. There is no scheduling:
 * you write an answer, reveal the model answer, and score yourself out of 10,
 * which is what each question on the real paper is worth.
 *
 *   Q: The question, with its a), b), c) parts, figures and tables.
 *   A: **In brief:** what a full-marks answer needs, in two or three lines.
 *
 *   The full model answer, part by part.
 *
 *   Read more: [heading](#/chapter/<slug>/<heading-id>)
 *   Tags: official, splicing
 *
 * `Tags: official` marks one of the course's own sample questions, and
 * `Tags: qa` one worked through in the Q&A session.
 *
 * This module only holds what you wrote and how you scored it. It is its own
 * localStorage key, like video progress, so resetting card scheduling never
 * throws away a written answer. Keyed by the question id deck.js assigns (a
 * hash of the question text), so reordering a file keeps every answer with its
 * question, and rewording a question starts that one afresh.
 */
window.Exam = (function () {
  'use strict';

  var KEY = 'alberts-exam-v1';
  var MAX = 10;          // points per question on the paper
  var PASS = 0.55;       // 44 of 80 points is a 5.5
  var answers = null;

  // Before scores, answers were marked in three steps. Read those as points
  // so nothing already marked is lost.
  var OLD_MARKS = { missed: 0, partly: 5, got: 10 };

  function validScore(v) {
    return typeof v === 'number' && isFinite(v) && v >= 0 && v <= MAX && Math.round(v) === v;
  }

  function upgrade(r) {
    if (r && !validScore(r.score) && OLD_MARKS.hasOwnProperty(r.mark)) {
      r.score = OLD_MARKS[r.mark];
      r.scoredAt = r.markedAt || r.at || Date.now();
    }
    if (r) { delete r.mark; delete r.markedAt; }
    return r;
  }

  function store() {
    if (answers) return answers;
    answers = {};
    try {
      var d = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (d && d.answers) answers = d.answers;
      Object.keys(answers).forEach(function (k) { upgrade(answers[k]); });
    } catch (e) {
      // Private mode, or a hand-edited record. Starting empty loses drafts;
      // failing here would lose the whole practice page.
    }
    return answers;
  }

  function flush() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ version: 1, answers: store() }));
    } catch (e) {
      // Full or read-only storage. The textarea still holds the text.
    }
  }

  function get(id) { return store()[id] || null; }

  function text(id) { var r = get(id); return r && r.text ? r.text : ''; }

  /* Points out of 10, or null if not scored yet. 0 is a real score. */
  function score(id) { var r = get(id); return r && validScore(r.score) ? r.score : null; }

  /* A record with neither text nor a score is dropped rather than kept empty,
   * so the counts on the practice page mean something. */
  function tidy(id) {
    var r = store()[id];
    if (r && !r.text && !validScore(r.score)) delete store()[id];
  }

  function setText(id, value) {
    var s = store();
    var r = s[id] || (s[id] = {});
    r.text = value;
    r.at = Date.now();
    tidy(id);
    flush();
  }

  /* null clears the score. */
  function setScore(id, value) {
    if (value !== null && !validScore(value)) return;
    var s = store();
    var r = s[id] || (s[id] = {});
    if (value === null) { delete r.score; delete r.scoredAt; } else { r.score = value; r.scoredAt = Date.now(); }
    tidy(id);
    flush();
  }

  /* Tallies for a list of questions. `points` and `max` cover the scored
   * questions only; `low` counts those under half marks, the ones to revisit. */
  function counts(questions) {
    var c = { total: questions.length, written: 0, scored: 0, points: 0, max: 0, low: 0, full: 0 };
    questions.forEach(function (q) {
      var r = get(q.id);
      if (!r) return;
      if (r.text && r.text.trim()) c.written++;
      if (validScore(r.score)) {
        c.scored++;
        c.points += r.score;
        c.max += MAX;
        if (r.score < MAX / 2) c.low++;
        if (r.score === MAX) c.full++;
      }
    });
    return c;
  }

  /* The paper's own conversion: the grade is the share of points times ten,
   * so 44 of 80 is a 5.5. */
  function grade(points, max) { return max ? (points / max) * 10 : 0; }

  function forget() { answers = {}; flush(); }

  /* ---- carried in the export file ---- */

  function dump() { return store(); }

  /* Replaces the whole record. Returns how many answers came in; 0 for a file
   * written before the practice exam existed, which is not an error. */
  function restore(incoming) {
    if (!incoming || typeof incoming !== 'object') return 0;
    var clean = {}, n = 0;
    Object.keys(incoming).forEach(function (k) {
      var r = incoming[k];
      if (!r || typeof r !== 'object') return;
      var rec = {};
      if (typeof r.text === 'string' && r.text) rec.text = r.text;
      upgrade(r);
      if (validScore(r.score)) { rec.score = r.score; rec.scoredAt = r.scoredAt || Date.now(); }
      if (!rec.text && !validScore(rec.score)) return;
      rec.at = r.at || Date.now();
      clean[k] = rec;
      n++;
    });
    answers = clean;
    flush();
    return n;
  }

  return {
    MAX: MAX, PASS: PASS,
    get: get, text: text, score: score,
    setText: setText, setScore: setScore,
    counts: counts, grade: grade, forget: forget,
    dump: dump, restore: restore
  };
})();
