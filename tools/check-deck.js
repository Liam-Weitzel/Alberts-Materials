#!/usr/bin/env node
/* Parse a deck with the site's own deck.js and report anything wrong with it.
 *
 *   nix-shell -p nodejs --run "node tools/check-deck.js decks/ch02-....md"
 *
 * Checks: cards parse at all, no duplicate ids (which would collide in the SRS
 * store), no basic card without an answer, no multiple-choice card without a
 * correct option, and every referenced figure exists on disk. */

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
global.window = global;
global.MD = {
  frontMatter(t) {
    const m = /^---\n([\s\S]*?)\n---\n?/.exec(t);
    if (!m) return { meta: {}, body: t };
    const meta = {};
    m[1].split('\n').forEach(l => {
      const i = l.indexOf(':');
      if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim();
    });
    return { meta, body: t.slice(m[0].length) };
  },
  plain(s) { return String(s || '').replace(/[*_`#]/g, ''); }
};
eval(fs.readFileSync(path.join(repo, 'assets/js/deck.js'), 'utf8'));

const file = process.argv[2];
if (!file) { console.error('usage: check-deck.js <deck.md>'); process.exit(2); }

const text = fs.readFileSync(file, 'utf8');
const deck = Deck.parse(text, path.basename(file, '.md'), file);
let problems = 0;

console.log('title:  ' + deck.title);
console.log('cards:  ' + deck.cards.length);
const types = {};
deck.cards.forEach(c => { types[c.type] = (types[c.type] || 0) + 1; });
console.log('types:  ' + JSON.stringify(types));
const chains = {};
deck.cards.forEach(c => { chains[c.group] = (chains[c.group] || 0) + 1; });
console.log('follow-ups: ' + deck.cards.filter(c => c.followUp).length +
  ' in ' + Object.values(chains).filter(n => n > 1).length + ' chains');

const seen = {};
deck.cards.forEach(c => {
  if (seen[c.id]) { console.log('DUPLICATE ID: ' + c.front.slice(0, 70)); problems++; }
  seen[c.id] = 1;
  if (c.type === 'basic' && !c.back) { console.log('NO ANSWER: ' + c.front.slice(0, 70)); problems++; }
  if (c.type === 'mc' && !c.choices.some(x => x.correct)) {
    console.log('MC WITH NO CORRECT OPTION: ' + c.front.slice(0, 70)); problems++;
  }
});

const figs = new Set();
let m; const re = /\(assets\/img\/([A-Za-z0-9.\-]+\.png)\)/g;
while ((m = re.exec(text))) figs.add(m[1]);
figs.forEach(f => {
  if (!fs.existsSync(path.join(repo, 'assets/img', f))) {
    console.log('MISSING FIGURE: ' + f); problems++;
  }
});
console.log('figures referenced: ' + figs.size);

const dashes = (text.match(/—/g) || []).length;
if (dashes) { console.log('EM DASHES: ' + dashes + ' (must be 0)'); problems++; }

console.log(problems ? '\nFAILED with ' + problems + ' problem(s)' : '\nOK');
process.exit(problems ? 1 : 0);
