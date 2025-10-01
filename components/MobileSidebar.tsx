"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Cast once to avoid FM v11 TS overload issues during CI builds
const MDiv: any = motion.div
const MAside: any = motion.aside

export default function MobileSidebar({
  open,
  onClose,
  nav,
}: {
  open: boolean
  onClose: () => void
  nav: { href: string; label: string }[]
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay (80% white/gold gradient) */}
          <MDiv
            onClick={onClose}
            className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-yellow-500/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          />

          {/* Panel */}
          <MAside
            className="absolute left-0 top-0 h-full w-72 bg-white text-black border-r-2 border-[#D4AF37] shadow-xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 36 }}
          >
            <h3 className="mb-6 font-semibold tracking-wide">Menu</h3>
            <nav className="flex flex-col gap-3">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="px-2 py-2 rounded-md text-sm font-medium hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </MAside>
        </div>
      )}
    </AnimatePresence>
  )
}
