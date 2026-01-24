"use client"

import { useEffect } from "react"

export default function BuyMeCoffee() {
  useEffect(() => {
    // prevent duplicate injection
    if (document.querySelector('[data-name="BMC-Widget"]')) return

    const script = document.createElement("script")
    script.src = "/vendor/bmc-widget.prod.min.js" // ✅ local
    script.async = true

    script.setAttribute("data-name", "BMC-Widget")
    script.setAttribute("data-id", "chefalex")
    script.setAttribute("data-description", "Support me on Buy me a coffee!")
    script.setAttribute("data-message", "")
    script.setAttribute("data-color", "#5F7FFF")
    script.setAttribute("data-position", "Right")
    script.setAttribute("data-x_margin", "18")
    script.setAttribute("data-y_margin", "18")

    document.body.appendChild(script)
  }, [])

  return null
}
