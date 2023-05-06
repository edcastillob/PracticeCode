const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "Contador.js",
    "index.js"
]

const CACHE_NAME = "v2_cache_contador_react"

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then( () =>{
                self.skipWaiting()
            }).catch(console.log)
        })
    )
});


self.addEventListener("activate", (e) => {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
       caches.keys().then((cachesNames) => {
            return Promise.all(cachesNames.map(cachesName => {
             return (
               cacheWhiteList.indexOf(cachesName) === -1 && caches.delete(cachesName)  
             ); 
            })
            )
       }).then(() => self.clients.claim())
    )
})

self.addEventListener("fecth", (e) => {
    e.respondWith(() => {
        caches.match(e.request).then((resp) => {
         if (res) {
            return res;
        }
        return fetch(e.request);
        });    
   });       
});