"use client"

import Link from "next/link"
import { useState } from "react"
import MobileSidebar from "@/components/MobileSidebar"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/chefs", label: "Our Chefs" },
  { href: "/press", label: "Press Release" },
  { href: "/about", label: "About Us" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Glass header shell */}
      <div className="relative border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        {/* Edge glow + subtle refraction */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 120px at 15% 0%, rgba(120,220,255,0.22), transparent 62%),
              radial-gradient(700px 110px at 85% 0%, rgba(255,255,255,0.12), transparent 70%),
              linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))
            `,
          }}
        />

        <div className="container relative flex h-16 items-center justify-between px-4">
          {/* Logo / Title */}
          <Link
            href="/"
            className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 font-bold text-lg tracking-wide"
          >
            Gastronomist International
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white hover:border-white/20 hover:bg-white/[0.07] transition"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden px-4 py-2 rounded-xl border border-white/12 bg-white/[0.05] text-sm text-white hover:border-white/20 hover:bg-white/[0.08] transition"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} nav={NAV} />
    </header>
  )
}
