/* Parses a deck markdown file into cards.
 *
 * File shape:
 *
 *   ---
 *   title: Chapter 1. Cells and Genomes
 *   description: optional one-liner
 *   tags: [mboc, ch1]
 *   ---
 *
 *   Q: What does the plasma membrane do?
 *   A: It encloses the cell and controls what crosses it.
 *
 *   ---
 *
 *   Q: Which of these are true of prokaryotes?
 *   - [x] No nucleus
 *   - [ ] Always multicellular
 *   A: Optional explanation, shown after answering.
 *
 *   ---
 *
 *   Q: ATP is produced mainly by {{oxidative phosphorylation}}.
 *
 *   ---
 *
 *   Q+: And which organelle carries that out?
 *   A: The mitochondrion.
 *
 * Cards are separated by a line of `---`. A line of `---` inside a fenced code
 * block is ignored. Both Q/A and Front/Back spellings work.
 *
 * `Q+:` marks a follow-up: a question that reads as a continuation of the card
 * before it. Follow-ups stay attached to that card and are never separated from
 * it, however the queue is shuffled. Several in a row form one chain. */
window.Deck = (function () {
  'use strict';

  function hash(str) {
    // FNV-1a, base36. Stable across sessions, because this is the SRS storage key.
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return h.toString(36);
  }

  /* Split on top-level `---`, respecting fenced code blocks. */
  function splitCards(body) {
    var lines = body.split('\n');
    var chunks = [], current = [], inFence = false;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/^\s*```/.test(line)) inFence = !inFence;
      if (!inFence && /^---+\s*$/.test(line)) {
        chunks.push(current.join('\n'));
        current = [];
        continue;
      }
      current.push(line);
    }
    chunks.push(current.join('\n'));
    return chunks.filter(function (c) { return c.trim(); });
  }

  var RE_Q = /^(?:Q|Question|Front)\s*:\s*/i;
  // `Q+:` marks a follow-up: a card that only makes sense after the one before
  // it, so the two are kept adjacent and shuffled as a unit.
  var RE_Q_MORE = /^(?:Q|Question|Front)\s*\+\s*:\s*/i;
  var RE_A = /^(?:A|Answer|Back)\s*:\s*/i;
  var RE_TAGS = /^Tags\s*:\s*(.*)$/i;
  var RE_CHOICE = /^[-*]\s*\[([ xX])\]\s*(.*)$/;

  function parseCard(chunk, deckId, index) {
    var lines = chunk.split('\n');
    var front = [], back = [], choices = [], tags = [];
    var section = 'front', inFence = false, sawQ = false, followUp = false;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (/^\s*```/.test(line)) inFence = !inFence;

      if (!inFence) {
        var t = RE_TAGS.exec(line);
        if (t) {
          tags = t[1].split(/[,\s]+/).map(function (s) { return s.replace(/^#/, '').trim(); }).filter(Boolean);
          continue;
        }
        // Test the `Q+:` form first: `Q:` cannot match it, but keeping the more
        // specific pattern first means adding front spellings stays safe.
        if (RE_Q_MORE.test(line)) {
          sawQ = true; followUp = true; section = 'front';
          front.push(line.replace(RE_Q_MORE, ''));
          continue;
        }
        if (RE_Q.test(line)) { sawQ = true; section = 'front'; front.push(line.replace(RE_Q, '')); continue; }
        if (RE_A.test(line)) { section = 'back'; back.push(line.replace(RE_A, '')); continue; }
        var c = RE_CHOICE.exec(line);
        if (c) {
          choices.push({ text: c[2].trim(), correct: c[1].toLowerCase() === 'x' });
          continue;
        }
      }

      (section === 'front' ? front : back).push(line);
    }

    var frontText = front.join('\n').trim();
    var backText = back.join('\n').trim();
    if (!frontText && !choices.length) return null;

    var type = 'basic';
    if (choices.length) type = 'mc';
    else if (/\{\{.+?\}\}/.test(frontText)) type = 'cloze';

    if (type === 'basic' && !backText) return null;   // nothing to reveal
    if (type === 'mc' && !choices.some(function (c) { return c.correct; })) {
      console.warn('[deck] ' + deckId + ' card ' + (index + 1) + ': no correct choice marked');
    }

    return {
      id: deckId + ':' + hash(frontText || JSON.stringify(choices)),
      deckId: deckId,
      index: index,
      type: type,
      sawQ: sawQ,
      followUp: followUp,
      front: frontText,
      back: backText,
      choices: choices.length ? choices : null,
      multi: choices.filter(function (c) { return c.correct; }).length > 1,
      tags: tags,
      search: (MD.plain(frontText) + ' ' + MD.plain(backText) + ' ' +
               choices.map(function (c) { return c.text; }).join(' ') + ' ' + tags.join(' ')).toLowerCase()
    };
  }

  /* Tie each run of `Q+:` cards to the question that opened it. The group is
   * identified by that first card's id, which is stable across edits to the
   * follow-ups, and is what the study queue shuffles and schedules as a unit. */
  function groupCards(cards, deckId) {
    var groupId = null;
    cards.forEach(function (card) {
      if (card.followUp && groupId === null) {
        console.warn('[deck] ' + deckId + ' card ' + (card.index + 1) +
          ': Q+: has nothing to follow, treating it as an ordinary question');
        card.followUp = false;
      }
      if (!card.followUp) groupId = card.id;
      card.group = groupId;
    });
    return cards;
  }

  function parse(text, deckId, file) {
    var fm = MD.frontMatter(text);
    var cards = groupCards(splitCards(fm.body)
      .map(function (chunk, i) { return parseCard(chunk, deckId, i); })
      .filter(Boolean), deckId);

    var deckTags = fm.meta.tags;
    if (typeof deckTags === 'string') deckTags = deckTags.split(/[,\s]+/).filter(Boolean);

    return {
      id: deckId,
      file: file,
      title: fm.meta.title || deckId.replace(/[-_]/g, ' ').replace(/\b\w/g, function (m) { return m.toUpperCase(); }),
      description: fm.meta.description || '',
      tags: deckTags || [],
      cards: cards
    };
  }

  return { parse: parse, hash: hash };
})();
