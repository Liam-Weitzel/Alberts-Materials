/* The paper library.
 *
 * A paper is a standalone summary in papers/<slug>.md that names the chapters it
 * belongs to in its front matter:
 *
 *   ---
 *   title: Towards a natural system of organisms
 *   authors: Carl R. Woese, Otto Kandler, Mark L. Wheelis
 *   year: 1990
 *   journal: PNAS 87(12), 4576–4579
 *   link: https://doi.org/10.1073/pnas.87.12.4576
 *   chapters: [ch01-cells-and-genomes]
 *   tags: [phylogenetics, archaea]
 *   ---
 *
 *   The summary, in the same markdown a write-up takes.
 *
 * Unlike notes and decks, papers are not paired with a chapter by filename. One
 * paper can sit under several chapters, or none at all while you're still reading
 * it. build-manifest.py lifts the front matter above into chapters.json, so the
 * chapter pages and the library index render off metadata alone. A paper's body is
 * only fetched when you open it, which keeps startup flat as the library grows.
 */
window.Papers = (function () {
  'use strict';

  var byslug = {};
  var order = [];
  var bodies = {};   // slug -> Promise of { meta, body, html }

  function init(list) {
    byslug = {};
    order = (list || []).map(function (p) {
      var paper = {
        slug: p.slug,
        file: p.file || (p.slug + '.md'),
        title: p.title || p.slug,
        authors: p.authors || '',
        year: String(p.year || ''),
        journal: p.journal || '',
        link: p.link || '',
        date: p.date || '',
        chapters: p.chapters || [],
        tags: p.tags || [],
        excerpt: p.excerpt || '',
        words: p.words || 0
      };
      paper.search = (paper.title + ' ' + paper.authors + ' ' + paper.year + ' ' +
                      paper.journal + ' ' + paper.excerpt + ' ' + paper.tags.join(' ')).toLowerCase();
      byslug[paper.slug] = paper;
      return paper;
    });
    return order;
  }

  function all() { return order; }
  function count() { return order.length; }
  function get(slug) { return byslug[slug] || null; }

  function forChapter(slug) {
    return order.filter(function (p) { return p.chapters.indexOf(slug) !== -1; });
  }

  function unlinked() {
    return order.filter(function (p) { return !p.chapters.length; });
  }

  /* Author list shortened for tight spaces: "Woese et al." */
  function shortAuthors(paper) {
    if (!paper.authors) return '';
    var names = paper.authors.split(/\s*(?:,|;| and )\s*/).filter(Boolean);
    if (!names.length) return '';
    var last = names[0].trim().split(/\s+/).pop();
    return names.length > 1 ? last + ' et al.' : last;
  }

  /* "Woese et al., 1990", the label a [[wikilink]] gets when it has none. */
  function citation(paper) {
    var who = shortAuthors(paper);
    if (who && paper.year) return who + ', ' + paper.year;
    return who || paper.year || paper.title;
  }

  /* Called from markdown.js while rendering [[slug]] references. */
  function label(slug) {
    var paper = get(slug);
    return paper ? citation(paper) : null;
  }

  function href(slug) {
    return '#/paper/' + encodeURIComponent(slug);
  }

  /* The summary itself. Cached, so revisiting a paper is free. */
  function load(slug) {
    var paper = get(slug);
    if (!paper) return Promise.reject(new Error('No paper called ' + slug));
    if (bodies[slug]) return bodies[slug];

    bodies[slug] = fetch('papers/' + paper.file, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('papers/' + paper.file + ': HTTP ' + r.status);
        return r.text();
      })
      .then(function (text) {
        var fm = MD.frontMatter(text);
        return { meta: fm.meta, body: fm.body, words: MD.words(fm.body) };
      })
      .catch(function (e) {
        delete bodies[slug];          // let a failed load be retried
        throw e;
      });

    return bodies[slug];
  }

  return {
    init: init, all: all, count: count, get: get,
    forChapter: forChapter, unlinked: unlinked,
    shortAuthors: shortAuthors, citation: citation, label: label, href: href,
    load: load
  };
})();
