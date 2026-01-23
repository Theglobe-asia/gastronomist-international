// app/page.tsx
// @ts-nocheck
"use client"

import type {} from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Image } from "@react-three/drei"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

function SlideCube() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
      <Image url="/images/logo.png" scale={[4.4, 2.8, 2]} transparent toneMapped={false} />
    </Float>
  )
}

const KPIS = [
  { label: "Projects Completed", value: "100+" },
  { label: "Reviews Given", value: "100+" },
  { label: "Happy Clients", value: "100+" },
  { label: "Experience", value: "10+" },
]

const SERVICES = [
  {
    title: "Global Culinary Network",
    desc: "Connect members, chefs, and leaders worldwide.",
    icon: "/images/recognition.png",
  },
  {
    title: "Membership Recognition",
    desc: "Badges, medals, and official recognition.",
    icon: "/images/medal.png",
  },
  {
    title: "Leader’s Collaboration",
    desc: "Build bridges with partners and innovators.",
    icon: "/images/partnership.png",
  },
]

const PARTNERS = [
  "CSF Intl",
  "Gastronomist",
  "Press",
  "Membership",
  "Collaboration",
]

export default function Page() {
  return (
    <div className="relative">
      {/* Dashboard hero row */}
      <section className="container py-14 sm:py-16 lg:py-20 relative">
        {/* Hero-local bloom (needed for glass depth) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(1100px 520px at 18% 16%, rgba(120,220,255,0.34), transparent 62%),
              radial-gradient(900px 460px at 82% 22%, rgba(255,255,255,0.16), transparent 68%),
              radial-gradient(900px 520px at 50% 110%, rgba(80,120,255,0.10), transparent 70%)
            `,
          }}
        />

        {/* Main hero panel */}
        <div className="glass-panel glass-panel-pad glass-shine glass-glow">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: editorial stack */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Modern Editorial Landing • Dashboard Panel
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-white">
                Gastronomist International
              </h1>

              <p className="mt-4 text-neutral-300 leading-relaxed">
                We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.
                “Your Talent Deserves Global, that’s why We Are Here”
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://www.csfint.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="glass-btn glass-shine">CSF Intl</Button>
                </a>
                <a href="/about">
                  <Button className="glass-btn glass-btn-muted glass-shine">About Us</Button>
                </a>
              </div>

              {/* Mini KPI chips (hero) */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-xs text-neutral-400">Focus</div>
                  <div className="mt-1 text-sm text-white">Modern Gastronomy</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-xs text-neutral-400">Community</div>
                  <div className="mt-1 text-sm text-white">Global Talent</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-xs text-neutral-400">Standard</div>
                  <div className="mt-1 text-sm text-white">Excellence</div>
                </div>
              </div>
            </div>

            {/* Right: 3D frame */}
            <div className="glass-frame h-[420px] lg:h-[460px] relative">
              <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <SlideCube />
                <OrbitControls enablePan={false} />
              </Canvas>

              {/* overlay gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />
            </div>
          </div>

          {/* Partner/logo strip (dashboard panel inside hero) */}
          <div className="mt-10">
            <Card className="p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3">
                {PARTNERS.map((p) => (
                  <div
                    key={p}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-neutral-200"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard grid section: Needs + Services (reference-style columns) */}
      <section className="container pb-10">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: Needs + KPI grid */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                What Can We Do For Your <span className="text-white/80">Needs</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                A modern global platform for recognition, collaboration, and culinary excellence — presented as a dashboard landing experience.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {KPIS.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <div className="text-xl sm:text-2xl font-semibold text-white">{k.value}</div>
                    <div className="mt-1 text-xs text-neutral-400">{k.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Service list panel */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Services</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Dashboard-style quick access modules.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  Live Modules
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {SERVICES.map((s) => (
                  <div
                    key={s.title}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/20 hover:bg-white/[0.05] transition"
                  >
                    <div className="h-11 w-11 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                      <img src={s.icon} alt={s.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-white">{s.title}</div>
                      <div className="mt-0.5 text-xs text-neutral-400 truncate">{s.desc}</div>
                    </div>

                    <div className="text-white/50 group-hover:text-white/80 transition" aria-hidden>
                      →
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Secondary dashboard row (portfolio + testimonial) */}
      <section className="container pb-16">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Portfolio / Projects */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Featured Highlights</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Recognition, membership, and collaboration — presented as a modern dashboard.
                  </p>
                </div>
                <a href="/press" className="text-xs text-neutral-300 hover:text-white transition">
                  View Press →
                </a>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Medal */}
                <div className="glass-card glass-shine">
                  <div className="h-40 overflow-hidden border-b border-white/10">
                    <img src="/images/medal.png" alt="Our Official Medal" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-white">Our Official Medal</h4>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      A symbol of excellence, representing achievement and dedication within Gastronomist International.
                    </p>
                  </div>
                </div>

                {/* Recognition */}
                <div className="glass-card glass-shine">
                  <div className="h-40 overflow-hidden border-b border-white/10">
                    <img src="/images/recognition.png" alt="Our Membership Recognition" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-white">Our Membership Recognition</h4>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      Honoring members with a badge of recognition, highlighting their commitment to global gastronomy.
                    </p>
                  </div>
                </div>

                {/* Partnership */}
                <div className="glass-card glass-shine">
                  <div className="h-40 overflow-hidden border-b border-white/10">
                    <img src="/images/partnership.png" alt="Leader’s Collaboration" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-white">Leader’s Collaboration</h4>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                      Building global bridges through collaboration with leaders, chefs, and innovators worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Testimonial / Quote panel */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Member Spotlight</h3>
              <p className="mt-1 text-sm text-neutral-400">
                A dashboard-style testimonial block.
              </p>

              <div className="mt-6 flex items-start gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]" />
                <div className="min-w-0">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    “Gastronomist International creates a refined global platform where culinary professionals can be recognized and connected with real purpose.”
                  </p>
                  <div className="mt-4 text-sm font-medium text-white">Gastronomist Member</div>
                  <div className="mt-1 text-xs text-neutral-400">Global Culinary Community</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/chefs">
                  <Button className="glass-btn glass-shine">Explore Chefs</Button>
                </a>
                <a href="/about">
                  <Button className="glass-btn glass-btn-muted glass-shine">Learn More</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
