// app/page.tsx
// @ts-nocheck
"use client"

import LatestStory from "@/components/blog/latest-story"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const FEATURES = [
  ["Global Culinary Network", "Connecting chefs, culinary leaders, educators, and hospitality professionals worldwide."],
  ["Professional Recognition", "A platform for honoring culinary excellence, leadership, and achievement."],
  ["Leader Collaboration", "Creating international connections through shared knowledge, programs, and partnerships."],
  ["Worldwide Community", "A growing global presence across countries, continents, and culinary cultures."],
]

const BENEFITS = [
  ["Chef Recognition", "Honoring culinary professionals and their achievements.", img("/images/recognition.png")],
  ["Excellence Award", "Recognizing outstanding culinary excellence worldwide.", img("/images/cube-logo.png")],
  ["Membership Medal", "Symbol of honor, dedication, and professional excellence.", img("/images/medal.png")],
  ["Certificates & Badges", "Authentication of skills, expertise, and achievement.", img("/images/partnership.png")],
]

const JOURNEY = [
  ["1. Application", "Submit your professional details through the floating application widget."],
  ["2. Review", "Your background and culinary profile are reviewed by the organization."],
  ["3. Fee Completion", "After submission, the official membership fee page becomes available."],
  ["4. Activation", "Your membership is confirmed and prepared for recognition."],
  ["5. Recognition", "Receive official benefits and become part of the global culinary community."],
]

const TESTIMONIALS = [
  {
    quote:
      "The platform gives chefs a more professional way to present international recognition and connect with serious culinary leaders.",
    name: "Chef Alessio Romano",
    role: "Executive Chef & Owner",
    location: "Rome, Italy",
  },
  {
    quote:
      "Recognition from a global culinary community brings credibility, pride, and meaningful visibility to professionals in education and hospitality.",
    name: "Chef Amina Benali",
    role: "Culinary Instructor",
    location: "Marrakech, Morocco",
  },
  {
    quote:
      "For chefs working across hotels and restaurants, international affiliation matters. This gives the recognition a polished and professional home.",
    name: "Chef Kenji Watanabe",
    role: "Hotel Executive Chef",
    location: "Tokyo, Japan",
  },
]

