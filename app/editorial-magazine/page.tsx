"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useLanguage } from "@/components/LanguageProvider"
import {
  getSortedEditorialMagazinePosts,
  type EditorialMagazineLanguage,
} from "@/components/editorial-magazine/posts"

const PAGE_COPY: Record<EditorialMagazineLanguage, Record<string, string>> = {
  en: {
    eyebrow: "Editorial Magazine",
    titlePrefix: "Stories That Shape",
    titleHighlight: "Modern Gastronomy",
    description:
      "A premium editorial space for culinary recognition, chef identity, professional stories, cultural voices, and the future of global gastronomy.",
    latestIssue: "Latest Editorial Feature",
    readFeature: "Read Feature",
    exploreAll: "Explore All Editorials",
    allStories: "Magazine Archive",
    allStoriesDescription:
      "Discover curated editorial features from Gastronomist International.",
    issueLabel: "Issue",
    readMore: "Read Editorial",
    featuredQuote: "Featured Thought",
    magazineNote:
      "Built for chefs, culinary leaders, hospitality professionals, educators, innovators, and cultural voices who deserve to be seen beyond the kitchen.",
  },
  ru: {
    eyebrow: "Редакционный журнал",
    titlePrefix: "Истории, формирующие",
    titleHighlight: "современную гастрономию",
    description:
      "Премиальное редакционное пространство для кулинарного признания, профессиональной идентичности шеф-поваров, культурных голосов и будущего мировой гастрономии.",
    latestIssue: "Новая редакционная публикация",
    readFeature: "Читать публикацию",
    exploreAll: "Смотреть все материалы",
    allStories: "Архив журнала",
    allStoriesDescription:
      "Откройте редакционные публикации Gastronomist International.",
    issueLabel: "Выпуск",
    readMore: "Читать материал",
    featuredQuote: "Главная мысль",
    magazineNote:
      "Создано для шеф-поваров, кулинарных лидеров, специалистов гостеприимства, преподавателей, новаторов и культурных голосов, которые заслуживают видимости за пределами кухни.",
  },
}

