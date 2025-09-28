"use client"
import Link from "next/link"

export default function MobileSidebar({
  open,
  onClose,
  nav
}: {
  open: boolean
  onClose: () => void
  nav: { href: string; label: string }[]
}) {
  return (
    <div className={`fixed inset-0 md:hidden ${open ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute left-0 top-0 h-full w-72 bg-neutral-900 border-r border-white/10 p-6 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="mb-6 font-semibold">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map(i => (
            <Link key={i.href} href={i.href} onClick={onClose} className="text-neutral-200 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}
