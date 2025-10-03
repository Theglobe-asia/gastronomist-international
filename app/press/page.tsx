// app/press/page.tsx
"use client";

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

// ✅ Typed wrappers for motion components
type H1Motion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"h1"> & MotionProps> &
  React.RefAttributes<HTMLHeadingElement>
>;
const MotionH1 = motion.h1 as H1Motion;

type Pmotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"p"> & MotionProps> &
  React.RefAttributes<HTMLParagraphElement>
>;
const MotionP = motion.p as Pmotion;

export default function PressPage() {
  return (
    <main className="container py-16 space-y-10">
      {/* Cover image */}
      <div className="w-full h-72 rounded-2xl overflow-hidden border border-white/10 bg-gray-100">
        <img
          src="/images/collab.png"
          alt="Gastronomist x CSF Intl Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="space-y-6 max-w-3xl">
        <MotionH1
          className="text-4xl sm:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Press Release
        </MotionH1>

        <MotionP
          className="text-lg text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <strong>Gastronomist International Announces Strategic Collaboration with CSF International</strong>
        </MotionP>

        <p className="text-neutral-300 leading-relaxed">
          Gastronomist International has officially partnered with CSF International in a shared
          mission to support chefs, empower communities in need, and preserve artisan traditions.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          CSF International is widely recognized for its dedication to helping communities that have
          suffered loss of livelihood due to unforeseen circumstances. Together, this collaboration
          aims to create sustainable opportunities and provide meaningful assistance to those most affected.
        </p>

        <p className="text-neutral-300 leading-relaxed">
          To learn more about CSF International, please visit their profile featured on our Landing Page.
        </p>
      </section>
    </main>
  );
}
