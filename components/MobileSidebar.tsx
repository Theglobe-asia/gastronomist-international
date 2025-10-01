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
  // ✅ Typed motion.div to accept onClick + className
  const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>
  const MotionAside = motion.aside as React.FC<HTMLMotionProps<"aside">>

  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
      {/* Overlay */}
      <MotionDiv
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Sidebar with gradient */}
      <MotionAside
        className="absolute left-0 top-0 h-full w-72 bg-gradient-to-br from-white/90 via-yellow-200/80 to-yellow-500/70 border-r-4 border-yellow-500 p-6 shadow-xl"
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="mb-6 font-semibold text-black">Menu</h3>
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
      </MotionAside>
    </div>
  )
}
