// app/blog/welcoming-chef-noor/page.tsx
import Image from "next/image"

export default function PostPage() {
  return (
    <main className="container py-16 space-y-12 max-w-4xl">
      {/* Banner */}
      <div className="relative h-[320px] rounded-2xl overflow-hidden border border-white/10">
        <Image
          src="/images/chef-noor.png"
          alt="Chef Noor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Article */}
      <article className="space-y-6 text-neutral-300 leading-relaxed">
        <header className="space-y-3">
          <div className="text-xs uppercase tracking-widest text-neutral-400">
            Editorial Feature
          </div>
          <h1 className="text-4xl font-bold text-white">
            Welcoming Chef Noor — A New Culinary Chapter from the GCC
          </h1>
        </header>

        <p>
          Gastronomist International proudly welcomes Chef Noor as our newest member,
          representing the bold, evolving culinary identity of the Gulf Cooperation Council (GCC).
        </p>

        <p>
          Chef Noor joins our international network as a symbol of a new generation of Middle
          Eastern chefs — refined, forward-thinking, and deeply rooted in cultural heritage.
        </p>

        <h2 className="text-2xl font-semibold text-white pt-6">
          The Rise of Modern GCC Gastronomy
        </h2>

        <p>
          Over the past decade, the GCC has emerged as a powerful force in global gastronomy.
          Its culinary evolution reflects a seamless fusion of tradition and innovation —
          a philosophy embodied by Chef Noor.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Respect for regional ingredients and flavors</li>
          <li>Contemporary reinterpretations of Middle Eastern cuisine</li>
          <li>Precision, balance, and modern technique</li>
          <li>A global culinary perspective grounded in authenticity</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white pt-6">
          A Shared Vision with Gastronomist International
        </h2>

        <p>
          Chef Noor’s membership strengthens the GCC’s presence within our global chef network
          and reinforces the region’s growing influence in fine dining and contemporary cuisine.
        </p>

        <p className="font-medium text-white">
          Welcome to the international stage.
          <br />
          Welcome to Gastronomist International.
        </p>
      </article>
    </main>
  )
}
