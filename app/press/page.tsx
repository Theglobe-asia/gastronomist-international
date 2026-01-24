// app/press/page.tsx
"use client"

import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

/* ✅ Typed motion wrappers (TS-safe) */
type H1Motion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"h1"> & MotionProps> &
    React.RefAttributes<HTMLHeadingElement>
>
const MotionH1 = motion.h1 as H1Motion

type PMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"p"> & MotionProps> &
    React.RefAttributes<HTMLParagraphElement>
>
const MotionP = motion.p as PMotion

export default function PressPage() {
  return (
    <main className="container py-16 space-y-12">
      {/* Hero / Cover */}
      <section className="glass-frame h-72 sm:h-80 overflow-hidden relative">
        <img
          src="/images/collab.png"
          alt="Gastronomist x CSF Intl Collaboration"
          className="w-full h-full object-cover"
        />
        {/* depth overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/40" />
      </section>

      {/* Press content */}
      <section className="glass-panel glass-panel-pad max-w-4xl">
        <MotionH1
          className="text-4xl sm:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Press Release
        </MotionH1>

        <MotionP
          className="mt-4 text-lg text-neutral-300"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <strong className="font-semibold text-white">
            Gastronomist International Announces Strategic Collaboration with CSF International
          </strong>
        </MotionP>

        <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed">
          <p>
            Gastronomist International has officially partnered with CSF International in a shared
            mission to support chefs, empower communities in need, and preserve artisan traditions.
          </p>

          <p>
            CSF International is widely recognized for its dedication to helping communities that
            have suffered loss of livelihood due to unforeseen circumstances. Together, this
            collaboration aims to create sustainable opportunities and provide meaningful assistance
            to those most affected.
          </p>

          <p>
            To learn more about CSF International, please visit their profile featured on our Landing
            Page.
          </p>
        </div>
      </section>
    </main>
  )
}
