"use client"
import Link from "next/link"
import { motion, HTMLMotionProps } from "framer-motion"

type MotionDivProps = HTMLMotionProps<"div">

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
    <div className={`fixed inset-0 md:hidden ${open ? "" : "pointer-events-none"}`}>
      {/* Overlay */}
      <motion.div
        {...({
          className: "absolute inset-0",
          initial: { opacity: 0 },
          animate: { opacity: open ? 1 : 0 },
          exit: { opacity: 0 },
          transition: { duration: 0.3 }
        } as MotionDivProps)}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={onClose}
        />
      </motion.div>

      {/* Sidebar */}
      <motion.aside
        {...({
          className:
            "absolute left-0 top-0 h-full w-72 bg-white border-r-2 border-yellow-500 p-6 text-black shadow-xl",
          initial: { x: "-100%" },
          animate: { x: open ? "0%" : "-100%" },
          transition: { type: "spring", stiffness: 300, damping: 30 }
        } as HTMLMotionProps<"aside">)}
      >
        <h3 className="mb-6 font-semibold">Menu</h3>
        <nav className="flex flex-col gap-4">
          {nav.map((i, idx) => (
            <motion.div
              key={i.href}
              {...({
                initial: { x: -20, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0.1 * idx }
              } as MotionDivProps)}
            >
              <Link
                href={i.href}
                onClick={onClose}
                className="hover:text-yellow-600 transition-colors"
              >
                {i.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.aside>
    </div>
  )
}
