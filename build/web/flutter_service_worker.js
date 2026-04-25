'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7423210835a7a41dc0b184d0af1b1ff2",
"assets/AssetManifest.bin.json": "177e37dd2d36a374d2c7cad2963e5969",
"assets/AssetManifest.json": "f91e99b3ffcb35265ee4334a372d96c9",
"assets/assets/animations/confetti.json": "3582cfb8515f738fc46be6f2ec67f95c",
"assets/assets/animations/leaderboard.json": "b5aeca1d56e7ed75c339aed02dca376a",
"assets/assets/animations/No_internet.json": "4754c14d5c64721f8b7e549ad001f606",
"assets/assets/audio/bgm/bgm_game.mp3": "7932d30b000aae5f11180d902582c4ed",
"assets/assets/audio/bgm/bgm_octopus.mp3": "69f6d0028f36c3628e8a8b522ae55b73",
"assets/assets/audio/sfx/animal_rescued.mp3": "e10fb2df41fc12e50443c5e81c409d41",
"assets/assets/audio/sfx/catching_trash.wav": "0acdcfb267211887f2b0987f47a328c3",
"assets/assets/audio/sfx/charging_ball.mp3": "eb7ec6c6e3e48862d2e6e471f6f50478",
"assets/assets/audio/sfx/game_over.mp3": "2b25b90aabcbacec0b4cfd2172f4dae1",
"assets/assets/audio/sfx/level_win.mp3": "b35646b363a10593a0993eec0f87acd4",
"assets/assets/audio/sfx/reduced_health.wav": "e8b329e8be31398add09353b1aec30f6",
"assets/assets/audio/sfx/swinging_net.mp3": "da3f4c76a48188de072b35b88c625a46",
"assets/assets/fonts/ComicNeue-Regular.ttf": "26d37a6883b56cb83fd73b8bc16de513",
"assets/assets/fonts/WendyOne-Regular.ttf": "67fbaacb77b660209fd5e314c425aa09",
"assets/assets/images/animals/crab.png": "1f17f9a2cb5b9d2131f59fd34161da8e",
"assets/assets/images/animals/dolphin.png": "04c254a8cbfb78a0b4225afc11248513",
"assets/assets/images/animals/turtle.png": "5b3a49e27c3d8cc0d5d45c86ed5f6337",
"assets/assets/images/animals/whale.png": "6fe11ec0fa4f0f869df4b52fb99a68ad",
"assets/assets/images/animal_frame.png": "597f63d94bc8a3752f9a9616e90fe603",
"assets/assets/images/background.png": "2a7e5c1327f5d2d46f7f7a569bb874f5",
"assets/assets/images/bg_elements/coral1/frame_00_delay-0.08s.png": "ad079cd8ef37393b26a4a203af884b93",
"assets/assets/images/bg_elements/coral1/frame_01_delay-0.09s.png": "e638b44e0b181be99080811258ab2d07",
"assets/assets/images/bg_elements/coral1/frame_02_delay-0.08s.png": "04059b22d3680a1beb010e9d27f99187",
"assets/assets/images/bg_elements/coral1/frame_03_delay-0.08s.png": "f31c9771fdcacc7d76793f31de00d006",
"assets/assets/images/bg_elements/coral1/frame_04_delay-0.09s.png": "04059b22d3680a1beb010e9d27f99187",
"assets/assets/images/bg_elements/coral1/frame_05_delay-0.08s.png": "ad079cd8ef37393b26a4a203af884b93",
"assets/assets/images/bg_elements/coral2/frame_00_delay-0.08s-copy-0.png": "8a1ed5a69f42d7fcb72533333a5c2685",
"assets/assets/images/bg_elements/coral2/frame_01_delay-0.09s-copy-0.png": "e75ad4a82790ec7442356b077f8165fe",
"assets/assets/images/bg_elements/coral2/frame_02_delay-0.08s-copy-0.png": "6b098ff640090a68b1f89c7fab54d8c8",
"assets/assets/images/bg_elements/coral2/frame_03_delay-0.08s-copy-0.png": "4669a32ff83ef26dbb7e320b98479a4c",
"assets/assets/images/bg_elements/coral2/frame_04_delay-0.09s-copy-0.png": "73a558e223c46117e4b931f82602e3ae",
"assets/assets/images/bg_elements/coral2/frame_05_delay-0.08s-copy-0.png": "01561278b49a9304c9a26287bf374ff5",
"assets/assets/images/bg_elements/coral3/frame_00_delay-0.08s-copy-1.png": "834a44a8cfbc99bd9a07c80f8c06984c",
"assets/assets/images/bg_elements/coral3/frame_01_delay-0.09s-copy-1.png": "e4122b61225a21045dd1134f74f7e7c9",
"assets/assets/images/bg_elements/coral3/frame_02_delay-0.08s-copy-1.png": "68af49001ed7b0892e1b8fea39294d8c",
"assets/assets/images/bg_elements/coral3/frame_03_delay-0.08s-copy-1.png": "a5e8324724caa424fcdeca249bceff45",
"assets/assets/images/bg_elements/coral3/frame_04_delay-0.09s-copy-1.png": "6e0939b2f43247548ed5b65a836b2465",
"assets/assets/images/bg_elements/coral3/frame_05_delay-0.08s-copy-1.png": "7c822c84fd5d19c210c027f688c2f5cc",
"assets/assets/images/bg_elements/coral4/frame_00_delay-0.08s-copy-2.png": "9acc48a3e530d4359869cd004682826f",
"assets/assets/images/bg_elements/coral4/frame_01_delay-0.09s-copy-2.png": "356f26054c570a0bc48530eac189005f",
"assets/assets/images/bg_elements/coral4/frame_02_delay-0.08s-copy-2.png": "0cc2c2a5e087f94886ed6ebf8406e401",
"assets/assets/images/bg_elements/coral4/frame_03_delay-0.08s-copy-2.png": "30a0ac3df0912bcfc9b18cf8c25b7045",
"assets/assets/images/bg_elements/coral4/frame_04_delay-0.09s-copy-2.png": "d0263f97f73b1e685565a877b5bbc0fd",
"assets/assets/images/bg_elements/coral4/frame_05_delay-0.08s-copy-2.png": "456c53dc6a98b2a063e9cc31773e17bd",
"assets/assets/images/bg_elements/coral5/frame_00_delay-0.08s-copy-3.png": "6e5ad38ecda65cb7cbcc0b6e445bd10b",
"assets/assets/images/bg_elements/coral5/frame_01_delay-0.09s-copy-3.png": "cdcdcb8491528960dfa4e6cfa9135e35",
"assets/assets/images/bg_elements/coral5/frame_02_delay-0.08s-copy-3.png": "d36913cde8dcb65667f9e20f461d6bf7",
"assets/assets/images/bg_elements/coral5/frame_03_delay-0.08s-copy-3.png": "30e7213c57e85687e25c6e7aa4b988cd",
"assets/assets/images/bg_elements/coral5/frame_04_delay-0.09s-copy-3.png": "6604d6d4c587a61ee7a7f487b1ce911e",
"assets/assets/images/bg_elements/coral5/frame_05_delay-0.08s-copy-3.png": "c3490baf0c34015a2fd6e3497289f3a4",
"assets/assets/images/bg_elements/coral6/frame_00_delay-0.04s.png": "cfe3af53f1d02bf57f946e6177c17f64",
"assets/assets/images/bg_elements/coral6/frame_01_delay-0.04s.png": "61fdfb942aa9e63f9c26531e60ec97df",
"assets/assets/images/bg_elements/coral6/frame_02_delay-0.05s.png": "41eece2d8e90dd3fa5a2667e65b27583",
"assets/assets/images/bg_elements/coral6/frame_03_delay-0.04s.png": "75929d4c2f6126778f0f20764dadf4f1",
"assets/assets/images/bg_elements/coral6/frame_04_delay-0.04s.png": "d984d8a8ce9726871c82d4974c99460b",
"assets/assets/images/bg_elements/coral6/frame_05_delay-0.04s.png": "8b3192315dd8c334c39a708f6f45df2f",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame1.png": "72ea4ebb98e8ef61e35c6ae3bbfbcd59",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame2.png": "3211cf34555f55338c63bb9176e6cc52",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame3.png": "be7567ebc4862ca177b3f1521308a442",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame4.png": "b6360c553f888108075892612f248afc",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame5.png": "be7567ebc4862ca177b3f1521308a442",
"assets/assets/images/bg_elements/coral_1_flip/coral1_frame6.png": "b0c13d2d6c92e962c9342b3e66507507",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame1.png": "93b868493bab7e348ba84e3f0aa87419",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame2.png": "45e50a18ff42b94ca538f610aa55d6aa",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame3.png": "cd9f26a214a9b1fd63411247323438c0",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame4.png": "bdb63facbe69d7dbcba18c85ed06f481",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame5.png": "7a7231532fd2fc55f67b5c9ebd9d4857",
"assets/assets/images/bg_elements/coral_6_flip/coral6_frame6.png": "e22d79cca4646af7d4af7e9db5cf71ae",
"assets/assets/images/bubble.png": "02a2e5ad2860f58f21fcab65135985e1",
"assets/assets/images/Button_Continue.png": "1aeffaf7e32961089715b403d7696b27",
"assets/assets/images/catch_button_default.png": "3d196f935aa367d9a621e1b09dab174f",
"assets/assets/images/catch_button_pressed.png": "8b5fb9808def17ae4daf6cea2bc6cfdd",
"assets/assets/images/Dolphin_01_1.png": "c52240bceb4e75417e4fc443fb19138b",
"assets/assets/images/enemies/octopus.png": "32059698831d07cdff871e8c4cbe7518",
"assets/assets/images/enemies/shark.png": "2cb75f134818fc652c9fc8e4522214f6",
"assets/assets/images/fish_net.png": "f7fa041b56b3d4f74f8b91f2efc7deb6",
"assets/assets/images/freed_animals/Crab.png": "8dd8205fb31d860973d5f061d06978ad",
"assets/assets/images/freed_animals/Turtle.png": "4d64bff5b4f200b1cbaebdb77cf27687",
"assets/assets/images/freed_animals/Whale.png": "7220ab9b610dc01890a5706a33a98271",
"assets/assets/images/Game_Title.png": "8d73c86b832353e87417e214fe837c52",
"assets/assets/images/health.png": "4c5f43eba9dae7fc83df0152129f07e6",
"assets/assets/images/levels/Level1.png": "c2b1e9918bb3b488aead795448a3b42d",
"assets/assets/images/levels/Level2.png": "77b61072b335d99962679d862bda7012",
"assets/assets/images/levels/Level3.png": "b3e3b20e2c093ade2e2e72eb558464e4",
"assets/assets/images/levels/Level4.png": "c74426a7e691c6013b68d5e938b6f84c",
"assets/assets/images/levels/Level5.png": "bea9e1a73bef72af5946e79c66bbf2a8",
"assets/assets/images/levels/Unlocked_Level.png": "7f8362b3c69280a2190687107c37611d",
"assets/assets/images/lightning.png": "986a86a40b5fdd1f45e066476f50406e",
"assets/assets/images/meter_bar.png": "e07ee8efbaf0b6ed4567ee335a0b3874",
"assets/assets/images/meter_holder.png": "d60709e2b553e5035c4585503053c7e3",
"assets/assets/images/onscreen_control_base.png": "aecff5c487281fc06acadae2726ef2f5",
"assets/assets/images/onscreen_control_knob.png": "896144498095c007263337e0504826df",
"assets/assets/images/pause_button.png": "9e4026050834da844050cd9de8b9ce6a",
"assets/assets/images/player.png": "635ccf549e83e896da93fea08a70371e",
"assets/assets/images/play_button.png": "d3a02ed3856b542481c70a0c2632d1ce",
"assets/assets/images/rescue_complete.png": "ff140233202868be5fd484a11c0ed005",
"assets/assets/images/rescue_failed.png": "9da20cfee1dfdeb70b3238fcdf6e25f1",
"assets/assets/images/Sad_Crab_01_6.png": "dc3fd31429a09f09b2d43d8c7a9b3135",
"assets/assets/images/Sad_Turtle_01_1.png": "04029e4cbb75fdc25b3690942202b8e2",
"assets/assets/images/screen_background.png": "aa8bbff0911c34ec9802504f08eab022",
"assets/assets/images/solo_shark.png": "de3eecb97383ee30b5ed56a1ac1729a7",
"assets/assets/images/start_button.png": "6173703cca44bf40041ae87b056200be",
"assets/assets/images/stopwatch.png": "2007e59dacadf4da09f31663efd0a768",
"assets/assets/images/trashes/bag_trash.png": "da6e747661c7f6a2726fd8d87bb42add",
"assets/assets/images/trashes/cutleries.png": "9314d4b910360c4549fa9dc00cbf4619",
"assets/assets/images/trashes/plastic_cup.png": "95d25cbb122fa93cfd29f91ebd515969",
"assets/assets/images/trashes/straw.png": "95ba8d0cbdbe18f3786df83d9b8da5ac",
"assets/assets/images/trashes/styrofoam.png": "d8a80ffd9284a34031e0318bd3582fb3",
"assets/assets/images/trashes/water_bottle.png": "8c214dbed6d9dbd400ef4f0210099dd5",
"assets/assets/images/trashes/water_gallon.png": "c1862bccc7fccfc37946b30d63b12dff",
"assets/assets/images/tutorials/animal_frame_green.png": "148ea141070986592a54cbc3363482a5",
"assets/assets/images/tutorials/animal_rescue_box.png": "56673ad44a046e921675b95e10f9c18e",
"assets/assets/images/tutorials/full_meter.png": "58301b7a56c2218c61187c393fb17dda",
"assets/assets/images/tutorials/Instructions_title.png": "dd0f8bb25a6de7e9f5e3682cb81eeebb",
"assets/assets/images/tutorials/Introduction_two.png": "94a81c13921ef30932fd7ef2999eb701",
"assets/assets/images/tutorials/intro_two.png": "71c649e76723635ee845d1dbad75a213",
"assets/assets/images/tutorials/Joystick.png": "47d873feac51acc9b96097adc553b879",
"assets/assets/images/tutorials/keyboard_button.png": "0b1570c432cc13d6f158d0b8b3153d17",
"assets/assets/images/tutorials/Knob.png": "33854770a10e29d7f5a6b24459826cf8",
"assets/assets/images/tutorials/new_mission_title.png": "66dab20b20843182fdf6196f962249ed",
"assets/assets/images/tutorials/octopus_mission_box.png": "d16fd9fab80ad68a855322545970e33f",
"assets/assets/images/tutorials/octo_mission_title.png": "f38641a02ac9cc65e8325c19b3b5a613",
"assets/assets/images/tutorials/ready_button.png": "d9b64b4f8860592f2f1a509e09c0b636",
"assets/assets/images/tutorials/tutorial_crab.png": "6425b20ed9b303a2d173d3cd78455e28",
"assets/assets/images/whale_sprite.png": "7fa44e3fcaec35eca0a205e0b1c13c26",
"assets/assets/tiles/corals_tileset.tsx": "f1720bd920af4f7e861859087f8195a0",
"assets/assets/tiles/images_tileset.tsx": "82d0fb133f69c0f32b3b445fc0d9eeb4",
"assets/assets/tiles/stage1.tmx": "091279acd3ac0a92411a14e3dfe7dfa7",
"assets/FontManifest.json": "fa85d88a78a4d1a2ef47642bd22b232e",
"assets/fonts/MaterialIcons-Regular.otf": "6301aa9c82b8821238d9ae07d6f154d0",
"assets/NOTICES": "2f525bbd4417139cd060e4288e7f5609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4d06a976eac66ba03a0e71fdbeb150f1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "69e753d4ed8119e3c8d8ff716be3b78b",
"icons/Icon-512.png": "488b61c24702a1ed6f04250788d4dfb9",
"icons/Icon-maskable-192.png": "69e753d4ed8119e3c8d8ff716be3b78b",
"icons/Icon-maskable-512.png": "488b61c24702a1ed6f04250788d4dfb9",
"index.html": "e4fd101e07a91426ef9f0d98c17bc2f8",
"/": "e4fd101e07a91426ef9f0d98c17bc2f8",
"main.dart.js": "154b6c9527ea99788de66b7314aea08f",
"manifest.json": "bcb4d2067b5a72ee8db27c76ae6c5c5d",
"version.json": "162e9b941dc563410c59985ff3aeb403"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
