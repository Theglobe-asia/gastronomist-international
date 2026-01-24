// app/press/page.tsx
"use client"

import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

// ✅ Typed wrappers
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

const GALLERY = [
  { src: "/images/medal.png", label: "Recognition" },
  { src: "/images/recognition.png", label: "Global Acknowledgment" },
  { src: "/images/partnership.png", label: "Strategic Partnership" },
]

const RELATED = [
  { title: "Explore Our Chefs", href: "/chefs", desc: "Meet members representing Gastronomist International worldwide." },
  { title: "About Gastronomist", href: "/about", desc: "Our mission, vision, and leadership network." },
  { title: "Visit CSF Intl", href: "https://www.csfint.com/", desc: "Learn more about CSF International’s work and impact.", external: true },
]

export default function PressPage() {
  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* HERO */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(1100px 460px at 18% 24%, rgba(120,220,255,0.26), transparent 60%),
              radial-gradient(900px 420px at 82% 22%, rgba(255,255,255,0.14), transparent 68%)
            `,
          }}
        />

        <div className="glass-panel glass-panel-pad glass-shine glass-glow">
          <div className="relative h-[240px] sm:h-[320px] overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/collab.png"
              alt="Gastronomist x CSF Intl Collaboration"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>

          <div className="mt-7 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                Official Announcement • Editorial Release
              </div>

              <MotionH1
                className="mt-5 text-4xl sm:text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Press Release
              </MotionH1>

              <MotionDiv
                className="mt-3 text-lg text-neutral-300"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <strong className="text-white">
                  Gastronomist International Announces Strategic Collaboration with CSF International
                </strong>
              </MotionDiv>
            </div>

            <div className="lg:col-span-4">
              <Card className="p-5">
                <div className="text-sm font-medium text-white">Release Snapshot</div>
                <div className="mt-4 space-y-3">
                  {FACTS.map((f) => (
                    <div key={f.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
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

      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          {/* ARTICLE */}
          <Card className="p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-white">Editorial Story</h2>
            <div className="mt-5 space-y-5 text-neutral-300 leading-relaxed">
              <p>
                Gastronomist International has officially partnered with CSF International in a shared mission
                to support chefs, empower communities in need, and preserve artisan traditions.
              </p>
              <p>
                This collaboration aligns global culinary leadership with community-driven action,
                connecting influence to initiatives that improve lives.
              </p>
            </div>
          </Card>

          {/* TIMELINE */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Release Timeline</h3>
            <div className="mt-5 space-y-3">
              {TIMELINE.map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <div className="text-sm font-medium text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-neutral-300">{x.d}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* 🔥 MAGAZINE IMAGE STRIP */}
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">In Focus</h3>
            <p className="mt-1 text-sm text-neutral-400">
              Recognition, partnership, and shared purpose.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {GALLERY.map((g) => (
                <div
                  key={g.src}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
                >
                  <div className="h-40 flex items-center justify-center p-4">
                    <img
                      src={g.src}
                      alt={g.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="px-4 py-3 text-xs text-neutral-300 text-center border-t border-white/10">
                    {g.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">At a Glance</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <div className="text-sm font-semibold text-white">{s.value}</div>
                  <div className="mt-1 text-[11px] text-neutral-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Related</h3>
            <div className="mt-5 space-y-3">
              {RELATED.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06]"
                >
                  <div className="text-sm font-medium text-white">{r.title}</div>
                  <div className="mt-1 text-xs text-neutral-400">{r.desc}</div>
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Join the Network</h3>
            <div className="mt-5 flex gap-3">
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
