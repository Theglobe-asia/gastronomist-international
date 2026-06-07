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

const MAP_POINTS = [
  ["Canada", 210, 130],
  ["United States", 220, 210],
  ["Mexico", 185, 280],
  ["Brazil", 330, 370],
  ["United Kingdom", 465, 150],
  ["France", 490, 195],
  ["Spain", 465, 230],
  ["Italy", 520, 230],
  ["Germany", 535, 170],
  ["UAE", 610, 260],
  ["India", 675, 295],
  ["Thailand", 735, 330],
  ["China", 765, 235],
  ["Japan", 860, 220],
  ["Australia", 845, 435],
  ["South Africa", 555, 430],
]

const ROUTES = [
  "M505 208 Q350 75 220 210",
  "M505 208 Q400 280 330 370",
  "M505 208 Q480 160 465 150",
  "M505 208 Q490 195 490 195",
  "M505 208 Q535 170 535 170",
  "M505 208 Q565 235 610 260",
  "M505 208 Q610 270 675 295",
  "M505 208 Q650 175 765 235",
  "M505 208 Q720 120 860 220",
  "M505 208 Q690 315 735 330",
  "M505 208 Q725 390 845 435",
  "M505 208 Q535 330 555 430",
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

        <PremiumWorldMap large />
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
            <div>
              <strong>25K+</strong>
              <span>Members Worldwide</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Countries Represented</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Culinary Associations</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Continents Connected</span>
            </div>
          </div>
        </div>

        <PremiumWorldMap />
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

        .gi-hero,
        .gi-feature-row,
        .gi-network-panel,
        .gi-section,
        .gi-testimonials {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-hero {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 34px;
          align-items: center;
          padding: 78px 0 34px;
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
            radial-gradient(circle at 55% 38%, rgba(217, 163, 49, 0.18), transparent 18%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -80px 120px rgba(0, 0, 0, 0.48),
            0 28px 90px rgba(0, 0, 0, 0.38);
        }

        .gi-map.large {
          min-height: 560px;
          border: none;
          background: transparent;
          box-shadow: none;
        }

        .gi-map-caption {
          position: absolute;
          top: 16px;
          left: 18px;
          z-index: 5;
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

        .gi-map svg {
          width: 100%;
          height: 100%;
          min-height: inherit;
          display: block;
        }

        .gi-map-bg {
          fill: rgba(255, 255, 255, 0.018);
        }

        .gi-ocean-line {
          fill: none;
          stroke: rgba(217, 163, 49, 0.08);
          stroke-width: 1;
        }

        .gi-land {
          fill: url(#landGradient);
          stroke: rgba(255, 230, 160, 0.18);
          stroke-width: 1.1;
          filter: drop-shadow(0 12px 18px rgba(0, 0, 0, 0.65));
        }

        .gi-land-shadow {
          fill: rgba(0, 0, 0, 0.28);
          filter: blur(8px);
        }

        .gi-country-line {
          fill: none;
          stroke: rgba(255, 230, 160, 0.10);
          stroke-width: 0.8;
        }

        .gi-route {
          fill: none;
          stroke: rgba(217, 163, 49, 0.74);
          stroke-width: 1.15;
          stroke-dasharray: 7 9;
          animation: giDash 7s linear infinite;
        }

        .gi-route-glow {
          fill: none;
          stroke: rgba(217, 163, 49, 0.24);
          stroke-width: 8;
          filter: blur(8px);
        }

        .gi-node-halo {
          fill: rgba(217, 163, 49, 0.16);
          stroke: rgba(217, 163, 49, 0.42);
          stroke-width: 1;
          animation: giPulseHalo 2.8s ease-in-out infinite;
        }

        .gi-node {
          fill: #f5b83f;
          filter: drop-shadow(0 0 11px rgba(245, 184, 63, 1));
          animation: giPulse 2.4s ease-in-out infinite;
        }

        .gi-city-label {
          fill: rgba(255, 248, 226, 0.92);
          font-size: 12px;
          font-weight: 800;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.85);
          stroke-width: 4px;
          stroke-linejoin: round;
          pointer-events: none;
        }

        .gi-map.large .gi-city-label {
          font-size: 13px;
        }

        .gi-map-dot {
          fill: rgba(217, 163, 49, 0.16);
          animation: giTwinkle 4s ease-in-out infinite;
        }

        @keyframes giDash {
          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes giPulse {
          0%, 100% {
            opacity: 0.86;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes giPulseHalo {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.7);
          }
        }

        @keyframes giTwinkle {
          0%, 100% {
            opacity: 0.16;
          }
          50% {
            opacity: 0.55;
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

        @media (max-width: 1180px) {
          .gi-hero,
          .gi-network-panel {
            grid-template-columns: 1fr;
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

          .gi-map.large,
          .gi-map {
            min-height: 360px;
          }

          .gi-city-label {
            font-size: 9px;
          }

          .gi-benefit-img {
            height: 230px;
          }
        }
      `}</style>
    </main>
  )
}

function PremiumWorldMap({ large = false }) {
  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <div className="gi-map-caption">
        <span className="gi-live-dot" />
        Global Network Map
      </div>

      <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet" aria-label="Premium global culinary network map">
        <defs>
          <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(230,225,212,0.34)" />
            <stop offset="45%" stopColor="rgba(150,145,132,0.24)" />
            <stop offset="100%" stopColor="rgba(70,68,62,0.28)" />
          </linearGradient>
        </defs>

        <rect className="gi-map-bg" width="1000" height="520" rx="24" />

        <g opacity="0.9">
          {Array.from({ length: 150 }).map((_, i) => (
            <circle
              key={i}
              className="gi-map-dot"
              cx={(i * 83) % 980 + 10}
              cy={(i * 47) % 500 + 10}
              r={(i % 3) + 0.6}
              style={{ animationDelay: `${(i % 11) * 0.18}s` }}
            />
          ))}
        </g>

        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <ellipse
              key={i}
              className="gi-ocean-line"
              cx="510"
              cy="260"
              rx={160 + i * 70}
              ry={70 + i * 32}
            />
          ))}
        </g>

        <g transform="translate(8 10)">
          <path className="gi-land-shadow" d="M120 130C165 84 245 72 310 110C350 134 370 174 420 170C455 168 474 142 505 136C565 124 620 148 675 174C740 205 820 220 875 282C915 326 895 382 830 398C760 416 690 390 620 384C548 378 505 410 420 414C330 419 250 392 190 342C132 294 72 185 120 130Z" />
          <path className="gi-land" d="M116 124C162 78 246 68 314 108C356 132 372 171 422 168C458 166 476 140 510 134C568 124 628 148 682 174C742 203 824 220 878 278C918 322 898 378 832 395C764 412 692 386 622 380C548 374 505 406 424 410C330 415 252 388 192 338C132 288 72 180 116 124Z" />
          <path className="gi-land" d="M680 86C748 48 858 78 900 142C943 208 903 284 828 300C770 313 720 282 700 228C684 184 638 112 680 86Z" />
          <path className="gi-land" d="M205 350C258 314 330 330 365 380C392 420 352 472 292 476C235 480 190 442 188 398C186 374 190 360 205 350Z" />
          <path className="gi-land" d="M532 250C578 238 620 272 626 318C633 365 602 415 558 423C515 431 488 392 498 348C505 310 498 265 532 250Z" />
          <path className="gi-land" d="M770 345C828 322 890 345 910 392C930 443 888 478 828 468C775 459 738 380 770 345Z" />

          <path className="gi-country-line" d="M170 155C230 178 290 178 345 152" />
          <path className="gi-country-line" d="M185 240C250 226 315 238 372 280" />
          <path className="gi-country-line" d="M440 170C494 192 548 190 598 170" />
          <path className="gi-country-line" d="M585 230C650 246 705 242 760 218" />
          <path className="gi-country-line" d="M690 120C745 154 805 162 870 150" />
          <path className="gi-country-line" d="M500 310C535 338 575 348 616 340" />
        </g>

        <g>
          {ROUTES.map((d) => (
            <g key={d}>
              <path className="gi-route-glow" d={d} />
              <path className="gi-route" d={d} />
            </g>
          ))}
        </g>

        <g>
          {MAP_POINTS.map(([name, cx, cy], i) => (
            <g key={name}>
              <circle className="gi-node-halo" cx={cx} cy={cy} r={i === 4 ? 11 : 8} />
              <circle className="gi-node" cx={cx} cy={cy} r={i === 4 ? 6 : 4.5} />
              <text className="gi-city-label" x={cx} y={cy - 14} textAnchor="middle">
                {name}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}