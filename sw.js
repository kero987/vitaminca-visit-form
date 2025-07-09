self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('visit-form-cache').then((cache) => cache.addAll(['./', './index.html']))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});