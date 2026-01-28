// app/blog/welcoming-chef-noor/page.tsx
"use client"

import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Link from "next/link"

export default function BlogChefNoorPage() {
  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* Ambient editorial bloom */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(1100px 520px at 18% 14%, rgba(120,220,255,0.18), transparent 62%),
            radial-gradient(900px 480px at 86% 18%, rgba(255,255,255,0.10), transparent 70%),
            radial-gradient(900px 520px at 50% 110%, rgba(80,120,255,0.08), transparent 70%)
          `,
        }}
      />

      {/* HERO / COVER */}
      <section className="glass-panel glass-panel-pad glass-shine glass-glow overflow-hidden">
        <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/images/chef-noor.png"
            alt="Chef Noor — GCC Modern Gastronomy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="mt-7 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-yellow-400/90" />
              Official Membership Announcement
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Welcoming Chef Noor —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                A New Culinary Chapter from the GCC
              </span>
            </h1>

            <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
              Gastronomist International proudly welcomes Chef Noor as our newest member,
              representing the bold, evolving culinary identity of the Gulf Cooperation Council (GCC).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/chefs">
                <Button className="glass-btn glass-shine">Explore Our Chefs</Button>
              </Link>
              <Link href="/about">
                <Button className="glass-btn glass-btn-muted glass-shine">About Gastronomist</Button>
              </Link>
            </div>
          </div>

          {/* Snapshot */}
          <div className="lg:col-span-4">
            <Card className="p-6">
              <div className="text-sm font-medium text-white">Profile Snapshot</div>

              <div className="mt-4 space-y-3">
                {[
                  { label: "Region", value: "GCC — Middle East" },
                  { label: "Focus", value: "Modern Middle Eastern Gastronomy" },
                  { label: "Style", value: "Refined • Contemporary • Cultural" },
                  { label: "Status", value: "Official Member" },
                ].map((i) => (
                  <div
                    key={i.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="text-[11px] text-neutral-400">{i.label}</div>
                    <div className="mt-1 text-sm text-white">{i.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              The Rise of Modern GCC Gastronomy
            </h2>

            <div className="mt-4 space-y-5 text-neutral-300 leading-relaxed">
              <p>
                Over the past decade, the GCC has emerged as a powerful force in global gastronomy.
                Its culinary evolution reflects a seamless fusion of tradition and innovation —
                a philosophy embodied by Chef Noor.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <ul className="space-y-2 text-sm">
                  <li>• Respect for regional ingredients and flavors</li>
                  <li>• Contemporary reinterpretations of Middle Eastern cuisine</li>
                  <li>• Precision, balance, and modern technique</li>
                  <li>• A global culinary perspective grounded in authenticity</li>
                </ul>
              </div>

              <p>
                This approach positions Chef Noor among the new voices redefining how Middle Eastern
                gastronomy is perceived on the world stage.
              </p>
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              A Shared Vision with Gastronomist International
            </h2>

            <div className="mt-4 space-y-5 text-neutral-300 leading-relaxed">
              <p>
                At Gastronomist International, we exist to spotlight chefs who push boundaries while
                honoring identity. Chef Noor’s journey aligns naturally with our mission to:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Celebrate modern gastronomy worldwide</li>
                <li>Connect culinary talent across cultures</li>
                <li>Elevate regional voices to a global audience</li>
                <li>Build a trusted, international culinary community</li>
              </ul>

              <p>
                Chef Noor’s membership strengthens the GCC’s presence within our global chef network
                and reinforces the region’s growing influence in fine dining and contemporary cuisine.
              </p>
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Looking Ahead
            </h2>

            <p className="mt-4 text-neutral-300 leading-relaxed">
              This welcome marks the beginning of an exciting collaboration. As Chef Noor’s journey
              with Gastronomist International unfolds, we look forward to sharing their work,
              achievements, and creative vision with our global audience.
            </p>

            <p className="mt-4 text-neutral-300 leading-relaxed font-medium">
              Welcome to the international stage.
              <br />
              Welcome to Gastronomist International.
            </p>
          </Card>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Continue Reading</h3>

            <div className="mt-4 space-y-3">
              <Link
                href="/chefs"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition"
              >
                <div className="text-sm font-medium text-white">Our Chefs</div>
                <div className="text-xs text-neutral-400 mt-1">
                  Discover our international culinary members
                </div>
              </Link>

              <Link
                href="/press"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition"
              >
                <div className="text-sm font-medium text-white">Press Releases</div>
                <div className="text-xs text-neutral-400 mt-1">
                  Official announcements & editorials
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
