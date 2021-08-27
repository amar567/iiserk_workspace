console.log("Service Worker Loaded...");
const url = 'http://localhost:5000/'

self.addEventListener('fetch',() => {})

self.addEventListener('install', () => self.skipWaiting())//to update on reload