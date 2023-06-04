var cacheName = '2021Version';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(['./dragon.jpg'])) );
});

self.addEventListener('message', e => {
  if(e.data.action === 'skipWaiting'){
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
        if(response){
          return response;
        }
        return fetch(event.request);
      })
  );
});