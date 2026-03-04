const CACHE_NAME = 'lost-books-v20';
const ASSETS = ['./', './index.html', './css/print.css', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-192-dark.png', './icons/icon-512-dark.png', './splash.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(async (cache) => {
    await cache.addAll(ASSETS);
    // Pre-cache all parallels for offline reading
    const resp = await fetch('./index.html');
    const text = await resp.text();
    const parallels = [...text.matchAll(/{ id:\d+, lostBook:{name:'([^']+)',ref:'([^']+)',text:'([^']+)'}[^}]+bible:{ref:'([^']+)',text:'([^']+)'}[^}]+theme:'([^']+)',notes:'([^']*)'}/g)];
    const urls = parallels.flatMap((_, i) => [
      `./parallel/${i}/lost.html`,
      `./parallel/${i}/bible.html`
    ]);
    await cache.addAll(urls);
  }));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
