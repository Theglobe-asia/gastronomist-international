"use client"

import Link from "next/link"
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion"
import { useEffect } from "react"

const Overlay = (props: HTMLMotionProps<"div">) => <motion.div {...props} />
const Sidebar = (props: HTMLMotionProps<"aside">) => <motion.aside {...props} />

export default function MobileSidebar({
  open,
  onClose,
  nav
}: {
  open: boolean
  onClose: () => void
  nav: { href: string; label: string }[]
}) {
  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* overlay */}
          <Overlay
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* sidebar */}
          <Sidebar
            className="absolute left-0 top-0 h-full w-72 bg-white border-r-4 border-yellow-500 p-6 shadow-xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
          >
            <h3 className="mb-6 font-bold text-black text-lg tracking-wide">Menu</h3>
            <nav className="flex flex-col gap-5">
              {nav.map((i, idx) => (
                <motion.div
                  key={i.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
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
          </Sidebar>
        </div>
      )}
    </AnimatePresence>
  )
}
