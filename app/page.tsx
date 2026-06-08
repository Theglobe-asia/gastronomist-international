// app/page.tsx
// @ts-nocheck
"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps"
import LatestStory from "@/components/blog/latest-story"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

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

const HUB = {
  name: "Global Hub",
  coordinates: [12.4964, 41.9028],
}

const CITIES = [
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "United States", coordinates: [-98.5795, 39.8283] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Spain", coordinates: [-3.7492, 40.4637] },
  { name: "Italy", coordinates: [12.4964, 41.9028] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Thailand", coordinates: [100.9925, 15.87] },
  { name: "China", coordinates: [104.1954, 35.8617] },
  { name: "Japan", coordinates: [138.2529, 36.2048] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
  { name: "South Africa", coordinates: [22.9375, -30.5595] },
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
            radial-gradient(circle at 52% 42%, rgba(217, 163, 49, 0.16), transparent 19%),
            radial-gradient(circle at 50% 50%, rgba(255, 230, 160, 0.06), transparent 42%),
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

        .gi-map-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 49% 45%, rgba(245, 184, 63, 0.18), transparent 10%),
            radial-gradient(circle at 26% 45%, rgba(245, 184, 63, 0.12), transparent 8%),
            radial-gradient(circle at 74% 46%, rgba(245, 184, 63, 0.11), transparent 10%);
          pointer-events: none;
        }

        .gi-map-frame {
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .gi-map.large .gi-map-frame {
          inset: -70px -180px -50px -100px;
        }

        .gi-map svg {
          width: 100%;
          height: 100%;
          min-height: inherit;
          display: block;
        }

        .gi-country {
          fill: rgba(145, 143, 134, 0.48);
          stroke: rgba(255, 230, 160, 0.2);
          stroke-width: 0.45;
          outline: none;
          filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.55));
          transition: fill 0.22s ease, stroke 0.22s ease;
        }

        .gi-country:hover {
          fill: rgba(217, 163, 49, 0.36);
          stroke: rgba(255, 230, 160, 0.55);
        }

        .gi-route-line {
          stroke: rgba(217, 163, 49, 0.72);
          stroke-width: 1.1;
          stroke-dasharray: 6 8;
          animation: giDash 7s linear infinite;
          pointer-events: none;
        }

        .gi-route-glow {
          stroke: rgba(217, 163, 49, 0.18);
          stroke-width: 7;
          filter: blur(5px);
          pointer-events: none;
        }

        .gi-marker-ring {
          fill: rgba(217, 163, 49, 0.12);
          stroke: rgba(245, 184, 63, 0.62);
          stroke-width: 1.2;
          animation: giPulseRing 2.5s ease-in-out infinite;
        }

        .gi-marker-dot {
          fill: #f5b83f;
          filter: drop-shadow(0 0 12px rgba(245, 184, 63, 1));
        }

        .gi-marker-label {
          fill: rgba(255, 248, 226, 0.96);
          font-size: 8px;
          font-weight: 800;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.88);
          stroke-width: 3px;
          pointer-events: none;
          text-anchor: middle;
        }

        .gi-map.large .gi-marker-label {
          font-size: 9px;
        }

        @keyframes giDash {
          to {
            stroke-dashoffset: -160;
          }
        }

        @keyframes giPulseRing {
          0%, 100% {
            r: 5;
            opacity: 0.45;
          }
          50% {
            r: 11;
            opacity: 0.95;
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

          .gi-map.large .gi-map-frame {
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

          .gi-map.large .gi-map-frame,
          .gi-map-frame {
            inset: -35px -70px -25px -55px;
          }

          .gi-benefit-img {
            height: 230px;
          }

          .gi-marker-label {
            font-size: 6px;
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
        Live Global Map
      </div>

      <div className="gi-map-glow" />

      <div className="gi-map-frame">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: large ? 205 : 138,
            center: [18, 18],
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="gi-country"
                />
              ))
            }
          </Geographies>

          {CITIES.map((city) => (
            <g key={`route-${city.name}`}>
              <Line
                from={HUB.coordinates}
                to={city.coordinates}
                className="gi-route-glow"
              />
              <Line
                from={HUB.coordinates}
                to={city.coordinates}
                className="gi-route-line"
              />
            </g>
          ))}

          {CITIES.map((city) => (
            <Marker key={city.name} coordinates={city.coordinates}>
              <circle className="gi-marker-ring" r={5} />
              <circle className="gi-marker-dot" r={2.8} />
              <text y={-8} className="gi-marker-label">
                {city.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  )
}