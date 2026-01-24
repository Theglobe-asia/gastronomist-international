/* Minimal PWA service worker (safe, cache-first for static, network-first for pages) */

const CACHE_NAME = "gi-pwa-v1"
const STATIC_ASSETS = [
  "/",
  "/logo.png",
  "/manifest.webmanifest",
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
      await self.clients.claim()
    })()
  )
})

// Network-first for navigations, cache-first for assets
self.addEventListener("fetch", (event) => {
  const req = event.request
  const url = new URL(req.url)

  // Only handle same-origin
  if (url.origin !== self.location.origin) return

  // Navigations: network-first, fallback to cache
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req)
          const cache = await caches.open(CACHE_NAME)
          cache.put("/", fresh.clone())
          return fresh
        } catch {
          const cached = await caches.match("/")
          return cached || new Response("Offline", { status: 200 })
        }
      })()
    )
    return
  }

  // Static assets: cache-first, fallback to network
  event.respondWith(
    (async () => {
      const cached = await caches.match(req)
      if (cached) return cached
      const res = await fetch(req)
      // Cache only successful GETs
      if (req.method === "GET" && res.ok) {
        const cache = await caches.open(CACHE_NAME)
        cache.put(req, res.clone())
      }
      return res
    })()
  )
})