export default function EditorialMagazinePage() {
  const { language } = useLanguage()
  const editorialLanguage = language as EditorialMagazineLanguage
  const copy = PAGE_COPY[editorialLanguage] || PAGE_COPY.en

  const posts = useMemo(
    () => getSortedEditorialMagazinePosts(editorialLanguage),
    [editorialLanguage]
  )

  const latestPost = posts[0]
  const archivePosts = posts.slice(1)

  return (
    <main className="em-page">
      <section className="em-hero">
        <div className="em-hero-bg" aria-hidden />
        <div className="em-hero-orbit" aria-hidden />

        <div className="em-hero-copy">
          <span className="em-eyebrow">{copy.eyebrow}</span>

          <h1>
            {copy.titlePrefix} <span>{copy.titleHighlight}</span>
          </h1>

          <p>{copy.description}</p>

          <div className="em-hero-actions">
            {latestPost ? (
              <Link href={`/editorial-magazine/${latestPost.slug}`}>
                {copy.readFeature}
              </Link>
            ) : null}

            <a href="#editorial-archive">{copy.exploreAll}</a>
          </div>
        </div>

        {latestPost ? (
          <article className="em-cover-card">
            <div className="em-cover-glow" aria-hidden />

            <div className="em-cover-image">
              <img src={latestPost.banner} alt={latestPost.title} />
            </div>

            <div className="em-cover-content">
              <div className="em-cover-meta">
                <span>{copy.latestIssue}</span>
                <small>{latestPost.date}</small>
              </div>

              <h2>{latestPost.title}</h2>
              <p>{latestPost.description}</p>

              <div className="em-cover-details">
                <span>{latestPost.issue}</span>
                <span>{latestPost.category}</span>
                <span>{latestPost.readTime}</span>
              </div>

              {latestPost.featuredQuote ? (
                <blockquote>
                  <small>{copy.featuredQuote}</small>
                  “{latestPost.featuredQuote}”
                </blockquote>
              ) : null}

              <Link href={`/editorial-magazine/${latestPost.slug}`}>
                {copy.readFeature}
              </Link>
            </div>
          </article>
        ) : null}
      </section>

      <section className="em-note-panel">
        <div>
          <span className="em-eyebrow">{copy.issueLabel}</span>
          <h2>Gastronomist International Editorial</h2>
        </div>

        <p>{copy.magazineNote}</p>
      </section>

      <section id="editorial-archive" className="em-archive">
        <div className="em-section-head">
          <span className="em-eyebrow">{copy.allStories}</span>
          <h2>{copy.allStoriesDescription}</h2>
        </div>

        <div className="em-grid">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="em-story-card"
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            >
              <Link
                href={`/editorial-magazine/${post.slug}`}
                className="em-story-image"
                aria-label={`${copy.readMore}: ${post.title}`}
              >
                <img src={post.banner} alt={post.title} />
                <span>{post.issue}</span>
              </Link>

              <div className="em-story-content">
                <div className="em-story-meta">
                  <span>{post.category}</span>
                  <small>{post.readTime}</small>
                </div>

                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <div className="em-story-tags">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link href={`/editorial-magazine/${post.slug}`}>
                  {copy.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {archivePosts.length === 0 ? null : (
          <div className="em-archive-strip">
            {archivePosts.map((post) => (
              <Link key={post.slug} href={`/editorial-magazine/${post.slug}`}>
                <span>{post.issue}</span>
                <strong>{post.title}</strong>
              </Link>
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        .em-page {
          min-height: 100vh;
          overflow: hidden;
          color: #f7f0df;
        }

        .em-hero,
        .em-note-panel,
        .em-archive {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .em-hero {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
          gap: 34px;
          align-items: center;
          padding: 82px 0 54px;
        }

        .em-hero-bg {
          position: absolute;
          inset: -120px -16%;
          z-index: -3;
          background:
            radial-gradient(760px 420px at 16% 16%, rgba(217, 163, 49, 0.2), transparent 62%),
            radial-gradient(680px 380px at 88% 22%, rgba(255, 238, 177, 0.1), transparent 66%),
            radial-gradient(760px 420px at 50% 100%, rgba(217, 163, 49, 0.08), transparent 68%);
          pointer-events: none;
        }

        .em-hero-orbit {
          position: absolute;
          right: 8%;
          top: 50%;
          z-index: -2;
          width: min(640px, 72vw);
          aspect-ratio: 1;
          border-radius: 999px;
          border: 1px solid rgba(217, 163, 49, 0.12);
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.12), transparent 58%),
            conic-gradient(from 0deg, transparent, rgba(217, 163, 49, 0.18), transparent, rgba(255, 238, 177, 0.08), transparent);
          filter: blur(0.2px);
          transform: translateY(-50%);
          animation: emOrbit 22s linear infinite;
          pointer-events: none;
        }

        .em-hero-copy {
          position: relative;
          z-index: 2;
          animation: emSlideUp 0.9s ease both;
        }

        .em-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .em-hero-copy h1 {
          max-width: 760px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 6.4vw, 98px);
          font-weight: 500;
          line-height: 0.94;
          letter-spacing: -0.06em;
        }

        .em-hero-copy h1 span {
          display: block;
          color: #d9a331;
        }

        .em-hero-copy p {
          max-width: 650px;
          margin-top: 26px;
          color: rgba(247, 240, 223, 0.76);
          font-size: 16px;
          line-height: 1.78;
        }

        .em-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .em-hero-actions a,
        .em-cover-content > a,
        .em-story-content > a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border: 1px solid rgba(217, 163, 49, 0.46);
          border-radius: 999px;
          background: rgba(217, 163, 49, 0.1);
          color: #f4d98a;
          padding: 0 18px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease,
            box-shadow 0.24s ease;
        }

        .em-hero-actions a:first-child,
        .em-cover-content > a {
          background: linear-gradient(135deg, #d9a331, #f4d98a);
          color: #090909;
          border-color: rgba(244, 217, 138, 0.86);
        }

        .em-hero-actions a:hover,
        .em-cover-content > a:hover,
        .em-story-content > a:hover {
          transform: translateY(-3px);
          border-color: rgba(244, 217, 138, 0.9);
          box-shadow: 0 18px 42px rgba(217, 163, 49, 0.16);
        }

        .em-cover-card {
          position: relative;
          display: grid;
          grid-template-columns: 0.86fr 1fr;
          min-height: 620px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.32);
          border-radius: 34px;
          background:
            radial-gradient(680px 260px at 10% 0%, rgba(217, 163, 49, 0.15), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 40px 130px rgba(0, 0, 0, 0.55),
            0 0 74px rgba(217, 163, 49, 0.12);
          backdrop-filter: blur(18px);
          animation: emCoverIn 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .em-cover-glow {
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
          animation: emShine 5.8s ease-in-out infinite;
          pointer-events: none;
        }

        .em-cover-image {
          position: relative;
          min-height: 100%;
          overflow: hidden;
          border-right: 1px solid rgba(217, 163, 49, 0.22);
        }

        .em-cover-image::after,
        .em-story-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 36%, rgba(0, 0, 0, 0.58)),
            radial-gradient(circle at 50% 20%, transparent, rgba(0, 0, 0, 0.34));
          pointer-events: none;
        }

        .em-cover-image img,
        .em-story-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .em-cover-card:hover .em-cover-image img,
        .em-story-card:hover .em-story-image img {
          transform: scale(1.08);
        }

        .em-cover-content {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 38px;
        }

        .em-cover-meta,
        .em-story-meta,
        .em-cover-details {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }

        .em-cover-meta span,
        .em-story-meta span {
          color: #d9a331;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .em-cover-meta small,
        .em-story-meta small {
          color: rgba(247, 240, 223, 0.52);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .em-cover-content h2 {
          margin-top: 16px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -0.05em;
        }

        .em-cover-content p {
          margin-top: 18px;
          color: rgba(247, 240, 223, 0.74);
          line-height: 1.74;
        }

        .em-cover-details {
          margin-top: 22px;
        }

        .em-cover-details span,
        .em-story-tags span {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: rgba(247, 240, 223, 0.78);
          padding: 8px 10px;
          font-size: 11px;
          font-weight: 800;
        }

        .em-cover-content blockquote {
          position: relative;
          margin: 26px 0;
          border-left: 2px solid rgba(217, 163, 49, 0.68);
          padding: 6px 0 6px 18px;
          color: #f7f0df;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          line-height: 1.38;
        }

        .em-cover-content blockquote small {
          display: block;
          margin-bottom: 8px;
          color: #d9a331;
          font-family: inherit;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .em-note-panel {
          display: grid;
          grid-template-columns: 0.7fr 1fr;
          gap: 24px;
          align-items: center;
          margin-bottom: 52px;
          border: 1px solid rgba(217, 163, 49, 0.24);
          border-radius: 28px;
          padding: 28px;
          background:
            radial-gradient(620px 240px at 18% 0%, rgba(217, 163, 49, 0.12), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 26px 80px rgba(0, 0, 0, 0.38);
        }

        .em-note-panel h2,
        .em-section-head h2 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 3.6vw, 52px);
          font-weight: 500;
          line-height: 1.06;
          letter-spacing: -0.045em;
        }

        .em-note-panel p {
          color: rgba(247, 240, 223, 0.75);
          line-height: 1.72;
        }

        .em-archive {
          padding-bottom: 74px;
        }

        .em-section-head {
          max-width: 820px;
          margin-bottom: 28px;
        }

        .em-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .em-story-card {
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 26px;
          background:
            radial-gradient(520px 220px at 20% 0%, rgba(217, 163, 49, 0.11), transparent 62%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.016));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 26px 84px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(18px);
          opacity: 0;
          transform: translateY(22px);
          animation: emStoryIn 0.78s ease both;
          transition:
            transform 0.28s ease,
            border-color 0.28s ease,
            box-shadow 0.28s ease;
        }

        .em-story-card:hover {
          transform: translateY(-8px);
          border-color: rgba(244, 217, 138, 0.68);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 34px 110px rgba(0, 0, 0, 0.5),
            0 0 54px rgba(217, 163, 49, 0.12);
        }

        .em-story-image {
          position: relative;
          display: block;
          height: 260px;
          overflow: hidden;
          text-decoration: none;
        }

        .em-story-image span {
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

        .em-story-content {
          padding: 22px;
        }

        .em-story-content h3 {
          margin-top: 12px;
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 500;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .em-story-content p {
          margin-top: 12px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 14px;
          line-height: 1.68;
        }

        .em-story-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 18px 0;
        }

        .em-story-tags span {
          padding: 7px 9px;
          font-size: 10px;
        }

        .em-archive-strip {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .em-archive-strip a {
          display: grid;
          gap: 5px;
          border: 1px solid rgba(217, 163, 49, 0.2);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
          color: inherit;
          padding: 16px;
          text-decoration: none;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease;
        }

        .em-archive-strip a:hover {
          transform: translateY(-3px);
          border-color: rgba(244, 217, 138, 0.58);
          background: rgba(217, 163, 49, 0.08);
        }

        .em-archive-strip span {
          color: #d9a331;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .em-archive-strip strong {
          color: #fff;
          line-height: 1.35;
        }

        @keyframes emOrbit {
          from {
            transform: translateY(-50%) rotate(0deg);
          }

          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }

        @keyframes emSlideUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes emCoverIn {
          from {
            opacity: 0;
            transform: translateX(26px) rotateY(-8deg) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateX(0) rotateY(0) scale(1);
          }
        }

        @keyframes emStoryIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes emShine {
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
          .em-hero {
            grid-template-columns: 1fr;
          }

          .em-cover-card {
            grid-template-columns: 0.82fr 1fr;
          }

          .em-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .em-hero,
          .em-note-panel,
          .em-archive {
            width: min(100% - 24px, 1440px);
          }

          .em-hero {
            padding: 48px 0 34px;
          }

          .em-cover-card,
          .em-note-panel,
          .em-grid,
          .em-archive-strip {
            grid-template-columns: 1fr;
          }

          .em-cover-card {
            min-height: auto;
            border-radius: 26px;
          }

          .em-cover-image {
            min-height: 320px;
            border-right: none;
            border-bottom: 1px solid rgba(217, 163, 49, 0.22);
          }

          .em-cover-content {
            padding: 24px;
          }

          .em-story-image {
            height: 240px;
          }

          .em-note-panel {
            padding: 22px;
          }

          .em-hero-actions a,
          .em-cover-content > a,
          .em-story-content > a {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .em-hero-orbit,
          .em-cover-glow,
          .em-hero-copy,
          .em-cover-card,
          .em-story-card {
            animation: none !important;
          }

          .em-hero-actions a,
          .em-cover-content > a,
          .em-story-content > a,
          .em-story-card,
          .em-archive-strip a,
          .em-cover-image img,
          .em-story-image img {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
}