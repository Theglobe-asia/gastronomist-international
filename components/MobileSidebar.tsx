// components/MobileSidebar.tsx
"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function MobileSidebar({
  open,
  onClose,
  nav
}: {
  open: boolean
  onClose: () => void
  nav: { href: string; label: string }[]
}) {
  // lock scroll when sidebar is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = prev }
  }, [open])

  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* FULL PANEL gradient background */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute left-0 top-0 h-full w-72 p-6 shadow-xl border-r-4 border-yellow-500
        bg-gradient-to-b from-white/95 via-yellow-100/90 to-yellow-400/70
        text-black transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h3 className="mb-6 font-semibold">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map(i => (
            <Link
              key={i.href}
              href={i.href}
              onClick={onClose}
              className="text-black hover:text-yellow-600 transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}
