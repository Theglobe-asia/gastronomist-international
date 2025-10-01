"use client"

import { useState } from "react"
import Link from "next/link"
import MobileSidebar from "./MobileSidebar"

export default function Header() {
  const [open, setOpen] = useState(false)

  const nav = [
    { href: "/", label: "Home" },
    { href: "/our-chefs", label: "Our Chefs" },
    { href: "/press-release", label: "Press Release" },
    { href: "/about-us", label: "About Us" }
  ]

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-wide">
        Gastronomist International
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        {nav.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="text-sm text-neutral-200 hover:text-[var(--gold)] transition"
          >
            {i.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden px-3 py-2 rounded-lg border border-white/20 text-sm text-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {/* Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} nav={nav} />
    </header>
  )
}
