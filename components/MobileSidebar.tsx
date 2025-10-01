"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

const MotionDiv = motion.div as React.FC<HTMLMotionProps<"div">>
const MotionAside = motion.aside as React.FC<HTMLMotionProps<"aside">>

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
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute left-0 top-0 h-full w-72
                   bg-gradient-to-b from-white/90 via-yellow-200/80 to-yellow-500/70
                   border-r-4 border-yellow-500
                   p-6 shadow-xl"
      >
        <h3 className="mb-6 font-bold text-lg text-black">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map((i, idx) => (
            <motion.div
              key={i.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
            >
              <Link
                href={i.href}
                onClick={onClose}
                className="block text-black font-medium hover:text-yellow-600 transition-colors"
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
