// app/blog/welcoming-chef-noor/page.tsx

import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://www.gastronomistinternational.com"
const CANONICAL = `${SITE_URL}/blog/welcoming-chef-noor`
const OG_IMAGE = `${SITE_URL}/images/noor.png`

export const metadata: Metadata = {
  title: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
  description:
    "Gastronomist International welcomes Chef Noor, representing the new wave of modern Middle Eastern gastronomy from the GCC.",
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "article",
    url: CANONICAL,
    siteName: "Gastronomist International",
    title: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
    description:
      "Gastronomist International welcomes Chef Noor, representing the new wave of modern Middle Eastern gastronomy from the GCC.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
    description:
      "Gastronomist International welcomes Chef Noor, representing the new wave of modern Middle Eastern gastronomy from the GCC.",
    images: [OG_IMAGE],
  },
}

const SNAPSHOT = [
  { label: "Region", value: "GCC — Middle East" },
  { label: "Focus", value: "Modern Middle Eastern Gastronomy" },
  { label: "Style", value: "Refined • Contemporary • Cultural" },
  { label: "Status", value: "Official Member" },
]

const HIGHLIGHTS = [
  "Respect for regional ingredients and flavors",
  "Contemporary reinterpretations of Middle Eastern cuisine",
  "Precision, balance, and modern technique",
  "A global culinary perspective grounded in authenticity",
]

const MISSION = [
  "Celebrate modern gastronomy worldwide",
  "Connect culinary talent across cultures",
  "Elevate regional voices to a global audience",
  "Build a trusted, international culinary community",
]

