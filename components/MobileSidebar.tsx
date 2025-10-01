"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

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
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Sidebar panel */}
          <motion.aside
            className="absolute left-0 top-0 h-full w-72 
                       bg-gradient-to-b from-white/90 via-white/85 to-yellow-200/80 
                       border-r-4 border-yellow-500 
                       p-6 shadow-2xl flex flex-col"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <h3 className="mb-6 font-semibold text-black">Menu</h3>
            <nav className="flex flex-col gap-4">
              {nav.map((i, index) => (
                <motion.div
                  key={i.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
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
      )}
    </AnimatePresence>
  )
}
