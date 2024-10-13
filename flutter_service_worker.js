'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ea6442cad6942e1213598487f8d428ea",
"version.json": "b7562729f23e4ec538295d7f2b2aa692",
"index.html": "c77a703182820263e35f89663cd0c2f4",
"/": "c77a703182820263e35f89663cd0c2f4",
"main.dart.js": "1f58c8925b0a3eaa90302e41076759db",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "415f6dca17f78ed871622e43d4d7f256",
"assets/AssetManifest.json": "8838a4e198fcf60d71feb4627e18964a",
"assets/NOTICES": "97d6956a974c406f0ad1770c65e12e83",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "751ca116e821f8bc925f4ac4cddbeae2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "a9989c356a88d3bb1f11c710ff2923de",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "23eb9024b0fde55890de8842d056692e",
"assets/fonts/MaterialIcons-Regular.otf": "d2a15f3dae023ac96730780a55375b46",
"assets/assets/3d/ipad_pro.glb": "11ed9ed71305452e4294a71a058ca0d9",
"assets/assets/images/vr/vr2-min.png": "ac2c1ff4e58aa4d410f396975f59dd2d",
"assets/assets/images/vr/vr3-min.png": "9e2cebe4bb11423e5947d609fbfd2156",
"assets/assets/images/vr/vr1-min.png": "ef629bf1b15667e00d1a5aa6a880fa99",
"assets/assets/images/smart_book/bg/smart_book_cover.jpg": "e1546db0a5dbbb3664d173a9245a95d0",
"assets/assets/images/kindergarten/bg/kg.png": "0d8915d06a6679c1a530336badcb0395",
"assets/assets/images/kindergarten/cover/book3-min.jpg": "2b8f96441eceb9d02ea4527f88db9e8c",
"assets/assets/images/kindergarten/cover/book2-min.jpg": "f04e93f54cd718339523a68ea9f49564",
"assets/assets/images/kindergarten/cover/kg_cover_1.png": "8ebc33235c17160d9b6253b56e283128",
"assets/assets/images/kindergarten/cover/kg_cover_2.png": "add15e3570c0e5be743dc9ccc84d1f06",
"assets/assets/images/kindergarten/cover/kg_cover_3.png": "183672543e96a11c437dfb0abcceaba5",
"assets/assets/images/kindergarten/cover/book1-min.jpg": "57936a1c81a966d4587f50b966541891",
"assets/assets/images/kindergarten/cover/book_cover.png": "06747ab0456392f5f0e1af3b60a7638d",
"assets/assets/images/Contact%2520Us/office.png": "5685149159ed8081acb22614d48a2189",
"assets/assets/images/Contact%2520Us/office-new.jpg": "69f19734e1c7b8275806d283d0d46f25",
"assets/assets/images/university/uni_background-min.jpg": "db1f3850b91ffd0acddd2f1b504cd910",
"assets/assets/images/who_we_are/computer_class-new.jpg": "81bc0e8b20d35d4dec9d72c6e26c24d2",
"assets/assets/images/who_we_are/computer_class.png": "b0974de45484ef4c570d5839d9052cf1",
"assets/assets/images/logo/semanoor_logo.png": "9c2b3142b53833f38b559c3196b42ad6",
"assets/assets/images/Extra/school.jpg": "42b97cfdd05d21a7ff372ffd19f3e8df",
"assets/assets/images/Extra/publisher.png": "0e4c2cc2ff3dc1dd41e5f0e98ea4abde",
"assets/assets/images/Extra/author.png": "c014a35d843bac1b1808f79633855ba2",
"assets/assets/images/kg_to_12/kg_to_12_kid.png": "a62dd157cf0bdddc34dfd5c75d96ec04",
"assets/assets/images/kg_to_12/kg_to_12.jpg": "3cee54d116d52a3ee1a91b4873005268",
"assets/assets/images/landing_page/landing_page_background.png": "ccf8f6788985a87697c41a33556f1983",
"assets/assets/images/landing_page/empowering_futures_background.png": "d4cc169e241a7e6eb7611e9adcd24433",
"assets/assets/images/games/game%2520ss%25205-min.png": "63531c395b876918495a8aaafd3e5001",
"assets/assets/images/games/games_bg.jpg": "ead79ac3a37128bdde9c5e6737bbbb3d",
"assets/assets/images/games/game%2520ss%25204-min.png": "8b41a9f057d01786a9b33d01b2289c7f",
"assets/assets/images/games/game%2520ss%25206-min.png": "5017b0e4f51b68b0a9fc1e00171eb660",
"assets/assets/images/games/game%2520ss%25202-min.png": "35094b28ec210382f91a08693dc58050",
"assets/assets/images/games/game%2520ss%25203-min.png": "3fa97b84379106e57bfe9e9fd5064d32",
"assets/assets/images/games/game%2520ss%25201-min.png": "40ca78bd4ff4a060da6b766abd1f54a0",
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
