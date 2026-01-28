// app/blog/page.tsx
"use client"

import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

export default function BlogPage() {
  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* Background bloom */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(1200px 520px at 18% 10%, rgba(120,220,255,0.16), transparent 62%),
            radial-gradient(900px 480px at 86% 16%, rgba(255,255,255,0.10), transparent 70%),
            radial-gradient(900px 520px at 50% 110%, rgba(80,120,255,0.08), transparent 70%)
          `,
        }}
      />

      {/* Header */}
      <section className="glass-panel glass-panel-pad glass-shine glass-glow">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              Editorial • Gastronomist International
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Blog{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Journal
              </span>
            </h1>

            <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
              Official editorials, chef welcomes, and international culinary stories from
              Gastronomist International.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="/">
                <Button className="glass-btn glass-btn-muted glass-shine">Back to Home</Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-5 sm:p-6">
              <div className="text-xs text-neutral-400">Latest Article</div>
              <div className="mt-2 text-sm text-white">
                Welcoming Chef Noor — GCC
              </div>
              <div className="mt-4 h-px bg-white/10" />
              <div className="mt-4 text-xs text-neutral-400">
                Editorial standard • Global visibility
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/blog/welcoming-chef-noor" className="group block">
          <Card className="p-0 overflow-hidden">
            <div className="relative h-44 border-b border-white/10">
              <img
                src="/images/chef-noor.png"
                alt="Welcoming Chef Noor"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <h2 className="text-base font-semibold text-white">
                Welcoming Chef Noor — A New Culinary Chapter from the GCC
              </h2>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                A new generation of Middle Eastern chefs joins the international stage.
              </p>

              <div className="mt-4 text-xs text-neutral-400">
                Read article →
              </div>
            </div>
          </Card>
        </a>
      </section>
    </main>
  )
}
