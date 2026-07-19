// app/about/page.tsx
// @ts-nocheck
"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Card from "@/components/ui/Card"

const leaders = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation, recognition, and professional connection.",
    img: "/images/president.png?v=2",
    region: "Global",
    focus: "Modern Gastronomy",
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage, education, and culinary innovation.",
    img: "/images/chefcox.png?v=2",
    region: "Global",
    focus: "Food Heritage",
  },
  {
    name: "Yulia Antonova — Mystic Mask",
    role: "Russia Representative — Honorary Cultural Partner",
    blurb:
      "Representing Gastronomist International in Russia through cultural leadership, artistic exchange, international collaboration, and professional recognition.",
    img: "/images/yulia.png",
    region: "Russia",
    focus: "Cultural Representation",
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representative",
    blurb:
      "Representing Gastronomist International through regional culinary leadership, professional connection, and global collaboration.",
    img: "/images/chefhamid.png?v=2",
    region: "Azerbaijan",
    focus: "Representation",
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representative",
    blurb:
      "Supporting the organization’s international presence through culinary representation, professional standards, and community engagement.",
    img: "/images/chefluzac.png?v=2",
    region: "France",
    focus: "Representation",
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representative",
    blurb:
      "Contributing to Gastronomist International’s mission by connecting culinary professionals and strengthening regional visibility.",
    img: "/images/chefthet.png?v=2",
    region: "Myanmar",
    focus: "Representation",
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Arabia Representative",
    blurb:
      "Representing professional culinary excellence and supporting global recognition across hospitality and gastronomy communities.",
    img: "/images/chefwael.png?v=2",
    region: "Saudi Arabia",
    focus: "Representation",
  },
]

