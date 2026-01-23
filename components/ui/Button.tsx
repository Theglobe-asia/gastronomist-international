"use client"
import { motion, type MotionProps } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"
import { cn } from "../utils"

type ButtonHTMLProps = ComponentPropsWithoutRef<"button">
type Props = ButtonHTMLProps & MotionProps & { className?: string }

export default function Button({ className, children, ...props }: Props) {
  const hasGlass =
    typeof className === "string" &&
    (className.includes("glass-btn") ||
      className.includes("glass-panel") ||
      className.includes("glass-card") ||
      className.includes("glass-frame"))

  const base = "rounded-2xl px-5 py-3 font-medium"

  // Default stays exactly as you had it
  const defaultLook = "bg-white text-black shadow-lg shadow-white/10"

  // If glass classes are present, do NOT force bg-white/text-black (it flattens glass)
  const finalClass = cn(base, hasGlass ? "" : defaultLook, className)

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={finalClass}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}
