// const CACHE_NAME = "application-v1";
// const urlsToCache = ["index.html", "offline.html"];

// const self = this;

// //Install SW
// self.addEventListener("install", function (event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// //listen for request
// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     //check if request is in cache
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       }
//       //if not in cache, fetch from network
//       return fetch(event.request)
//         .then(function (response) {
//           //if response is good, cache it
//           if (response.status === 404) {
//             return caches.match("offline.html");
//           }
//           return caches.open(CACHE_NAME).then(function (cache) {
//             cache.put(event.request.url, response.clone());
//             return response;
//           });
//         })
//         .catch(function () {
//           //if network is down, show offline page
//           return caches.match("offline.html");
//         });
//     })
//   );
// });

// //Activate the SW
// self.addEventListener("activate", function (event) {
//   var cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }else{
//             return null;
//           }
//         })
//       );
//     })
//   );
// });

//create a service worker
// Language: javascript

const CACHE_NAME = "application-v1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

//install sw
self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

//listen for request
self.addEventListener("fetch", function (event) {
  event.respondWith(
    //check if request is in cache
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      //if not in cache, fetch from network
      return fetch(event.request)
        .then(function (response) {
          //if response is good, cache it
          if (response.status === 404) {
            return caches.match("offline.html");
          }
          return caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
        .catch(function () {
          //if network is down, show offline page
          return caches.match("offline.html");
        });
    })
  );
});

//activate the sw
self.addEventListener("activate", function (event) {
  var cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          } else {
            return null;
          }
        })
      );
    })
  );
});