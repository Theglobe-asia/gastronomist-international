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
      <section className="container py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Gastronomist International
          </h1>
          <p className="mt-4 text-neutral-300">
            We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.
            “Your Talent Deserves Global, that’s why We Are Here”
          </p>

          {/* ✅ Updated CTA Buttons */}
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.csfint.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>CSF Intl</Button>
            </a>
            <a href="/about">
              <Button className="bg-transparent border border-white/20 text-black">
                About Us
              </Button>
            </a>
          </div>
        </div>

        <div className="h-[420px] rounded-2xl overflow-hidden border border-white/10">
          <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <SlideCube />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
      </section>

      {/* ✅ Polished Cards Section */}
      <section className="container pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Medal */}
        <div className="group">
          <div className="h-48 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/medal.png"
              alt="Our Official Medal"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-medium text-white">Our Official Medal</h3>
          <p className="text-sm text-neutral-400">
            A symbol of excellence, representing achievement and dedication within Gastronomist International.
          </p>
        </div>

        {/* Card 2 - Recognition */}
        <div className="group">
          <div className="h-48 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/recognition.png"
              alt="Our Membership Recognition"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-medium text-white">Our Membership Recognition</h3>
          <p className="text-sm text-neutral-400">
            Honoring members with a badge of recognition, highlighting their commitment to global gastronomy.
          </p>
        </div>

        {/* Card 3 - Partnership */}
        <div className="group">
          <div className="h-48 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/images/partnership.png"
              alt="Leader’s Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-medium text-white">Leader’s Collaboration</h3>
          <p className="text-sm text-neutral-400">
            Building global bridges through collaboration with leaders, chefs, and innovators worldwide.
          </p>
        </div>
      </section>
    </div>
  )
}
