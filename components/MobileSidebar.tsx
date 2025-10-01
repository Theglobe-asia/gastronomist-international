"use client"

import { useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AnimatePresence, motion, HTMLMotionProps } from "framer-motion"

export default function MobileSidebar({
  open,
  setOpen,
  nav
}: {
  open: boolean
  setOpen: (v: boolean) => void
  nav: { href: string; label: string }[]
}) {
  const router = useRouter()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  // Close on route change
  useEffect(() => {
    const onRoute = () => setOpen(false)
    router.events.on("routeChangeComplete", onRoute)
    return () => router.events.off("routeChangeComplete", onRoute)
  }, [router.events, setOpen])

  // ESC close
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div<HTMLDivElement>
            {...({} as HTMLMotionProps<"div">)} // ✅ force TS to see div props
            className="fixed inset-0 z-[98] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar panel */}
          <motion.aside
            ref={panelRef}
            className="fixed right-0 top-0 z-[99] h-full w-72 max-w-sm bg-gradient-to-br from-white/90 via-white/80 to-yellow-500/40 border-l border-yellow-500/50 shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="p-5 flex items-center justify-between border-b border-yellow-500/50">
              <h2 className="font-semibold tracking-wide text-black">Menu</h2>
              <button
                ref={closeBtnRef}
                className="rounded-md px-3 py-2 border border-yellow-500/50 text-black hover:bg-yellow-500 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-4 py-6">
              <ul className="space-y-3">
                {nav.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-black hover:text-yellow-600 hover:bg-yellow-100 transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
