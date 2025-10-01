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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-yellow-500/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-black font-semibold">
          Gastronomist International
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {NAV.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-black hover:text-yellow-600"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-sm text-black" onClick={() => setOpen(true)}>
          Menu
        </button>
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} nav={NAV} />
    </header>
  )
}
