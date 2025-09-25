const CACHE_NAME = 'tiles-calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // आप यहाँ अपनी CSS और JS फाइलों के नाम भी जोड़ सकते हैं अगर वे अलग हैं
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
