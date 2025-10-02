// app/about/page.tsx
export const metadata = {
  title: "About Us — Gastronomist International",
  description:
    "About Gastronomist International — community, mission, vision, and leadership.",
};

export default function AboutPage() {
  return (
    <main className="container py-16 space-y-14">
      {/* Title + intro */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Gastronomist International</span>
        </h1>
        <p className="text-neutral-300 max-w-3xl">
          We are a global culinary community focused on modern gastronomy, knowledge-sharing,
          and professional recognition. Our platform connects chefs, educators, creators,
          and industry partners to celebrate excellence and elevate standards worldwide.
        </p>
        <div className="h-px w-28 bg-yellow-500/60 rounded" />
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6">
          <h3 className="font-semibold text-white">Our Mission</h3>
          <p className="mt-2 text-neutral-300">
            To empower culinary professionals with community, recognition, and
            opportunities—while championing innovation and ethical practice.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6">
          <h3 className="font-semibold text-white">Our Vision</h3>
          <p className="mt-2 text-neutral-300">
            A modern, inclusive culinary ecosystem where talent thrives, ideas
            travel, and excellence is visible on a global stage.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Network",
              d: "Connect chefs, educators, creators, and brands through events, media, and community spaces.",
            },
            {
              t: "Recognize",
              d: "Showcase achievements, profiles, and milestones to elevate members’ careers.",
            },
            {
              t: "Educate",
              d: "Share methods, research, and industry standards around modern gastronomy.",
            },
          ].map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6"
            >
              <h3 className="font-semibold text-white">{i.t}</h3>
              <p className="mt-2 text-neutral-300">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Ambassadors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Leadership & Ambassadors</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Alexander Hardinan", role: "Founder", initials: "AH" },
            { name: "Alan Coxon", role: "Culinary Advisor", initials: "AC" },
            { name: "Global Ambassadors", role: "Regional Representatives", initials: "GA" },
          ].map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6 flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-300 font-semibold">
                {p.initials}
              </div>
              <div>
                <h4 className="text-white font-medium">{p.name}</h4>
                <p className="text-sm text-neutral-300">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Our Values</h2>
        <div className="flex flex-wrap gap-2">
          {["Integrity", "Excellence", "Innovation", "Community", "Diversity"].map((v) => (
            <span
              key={v}
              className="px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-200/90 bg-white/[0.02] text-sm"
            >
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-2">
        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                     bg-yellow-500 text-black hover:bg-yellow-400 transition border border-yellow-500/60"
        >
          Register Today
        </a>
      </section>
    </main>
  );
}
