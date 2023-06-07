import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './images/alfito-photo.png',
  './images/almond.png',
  './images/bagas-photo.png',
  './images/blueberry.png',
  './images/blueberry-1.png',
  './images/chicken-1.png',
  './images/chicken.png',
  './images/hero.jpg',
  './images/honey.png',
  './images/one-blueberry.png',
  './images/peach.png',
  './images/round-bread.png',
  './images/salsa-photo.png',
  './images/teguh-photo.png',
  './images/two-bluerries.png',
  './app.bundle.js',
  './app.css',
  './app.webmanifest',
  './favicon.png',
  './index.html',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
