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

var precacheConfig = [["/ashley271017.github.io/2019/06/14/前端文件上传/index.html","71be387d673e1b641ec93377ad3198dc"],["/ashley271017.github.io/2019/08/14/面试题回顾春招/index.html","aa6791f7c51bd9196dac39e0b9ed9f1e"],["/ashley271017.github.io/2019/10/11/sass中的map/index.html","da3fbe4a6ee4298b373e9cb0fe7dcd65"],["/ashley271017.github.io/2019/10/11/ts小知识点/index.html","e4070b144dc9d6147f6977600c7d9a1f"],["/ashley271017.github.io/2019/10/14/控制react的state为合法状态/index.html","0db74014e979dea882b3f6c9e9eb6cc2"],["/ashley271017.github.io/2019/10/17/css中宽高的新值复习/index.html","f8b94556e90636bb7352c90ea4e17a51"],["/ashley271017.github.io/2019/11/07/前端性能优化/index.html","d9a9bc831da862c6b3f6d10212a0b7d1"],["/ashley271017.github.io/2019/11/15/配置多页面国际化应用/index.html","dd60998e3389d2f9007def029ae6fc79"],["/ashley271017.github.io/2019/12/08/webpack常用配置速查/index.html","1b1621a15e1362e0b0ecd8b61139a1ea"],["/ashley271017.github.io/2019/12/10/2019年度总结/index.html","d08f35b04f12f2fde92c9755f0f07d1c"],["/ashley271017.github.io/2019/12/10/面经js篇/index.html","cdd74a3c98bcfe88d745e5142d4f29e2"],["/ashley271017.github.io/2019/12/11/秋季前端面经记录/index.html","5407b5265ca048758e6f3a3403b8bb6b"],["/ashley271017.github.io/2019/12/11/面经项目构建篇/index.html","3cba37998fc87798ed2dd2a1106ee606"],["/ashley271017.github.io/2019/12/12/面经计算机网络篇/index.html","5066b4791304facfb36bbbc9fe9f66c3"],["/ashley271017.github.io/2019/12/18/面经css篇/index.html","dc32d6d08383ee2d9487a6db649256b6"],["/ashley271017.github.io/2019/12/24/面试中的编程题～不定期更新/index.html","26c5ab4c06b017fc06955d264fde8c5e"],["/ashley271017.github.io/2020/01/06/算法填坑/index.html","0ea787f8ffb6b9beb3e2a18abcf76f92"],["/ashley271017.github.io/2020/01/06/记录/index.html","520ba087bade514ff8ae998450f311e4"],["/ashley271017.github.io/2020/02/13/webpack构建速度优化/index.html","ff3e2bf08e9301fefacef79d08d8a1c7"],["/ashley271017.github.io/2020/02/15/webpack打包产物优化/index.html","ad44e45eab869ab1f60a5d7734577cac"],["/ashley271017.github.io/2021/04/10/常见登录方案/index.html","354c568e9ae7f236b19fa609a3230133"],["/ashley271017.github.io/2023/04/03/巨石项目改造方案探究/index.html","fdd3216fd2fa8516157cef54865f4c94"],["/ashley271017.github.io/2023/04/15/debug记录/index.html","6d421610d070b2fb394922dab95a71b7"],["/ashley271017.github.io/2023/04/15/vue响应式原理/index.html","fe769e86286175bac3c21d1a1ad72d92"],["/ashley271017.github.io/2023/04/15/从入门到实践/index.html","471b9657d1f3d04ee228db7bd829788c"],["/ashley271017.github.io/2023/04/15/合成事件/index.html","a0629ef94a5fed6318a81eed15358f4b"],["/ashley271017.github.io/2023/04/15/响应式原理/index.html","981da15bb1c6fc2740d6ec2bb0e21e7f"],["/ashley271017.github.io/2023/04/23/hooks/index.html","252d5abbf94c1500c3bd2474420f43ce"],["/ashley271017.github.io/2023/04/23/react性能优化/index.html","a9cc047325d0b66e24b17815f223f8cc"],["/ashley271017.github.io/2023/04/23/前端包管理工具/index.html","83520165190d2a4f91e0023697b68b37"],["/ashley271017.github.io/2023/04/23/升级Babel7踩坑/index.html","10c6d01f984adddc9c4591829dfbb560"],["/ashley271017.github.io/2023/04/23/拯救动画卡顿之FLIP/index.html","e255fc9c6fb50bccc42a2e3f43e167bb"],["/ashley271017.github.io/2023/04/23/模块联邦在微前端架构中的实践/index.html","449263833cf61c9d8cc2857b164292f9"],["/ashley271017.github.io/2023/04/23/线上如何像本地一样debug/index.html","ca21589ac9d39a938d40ce9d3c1d9e5d"],["/ashley271017.github.io/404.html","e3c1912d39f7b30f94959d6e4f67b167"],["/ashley271017.github.io/404/index.html","7d3dec9ac33ca46559005521af8e0c24"],["/ashley271017.github.io/about/index.html","59e8dee2817f633067b9ab9deaa66530"],["/ashley271017.github.io/archive/index.html","f802914720c27430eea24adb8ddd770c"],["/ashley271017.github.io/archives/2019/06/index.html","3097e90b3993111957186224716b8c45"],["/ashley271017.github.io/archives/2019/08/index.html","11b6a875c2da23cc469c89079178a1bf"],["/ashley271017.github.io/archives/2019/10/index.html","9baa696620c56c23ae52f4e5f72f510c"],["/ashley271017.github.io/archives/2019/11/index.html","678b9eb1cdef6f909068606d62e64cf7"],["/ashley271017.github.io/archives/2019/12/index.html","fedcc7b3d76aeb6ce53ebabdffd1404e"],["/ashley271017.github.io/archives/2019/index.html","2a59ec09f4caafbc132f9df0ba9873e4"],["/ashley271017.github.io/archives/2019/page/2/index.html","68a147426f57ac8ce9de46577a167a0b"],["/ashley271017.github.io/archives/2020/01/index.html","258e27b6429787f3531fd03804dbedbb"],["/ashley271017.github.io/archives/2020/02/index.html","ed0c696abc10842484a35cf92c0c7578"],["/ashley271017.github.io/archives/2020/index.html","e01b560ba3d3fbe0ce321ebe1c507721"],["/ashley271017.github.io/archives/2021/04/index.html","af3327c39439eead514708a8ffd7fde2"],["/ashley271017.github.io/archives/2021/index.html","80888892b24d7ce036e022cf89bc0fc0"],["/ashley271017.github.io/archives/2023/04/index.html","6ac38b1e6340514da55f84ab8484e50c"],["/ashley271017.github.io/archives/2023/04/page/2/index.html","bd346f4ffa787d6e1257e168173446b9"],["/ashley271017.github.io/archives/2023/index.html","f7bc2c1ba64007bc446e809383beaf19"],["/ashley271017.github.io/archives/2023/page/2/index.html","7ac58d6708d824c76bd2a3345bae5e79"],["/ashley271017.github.io/archives/index.html","f8a1a8f502432c278bf28a458d66c22f"],["/ashley271017.github.io/archives/page/2/index.html","f8a1a8f502432c278bf28a458d66c22f"],["/ashley271017.github.io/archives/page/3/index.html","f8a1a8f502432c278bf28a458d66c22f"],["/ashley271017.github.io/archives/page/4/index.html","f8a1a8f502432c278bf28a458d66c22f"],["/ashley271017.github.io/ashley271017.github.io/manifest.json","8f02b017e85412a16bf1564a3d8cd513"],["/ashley271017.github.io/blog/category/index.html","9c49ef14fa537d61b829fad44df0366d"],["/ashley271017.github.io/blog/tags/index.html","3cd6e9c3e3564042a1c9fb1cec473835"],["/ashley271017.github.io/categories/sass/index.html","931776260417a71f5738cf85466c0f75"],["/ashley271017.github.io/categories/ts/index.html","348ee5caa326e19dc22b170b2b91f254"],["/ashley271017.github.io/categories/性能优化/index.html","a528c67f53a179c84cea880abad4458d"],["/ashley271017.github.io/categories/成长/index.html","ca93cb64beafb6ed37eaf14935cca024"],["/ashley271017.github.io/categories/配置/index.html","617d2590dbed1108023cb5df436391ef"],["/ashley271017.github.io/categories/面经/css/index.html","37f353b727725c14eb3b9d73f04f1e8c"],["/ashley271017.github.io/categories/面经/index.html","b400ab04f62ecc4e0eafc3e8ceb170e4"],["/ashley271017.github.io/categories/面经/js/index.html","9e4cfd9041af5ff6331251913c3b2508"],["/ashley271017.github.io/categories/面经/浏览器/index.html","3cd5cbf514828e253da1f1366452f23e"],["/ashley271017.github.io/categories/面试/index.html","58231ff9559d3857e2d904c185a1d93a"],["/ashley271017.github.io/categories/面试/js/index.html","9a26571bc2cd4f90926022a4a37399f4"],["/ashley271017.github.io/collect/index.html","f20632a7719b021c9ec4df8aee33a050"],["/ashley271017.github.io/content.json","eae5c9677a38f5d509809301f01d9696"],["/ashley271017.github.io/friends/index.html","5a96d49495d4b9d3f8e6a6b56f922295"],["/ashley271017.github.io/images/avatar.jpeg","1f20c6c8cb93bf790f5f2616fd9324ea"],["/ashley271017.github.io/images/banner.jpg","249a15408566ba1107504f7a3fbc7eb7"],["/ashley271017.github.io/images/post/14.jpeg","dffc258b5368b63bf2eafa5f98b2568e"],["/ashley271017.github.io/images/post/15.jpeg","5d90e6b4401a13078d3863c3da1c9c00"],["/ashley271017.github.io/images/post/23.jpeg","5e209f5a872f5be7a63e2c2adfa45e85"],["/ashley271017.github.io/images/post/28.jpeg","4e900fc17f794389f389952c34a2faa4"],["/ashley271017.github.io/images/post/29.jpeg","46b1ac7620b3d84d5213f5aaa2339add"],["/ashley271017.github.io/images/post/30.jpeg","dd09994af2fe673c978ed7ab4c813ac5"],["/ashley271017.github.io/images/post/31.jpeg","598499458c546ddef3529d90fc2eef34"],["/ashley271017.github.io/images/post/4.jpeg","867f372db1c3c9fec23e9b32cbac2fe5"],["/ashley271017.github.io/images/post/5.jpeg","f9536f13cfdf4af2e0738c1aa9f70428"],["/ashley271017.github.io/images/post/9.jpeg","1a933935b9759ee92b7a3f53862a273b"],["/ashley271017.github.io/index.html","4338e76a08204fe4f33a52cc62122cb8"],["/ashley271017.github.io/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/ashley271017.github.io/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/ashley271017.github.io/js/volantis.js","3d04a1cd8e46318758aaf96a52e2ef9f"],["/ashley271017.github.io/manifest.json","dd3332c30b14ea71cb786a74527f0108"],["/ashley271017.github.io/page/2/index.html","93cf05dda81817ff4465ffc44feb13d4"],["/ashley271017.github.io/page/3/index.html","281d88d28ca8d6c38e9cd20e2b934d4d"],["/ashley271017.github.io/page/4/index.html","657f615b3d7756f0bcd5ad605c52f285"],["/ashley271017.github.io/private/index.html","9da0f67cbac975514dccd48e4acbdae1"],["/ashley271017.github.io/search.xml","924153f8ff38b60e887d3ed6d9d6f39e"],["/ashley271017.github.io/style.css","20bdb3b722b01e3b8b5a7f3707f2d5c1"],["/ashley271017.github.io/sw.js","5774119d1b852119e4efd7043ccae82c"],["/ashley271017.github.io/tags/a2hs/index.html","6cd140dbdc9d1d87d0f5bff04ff84d41"],["/ashley271017.github.io/tags/babel/index.html","99ee6b38473f1aa6fe680fb968312462"],["/ashley271017.github.io/tags/cicd/index.html","7b162ff1914702f07b5eea5d8abbd728"],["/ashley271017.github.io/tags/css/index.html","72ab0dc87f77bf80360eab7685773df9"],["/ashley271017.github.io/tags/debug/index.html","2d53fbd134815a3152fc3977c1b346f1"],["/ashley271017.github.io/tags/index.html","f5ca8f09898eb005e8dbc7ab87ebf2cd"],["/ashley271017.github.io/tags/js/index.html","56a0e5e313f205eb6d4e48978b944476"],["/ashley271017.github.io/tags/react/index.html","4aaa86397a1866d4c6f64bd71adccb19"],["/ashley271017.github.io/tags/sass-css/index.html","580d062e6a56bb21a31d9b3616ccd11c"],["/ashley271017.github.io/tags/ts/index.html","09fb0659a7ea2d763b7ef414eed861ad"],["/ashley271017.github.io/tags/vue/index.html","4da699c075c2452af0bfa9710e7acea5"],["/ashley271017.github.io/tags/vue3/index.html","60130e2f8e8baefaa19557fd544f4ca8"],["/ashley271017.github.io/tags/webpack/index.html","f88a4fe46e6861857c179014c4becd18"],["/ashley271017.github.io/tags/包管理/index.html","0a1506821cff173d917d5da50ad8c8fc"],["/ashley271017.github.io/tags/基础技能/index.html","7083af758970621b9124136e13897e07"],["/ashley271017.github.io/tags/性能优化/index.html","aa0d3592e8d0756f6405a49e5c3308d6"],["/ashley271017.github.io/tags/架构/index.html","a19eccf3d2fe8b4399a64a28185e051f"],["/ashley271017.github.io/tags/模块联邦/index.html","9a238294d5b808bb305380f228a908b1"],["/ashley271017.github.io/tags/生活/index.html","83099ca93da24491c99a304235d5c73f"],["/ashley271017.github.io/tags/算法/index.html","df487cefd31ec8ff4d1c41b0875360d0"],["/ashley271017.github.io/tags/网络/index.html","45c36db433857ffb546b7b85672b7199"],["/ashley271017.github.io/tags/配置/index.html","42737669a618552556d69d0b79d06996"],["/ashley271017.github.io/tags/面经/index.html","2971072889a435c5f2021da4781824d4"]];
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




