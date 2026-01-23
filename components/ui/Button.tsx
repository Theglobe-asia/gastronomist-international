"use client"
import { motion, type MotionProps } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"
import { cn } from "../utils"

type ButtonHTMLProps = ComponentPropsWithoutRef<"button">

type Props = ButtonHTMLProps &
  MotionProps & {
    className?: string
    variant?: "default" | "glass" | "glass-muted"
  }

export default function Button({
  className,
  children,
  variant = "default",
  ...props
}: Props) {
  const base = "rounded-2xl px-5 py-3 font-medium"

  const variants: Record<NonNullable<Props["variant"]>, string> = {
    default: "bg-white text-black shadow-lg shadow-white/10",
    glass: "glass-btn glass-shine",
    "glass-muted": "glass-btn glass-btn-muted glass-shine",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], className)}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}
