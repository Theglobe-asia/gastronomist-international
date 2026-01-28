// app/blog/page.tsx
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog | Gastronomist International",
  description:
    "Editorial stories, chef features, and global gastronomy insights from Gastronomist International.",
}

export default function BlogPage() {
  return (
    <main className="container py-16 space-y-10">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">Blog</h1>
        <p className="mt-3 text-neutral-300">
          Editorial features, chef welcomes, and stories shaping modern gastronomy worldwide.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/blog/welcoming-chef-noor"
          className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.06] transition"
        >
          <div className="relative h-48">
            <Image
              src="/images/chef-noor.png"
              alt="Welcoming Chef Noor"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-5">
            <div className="text-xs text-neutral-400">Editorial</div>
            <h2 className="mt-2 text-lg font-semibold text-white group-hover:underline">
              Welcoming Chef Noor — A New Culinary Chapter from the GCC
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              A new voice representing modern Gulf gastronomy joins Gastronomist International.
            </p>
          </div>
        </Link>
      </section>
    </main>
  )
}
