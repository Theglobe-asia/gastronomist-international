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
            className="fixed inset-0 z-[98] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Water-glass panel */}
          <MotionAside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Menu"
            className="fixed right-0 top-0 z-[99] h-full w-[86%] max-w-sm outline-none
                       glass-panel glass-shine
                       border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* extra depth tint (keeps glass readable on all backgrounds) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.55))",
              }}
            />

            {/* Content layer */}
            <div className="relative flex h-full flex-col">
              {/* Header */}
              <div className="p-5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  <h2 className="font-semibold tracking-wide text-white">Menu</h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-white border border-white/15 bg-white/[0.04]
                             hover:bg-white/[0.08] hover:border-white/25 transition
                             focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Nav */}
              <nav className="px-4 py-5">
                <ul className="space-y-2">
                  {nav.map((l) => {
                    const active = pathname === l.href
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className={[
                            "block rounded-2xl px-4 py-3 text-base transition",
                            "border border-white/10 bg-white/[0.03] text-white",
                            "hover:border-white/20 hover:bg-white/[0.06]",
                            "focus:outline-none focus:ring-2 focus:ring-white/25",
                            active ? "border-white/25 bg-white/[0.06]" : "",
                          ].join(" ")}
                        >
                          {l.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-auto p-4 text-xs text-neutral-300 border-t border-white/10">
                © {new Date().getFullYear()} Gastronomist International
              </div>
            </div>
          </MotionAside>
        </>
      )}
    </AnimatePresence>
  )
}
