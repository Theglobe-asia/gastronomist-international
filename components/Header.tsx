"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import MobileSidebar from "./MobileSidebar"

const nav = [
  { href: "/", label: "Home" },
  { href: "/chefs", label: "Our Chefs" },
  { href: "/press", label: "Press Release" },
  { href: "/about", label: "About Us" }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Gastronomist International logo"
            width={60}
            height={60}
            priority
            className="rounded-lg"
          />
          <span className="font-semibold tracking-wide">Gastronomist International</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="text-sm text-neutral-200 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-sm" onClick={() => setOpen(true)}>Menu</button>
      </div>
      <MobileSidebar open={open} onClose={() => setOpen(false)} nav={nav} />
    </header>
  )
}
