/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93d251d887cf6861e2e7f018461da66d"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.45fd41dd.js",
    "revision": "54fb6d95764e1a0121a73196f188bbbd"
  },
  {
    "url": "assets/js/13.ea886991.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.acac3f04.js",
    "revision": "e68dd2e637e51c551911118a9acea6ea"
  },
  {
    "url": "assets/js/15.03975ac8.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.1d205796.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.b0b32db7.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.9152c63f.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.5def51a4.js",
    "revision": "a85e0b0ecb7dd8646f5276c5f9a6beb1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "bf983b085b69cc71c6963d3189e47fe2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8b1fbf8797998f1d7d8ea1e5e2c371d0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6a0ac20830848563a4128d892ff7edb8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "03ca73a1c78a4c8df8136c54d2d9dcf0"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6b4ab7e8f51016a3317e612ca1545bb7"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "1d48513f684c0ae5d7096280340b8615"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "a37be451c5571814913c7d6373fd744d"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "50c56cf3e7f123a703cf9b27dbd29700"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "15c0fb5d94ec80b4fcab25fe54fb675d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d706a1ebac1208be336cd7b8a668dc75"
  },
  {
    "url": "tags/js/index.html",
    "revision": "047dedc1c47cd346fa01087ae9d43983"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a634618bbecb709beb055a4475725d40"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "33e67291e86b7c135064b899934bee93"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "505d1bb85e8d9bef7d61fe8ba9603496"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4144f78faf083d126809d61656a8ec55"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0994bdb0d83cdbe3719cfdbb4f3fe8df"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b478d6c1054908efe305c020cafe45ce"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "795a35faa85d7b707fee15abf4169ba6"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd194232138efa5a6101c550f4f3df18"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b803d871a53e56214cc432eb20c871d6"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fb5354c0d64c5c01e5864dc245b35326"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "87b38691b9a88f73b5a6c679f1dcffb4"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a989d596b5b60efd84762186c2356b5d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a07bd368ed0a9c14cb92b033afcfc107"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
