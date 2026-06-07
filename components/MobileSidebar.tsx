"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import type { IconType } from "react-icons"

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

export default function MobileSidebar({
  open,
  setOpen,
  nav,
}: {
  open: boolean
  setOpen: (v: boolean) => void
  nav: { href: string; label: string; icon?: IconType }[]
}) {
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onEsc)

    return () => window.removeEventListener("keydown", onEsc)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          <MotionDiv
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[98] bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          <MotionAside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Menu"
            className="
              fixed right-0 top-0 z-[99]
              h-full w-[88%] max-w-sm
              overflow-hidden
              border-l border-yellow-400/20
              bg-black/95
              shadow-[0_0_60px_rgba(0,0,0,0.7)]
              outline-none
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(800px 300px at 10% 0%, rgba(212,163,54,0.18), transparent 65%),
                  radial-gradient(700px 280px at 90% 0%, rgba(255,230,160,0.08), transparent 70%),
                  linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))
                `,
              }}
            />

            <div className="relative flex h-full flex-col">
              <div className="border-b border-yellow-400/15 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-yellow-300">
                      Gastronomist
                    </div>

                    <h2 className="mt-1 text-lg font-semibold text-white">
                      International
                    </h2>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="
                      rounded-xl
                      border border-yellow-400/20
                      bg-white/[0.03]
                      px-3 py-2
                      text-white
                      transition
                      hover:border-yellow-400/40
                      hover:text-yellow-300
                    "
                  >
                    ✕
                  </button>
                </div>
              </div>

              <nav className="px-4 py-5">
                <ul className="space-y-2">
                  {nav.map((item) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))

                    const Icon = item.icon

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={[
                            "flex items-center gap-3 rounded-2xl px-4 py-3 transition",
                            "border bg-white/[0.02]",
                            active
                              ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-200"
                              : "border-white/10 text-white hover:border-yellow-400/30 hover:bg-yellow-400/5",
                          ].join(" ")}
                        >
                          {Icon ? (
                            <Icon
                              className="h-5 w-5 text-yellow-300"
                              aria-hidden
                            />
                          ) : (
                            <span className="h-5 w-5" aria-hidden />
                          )}

                          <span className="font-medium">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>

              <div className="mt-auto border-t border-yellow-400/10 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-yellow-300">
                  Global Culinary Community
                </div>

                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  Connecting culinary professionals, leaders, educators, and
                  innovators through a worldwide network dedicated to excellence.
                </p>

                <div className="mt-4 text-xs text-neutral-500">
                  © {new Date().getFullYear()} Gastronomist International
                </div>
              </div>
            </div>
          </MotionAside>
        </>
      )}
    </AnimatePresence>
  )
}