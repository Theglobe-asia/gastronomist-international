"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useParams } from "next/navigation"
import { useLanguage } from "@/components/LanguageProvider"
import {
  getEditorialMagazinePostBySlug,
  getSortedEditorialMagazinePosts,
  type EditorialMagazineLanguage,
} from "@/components/editorial-magazine/posts"

const PAGE_COPY: Record<EditorialMagazineLanguage, Record<string, string>> = {
  en: {
    backToMagazine: "Back to Editorial Magazine",
    articleLabel: "Editorial Feature",
    featuredThought: "Featured Thought",
    published: "Published",
    author: "Author",
    region: "Region",
    category: "Category",
    readTime: "Read Time",
    relatedTitle: "More From The Magazine",
    relatedDescription:
      "Continue exploring editorial features from Gastronomist International.",
    readNext: "Read Editorial",
    notFoundTitle: "Editorial Not Found",
    notFoundDescription:
      "The editorial feature you are looking for is unavailable or may have been moved.",
    returnToMagazine: "Return to Editorial Magazine",
  },
  ru: {
    backToMagazine: "Назад в редакционный журнал",
    articleLabel: "Редакционная публикация",
    featuredThought: "Главная мысль",
    published: "Опубликовано",
    author: "Автор",
    region: "Регион",
    category: "Категория",
    readTime: "Время чтения",
    relatedTitle: "Больше материалов журнала",
    relatedDescription:
      "Продолжайте знакомиться с редакционными публикациями Gastronomist International.",
    readNext: "Читать материал",
    notFoundTitle: "Публикация не найдена",
    notFoundDescription:
      "Редакционный материал, который вы ищете, недоступен или был перемещён.",
    returnToMagazine: "Вернуться в редакционный журнал",
  },
}

