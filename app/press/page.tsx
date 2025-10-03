// app/press/page.tsx
"use client"

import { motion } from "framer-motion"

export default function PressReleasePage() {
  return (
    <main className="container py-16 space-y-10">
      {/* Cover Image */}
      <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-yellow-500/40 bg-gray-100">
        <img
          src="/images/collab.png"
          alt="Gastronomist x CSF International Collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Press Release Content */}
      <section className="space-y-6 max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Press Release
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-yellow-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Gastronomist International Announces Strategic Collaboration with CSF International
        </motion.h2>

        <motion.p
          className="text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Gastronomist International has officially partnered with{" "}
          <span className="font-semibold text-yellow-300">CSF International</span> in a shared
          mission to support chefs, empower communities in need, and preserve artisan traditions.
        </motion.p>

        <motion.p
          className="text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          CSF International is widely recognized for its dedication to helping communities that have
          suffered loss of livelihood due to unforeseen circumstances. Together, this collaboration
          aims to create sustainable opportunities and provide meaningful assistance to those most
          affected.
        </motion.p>

        <motion.p
          className="text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          To learn more about CSF International, please visit their profile featured on our{" "}
          <a
            href="/"
            className="underline decoration-yellow-400 hover:text-yellow-300 transition"
          >
            Landing Page
          </a>
          .
        </motion.p>
      </section>
    </main>
  )
}
