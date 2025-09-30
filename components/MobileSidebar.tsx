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
        <div className="fixed inset-0 md:hidden z-50">
          {/* overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* sidebar */}
          <motion.aside
            className="absolute left-0 top-0 h-full w-72 bg-white border-r-2 border-[#D4AF37] p-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <h3 className="mb-6 font-semibold text-black tracking-wide">Menu</h3>
            <motion.nav
              className="flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
            >
              {nav.map((i) => (
                <motion.div
                  key={i.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={i.href}
                    onClick={onClose}
                    className="text-black hover:text-[#D4AF37] transition-colors text-sm font-medium"
                  >
                    {i.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
