"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useLanguage } from "@/components/LanguageProvider"
import {
  getEditorialMagazinePostBySlug,
  getSortedEditorialMagazinePosts,
  type EditorialMagazineLanguage,
} from "@/components/editorial-magazine/posts"

type EditorialArticlePageProps = {
  params: {
    slug: string
  }
}

const ARTICLE_COPY: Record<EditorialMagazineLanguage, Record<string, string>> = {
  en: {
    backToMagazine: "Back to Editorial Magazine",
    editorialMagazine: "Editorial Magazine",
    featuredThought: "Featured Thought",
    writtenBy: "Written by",
    relatedTitle: "More from the Magazine",
    relatedDescription:
      "Continue exploring editorial features from Gastronomist International.",
    readNext: "Read Editorial",
    notFoundEyebrow: "Editorial Not Found",
    notFoundTitle: "This editorial feature is unavailable.",
    notFoundDescription:
      "The article may have been moved, renamed, or removed from the Editorial Magazine archive.",
    returnToMagazine: "Return to Magazine",
  },
  ru: {
    backToMagazine: "Назад в редакционный журнал",
    editorialMagazine: "Редакционный журнал",
    featuredThought: "Главная мысль",
    writtenBy: "Автор",
    relatedTitle: "Больше из журнала",
    relatedDescription:
      "Продолжайте читать редакционные публикации Gastronomist International.",
    readNext: "Читать материал",
    notFoundEyebrow: "Материал не найден",
    notFoundTitle: "Эта редакционная публикация недоступна.",
    notFoundDescription:
      "Материал мог быть перемещён, переименован или удалён из архива Editorial Magazine.",
    returnToMagazine: "Вернуться в журнал",
  },
}

