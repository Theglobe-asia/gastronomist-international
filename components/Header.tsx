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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-black via-black/90 to-black border-b border-yellow-500/50">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo / Title */}
        <Link
          href="/"
          className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 font-bold text-lg tracking-wide"
        >
          Gastronomist International
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-white hover:text-yellow-400 transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sm text-white border border-yellow-500/60 rounded-md px-3 py-1 hover:bg-yellow-500 hover:text-black transition"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} nav={NAV} />
    </header>
  )
}
