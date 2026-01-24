"use client"

import Link from "next/link"
import { useState } from "react"
import MobileSidebar from "@/components/MobileSidebar"
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineNewspaper,
  HiOutlineInformationCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi2"

const NAV = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/chefs", label: "Our Chefs", icon: HiOutlineUsers },
  { href: "/press", label: "Press Release", icon: HiOutlineNewspaper },
  { href: "/about", label: "About Us", icon: HiOutlineInformationCircle },
  { href: "/shop", label: "Shop", icon: HiOutlineShoppingBag },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Glass header shell */}
      <div className="relative border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        {/* Edge glow + refraction (aligned with panels) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 140px at 18% 0%, rgba(120,220,255,0.26), transparent 62%),
              radial-gradient(700px 120px at 82% 0%, rgba(255,255,255,0.14), transparent 70%),
              linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))
            `,
          }}
        />

        <div className="container relative flex h-16 items-center justify-between px-4">
          {/* Logo / Title */}
          <Link
            href="/"
            className="flex items-center gap-3 text-transparent bg-clip-text
                       bg-gradient-to-r from-yellow-400 to-yellow-200
                       font-bold text-lg tracking-wide"
          >
            Gastronomist International
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {NAV.map((i) => {
              const Icon = i.icon
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2 rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    text-sm text-white
                    hover:border-white/20
                    hover:bg-white/[0.08]
                    transition
                  "
                >
                  <Icon className="h-4 w-4 text-white/85" aria-hidden />
                  <span>{i.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="
              md:hidden
              inline-flex items-center gap-2
              px-4 py-2 rounded-xl
              border border-white/10
              bg-white/[0.05]
              text-sm text-white
              hover:border-white/20
              hover:bg-white/[0.08]
              transition
            "
          >
            <HiOutlineUsers className="h-4 w-4 text-white/85" aria-hidden />
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} nav={NAV} />
    </header>
  )
}