export default function EditorialMagazineArticlePage() {
  const params = useParams()
  const { language } = useLanguage()
  const editorialLanguage = language as EditorialMagazineLanguage
  const copy = PAGE_COPY[editorialLanguage] || PAGE_COPY.en

  const slug = typeof params?.slug === "string" ? params.slug : ""

  const post = useMemo(
    () => getEditorialMagazinePostBySlug(slug, editorialLanguage),
    [slug, editorialLanguage]
  )

  const relatedPosts = useMemo(() => {
    return getSortedEditorialMagazinePosts(editorialLanguage)
      .filter((item) => item.slug !== slug)
      .slice(0, 3)
  }, [slug, editorialLanguage])

  if (!post) {
    return (
      <main className="ema-page">
        <section className="ema-not-found">
          <span className="ema-eyebrow">{copy.articleLabel}</span>
          <h1>{copy.notFoundTitle}</h1>
          <p>{copy.notFoundDescription}</p>

          <Link href="/editorial-magazine">
            {copy.returnToMagazine}
          </Link>
        </section>

        <style jsx>{`
          .ema-page {
            min-height: 100vh;
            color: #f7f0df;
          }

          .ema-not-found {
            width: min(900px, calc(100% - 40px));
            margin: 0 auto;
            padding: 120px 0;
            text-align: center;
          }

          .ema-eyebrow {
            display: block;
            margin-bottom: 16px;
            color: #d9a331;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .ema-not-found h1 {
            color: #fff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(44px, 6vw, 82px);
            font-weight: 500;
            line-height: 0.98;
            letter-spacing: -0.055em;
          }

          .ema-not-found p {
            max-width: 620px;
            margin: 22px auto 0;
            color: rgba(247, 240, 223, 0.74);
            line-height: 1.72;
          }

          .ema-not-found a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 46px;
            margin-top: 28px;
            border: 1px solid rgba(217, 163, 49, 0.56);
            border-radius: 999px;
            background: linear-gradient(135deg, #d9a331, #f4d98a);
            color: #090909;
            padding: 0 18px;
            text-decoration: none;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
        `}</style>
      </main>
    )
  }

  return (
    <main className="ema-page">
      <section className="ema-hero">
        <div className="ema-hero-bg" aria-hidden />
        <div className="ema-hero-orbit" aria-hidden />

        <Link href="/editorial-magazine" className="ema-back-link">
          ← {copy.backToMagazine}
        </Link>

        <div className="ema-hero-grid">
          <div className="ema-hero-copy">
            <span className="ema-eyebrow">{copy.articleLabel}</span>

            <div className="ema-issue-row">
              <span>{post.issue}</span>
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </div>

            <h1>{post.title}</h1>

            <p className="ema-subtitle">{post.subtitle}</p>

            <div className="ema-meta-grid">
              <div>
                <small>{copy.published}</small>
                <strong>{post.date}</strong>
              </div>

              <div>
                <small>{copy.author}</small>
                <strong>{post.author}</strong>
              </div>

              <div>
                <small>{copy.region}</small>
                <strong>{post.region || "Global"}</strong>
              </div>

              <div>
                <small>{copy.category}</small>
                <strong>{post.category}</strong>
              </div>
            </div>
          </div>

          <div className="ema-cover-wrap">
            <div className="ema-cover-shine" aria-hidden />
            <img src={post.banner} alt={post.title} />
          </div>
        </div>
      </section>

      <section className="ema-article-shell">
        <aside className="ema-article-side">
          {post.featuredQuote ? (
            <blockquote>
              <small>{copy.featuredThought}</small>
              “{post.featuredQuote}”
            </blockquote>
          ) : null}

          <div className="ema-tag-panel">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>

        <article className="ema-article-body">
          {post.content.map((paragraph, index) => {
            const isLead = index === 0

            return (
              <p key={`${post.slug}-${index}`} className={isLead ? "is-lead" : ""}>
                {paragraph}
              </p>
            )
          })}
        </article>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="ema-related">
          <div className="ema-related-head">
            <span className="ema-eyebrow">{copy.relatedTitle}</span>
            <h2>{copy.relatedDescription}</h2>
          </div>

          <div className="ema-related-grid">
            {relatedPosts.map((item, index) => (
              <article
                className="ema-related-card"
                key={item.slug}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Link
                  href={`/editorial-magazine/${item.slug}`}
                  className="ema-related-image"
                  aria-label={`${copy.readNext}: ${item.title}`}
                >
                  <img src={item.banner} alt={item.title} />
                  <span>{item.issue}</span>
                </Link>

                <div className="ema-related-content">
                  <small>{item.category}</small>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link href={`/editorial-magazine/${item.slug}`}>
                    {copy.readNext}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <style jsx>{`
        .ema-page {
          min-height: 100vh;
          overflow: hidden;
          color: #f7f0df;
        }

        .ema-hero,
        .ema-article-shell,
        .ema-related {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ema-hero {
          position: relative;
          padding: 42px 0 56px;
        }

        .ema-hero-bg {
          position: absolute;
          inset: -120px -16%;
          z-index: -3;
          background:
            radial-gradient(760px 420px at 14% 18%, rgba(217, 163, 49, 0.2), transparent 62%),
            radial-gradient(680px 380px at 88% 22%, rgba(255, 238, 177, 0.1), transparent 66%),
            radial-gradient(760px 420px at 50% 100%, rgba(217, 163, 49, 0.08), transparent 68%);
          pointer-events: none;
        }

        .ema-hero-orbit {
          position: absolute;
          right: 4%;
          top: 54%;
          z-index: -2;
          width: min(760px, 82vw);
          aspect-ratio: 1;
          border-radius: 999px;
          border: 1px solid rgba(217, 163, 49, 0.12);
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.12), transparent 58%),
            conic-gradient(from 0deg, transparent, rgba(217, 163, 49, 0.18), transparent, rgba(255, 238, 177, 0.08), transparent);
          transform: translateY(-50%);
          animation: emaOrbit 22s linear infinite;
          pointer-events: none;
        }

        .ema-back-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          margin-bottom: 28px;
          border: 1px solid rgba(217, 163, 49, 0.3);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: #f4d98a;
          padding: 0 16px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease;
        }

        .ema-back-link:hover {
          transform: translateY(-2px);
          border-color: rgba(244, 217, 138, 0.82);
          background: rgba(217, 163, 49, 0.1);
        }

        .ema-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(420px, 0.78fr);
          gap: 34px;
          align-items: stretch;
        }

        .ema-hero-copy {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 680px;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 34px;
          padding: 42px;
          background:
            radial-gradient(760px 280px at 14% 0%, rgba(217, 163, 49, 0.14), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 34px 110px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(18px);
          animation: emaSlideUp 0.9s ease both;
        }

        .ema-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331