// app/page.tsx
// @ts-nocheck
"use client"

import Button from "@/components/ui/Button"
import LatestStory from "@/components/blog/latest-story"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const FEATURES = [
  ["Global Culinary Network", "Connecting chefs, culinary leaders, and professionals across continents."],
  ["Membership Recognition", "Official recognition for culinary excellence, leadership, and achievement."],
  ["Leader Collaboration", "Creating international opportunities through culinary partnerships and exchange."],
  ["Worldwide Members", "A diverse professional community connected across global hospitality markets."],
  ["Prestigious Benefits", "Certificates, medals, publications, and international member visibility."],
  ["Events & Programs", "Culinary events, forums, competitions, and professional development programs."],
]

const BENEFITS = [
  ["Chef Recognition", "Honoring culinary professionals and their achievements.", img("/images/recognition.png")],
  ["Excellence Award", "Recognizing outstanding culinary excellence worldwide.", img("/images/cube-logo.png")],
  ["Membership Medal", "Symbol of honor, dedication, and professional excellence.", img("/images/medal.png")],
  ["Certificates & Badges", "Authentication of skills, expertise, and achievement.", img("/images/partnership.png")],
]

const JOURNEY = [
  ["1. Submit Application", "Complete the membership application with your professional details."],
  ["2. Application Review", "Our team reviews your profile, background, and culinary experience."],
  ["3. Membership Fee", "Secure your membership by completing the official membership fee."],
  ["4. Membership Activation", "Your membership is activated and confirmed as official."],
  ["5. Recognition & Benefits", "Receive your member benefits and join the global culinary community."],
]

const TESTIMONIALS = [
  {
    quote:
      "Being connected to an international culinary platform has helped me expand my professional network and strengthen the credibility of my restaurant group.",
    name: "Chef Alessio Romano",
    role: "Executive Chef & Owner",
    location: "Rome, Italy",
  },
  {
    quote:
      "The recognition gave my team and students a stronger sense of pride. It also opened meaningful conversations with chefs and educators outside my region.",
    name: "Chef Amina Benali",
    role: "Culinary Instructor",
    location: "Marrakech, Morocco",
  },
  {
    quote:
      "For chefs working internationally, visibility matters. This platform gives professionals a polished way to present achievement, discipline, and dedication.",
    name: "Chef Kenji Watanabe",
    role: "Hotel Executive Chef",
    location: "Tokyo, Japan",
  },
]

const MAP_COUNTRIES = [
  ["Canada", 205, 140],
  ["United States", 215, 210],
  ["Mexico", 175, 275],
  ["Brazil", 315, 365],
  ["United Kingdom", 465, 142],
  ["France", 485, 188],
  ["Spain", 468, 225],
  ["Italy", 515, 230],
  ["Germany", 532, 170],
  ["Russia", 695, 128],
  ["Nigeria", 525, 315],
  ["South Africa", 555, 430],
  ["UAE", 595, 260],
  ["India", 665, 290],
  ["China", 755, 235],
  ["Japan", 850, 220],
  ["Thailand", 735, 325],
  ["Singapore", 745, 365],
  ["Indonesia", 780, 395],
  ["Australia", 835, 440],
]

const MAP_NODES = [
  [500, 210],
  [215, 210],
  [315, 365],
  [465, 142],
  [485, 188],
  [532, 170],
  [595, 260],
  [665, 290],
  [755, 235],
  [850, 220],
  [735, 325],
  [745, 365],
  [835, 440],
  [555, 430],
  [525, 315],
]

const MAP_ROUTES = [
  "M500 210 Q360 82 215 210",
  "M500 210 Q405 245 315 365",
  "M500 210 Q468 172 465 142",
  "M500 210 Q485 200 485 188",
  "M500 210 Q520 175 532 170",
  "M500 210 Q560 230 595 260",
  "M500 210 Q595 250 665 290",
  "M500 210 Q635 150 755 235",
  "M500 210 Q705 122 850 220",
  "M500 210 Q660 315 735 325",
  "M500 210 Q675 365 745 365",
  "M500 210 Q710 390 835 440",
  "M500 210 Q520 330 555 430",
  "M500 210 Q505 290 525 315",
]

