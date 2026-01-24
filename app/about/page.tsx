// app/about/page.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

const leaders = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation.",
    img: "/images/chefalex.png?v=2",
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage and innovation.",
    img: "/images/chefcox.png?v=2",
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefhamid.png?v=2",
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefluzac.png?v=2",
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefthet.png?v=2",
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefwael.png?v=2",
  },
]

export default function AboutPage() {
  const [active, setActive] = useState<any | null>(null)

  return (
    <main className="relative container py-16 space-y-16">
      {/* Page intro */}
      <section className="glass-panel glass-panel-pad glass-glow">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          About <span className="text-white/80">Gastronomist International</span>
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-300 leading-relaxed">
          We are a global culinary community focused on modern gastronomy,
          knowledge-sharing, and professional recognition. Our platform connects
          chefs, educators, creators, and industry partners worldwide.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="grid sm:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold text-white">Our Mission</h3>
          <p className="mt-2 text-neutral-300">
            Empower culinary professionals through recognition, collaboration,
            and innovation.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-white">Our Vision</h3>
          <p className="mt-2 text-neutral-300">
            A modern, inclusive culinary ecosystem where talent thrives on a
            global stage.
          </p>
        </Card>
      </section>

      {/* What we do */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Network",
              d: "Connect chefs, educators, creators, and brands globally.",
            },
            {
              t: "Recognize",
              d: "Showcase achievements, profiles, and milestones.",
            },
            {
              t: "Educate",
              d: "Share research, standards, and modern gastronomy practices.",
            },
          ].map((i) => (
            <Card key={i.t} className="p-6">
              <h3 className="font-semibold text-white">{i.t}</h3>
              <p className="mt-2 text-neutral-300">{i.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-white">
          Leadership & Ambassadors
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((p) => (
            <motion.article
              key={p.name}
              className="glass-card glass-shine cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              onClick={() => setActive(p)}
            >
              <div className="h-72 overflow-hidden border-b border-white/10">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="font-medium text-white">{p.name}</h3>
                <div className="mt-1 text-xs text-neutral-400">{p.role}</div>
                <p className="mt-3 text-sm text-neutral-300">{p.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="glass-panel glass-panel-pad max-w-2xl w-full">
                <div className="h-80 overflow-hidden border-b border-white/10">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="pt-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {active.name}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">{active.role}</p>
                  <p className="mt-4 text-neutral-300">{active.blurb}</p>

                  <div className="mt-6">
                    <Button
                      className="glass-btn glass-shine"
                      onClick={() => setActive(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
