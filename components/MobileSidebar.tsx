"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

// ---- Typed motion wrappers (support className, onClick, and ref) ----
type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
  React.RefAttributes<HTMLDivElement>
>
type AsideMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"aside"> & MotionProps> &
  React.RefAttributes<HTMLElement>
>

const MotionDiv = motion.div as DivMotion
const MotionAside = motion.aside as AsideMotion
// --------------------------------------------------------------------

export default function MobileSidebar({
  open,
  setOpen,
  nav,
}: {
  open: boolean
  setOpen: (v: boolean) => void
  nav: { href: string; label: string }[]
}) {
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)

  // Close when route changes
  useEffect(() => {
    if (!open) return
    setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Close on ESC
  useEffect(() => {
    if (!open) return
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <MotionDiv
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[98] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Gradient panel */}
          <MotionAside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Menu"
            className="fixed right-0 top-0 z-[99] h-full w-[86%] max-w-sm
                       border-l border-yellow-500/60 shadow-2xl outline-none
                       bg-gradient-to-br from-white/95 via-amber-50/90 to-yellow-100/85
                       backdrop-blur"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-yellow-500/50">
              <h2 className="font-semibold tracking-wide text-black">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-black border border-yellow-500/50
                           hover:bg-yellow-500 hover:text-white transition focus:outline-none
                           focus:ring-2 focus:ring-yellow-500"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Nav */}
            <nav className="px-4 py-5">
              <ul className="space-y-2">
                {nav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-black
                                 border border-transparent
                                 hover:text-yellow-600 hover:bg-yellow-100
                                 transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer (optional) */}
            <div className="mt-auto p-4 text-xs text-black/70 border-t border-yellow-500/40">
              © {new Date().getFullYear()} Gastronomist International
            </div>
          </MotionAside>
        </>
      )}
    </AnimatePresence>
  )
}
