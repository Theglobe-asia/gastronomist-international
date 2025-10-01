"use client"

import { useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function MobileSidebar({
  open,
  setOpen,
  nav
}: {
  open: boolean
  setOpen: (v: boolean) => void
  nav: { href: string; label: string }[]
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const lastFocusedRef = useRef<Element | null>(null)
  const pathname = usePathname()

  // Close with ESC
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [setOpen])

  // Scroll lock + focus management
  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      setTimeout(() => closeBtnRef.current?.focus(), 0)
      return () => {
        document.body.style.overflow = originalOverflow
        lastFocusedRef.current && (lastFocusedRef.current as HTMLElement).focus()
      }
    }
  }, [open])

  // Focus trap
  const onKeyDownTrap = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return
    const root = panelRef.current
    if (!root) return
    const focusables = root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("#")) return pathname === "/"
    return pathname === href
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[98] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sidebar-title"
            className="fixed right-0 top-0 z-[99] h-full w-[80%] max-w-sm 
                       bg-gradient-to-b from-white/95 via-yellow-100/90 to-yellow-400/80
                       text-black border-l-4 border-yellow-500 shadow-2xl outline-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onKeyDown={onKeyDownTrap}
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-yellow-500/40">
              <h2 id="sidebar-title" className="font-semibold tracking-wide">
                Menu
              </h2>
              <button
                ref={closeBtnRef}
                className="rounded-md px-3 py-2 border border-yellow-500/50 text-black hover:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Nav */}
            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {nav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block rounded-lg px-3 py-3 text-base transition focus:outline-none focus:ring-2 focus:ring-yellow-600
                        ${
                          isActive(l.href)
                            ? "bg-white/40 text-yellow-700 border border-yellow-500/50"
                            : "hover:text-yellow-700 hover:bg-white/30"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto p-4 text-xs text-black/70 border-t border-yellow-500/40">
              © {new Date().getFullYear()} The Culinary World Gazette
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
