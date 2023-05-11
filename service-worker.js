/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/ashley271017.github.io/2019/05/08/我不知道的flex/index.html","62cfc307766ece1aaa857a494977de1c"],["/ashley271017.github.io/2019/05/17/你不知道的vue/index.html","b73396f85ae1814b23376dddfad5dee6"],["/ashley271017.github.io/2019/05/18/防抖与节流/index.html","a831c4cbc1f88f054618244a1579dc1a"],["/ashley271017.github.io/2019/06/14/前端文件上传/index.html","1ac6ee3a1dc2d56361e4135a12165d01"],["/ashley271017.github.io/2019/08/14/面试题回顾春招/index.html","c0f0a13b45f6ae793ce2fa0e0a671810"],["/ashley271017.github.io/2019/09/17/vue组件通信方式/index.html","75f3f86a524750f2ee12a44a3fcd613b"],["/ashley271017.github.io/2019/10/11/sass中的map/index.html","dc7da6b185626a11c12e6ff11a7a851f"],["/ashley271017.github.io/2019/10/11/ts小知识点/index.html","9622c79554ddf40acb8dd17c6df5ca4b"],["/ashley271017.github.io/2019/10/14/控制react的state为合法状态/index.html","33a8da5a54427f22dd0e316e5e2528b2"],["/ashley271017.github.io/2019/10/17/css中宽高的新值复习/index.html","70ec162f20f3125785c2e6f69fac95aa"],["/ashley271017.github.io/2019/11/07/前端性能优化/index.html","4500e7f6e37101790678f3778f486e1d"],["/ashley271017.github.io/2019/11/15/配置多页面国际化应用/index.html","e30ea2d92f31e15aa060c8b3d4438043"],["/ashley271017.github.io/2019/12/08/webpack常用配置速查/index.html","afc7fa48cff573d6a33c89fc96939513"],["/ashley271017.github.io/2019/12/10/2019年度总结/index.html","269b2c1c8363c1a47cdce7c3cfc19832"],["/ashley271017.github.io/2019/12/10/面经js篇/index.html","ea119d09746e12ca271372761b6bced7"],["/ashley271017.github.io/2019/12/11/秋季前端面经记录/index.html","ec2745d70f634c6b25eb6a0b61057bdd"],["/ashley271017.github.io/2019/12/11/面经项目构建篇/index.html","4533ef746917a3752d772dead6c9208a"],["/ashley271017.github.io/2019/12/12/面经计算机网络篇/index.html","f9495f19e2eac8fcdc8614c0fd7e3c2c"],["/ashley271017.github.io/2019/12/18/面经css篇/index.html","8bd7ae1ba2d25c265a11130fc7d48921"],["/ashley271017.github.io/2019/12/24/面试中的编程题～不定期更新/index.html","f4c709685373b6d6f8032f791edacf15"],["/ashley271017.github.io/2020/01/06/算法填坑/index.html","e738f8460d70ec545dd62e761989f7ce"],["/ashley271017.github.io/2020/01/06/记录/index.html","662c0d23bd84b39808653c5f090c1abd"],["/ashley271017.github.io/2020/02/13/webpack构建速度优化/index.html","2094ef379e3a45a90b38b29341907f7a"],["/ashley271017.github.io/2020/02/23/react性能优化/index.html","e42231fe5a70f69a626fc322137b4b3b"],["/ashley271017.github.io/2020/04/16/常见的攻击方式/index.html","0e22b1a51cd26a4a0189b1c4b8e78643"],["/ashley271017.github.io/2020/04/21/常见webpack报错（线上）/index.html","d73de4c2486b08d17b61aa0a412891c4"],["/ashley271017.github.io/2021/03/17/webpack按需加载模块原理/index.html","d570204003e39f31d37a6f7519495eb2"],["/ashley271017.github.io/2021/04/10/常见登录方案/index.html","0ed83fa767b94553056dc2cb0f9864e4"],["/ashley271017.github.io/2021/04/16/Vue2和Vue3区别/index.html","01d10f6973813496bb25e8eac86b2e1d"],["/ashley271017.github.io/2021/06/21/设计模式/index.html","fce9c811423ee836a67ee7bb631a92fa"],["/ashley271017.github.io/2022/04/23/前端包管理工具/index.html","9a87aa9745846688d401fe4234856288"],["/ashley271017.github.io/2022/05/15/vue3响应式原理/index.html","1ffd7bf71d4b930a4e642be5804f6cb6"],["/ashley271017.github.io/2022/08/16/extension/index.html","bfc08b764b05a714f3db86eaf755c37b"],["/ashley271017.github.io/2022/08/16/react18/index.html","7ed6b08d5bb9045d1b9196201ae85267"],["/ashley271017.github.io/2022/08/23/升级Babel7踩坑/index.html","8ef3924ee83e6f2ab8b28ed96d367a58"],["/ashley271017.github.io/2022/09/10/vue响应式原理/index.html","a265c6d597f97e58f88ecf687e8dc0b9"],["/ashley271017.github.io/2023/01/21/hooks/index.html","966263fba1a8bbe0c082fc42281c0177"],["/ashley271017.github.io/2023/02/15/webpack打包产物优化/index.html","74fbb21e963b5fc12fcfdecacfb96651"],["/ashley271017.github.io/2023/03/02/从入门到实践/index.html","6c31a933b0f789817d5952c0b6106e66"],["/ashley271017.github.io/2023/03/15/debug记录/index.html","c0c85969bfa9bb35af7fa464f29e5bf9"],["/ashley271017.github.io/2023/03/20/拯救动画卡顿之FLIP/index.html","4609a54ad82aaf75d76a47f8a0d7939d"],["/ashley271017.github.io/2023/04/01/合成事件/index.html","ada1c6de8e9871cf8a2c90eaaf3be6ed"],["/ashley271017.github.io/2023/04/03/模块联邦在微前端架构中的实践/index.html","36c0ff55b50ac18b27bc43de74ab9b14"],["/ashley271017.github.io/2023/04/16/vue-router浅析原理/index.html","564ba095f4223fa325a97c4abdd112ce"],["/ashley271017.github.io/2023/04/16/撸一个组件库/index.html","8c977331fbd45cfc627386d2a05a5446"],["/ashley271017.github.io/2023/04/17/巨石项目改造方案探究/index.html","f29c6642ebe7a2bc40a15bfab53fde2c"],["/ashley271017.github.io/2023/04/20/状态管理（react）/index.html","e5a708d57d6bc14f4b3008f85874efc8"],["/ashley271017.github.io/2023/04/23/线上如何像本地一样debug/index.html","c3b1e5d5ea0c7a5e04fa3d66bb82cb29"],["/ashley271017.github.io/404.html","5f7295647ea08406b9344c01fed7cf26"],["/ashley271017.github.io/404/index.html","dc9c6b0a986fd5fdc6fb6d6d54f10a39"],["/ashley271017.github.io/about/index.html","472de952cb331282e0e901407d8c87ce"],["/ashley271017.github.io/archive/index.html","fad144272e9f783071e8953cbdec47fe"],["/ashley271017.github.io/archives/2019/05/index.html","4dff81937ae2564c8903fdc7644854c9"],["/ashley271017.github.io/archives/2019/06/index.html","4c27023a44146b92ca6997afcf2c75c8"],["/ashley271017.github.io/archives/2019/08/index.html","1c54a02788001b4848c3f4f160dd8a23"],["/ashley271017.github.io/archives/2019/09/index.html","14a0865a2c55316f77e2233ee96056fe"],["/ashley271017.github.io/archives/2019/10/index.html","bd3c071b3f2909b3efee72b582bdb1f2"],["/ashley271017.github.io/archives/2019/11/index.html","272785e8273dd326cd3af20abacd80fa"],["/ashley271017.github.io/archives/2019/12/index.html","b2e4028e86ff735c84342f2706ba2cde"],["/ashley271017.github.io/archives/2019/index.html","65aeecda2eb3a16cd2d421649919b96f"],["/ashley271017.github.io/archives/2019/page/2/index.html","74fc51dbed911745bec42d1c9c18ac92"],["/ashley271017.github.io/archives/2020/01/index.html","fb368a094df4c2dc260765038cd45cb6"],["/ashley271017.github.io/archives/2020/02/index.html","a90f6531f83a502eb4a684ab0684ba0d"],["/ashley271017.github.io/archives/2020/04/index.html","f00c4b189b9237cad98aa39288620b03"],["/ashley271017.github.io/archives/2020/index.html","7bd86de82a83ab0c1268ceb923ac0660"],["/ashley271017.github.io/archives/2021/03/index.html","3e0ffd939d3258dc481d6b57b6010b01"],["/ashley271017.github.io/archives/2021/04/index.html","9e8a04946b05ab338d10c85aa38336fa"],["/ashley271017.github.io/archives/2021/06/index.html","551b5a0cc4e2866b1b9626a9bc8e8726"],["/ashley271017.github.io/archives/2021/index.html","c927078240ad84018c2d73ce6328d0ad"],["/ashley271017.github.io/archives/2022/04/index.html","27e4edd52e6f0189f05b162e3b8f549d"],["/ashley271017.github.io/archives/2022/05/index.html","69031816b638b961eea8c3647292906f"],["/ashley271017.github.io/archives/2022/08/index.html","aa36e8aae6d9d4e4c39d68387abf0585"],["/ashley271017.github.io/archives/2022/09/index.html","7e8508191bc95202c3a54664ccbe5560"],["/ashley271017.github.io/archives/2022/index.html","e1a5c6ff47ae3c0607558e7f42a96d97"],["/ashley271017.github.io/archives/2023/01/index.html","7e4ee463e0ddcc3186fa63de75d77436"],["/ashley271017.github.io/archives/2023/02/index.html","0425fc856ee82dc2df838c3f0fa508f7"],["/ashley271017.github.io/archives/2023/03/index.html","6d1a4a2e867032b91f686cd12712cda5"],["/ashley271017.github.io/archives/2023/04/index.html","c6c8d8789414a4d2b383e3a5553007a8"],["/ashley271017.github.io/archives/2023/index.html","788d74a5a34d2cbe6a6571a05e270b58"],["/ashley271017.github.io/archives/2023/page/2/index.html","d139bb546bfd0c462396cafe0b5a7ea8"],["/ashley271017.github.io/archives/index.html","cab72e667ab92190353c940be95b5ac4"],["/ashley271017.github.io/archives/page/2/index.html","cab72e667ab92190353c940be95b5ac4"],["/ashley271017.github.io/archives/page/3/index.html","cab72e667ab92190353c940be95b5ac4"],["/ashley271017.github.io/archives/page/4/index.html","cab72e667ab92190353c940be95b5ac4"],["/ashley271017.github.io/archives/page/5/index.html","cab72e667ab92190353c940be95b5ac4"],["/ashley271017.github.io/blog/category/index.html","1e494646d954aac220260def7c1ebdcc"],["/ashley271017.github.io/blog/tags/index.html","b86116c288e9b394aea1e0eef01e353a"],["/ashley271017.github.io/categories/sass/index.html","50dfe4223c1729cb7575fa4cd82e991c"],["/ashley271017.github.io/categories/ts/index.html","8b15c34f1bf36668651233dcdd73cde2"],["/ashley271017.github.io/categories/性能优化/index.html","5dbee509112abc6382282cc93499680b"],["/ashley271017.github.io/categories/成长/index.html","8a277ce81dfb3204d13ebd1fb0a70789"],["/ashley271017.github.io/categories/配置/index.html","81e97d53d8db16c73cbf2b15c10842d3"],["/ashley271017.github.io/categories/面经/css/index.html","9266d217467fc4eb7e83dae4169d2044"],["/ashley271017.github.io/categories/面经/index.html","98f6518865e67ed4b50932136508ea66"],["/ashley271017.github.io/categories/面经/浏览器/index.html","3b0e3781595e4a466d9b4a7da2842781"],["/ashley271017.github.io/collect/index.html","125594bb5da460440c73a3ec0196ee20"],["/ashley271017.github.io/content.json","8ff14cd52194cd3d4f021f6d9d869966"],["/ashley271017.github.io/friends/index.html","f674a3efb26b886cba084124977c2515"],["/ashley271017.github.io/images/avatar.jpeg","1f20c6c8cb93bf790f5f2616fd9324ea"],["/ashley271017.github.io/images/bg.jpg","249a15408566ba1107504f7a3fbc7eb7"],["/ashley271017.github.io/images/post/14.jpeg","dffc258b5368b63bf2eafa5f98b2568e"],["/ashley271017.github.io/images/post/15.jpeg","5d90e6b4401a13078d3863c3da1c9c00"],["/ashley271017.github.io/images/post/23.jpeg","5e209f5a872f5be7a63e2c2adfa45e85"],["/ashley271017.github.io/images/post/28.jpeg","4e900fc17f794389f389952c34a2faa4"],["/ashley271017.github.io/images/post/29.jpeg","46b1ac7620b3d84d5213f5aaa2339add"],["/ashley271017.github.io/images/post/30.jpeg","dd09994af2fe673c978ed7ab4c813ac5"],["/ashley271017.github.io/images/post/31.jpeg","598499458c546ddef3529d90fc2eef34"],["/ashley271017.github.io/images/post/4.jpeg","867f372db1c3c9fec23e9b32cbac2fe5"],["/ashley271017.github.io/images/post/5.jpeg","f9536f13cfdf4af2e0738c1aa9f70428"],["/ashley271017.github.io/images/post/9.jpeg","1a933935b9759ee92b7a3f53862a273b"],["/ashley271017.github.io/index.html","887c929c0b98eb407ddbc3396066ab58"],["/ashley271017.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/ashley271017.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/ashley271017.github.io/js/volantis.js","3d04a1cd8e46318758aaf96a52e2ef9f"],["/ashley271017.github.io/manifest.json","dd3332c30b14ea71cb786a74527f0108"],["/ashley271017.github.io/page/2/index.html","06d91989bd9e7e492b7cb43a3abafc2b"],["/ashley271017.github.io/page/3/index.html","13f8f09ac986333e94605504a10dff70"],["/ashley271017.github.io/page/4/index.html","6b093a1beeefb8dba61f0831dc1658a8"],["/ashley271017.github.io/page/5/index.html","3b8968200246e64a34a83c046993554a"],["/ashley271017.github.io/private/index.html","69ca59343f743ca479fb8f0ff6af3459"],["/ashley271017.github.io/search.xml","18cab8e52e9dab9cc9a192cdd3dfaa5e"],["/ashley271017.github.io/style.css","20bdb3b722b01e3b8b5a7f3707f2d5c1"],["/ashley271017.github.io/tags/a2hs/index.html","f42d095b6ff28fccadeb1ebb4d0b5a36"],["/ashley271017.github.io/tags/babel/index.html","c9bb81da3fd521accdc3cfbd8fe9e182"],["/ashley271017.github.io/tags/chromeExtension/index.html","96f9da975cb38ab985c623a697b73be8"],["/ashley271017.github.io/tags/cicd/index.html","80d3fd505e885690bb81c01c44eba9dc"],["/ashley271017.github.io/tags/css/index.html","406f437d5cb2472a50e029c74db6f8e5"],["/ashley271017.github.io/tags/debug/index.html","9b32c3f14382b526a9cd107077924ede"],["/ashley271017.github.io/tags/index.html","f5ca8f09898eb005e8dbc7ab87ebf2cd"],["/ashley271017.github.io/tags/react/index.html","e3608fe9538601734fba0d4b2c343923"],["/ashley271017.github.io/tags/sass-css/index.html","ce86483ab92e34cb7be14a3c8dfc057d"],["/ashley271017.github.io/tags/ts/index.html","3deb6563e817c3866ed32fe8f506c650"],["/ashley271017.github.io/tags/vite/index.html","e8eea60294c84a0280aa803fd362c922"],["/ashley271017.github.io/tags/vue/index.html","91322363fe475c754e228d88d6c563c9"],["/ashley271017.github.io/tags/vue3/index.html","1cf8c16e74871d4bccbeb58105ec0e18"],["/ashley271017.github.io/tags/webpack/index.html","869c01b9c7979020431c0c43a59a3f1d"],["/ashley271017.github.io/tags/包管理/index.html","d250aa333d5675f890539b80f83a1a31"],["/ashley271017.github.io/tags/基础技能/index.html","469fa5707adce4b7dfd31743ee129774"],["/ashley271017.github.io/tags/性能优化/index.html","752c71f52cf35c736ec0a881578c6a83"],["/ashley271017.github.io/tags/架构/index.html","20c9a99418ffab778fa74cb1eb56c76d"],["/ashley271017.github.io/tags/模块联邦/index.html","6a76d2cb92c7a79165c0aaced087b163"],["/ashley271017.github.io/tags/浏览器安全/index.html","104b2cbee0a5453def275e7424e1ccf0"],["/ashley271017.github.io/tags/生活/index.html","edd4d99516060f4a9a5f14ff1485b0ec"],["/ashley271017.github.io/tags/算法/index.html","43555e99a3b94ab647b199dff31b8ead"],["/ashley271017.github.io/tags/网络/index.html","0b7ba2caa39122ff52451c96367d3668"],["/ashley271017.github.io/tags/设计模式/index.html","7453fd4720ad24002bea14fabad176f3"],["/ashley271017.github.io/tags/配置/index.html","069c42e2c2ce0157f23c75db8f39b097"],["/ashley271017.github.io/tags/面经/index.html","2827cda307e60e1186ef8f514fa7a7b3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




