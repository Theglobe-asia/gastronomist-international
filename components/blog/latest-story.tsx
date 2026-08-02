// components/blog/latest-story.tsx
"use client"

import Link from "next/link"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { getLatestPost } from "@/components/blog/posts"
import { useLanguage } from "@/components/LanguageProvider"

const latestStoryCopy = {
  en: {
    featuredStory: "Featured Story",
    latestFromJournal: "Latest from the Journal",
    new: "New",
    quickLinks: "Quick links",
    readStory: "Read Story",
    viewBlog: "View Blog",
  },
  ru: {
    featuredStory: "Избранная история",
    latestFromJournal: "Последнее из журнала",
    new: "Новое",
    quickLinks: "Быстрые ссылки",
    readStory: "Читать историю",
    viewBlog: "Смотреть блог",
  },
}

export default function LatestStory() {
  const { language } = useLanguage()
  const latest = getLatestPost(language)
  const copy = latestStoryCopy[language]

  if (!latest) return null

  return (
    <section className="container pb-16">
      <Card className="p-6 sm:p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-neutral-400">
              {copy.featuredStory}
            </div>

            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">
              {copy.latestFromJournal}
            </h3>

            <p className="mt-2 text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {latest.description}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-yellow-400/90" />
            {copy.new}
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <div className="relative mx-auto w-full max-w-[680px] overflow-hidden aspect-[4/3] bg-neutral-950">
                <img
                  src={latest.banner}
                  alt={latest.title}
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <div className="text-xs text-neutral-400">{latest.date}</div>

                <div className="mt-2 text-base font-medium text-white">
                  {latest.title}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs text-neutral-400">
                {copy.quickLinks}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link href={`/blog/${latest.slug}`}>
                  <Button className="glass-btn glass-shine">
                    {copy.readStory}
                  </Button>
                </Link>

                <Link href="/blog">
                  <Button className="glass-btn glass-btn-muted glass-shine">
                    {copy.viewBlog}
                  </Button>
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {latest.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}