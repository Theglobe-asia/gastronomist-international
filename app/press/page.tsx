// app/press/page.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

type H1Motion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"h1"> & MotionProps> &
    React.RefAttributes<HTMLHeadingElement>
>

type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>

const MotionH1 = motion.h1 as H1Motion
const MotionDiv = motion.div as DivMotion

const FACTS = [
  { label: "Category", value: "Honorary Cultural Partnership" },
  { label: "Representative", value: "Yulia Antonova — Mystic Mask" },
  { label: "Representation", value: "Gastronomist International in Russia" },
  { label: "Focus", value: "Culture • Art • Literature • Global Exchange" },
]

const STATS = [
  { label: "Country", value: "Russia" },
  { label: "Role", value: "Honorary Partner" },
  { label: "Creative Field", value: "Arts + Literature" },
  { label: "Mission", value: "Cultural Exchange" },
]

const TIMELINE = [
  {
    t: "Official Announcement",
    d: "Gastronomist International announces an honorary cultural partnership with Yulia Antonova, known by her stage name Mystic Mask.",
  },
  {
    t: "Representation in Russia",
    d: "Yulia Antonova will represent Gastronomist International in Russia, strengthening international cultural connection and community engagement.",
  },
  {
    t: "Shared Purpose",
    d: "The partnership builds bridges between gastronomy, culture, art, literature, and meaningful human expression.",
  },
]

const GALLERY = [
  { src: "/images/yulia-antonova-mystic-mask.png", label: "Mystic Mask" },
  { src: "/images/recognition.png", label: "Honorary Recognition" },
  { src: "/images/medal.png", label: "Global Partnership" },
]

const RELATED = [
  {
    title: "Read Journal Feature",
    href: "/blog/honorary-partnership-yulia-antonova-mystic-mask-russia",
    desc: "View the official Gastronomist Journal article about this honorary partnership.",
  },
  {
    title: "About Gastronomist",
    href: "/about",
    desc: "Learn more about the mission, vision, and international network of Gastronomist International.",
  },
  {
    title: "Explore Our Chefs",
    href: "/chefs",
    desc: "Meet members and culinary professionals connected through Gastronomist International.",
  },
]

