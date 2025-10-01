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
  // Overlay with correct typing
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

      {/* Sidebar */}
      <MotionAside
        className="absolute left-0 top-0 h-full w-72 bg-white border-r-2 border-yellow-500 p-6 shadow-xl flex flex-col"
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
      >
        <h3 className="mb-6 font-semibold text-black">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map((i, idx) => (
            <motion.div
              key={i.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
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
      </MotionAside>
    </div>
  )
}
