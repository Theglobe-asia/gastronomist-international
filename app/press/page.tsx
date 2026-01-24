// app/press/page.tsx
"use client"

import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

// ✅ Typed wrappers for motion components (avoids TS className issues)
type H1Motion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"h1"> & MotionProps> &
    React.RefAttributes<HTMLHeadingElement>
>
const MotionH1 = motion.h1 as H1Motion

type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>
const MotionDiv = motion.div as DivMotion

const FACTS = [
  { label: "Category", value: "Strategic Collaboration" },
  { label: "Partners", value: "Gastronomist International × CSF International" },
  { label: "Focus", value: "Support chefs • Empower communities • Preserve artisan traditions" },
  { label: "Reach", value: "Worldwide" },
]

const STATS = [
  { label: "Global Members", value: "Worldwide" },
  { label: "Community", value: "Culinary Professionals" },
  { label: "Mission", value: "Support + Recognition" },
  { label: "Standard", value: "Excellence" },
]

const TIMELINE = [
  { t: "Announcement", d: "Gastronomist International confirms strategic collaboration with CSF International." },
  { t: "Shared Mission", d: "Supporting chefs, empowering communities in need, and preserving artisan traditions." },
  { t: "Sustainable Action", d: "Creating practical opportunities and meaningful assistance where it matters most." },
]

const RELATED = [
  { title: "Explore Our Chefs", href: "/chefs", desc: "Meet members representing Gastronomist International worldwide." },
  { title: "About Gastronomist", href: "/about", desc: "Our mission, vision, and leadership network." },
  { title: "Visit CSF Intl", href: "https://www.csfint.com/", desc: "Learn more about CSF International’s work and impact.", external: true },
]

export default function PressPage() {
  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* HERO COVER (editorial) */}
      <section className="relative">
        {/* Local bloom behind cover (makes glass read strong) */}
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
          {/* Cover image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/collab.png"
              alt="Gastronomist x CSF Intl Collaboration"
              className="h-full w-full object-cover"
            />
            {/* Editorial fade for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>

          {/* Cover text overlay */}
          <div className="mt-7 grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Official Announcement • Editorial Release
              </div>

              <MotionH1
                className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                Press Release
              </MotionH1>

              <MotionDiv
                className="mt-3 text-lg sm:text-xl text-neutral-300"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
              >
                <strong className="text-white">
                  Gastronomist International Announces Strategic Collaboration with CSF International
                </strong>
              </MotionDiv>

              <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
                Gastronomist International has officially partnered with CSF International in a shared mission to
                support chefs, empower communities in need, and preserve artisan traditions — presented through a modern
                editorial dashboard experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://www.csfint.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="glass-btn glass-shine">Visit CSF Intl</Button>
                </a>
                <a href="/about">
                  <Button className="glass-btn glass-btn-muted glass-shine">About Us</Button>
                </a>
              </div>
            </div>

            {/* Quick facts chip panel */}
            <div className="lg:col-span-4">
              <Card className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-white">Release Snapshot</div>
                  <div className="text-xs text-neutral-400">Magazine Notes</div>
                </div>

                <div className="mt-4 space-y-3">
                  {FACTS.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div className="text-[11px] text-neutral-400">{f.label}</div>
                      <div className="mt-1 text-sm text-white">{f.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID (article + sidebar) */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        {/* MAIN ARTICLE */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Editorial Story</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  A structured release — written like a magazine feature.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                Verified Release
              </div>
            </div>

            <div className="mt-6 space-y-5 text-neutral-300 leading-relaxed">
              <p>
                Gastronomist International has officially partnered with CSF International in a shared mission to support
                chefs, empower communities in need, and preserve artisan traditions.
              </p>

              <p>
                CSF International is widely recognized for its dedication to helping communities that have suffered loss
                of livelihood due to unforeseen circumstances. Together, this collaboration aims to create sustainable
                opportunities and provide meaningful assistance to those most affected.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs text-neutral-400">Core Intent</div>
                <div className="mt-2 text-white font-medium">
                  Recognition with purpose — collaboration that leads to real-world support.
                </div>
                <p className="mt-2 text-sm text-neutral-300">
                  This partnership aligns global culinary leadership with community-driven action — connecting influence
                  and talent to initiatives that improve lives.
                </p>
              </div>

              <p>
                To learn more about CSF International, please visit their profile featured on our Landing Page — and
                explore how this collaboration supports chefs and communities worldwide.
              </p>
            </div>
          </Card>

          {/* QUOTE / FEATURE BLOCK */}
          <Card className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.03]" />
              <div className="min-w-0">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  “This collaboration is designed to create sustainable opportunities and meaningful assistance —
                  with chefs, leaders, and communities moving forward together.”
                </p>
                <div className="mt-4 text-sm font-medium text-white">Gastronomist International</div>
                <div className="mt-1 text-xs text-neutral-400">Official Statement</div>
              </div>
            </div>
          </Card>

          {/* TIMELINE */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Release Timeline</h3>
            <p className="mt-1 text-sm text-neutral-400">A clean editorial breakdown of the announcement flow.</p>

            <div className="mt-6 space-y-3">
              {TIMELINE.map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <div className="text-sm font-medium text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-neutral-300">{x.d}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          {/* Stats / KPIs */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">At a Glance</h3>
            <p className="mt-1 text-sm text-neutral-400">Quick editorial metrics.</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <div className="text-sm font-semibold text-white">{s.value}</div>
                  <div className="mt-1 text-[11px] text-neutral-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Related */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Related</h3>
            <p className="mt-1 text-sm text-neutral-400">Continue exploring.</p>

            <div className="mt-5 space-y-3">
              {RELATED.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-white/20 hover:bg-white/[0.06] transition"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium text-white">{r.title}</div>
                    <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                      →
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-neutral-400">{r.desc}</div>
                </a>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Join the Network</h3>
            <p className="mt-1 text-sm text-neutral-400">
              Connect globally — recognition, collaboration, and community.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="/chefs">
                <Button className="glass-btn glass-shine">Explore Chefs</Button>
              </a>
              <a href="/about">
                <Button className="glass-btn glass-btn-muted glass-shine">Learn More</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
