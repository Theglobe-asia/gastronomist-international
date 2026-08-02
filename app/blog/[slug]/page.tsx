// app/blog/[slug]/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getSortedPosts } from "@/components/blog/posts"

const SITE_URL = "https://www.gastronomistinternational.com"
const SITE_NAME = "Gastronomist International"

type BlogArticlePageProps = {
  params: {
    slug: string
  }
}

const articleCopy = {
  en: {
    journalFeature: "Journal Feature",
    region: "Region",
    backToJournal: "Back to Journal",
    backToHome: "Back to Home",
    officialRelease: "Official Editorial Release",
    atAGlance: "At a Glance",
    publisher: "Publisher",
    releaseDate: "Release Date",
    category: "Category",
    moreStories: "More Stories",
    journal: "Journal",
  },
  ru: {
    journalFeature: "Журнальная публикация",
    region: "Регион",
    backToJournal: "Назад к журналу",
    backToHome: "Назад на главную",
    officialRelease: "Официальная редакционная публикация",
    atAGlance: "Краткий обзор",
    publisher: "Издатель",
    releaseDate: "Дата публикации",
    category: "Категория",
    moreStories: "Другие истории",
    journal: "Журнал",
  },
}

function LocalizedInline({
  en,
  ru,
}: {
  en: string
  ru?: string
}) {
  return (
    <>
      <span className="blog-lang-en">{en}</span>
      <span className="blog-lang-ru">{ru || en}</span>
    </>
  )
}

function getAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const posts = getSortedPosts("en")
  const post = posts.find((item) => item.slug === params.slug)

  if (!post) {
    return {
      title: `Journal Feature Not Found | ${SITE_NAME}`,
      description:
        "The requested Gastronomist International journal feature could not be found.",
    }
  }

  const articleUrl = getAbsoluteUrl(`/blog/${post.slug}`)
  const imageUrl = getAbsoluteUrl(post.ogImage || post.banner)

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: post.title,
      description: post.description,
      url: articleUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const englishPosts = getSortedPosts("en")
  const russianPosts = getSortedPosts("ru")
  const post = englishPosts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  const localizedPost =
    russianPosts.find((item) => item.slug === params.slug) || post

  const relatedPosts = englishPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)
    .map((item) => ({
      en: item,
      ru: russianPosts.find((localizedItem) => localizedItem.slug === item.slug) || item,
    }))

  const articleContent =
    post.content && post.content.length > 0 ? post.content : [post.description]

  const localizedArticleContent =
    localizedPost.content && localizedPost.content.length > 0
      ? localizedPost.content
      : [localizedPost.description]

  return (
    <main className="blog-article-page">
      <section className="blog-article-hero">
        <div className="blog-article-visual">
          <img src={post.banner} alt={post.title} />

          <div className="blog-article-badge">
            <span />
            <LocalizedInline
              en={articleCopy.en.journalFeature}
              ru={articleCopy.ru.journalFeature}
            />
          </div>
        </div>

        <div className="blog-article-copy">
          <span className="blog-article-eyebrow">
            {post.date} • 
            <LocalizedInline en={post.author} ru={localizedPost.author} />
          </span>

          <h1>
            <LocalizedInline en={post.title} ru={localizedPost.title} />
          </h1>

          <div className="blog-article-divider" />

          <p>
            <LocalizedInline
              en={post.description}
              ru={localizedPost.description}
            />
          </p>

          {post.region ? (
            <div className="blog-article-region">
              <strong>
                <LocalizedInline
                  en={articleCopy.en.region}
                  ru={articleCopy.ru.region}
                />
              </strong>
              <span>
                <LocalizedInline en={post.region} ru={localizedPost.region} />
              </span>
            </div>
          ) : null}

          <div className="blog-article-actions">
            <Link href="/blog">
              <LocalizedInline
                en={articleCopy.en.backToJournal}
                ru={articleCopy.ru.backToJournal}
              />
            </Link>
            <Link href="/">
              <LocalizedInline
                en={articleCopy.en.backToHome}
                ru={articleCopy.ru.backToHome}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="blog-article-layout">
        <article className="blog-article-main">
          <span className="blog-article-eyebrow">
            <LocalizedInline
              en={articleCopy.en.officialRelease}
              ru={articleCopy.ru.officialRelease}
            />
          </span>

          <div className="blog-article-body">
            <div className="blog-language-body blog-lang-en">
              {articleContent.map((paragraph, index) => (
                <p key={`${post.slug}-paragraph-en-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="blog-language-body blog-lang-ru">
              {localizedArticleContent.map((paragraph, index) => (
                <p key={`${post.slug}-paragraph-ru-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="blog-article-tags">
            <div className="blog-tags-row blog-lang-en">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="blog-tags-row blog-lang-ru">
              {localizedPost.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </article>

        <aside className="blog-article-sidebar">
          <article className="blog-article-side-card">
            <span className="blog-article-eyebrow">
              <LocalizedInline
                en={articleCopy.en.atAGlance}
                ru={articleCopy.ru.atAGlance}
              />
            </span>

            <div className="blog-article-facts">
              <div>
                <strong>
                  <LocalizedInline en={post.author} ru={localizedPost.author} />
                </strong>
                <span>
                  <LocalizedInline
                    en={articleCopy.en.publisher}
                    ru={articleCopy.ru.publisher}
                  />
                </span>
              </div>

              <div>
                <strong>{post.date}</strong>
                <span>
                  <LocalizedInline
                    en={articleCopy.en.releaseDate}
                    ru={articleCopy.ru.releaseDate}
                  />
                </span>
              </div>

              {post.region ? (
                <div>
                  <strong>
                    <LocalizedInline
                      en={post.region}
                      ru={localizedPost.region}
                    />
                  </strong>
                  <span>
                    <LocalizedInline
                      en={articleCopy.en.region}
                      ru={articleCopy.ru.region}
                    />
                  </span>
                </div>
              ) : null}

              <div>
                <strong>
                  <LocalizedInline
                    en={post.tags[0] || articleCopy.en.journal}
                    ru={localizedPost.tags[0] || articleCopy.ru.journal}
                  />
                </strong>
                <span>
                  <LocalizedInline
                    en={articleCopy.en.category}
                    ru={articleCopy.ru.category}
                  />
                </span>
              </div>
            </div>
          </article>

          {relatedPosts.length > 0 ? (
            <article className="blog-article-side-card">
              <span className="blog-article-eyebrow">
                <LocalizedInline
                  en={articleCopy.en.moreStories}
                  ru={articleCopy.ru.moreStories}
                />
              </span>

              <div className="blog-article-related">
                {relatedPosts.map((item) => (
                  <Link key={item.en.slug} href={`/blog/${item.en.slug}`}>
                    <strong>
                      <LocalizedInline
                        en={item.en.title}
                        ru={item.ru.title}
                      />
                    </strong>
                    <span>{item.en.date}</span>
                  </Link>
                ))}
              </div>
            </article>
          ) : null}
        </aside>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `

            .blog-lang-ru {
              display: none;
            }

            html[lang="ru"] .blog-lang-en {
              display: none;
            }

            html[lang="ru"] .blog-lang-ru {
              display: inline;
            }

            .blog-language-body.blog-lang-en {
              display: grid;
              gap: 18px;
            }

            .blog-language-body.blog-lang-ru {
              display: none;
              gap: 18px;
            }

            html[lang="ru"] .blog-language-body.blog-lang-en {
              display: none;
            }

            html[lang="ru"] .blog-language-body.blog-lang-ru {
              display: grid;
            }

            .blog-tags-row {
              flex-wrap: wrap;
              gap: 10px;
            }

            .blog-tags-row.blog-lang-en {
              display: flex;
            }

            .blog-tags-row.blog-lang-ru {
              display: none;
            }

            html[lang="ru"] .blog-tags-row.blog-lang-en {
              display: none;
            }

            html[lang="ru"] .blog-tags-row.blog-lang-ru {
              display: flex;
            }

            .blog-article-page {
              width: min(1440px, calc(100% - 40px));
              margin: 0 auto;
              padding: 70px 0 44px;
              color: #f7f0df;
            }

            .blog-article-hero {
              display: grid;
              grid-template-columns: 1.05fr 0.95fr;
              gap: 34px;
              align-items: center;
              margin-bottom: 34px;
            }

            .blog-article-visual {
              position: relative;
              min-height: 560px;
              overflow: hidden;
              border: 1px solid rgba(217, 163, 49, 0.26);
              border-radius: 28px;
              background:
                radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
                rgba(255, 255, 255, 0.03);
              box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
            }

            .blog-article-visual img {
              width: 100%;
              height: 100%;
              min-height: 560px;
              object-fit: contain;
              padding: 18px;
            }

            .blog-article-badge {
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

            .blog-article-badge span {
              width: 8px;
              height: 8px;
              border-radius: 999px;
              background: #d9a331;
              box-shadow: 0 0 18px rgba(217, 163, 49, 0.9);
            }

            .blog-article-copy h1,
            .blog-article-main h2,
            .blog-article-side-card h3 {
              font-family: Georgia, "Times New Roman", serif;
              color: #fff;
              font-weight: 500;
              letter-spacing: -0.045em;
            }

            .blog-article-copy h1 {
              font-size: clamp(42px, 5vw, 76px);
              line-height: 1.02;
            }

            .blog-article-eyebrow {
              display: block;
              margin-bottom: 16px;
              color: #d9a331;
              font-size: 12px;
              font-weight: 800;
              letter-spacing: 0.14em;
              text-transform: uppercase;
            }

            .blog-article-divider {
              width: 210px;
              height: 1px;
              margin: 26px 0;
              background: linear-gradient(90deg, transparent, #d9a331, transparent);
              position: relative;
            }

            .blog-article-divider::after {
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

            .blog-article-copy p,
            .blog-article-body p,
            .blog-article-region span,
            .blog-article-facts span,
            .blog-article-related span {
              color: rgba(247, 240, 223, 0.76);
              line-height: 1.72;
            }

            .blog-article-copy p {
              max-width: 680px;
              font-size: 16px;
            }

            .blog-article-region {
              margin-top: 24px;
              border: 1px solid rgba(217, 163, 49, 0.22);
              border-radius: 16px;
              padding: 16px;
              background: rgba(255, 255, 255, 0.03);
              max-width: 420px;
            }

            .blog-article-region strong,
            .blog-article-region span {
              display: block;
            }

            .blog-article-region strong {
              color: #fff;
              margin-bottom: 6px;
            }

            .blog-article-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 14px;
              margin-top: 32px;
            }

            .blog-article-actions a {
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

            .blog-article-actions a:hover {
              border-color: rgba(244, 217, 138, 0.85);
              background: rgba(217, 163, 49, 0.12);
              transform: translateY(-2px);
            }

            .blog-article-layout {
              display: grid;
              grid-template-columns: 1fr 0.38fr;
              gap: 24px;
              align-items: start;
            }

            .blog-article-main,
            .blog-article-side-card {
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

            .blog-article-main {
              padding: 34px;
            }

            .blog-article-body {
              display: grid;
              gap: 18px;
              max-width: 920px;
            }

            .blog-article-body p {
              font-size: 17px;
            }

            .blog-article-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 30px;
            }

            .blog-article-tags span {
              border: 1px solid rgba(217, 163, 49, 0.22);
              border-radius: 999px;
              padding: 9px 12px;
              color: rgba(247, 240, 223, 0.78);
              background: rgba(255, 255, 255, 0.03);
              font-size: 12px;
            }

            .blog-article-sidebar {
              display: grid;
              gap: 22px;
            }

            .blog-article-side-card {
              padding: 24px;
            }

            .blog-article-facts {
              display: grid;
              gap: 12px;
            }

            .blog-article-facts div,
            .blog-article-related a {
              border: 1px solid rgba(217, 163, 49, 0.22);
              border-radius: 16px;
              padding: 16px;
              background: rgba(255, 255, 255, 0.03);
            }

            .blog-article-facts strong,
            .blog-article-facts span,
            .blog-article-related strong,
            .blog-article-related span {
              display: block;
            }

            .blog-article-facts strong,
            .blog-article-related strong {
              color: #fff;
              line-height: 1.35;
            }

            .blog-article-facts span,
            .blog-article-related span {
              margin-top: 6px;
              font-size: 13px;
            }

            .blog-article-related {
              display: grid;
              gap: 12px;
            }

            .blog-article-related a {
              text-decoration: none;
              transition: 0.25s ease;
            }

            .blog-article-related a:hover {
              border-color: rgba(217, 163, 49, 0.62);
              background: rgba(217, 163, 49, 0.08);
              transform: translateY(-2px);
            }

            @media (max-width: 1180px) {
              .blog-article-hero,
              .blog-article-layout {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 720px) {
              .blog-article-page {
                width: min(100% - 24px, 1440px);
                padding-top: 46px;
              }

              .blog-article-visual,
              .blog-article-visual img {
                min-height: 380px;
              }

              .blog-article-main,
              .blog-article-side-card {
                padding: 22px;
              }

              .blog-article-body p {
                font-size: 15px;
              }
            }
          `,
        }}
      />
    </main>
  )
}
