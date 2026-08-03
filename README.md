# Alberts Materials

Chapter write-ups and spaced-repetition cards for my reading of *Molecular Biology of the
Cell*. Live at **[alberts.liam-w.com](https://alberts.liam-w.com)**.

Everything is plain markdown. Write it in any editor and commit. There is no build step
and nothing to install.

## How it's organised

A **chapter** is two files that share a filename:

```
notes/ch01-cells-and-genomes.md     the write-up
decks/ch01-cells-and-genomes.md     the cards
```

Either half can be missing while you're partway through. A chapter with notes and no deck
still shows up and is readable; a chapter with a deck and no notes is still studyable. The
filename is the link between them, so the two must match exactly.

After adding or renaming either file:

```bash
$ python3 build-manifest.py
```

That rescans both directories and rewrites `chapters.json`, pairing files by name.
Static hosting can't list a directory, so `chapters.json` is how the site finds anything.
Chapters are ordered by filename, which is why they carry `ch01-`, `ch02-` prefixes.

If you forget to run it, the GitHub Action in
[`.github/workflows/manifest.yml`](.github/workflows/manifest.yml) is the safety net. It
waits for the Pages deploy of your push to finish, rebuilds `chapters.json`, and if that
changed anything it commits the fix and asks Pages for a fresh build. Delete that file if
you'd rather keep it manual.

## Writing a chapter write-up

A normal markdown post with front matter:

```markdown
---
title: Ch 3. Proteins
description: One line, shown on the chapter list and under the title.
date: 2026-08-10
tags: [mboc, ch3]
---

Opening paragraph, no heading needed.

## Shape is function

Use `##` for sections and `###` for subsections. Anything with three or more
sections gets a table of contents in the margin automatically.
```

`##` becomes a top-level section under the page title, and every heading gets an anchor so
the contents sidebar can link to it. Reading time is estimated from the word count.

Write-ups take the full markdown set: **bold**, *italic*, lists, `> quotes`, tables, links,
images, fenced code blocks, and LaTeX with `$…$` or `$$…$$`.

## Images

Put the file in `assets/img/` and reference it with a path from the **site root**, not from
the file you're writing in. This trips people up: the markdown lives in `notes/`, but the
page is served from `/`, so there is no `../`.

```markdown
![The three domains, with Bacteria branching off first](assets/img/three-domains.svg)
```

When an image sits alone in its own paragraph, it renders as a figure and the alt text
becomes the caption underneath. Put the image inline in a sentence and it stays inline with
no caption, so the alt text is only read by screen readers.

The same syntax works inside a card, on either side:

```markdown
Q: In the diagram below, which stage produces the majority of the cell's ATP?

![Three stages of catabolism](assets/img/catabolism-stages.svg)

- [ ] Stage 1, digestion
- [x] Stage 3, oxidative phosphorylation
```

Both examples are live in the repo: the tree in
[`notes/ch01-cells-and-genomes.md`](notes/ch01-cells-and-genomes.md) and the card in
[`decks/ch02-cell-chemistry-and-bioenergetics.md`](decks/ch02-cell-chemistry-and-bioenergetics.md).

SVG is worth preferring for diagrams you draw yourself. It stays sharp at any size, weighs
almost nothing, and a `@media (prefers-color-scheme: dark)` block inside the file lets it
follow the site theme, which is what the two existing diagrams do.

## Writing cards

One deck file per chapter. Cards are separated by a line of `---`.

```markdown
---
title: Ch 3. Proteins
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
| **Multiple choice** | `- [x]` correct, `- [ ]` wrong | Clickable options, graded immediately. More than one `[x]` makes it select-all. An `A:` becomes the explanation. |
| **Cloze** | `{{hidden text}}` in the question | Renders as a blank, filled in on reveal. Use `{{answer::hint}}` for a hint instead of `[ … ]`. |

`Q:`/`A:` can also be written `Question:`/`Answer:` or `Front:`/`Back:`. Both sides can run
to many lines. Everything up to the next `A:` is the front.

Cards accept the same markdown as write-ups, plus a `Tags: one, two` line anywhere in the
card.

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
toggle. **Cram** replays a whole chapter without touching your scheduling.

## Progress and your data

Scheduling lives in this browser's `localStorage` under `alberts-srs-v1`. Nothing is sent
anywhere and there is no account. That also means progress doesn't follow you between
devices or survive clearing site data, so **Settings → Export progress** writes a JSON file
you can import elsewhere. Card identity is a hash of the question text, so editing an
answer or reordering a chapter keeps your scheduling. Rewording a question resets that one
card.

## Running it locally

```bash
$ python3 -m http.server 8000
```

Then open <http://localhost:8000>. It has to be served over HTTP rather than opened as a
`file://` path, because the content is loaded with `fetch`.

## How it's put together

```
index.html                  app shell
assets/css/style.css        all styling, light and dark
assets/js/markdown.js       markdown to HTML, with math/code/table/cloze handling
assets/js/deck.js           deck file to cards
assets/js/srs.js            SM-2 scheduling and localStorage
assets/js/app.js            hash router and views
assets/img/*.svg            diagrams
notes/*.md                  chapter write-ups
decks/*.md                  chapter cards
chapters.json               generated pairing of the two
build-manifest.py           regenerates the above
```

Routes are hash-based (`#/chapter/<slug>`, `#/cards/<slug>`, `#/study/<slug>`) so deep links
work on GitHub Pages without server-side rewrites.

KaTeX and highlight.js load from jsDelivr and are the only external requests. Both are
optional. Without them math falls back to raw TeX and code blocks render unhighlighted, so
the site still works offline or if the CDN is blocked. To drop the network dependency,
download both into `assets/vendor/` and repoint the tags in `index.html`.

Deployment is GitHub Pages serving the branch directly, so pushing to `main` is the deploy.
`.nojekyll` is required: without it Jekyll would rewrite the markdown files and the site
would find nothing.
