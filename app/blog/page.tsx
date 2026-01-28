// app/blog/page.tsx
"use client"

import Link from "next/link"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { getSortedPosts } from "@/components/blog/posts"

export default function BlogIndexPage() {
  const posts = getSortedPosts()
  const featured = posts[0]
  const others = posts.slice(1)

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

      {/* Editorial header */}
      <section className="glass-panel glass-panel-pad glass-shine glass-glow">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              Editorial Magazine • Blog
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Gastronomist{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Journal
              </span>
            </h1>

            <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
              Membership welcomes, global culinary stories, and modern gastronomy features — presented in a refined editorial dashboard.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/">
                <Button className="glass-btn glass-btn-muted glass-shine">Back to Home</Button>
              </Link>
              <Link href="/chefs">
                <Button className="glass-btn glass-shine">Explore Chefs</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-6">
              <div className="text-sm font-medium text-white">Publishing</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-neutral-400">Posts</div>
                  <div className="mt-1 text-sm text-white">{posts.length}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-neutral-400">Reach</div>
                  <div className="mt-1 text-sm text-white">Worldwide</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured (always present) */}
      {featured && (
        <section className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <Card className="p-0 overflow-hidden">
              <div className="relative h-[240px] sm:h-[320px] lg:h-[380px] border-b border-white/10">
                <img
                  src={featured.banner}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-neutral-200">
                  <span className="h-2 w-2 rounded-full bg-yellow-400/90" />
                  Featured Story
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="text-xs text-neutral-400">{featured.date} • {featured.author}</div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                  {featured.title}
                </h2>
                <p className="mt-3 text-neutral-300 leading-relaxed max-w-3xl">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/blog/${featured.slug}`}>
                    <Button className="glass-btn glass-shine">Read Story</Button>
                  </Link>
                  <Link href="/about">
                    <Button className="glass-btn glass-btn-muted glass-shine">About Us</Button>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-white">What you’ll find</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                Membership welcomes, global profiles, modern technique stories, and editorial press-style releases.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  { k: "Editorial standard", v: "Magazine layout + glass panels" },
                  { k: "SEO-ready", v: "Meta, OG, Twitter, JSON-LD" },
                  { k: "Global reach", v: "Members worldwide" },
                ].map((i) => (
                  <div key={i.k} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="text-[11px] text-neutral-400">{i.k}</div>
                    <div className="mt-1 text-sm text-white">{i.v}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* More posts */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-12">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Latest Posts</h3>
                <p className="mt-1 text-sm text-neutral-400">All stories, sorted newest first.</p>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(others.length ? others : posts).map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition"
                >
                  <div className="h-40 border-b border-white/10 bg-white/[0.02] overflow-hidden">
                    <img src={p.banner} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-neutral-400">{p.date}</div>
                    <div className="mt-2 text-sm font-medium text-white">{p.title}</div>
                    <div className="mt-2 text-sm text-neutral-300 leading-relaxed line-clamp-3">
                      {p.description}
                    </div>
                    <div className="mt-4 text-white/50 group-hover:text-white/80 transition" aria-hidden>
                      Read →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
