'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fba30369558644a65a4a3deecf5b0f36",
"assets/AssetManifest.bin.json": "98c5507407dfe317ef7f7560855bcb58",
"assets/AssetManifest.json": "caf8f436ff5059d846d6b4711f568538",
"assets/Assets/images/A4%2520-%252011-1.png": "969f407967d26ef5774184d9b5f7f90c",
"assets/Assets/images/ask-question.svg": "6ba28b70d29985158cfe70d2ac77f7d1",
"assets/Assets/images/Back%2520E1%2520(2)-1.png": "179004bfbe33d1ef6dc2515d5bacb095",
"assets/Assets/images/gallery.png": "41548a14c6dc07cbddfd65fc92981abd",
"assets/Assets/images/logo/android.png": "2b564d5ca62f804d4f02ddf4d6bbaecb",
"assets/Assets/images/logo/ios.png": "ee8aa0bde7cc2f672ffb709f2a658299",
"assets/Assets/images/logo/windows.png": "b71b12e966142882f2f323a19f8112a1",
"assets/Assets/images/main_bg.png": "c2039406db685a5e93bbab595abd4e0f",
"assets/Assets/images/map/map.png": "6e2c86e5d57216a1ad8a62936894cca6",
"assets/Assets/images/partners/1.jpg": "09a4d4644826096c5af35ebc564f8d6b",
"assets/Assets/images/partners/10.png": "6a5a56ffc6fa94b6dcb72361cf5d7b72",
"assets/Assets/images/partners/11.png": "1acb0414d28fc82e80b157f333ea0cee",
"assets/Assets/images/partners/12.png": "adb923eb8836b3dcced79e2aecec79c3",
"assets/Assets/images/partners/13.png": "3d21764ecd4e64dcb87abe3392e7834b",
"assets/Assets/images/partners/14.png": "0675057dc402c5f71e1c509844dace52",
"assets/Assets/images/partners/15.jpeg": "57e98b75f010578f4beec3ba9d177e1b",
"assets/Assets/images/partners/16.png": "f81251e97f6c66bb33e69f642a633c6f",
"assets/Assets/images/partners/17.png": "749319b15465e148a0d56784dcb47bab",
"assets/Assets/images/partners/18.png": "6675be52cf4826e38abd6b633978654b",
"assets/Assets/images/partners/19.png": "54f94ae1a6fe1ac5eded0575197cd538",
"assets/Assets/images/partners/2.png": "00c21ca6023a71913deaf4317c3f20e9",
"assets/Assets/images/partners/20.png": "b268b252241ac5a296b184d780898c07",
"assets/Assets/images/partners/3.png": "acc3eea51615c134518f18d5f8216041",
"assets/Assets/images/partners/4.png": "dee438ae01aca7f1938a0087e5068730",
"assets/Assets/images/partners/5.jpg": "305b97eae6397c6885c5a7ad69565f9d",
"assets/Assets/images/partners/6.png": "86f5a14d89bb685168c82fd448b3bc25",
"assets/Assets/images/partners/7.png": "ba8805e8d1a3ceb6edb789411ecddcd7",
"assets/Assets/images/partners/8.png": "5593121e5b973e9252d025e41e25a7c6",
"assets/Assets/images/qr_code.png": "d9238b2ad49eb59d80d8f3aec0837696",
"assets/Assets/images/semanoor_app.png": "117544e9f1877d9265a95e56dbdc7be9",
"assets/Assets/images/solutions/A4%2520-%252011-1.png": "853f6cefae9ff48d2a478eaadd2e29d4",
"assets/Assets/images/solutions/A4%2520-%252011-2.png": "325bb1289441089869663f51ccd79ce3",
"assets/Assets/images/solutions/back%2520e2.png": "bcd489192c27febc28768ade3a8e93a2",
"assets/Assets/pdf/A4%2520-%252011.pdf": "07332cacff9cd2c8bbbe98da47474709",
"assets/Assets/Video/bg-vid.mp4": "4b4bcaf93fa453960798aa6362e36428",
"assets/FontManifest.json": "0a7d39e5f676f53c22231829a04c5f56",
"assets/fonts/MaterialIcons-Regular.otf": "a65fbd5e6d783473511439ff1693780e",
"assets/NOTICES": "50d06f7b5cf8aa124b9fc14f38cd9429",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e597627e001fc3b327ea02544b43a25c",
"/": "e597627e001fc3b327ea02544b43a25c",
"main.dart.js": "782aac581968e000be2d8c6b4048809b",
"manifest.json": "3e03c07407da217a03607e37a0319d93",
"version.json": "b55948ac6766bf756730ec65631bf444"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