export default function Page() {
  return (
    <main className="gi-page">
      <section className="gi-hero">
        <header className="gi-nav">
          <div className="gi-brand">
            <img src={img("/images/cube-logo.png")} alt="Gastronomist International" />
            <div>
              <strong>GASTRONOMIST</strong>
              <span>INTERNATIONAL</span>
            </div>
          </div>

          <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/membership-fee">Membership</a>
            <a href="/chefs">Leaders</a>
            <a href="/press">Press</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/membership-fee" className="gi-apply">
            Apply for Membership
          </a>
        </header>

        <div className="gi-hero-grid">
          <div className="gi-copy">
            <span className="gi-eyebrow">Global Culinary Community</span>
            <h1>Uniting Culinary Excellence Around the World</h1>
            <div className="gi-line" />
            <p>
              We embrace the diversity of talent and expertise within the culinary community,
              particularly focusing on modern gastronomy techniques.
            </p>

            <div className="gi-actions">
              <a href="/membership-fee">
                <Button className="glass-btn glass-shine">Apply for Membership</Button>
              </a>
              <a href="/about">
                <Button className="glass-btn glass-btn-muted glass-shine">Discover More</Button>
              </a>
            </div>
          </div>

          <GlobalMap large />
        </div>
      </section>

      <section className="gi-feature-grid">
        {FEATURES.map(([title, desc]) => (
          <article className="gi-card gi-feature" key={title}>
            <div className="gi-icon">◎</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>

      <section className="gi-network gi-card">
        <div className="gi-network-copy">
          <span className="gi-eyebrow">Worldwide Community</span>
          <h2>A Global Network of Culinary Excellence</h2>
          <p>
            Our members represent a diverse and talented community of culinary professionals
            from every corner of the world.
          </p>

          <div className="gi-stats">
            <div><strong>25K+</strong><span>Members Worldwide</span></div>
            <div><strong>100+</strong><span>Countries Represented</span></div>
            <div><strong>200+</strong><span>Culinary Associations</span></div>
            <div><strong>6</strong><span>Continents Connected</span></div>
          </div>
        </div>

        <GlobalMap />
      </section>

      <section className="gi-section">
        <span className="gi-eyebrow center">Member Benefits & Recognition</span>
        <h2 className="gi-title">Honoring Excellence. Empowering Chefs.</h2>

        <div className="gi-benefits">
          {BENEFITS.map(([title, desc, image]) => (
            <article className="gi-card gi-benefit" key={title}>
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
        <span className="gi-eyebrow center">How It Works</span>
        <h2 className="gi-title">Your Journey to Membership</h2>

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

      <section className="gi-testimonials gi-card">
        <div>
          <span className="gi-eyebrow">Member Testimonials</span>
          <h2>Voices of Our Global Community</h2>
        </div>

        <div className="gi-testimonial-grid">
          {TESTIMONIALS.map((item) => (
            <article className="gi-testimonial" key={item.name}>
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
          background:
            radial-gradient(circle at 20% 10%, rgba(212, 163, 54, 0.14), transparent 30%),
            radial-gradient(circle at 85% 20%, rgba(255, 196, 77, 0.1), transparent 28%),
            linear-gradient(180deg, #05090b 0%, #081015 45%, #030506 100%);
          color: #f7f0df;
          overflow: hidden;
        }

        .gi-hero,
        .gi-feature-grid,
        .gi-network,
        .gi-section,
        .gi-testimonials {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-hero {
          padding: 26px 0 28px;
        }

        .gi-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 18px 20px;
          border: 1px solid rgba(212, 163, 54, 0.28);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.035);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(18px);
        }

        .gi-brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .gi-brand img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
        }

        .gi-brand strong {
          display: block;
          font-size: 20px;
          letter-spacing: 0.06em;
          color: white;
        }

        .gi-brand span {
          display: block;
          color: #d9a331;
          letter-spacing: 0.34em;
          font-size: 12px;
        }

        .gi-nav nav {
          display: flex;
          gap: 22px;
          font-size: 12px;
          text-transform: uppercase;
        }

        .gi-nav a {
          color: #f6edd9;
          text-decoration: none;
        }

        .gi-nav a:hover {
          color: #d9a331;
        }

        .gi-apply {
          border: 1px solid #d9a331;
          color: #d9a331 !important;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 12px;
          text-transform: uppercase;
        }

        .gi-hero-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 32px;
          align-items: center;
          padding: 70px 8px 34px;
        }

        .gi-copy h1,
        .gi-title,
        .gi-network h2,
        .gi-testimonials h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .gi-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
          color: white;
        }

        .gi-eyebrow {
          display: block;
          color: #d9a331;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .gi-eyebrow.center {
          text-align: center;
        }

        .gi-line {
          width: 190px;
          height: 1px;
          margin: 28px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
        }

        .gi-copy p,
        .gi-network p,
        .gi-feature p,
        .gi-benefit p,
        .gi-step p,
        .gi-testimonial p {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.7;
        }

        .gi-copy p {
          max-width: 560px;
          font-size: 16px;
        }

        .gi-actions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .gi-card {
          border: 1px solid rgba(212, 163, 54, 0.26);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
            rgba(3, 7, 9, 0.72);
          border-radius: 22px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 22px 80px rgba(0, 0, 0, 0.36);
          backdrop-filter: blur(18px);
        }

        .gi-feature-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
          padding-bottom: 34px;
        }

        .gi-feature {
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .gi-feature:hover,
        .gi-benefit:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 163, 54, 0.72);
        }

        .gi-icon {
          color: #d9a331;
          font-size: 48px;
          line-height: 1;
          margin-bottom: 18px;
        }

        .gi-feature h3,
        .gi-benefit h3 {
          color: #d9a331;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .gi-feature p {
          font-size: 13px;
        }

        .gi-network {
          display: grid;
          grid-template-columns: 0.45fr 0.55fr;
          gap: 24px;
          padding: 28px;
          margin-bottom: 46px;
        }

        .gi-network h2,
        .gi-testimonials h2,
        .gi-title {
          font-size: clamp(34px, 4vw, 56px);
          color: white;
          line-height: 1.05;
        }

        .gi-stats {
          margin-top: 28px;
          display: grid;
          gap: 12px;
          max-width: 260px;
        }

        .gi-stats div {
          border: 1px solid rgba(212, 163, 54, 0.26);
          border-radius: 16px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.04);
        }

        .gi-stats strong {
          display: block;
          color: #d9a331;
          font-size: 28px;
          line-height: 1;
        }

        .gi-stats span {
          display: block;
          color: rgba(247, 240, 223, 0.72);
          font-size: 12px;
          margin-top: 4px;
        }

        .gi-section {
          padding: 28px 0 52px;
        }

        .gi-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .gi-benefits {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .gi-benefit {
          padding: 18px;
          text-align: center;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .gi-benefit-img {
          height: 260px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(212, 163, 54, 0.25);
          background: radial-gradient(circle, rgba(212, 163, 54, 0.12), rgba(255, 255, 255, 0.02));
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
          position: relative;
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
          border: 1px solid rgba(212, 163, 54, 0.36);
          display: grid;
          place-items: center;
          color: #d9a331;
          font-size: 30px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 42px rgba(212, 163, 54, 0.12);
        }

        .gi-step h3 {
          color: white;
          font-size: 15px;
          margin-bottom: 8px;
        }

        .gi-step p {
          font-size: 13px;
        }

        .gi-testimonials {
          padding: 28px;
          margin-bottom: 40px;
        }

        .gi-testimonial-grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .gi-testimonial {
          border: 1px solid rgba(212, 163, 54, 0.22);
          border-radius: 18px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.035);
        }

        .gi-testimonial strong,
        .gi-testimonial span,
        .gi-testimonial small {
          display: block;
        }

        .gi-testimonial strong {
          color: white;
          margin-top: 18px;
        }

        .gi-testimonial span {
          color: rgba(247, 240, 223, 0.62);
          font-size: 12px;
          margin-top: 4px;
        }

        .gi-testimonial small {
          color: #d9a331;
          margin-top: 8px;
        }

        .gi-map {
          position: relative;
          min-height: 390px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(212, 163, 54, 0.22);
          background:
            radial-gradient(circle at 52% 42%, rgba(212, 163, 54, 0.22), transparent 12%),
            radial-gradient(circle at 18% 35%, rgba(212, 163, 54, 0.16), transparent 9%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015));
        }

        .gi-map.large {
          min-height: 560px;
          border: none;
          background: transparent;
        }

        .gi-map svg {
          width: 100%;
          height: 100%;
          min-height: inherit;
          display: block;
        }

        .gi-continent {
          fill: rgba(230, 225, 212, 0.2);
          stroke: rgba(255, 255, 255, 0.13);
          stroke-width: 1;
        }

        .gi-country-zone {
          fill: rgba(217, 163, 49, 0.08);
          stroke: rgba(217, 163, 49, 0.16);
          stroke-width: 0.8;
        }

        .gi-route {
          fill: none;
          stroke: rgba(217, 163, 49, 0.68);
          stroke-width: 1.2;
          stroke-dasharray: 8 10;
          animation: giDash 7s linear infinite;
        }

        .gi-route-glow {
          fill: none;
          stroke: rgba(217, 163, 49, 0.24);
          stroke-width: 8;
          filter: blur(8px);
        }

        .gi-node {
          fill: #f5b83f;
          filter: drop-shadow(0 0 10px rgba(245, 184, 63, 0.95));
          animation: giPulse 2.4s ease-in-out infinite;
        }

        .gi-grid-dot {
          fill: rgba(217, 163, 49, 0.18);
          animation: giTwinkle 4s ease-in-out infinite;
        }

        .gi-country-label {
          fill: rgba(255, 248, 226, 0.94);
          font-size: 13px;
          font-weight: 700;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.82);
          stroke-width: 4px;
          stroke-linejoin: round;
          pointer-events: none;
        }

        .gi-map.large .gi-country-label {
          font-size: 14px;
        }

        .gi-map-caption {
          position: absolute;
          left: 18px;
          top: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gi-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #25d366;
          box-shadow: 0 0 18px rgba(37, 211, 102, 0.9);
        }

        @keyframes giDash {
          to {
            stroke-dashoffset: -180;
          }
        }

        @keyframes giPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes giTwinkle {
          0%, 100% {
            opacity: 0.16;
          }
          50% {
            opacity: 0.58;
          }
        }

        @media (max-width: 1180px) {
          .gi-nav nav {
            display: none;
          }

          .gi-hero-grid,
          .gi-network {
            grid-template-columns: 1fr;
          }

          .gi-feature-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .gi-benefits {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-journey {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .gi-hero,
          .gi-feature-grid,
          .gi-network,
          .gi-section,
          .gi-testimonials {
            width: min(100% - 24px, 1440px);
          }

          .gi-nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .gi-apply {
            width: 100%;
            text-align: center;
          }

          .gi-hero-grid {
            padding-top: 42px;
          }

          .gi-map.large {
            min-height: 360px;
          }

          .gi-feature-grid,
          .gi-benefits,
          .gi-journey,
          .gi-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .gi-benefit-img {
            height: 220px;
          }

          .gi-country-label {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  )
}

function GlobalMap({ large = false }) {
  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <div className="gi-map-caption">
        <span className="gi-live-dot" />
        Live Global Map
      </div>

      <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet" aria-label="Animated global culinary map with country names">
        <g opacity="0.9">
          {Array.from({ length: 115 }).map((_, i) => (
            <circle
              key={i}
              className="gi-grid-dot"
              cx={(i * 97) % 980 + 10}
              cy={(i * 53) % 500 + 10}
              r={(i % 3) + 0.8}
              style={{ animationDelay: `${(i % 9) * 0.22}s` }}
            />
          ))}
        </g>

        <g>
          <path className="gi-continent" d="M120 150C170 90 270 92 340 145C390 183 410 230 470 224C525 218 560 170 625 175C710 182 780 220 835 282C875 328 850 380 785 398C715 417 665 388 600 380C525 370 490 408 410 412C320 417 240 390 185 340C125 285 75 205 120 150Z" />
          <path className="gi-continent" d="M690 95C765 55 870 92 900 160C930 225 890 286 830 300C765 315 720 270 705 225C690 180 645 120 690 95Z" />
          <path className="gi-continent" d="M205 350C258 312 330 330 365 380C392 420 352 473 292 476C235 480 190 442 188 398C186 374 190 360 205 350Z" />
          <path className="gi-continent" d="M532 250C578 238 620 272 626 318C633 365 602 415 558 423C515 431 488 392 498 348C505 310 498 265 532 250Z" />
          <path className="gi-continent" d="M770 345C828 322 890 345 910 392C930 443 888 478 828 468C775 459 738 380 770 345Z" />

          <ellipse className="gi-country-zone" cx="215" cy="210" rx="44" ry="26" />
          <ellipse className="gi-country-zone" cx="315" cy="365" rx="35" ry="42" />
          <ellipse className="gi-country-zone" cx="500" cy="210" rx="82" ry="58" />
          <ellipse className="gi-country-zone" cx="665" cy="290" rx="44" ry="36" />
          <ellipse className="gi-country-zone" cx="755" cy="235" rx="58" ry="38" />
          <ellipse className="gi-country-zone" cx="835" cy="440" rx="50" ry="30" />
        </g>

        <g>
          {MAP_ROUTES.map((d) => (
            <g key={d}>
              <path className="gi-route-glow" d={d} />
              <path className="gi-route" d={d} />
            </g>
          ))}
        </g>

        <g>
          {MAP_NODES.map(([cx, cy], i) => (
            <circle key={i} className="gi-node" cx={cx} cy={cy} r={i === 0 ? 8 : 5} />
          ))}
        </g>

        <g>
          {MAP_COUNTRIES.map(([name, x, y]) => (
            <text key={name} className="gi-country-label" x={x} y={y} textAnchor="middle">
              {name}
            </text>
          ))}
        </g>
      </svg>
    </div>
  )
}