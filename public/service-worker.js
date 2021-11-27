const doCache = false;
const CACHE_NAME = 'pwa-cache';

self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(caches.keys()
        .then(keyList => Promise.all(keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
                console.log(`Deleting cache: ${key}`)
                return caches.delete(key);
            }
        }))
        )
    );
});

self.addEventListener('install', function (event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    fetch("manifest.json")
                        .then(response => {
                            response.json()
                        })
                        .then(assets => {
                            const urlsToCache = [
                                "/",
                                assets["bundle.js"]
                            ]
                            cache.addAll(urlsToCache)
                            console.log('cached');
                        })
                })
        );
    }
});

self.addEventListener('fetch', function (event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});
