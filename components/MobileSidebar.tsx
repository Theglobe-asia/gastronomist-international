"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Safe casting for motion components (avoids Vercel build type errors)
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
          {/* Backdrop overlay */}
          <MDiv
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Sidebar panel with gradient + inner shadow */}
          <MAside
            className="absolute left-0 top-0 h-full w-72 
                       bg-gradient-to-b from-white via-yellow-50 to-yellow-300
                       border-r-2 border-[#D4AF37] 
                       shadow-2xl shadow-black/20 
                       text-black relative"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          >
            {/* Inner shadow overlay for depth */}
            <div className="absolute inset-0 pointer-events-none shadow-inner shadow-black/10 rounded-r-2xl" />

            <div className="relative z-10 p-6">
              <h3 className="mb-6 font-bold text-lg tracking-wide">Menu</h3>

              {/* Navigation links */}
              <nav className="flex flex-col gap-4">
                {nav.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="px-3 py-2 rounded-md text-base font-semibold transition-colors 
                               hover:text-[#D4AF37] active:scale-95"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </MAside>
        </div>
      )}
    </AnimatePresence>
  )
}