export default function BlogChefNoorPage() {
  return (
    <main className="article-page">
      <section className="article-hero">
        <div className="article-hero-image">
          <img src="/images/noor.png" alt="Chef Noor — GCC Modern Gastronomy" />
          <div className="article-hero-overlay" />
          <div className="article-image-card">
            <strong>Official Membership Announcement</strong>
            <span>Welcoming a new culinary voice from the GCC region.</span>
          </div>
        </div>

        <div className="article-hero-copy">
          <span className="article-eyebrow">Official Membership Announcement</span>
          <h1>
            Welcoming Chef Noor — <span>A New Culinary Chapter from the GCC</span>
          </h1>
          <div className="article-divider" />
          <p>
            Gastronomist International proudly welcomes Chef Noor as our newest
            member, representing the bold, evolving culinary identity of the Gulf
            Cooperation Council.
          </p>

          <div className="article-links">
            <Link href="/blog">Back to Journal</Link>
            <Link href="/chefs">Explore Our Chefs</Link>
          </div>
        </div>
      </section>

      <section className="article-snapshot">
        {SNAPSHOT.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="article-layout">
        <div className="article-main">
          <article className="article-card">
            <span className="article-eyebrow">Editorial Feature</span>
            <h2>The Rise of Modern GCC Gastronomy</h2>
            <p>
              Over the past decade, the GCC has emerged as a powerful force in
              global gastronomy. Its culinary evolution reflects a seamless fusion
              of tradition and innovation — a philosophy embodied by Chef Noor.
            </p>

            <div className="article-list">
              {HIGHLIGHTS.map((item) => (
                <div key={item}>✦ {item}</div>
              ))}
            </div>

            <p>
              This approach positions Chef Noor among the new voices redefining
              how Middle Eastern gastronomy is perceived on the world stage.
            </p>
          </article>

          <article className="article-card">
            <span className="article-eyebrow">Shared Vision</span>
            <h2>A Shared Vision with Gastronomist International</h2>
            <p>
              At Gastronomist International, we exist to spotlight chefs who push
              boundaries while honoring identity. Chef Noor’s journey aligns
              naturally with our mission.
            </p>

            <div className="article-list">
              {MISSION.map((item) => (
                <div key={item}>✦ {item}</div>
              ))}
            </div>

            <p>
              Chef Noor’s membership strengthens the GCC’s presence within our
              global chef network and reinforces the region’s growing influence
              in fine dining and contemporary cuisine.
            </p>
          </article>

          <article className="article-card">
            <span className="article-eyebrow">Looking Ahead</span>
            <h2>Welcome to the International Stage</h2>
            <p>
              This welcome marks the beginning of an exciting collaboration. As
              Chef Noor’s journey with Gastronomist International unfolds, we look
              forward to sharing their work, achievements, and creative vision
              with our global audience.
            </p>

            <p className="article-signoff">
              Welcome to the international stage.
              <br />
              Welcome to Gastronomist International.
            </p>
          </article>
        </div>

        <aside className="article-sidebar">
          <article className="article-card">
            <span className="article-eyebrow">Profile Snapshot</span>

            <div className="article-sidebar-list">
              {SNAPSHOT.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="article-card">
            <span className="article-eyebrow">Continue Reading</span>

            <div className="article-related">
              <Link href="/chefs">
                <strong>Our Chefs</strong>
                <span>Discover international culinary members.</span>
              </Link>

              <Link href="/press">
                <strong>Press Releases</strong>
                <span>Official announcements and editorials.</span>
              </Link>

              <Link href="/about">
                <strong>About Gastronomist</strong>
                <span>Explore the mission and global network.</span>
              </Link>
            </div>
          </article>
        </aside>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.article-page {
  width: min(1440px, calc(100% - 40px));
  margin: 0 auto;
  padding: 70px 0 40px;
  color: #f7f0df;
}

.article-hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 34px;
  align-items: center;
  margin-bottom: 34px;
}

.article-hero-copy h1,
.article-card h2 {
  font-family: Georgia, "Times New Roman", serif;
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.045em;
}

.article-hero-copy h1 {
  font-size: clamp(42px, 5.4vw, 82px);
  line-height: 0.98;
}

.article-hero-copy h1 span {
  color: #d9a331;
}

.article-eyebrow {
  display: block;
  margin-bottom: 16px;
  color: #d9a331;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.article-divider {
  width: 210px;
  height: 1px;
  margin: 26px 0;
  background: linear-gradient(90deg, transparent, #d9a331, transparent);
  position: relative;
}

.article-divider::after {
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

.article-hero-copy p,
.article-card p,
.article-list div,
.article-related span {
  color: rgba(247, 240, 223, 0.76);
  line-height: 1.72;
}

.article-hero-copy p {
  max-width: 620px;
  font-size: 16px;
}

.article-links {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.article-links a {
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

.article-links a:hover,
.article-related a:hover {
  border-color: rgba(217, 163, 49, 0.68);
  background: rgba(217, 163, 49, 0.1);
}

.article-hero-image {
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

.article-hero-image img {
  width: 100%;
  height: 100%;
  min-height: 560px;
  object-fit: contain;
  padding: 18px;
  opacity: 0.94;
}

.article-hero-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.72), transparent 56%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.72), transparent 56%);
}

.article-image-card {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  border: 1px solid rgba(217, 163, 49, 0.24);
  border-radius: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(16px);
}

.article-image-card strong,
.article-image-card span {
  display: block;
}

.article-image-card strong {
  color: #fff;
  font-size: 18px;
}

.article-image-card span {
  margin-top: 6px;
  color: rgba(247, 240, 223, 0.72);
  font-size: 14px;
  line-height: 1.6;
}

.article-snapshot {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 34px;
}

.article-snapshot article,
.article-card {
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

.article-snapshot article {
  padding: 20px;
}

.article-snapshot span,
.article-sidebar-list span {
  display: block;
  color: rgba(247, 240, 223, 0.58);
  font-size: 11px;
  margin-bottom: 6px;
}

.article-snapshot strong,
.article-sidebar-list strong {
  display: block;
  color: #fff;
  font-size: 15px;
  line-height: 1.35;
}

.article-layout {
  display: grid;
  grid-template-columns: 1fr 0.38fr;
  gap: 24px;
  align-items: start;
}

.article-main,
.article-sidebar {
  display: grid;
  gap: 22px;
}

.article-card {
  padding: 28px;
}

.article-card h2 {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05;
  margin-bottom: 18px;
}

.article-card p + p {
  margin-top: 16px;
}

.article-list {
  display: grid;
  gap: 12px;
  margin: 22px 0;
}

.article-list div,
.article-sidebar-list div,
.article-related a {
  border: 1px solid rgba(217, 163, 49, 0.22);
  border-radius: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
}

.article-signoff {
  color: #f4d98a !important;
  font-weight: 700;
}

.article-sidebar-list,
.article-related {
  display: grid;
  gap: 12px;
}

.article-related a {
  display: block;
  text-decoration: none;
  transition: 0.25s ease;
}

.article-related strong {
  display: block;
  color: #fff;
  margin-bottom: 6px;
}

.article-related span {
  display: block;
  font-size: 13px;
}

@media (max-width: 1180px) {
  .article-hero,
  .article-layout {
    grid-template-columns: 1fr;
  }

  .article-snapshot {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .article-page {
    width: min(100% - 24px, 1440px);
    padding-top: 46px;
  }

  .article-snapshot {
    grid-template-columns: 1fr;
  }

  .article-hero-image,
  .article-hero-image img {
    min-height: 420px;
  }
}
          `,
        }}
      />
    </main>
  )
}