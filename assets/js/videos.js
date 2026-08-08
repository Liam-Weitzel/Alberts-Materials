/* Videos attached to chapters.
 *
 * Unlike notes and decks, a video is not a file in this repo, so there is nothing
 * to scan and nothing for build-manifest.py to do. The whole library is one
 * hand-edited file at the site root:
 *
 *   {
 *     "videos": [
 *       {
 *         "title": "Proteins and Their Functions",
 *         "url": "https://www.youtube.com/watch?v=klkoHEoWKOA",
 *         "source": "Last Minute Lecture",
 *         "duration": "56:12",
 *         "chapters": ["ch03"],
 *         "tags": ["chapter-summary"]
 *       }
 *     ]
 *   }
 *
 * `chapters` works the way a paper's front matter does: `ch03` is enough because
 * prefixes are expanded against the real slugs, and one video can sit under
 * several chapters. A video naming a chapter that does not exist yet is kept but
 * shown nowhere, so the whole playlist can be filled in ahead of the reading.
 *
 * `url` is the only field that has to be right. It is parsed into an embed URL,
 * and anything unrecognized still renders as a plain outbound link rather than
 * disappearing.
 */
window.Videos = (function () {
  'use strict';

  var order = [];

  /* ---- url parsing ---- */

  /* "1h2m3s", "90s" and "90" are all accepted by YouTube's t= parameter. */
  function seconds(t) {
    if (!t) return 0;
    if (/^\d+$/.test(t)) return parseInt(t, 10);
    var m = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(t);
    if (!m) return 0;
    return (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + (+(m[3] || 0));
  }

  var YT_HOST = /(^|\.)(youtube\.com|youtube-nocookie\.com)$/;

  /* Returns { provider, id, embed, watch } or null when the host is not one we
   * know how to embed. Never throws: a malformed url just means no embed. */
  function parse(url) {
    var u;
    try {
      u = new URL(url, 'https://example.invalid');
    } catch (e) {
      return null;
    }
    var host = u.hostname.replace(/^www\./, '');
    var id = null;

    if (host === 'youtu.be') {
      id = u.pathname.slice(1).split('/')[0];
    } else if (YT_HOST.test(host)) {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else {
        var m = /^\/(?:embed|v|shorts|live)\/([^/?#]+)/.exec(u.pathname);
        if (m) id = m[1];
      }
    } else if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      var vm = /(\d+)/.exec(u.pathname);
      if (vm) id = vm[1];
      if (!id) return null;
      return {
        provider: 'vimeo',
        id: id,
        embed: 'https://player.vimeo.com/video/' + encodeURIComponent(id),
        watch: 'https://vimeo.com/' + encodeURIComponent(id)
      };
    }

    if (!id || !/^[A-Za-z0-9_-]{6,}$/.test(id)) return null;

    // youtube-nocookie keeps the embed from writing tracking cookies, and the
    // iframe is only ever created after a click, so nothing is requested from
    // YouTube until the reader asks for it.
    var q = ['rel=0', 'modestbranding=1', 'playsinline=1'];
    var start = seconds(u.searchParams.get('t') || u.searchParams.get('start'));
    if (start) q.push('start=' + start);
    var list = u.searchParams.get('list');
    if (list) q.push('list=' + encodeURIComponent(list));

    return {
      provider: 'youtube',
      id: id,
      embed: 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?' + q.join('&'),
      watch: 'https://www.youtube.com/watch?v=' + encodeURIComponent(id) + (list ? '&list=' + encodeURIComponent(list) : '')
    };
  }

  /* ---- chapter references ---- */

  /* `ch03` names `ch03-proteins` when that is the only chapter it could mean.
   * Deliberately the same rule as resolve_chapter() in build-manifest.py. */
  function resolve(ref, slugs, where) {
    if (slugs.indexOf(ref) !== -1) return ref;
    var hits = slugs.filter(function (s) { return s.indexOf(ref) === 0; });
    if (hits.length === 1) return hits[0];
    if (hits.length > 1) {
      console.warn('[videos] ' + where + ': "' + ref + '" matches ' + hits.length +
        ' chapters (' + hits.join(', ') + '); write it out in full');
    }
    // No match is normal: the chapter may not be written yet, so the video just
    // waits for it rather than being reported as a mistake.
    return null;
  }

  function init(data, chapterSlugs) {
    var slugs = chapterSlugs || [];
    var list = (data && (data.videos || (Array.isArray(data) ? data : []))) || [];

    order = list.map(function (v, i) {
      var where = v.title || v.url || 'video ' + (i + 1);
      var src = parse(v.url || '');
      if (!v.url) console.warn('[videos] ' + where + ': no url, skipping');
      else if (!src) console.warn('[videos] ' + where + ': cannot embed ' + v.url + ', linking instead');

      var chapters = [];
      (v.chapters || []).forEach(function (ref) {
        var slug = resolve(String(ref), slugs, where);
        if (slug && chapters.indexOf(slug) === -1) chapters.push(slug);
      });

      return {
        id: 'v' + i,
        title: v.title || (src ? src.id : v.url) || 'Untitled',
        url: v.url || '',
        source: v.source || '',
        duration: v.duration || '',
        description: v.description || '',
        chapters: chapters,
        tags: v.tags || [],
        embed: src ? src.embed : '',
        watch: src ? src.watch : (v.url || ''),
        provider: src ? src.provider : ''
      };
    }).filter(function (v) { return v.url; });

    return order;
  }

  function all() { return order; }
  function count() { return order.length; }

  function forChapter(slug) {
    return order.filter(function (v) { return v.chapters.indexOf(slug) !== -1; });
  }

  function get(id) {
    for (var i = 0; i < order.length; i++) if (order[i].id === id) return order[i];
    return null;
  }

  /* Optional: the site works without it, so a missing or broken file costs the
   * videos section and nothing else. */
  function load() {
    return fetch('videos.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('videos.json: HTTP ' + r.status);
        return r.json();
      })
      .catch(function (e) {
        if (e instanceof SyntaxError) console.error('[videos] videos.json is not valid JSON', e);
        else console.warn('[videos] no videos loaded:', e.message);
        return null;
      });
  }

  return {
    init: init, all: all, count: count, get: get, forChapter: forChapter,
    load: load, parse: parse
  };
})();
