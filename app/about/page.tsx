// app/about/page.tsx
"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

// ✅ Typed motion wrappers (prevents TS className errors on Vercel)
type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>
type ArticleMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"article"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>
type SectionMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"section"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>

const MotionDiv = motion.div as DivMotion
const MotionArticle = motion.article as ArticleMotion
const MotionSection = motion.section as SectionMotion

const leaders = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation.",
    img: "/images/chefalex.png?v=2",
    region: "Global",
    focus: "Modern Gastronomy",
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage and innovation.",
    img: "/images/chefcox.png?v=2",
    region: "Global",
    focus: "Food Heritage",
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefhamid.png?v=2",
    region: "Azerbaijan",
    focus: "Representation",
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefluzac.png?v=2",
    region: "France",
    focus: "Representation",
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefthet.png?v=2",
    region: "Myanmar",
    focus: "Representation",
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefwael.png?v=2",
    region: "Saudi Arabia",
    focus: "Representation",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<(typeof leaders)[number] | null>(null)

  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* Editorial hero cover */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(1100px 460px at 18% 24%, rgba(120,220,255,0.26), transparent 60%),
              radial-gradient(900px 420px at 82% 22%, rgba(255,255,255,0.14), transparent 68%),
              radial-gradient(900px 520px at 50% 120%, rgba(80,120,255,0.10), transparent 70%)
            `,
          }}
        />

        <div className="glass-panel glass-panel-pad glass-shine glass-glow">
          <div className="relative h-[190px] sm:h-[250px] lg:h-[290px] overflow-hidden rounded-2xl border border-white/10">
            {/* use existing asset; change later if desired */}
            <img src="/images/recognition.png" alt="About Gastronomist International" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute left-6 right-6 bottom-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Editorial Overview • Mission & Leadership
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                  Gastronomist International
                </span>
              </h1>

              <p className="mt-3 text-neutral-300 max-w-3xl">
                A global culinary community focused on modern gastronomy, knowledge-sharing, and professional recognition.
                We connect chefs, educators, creators, and industry partners to elevate standards worldwide.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/chefs">
                  <Button className="glass-btn glass-shine">Explore Chefs</Button>
                </a>
                <a href="/press">
                  <Button className="glass-btn glass-btn-muted glass-shine">Read Press</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Editorial meta row */}
          <div className="mt-7 grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8">
              <Card className="p-6 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">Mission & Vision</h2>
                    <p className="mt-1 text-sm text-neutral-400">
                      A refined editorial snapshot of what we stand for.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    Updated UI System: Water-Glass
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs text-neutral-400">Our Mission</div>
                    <div className="mt-2 text-white font-semibold">Empower & Elevate</div>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      To empower culinary professionals with community, recognition, and opportunities—while championing innovation and ethical practice.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs text-neutral-400">Our Vision</div>
                    <div className="mt-2 text-white font-semibold">Global Excellence</div>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      A modern, inclusive ecosystem where talent thrives, ideas travel, and excellence is visible on a global stage.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-6 sm:p-7">
                <div className="text-sm font-medium text-white">What We Do</div>
                <p className="mt-1 text-xs text-neutral-400">Editorial modules.</p>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      t: "Network",
                      d: "Connect chefs, educators, creators, and brands through events, media, and community spaces.",
                    },
                    {
                      t: "Recognize",
                      d: "Showcase achievements, profiles, and milestones to elevate members’ careers.",
                    },
                    {
                      t: "Educate",
                      d: "Share methods, research, and industry standards around modern gastronomy.",
                    },
                  ].map((i) => (
                    <div
                      key={i.t}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium text-white">{i.t}</div>
                        <div className="text-white/50" aria-hidden>
                          →
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{i.d}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership: magazine grid + sidebar */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Leadership & Ambassadors</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Click a profile for the editorial card view.
                </p>
              </div>
              <a href="/chefs" className="text-xs text-neutral-300 hover:text-white transition">
                View Members →
              </a>
            </div>

            <MotionSection
              className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {leaders.map((p) => (
                <MotionArticle
                  key={p.name}
                  variants={cardVariants}
                  className="glass-card glass-shine cursor-pointer"
                  onClick={() => setSelectedLeader(p)}
                >
                  <div className="h-44 overflow-hidden border-b border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <img src={p.img} alt={p.name} className="h-full w-full object-contain" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-medium text-white truncate">{p.name}</h3>
                        <div className="mt-1 text-xs text-neutral-400">{p.role}</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-neutral-200">
                        {p.region}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-neutral-300 leading-relaxed line-clamp-3">
                      {p.blurb}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-neutral-400">
                        Focus: <span className="text-neutral-200">{p.focus}</span>
                      </div>
                      <div className="text-white/50" aria-hidden>
                        →
                      </div>
                    </div>
                  </div>
                </MotionArticle>
              ))}
            </MotionSection>
          </Card>

          <Card className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03]" />
              <div className="min-w-0">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  “We embrace the diversity of talent and expertise within the culinary community — modern techniques, global recognition, and real collaboration.”
                </p>
                <div className="mt-4 text-sm font-medium text-white">Gastronomist International</div>
                <div className="mt-1 text-xs text-neutral-400">Editorial Mission Statement</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Editorial Notes</h3>
            <p className="mt-1 text-sm text-neutral-400">A magazine-style sidebar.</p>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Standards</div>
                <div className="mt-1 text-sm text-neutral-300">
                  A consistent platform for recognition and global professionalism.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Community</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Members worldwide connected through shared purpose and craft.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Innovation</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Modern gastronomy techniques and education — presented with clarity.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/chefs">
                <Button className="glass-btn glass-shine">Our Chefs</Button>
              </a>
              <a href="/press">
                <Button className="glass-btn glass-btn-muted glass-shine">Press</Button>
              </a>
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <p className="mt-1 text-sm text-neutral-400">Editorial navigation blocks.</p>

            <div className="mt-5 space-y-3">
              {[
                { href: "/press", t: "Press Release", d: "Official announcements & collaborations." },
                { href: "/shop", t: "Shop", d: "Membership & official items." },
                { href: "/chefs", t: "Members", d: "Browse the international directory." },
              ].map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium text-white">{i.t}</div>
                    <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                      →
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-neutral-400">{i.d}</div>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <>
            <MotionDiv
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
            />

            <MotionDiv
              className="fixed inset-0 z-[91] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22 }}
            >
              <div className="glass-panel glass-panel-pad glass-shine w-full max-w-3xl relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      Leader Profile • {selectedLeader.region}
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
                      {selectedLeader.name}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-300">{selectedLeader.role}</p>
                  </div>

                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="rounded-xl px-3 py-2 text-white border border-white/15 bg-white/[0.04]
                               hover:bg-white/[0.08] hover:border-white/25 transition
                               focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-5">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                      <div className="h-[340px] bg-white/[0.02] flex items-center justify-center">
                        <img
                          src={selectedLeader.img}
                          alt={selectedLeader.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-xs text-neutral-400">Editorial Summary</div>
                      <p className="mt-2 text-neutral-200 leading-relaxed">{selectedLeader.blurb}</p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                          <div className="text-[11px] text-neutral-400">Region</div>
                          <div className="mt-1 text-sm text-white">{selectedLeader.region}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                          <div className="text-[11px] text-neutral-400">Focus</div>
                          <div className="mt-1 text-sm text-white">{selectedLeader.focus}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href="/chefs">
                        <Button className="glass-btn glass-shine">Our Chefs</Button>
                      </a>
                      <button onClick={() => setSelectedLeader(null)}>
                        <Button className="glass-btn glass-btn-muted glass-shine">Close</Button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
