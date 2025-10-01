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

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute left-0 top-0 h-full w-72 
                       bg-gradient-to-b from-white/80 to-yellow-400/80 
                       backdrop-blur-md
                       border-r-4 border-yellow-500 
                       shadow-xl p-6"
          >
            <h3 className="mb-6 font-bold text-black text-lg">Menu</h3>
            <nav className="flex flex-col gap-5">
              {nav.map((i, idx) => (
                <motion.div
                  key={i.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    href={i.href}
                    onClick={onClose}
                    className="text-black font-medium transition-colors duration-300 hover:text-yellow-500"
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
