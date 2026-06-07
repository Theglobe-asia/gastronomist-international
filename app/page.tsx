// app/page.tsx
// @ts-nocheck
"use client"

import Button from "@/components/ui/Button"
import LatestStory from "@/components/blog/latest-story"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const FEATURES = [
  ["Global Culinary Network", "Connecting chefs, culinary leaders, and professionals from around the world."],
  ["Membership Recognition", "Official recognition for culinary excellence and professional achievement."],
  ["Leader Collaboration", "Building partnerships and creating opportunities through global culinary collaboration."],
  ["Worldwide Members", "A strong and diverse community with members across global hospitality markets."],
  ["Prestigious Benefits", "Certificates, medals, publications, and global recognition."],
  ["Events & Programs", "Global culinary events, forums, competitions, and educational programs."],
]

const BENEFITS = [
  ["Chef Recognition", "Honoring culinary professionals and their achievements.", img("/images/recognition.png")],
  ["Excellence Award", "Recognizing outstanding culinary excellence worldwide.", img("/images/cube-logo.png")],
  ["Membership Medal", "Symbol of honor, dedication, and professional excellence.", img("/images/medal.png")],
  ["Certificates & Badges", "Authentication of skills, expertise, and achievement.", img("/images/partnership.png")],
]

const JOURNEY = [
  ["1. Submit Application", "Complete the membership application with your professional details."],
  ["2. Application Review", "Our team reviews your application and professional background."],
  ["3. Membership Fee", "Secure your membership by completing the membership fee payment."],
  ["4. Membership Activation", "Your membership is activated and you become an official member."],
  ["5. Recognition & Benefits", "Receive your benefits and join our global culinary community."],
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
          {["Chef Marco Bianchi", "Chef Mei Lin", "Chef James Carter"].map((name) => (
            <article className="gi-testimonial" key={name}>
              <p>
                “Gastronomist International has opened doors to incredible opportunities
                and connected me with culinary leaders from around the world.”
              </p>
              <strong>{name}</strong>
              <span>Global Culinary Member</span>
              <small>★★★★★</small>
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
          grid-template-columns: 0.48fr 0.52fr;
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
          min-height: 360px;
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
          fill: rgba(230, 225, 212, 0.22);
          stroke: rgba(255, 255, 255, 0.12);
          stroke-width: 1;
        }

        .gi-route {
          fill: none;
          stroke: rgba(217, 163, 49, 0.66);
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
            min-height: 340px;
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
        }
      `}</style>
    </main>
  )
}

function GlobalMap({ large = false }) {
  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet" aria-label="Animated global culinary map">
        <g opacity="0.9">
          {Array.from({ length: 95 }).map((_, i) => (
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
          <path className="gi-continent" d="M150 180C195 130 275 130 330 175C375 212 410 230 465 226C525 222 560 174 625 176C700 179 770 218 820 275C860 320 840 370 780 390C710 413 655 385 595 378C525 370 485 405 410 410C330 415 255 388 205 340C150 288 110 225 150 180Z" />
          <path className="gi-continent" d="M700 105C760 72 850 95 882 150C910 198 890 262 835 282C780 302 730 270 710 220C692 174 660 128 700 105Z" />
          <path className="gi-continent" d="M210 350C258 318 330 330 360 378C385 420 350 470 292 474C238 478 195 442 190 397C186 374 193 360 210 350Z" />
          <path className="gi-continent" d="M535 260C575 248 615 274 622 315C630 360 600 410 560 420C520 430 490 392 498 350C505 312 502 274 535 260Z" />
          <path className="gi-continent" d="M775 350C825 330 880 345 900 390C920 438 885 475 830 465C780 456 745 380 775 350Z" />
        </g>

        <g>
          {[
            "M500 235 Q360 88 210 178",
            "M500 235 Q665 80 805 165",
            "M500 235 Q710 245 845 380",
            "M500 235 Q455 330 290 408",
            "M500 235 Q520 330 555 385",
            "M500 235 Q350 260 190 310",
            "M500 235 Q630 165 740 230",
          ].map((d) => (
            <g key={d}>
              <path className="gi-route-glow" d={d} />
              <path className="gi-route" d={d} />
            </g>
          ))}
        </g>

        <g>
          {[
            [500, 235],
            [210, 178],
            [805, 165],
            [845, 380],
            [290, 408],
            [555, 385],
            [190, 310],
            [740, 230],
            [600, 180],
            [420, 210],
            [680, 320],
          ].map(([cx, cy], i) => (
            <circle key={i} className="gi-node" cx={cx} cy={cy} r={i === 0 ? 8 : 5} />
          ))}
        </g>
      </svg>
    </div>
  )
}