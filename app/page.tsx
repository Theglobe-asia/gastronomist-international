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

const PARTNERS = ["CSF Intl", "Gastronomist", "Press", "Membership", "Collaboration"]

function WorldGraphMap() {
  const nodes = [
    { label: "France", x: 44, y: 30 },
    { label: "Azerbaijan", x: 58, y: 33 },
    { label: "Saudi Arabia", x: 60, y: 41 },
    { label: "Myanmar", x: 72, y: 42 },
  ]

  const hub = { label: "Global Network", x: 55, y: 36 }

  const toPt = (p: { x: number; y: number }) => ({
    X: (p.x / 100) * 1000,
    Y: (p.y / 100) * 520,
  })

  const hubPt = toPt(hub)

  const arcPath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    const a = toPt(from)
    const b = toPt(to)
    const mx = (a.X + b.X) / 2
    const my = (a.Y + b.Y) / 2
    const lift = Math.max(85, Math.min(190, Math.abs(a.X - b.X) * 0.22))
    const cx = mx
    const cy = my - lift
    return `M ${a.X} ${a.Y} Q ${cx} ${cy} ${b.X} ${b.Y}`
  }

  return (
    <Card className="p-6 sm:p-7 h-full">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Worldwide Members</h3>
          <p className="mt-1 text-sm text-neutral-400">
            Global membership presence visualized as a network graph.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          Live Map
        </div>
      </div>

      <div className="mt-6 relative">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(700px 360px at 22% 30%, rgba(120,220,255,0.20), transparent 60%),
                radial-gradient(640px 340px at 78% 34%, rgba(255,255,255,0.10), transparent 70%),
                radial-gradient(700px 420px at 55% 110%, rgba(80,120,255,0.08), transparent 75%)
              `,
            }}
          />

          {/* ZOOMED SVG:
              - viewBox is cropped to focus on the network area
              - height increased for readability
          */}
          <svg
            viewBox="120 50 760 420"
            className="relative z-10 block w-full h-[360px] sm:h-[420px]"
            role="img"
            aria-label="World membership graph map"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="gridFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="0.5" stopColor="rgba(120,220,255,0.10)" />
                <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
              </linearGradient>

              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="rgba(120,220,255,0.95)" />
                <stop offset="0.55" stopColor="rgba(120,220,255,0.42)" />
                <stop offset="1" stopColor="rgba(120,220,255,0)" />
              </radialGradient>

              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.85 0"
                />
              </filter>
            </defs>

            {/* slightly stronger grid */}
            {Array.from({ length: 9 }).map((_, i) => {
              const x = 170 + i * 85
              return (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1={80}
                  x2={x}
                  y2={470}
                  stroke="url(#gridFade)"
                  strokeWidth="1.2"
                  opacity="0.28"
                />
              )
            })}
            {Array.from({ length: 6 }).map((_, i) => {
              const y = 120 + i * 62
              return (
                <line
                  key={`h-${i}`}
                  x1={140}
                  y1={y}
                  x2={860}
                  y2={y}
                  stroke="url(#gridFade)"
                  strokeWidth="1.2"
                  opacity="0.25"
                />
              )
            })}

            {/* abstract silhouette */}
            <g opacity="0.24">
              <path
                d="M150,190 C210,140 290,140 340,185 C380,220 410,235 455,235 C520,235 560,190 610,185 C680,178 740,210 780,255 C815,295 805,345 765,365 C715,390 670,380 615,370 C560,360 525,372 470,388 C410,406 350,408 300,388 C250,368 215,350 180,318 C140,280 120,230 150,190 Z"
                fill="rgba(255,255,255,0.10)"
              />
              <path
                d="M720,120 C760,95 820,105 850,140 C875,170 875,215 850,240 C820,270 770,265 745,235 C725,210 700,160 720,120 Z"
                fill="rgba(120,220,255,0.08)"
              />
              <path
                d="M210,360 C250,335 305,340 330,370 C350,395 340,430 305,450 C270,468 230,460 210,430 C190,400 185,380 210,360 Z"
                fill="rgba(120,220,255,0.06)"
              />
            </g>

            {/* arcs */}
            <g>
              {nodes.map((n) => (
                <path
                  key={`arc-${n.label}`}
                  d={arcPath(hub, n)}
                  fill="none"
                  stroke="rgba(120,220,255,0.62)"
                  strokeWidth="3"
                  opacity="0.62"
                />
              ))}
              {nodes.map((n) => (
                <path
                  key={`arcGlow-${n.label}`}
                  d={arcPath(hub, n)}
                  fill="none"
                  stroke="rgba(120,220,255,0.35)"
                  strokeWidth="9"
                  opacity="0.20"
                  filter="url(#softGlow)"
                />
              ))}
            </g>

            {/* hub */}
            <g>
              <circle cx={hubPt.X} cy={hubPt.Y} r="30" fill="url(#nodeGlow)" opacity="0.92" />
              <circle cx={hubPt.X} cy={hubPt.Y} r="8" fill="rgba(255,255,255,0.92)" />
              <circle cx={hubPt.X} cy={hubPt.Y} r="14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
            </g>

            {/* nodes */}
            {nodes.map((n) => {
              const p = toPt(n)
              return (
                <g key={`node-${n.label}`}>
                  <circle cx={p.X} cy={p.Y} r="22" fill="url(#nodeGlow)" opacity="0.80" />
                  <circle cx={p.X} cy={p.Y} r="6.5" fill="rgba(255,255,255,0.92)" />
                  <circle cx={p.X} cy={p.Y} r="12" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="2" />
                </g>
              )
            })}

            {/* labels bigger */}
            <g fontSize="16" fill="rgba(255,255,255,0.82)">
              <text x={hubPt.X + 18} y={hubPt.Y - 18}>Global</text>
              {nodes.map((n) => {
                const p = toPt(n)
                const dx = p.X < hubPt.X ? -12 : 12
                const anchor = p.X < hubPt.X ? "end" : "start"
                return (
                  <text key={`label-${n.label}`} x={p.X + dx} y={p.Y - 20} textAnchor={anchor}>
                    {n.label}
                  </text>
                )
              })}
            </g>
          </svg>

          <div className="relative z-10 border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "rgba(120,220,255,0.85)" }} />
              Nodes = Regions • Lines = Connections
            </div>
            <div className="text-xs text-neutral-400">Worldwide Network</div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a href="/chefs">
          <Button className="glass-btn glass-shine">Explore Members</Button>
        </a>
        <a href="/about">
          <Button className="glass-btn glass-btn-muted glass-shine">Regional Leaders</Button>
        </a>
      </div>
    </Card>
  )
}

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

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8">
            <div className="glass-panel glass-panel-pad glass-shine glass-glow h-full">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                    Join Us
                  </div>

                  <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-white">
                    Gastronomist International
                  </h1>

                  <p className="mt-4 text-neutral-300 leading-relaxed">
                    We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.
                    “Your Talent Deserves Global, that’s why We Are Here”
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="https://www.csfint.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="glass-btn glass-shine">CSF Intl</Button>
                    </a>
                    <a href="/about">
                      <Button className="glass-btn glass-btn-muted glass-shine">About Us</Button>
                    </a>
                  </div>

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

                <div className="glass-frame h-[420px] lg:h-[460px] relative">
                  <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <SlideCube />
                    <OrbitControls enablePan={false} />
                  </Canvas>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />
                </div>
              </div>

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
          </div>

          <div className="lg:col-span-4">
            <WorldGraphMap />
          </div>
        </div>
      </section>

      <section className="container pb-10">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                What Can We Do For Your <span className="text-white/80">Needs</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                A modern global platform for recognition, collaboration, and culinary excellence.
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

          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Services</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    
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

      <section className="container pb-16">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Featured Highlights</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    Recognition, membership, and collaboration.
                  </p>
                </div>
                <a href="/press" className="text-xs text-neutral-300 hover:text-white transition">
                  View Press →
                </a>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
