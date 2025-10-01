"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Cast once to silence framer-motion TS issues on Vercel builds
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
          {/* Dimmed background */}
          <MDiv
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Sidebar panel with gradient */}
          <MAside
            className="absolute left-0 top-0 h-full w-72 
                       bg-gradient-to-b from-white via-yellow-100 to-yellow-400 
                       text-black border-r-2 border-[#D4AF37] shadow-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          >
            <h3 className="mb-6 font-bold text-lg tracking-wide">Menu</h3>
            <nav className="flex flex-col gap-3">
              {nav.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className="px-2 py-2 rounded-md text-base font-medium transition-colors 
                             hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
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
