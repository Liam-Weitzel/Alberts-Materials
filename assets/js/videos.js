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
 * `url` is the only field that has to be right. It is parsed into an embed URL
 * and a poster image, and anything unrecognized still renders as a plain
 * outbound link rather than disappearing.
 *
 * `thumbnail` is optional and almost never needed: YouTube posters are derived
 * from the url. Set it to override a bad poster, or to give one to a provider
 * whose thumbnails we cannot derive.
 */
window.Videos = (function () {
  'use strict';

  var order = [];

  /* ---- url parsing ---- */

  /* "56:12" and "1:02:33", the way durations are written in videos.json. */
  function clockToSeconds(s) {
    if (typeof s === 'number') return s;
    if (!s) return 0;
    var parts = String(s).split(':');
    var total = 0;
    for (var i = 0; i < parts.length; i++) {
      var n = parseInt(parts[i], 10);
      if (isNaN(n)) return 0;
      total = total * 60 + n;
    }
    return total;
  }

  /* Back the other way, for "Resume 8:12". */
  function clock(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = h && m < 10 ? '0' + m : String(m);
    return (h ? h + ':' : '') + mm + ':' + (s < 10 ? '0' + s : s);
  }

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
    // enablejsapi lets the player report where it has got to, which is what
    // draws the watched bar. `origin` is what makes that channel safe to talk
    // on; without a real http origin (a file:// preview, say) it is left off
    // and the bar simply never fills.
    var q = ['rel=0', 'modestbranding=1', 'playsinline=1', 'enablejsapi=1'];
    var here = (typeof location !== 'undefined' && location.origin) || '';
    if (/^https?:\/\//.test(here)) q.push('origin=' + encodeURIComponent(here));

    var list = u.searchParams.get('list');
    if (list) q.push('list=' + encodeURIComponent(list));

    // Deliberately not folded into the query: a saved position has to be able
    // to override the author's deep link, and two start= params would not.
    var start = seconds(u.searchParams.get('t') || u.searchParams.get('start'));

    // maxresdefault is 1280x720 but only exists for videos uploaded with a big
    // enough source; hqdefault always exists, so it is the fallback the card
    // swaps in when the first one 404s.
    var vi = 'https://i.ytimg.com/vi/' + encodeURIComponent(id) + '/';

    return {
      provider: 'youtube',
      id: id,
      embed: 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?' + q.join('&'),
      watch: 'https://www.youtube.com/watch?v=' + encodeURIComponent(id) + (list ? '&list=' + encodeURIComponent(list) : ''),
      thumb: vi + 'maxresdefault.jpg',
      thumbFallback: vi + 'hqdefault.jpg',
      start: start
    };
  }

  /* ---- watch progress ----
   *
   * Kept in its own localStorage key rather than inside the SRS record, so
   * resetting your scheduling does not wipe what you have watched and vice
   * versa. Keyed by the provider's own video id, never by position in
   * videos.json, so reordering or inserting entries does not shuffle anyone's
   * history onto the wrong video.
   */

  var PKEY = 'alberts-video-progress-v1';
  var marks = null;

  function store() {
    if (marks) return marks;
    marks = {};
    try {
      var d = JSON.parse(localStorage.getItem(PKEY) || 'null');
      if (d && d.videos) marks = d.videos;
    } catch (e) {
      // Private mode, or someone hand-edited it into nonsense. Starting empty
      // loses history; failing here would lose the videos section entirely.
    }
    return marks;
  }

  /* Writes are batched by the caller: this is the one that touches the disk. */
  function flush() {
    try {
      localStorage.setItem(PKEY, JSON.stringify({ version: 1, videos: store() }));
    } catch (e) {
      // Full or read-only storage. A progress bar is not worth an exception.
    }
  }

  function mark(key, t, d) {
    if (!key || typeof t !== 'number' || !isFinite(t) || t < 0) return;
    var s = store();
    var rec = s[key] || (s[key] = {});
    rec.t = Math.round(t);
    if (typeof d === 'number' && d > 0) rec.d = Math.round(d);
    rec.at = Date.now();
  }

  function progress(key) { return (key && store()[key]) || null; }

  function forget() { marks = {}; flush(); }

  /* ---- carried in the export file ----
   *
   * Storage stays in its own key; only the transport file is shared, so one
   * export still moves everything to another device.
   */

  function dump() { return store(); }

  /* Replaces the whole record. Returns how many videos came in — 0 for a file
   * written before watch progress existed, which is not an error. */
  function restore(videos) {
    if (!videos || typeof videos !== 'object') return 0;
    var clean = {}, n = 0;
    Object.keys(videos).forEach(function (k) {
      var r = videos[k];
      // Hand-edited or truncated files get filtered rather than trusted: a
      // bad record here would draw a nonsense bar on every card.
      if (!r || typeof r.t !== 'number' || !isFinite(r.t) || r.t < 0) return;
      clean[k] = { t: Math.round(r.t), at: r.at || Date.now() };
      if (typeof r.d === 'number' && r.d > 0) clean[k].d = Math.round(r.d);
      n++;
    });
    marks = clean;
    flush();
    return n;
  }

  /* How far in, 0 to 1. `fallback` is the duration from videos.json, used when
   * the player has not reported one of its own yet. 0 means "cannot tell",
   * which is drawn as no bar rather than an empty one. */
  function fraction(rec, fallback) {
    if (!rec || !rec.t) return 0;
    var d = rec.d || fallback || 0;
    if (!d) return 0;
    return Math.max(0, Math.min(1, rec.t / d));
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
        provider: src ? src.provider : '',
        // `thumbnail` in the json wins, so a video whose poster is wrong (or
        // whose provider has none) can be given one by hand.
        thumb: v.thumbnail || (src && src.thumb) || '',
        thumbFallback: v.thumbnail ? '' : ((src && src.thumbFallback) || ''),
        // Stable across edits to videos.json, unlike `id`, which is the index.
        key: src ? src.provider + ':' + src.id : '',
        start: (src && src.start) || 0,
        seconds: clockToSeconds(v.duration)
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
    load: load, parse: parse,
    progress: progress, mark: mark, flush: flush, forget: forget,
    fraction: fraction, clock: clock,
    dump: dump, restore: restore
  };
})();
