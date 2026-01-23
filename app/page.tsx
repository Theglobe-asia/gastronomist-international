// app/page.tsx
// @ts-nocheck
"use client"

import type {} from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Image } from "@react-three/drei"
import Button from "@/components/ui/Button"

function SlideCube() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
      <Image url="/images/logo.png" scale={[4.4, 2.8, 2]} transparent toneMapped={false} />
    </Float>
  )
}

export default function Page() {
  return (
    <div className="relative">
      {/* Editorial Glass Panel Hero */}
      <section className="container py-14 sm:py-16 lg:py-20">
        <div className="glass-panel glass-panel-pad glass-shine glass-glow">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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

              {/* Water-glass CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.csfint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="glass-btn glass-shine">
                    CSF Intl
                  </Button>
                </a>

                <a href="/about">
                  <Button className="glass-btn glass-btn-muted glass-shine">
                    About Us
                  </Button>
                </a>
              </div>

              {/* Editorial Meta */}
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

            {/* Glass Frame 3D */}
            <div className="glass-frame h-[420px] lg:h-[460px]">
              <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <SlideCube />
                <OrbitControls enablePan={false} />
              </Canvas>

              {/* subtle overlay gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Glass Cards */}
      <section className="container pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Highlights</h2>
            <p className="mt-1 text-sm text-neutral-400">
              Recognition, membership, and collaboration — presented as a modern dashboard.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-white/60" />
            Updated UI System: Water-Glass
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Medal */}
          <div className="glass-card glass-shine">
            <div className="h-48 overflow-hidden border-b border-white/10">
              <img
                src="/images/medal.png"
                alt="Our Official Medal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-white">Our Official Medal</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                A symbol of excellence, representing achievement and dedication within Gastronomist International.
              </p>
            </div>
          </div>

          {/* Card 2 - Recognition */}
          <div className="glass-card glass-shine">
            <div className="h-48 overflow-hidden border-b border-white/10">
              <img
                src="/images/recognition.png"
                alt="Our Membership Recognition"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-white">Our Membership Recognition</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Honoring members with a badge of recognition, highlighting their commitment to global gastronomy.
              </p>
            </div>
          </div>

          {/* Card 3 - Partnership */}
          <div className="glass-card glass-shine">
            <div className="h-48 overflow-hidden border-b border-white/10">
              <img
                src="/images/partnership.png"
                alt="Leader’s Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-white">Leader’s Collaboration</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Building global bridges through collaboration with leaders, chefs, and innovators worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
