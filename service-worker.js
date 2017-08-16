const HTMLToCache = '/';
const version = 'MSW V0.3';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(version).then((cache) => {
    cache.add(HTMLToCache).then(self.skipWaiting());
  }));
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        // console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