export default function PressPage() {
  return (
    <main className="press-page">
      <section className="press-hero">
        <div className="press-hero-visual">
          <img
            src="/images/yulia-antonova-mystic-mask.png"
            alt="Yulia Antonova Mystic Mask honorary partnership with Gastronomist International"
          />
          <div className="press-hero-overlay" />
          <div className="press-hero-card">
            <strong>Official Press Release</strong>
            <span>
              Honorary cultural partnership recognizing Yulia Antonova — Mystic Mask
              as the representative of Gastronomist International in Russia.
            </span>
          </div>
        </div>

        <div className="press-hero-copy">
          <span className="press-eyebrow">Official Announcement • Editorial Release</span>

          <MotionH1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Press <span>Release</span>
          </MotionH1>

          <div className="press-divider" />

          <MotionDiv
            className="press-hero-lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Gastronomist International Announces Honorary Partnership with Yulia
            Antonova, “Mystic Mask.”
          </MotionDiv>

          <p>
            Gastronomist International is honored to welcome Yulia Antonova,
            known by her stage name Mystic Mask, into an honorary cultural
            partnership that will represent the organization in Russia and support
            meaningful international cultural exchange.
          </p>
        </div>
      </section>

      <section className="press-facts">
        {FACTS.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="press-layout">
        <div className="press-main">
          <article className="press-card">
            <span className="press-eyebrow">Editorial Story</span>
            <h2>Honorary partnership with cultural purpose.</h2>

            <p>
              Gastronomist International is honored to announce an honorary
              cultural partnership with Yulia Antonova, known by her stage name
              Mystic Mask, a distinguished abstract artist, author, poet,
              songwriter, and respected cultural figure.
            </p>

            <p>
              Yulia Antonova serves as the Vice President of the Union of Abstract
              Artists of Russia and is an Honorary Member of the I.K. Aivazovsky
              Academy of Arts. She is also a valued member of the Union of Writers
              of Russia, with creative works that reflect artistic excellence,
              cultural heritage, emotional depth, and meaningful human expression.
            </p>

            <p>
              Beyond her artistic achievements, Yulia holds a Law Degree, bringing
              together creativity, intellectual insight, leadership, and cultural
              advocacy. Her diverse background represents the powerful connection
              between art, knowledge, identity, and international collaboration.
            </p>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">Russia Representation</span>
            <h2>Representing Gastronomist International in Russia.</h2>

            <p>
              Through this honorary partnership, Yulia Antonova will represent
              Gastronomist International in Russia, serving as a cultural bridge
              for meaningful collaboration, artistic exchange, and international
              community engagement.
            </p>

            <p>
              Her role reflects Gastronomist International’s commitment to
              expanding its presence through respected leaders who embody
              creativity, culture, global connection, and professional recognition.
            </p>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">Release Timeline</span>
            <h2>Key points of the announcement.</h2>

            <div className="press-timeline">
              {TIMELINE.map((item) => (
                <div key={item.t}>
                  <strong>{item.t}</strong>
                  <span>{item.d}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">In Focus</span>
            <h2>Recognition, partnership, and shared purpose.</h2>

            <div className="press-gallery press-falling-gallery" aria-label="In Focus falling gallery">
              {GALLERY.map((item, index) => (
                <div
                  className="press-falling-card"
                  key={item.src}
                  style={
                    {
                      "--fallDelay": `${index * 1.25}s`,
                      "--fallX": `${(index - 1) * 108}%`,
                      "--fallMobileX": `${(index - 1) * 76}%`,
                    } as React.CSSProperties
                  }
                >
                  <div className="press-gallery-image">
                    <img src={item.src} alt={item.label} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">Welcome Statement</span>
            <h2>Welcome to Gastronomist International, Yulia Antonova — Mystic Mask.</h2>

            <p>
              Your artistry, cultural dedication, and international creative
              presence are a meaningful addition to our global community.
            </p>
          </article>
        </div>

        <aside className="press-sidebar">
          <article className="press-card">
            <span className="press-eyebrow">At a Glance</span>

            <div className="press-stat-grid">
              {STATS.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">Related</span>

            <div className="press-related">
              {RELATED.map((item) => (
                <a key={item.title} href={item.href}>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </a>
              ))}
            </div>
          </article>

          <article className="press-card">
            <span className="press-eyebrow">Global Network</span>
            <h3>Culture, gastronomy, and international recognition.</h3>

            <p>
              Gastronomist International continues to build a global platform that
              connects chefs, creative leaders, hospitality professionals, and
              cultural advocates through recognition, storytelling, and meaningful
              collaboration.
            </p>
          </article>
        </aside>
      </section>

      <style jsx global>{`
        .press-page {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0 40px;
          color: #f7f0df;
        }

        .press-hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
          margin-bottom: 34px;
        }

        .press-hero-copy h1,
        .press-card h2,
        .press-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .press-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .press-hero-copy h1 span {
          color: #d9a331;
        }

        .press-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .press-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .press-divider::after {
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

        .press-hero-lead {
          color: #fff;
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .press-hero-copy p,
        .press-card p,
        .press-related span,
        .press-timeline span {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .press-hero-copy p {
          max-width: 620px;
          font-size: 16px;
        }

        .press-hero-visual {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 28px;
          background:
            radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
            rgba(255, 255, 255, 0.03);
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
        }

        .press-hero-visual img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: contain;
          padding: 18px;
          opacity: 0.96;
        }

        .press-hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.58), transparent 58%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.62), transparent 56%);
        }

        .press-hero-card {
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

        .press-hero-card strong,
        .press-hero-card span {
          display: block;
        }

        .press-hero-card strong {
          color: #fff;
          font-size: 18px;
        }

        .press-hero-card span {
          margin-top: 6px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 14px;
          line-height: 1.6;
        }

        .press-facts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 34px;
        }

        .press-facts article,
        .press-card {
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

        .press-facts article {
          padding: 20px;
        }

        .press-facts span,
        .press-stat-grid span {
          display: block;
          color: rgba(247, 240, 223, 0.58);
          font-size: 11px;
          margin-bottom: 6px;
        }

        .press-facts strong,
        .press-stat-grid strong {
          display: block;
          color: #fff;
          font-size: 15px;
          line-height: 1.35;
        }

        .press-layout {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 24px;
        }

        .press-main,
        .press-sidebar {
          display: grid;
          gap: 22px;
          align-content: start;
        }

        .press-card {
          padding: 28px;
        }

        .press-card h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .press-card h3 {
          font-size: 28px;
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .press-card p + p {
          margin-top: 16px;
        }

        .press-timeline {
          display: grid;
          gap: 12px;
          margin-top: 20px;
        }

        .press-timeline div,
        .press-stat-grid div,
        .press-related a,
        .press-gallery > div {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
        }

        .press-timeline div {
          padding: 16px;
        }

        .press-timeline strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .press-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .press-gallery > div {
          overflow: hidden;
        }

        .press-falling-gallery {
          position: relative;
          display: block;
          min-height: 292px;
          overflow: hidden;
          perspective: 1200px;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 12%, rgba(217, 163, 49, 0.11), transparent 32%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.01));
        }

        .press-falling-gallery::before,
        .press-falling-gallery::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          z-index: 4;
          height: 62px;
          pointer-events: none;
        }

        .press-falling-gallery::before {
          top: 0;
          background: linear-gradient(180deg, rgba(5, 5, 5, 0.78), transparent);
        }

        .press-falling-gallery::after {
          bottom: 0;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.78), transparent);
        }

        .press-falling-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(30%, 250px);
          min-width: 190px;
          overflow: hidden;
          transform-style: preserve-3d;
          animation: pressFocusFall 5.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          animation-delay: var(--fallDelay);
          will-change: transform, opacity, filter;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 70px rgba(0, 0, 0, 0.38);
        }

        .press-falling-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            120deg,
            transparent 10%,
            rgba(255, 238, 177, 0.16) 48%,
            transparent 74%
          );
          opacity: 0;
          transform: translateX(-90%);
          animation: pressFocusShine 5.4s ease-in-out infinite;
          animation-delay: var(--fallDelay);
          pointer-events: none;
        }

        .press-gallery-image {
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
        }

        .press-gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
        }

        .press-gallery span {
          display: block;
          border-top: 1px solid rgba(217, 163, 49, 0.14);
          padding: 12px;
          text-align: center;
          color: rgba(247, 240, 223, 0.74);
          font-size: 12px;
        }

        .press-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .press-stat-grid div {
          padding: 16px;
        }

        .press-related {
          display: grid;
          gap: 12px;
        }

        .press-related a {
          display: block;
          padding: 16px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .press-related a:hover {
          border-color: rgba(217, 163, 49, 0.62);
          background: rgba(217, 163, 49, 0.08);
        }

        .press-related strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .press-related span {
          display: block;
          font-size: 13px;
        }

        @keyframes pressFocusFall {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(-190px)
              translateZ(-170px)
              rotateX(68deg)
              rotateZ(-8deg)
              scale(0.82);
          }
          18% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          58% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          82% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(205px)
              translateZ(-130px)
              rotateX(-48deg)
              rotateZ(7deg)
              scale(0.86);
          }
          100% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(205px)
              translateZ(-130px)
              rotateX(-48deg)
              rotateZ(7deg)
              scale(0.86);
          }
        }

        @keyframes pressFocusShine {
          0%, 22% {
            opacity: 0;
            transform: translateX(-90%);
          }
          34% {
            opacity: 1;
          }
          54%, 100% {
            opacity: 0;
            transform: translateX(92%);
          }
        }

        @keyframes pressFocusFallMobile {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(-220px)
              translateZ(-120px)
              rotateX(58deg)
              rotateZ(-5deg)
              scale(0.8);
          }
          18% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(0)
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          58% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(0)
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          82% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(230px)
              translateZ(-100px)
              rotateX(-42deg)
              rotateZ(5deg)
              scale(0.84);
          }
          100% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(230px)
              translateZ(-100px)
              rotateX(-42deg)
              rotateZ(5deg)
              scale(0.84);
          }
        }

        @media (max-width: 1180px) {
          .press-hero,
          .press-layout {
            grid-template-columns: 1fr;
          }

          .press-facts {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .press-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .press-facts,
          .press-gallery,
          .press-stat-grid {
            grid-template-columns: 1fr;
          }

          .press-falling-gallery {
            min-height: 360px;
          }

          .press-falling-card {
            width: min(86%, 320px);
            min-width: 0;
            animation-name: pressFocusFallMobile;
          }

          .press-gallery-image {
            height: 210px;
          }

          .press-hero-visual,
          .press-hero-visual img {
            min-height: 380px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .press-falling-card,
          .press-falling-card::before {
            animation: none !important;
          }

          .press-falling-gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            min-height: 0;
            overflow: visible;
            perspective: none;
            background: transparent;
          }

          .press-falling-gallery::before,
          .press-falling-gallery::after {
            display: none;
          }

          .press-falling-card {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            min-width: 0;
            opacity: 1;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}