export default function EditorialArticlePage({
  params,
}: EditorialArticlePageProps) {
  const { language } = useLanguage()
  const editorialLanguage = language as EditorialMagazineLanguage
  const copy = ARTICLE_COPY[editorialLanguage] || ARTICLE_COPY.en

  const post = useMemo(
    () => getEditorialMagazinePostBySlug(params.slug, editorialLanguage),
    [params.slug, editorialLanguage]
  )

  const relatedPosts = useMemo(
    () =>
      getSortedEditorialMagazinePosts(editorialLanguage)
        .filter((item) => item.slug !== params.slug)
        .slice(0, 2),
    [params.slug, editorialLanguage]
  )

  if (!post) {
    return (
      <main className="ema-page">
        <section className="ema-not-found">
          <span>{copy.notFoundEyebrow}</span>
          <h1>{copy.notFoundTitle}</h1>
          <p>{copy.notFoundDescription}</p>

          <Link href="/editorial-magazine">{copy.returnToMagazine}</Link>
        </section>

        <style jsx>{`
          .ema-page {
            min-height: 100vh;
            color: #f7f0df;
          }

          .ema-not-found {
            width: min(900px, calc(100% - 40px));
            min-height: 72vh;
            margin: 0 auto;
            display: grid;
            place-content: center;
            text-align: center;
          }

          .ema-not-found span {
            color: #d9a331;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .ema-not-found h1 {
            margin-top: 18px;
            color: #fff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(42px, 6vw, 82px);
            font-weight: 500;
            line-height: 0.98;
            letter-spacing: -0.06em;
          }

          .ema-not-found p {
            max-width: 620px;
            margin: 22px auto 0;
            color: rgba(247, 240, 223, 0.74);
            line-height: 1.75;
          }

          .ema-not-found a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            min-height: 46px;
            margin: 30px auto 0;
            border: 1px solid rgba(244, 217, 138, 0.82);
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
      <article className="ema-article">
        <section className="ema-hero">
          <div className="ema-hero-bg" aria-hidden />
          <div className="ema-hero-orbit" aria-hidden />

          <div className="ema-hero-copy">
            <Link href="/editorial-magazine" className="ema-back-link">
              ← {copy.backToMagazine}
            </Link>

            <div className="ema-meta-row">
              <span>{copy.editorialMagazine}</span>
              <small>{post.issue}</small>
              <small>{post.date}</small>
              <small>{post.readTime}</small>
            </div>

            <h1>{post.title}</h1>

            <p className="ema-subtitle">{post.subtitle}</p>

            <div className="ema-author-line">
              <span>{copy.writtenBy}</span>
              <strong>{post.author}</strong>
            </div>

            <div className="ema-tags">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="ema-cover">
            <div className="ema-cover-shine" aria-hidden />
            <img src={post.banner} alt={post.title} />
          </div>
        </section>

        <section className="ema-body-wrap">
          <aside className="ema-side-note">
            <span>{post.category}</span>

            {post.region ? <strong>{post.region}</strong> : null}

            {post.featuredQuote ? (
              <blockquote>
                <small>{copy.featuredThought}</small>
                “{post.featuredQuote}”
              </blockquote>
            ) : null}
          </aside>

          <div className="ema-content">
            <p className="ema-description">{post.description}</p>

            {post.content.map((paragraph, index) => (
              <p
                key={`${post.slug}-paragraph-${index}`}
                className={index === 0 ? "ema-lede" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="ema-related">
          <div className="ema-related-head">
            <span>{copy.relatedTitle}</span>
            <h2>{copy.relatedDescription}</h2>
          </div>

          <div className="ema-related-grid">
            {relatedPosts.map((relatedPost, index) => (
              <article
                key={relatedPost.slug}
                className="ema-related-card"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <Link
                  href={`/editorial-magazine/${relatedPost.slug}`}
                  className="ema-related-image"
                  aria-label={`${copy.readNext}: ${relatedPost.title}`}
                >
                  <img src={relatedPost.banner} alt={relatedPost.title} />
                  <span>{relatedPost.issue}</span>
                </Link>

                <div className="ema-related-copy">
                  <small>{relatedPost.category}</small>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.description}</p>

                  <Link href={`/editorial-magazine/${relatedPost.slug}`}>
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

        .ema-article,
        .ema-related {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .ema-hero {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
          gap: 34px;
          align-items: center;
          padding: 72px 0 52px;
        }

        .ema-hero-bg {
          position: absolute;
          inset: -140px -16%;
          z-index: -3;
          background:
            radial-gradient(760px 420px at 18% 16%, rgba(217, 163, 49, 0.2), transparent 62%),
            radial-gradient(720px 420px at 86% 20%, rgba(255, 238, 177, 0.1), transparent 68%),
            radial-gradient(820px 420px at 50% 100%, rgba(217, 163, 49, 0.08), transparent 70%);
          pointer-events: none;
        }

        .ema-hero-orbit {
          position: absolute;
          right: 7%;
          top: 52%;
          z-index: -2;
          width: min(640px, 72vw);
          aspect-ratio: 1;
          border-radius: 999px;
          border: 1px solid rgba(217, 163, 49, 0.12);
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.12), transparent 58%),
            conic-gradient(from 0deg, transparent, rgba(217, 163, 49, 0.18), transparent, rgba(255, 238, 177, 0.08), transparent);
          transform: translateY(-50%);
          animation: emaOrbit 24s linear infinite;
          pointer-events: none;
        }

        .ema-hero-copy {
          position: relative;
          z-index: 3;
          animation: emaSlideUp 0.88s ease both;
        }

        .ema-back-link {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          margin-bottom: 26px;
          color: #f4d98a;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.24s ease,
            color 0.24s ease;
        }

        .ema-back-link:hover {
          transform: translateX(-4px);
          color: #fff0ad;
        }

        .ema-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .ema-meta-row span {
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ema-meta-row small {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: rgba(247, 240, 223, 0.7);
          padding: 7px 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .ema-hero h1 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 6.2vw, 92px);
          font-weight: 500;
          line-height: 0.94;
          letter-spacing: -0.06em;
        }

        .ema-subtitle {
          max-width: 760px;
          margin-top: 26px;
          color: rgba(247, 240, 223, 0.78);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(22px, 2.4vw, 34px);
          line-height: 1.28;
        }

        .ema-author-line {
          display: grid;
          gap: 4px;
          margin-top: 26px;
        }

        .ema-author-line span {
          color: rgba(247, 240, 223, 0.48);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ema-author-line strong {
          color: #d9a331;
          font-size: 14px;
        }

        .ema-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .ema-tags span {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: rgba(247, 240, 223, 0.76);
          padding: 8px 10px;
          font-size: 11px;
          font-weight: 800;
        }

        .ema-cover {
          position: relative;
          min-height: 620px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 34px;
          background:
            radial-gradient(720px 260px at 16% 0%, rgba(217, 163, 49, 0.14), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 40px 130px rgba(0, 0, 0, 0.55),
            0 0 74px rgba(217, 163, 49, 0.12);
          animation: emaCoverIn 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .ema-cover::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.55)),
            radial-gradient(circle at 50% 20%, transparent, rgba(0, 0, 0, 0.3));
          pointer-events: none;
        }

        .ema-cover img {
          width: 100%;
          height: 100%;
          min-height: 620px;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ema-cover:hover img {
          transform: scale(1.08);
        }

        .ema-cover-shine {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(
            120deg,
            transparent 8%,
            rgba(255, 238, 177, 0.16) 42%,
            transparent 72%
          );
          opacity: 0;
          transform: translateX(-100%);
          animation: emaShine 5.8s ease-in-out infinite;
          pointer-events: none;
        }

        .ema-body-wrap {
          display: grid;
          grid-template-columns: minmax(260px, 0.35fr) minmax(0, 0.65fr);
          gap: 34px;
          align-items: start;
          padding: 10px 0 72px;
        }

        .ema-side-note {
          position: sticky;
          top: 94px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 26px;
          padding: 24px;
          background:
            radial-gradient(520px 220px at 20% 0%, rgba(217, 163, 49, 0.13), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.052), rgba(255, 255, 255, 0.016));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 26px 84px rgba(0, 0, 0, 0.36);
          backdrop-filter: blur(18px);
        }

        .ema-side-note > span {
          display: block;
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ema-side-note > strong {
          display: block;
          margin-top: 8px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .ema-side-note blockquote {
          margin-top: 24px;
          border-left: 2px solid rgba(217, 163, 49, 0.68);
          padding-left: 18px;
          color: rgba(247, 240, 223, 0.92);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          line-height: 1.38;
        }

        .ema-side-note blockquote small {
          display: block;
          margin-bottom: 10px;
          color: #d9a331;
          font-family: inherit;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .ema-content {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 30px;
          padding: clamp(24px, 5vw, 58px);
          background:
            radial-gradient(680px 260px at 12% 0%, rgba(217, 163, 49, 0.09), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.014));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 30px 100px rgba(0, 0, 0, 0.38);
        }

        .ema-content p {
          color: rgba(247, 240, 223, 0.78);
          font-size: 17px;
          line-height: 1.86;
        }

        .ema-content p + p {
          margin-top: 22px;
        }

        .ema-content .ema-description {
          color: #f7f0df;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(24px, 3vw, 36px);
          line-height: 1.35;
          letter-spacing: -0.035em;
        }

        .ema-lede::first-letter {
          float: left;
          padding: 8px 10px 0 0;
          color: #d9a331;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 72px;
          line-height: 0.82;
        }

        .ema-related {
          padding-bottom: 78px;
        }

        .ema-related-head {
          max-width: 820px;
          margin-bottom: 26px;
        }

        .ema-related-head span {
          display: block;
          margin-bottom: 14px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ema-related-head h2 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .ema-related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .ema-related-card {
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 26px;
          background:
            radial-gradient(520px 220px at 20% 0%, rgba(217, 163, 49, 0.11), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.016));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 26px 84px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: translateY(22px);
          animation: emaRelatedIn 0.78s ease both;
          transition:
            transform 0.28s ease,
            border-color 0.28s ease,
            box-shadow 0.28s ease;
        }

        .ema-related-card:hover {
          transform: translateY(-8px);
          border-color: rgba(244, 217, 138, 0.68);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 34px 110px rgba(0, 0, 0, 0.5),
            0 0 54px rgba(217, 163, 49, 0.12);
        }

        .ema-related-image {
          position: relative;
          display: block;
          height: 280px;
          overflow: hidden;
          text-decoration: none;
        }

        .ema-related-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 38%, rgba(0, 0, 0, 0.6)),
            radial-gradient(circle at 50% 20%, transparent, rgba(0, 0, 0, 0.32));
        }

        .ema-related-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ema-related-card:hover .ema-related-image img {
          transform: scale(1.08);
        }

        .ema-related-image span {
          position: absolute;
          left: 16px;
          bottom: 16px;
          z-index: 2;
          border: 1px solid rgba(244, 217, 138, 0.5);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.54);
          color: #f4d98a;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
        }

        .ema-related-copy {
          padding: 24px;
        }

        .ema-related-copy small {
          color: #d9a331;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ema-related-copy h3 {
          margin-top: 12px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          font-weight: 500;
          line-height: 1.06;
          letter-spacing: -0.045em;
        }

        .ema-related-copy p {
          margin-top: 12px;
          color: rgba(247, 240, 223, 0.72);
          line-height: 1.68;
        }

        .ema-related-copy a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          margin-top: 20px;
          border: 1px solid rgba(217, 163, 49, 0.46);
          border-radius: 999px;
          background: rgba(217, 163, 49, 0.1);
          color: #f4d98a;
          padding: 0 16px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease;
        }

        .ema-related-copy a:hover {
          transform: translateY(-3px);
          border-color: rgba(244, 217, 138, 0.9);
          background: rgba(217, 163, 49, 0.16);
        }

        @keyframes emaOrbit {
          from {
            transform: translateY(-50%) rotate(0deg);
          }

          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }

        @keyframes emaSlideUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes emaCoverIn {
          from {
            opacity: 0;
            transform: translateX(26px) rotateY(-8deg) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateX(0) rotateY(0) scale(1);
          }
        }

        @keyframes emaRelatedIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes emaShine {
          0%,
          32% {
            opacity: 0;
            transform: translateX(-100%);
          }

          46% {
            opacity: 1;
          }

          66%,
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        @media (max-width: 1180px) {
          .ema-hero,
          .ema-body-wrap {
            grid-template-columns: 1fr;
          }

          .ema-side-note {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 760px) {
          .ema-article,
          .ema-related {
            width: min(100% - 24px, 1440px);
          }

          .ema-hero {
            padding: 48px 0 34px;
          }

          .ema-cover {
            min-height: 360px;
            border-radius: 26px;
          }

          .ema-cover img {
            min-height: 360px;
          }

          .ema-body-wrap {
            padding-bottom: 52px;
          }

          .ema-content,
          .ema-side-note {
            border-radius: 24px;
          }

          .ema-related-grid {
            grid-template-columns: 1fr;
          }

          .ema-related-image {
            height: 240px;
          }

          .ema-related-copy a {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ema-hero-orbit,
          .ema-hero-copy,
          .ema-cover,
          .ema-cover-shine,
          .ema-related-card {
            animation: none !important;
          }

          .ema-back-link,
          .ema-cover img,
          .ema-related-card,
          .ema-related-image img,
          .ema-related-copy a {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
}