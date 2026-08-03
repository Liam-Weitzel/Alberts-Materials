# Alberts Materials

Flashcards for my reading of *Molecular Biology of the Cell*, as a static site with
spaced repetition. Live at **[alberts.liam-w.com](https://alberts.liam-w.com)**.

Cards are plain markdown files in [`decks/`](decks/). Write them in any editor and commit.
There is no build step and nothing to install.

## Writing cards

One file per deck in `decks/`. Cards are separated by a line of `---`.

```markdown
---
title: Ch 3. Proteins
description: Optional one-liner shown on the deck card.
tags: [mboc, ch3]
---

Q: What level of protein structure do α-helices belong to?
A: **Secondary** structure, meaning local folding stabilised by hydrogen
bonds along the polypeptide backbone.

---

Q: Which are true of the peptide bond?
- [x] It has partial double-bond character
- [x] It is planar
- [ ] It rotates freely
A: Optional explanation, shown once you've answered.
Tags: structure, bonds
```

### The three card types

| Type | How you write it | What happens |
|---|---|---|
| **Basic** | `Q:` … `A:` … | Front, then reveal the back |
| **Multiple choice** | `- [x]` correct, `- [ ]` wrong | Clickable options, graded immediately. More than one `[x]` turns it into a select-all question. An `A:` becomes the explanation. |
| **Cloze** | `{{hidden text}}` in the question | Renders as a blank, filled in on reveal. Use `{{answer::hint}}` to show a hint instead of `[ … ]`. |

`Q:`/`A:` can also be written `Question:`/`Answer:` or `Front:`/`Back:`. Both sides can
run to many lines. Everything up to the next `A:` is the front.

### What you can put in a card

- **Markdown**: `**bold**`, `*italic*`, `` `code` ``, lists, `> quotes`, links, headings
- **LaTeX**: `$\Delta G = \Delta H - T\Delta S$` inline, `$$…$$` for display math
- **Code blocks**: triple-backtick fences with a language for syntax highlighting
- **Images**: `![alt](assets/img/thing.svg)`, with paths relative to the **site root**, not the deck file
- **Tags**: a `Tags: one, two` line anywhere in the card

Highlighting (`==like this==`) and strikethrough (`~~like this~~`) work too.

### Adding a deck

```bash
$ vim decks/ch03-proteins.md
$ python3 tools/build-manifest.py     # rescans decks/ and rewrites the manifest
```

The site can't list a directory over static hosting, so `decks/manifest.json` is how it
finds your decks. The script rebuilds it from whatever `.md` files exist. Deck order
follows filename order, which is why the files carry `ch01-`, `ch02-` prefixes.

If you forget to run it, the GitHub Action in
[`.github/workflows/manifest.yml`](.github/workflows/manifest.yml) regenerates and commits
the manifest on push. Delete that file if you'd rather it stayed manual.

## Studying

The scheduler is SM-2 with Anki-style learning steps. New cards appear at 1 and 10 minutes,
graduate to 1 day, then grow by an ease factor that moves with how you rate them. Each
rating button shows the interval it will actually give you.

| Key | Action |
|---|---|
| `Space` / `Enter` | Show answer, then rate as *Good* |
| `1` `2` `3` `4` | Again, Hard, Good, Easy |
| `A` to `Z`, or `1` to `9` | Pick a multiple-choice option |

Daily limits (20 new, 200 reviews) are adjustable in **Settings**, along with a shuffle
toggle. **Cram** replays a whole deck without touching your scheduling.

## Progress and your data

Scheduling lives in this browser's `localStorage` under `alberts-srs-v1`. Nothing is sent
anywhere and there is no account. That also means progress doesn't follow you between
devices or survive clearing site data, so **Settings → Export progress** writes a JSON file
you can import elsewhere. Card identity is a hash of the question text, so editing an
answer or reordering a deck keeps your scheduling. Rewording a question resets that one card.

## Running it locally

```bash
$ python3 -m http.server 8000
```

Then open <http://localhost:8000>. It has to be served over HTTP rather than opened as a
`file://` path, because the decks are loaded with `fetch`.

## How it's put together

```
index.html                  app shell
assets/css/style.css        all styling, light and dark
assets/js/markdown.js       markdown to HTML, with math/code/cloze extraction
assets/js/deck.js           deck file to cards
assets/js/srs.js            SM-2 scheduling and localStorage
assets/js/app.js            hash router and views
decks/*.md                  the cards
decks/manifest.json         generated list of decks
tools/build-manifest.py     regenerates the above
```

KaTeX and highlight.js load from jsDelivr and are the only external requests. Both are
optional. Without them math falls back to raw TeX and code blocks render unhighlighted,
so the site still works offline or if the CDN is blocked. To drop the network dependency
entirely, download both into `assets/vendor/` and repoint the tags in `index.html`.

Deployment is GitHub Pages serving the branch directly, so pushing to `main` is the deploy.
