"use client"

import { useEffect } from "react"

export default function BuyMeCoffee() {
  useEffect(() => {
    const STYLE_ID = "bmc-widget-force-style"
    const SCRIPT_SELECTOR = 'script[data-name="BMC-Widget"]'
    const LOCAL_SRC = "/vendor/bmc-widget.prod.min.js"

    // Detect whether widget UI actually exists (not just script tag)
    const hasWidgetDom = () =>
      Boolean(
        document.getElementById("bmc-wbtn") ||
          document.querySelector(".bmc-btn-container")
      )

    // Inject hardening CSS once (visibility + spacing + optional subtle animation)
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style")
      style.id = STYLE_ID
      style.textContent = `
        /* Ensure widget is visible and above ContactWidget */
        #bmc-wbtn, .bmc-btn-container {
          z-index: 2147483647 !important;
          right: 18px !important;
          bottom: 110px !important; /* lift above ContactWidget */
        }

        /* Optional: tasteful attention animation */
        #bmc-wbtn, .bmc-btn-container {
          transform-origin: 80% 80%;
          animation: bmcPop 420ms ease-out 1, bmcShakeCycle 12s ease-in-out infinite;
          will-change: transform;
        }

        #bmc-wbtn:hover, .bmc-btn-container:hover {
          transform: scale(1.03) !important;
        }

        @keyframes bmcPop {
          0% { transform: scale(0.92); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes bmcShakeCycle {
          0%, 10% { transform: translateX(0) rotate(0deg); }
          10.8% { transform: translateX(-2px) rotate(-1.4deg); }
          11.6% { transform: translateX(2px) rotate(1.4deg); }
          12.4% { transform: translateX(-2px) rotate(-1.2deg); }
          13.2% { transform: translateX(2px) rotate(1.2deg); }
          14.0% { transform: translateX(-1px) rotate(-0.8deg); }
          15.0%, 100% { transform: translateX(0) rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          #bmc-wbtn, .bmc-btn-container { animation: none !important; transition: none !important; }
        }
      `
      document.head.appendChild(style)
    }

    const injectScript = () => {
      // Remove existing script if present (prevents half-initialized state)
      const existing = document.querySelector(SCRIPT_SELECTOR)
      if (existing) existing.remove()

      const s = document.createElement("script")
      s.setAttribute("data-name", "BMC-Widget")
      s.setAttribute("data-cfasync", "false")
      s.src = LOCAL_SRC

      s.setAttribute("data-id", "chefalex")
      s.setAttribute("data-description", "Support me on Buy me a coffee!")
      s.setAttribute("data-message", "")

      // keep your current color
      s.setAttribute("data-color", "#5F7FFF")

      // right + lifted above ContactWidget
      s.setAttribute("data-position", "Right")
      s.setAttribute("data-x_margin", "18")
      s.setAttribute("data-y_margin", "110")

      s.async = true

      // Some builds init on DOMContentLoaded; dispatch it after load
      s.onload = () => {
        try {
          const evt = document.createEvent("Event")
          evt.initEvent("DOMContentLoaded", true, true)
          window.dispatchEvent(evt)
        } catch {}
      }

      document.body.appendChild(s)
    }

    // If widget DOM isn't present, inject (even if script exists)
    if (!hasWidgetDom()) injectScript()

    // Intentionally persistent (do not cleanup/remove)
  }, [])

  return null
}