const heroGalleryImages = [
  "/images/recognition.png",
  "/images/collab.png",
  "/images/medal.png",
  "/images/yulia.png",
  "/images/president.png?v=2",
  "/images/chefhamid.png?v=2",
]

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<(typeof leaders)[number] | null>(null)

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="about-eyebrow">Mission • Leadership • Global Recognition</span>
          <h1>
            About <span>Gastronomist International</span>
          </h1>
          <div className="about-divider" />
          <p>
            Gastronomist International is a global culinary community created to connect,
            recognize, and elevate chefs, educators, hospitality professionals, innovators,
            and culinary leaders around the world.
          </p>

          <div className="about-hero-links">
            <a href="/chefs">Explore Our Chefs</a>
            <a href="/press">Read Press Releases</a>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-visual-gallery" aria-hidden="true">
            {heroGalleryImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`about-visual-fall-card about-visual-fall-card-${index + 1}`}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="about-visual-orb about-visual-orb-one" />
          <div className="about-visual-orb about-visual-orb-two" />
          <div className="about-visual-overlay" />
          <div className="about-visual-card">
            <strong>Global Culinary Community</strong>
            <span>Modern gastronomy, professional recognition, and worldwide connection.</span>
          </div>
        </div>
      </section>

      <section className="about-grid">
        <Card className="about-card about-card-large">
          <span className="about-eyebrow">Our Mission</span>
          <h2>Empower culinary professionals through recognition and connection.</h2>
          <p>
            Our mission is to provide a respected international platform where culinary
            professionals can be seen, celebrated, and connected. We believe talent deserves
            visibility, and professional excellence should be recognized beyond borders.
          </p>
        </Card>

        <Card className="about-card">
          <span className="about-eyebrow">Our Vision</span>
          <h2>Global excellence in gastronomy.</h2>
          <p>
            We envision a connected culinary world where chefs and hospitality professionals
            can collaborate, share knowledge, and represent their craft with pride.
          </p>
        </Card>
      </section>

      <section className="about-section">
        <div className="about-section-head">
          <span className="about-eyebrow">Leadership & Representatives</span>
          <h2>Professional voices supporting a worldwide culinary network.</h2>
          <p>
            Gastronomist International is represented by culinary leaders and professionals
            who support the organization’s mission across different regions and disciplines.
          </p>
        </div>

        <div className="leader-grid">
          {leaders.map((leader) => (
            <motion.article
              key={leader.name}
              className="leader-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="leader-image">
                <img src={leader.img} alt={leader.name} />
              </div>
              <div className="leader-content">
                <span>{leader.region}</span>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
                <small>{leader.focus}</small>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-presence">
        <div>
          <span className="about-eyebrow">Worldwide Presence</span>
          <h2>Connecting professionals across continents.</h2>
          <p>
            Gastronomist International exists for chefs and culinary professionals who want
            to be part of a respected, visible, and globally connected community. The platform
            supports recognition, editorial exposure, professional identity, and international
            collaboration.
          </p>
        </div>

        <div className="presence-list">
          {[
            "Chefs and executive chefs",
            "Culinary educators",
            "Hospitality leaders",
            "Restaurant professionals",
            "Gastronomy innovators",
            "Food media and consultants",
          ].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            className="leader-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              className="leader-modal-card"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedLeader(null)}>✕</button>
              <img src={selectedLeader.img} alt={selectedLeader.name} />
              <span>{selectedLeader.region}</span>
              <h3>{selectedLeader.name}</h3>
              <p className="role">{selectedLeader.role}</p>
              <p>{selectedLeader.blurb}</p>
              <small>{selectedLeader.focus}</small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .about-page {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0 40px;
          color: #f7f0df;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 34px;
          align-items: center;
          margin-bottom: 34px;
        }

        .about-hero-copy h1,
        .about-grid h2,
        .about-section-head h2,
        .about-presence h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .about-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .about-hero-copy h1 span {
          color: #d9a331;
        }

        .about-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .about-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .about-divider::after {
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

        .about-hero-copy p,
        .about-card p,
        .about-section-head p,
        .about-presence p,
        .leader-content p,
        .leader-modal-card p {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .about-hero-copy p {
          max-width: 620px;
          font-size: 16px;
        }

        .about-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .about-hero-links a {
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

        .about-hero-links a:hover {
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
          transform: translateY(-2px);
        }

        .about-hero-visual {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 28px;
          background:
            radial-gradient(520px 240px at 70% 20%, rgba(217, 163, 49, 0.14), transparent 58%),
            rgba(255, 255, 255, 0.03);
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
          perspective: 1200px;
          isolation: isolate;
        }

        .about-visual-gallery {
          position: absolute;
          inset: -120px 0 -130px;
          z-index: 1;
          transform-style: preserve-3d;
          pointer-events: none;
        }

        .about-visual-fall-card {
          --depth: 90px;
          --drift: 24px;
          --rotate-start: -20deg;
          --rotate-mid: 8deg;
          --rotate-end: 18deg;
          --tilt-start: -8deg;
          --tilt-end: 7deg;
          position: absolute;
          top: -38%;
          width: clamp(132px, 16vw, 210px);
          height: clamp(170px, 22vw, 276px);
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.32);
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.025)),
            rgba(0, 0, 0, 0.35);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 26px 70px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(14px);
          transform-style: preserve-3d;
          animation: aboutVisualCardFall 18s linear infinite;
        }

        .about-visual-fall-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.16) 42%,
            transparent 66%
          );
          opacity: 0.55;
          pointer-events: none;
        }

        .about-visual-fall-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
          opacity: 0.94;
          filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.34));
        }

        .about-visual-fall-card-1 {
          left: 7%;
          animation-duration: 17s;
          animation-delay: -12s;
        }

        .about-visual-fall-card-2 {
          left: 29%;
          width: clamp(146px, 18vw, 238px);
          height: clamp(178px, 23vw, 292px);
          --depth: 40px;
          --drift: -26px;
          --rotate-start: 22deg;
          --rotate-mid: -6deg;
          --rotate-end: -18deg;
          --tilt-start: 9deg;
          --tilt-end: -6deg;
          animation-duration: 20s;
          animation-delay: -6s;
        }

        .about-visual-fall-card-3 {
          left: 55%;
          --depth: 130px;
          --drift: 30px;
          --rotate-start: -28deg;
          --rotate-mid: 10deg;
          --rotate-end: 22deg;
          --tilt-start: -10deg;
          --tilt-end: 9deg;
          animation-duration: 19s;
          animation-delay: -15s;
        }

        .about-visual-fall-card-4 {
          left: 74%;
          width: clamp(128px, 15vw, 196px);
          height: clamp(168px, 21vw, 260px);
          --depth: 20px;
          --drift: -22px;
          --rotate-start: 18deg;
          --rotate-mid: -10deg;
          --rotate-end: -22deg;
          --tilt-start: 7deg;
          --tilt-end: -8deg;
          animation-duration: 22s;
          animation-delay: -9s;
        }

        .about-visual-fall-card-5 {
          left: 15%;
          width: clamp(118px, 14vw, 178px);
          height: clamp(154px, 19vw, 236px);
          --depth: 150px;
          --drift: 20px;
          animation-duration: 24s;
          animation-delay: -3s;
        }

        .about-visual-fall-card-6 {
          left: 47%;
          width: clamp(120px, 14vw, 186px);
          height: clamp(158px, 20vw, 248px);
          --depth: 70px;
          --drift: -30px;
          --rotate-start: 26deg;
          --rotate-mid: -8deg;
          --rotate-end: -18deg;
          --tilt-start: 8deg;
          --tilt-end: -9deg;
          animation-duration: 21s;
          animation-delay: -18s;
        }

        .about-visual-orb {
          position: absolute;
          z-index: 2;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(1px);
        }

        .about-visual-orb-one {
          width: 170px;
          height: 170px;
          right: 12%;
          top: 14%;
          background: rgba(217, 163, 49, 0.13);
          animation: aboutVisualOrbFloat 7s ease-in-out infinite;
        }

        .about-visual-orb-two {
          width: 92px;
          height: 92px;
          left: 12%;
          bottom: 25%;
          background: rgba(244, 217, 138, 0.08);
          animation: aboutVisualOrbFloat 8.5s ease-in-out infinite reverse;
        }

        .about-visual-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.76), transparent 55%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.76), transparent 55%),
            radial-gradient(circle at 70% 32%, transparent 0%, rgba(0, 0, 0, 0.18) 48%, rgba(0, 0, 0, 0.54) 100%);
        }

        .about-visual-card {
          position: absolute;
          z-index: 4;
          left: 24px;
          right: 24px;
          bottom: 24px;
          border: 1px solid rgba(217, 163, 49, 0.24);
          border-radius: 20px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.68);
          backdrop-filter: blur(16px);
        }

        .about-visual-card strong,
        .about-visual-card span {
          display: block;
        }

        .about-visual-card strong {
          color: #fff;
          font-size: 18px;
        }

        .about-visual-card span {
          margin-top: 6px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 14px;
          line-height: 1.6;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 22px;
          margin-bottom: 54px;
        }

        .about-card {
          padding: 28px;
        }

        .about-card h2,
        .about-section-head h2,
        .about-presence h2 {
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.05;
        }

        .about-section {
          margin-bottom: 58px;
        }

        .about-section-head {
          max-width: 900px;
          margin-bottom: 28px;
        }

        .leader-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .leader-card {
          overflow: hidden;
          cursor: pointer;
        }

        .leader-image {
          height: 330px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
        }

        .leader-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
          transition: 0.4s ease;
        }

        .leader-card:hover .leader-image img {
          transform: scale(1.05);
        }

        .leader-content {
          padding: 20px;
        }

        .leader-content span,
        .leader-modal-card span {
          display: block;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .leader-content h3,
        .leader-modal-card h3 {
          color: #fff;
          margin-top: 8px;
          font-size: 20px;
        }

        .leader-content small,
        .leader-modal-card small {
          display: block;
          margin-top: 12px;
          color: #f4d98a;
        }

        .about-presence {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          align-items: center;
          padding: 30px;
          margin-bottom: 40px;
        }

        .presence-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .presence-list div {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 16px;
          padding: 14px 16px;
          color: rgba(247, 240, 223, 0.78);
          background: rgba(255, 255, 255, 0.03);
        }

        .leader-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(10px);
        }

        .leader-modal-card {
          position: relative;
          width: min(520px, 100%);
          max-height: 90vh;
          overflow: auto;
          border: 1px solid rgba(217, 163, 49, 0.28);
          border-radius: 26px;
          padding: 24px;
          background: #070707;
          box-shadow: 0 40px 140px rgba(0, 0, 0, 0.7);
        }

        .leader-modal-card button {
          position: absolute;
          right: 18px;
          top: 18px;
          border: 1px solid rgba(217, 163, 49, 0.25);
          border-radius: 12px;
          padding: 8px 11px;
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .leader-modal-card img {
          width: 100%;
          height: 420px;
          object-fit: contain;
          border-radius: 20px;
          margin-bottom: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .leader-modal-card .role {
          color: #d9a331;
        }

        @keyframes aboutVisualCardFall {
          0% {
            opacity: 0;
            transform:
              translate3d(0, -118%, var(--depth))
              rotateX(58deg)
              rotateY(var(--rotate-start))
              rotateZ(var(--tilt-start))
              scale(0.92);
          }

          11% {
            opacity: 0.9;
          }

          48% {
            opacity: 0.86;
            transform:
              translate3d(var(--drift), 52%, 0)
              rotateX(8deg)
              rotateY(var(--rotate-mid))
              rotateZ(0deg)
              scale(1);
          }

          88% {
            opacity: 0.86;
          }

          100% {
            opacity: 0;
            transform:
              translate3d(calc(var(--drift) * -1), 168%, var(--depth))
              rotateX(-30deg)
              rotateY(var(--rotate-end))
              rotateZ(var(--tilt-end))
              scale(0.96);
          }
        }

        @keyframes aboutVisualOrbFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.62;
          }

          50% {
            transform: translate3d(18px, -18px, 0) scale(1.08);
            opacity: 0.95;
          }
        }

        @media (max-width: 1180px) {
          .about-hero,
          .about-grid,
          .about-presence {
            grid-template-columns: 1fr;
          }

          .leader-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .about-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .leader-grid,
          .presence-list {
            grid-template-columns: 1fr;
          }

          .about-hero-visual {
            min-height: 380px;
          }

          .about-visual-fall-card {
            width: 118px;
            height: 164px;
            border-radius: 18px;
          }

          .about-visual-fall-card img {
            padding: 10px;
          }

          .leader-image {
            height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-visual-fall-card,
          .about-visual-orb {
            animation: none !important;
          }

          .about-visual-fall-card {
            opacity: 0.72;
            transform: translate3d(0, 42%, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
          }
        }

      `}</style>
    </main>
  )
}