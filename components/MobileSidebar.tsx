"use client"
import Link from "next/link"
import { motion } from "framer-motion"

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
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
      {/* Dark overlay */}
      <motion.div
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Sidebar panel */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="
          absolute left-0 top-0 h-full w-72 
          bg-gradient-to-b from-white/90 via-white/80 to-yellow-200/80
          border-r-4 border-yellow-500 
          p-6 flex flex-col
        "
      >
        <h3 className="mb-6 font-semibold text-black">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map((i, idx) => (
            <motion.div
              key={i.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -20 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={i.href}
                onClick={onClose}
                className="text-black hover:text-yellow-600 font-medium transition-colors"
              >
                {i.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.aside>
    </div>
  )
}
