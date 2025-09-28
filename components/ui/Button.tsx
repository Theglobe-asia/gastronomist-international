"use client"
import { motion } from "framer-motion"
import { cn } from "../utils"

export default function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn("rounded-2xl px-5 py-3 font-medium bg-white text-black shadow-lg shadow-white/10", className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
