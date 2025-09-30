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
          {/* overlay */}
          <motion.div
            onClick={onClose as React.MouseEventHandler<HTMLDivElement>}
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* sidebar */}
          <motion.aside
            className="absolute left-0 top-0 h-full w-72 bg-white border-r-2 border-yellow-500 p-6 shadow-xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h3 className="mb-6 font-semibold text-black">Menu</h3>
            <nav className="flex flex-col gap-5">
              {nav.map((i, idx) => (
                <motion.div
                  key={i.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={i.href}
                    onClick={onClose}
                    className="block text-black hover:text-yellow-600 transition-colors"
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
