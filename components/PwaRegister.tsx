"use client"

import { useEffect } from "react"

export default function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    const resetAndRegister = async () => {
      try {
        // 1️⃣ Unregister all existing service workers
        const registrations = await navigator.serviceWorker.getRegistrations()
        await Promise.all(registrations.map((r) => r.unregister()))

        // 2️⃣ Clear all cache storage (critical for stale images)
        if ("caches" in window) {
          const keys = await caches.keys()
          await Promise.all(keys.map((k) => caches.delete(k)))
        }

        // 3️⃣ Register fresh service worker
        await navigator.serviceWorker.register("/sw.js", {
          updateViaCache: "none",
        })
      } catch {
        // silent by design
      }
    }

    window.addEventListener("load", resetAndRegister)
    return () => window.removeEventListener("load", resetAndRegister)
  }, [])

  return null
}
