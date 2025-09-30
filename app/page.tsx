// @ts-nocheck
"use client"

import type {} from "@react-three/fiber"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Image as DreiImage } from "@react-three/drei"
import Button from "@/components/ui/Button"

// Floating logo image (uses /public/image/logo.png)
export function SlideCube({
  url = "/images/logo.png",
  scale = [2.2, 1.4, 1],
  position = [0, 0, 0],
}) {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
      <DreiImage
        url={url}
        scale={scale}
        position={position}
        transparent
        toneMapped={false}
      />
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
            We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques. “Your Talent Deserves Global, that’s why We Are Here”
          </p>
          <div className="mt-8 flex gap-3">
            <Button>Learn More</Button>
            <Button className="bg-transparent border border-white/20 text-white">Our Chefs</Button>
          </div>
        </div>

        <div className="h-[420px] rounded-2xl overflow-hidden border border-white/10">
          <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
            {/* Lights (Image is emissive due to toneMapped={false}, but lights are fine) */}
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* One or two layers for a subtle depth effect; the small Z offset avoids z-fighting */}
            <SlideCube />
            <SlideCube position={[0.04, 0.04, 0.02]} scale={[2.3, 1.5, 1]} />

            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
      </section>

      <section className="container pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
            <h3 className="mt-3 font-medium">Modern Cards {i}</h3>
            <p className="text-sm text-neutral-400">Media Writer theme section sample.</p>
          </div>
        ))}
      </section>
    </div>
  )
}
