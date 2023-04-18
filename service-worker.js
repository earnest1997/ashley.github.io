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

var precacheConfig = [["/ashley271017.github.io/2019/06/14/前端文件上传/index.html","f55fad53e28fc50a4296daca8b9952ee"],["/ashley271017.github.io/2019/08/14/面试题回顾春招/index.html","17a2ee982814d3f7c1d76a371b9263a0"],["/ashley271017.github.io/2019/10/11/sass中的map/index.html","f41eebc252787a137e96a95ea5d717bd"],["/ashley271017.github.io/2019/10/11/ts小知识点/index.html","fee02aa7d66e609fb6510046be7eb8c6"],["/ashley271017.github.io/2019/10/14/控制react的state为合法状态/index.html","1c7c5ccbda7e171211e090426d8476d8"],["/ashley271017.github.io/2019/10/17/css中宽高的新值复习/index.html","5166e6a01c691695ed97cb005584a4ab"],["/ashley271017.github.io/2019/11/07/前端性能优化/index.html","cba6dd7bb4198e6768feec4da0137cd6"],["/ashley271017.github.io/2019/11/15/配置多页面国际化应用/index.html","3642d00a3e61cdb03e94b9fc7035ea76"],["/ashley271017.github.io/2019/12/08/webpack常用配置速查/index.html","878dee0ea1ab7c435bf7f20e4564de06"],["/ashley271017.github.io/2019/12/10/2019年度总结/index.html","8e785765cad9438a7245b6dea50bca8f"],["/ashley271017.github.io/2019/12/10/面经js篇/index.html","22c8c1cc192057dde2fd1ed592492e75"],["/ashley271017.github.io/2019/12/11/秋季前端面经记录/index.html","f8f6d9ad98d7b7afae0321f403c592ab"],["/ashley271017.github.io/2019/12/11/面经项目构建篇/index.html","6523eb9780c19e0c5b97d307b5627c32"],["/ashley271017.github.io/2019/12/12/面经计算机网络篇/index.html","2481258cbed7c9fff1db33a2c07ffc3e"],["/ashley271017.github.io/2019/12/18/面经css篇/index.html","62e60163b8cb4247434e535fecca1603"],["/ashley271017.github.io/2019/12/24/面试中的编程题～不定期更新/index.html","d6c554776822e47ed6bcf5e3f976f2da"],["/ashley271017.github.io/2020/01/06/算法填坑/index.html","8a04aa82d2f3c3b03f91e7f4f3c3bd27"],["/ashley271017.github.io/2020/01/06/记录/index.html","958f8bbe04459760832c03b2e8a2f158"],["/ashley271017.github.io/2020/02/13/webpack构建速度优化/index.html","8e7cec8a5ed66f4a6683568841a237ca"],["/ashley271017.github.io/2020/02/23/react性能优化/index.html","2c997a51d416cae6465b119a0bf145b3"],["/ashley271017.github.io/2020/04/16/常见的攻击方式/index.html","c4d9a6d30c1e12340cf344cbe1ee9ed3"],["/ashley271017.github.io/2021/04/10/常见登录方案/index.html","5abe98825f9d6eb56e3af264d49d09f4"],["/ashley271017.github.io/2021/04/16/Vue2和Vue3区别/index.html","7f8b63f24967ca65253369c5b9784804"],["/ashley271017.github.io/2022/04/23/前端包管理工具/index.html","7c813640c654621458165c3614a526fb"],["/ashley271017.github.io/2022/05/15/响应式原理/index.html","94e89e1c4e94ae884ab851b8459d1cad"],["/ashley271017.github.io/2022/08/16/extension/index.html","0144108947014b14a508f11edb2bae49"],["/ashley271017.github.io/2022/08/16/react18/index.html","5ede04bc2031c91c423eae2164353cfd"],["/ashley271017.github.io/2022/08/23/升级Babel7踩坑/index.html","ef4afb73af7d2cd3c66ff14bf0e4f956"],["/ashley271017.github.io/2022/09/10/vue响应式原理/index.html","4fff3ee5001a555d559d60618233bda2"],["/ashley271017.github.io/2022/09/23/线上如何像本地一样debug/index.html","cc74606cee46e1652c2742b31a07afdc"],["/ashley271017.github.io/2023/01/21/hooks/index.html","45adb369b59164920c25972284c6da7a"],["/ashley271017.github.io/2023/02/15/webpack打包产物优化/index.html","4e6480acc20229f8932b6fa66f221ad7"],["/ashley271017.github.io/2023/03/02/从入门到实践/index.html","b0ecc3b87696285f00f1adcfc59454f1"],["/ashley271017.github.io/2023/03/15/debug记录/index.html","66591271a75aec614852411bcbc86f03"],["/ashley271017.github.io/2023/03/20/拯救动画卡顿之FLIP/index.html","c92df36b06c01b61de7753a104ae7d51"],["/ashley271017.github.io/2023/04/03/巨石项目改造方案探究/index.html","10f22f4a36e909836c3051509fb20dc9"],["/ashley271017.github.io/2023/04/15/合成事件/index.html","71b202c7e68ff560556d1fb74f40de37"],["/ashley271017.github.io/2023/04/16/vue-router浅析原理/index.html","ba905a6c23cf4d4c5494b0defcc99d0d"],["/ashley271017.github.io/2023/04/16/撸一个组件库/index.html","6ee2fc4fb360b71840f0f5b85a49c5b5"],["/ashley271017.github.io/2023/04/23/模块联邦在微前端架构中的实践/index.html","c782769df1402a3f3d13f8914162f148"],["/ashley271017.github.io/404.html","febc936005c4951cac4e4199fc16f145"],["/ashley271017.github.io/404/index.html","0dd1d308f1b110dd732986b7d17537be"],["/ashley271017.github.io/about/index.html","b24b8aa80b6e0ad589d609bd0728eacc"],["/ashley271017.github.io/archive/index.html","742b6548035db4dff125d162d9b2ff57"],["/ashley271017.github.io/archives/2019/06/index.html","d0b105aacce03d151dae1514d5549bf3"],["/ashley271017.github.io/archives/2019/08/index.html","5e2d5ab3861f445ce56e99b64de05e53"],["/ashley271017.github.io/archives/2019/10/index.html","1871e76ed333be3b065a50338926fee3"],["/ashley271017.github.io/archives/2019/11/index.html","f22d2e92c85ef88932ecd861eff77b10"],["/ashley271017.github.io/archives/2019/12/index.html","230693ac49572f44be745b145f12adf4"],["/ashley271017.github.io/archives/2019/index.html","a4993b451870be514bbc33b7801181b0"],["/ashley271017.github.io/archives/2019/page/2/index.html","a9ab46454d5a9521d33959a787235d09"],["/ashley271017.github.io/archives/2020/01/index.html","d1ad78d217f62b38f23059b2681cc8f8"],["/ashley271017.github.io/archives/2020/02/index.html","a51b4dc03e8ec29bc6cda45c578727e7"],["/ashley271017.github.io/archives/2020/04/index.html","3fbdfa0984234b7030293502f5f67fa9"],["/ashley271017.github.io/archives/2020/index.html","072b202ae641b9168ccd7877fc2bfdbd"],["/ashley271017.github.io/archives/2021/04/index.html","ad944235f8e3cd4f99f5246480ee64be"],["/ashley271017.github.io/archives/2021/index.html","f0da0253b437514ef90d2125375f579c"],["/ashley271017.github.io/archives/2022/04/index.html","f15a392f3f9330124d5f639be285c549"],["/ashley271017.github.io/archives/2022/05/index.html","245488ede1e3a2345338c0d083fd3498"],["/ashley271017.github.io/archives/2022/08/index.html","88c756187d5b951387fa7f0eee51128b"],["/ashley271017.github.io/archives/2022/09/index.html","112d5d71be983ae23b9c6450a5cc6118"],["/ashley271017.github.io/archives/2022/index.html","1934d169c72b6f87f5f56702ac250353"],["/ashley271017.github.io/archives/2023/01/index.html","ffe97fcde8b4b553e4f40cec1b06cbf7"],["/ashley271017.github.io/archives/2023/02/index.html","a5a5734d1675d17d21ebaa57bb11ebb5"],["/ashley271017.github.io/archives/2023/03/index.html","f9e6e6879cc4f2eaeeaecf78ef3ed543"],["/ashley271017.github.io/archives/2023/04/index.html","838b7756428f3c0f8d1d888db81aacc0"],["/ashley271017.github.io/archives/2023/index.html","1b80632df46fe6ab9dac4c0ebc4a4fe8"],["/ashley271017.github.io/archives/index.html","f528ae78a2d800c8970ff9de35c259c4"],["/ashley271017.github.io/archives/page/2/index.html","f528ae78a2d800c8970ff9de35c259c4"],["/ashley271017.github.io/archives/page/3/index.html","f528ae78a2d800c8970ff9de35c259c4"],["/ashley271017.github.io/archives/page/4/index.html","f528ae78a2d800c8970ff9de35c259c4"],["/ashley271017.github.io/ashley271017.github.io/manifest.json","8f02b017e85412a16bf1564a3d8cd513"],["/ashley271017.github.io/blog/category/index.html","44ee6b3c9006f58fbd6f46ef02a23be0"],["/ashley271017.github.io/blog/tags/index.html","d4b8a7602bfc52da955b323b460ff34a"],["/ashley271017.github.io/categories/sass/index.html","0109c6e9501617639127ba9fcf7e3af5"],["/ashley271017.github.io/categories/ts/index.html","6197f2e3379b53c9bca0b55895f9c2bc"],["/ashley271017.github.io/categories/性能优化/index.html","9d7b6651fd66da600525561fefe52588"],["/ashley271017.github.io/categories/成长/index.html","4c7545538dafd17bab7a78cdad9c9ae7"],["/ashley271017.github.io/categories/配置/index.html","6622ac42cbb01ae0ba15d2d0ea1dd682"],["/ashley271017.github.io/categories/面经/css/index.html","7eab80a917a2e3eb9609967e3a9e8c08"],["/ashley271017.github.io/categories/面经/index.html","d08dade8168bc52a289666cae359f75b"],["/ashley271017.github.io/categories/面经/js/index.html","50401f2288dcca42eeec0ab380a5899d"],["/ashley271017.github.io/categories/面经/浏览器/index.html","0a46ea0da999065907c58281a44b94f8"],["/ashley271017.github.io/categories/面试/index.html","a84231baaf7135b538aa5cc38aa28aef"],["/ashley271017.github.io/categories/面试/js/index.html","6a61af3c7a033a5a616b6a0746644e7b"],["/ashley271017.github.io/collect/index.html","996ea22e056c19aea9e870a51ddfbb2c"],["/ashley271017.github.io/content.json","52da3010eec3587898ede0b6ff579cbf"],["/ashley271017.github.io/friends/index.html","16e8832f116a6794f2e8c82f980160cb"],["/ashley271017.github.io/images/avatar.jpeg","1f20c6c8cb93bf790f5f2616fd9324ea"],["/ashley271017.github.io/images/bg.jpg","249a15408566ba1107504f7a3fbc7eb7"],["/ashley271017.github.io/images/post/14.jpeg","dffc258b5368b63bf2eafa5f98b2568e"],["/ashley271017.github.io/images/post/15.jpeg","5d90e6b4401a13078d3863c3da1c9c00"],["/ashley271017.github.io/images/post/23.jpeg","5e209f5a872f5be7a63e2c2adfa45e85"],["/ashley271017.github.io/images/post/28.jpeg","4e900fc17f794389f389952c34a2faa4"],["/ashley271017.github.io/images/post/29.jpeg","46b1ac7620b3d84d5213f5aaa2339add"],["/ashley271017.github.io/images/post/30.jpeg","dd09994af2fe673c978ed7ab4c813ac5"],["/ashley271017.github.io/images/post/31.jpeg","598499458c546ddef3529d90fc2eef34"],["/ashley271017.github.io/images/post/4.jpeg","867f372db1c3c9fec23e9b32cbac2fe5"],["/ashley271017.github.io/images/post/5.jpeg","f9536f13cfdf4af2e0738c1aa9f70428"],["/ashley271017.github.io/images/post/9.jpeg","1a933935b9759ee92b7a3f53862a273b"],["/ashley271017.github.io/index.html","9e2039c600de6190679100712f294be4"],["/ashley271017.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/ashley271017.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/ashley271017.github.io/js/volantis.js","3d04a1cd8e46318758aaf96a52e2ef9f"],["/ashley271017.github.io/manifest.json","dd3332c30b14ea71cb786a74527f0108"],["/ashley271017.github.io/page/2/index.html","db8dbac7cb88b150c02593924f0e0e42"],["/ashley271017.github.io/page/3/index.html","44ef97ae0ef76370351304b3540c9937"],["/ashley271017.github.io/page/4/index.html","0ac6d893b966bb320e3c8a0f0627d7c2"],["/ashley271017.github.io/private/index.html","3ace1a4bf570c7fc24108339a8c13f99"],["/ashley271017.github.io/search.xml","1f9c1cfb98322bedb8e57aa7eca675c4"],["/ashley271017.github.io/style.css","20bdb3b722b01e3b8b5a7f3707f2d5c1"],["/ashley271017.github.io/sw.js","4f222a75c57159a7e9d217c0bffef62f"],["/ashley271017.github.io/tags/a2hs/index.html","cd61d60ba31d3efcec2d0b84aff93e3f"],["/ashley271017.github.io/tags/babel/index.html","e7ee5039a34054b281a9aa0257a60eae"],["/ashley271017.github.io/tags/chromeExtension/index.html","55eb779c9da6ece0bef42df5922d9cee"],["/ashley271017.github.io/tags/cicd/index.html","cadb94beaa2ec7e15a16f04184d02703"],["/ashley271017.github.io/tags/css/index.html","e42b4fe8ffa2550a54198e06058fdc38"],["/ashley271017.github.io/tags/debug/index.html","091c44be9e822399ee23b2325a6ade79"],["/ashley271017.github.io/tags/index.html","f5ca8f09898eb005e8dbc7ab87ebf2cd"],["/ashley271017.github.io/tags/js/index.html","5647eb4e2eddedecc8c60c6a9ad8b4b8"],["/ashley271017.github.io/tags/react/index.html","1c60727df5c28237e6b8d297caa06497"],["/ashley271017.github.io/tags/sass-css/index.html","9016437b7d59de0bf0c83dbc55558368"],["/ashley271017.github.io/tags/ts/index.html","db8547d875f6234ffc7922fbf84466a0"],["/ashley271017.github.io/tags/vite/index.html","2db62c04e2f488c371a135dd39389e26"],["/ashley271017.github.io/tags/vue/index.html","f5fd2301081910f0ca04c6b9f2aa52a2"],["/ashley271017.github.io/tags/vue3/index.html","d58bfb342ef28488ad2fe6c48c29ade3"],["/ashley271017.github.io/tags/webpack/index.html","27ff0cf858a4f8f1b2d675406f8d5804"],["/ashley271017.github.io/tags/包管理/index.html","6b57bad9dbd9f59a6d32274d8c133fa5"],["/ashley271017.github.io/tags/基础技能/index.html","7f26efab7798472950f4e6061d5cd0a4"],["/ashley271017.github.io/tags/性能优化/index.html","4b4e018d1e4c46e761880b5cd4c8df7a"],["/ashley271017.github.io/tags/架构/index.html","8e02a3e5cf12870972c1db41cb760235"],["/ashley271017.github.io/tags/模块联邦/index.html","366a5ec5963d5fd703931b9888c01f7b"],["/ashley271017.github.io/tags/浏览器安全/index.html","c1b74d0972e7e280669971335060d550"],["/ashley271017.github.io/tags/生活/index.html","69577c5217010b24f85460966111495a"],["/ashley271017.github.io/tags/算法/index.html","d5157813c4e6737cc4345b6540620ec9"],["/ashley271017.github.io/tags/网络/index.html","e96e987fc821a9564a3a1a97a106648d"],["/ashley271017.github.io/tags/配置/index.html","a089d0323e0ff2b10bfdfb4303584496"],["/ashley271017.github.io/tags/面经/index.html","4a694c9f45d93a2339656747545b4656"]];
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




