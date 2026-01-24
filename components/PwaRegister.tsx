"use client"

import { useEffect } from "react"

export default function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    const onLoad = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js")
      } catch {
        // silent: SW registration should not break the site
      }
    }

    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  return null
}
