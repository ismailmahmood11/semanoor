'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6967524e3919e8e097f0957c7e9e8353",
"version.json": "0572b589748c642cd29b7477514a9dc4",
"index.html": "62d5250e2e4ce799f322c4828392f188",
"/": "62d5250e2e4ce799f322c4828392f188",
"main.dart.js": "f840ca818f04995b755a967558554d8d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "663e61a1198e8d34cd9da3a4163a579f",
"assets/AssetManifest.json": "1dcc7697666b6e69bde0c34f6a967960",
"assets/NOTICES": "7da941079b98ce7dcba56c1ce59cdb43",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/AssetManifest.bin.json": "c25ec68a0198ba028812e5a27d9e7271",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "a9989c356a88d3bb1f11c710ff2923de",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b60ab99357742cb757a514ee2f74d58f",
"assets/fonts/MaterialIcons-Regular.otf": "97487b6112ce8fbf46305ebc0819e019",
"assets/assets/images/vr/vr2-min.png": "ac2c1ff4e58aa4d410f396975f59dd2d",
"assets/assets/images/vr/vr3-min.png": "9e2cebe4bb11423e5947d609fbfd2156",
"assets/assets/images/vr/vr1-min.png": "ef629bf1b15667e00d1a5aa6a880fa99",
"assets/assets/images/products/kg-12.png": "e4871612c2d016cfed80b56b138cba99",
"assets/assets/images/products/kg_to_12_kid.png": "a62dd157cf0bdddc34dfd5c75d96ec04",
"assets/assets/images/products/publisher.png": "52e3276a24dee0fad36ece2fc9ed3ac9",
"assets/assets/images/products/university.png": "e2088fcb3e814037a38ad44fba8a5cf0",
"assets/assets/images/products/kg_section.png": "5f435585fc823554ff41ab328230629a",
"assets/assets/images/products/training.png": "a6d2105d4dfcdddeb64ac780eb4fc434",
"assets/assets/images/products/author.png": "56f0f26ceca1e81b2aa59c3d72ff044f",
"assets/assets/images/products/publisher_2.png": "f7e2a5f075eea3176ed753a414c5366f",
"assets/assets/images/book_cover/book3-min.jpg": "2b8f96441eceb9d02ea4527f88db9e8c",
"assets/assets/images/book_cover/book2-min.jpg": "f04e93f54cd718339523a68ea9f49564",
"assets/assets/images/book_cover/book1-min.jpg": "57936a1c81a966d4587f50b966541891",
"assets/assets/images/solutions/smart_book.png": "cf3fc6726e6ed82c2b27a724189be19d",
"assets/assets/images/about_us.png": "8afbfa4e47899abf40bb263c441032d6",
"assets/assets/images/logo/semanoor_logo.png": "9c2b3142b53833f38b559c3196b42ad6",
"assets/assets/images/contact_us.jpg": "69f19734e1c7b8275806d283d0d46f25",
"assets/assets/images/landing_page/landing_page_background_2.png": "fa177326baded3bc5c9baf7855414f46",
"assets/assets/images/landing_page/empowering_semanoor_bg_2.png": "bed52a7605e117f2a53640c818ae94d8",
"assets/assets/images/landing_page/landing_page_background.png": "ccf8f6788985a87697c41a33556f1983",
"assets/assets/images/landing_page/empowering_futures_background.png": "d4cc169e241a7e6eb7611e9adcd24433",
"assets/assets/images/games/game%2520ss%25205-min.png": "01c701830b4fd95c3594725be35080c4",
"assets/assets/images/games/game%2520ss%25204-min.png": "534f1756853bdb4cf4e20e6786634cad",
"assets/assets/images/games/game%2520ss%25206-min.png": "e71ee8983553ecb9dc61e3ad54ea3a49",
"assets/assets/images/games/game%2520ss%25202-min.png": "9993c2d0a3691415e6e1a04674b20262",
"assets/assets/images/games/game%2520ss%25203-min.png": "2df32dfa1932de863032a9aefcf00511",
"assets/assets/images/games/game%2520ss%25201-min.png": "46898e4b0504d81cf8804c1ff0530a9f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
