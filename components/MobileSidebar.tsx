"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

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
      {/* Overlay */}
      <motion.div
        {...({ onClick: onClose } as HTMLMotionProps<"div">)}
        className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-yellow-500/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Sidebar */}
      <motion.aside
        className="absolute left-0 top-0 h-full w-72 bg-white border-r-4 border-yellow-500 p-6 shadow-xl"
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-6 font-semibold text-black">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map((i, idx) => (
            <motion.div
              key={i.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: open ? 0 : -20, opacity: open ? 1 : 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={i.href}
                onClick={onClose}
                className="text-black hover:text-yellow-600 transition-colors"
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
