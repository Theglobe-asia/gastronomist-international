// app/blog/page.tsx
"use client"

import Link from "next/link"
import { getSortedPosts } from "@/components/blog/posts"
import { useLanguage } from "@/components/LanguageProvider"

const blogIndexCopy = {
  en: {
    heroEyebrow: "Editorial Magazine • Global Culinary Stories",
    heroTitle: "Gastronomist",
    heroAccent: "Journal",
    heroDescription:
      "Membership welcomes, chef stories, international culinary recognition, and modern gastronomy features presented in a refined global editorial format.",
    backHome: "Back to Home",
    exploreChefs: "Explore Chefs",
    publishing: "Publishing",
    publishedPosts: "Published Posts",
    worldwide: "Worldwide",
    editorialReach: "Editorial Reach",
    featuredStory: "Featured Story",
    readStory: "Read Story",
    aboutUs: "About Us",
    latestPosts: "Latest Posts",
    latestTitle: "Stories from the global culinary community.",
    latestDescription: "All stories, sorted newest first.",
    read: "Read →",
    whatYouWillFind: "What You’ll Find",
    sidebarTitle: "Editorial recognition with global reach.",
    sidebarDescription:
      "Follow stories about chefs, international features, modern gastronomy, member recognition, and official editorial updates.",
    editorialStandard: "Editorial Standard",
    editorialStandardText: "Magazine-style publishing",
    globalStories: "Global Stories",
    globalStoriesText: "Chefs and members worldwide",
    recognition: "Recognition",
    recognitionText: "Professional culinary visibility",
  },
  ru: {
    heroEyebrow: "Редакционный журнал • мировые кулинарные истории",
    heroTitle: "Gastronomist",
    heroAccent: "Журнал",
    heroDescription:
      "Приветствия новых членов, истории шеф-поваров, международное кулинарное признание и материалы о современной гастрономии в изысканном глобальном редакционном формате.",
    backHome: "Назад на главную",
    exploreChefs: "Наши шеф-повара",
    publishing: "Публикации",
    publishedPosts: "Опубликованные материалы",
    worldwide: "Весь мир",
    editorialReach: "Редакционный охват",
    featuredStory: "Избранная история",
    readStory: "Читать историю",
    aboutUs: "О нас",
    latestPosts: "Последние публикации",
    latestTitle: "Истории мирового кулинарного сообщества.",
    latestDescription: "Все материалы отсортированы от новых к старым.",
    read: "Читать →",
    whatYouWillFind: "Что вы найдёте",
    sidebarTitle: "Редакционное признание с мировым охватом.",
    sidebarDescription:
      "Следите за историями о шеф-поварах, международными материалами, современной гастрономией, признанием членов сообщества и официальными редакционными обновлениями.",
    editorialStandard: "Редакционный стандарт",
    editorialStandardText: "Публикации в журнальном стиле",
    globalStories: "Мировые истории",
    globalStoriesText: "Шеф-повара и участники по всему миру",
    recognition: "Признание",
    recognitionText: "Профессиональная кулинарная видимость",
  },
}

