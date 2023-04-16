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

var precacheConfig = [["/ashley271017.github.io/2019/06/14/前端文件上传/index.html","94f5232ab175cbe6bc488768dfbf38e1"],["/ashley271017.github.io/2019/08/14/面试题回顾春招/index.html","0cb4ffcbba9b5946291c87d3783e8e3c"],["/ashley271017.github.io/2019/10/11/sass中的map/index.html","80dc857f9bf6349ef20716c5c2a157e1"],["/ashley271017.github.io/2019/10/11/ts小知识点/index.html","fe6eb1c0aae87f285d661998e750084e"],["/ashley271017.github.io/2019/10/14/控制react的state为合法状态/index.html","4ef02d01affa065d1339f10a4536e5c9"],["/ashley271017.github.io/2019/10/17/css中宽高的新值复习/index.html","35ab7bb1ccd25488077fd567eb3c6919"],["/ashley271017.github.io/2019/11/07/前端性能优化/index.html","ebedc622d8f4939f211b9dafa8d8e201"],["/ashley271017.github.io/2019/11/15/配置多页面国际化应用/index.html","0195cb968bad0cbcefeef835e5a398c2"],["/ashley271017.github.io/2019/12/08/webpack常用配置速查/index.html","75f048c27c7a93a0ddbfd2293b77171d"],["/ashley271017.github.io/2019/12/10/2019年度总结/index.html","db72c0f9e4d37722653b9c5ed9680dc6"],["/ashley271017.github.io/2019/12/10/面经js篇/index.html","806ff3534b12cb39e8d67e8aa0074dad"],["/ashley271017.github.io/2019/12/11/秋季前端面经记录/index.html","46b75483cdb11aacc9a6266359b56982"],["/ashley271017.github.io/2019/12/11/面经项目构建篇/index.html","4c5b62621223282d96d5343f134aa4d9"],["/ashley271017.github.io/2019/12/12/面经计算机网络篇/index.html","2f0350fdc7a1af9acbefc05a02519976"],["/ashley271017.github.io/2019/12/18/面经css篇/index.html","dca706891ddda6f8f399d5244ff675be"],["/ashley271017.github.io/2019/12/24/面试中的编程题～不定期更新/index.html","0518ec6e46ad916e0b01ab43cea6cd55"],["/ashley271017.github.io/2020/01/06/算法填坑/index.html","afe84640e34b1ed24bff46f8641dc5cc"],["/ashley271017.github.io/2020/01/06/记录/index.html","b2587360ae973c7d81e750b58d7bf691"],["/ashley271017.github.io/2020/02/13/webpack构建速度优化/index.html","c41c0705626c9108212bd61e4abf5e63"],["/ashley271017.github.io/2020/02/23/react性能优化/index.html","1900ca86285b16346a8bd28e6cd1d1eb"],["/ashley271017.github.io/2020/04/16/常见的攻击方式/index.html","e1ac362793a52116558923e0a99ba5f8"],["/ashley271017.github.io/2021/04/10/常见登录方案/index.html","9cea97d328891e2eebc8fde34bad3d9d"],["/ashley271017.github.io/2021/04/16/Vue2和Vue3区别/index.html","aec6e44d549eb5117aa7b2d4ffbadb13"],["/ashley271017.github.io/2022/05/15/响应式原理/index.html","cee0254b36518826b4691558e6e99217"],["/ashley271017.github.io/2022/08/16/extension/index.html","35d578b40b1d02f00f4bcc19eddff452"],["/ashley271017.github.io/2022/08/16/react18/index.html","dc86216fce1e5ffb3d2133cf988ea658"],["/ashley271017.github.io/2022/08/23/升级Babel7踩坑/index.html","403421715cdd0429a9b3416892064779"],["/ashley271017.github.io/2022/09/10/vue响应式原理/index.html","ee6a02d8198b4e58237f0085fa53ce74"],["/ashley271017.github.io/2022/09/23/线上如何像本地一样debug/index.html","f116f3b76dfd66a61f5649ec71075387"],["/ashley271017.github.io/2023/01/21/hooks/index.html","62a2a04ea9ce1d00937b440f5f9c9350"],["/ashley271017.github.io/2023/02/15/webpack打包产物优化/index.html","d084019626cd06cdb1e16574ef48ddce"],["/ashley271017.github.io/2023/03/02/从入门到实践/index.html","aa5cc95d3b455c4b9c20cf7163552c2a"],["/ashley271017.github.io/2023/03/15/debug记录/index.html","8e8554d9165a258c13fb022aafc363d6"],["/ashley271017.github.io/2023/03/20/拯救动画卡顿之FLIP/index.html","990732fbf0ffe16e6f10a342bb7ef84a"],["/ashley271017.github.io/2023/04/03/巨石项目改造方案探究/index.html","54b2ee238d95bc06ed141ce558dbbf4b"],["/ashley271017.github.io/2023/04/15/合成事件/index.html","4cec5a9b7e7ba3001bafeb39267e46df"],["/ashley271017.github.io/2023/04/16/撸一个组件库/index.html","977fd6c7846c485e44d39ab2223dcdc8"],["/ashley271017.github.io/2023/04/23/前端包管理工具/index.html","06dae7d7dadf378f19ffa7b788c0328d"],["/ashley271017.github.io/2023/04/23/模块联邦在微前端架构中的实践/index.html","50ef1b5929cdf332f93434deca5b8406"],["/ashley271017.github.io/404.html","13dd0c010ccd2b61252fa0cb1ee0d327"],["/ashley271017.github.io/404/index.html","47e4d7dcb3158de40032eeac18d5b682"],["/ashley271017.github.io/about/index.html","18c5bf23697bfae1eb34a5f9cf2623c2"],["/ashley271017.github.io/archive/index.html","744820766044d03d8797192ca62f07b1"],["/ashley271017.github.io/archives/2019/06/index.html","eebbc18f81d6366d72a75090f9956566"],["/ashley271017.github.io/archives/2019/08/index.html","9754024085572c1ec5cd30091b4b4792"],["/ashley271017.github.io/archives/2019/10/index.html","cb25d9a157453cb489a1af5c91154cb8"],["/ashley271017.github.io/archives/2019/11/index.html","d1c1564e9dc89b771bcdebf40f886880"],["/ashley271017.github.io/archives/2019/12/index.html","0133102697b7c0dc9591a01c85f9ded8"],["/ashley271017.github.io/archives/2019/index.html","be09722cc903892aa383849326b87404"],["/ashley271017.github.io/archives/2019/page/2/index.html","25f96b6bf0a93a73997bf4d075252d70"],["/ashley271017.github.io/archives/2020/01/index.html","e1050a78499f0e85d2d865515ae025c3"],["/ashley271017.github.io/archives/2020/02/index.html","b18e2eeaeb34678c90587fb01f0db98d"],["/ashley271017.github.io/archives/2020/04/index.html","2e37badce73deb0c2cd3ed2baaa5a199"],["/ashley271017.github.io/archives/2020/index.html","330ab2a1bf1623a6cc0aa981050dfa2a"],["/ashley271017.github.io/archives/2021/04/index.html","304b98a92ae392ab1bc60c71d331b816"],["/ashley271017.github.io/archives/2021/index.html","6138acd6675828caeccd2f8086425ff8"],["/ashley271017.github.io/archives/2022/05/index.html","b8a07c38ab16c5a346a165af80f1ef8b"],["/ashley271017.github.io/archives/2022/08/index.html","8043db04d55d820122c4eaec575d163c"],["/ashley271017.github.io/archives/2022/09/index.html","57307d24d82cd650713e7a13b8dbac09"],["/ashley271017.github.io/archives/2022/index.html","d93e085dbee05403d5d96459b28ba438"],["/ashley271017.github.io/archives/2023/01/index.html","2da4c74f137d67bd9aaec59ed8bde86d"],["/ashley271017.github.io/archives/2023/02/index.html","6bf0061e047f90d1383d2dd93f27b3ef"],["/ashley271017.github.io/archives/2023/03/index.html","a4025b625ca494816434fc73a95986c1"],["/ashley271017.github.io/archives/2023/04/index.html","54d5be4ce191c071e227ec0c5a6b0a51"],["/ashley271017.github.io/archives/2023/index.html","7f8d995dd0fb2bb51317cceae80c6e86"],["/ashley271017.github.io/archives/index.html","63475a583a962b2a5e39c7349891d987"],["/ashley271017.github.io/archives/page/2/index.html","63475a583a962b2a5e39c7349891d987"],["/ashley271017.github.io/archives/page/3/index.html","63475a583a962b2a5e39c7349891d987"],["/ashley271017.github.io/archives/page/4/index.html","63475a583a962b2a5e39c7349891d987"],["/ashley271017.github.io/ashley271017.github.io/manifest.json","8f02b017e85412a16bf1564a3d8cd513"],["/ashley271017.github.io/blog/category/index.html","e6c3be199793067968a0f1d9221da2ab"],["/ashley271017.github.io/blog/tags/index.html","85906897acf94580f11c66597df1b436"],["/ashley271017.github.io/categories/sass/index.html","43d1704e6db368948561d24239d8e631"],["/ashley271017.github.io/categories/ts/index.html","913d08391d9351431f5103130348e65f"],["/ashley271017.github.io/categories/性能优化/index.html","0b28fd633a8e893cfde23b83c83b68d8"],["/ashley271017.github.io/categories/成长/index.html","8581f306275698a7a18e150ebae9c607"],["/ashley271017.github.io/categories/配置/index.html","1a8f446888b3ef0a76f8766fae5fbe1f"],["/ashley271017.github.io/categories/面经/css/index.html","101dd56695e1a55d9a4542be49a5a1de"],["/ashley271017.github.io/categories/面经/index.html","3bcccdbfcb241c3e062c12967d8c62b3"],["/ashley271017.github.io/categories/面经/js/index.html","a8c526d7f0e65d2b2990b1297309b1de"],["/ashley271017.github.io/categories/面经/浏览器/index.html","50fdcd53ad16372ad32215d691076327"],["/ashley271017.github.io/categories/面试/index.html","46dfad3a2e774cf796ed2768b9acd374"],["/ashley271017.github.io/categories/面试/js/index.html","d681c8e2a800e59018d17da81b3d7bdf"],["/ashley271017.github.io/collect/index.html","bbeef5bc9a9757c5e54c27ed36ad2877"],["/ashley271017.github.io/content.json","101ea7a092435cf09056a28dbed9a53f"],["/ashley271017.github.io/friends/index.html","771b38c704c0b85f0304545929abaaeb"],["/ashley271017.github.io/images/avatar.jpeg","1f20c6c8cb93bf790f5f2616fd9324ea"],["/ashley271017.github.io/images/bg.jpg","249a15408566ba1107504f7a3fbc7eb7"],["/ashley271017.github.io/images/post/14.jpeg","dffc258b5368b63bf2eafa5f98b2568e"],["/ashley271017.github.io/images/post/15.jpeg","5d90e6b4401a13078d3863c3da1c9c00"],["/ashley271017.github.io/images/post/23.jpeg","5e209f5a872f5be7a63e2c2adfa45e85"],["/ashley271017.github.io/images/post/28.jpeg","4e900fc17f794389f389952c34a2faa4"],["/ashley271017.github.io/images/post/29.jpeg","46b1ac7620b3d84d5213f5aaa2339add"],["/ashley271017.github.io/images/post/30.jpeg","dd09994af2fe673c978ed7ab4c813ac5"],["/ashley271017.github.io/images/post/31.jpeg","598499458c546ddef3529d90fc2eef34"],["/ashley271017.github.io/images/post/4.jpeg","867f372db1c3c9fec23e9b32cbac2fe5"],["/ashley271017.github.io/images/post/5.jpeg","f9536f13cfdf4af2e0738c1aa9f70428"],["/ashley271017.github.io/images/post/9.jpeg","1a933935b9759ee92b7a3f53862a273b"],["/ashley271017.github.io/index.html","a107ca97d830f8ac0d5f8ea68fea6aba"],["/ashley271017.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/ashley271017.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/ashley271017.github.io/js/volantis.js","3d04a1cd8e46318758aaf96a52e2ef9f"],["/ashley271017.github.io/manifest.json","dd3332c30b14ea71cb786a74527f0108"],["/ashley271017.github.io/page/2/index.html","b83d8711d43f49ad68a21cedb445abf2"],["/ashley271017.github.io/page/3/index.html","9d345813fcb0b026a7a8b2ee732f0ca9"],["/ashley271017.github.io/page/4/index.html","c388d3f65601012b4db6266073d3a5f7"],["/ashley271017.github.io/private/index.html","cb08c3acf06f3dc5bb7b7050de29ac59"],["/ashley271017.github.io/search.xml","baebe753c1b32e2b59175b8c9263a8de"],["/ashley271017.github.io/style.css","20bdb3b722b01e3b8b5a7f3707f2d5c1"],["/ashley271017.github.io/sw.js","199f0b3c9d36c3e324733e4d59e0eb72"],["/ashley271017.github.io/tags/a2hs/index.html","b2b5267a8128bc04341352a7911b98a2"],["/ashley271017.github.io/tags/babel/index.html","1722564752d799aae71f15c74cef7852"],["/ashley271017.github.io/tags/chromeExtension/index.html","1442f9c0069343f83695347b022a40ff"],["/ashley271017.github.io/tags/cicd/index.html","3e5afd0ad0abbfe6276f6590f7ce74e3"],["/ashley271017.github.io/tags/css/index.html","6281948b3b55a536c2da6f4f4ec77fea"],["/ashley271017.github.io/tags/debug/index.html","5ff3d64853344e48515bb654b6a88a7d"],["/ashley271017.github.io/tags/index.html","f5ca8f09898eb005e8dbc7ab87ebf2cd"],["/ashley271017.github.io/tags/js/index.html","16362ca81748ce0a9defdf0866666d9c"],["/ashley271017.github.io/tags/react/index.html","281f7e1c387a855a815271aed2817554"],["/ashley271017.github.io/tags/sass-css/index.html","3aebca5b64f08a0bac1db2768763effa"],["/ashley271017.github.io/tags/ts/index.html","af83306fdeb33f2ec03d6d1eea809c5c"],["/ashley271017.github.io/tags/vite/index.html","13e4989eed898c042cae0e2c1fb43e2b"],["/ashley271017.github.io/tags/vue/index.html","70ff144ddd6b19f58ff7dfa059dd07f6"],["/ashley271017.github.io/tags/vue3/index.html","4c7d6498ce18c7c6f5a995fc01d03e9c"],["/ashley271017.github.io/tags/webpack/index.html","35ad4ba20072560be8db80b113252623"],["/ashley271017.github.io/tags/包管理/index.html","b78d2e4075069e5d382c7e804d1b0529"],["/ashley271017.github.io/tags/基础技能/index.html","614121caf6b4360804a2730d9ec06e62"],["/ashley271017.github.io/tags/性能优化/index.html","efcbec022e759551c47c0971cd40ea11"],["/ashley271017.github.io/tags/架构/index.html","ee5155f4f55b9cffd3306e15c424eff5"],["/ashley271017.github.io/tags/模块联邦/index.html","db2c0b27541da046f02ca73b0ca012b8"],["/ashley271017.github.io/tags/浏览器安全/index.html","72f6590e8df9177b49b38df83c5acb86"],["/ashley271017.github.io/tags/生活/index.html","b1376c30d6d9556701765c9edccc76c9"],["/ashley271017.github.io/tags/算法/index.html","489a5fc686503f7e6887b5e615a04a1c"],["/ashley271017.github.io/tags/网络/index.html","e8a5648424f79190cd586195bdd3634b"],["/ashley271017.github.io/tags/配置/index.html","6e902b7425d502567eb33caac5fb9901"],["/ashley271017.github.io/tags/面经/index.html","49ffb554cc3c19a553d23d4062551685"]];
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