export default function Page() {
  return (
    <main className="gi-page">
      <section className="gi-hero">
        <div className="gi-hero-copy">
          <span className="gi-eyebrow">Global Culinary Community</span>
          <h1>
            Uniting Culinary <span>Excellence</span> Around the World
          </h1>
          <div className="gi-divider" />
          <p>
            Gastronomist International embraces the diversity of talent and expertise
            within the culinary community, with a focus on modern gastronomy,
            professional recognition, and global connection.
          </p>

          <div className="gi-hero-actions">
            <a href="#global-network">Discover More</a>
            <a href="#recognition">View Recognition</a>
          </div>
        </div>

        <div className="gi-map-stage">
          <GlobalNetworkMap large />
        </div>
      </section>

      <section className="gi-feature-row">
        {FEATURES.map(([title, desc]) => (
          <article className="gi-feature-card" key={title}>
            <div className="gi-feature-icon">◎</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>

      <section id="global-network" className="gi-network-panel">
        <div className="gi-network-info">
          <span className="gi-eyebrow">Worldwide Members</span>
          <h2>A Global Network of Culinary Excellence</h2>
          <p>
            A refined international platform for chefs, hospitality leaders,
            educators, and gastronomy professionals connected through recognition,
            collaboration, and shared standards of excellence.
          </p>

          <div className="gi-stat-grid">
            <div><strong>25K+</strong><span>Members Worldwide</span></div>
            <div><strong>100+</strong><span>Countries Represented</span></div>
            <div><strong>200+</strong><span>Culinary Associations</span></div>
            <div><strong>6</strong><span>Continents Connected</span></div>
          </div>
        </div>

        <GlobalNetworkMap />
      </section>

      <section id="recognition" className="gi-section">
        <span className="gi-eyebrow gi-center">Member Benefits & Recognition</span>
        <h2 className="gi-section-title">Honoring Excellence. Empowering Chefs.</h2>

        <div className="gi-benefit-grid">
          {BENEFITS.map(([title, desc, image]) => (
            <article className="gi-benefit-card" key={title}>
              <div className="gi-benefit-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gi-section">
        <span className="gi-eyebrow gi-center">How It Works</span>
        <h2 className="gi-section-title">Your Journey to Recognition</h2>

        <div className="gi-journey">
          {JOURNEY.map(([title, desc]) => (
            <article className="gi-step" key={title}>
              <div className="gi-step-icon">✦</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gi-testimonials">
        <div className="gi-testimonial-head">
          <div>
            <span className="gi-eyebrow">Global Voices</span>
            <h2>Professional Recognition Across Borders</h2>
          </div>
        </div>

        <div className="gi-testimonial-grid">
          {TESTIMONIALS.map((item) => (
            <article className="gi-testimonial-card" key={item.name}>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
              <small>{item.location}</small>
            </article>
          ))}
        </div>
      </section>

      <LatestStory />

      <style jsx global>{`
        .gi-page {
          min-height: 100vh;
          color: #f7f0df;
          overflow: hidden;
        }

        .gi-hero {
          width: min(1800px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-feature-row,
        .gi-network-panel,
        .gi-section,
        .gi-testimonials {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-hero {
          display: grid;
          grid-template-columns: minmax(340px, 0.42fr) minmax(840px, 1.58fr);
          gap: 20px;
          align-items: center;
          padding: 78px 0 34px;
          overflow: visible;
        }

        .gi-map-stage {
          position: relative;
          min-width: 0;
          overflow: visible;
        }

        .gi-hero-copy {
          position: relative;
          z-index: 4;
        }

        .gi-hero-copy h1,
        .gi-network-info h2,
        .gi-section-title,
        .gi-testimonial-head h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .gi-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .gi-hero-copy h1 span {
          color: #d9a331;
        }

        .gi-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gi-center {
          text-align: center;
        }

        .gi-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .gi-divider::after {
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

        .gi-hero-copy p,
        .gi-network-info p,
        .gi-feature-card p,
        .gi-benefit-card p,
        .gi-step p,
        .gi-testimonial-card p {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .gi-hero-copy p {
          max-width: 560px;
          font-size: 16px;
        }

        .gi-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .gi-hero-actions a {
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

        .gi-hero-actions a:hover {
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
          transform: translateY(-2px);
        }

        .gi-feature-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 22px 0 44px;
        }

        .gi-feature-card,
        .gi-network-panel,
        .gi-benefit-card,
        .gi-testimonials {
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

        .gi-feature-card {
          padding: 28px 20px;
          text-align: center;
          transition: 0.25s ease;
        }

        .gi-feature-card:hover,
        .gi-benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(217, 163, 49, 0.68);
        }

        .gi-feature-icon {
          color: #d9a331;
          font-size: 46px;
          line-height: 1;
          margin-bottom: 18px;
          text-shadow: 0 0 24px rgba(217, 163, 49, 0.32);
        }

        .gi-feature-card h3,
        .gi-benefit-card h3 {
          color: #d9a331;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .gi-feature-card p {
          font-size: 13px;
        }

        .gi-network-panel {
          display: grid;
          grid-template-columns: 0.38fr 0.62fr;
          gap: 24px;
          padding: 28px;
          margin-bottom: 52px;
        }

        .gi-network-info h2,
        .gi-testimonial-head h2,
        .gi-section-title {
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.05;
        }

        .gi-stat-grid {
          display: grid;
          gap: 12px;
          margin-top: 28px;
          max-width: 270px;
        }

        .gi-stat-grid div {
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 16px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.035);
        }

        .gi-stat-grid strong {
          display: block;
          color: #d9a331;
          font-size: 30px;
          line-height: 1;
        }

        .gi-stat-grid span {
          display: block;
          margin-top: 4px;
          color: rgba(247, 240, 223, 0.68);
          font-size: 12px;
        }

        .gi-section {
          padding: 30px 0 54px;
        }

        .gi-section-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .gi-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .gi-benefit-card {
          padding: 18px;
          text-align: center;
          transition: 0.25s ease;
        }

        .gi-benefit-img {
          height: 270px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          background: radial-gradient(circle, rgba(217, 163, 49, 0.12), rgba(255, 255, 255, 0.02));
          margin-bottom: 18px;
        }

        .gi-benefit-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gi-journey {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .gi-step {
          text-align: center;
          padding: 10px;
        }

        .gi-step-icon {
          width: 86px;
          height: 86px;
          margin: 0 auto 16px;
          border-radius: 999px;
          border: 1px solid rgba(217, 163, 49, 0.36);
          display: grid;
          place-items: center;
          color: #d9a331;
          font-size: 30px;
          background: rgba(255, 255, 255, 0.035);
          box-shadow: 0 0 42px rgba(217, 163, 49, 0.13);
        }

        .gi-step h3 {
          color: #fff;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .gi-step p {
          font-size: 13px;
        }

        .gi-testimonials {
          padding: 28px;
          margin-bottom: 44px;
        }

        .gi-testimonial-grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .gi-testimonial-card {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 18px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.03);
        }

        .gi-testimonial-card strong,
        .gi-testimonial-card span,
        .gi-testimonial-card small {
          display: block;
        }

        .gi-testimonial-card strong {
          color: #fff;
          margin-top: 18px;
        }

        .gi-testimonial-card span {
          color: rgba(247, 240, 223, 0.64);
          font-size: 12px;
          margin-top: 4px;
        }

        .gi-testimonial-card small {
          color: #d9a331;
          margin-top: 8px;
        }

        .gi-map {
          position: relative;
          min-height: 430px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          background:
            radial-gradient(circle at 50% 45%, rgba(217, 163, 49, 0.18), transparent 22%),
            radial-gradient(circle at 50% 50%, rgba(255, 230, 160, 0.07), transparent 46%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -80px 120px rgba(0, 0, 0, 0.48),
            0 28px 90px rgba(0, 0, 0, 0.38);
        }

        .gi-map.large {
          min-height: 760px;
          border: none;
          background: transparent;
          box-shadow: none;
          overflow: visible;
        }

        .gi-map-caption {
          position: absolute;
          top: 16px;
          left: 18px;
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gi-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #f5b83f;
          box-shadow: 0 0 20px rgba(245, 184, 63, 0.9);
          animation: giBlink 1.5s ease-in-out infinite;
        }

        .gi-globe-scene {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          place-items: center;
          overflow: visible;
          pointer-events: none;
        }

        .gi-map.large .gi-globe-scene {
          inset: -70px -180px -50px -100px;
        }

        .gi-globe-ambient {
          position: absolute;
          width: min(86%, 720px);
          aspect-ratio: 1;
          border-radius: 999px;
          background:
            radial-gradient(circle at 42% 35%, rgba(245, 184, 63, 0.18), transparent 12%),
            radial-gradient(circle at 62% 55%, rgba(217, 163, 49, 0.12), transparent 18%),
            radial-gradient(circle, rgba(245, 184, 63, 0.13), transparent 62%);
          filter: blur(8px);
          opacity: 0.95;
          animation: giGlobeBreath 5.5s ease-in-out infinite;
        }

        .gi-map.large .gi-globe-ambient {
          width: min(96%, 920px);
        }

        .gi-orbit-field {
          position: absolute;
          width: min(118%, 940px);
          aspect-ratio: 1;
          border-radius: 999px;
          transform-style: preserve-3d;
        }

        .gi-map.large .gi-orbit-field {
          width: min(128%, 1180px);
        }

        .gi-orbit {
          position: absolute;
          inset: 50%;
          width: 82%;
          height: 30%;
          border: 1px solid rgba(217, 163, 49, 0.36);
          border-left-color: rgba(245, 184, 63, 0.08);
          border-bottom-color: rgba(245, 184, 63, 0.12);
          border-radius: 50%;
          transform: translate(-50%, -50%) rotate(var(--orbit-rotate)) skewX(-12deg);
          box-shadow:
            0 0 18px rgba(217, 163, 49, 0.12),
            inset 0 0 18px rgba(217, 163, 49, 0.08);
          animation: giOrbitPulse 4.8s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .gi-orbit.o1 {
          --orbit-rotate: 8deg;
          --delay: 0s;
        }

        .gi-orbit.o2 {
          --orbit-rotate: -24deg;
          --delay: -1.4s;
          width: 96%;
          height: 36%;
          opacity: 0.78;
        }

        .gi-orbit.o3 {
          --orbit-rotate: 42deg;
          --delay: -2.2s;
          width: 108%;
          height: 40%;
          opacity: 0.58;
        }

        .gi-plane-orbit {
          position: absolute;
          inset: 50%;
          width: var(--size);
          height: var(--height);
          transform: translate(-50%, -50%) rotate(var(--angle));
          border-radius: 999px;
          animation: giPlaneOrbit var(--speed) linear infinite;
          animation-delay: var(--delay);
        }

        .gi-plane-orbit::before {
          content: "✈";
          position: absolute;
          left: 100%;
          top: 50%;
          color: #fff8e2;
          font-size: var(--plane);
          line-height: 1;
          text-shadow:
            0 0 10px rgba(255, 255, 255, 0.7),
            0 0 18px rgba(217, 163, 49, 0.55);
          transform: translate(-50%, -50%) rotate(12deg);
        }

        .gi-plane-orbit.p1 {
          --size: 72%;
          --height: 28%;
          --angle: 7deg;
          --speed: 14s;
          --delay: -1s;
          --plane: 26px;
        }

        .gi-plane-orbit.p2 {
          --size: 88%;
          --height: 34%;
          --angle: -28deg;
          --speed: 19s;
          --delay: -5s;
          --plane: 22px;
        }

        .gi-plane-orbit.p3 {
          --size: 106%;
          --height: 38%;
          --angle: 43deg;
          --speed: 23s;
          --delay: -9s;
          --plane: 18px;
          opacity: 0.75;
        }

        .gi-plane-orbit.p4 {
          --size: 58%;
          --height: 22%;
          --angle: -5deg;
          --speed: 12s;
          --delay: -6s;
          --plane: 20px;
          opacity: 0.9;
        }

        .gi-globe {
          position: relative;
          width: min(76%, 600px);
          aspect-ratio: 1;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255, 230, 160, 0.18);
          background:
            radial-gradient(circle at 35% 28%, rgba(255, 242, 190, 0.12), transparent 12%),
            radial-gradient(circle at 50% 50%, rgba(217, 163, 49, 0.11), transparent 46%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.2) 62%, rgba(0, 0, 0, 0.62) 100%);
          box-shadow:
            inset -38px -30px 80px rgba(0, 0, 0, 0.58),
            inset 22px 16px 42px rgba(255, 245, 204, 0.06),
            0 0 50px rgba(217, 163, 49, 0.14),
            0 0 160px rgba(0, 0, 0, 0.64);
        }

        .gi-map.large .gi-globe {
          width: min(82%, 790px);
        }

        .gi-globe::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0 8.8%,
              rgba(255, 235, 180, 0.14) 9%,
              transparent 9.25%
            ),
            repeating-linear-gradient(
              0deg,
              transparent 0 8.8%,
              rgba(255, 235, 180, 0.12) 9%,
              transparent 9.25%
            );
          opacity: 0.48;
          mix-blend-mode: screen;
        }

        .gi-globe::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            radial-gradient(circle at 32% 31%, transparent 0 31%, rgba(0, 0, 0, 0.14) 55%, rgba(0, 0, 0, 0.64) 100%),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 34%, rgba(0, 0, 0, 0.4) 100%);
          pointer-events: none;
        }

        .gi-globe-map {
          position: absolute;
          inset: 0;
          width: 220%;
          height: 100%;
          background:
            radial-gradient(ellipse at 12% 32%, rgba(244, 217, 138, 0.34) 0 2.8%, transparent 3.1%),
            radial-gradient(ellipse at 18% 39%, rgba(244, 217, 138, 0.3) 0 2.5%, transparent 2.9%),
            radial-gradient(ellipse at 25% 45%, rgba(244, 217, 138, 0.25) 0 2%, transparent 2.3%),
            radial-gradient(ellipse at 38% 35%, rgba(244, 217, 138, 0.26) 0 3.2%, transparent 3.5%),
            radial-gradient(ellipse at 45% 50%, rgba(244, 217, 138, 0.22) 0 3.4%, transparent 3.8%),
            radial-gradient(ellipse at 56% 42%, rgba(244, 217, 138, 0.28) 0 3%, transparent 3.4%),
            radial-gradient(ellipse at 68% 56%, rgba(244, 217, 138, 0.18) 0 2.8%, transparent 3.2%),
            radial-gradient(ellipse at 78% 34%, rgba(244, 217, 138, 0.22) 0 3.4%, transparent 3.8%),
            radial-gradient(ellipse at 91% 62%, rgba(244, 217, 138, 0.26) 0 3.2%, transparent 3.6%),
            linear-gradient(90deg, transparent, rgba(217, 163, 49, 0.06), transparent);
          opacity: 0.82;
          filter: blur(0.15px);
          animation: giWorldDrift 32s linear infinite;
        }

        .gi-globe-lines {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            repeating-radial-gradient(circle at 50% 50%, transparent 0 9.8%, rgba(255, 230, 160, 0.13) 10%, transparent 10.35%),
            linear-gradient(90deg, transparent 49.7%, rgba(255, 230, 160, 0.16) 50%, transparent 50.3%),
            linear-gradient(0deg, transparent 49.7%, rgba(255, 230, 160, 0.12) 50%, transparent 50.3%);
          opacity: 0.48;
          mix-blend-mode: screen;
        }

        .gi-globe-points {
          position: absolute;
          inset: 0;
          border-radius: inherit;
        }

        .gi-globe-points span {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #f5b83f;
          box-shadow:
            0 0 0 5px rgba(245, 184, 63, 0.12),
            0 0 20px rgba(245, 184, 63, 0.95);
          animation: giPointBlink 2.4s ease-in-out infinite;
          animation-delay: var(--d);
        }

        .gi-globe-points span:nth-child(1) {
          left: 34%;
          top: 38%;
          --d: 0s;
        }

        .gi-globe-points span:nth-child(2) {
          left: 47%;
          top: 45%;
          --d: -0.7s;
        }

        .gi-globe-points span:nth-child(3) {
          left: 60%;
          top: 39%;
          --d: -1.2s;
        }

        .gi-globe-points span:nth-child(4) {
          left: 52%;
          top: 58%;
          --d: -1.7s;
        }

        .gi-globe-points span:nth-child(5) {
          left: 69%;
          top: 54%;
          --d: -2.1s;
        }

        @keyframes giWorldDrift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes giPlaneOrbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--angle)) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(var(--angle)) rotate(360deg);
          }
        }

        @keyframes giOrbitPulse {
          0%, 100% {
            opacity: 0.38;
            box-shadow:
              0 0 18px rgba(217, 163, 49, 0.12),
              inset 0 0 18px rgba(217, 163, 49, 0.08);
          }
          50% {
            opacity: 0.95;
            box-shadow:
              0 0 28px rgba(217, 163, 49, 0.2),
              inset 0 0 26px rgba(217, 163, 49, 0.13);
          }
        }

        @keyframes giGlobeBreath {
          0%, 100% {
            transform: scale(0.98);
            opacity: 0.72;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }

        @keyframes giPointBlink {
          0%, 100% {
            transform: scale(0.72);
            opacity: 0.42;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes giBlink {
          0%, 100% {
            opacity: 0.45;
          }
          50% {
            opacity: 1;
          }
        }

        @media (max-width: 1280px) {
          .gi-hero {
            grid-template-columns: minmax(320px, 0.5fr) minmax(620px, 1.5fr);
          }

          .gi-map.large {
            min-height: 620px;
          }

          .gi-map.large .gi-globe-scene {
            inset: -50px -110px -35px -70px;
          }
        }

        @media (max-width: 1180px) {
          .gi-hero,
          .gi-network-panel {
            grid-template-columns: 1fr;
          }

          .gi-map-stage {
            min-height: 560px;
          }

          .gi-feature-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-journey {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-testimonial-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .gi-hero,
          .gi-feature-row,
          .gi-network-panel,
          .gi-section,
          .gi-testimonials {
            width: min(100% - 24px, 1440px);
          }

          .gi-hero {
            padding-top: 46px;
          }

          .gi-feature-row,
          .gi-benefit-grid,
          .gi-journey {
            grid-template-columns: 1fr;
          }

          .gi-map-stage {
            min-height: 430px;
          }

          .gi-map.large,
          .gi-map {
            min-height: 420px;
          }

          .gi-map.large .gi-globe-scene,
          .gi-globe-scene {
            inset: -35px -70px -25px -55px;
          }

          .gi-globe {
            width: min(82%, 360px);
          }

          .gi-map.large .gi-globe {
            width: min(88%, 420px);
          }

          .gi-orbit-field {
            width: min(122%, 520px);
          }

          .gi-plane-orbit.p3,
          .gi-plane-orbit.p4 {
            display: none;
          }

          .gi-benefit-img {
            height: 230px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gi-live-dot,
          .gi-orbit,
          .gi-plane-orbit,
          .gi-globe-ambient,
          .gi-globe-map,
          .gi-globe-points span {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  )
}

function GlobalNetworkMap({ large = false }) {
  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <div className="gi-map-caption">
        <span className="gi-live-dot" />
        Live Global Network
      </div>

      <div className="gi-globe-scene" aria-hidden="true">
        <div className="gi-globe-ambient" />

        <div className="gi-orbit-field">
          <span className="gi-orbit o1" />
          <span className="gi-orbit o2" />
          <span className="gi-orbit o3" />

          <span className="gi-plane-orbit p1" />
          <span className="gi-plane-orbit p2" />
          <span className="gi-plane-orbit p3" />
          <span className="gi-plane-orbit p4" />
        </div>

        <div className="gi-globe">
          <div className="gi-globe-map" />
          <div className="gi-globe-lines" />
          <div className="gi-globe-points">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}