export default function BlogIndexPage() {
  const { language } = useLanguage()
  const copy = blogIndexCopy[language]
  const posts = getSortedPosts(language)
  const featured = posts[0]
  const others = posts.slice(1)

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-copy">
          <span className="blog-eyebrow">{copy.heroEyebrow}</span>
          <h1>
            {copy.heroTitle} <span>{copy.heroAccent}</span>
          </h1>
          <div className="blog-divider" />
          <p>
            {copy.heroDescription}
          </p>

          <div className="blog-hero-links">
            <Link href="/">{copy.backHome}</Link>
            <Link href="/chefs">{copy.exploreChefs}</Link>
          </div>
        </div>

        <div className="blog-publishing-card">
          <span className="blog-eyebrow">{copy.publishing}</span>
          <div className="blog-publishing-grid">
            <div>
              <strong>{posts.length}</strong>
              <span>{copy.publishedPosts}</span>
            </div>
            <div>
              <strong>{copy.worldwide}</strong>
              <span>{copy.editorialReach}</span>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="blog-featured">
          <div className="blog-featured-image">
            <img src={featured.banner} alt={featured.title} loading="lazy" />
            <div className="blog-featured-badge">
              <span />
              {copy.featuredStory}
            </div>
          </div>

          <div className="blog-featured-content">
            <span className="blog-eyebrow">
              {featured.date} • {featured.author}
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>

            <div className="blog-featured-actions">
              <Link href={`/blog/${featured.slug}`}>{copy.readStory}</Link>
              <Link href="/about">{copy.aboutUs}</Link>
            </div>

            <div className="blog-tags">
              {featured.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="blog-layout">
        <div className="blog-posts-panel">
          <div className="blog-section-head">
            <span className="blog-eyebrow">{copy.latestPosts}</span>
            <h2>{copy.latestTitle}</h2>
            <p>{copy.latestDescription}</p>
          </div>

          <div className="blog-grid">
            {(others.length ? others : posts).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.banner} alt={post.title} loading="lazy" />
                </div>

                <div className="blog-card-content">
                  <span>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <small>{copy.read}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="blog-sidebar">
          <article>
            <span className="blog-eyebrow">{copy.whatYouWillFind}</span>
            <h3>{copy.sidebarTitle}</h3>
            <p>
              {copy.sidebarDescription}
            </p>
          </article>

          <div className="blog-sidebar-list">
            <div>
              <strong>{copy.editorialStandard}</strong>
              <span>{copy.editorialStandardText}</span>
            </div>
            <div>
              <strong>{copy.globalStories}</strong>
              <span>{copy.globalStoriesText}</span>
            </div>
            <div>
              <strong>{copy.recognition}</strong>
              <span>{copy.recognitionText}</span>
            </div>
          </div>
        </aside>
      </section>

      <style jsx global>{`
        .blog-page {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0 40px;
          color: #f7f0df;
        }

        .blog-hero {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 34px;
        }

        .blog-hero-copy h1,
        .blog-featured-content h2,
        .blog-section-head h2,
        .blog-sidebar h3 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .blog-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .blog-hero-copy h1 span {
          color: #d9a331;
        }

        .blog-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .blog-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .blog-divider::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 9px;
          height: 9px;
          border: 1px solid #d9a331;
          transform: translate(-50%, -50%) rotate(45deg);
          background: #050505;
        }

        .blog-hero-copy p,
        .blog-featured-content p,
        .blog-section-head p,
        .blog-card-content p,
        .blog-sidebar p,
        .blog-sidebar-list span {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .blog-hero-copy p {
          max-width: 720px;
          font-size: 16px;
        }

        .blog-hero-links,
        .blog-featured-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .blog-hero-links a,
        .blog-featured-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 12px;
          border: 1px solid rgba(217, 163, 49, 0.45);
          background: rgba(255, 255, 255, 0.035);
          color: #f4d98a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: 0.25s ease;
        }

        .blog-hero-links a:hover,
        .blog-featured-actions a:hover {
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
          transform: translateY(-2px);
        }

        .blog-publishing-card,
        .blog-featured,
        .blog-posts-panel,
        .blog-sidebar,
        .blog-card,
        .blog-sidebar-list div {
          border: 1px solid rgba(217, 163, 49, 0.26);
          background:
            radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          border-radius: 22px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 30px 100px rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(18px);
        }

        .blog-publishing-card {
          padding: 28px;
        }

        .blog-publishing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .blog-publishing-grid div {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
        }

        .blog-publishing-grid strong,
        .blog-publishing-grid span {
          display: block;
        }

        .blog-publishing-grid strong {
          color: #fff;
          font-size: 20px;
        }

        .blog-publishing-grid span {
          margin-top: 6px;
          color: rgba(247, 240, 223, 0.62);
          font-size: 12px;
        }

        .blog-featured {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 0;
          overflow: hidden;
          margin-bottom: 34px;
        }

        .blog-featured-image {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid rgba(217, 163, 49, 0.16);
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
        }

        .blog-featured-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 18px;
        }

        .blog-featured-badge {
          position: absolute;
          left: 22px;
          top: 22px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(217, 163, 49, 0.28);
          border-radius: 999px;
          padding: 10px 14px;
          color: #f4d98a;
          background: rgba(0, 0, 0, 0.62);
          backdrop-filter: blur(12px);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .blog-featured-badge span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #d9a331;
          box-shadow: 0 0 18px rgba(217, 163, 49, 0.9);
        }

        .blog-featured-content {
          padding: 34px;
          align-self: center;
        }

        .blog-featured-content h2 {
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.05;
        }

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .blog-tags span {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          padding: 9px 12px;
          color: rgba(247, 240, 223, 0.78);
          background: rgba(255, 255, 255, 0.03);
          font-size: 12px;
        }

        .blog-layout {
          display: grid;
          grid-template-columns: 1fr 0.36fr;
          gap: 24px;
          align-items: start;
        }

        .blog-posts-panel,
        .blog-sidebar {
          padding: 28px;
        }

        .blog-section-head {
          max-width: 820px;
          margin-bottom: 26px;
        }

        .blog-section-head h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .blog-card {
          overflow: hidden;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .blog-card:hover {
          border-color: rgba(217, 163, 49, 0.68);
          transform: translateY(-6px);
        }

        .blog-card-image {
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(217, 163, 49, 0.16);
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
        }

        .blog-card-content {
          padding: 20px;
        }

        .blog-card-content span {
          display: block;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .blog-card-content h3 {
          margin-top: 10px;
          color: #fff;
          font-size: 19px;
          line-height: 1.25;
        }

        .blog-card-content small {
          display: block;
          margin-top: 18px;
          color: #f4d98a;
        }

        .blog-sidebar {
          display: grid;
          gap: 22px;
        }

        .blog-sidebar h3 {
          font-size: 30px;
          line-height: 1.1;
        }

        .blog-sidebar-list {
          display: grid;
          gap: 12px;
        }

        .blog-sidebar-list div {
          padding: 16px;
        }

        .blog-sidebar-list strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .blog-sidebar-list span {
          display: block;
          font-size: 14px;
        }

        @media (max-width: 1180px) {
          .blog-hero,
          .blog-featured,
          .blog-layout {
            grid-template-columns: 1fr;
          }

          .blog-featured-image {
            border-right: none;
            border-bottom: 1px solid rgba(217, 163, 49, 0.16);
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .blog-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .blog-publishing-grid,
          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-featured-image {
            min-height: 380px;
          }

          .blog-card-image {
            height: 260px;
          }
        }
      `}</style>
    </main>
  )
}