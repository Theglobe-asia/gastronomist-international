// app/chefs/page.tsx
"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

// ✅ Typed motion wrappers (avoid TS className errors)
type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>
type SectionMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"section"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>
type ArticleMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"article"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>

const MotionDiv = motion.div as DivMotion
const MotionSection = motion.section as SectionMotion
const MotionArticle = motion.article as ArticleMotion

const chefs = [
  {
    name: "Chef Mar",
    role: "International Member",
    blurb: "Specializes in modernizing traditional recipes with innovative techniques.",
    img: "/images/chefmar.png",
    region: "Asia",
    specialty: "Modern Heritage",
  },
  {
    name: "Chef Arman",
    role: "International Member",
    blurb: "Passionate about sustainable cooking and seasonal ingredients.",
    img: "/images/chefarman.png",
    region: "Europe",
    specialty: "Sustainability",
  },
  {
    name: "Chef Sandar",
    role: "International Member",
    blurb: "Renowned for artistic pastry creations blending flavor and design.",
    img: "/images/chefsandar.png",
    region: "Asia",
    specialty: "Pastry Arts",
  },
  {
    name: "Chef Deric",
    role: "International Member",
    blurb: "Expert in precision cooking and creative plating aesthetics.",
    img: "/images/chefderic.png",
    region: "Americas",
    specialty: "Modern Plating",
  },
  {
    name: "Chef Francis",
    role: "International Member",
    blurb: "Known for curating immersive dining experiences worldwide.",
    img: "/images/cheffrancis.png",
    region: "Europe",
    specialty: "Fine Dining",
  },
  {
    name: "Chef Rommel",
    role: "International Member",
    blurb: "Dedicated to training and mentoring the next generation of chefs.",
    img: "/images/chefrommel.png",
    region: "Asia",
    specialty: "Mentorship",
  },
  {
    name: "Chef Kono",
    role: "International Member",
    blurb: "Blends global culinary heritage with modern techniques.",
    img: "/images/chefkono.png",
    region: "Oceania",
    specialty: "Fusion",
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

const regions = ["All", "Asia", "Europe", "Americas", "Oceania"] as const
type Region = (typeof regions)[number]

export default function ChefsPage() {
  const [selectedChef, setSelectedChef] = useState<(typeof chefs)[number] | null>(null)
  const [region, setRegion] = useState<Region>("All")

  const filtered = useMemo(() => {
    if (region === "All") return chefs
    return chefs.filter((c) => c.region === region)
  }, [region])

  const totalMembers = chefs.length

  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* HERO COVER (editorial) */}
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

        <div className="glass-panel glass-panel-pad glass-shine glass-glow relative overflow-hidden">
          {/* Cover image strip (cinematic placeholder) */}
          <div className="relative h-[180px] sm:h-[240px] lg:h-[280px] overflow-hidden rounded-2xl border border-white/10">
            {/* Use an existing image you already have; change if you want later */}
            <img
              src="/images/partnership.png"
              alt="Global Culinary Network"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute left-6 right-6 bottom-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Global Members • Editorial Directory
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                Our Chefs
              </h1>

              <p className="mt-3 text-neutral-300 max-w-3xl">
                Meet our culinary professionals worldwide — connected through recognition, collaboration, and modern gastronomy.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/about">
                  <Button className="glass-btn glass-shine">About Gastronomist</Button>
                </a>
                <a href="/press">
                  <Button className="glass-btn glass-btn-muted glass-shine">Press Release</Button>
                </a>
              </div>
            </div>
          </div>

          {/* KPI + Filter row */}
          <div className="mt-7 grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8">
              <Card className="p-5 sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">Member Dashboard</h2>
                    <p className="mt-1 text-sm text-neutral-400">
                      Browse chefs by region — presented in an editorial magazine format.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    Live Directory
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="text-xl font-semibold text-white">{totalMembers}</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Active Members</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="text-xl font-semibold text-white">Worldwide</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Coverage</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="text-xl font-semibold text-white">Recognition</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Standard</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                    <div className="text-xl font-semibold text-white">Modern</div>
                    <div className="mt-1 text-[11px] text-neutral-400">Gastronomy</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-5 sm:p-6">
                <div className="text-sm font-medium text-white">Filter by Region</div>
                <p className="mt-1 text-xs text-neutral-400">A quick editorial filter.</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {regions.map((r) => {
                    const active = region === r
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRegion(r)}
                        className={[
                          "px-4 py-2 rounded-2xl text-sm transition",
                          "border bg-white/[0.03]",
                          active
                            ? "border-white/25 bg-white/[0.06] text-white"
                            : "border-white/10 text-neutral-200 hover:border-white/20 hover:bg-white/[0.06]",
                        ].join(" ")}
                      >
                        {r}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-neutral-400">Showing</div>
                  <div className="mt-1 text-sm text-white">
                    {filtered.length} member{filtered.length === 1 ? "" : "s"}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID (cards + sidebar blocks) */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Main grid */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Featured Members</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Tap a chef card to open the editorial profile.
                </p>
              </div>
              <a href="/about" className="text-xs text-neutral-300 hover:text-white transition">
                Leadership & Ambassadors →
              </a>
            </div>

            <MotionSection
              className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {filtered.map((c) => (
                <MotionArticle
                  key={c.name}
                  variants={cardVariants}
                  className="glass-card glass-shine cursor-pointer"
                  onClick={() => setSelectedChef(c)}
                >
                  {/* Portrait */}
                  <div className="h-44 overflow-hidden border-b border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <img src={c.img} alt={c.name} className="h-full w-full object-contain" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-medium text-white truncate">{c.name}</h4>
                        <div className="mt-1 text-xs text-neutral-400">{c.role}</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-neutral-200">
                        {c.region}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-neutral-300 leading-relaxed line-clamp-3">
                      {c.blurb}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-neutral-400">
                        Specialty: <span className="text-neutral-200">{c.specialty}</span>
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

          {/* Editorial quote block */}
          <Card className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03]" />
              <div className="min-w-0">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  “A global culinary community where talent is visible, standards are elevated, and recognition carries real meaning.”
                </p>
                <div className="mt-4 text-sm font-medium text-white">Gastronomist International</div>
                <div className="mt-1 text-xs text-neutral-400">Member Directory Editorial</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Directory Notes</h3>
            <p className="mt-1 text-sm text-neutral-400">A magazine-style sidebar for context.</p>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Recognition</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Member profiles highlight commitment, craft, and international standards.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Collaboration</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Connect chefs and leaders worldwide through shared projects and opportunities.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <div className="text-sm font-medium text-white">Modern Gastronomy</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Techniques, innovation, and education — presented with a refined editorial feel.
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Continue Exploring</h3>
            <p className="mt-1 text-sm text-neutral-400">Editorial navigation blocks.</p>

            <div className="mt-5 space-y-3">
              <a
                href="/press"
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-white">Press Release</div>
                  <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                    →
                  </div>
                </div>
                <div className="mt-1 text-xs text-neutral-400">Official announcements & collaborations.</div>
              </a>

              <a
                href="/about"
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-white">About</div>
                  <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                    →
                  </div>
                </div>
                <div className="mt-1 text-xs text-neutral-400">Mission, vision, and ambassadors.</div>
              </a>

              <a
                href="/shop"
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-white">Shop</div>
                  <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                    →
                  </div>
                </div>
                <div className="mt-1 text-xs text-neutral-400">Membership & official items.</div>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/about">
                <Button className="glass-btn glass-shine">Leadership</Button>
              </a>
              <a href="/press">
                <Button className="glass-btn glass-btn-muted glass-shine">Read Press</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* MODAL (editorial profile) */}
      <AnimatePresence>
        {selectedChef && (
          <>
            <MotionDiv
              onClick={() => setSelectedChef(null)}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
                      Member Profile • {selectedChef.region}
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
                      {selectedChef.name}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-300">{selectedChef.role}</p>
                  </div>

                  <button
                    onClick={() => setSelectedChef(null)}
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
                      <div className="h-[320px] bg-white/[0.02] flex items-center justify-center">
                        <img
                          src={selectedChef.img}
                          alt={selectedChef.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="text-xs text-neutral-400">Editorial Summary</div>
                      <p className="mt-2 text-neutral-200 leading-relaxed">{selectedChef.blurb}</p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                          <div className="text-[11px] text-neutral-400">Region</div>
                          <div className="mt-1 text-sm text-white">{selectedChef.region}</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                          <div className="text-[11px] text-neutral-400">Specialty</div>
                          <div className="mt-1 text-sm text-white">{selectedChef.specialty}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href="/about">
                        <Button className="glass-btn glass-shine">About</Button>
                      </a>
                      <button onClick={() => setSelectedChef(null)}>
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
