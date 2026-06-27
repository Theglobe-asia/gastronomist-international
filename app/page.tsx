// app/page.tsx
// @ts-nocheck
"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
  Sphere,
} from "react-simple-maps"
import LatestStory from "@/components/blog/latest-story"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const REAL_AIRPLANE_SRC = "/images/real-airplane.png"

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

const FLIGHT_ROUTES = [
  { id: "f1", from: "Canada", to: "United Kingdom", duration: 18, offset: 0.03 },
  { id: "f2", from: "United States", to: "France", duration: 16, offset: 0.14 },
  { id: "f3", from: "Mexico", to: "Spain", duration: 20, offset: 0.26 },
  { id: "f4", from: "Brazil", to: "South Africa", duration: 22, offset: 0.41 },
  { id: "f5", from: "Italy", to: "UAE", duration: 13, offset: 0.54 },
  { id: "f6", from: "Germany", to: "India", duration: 17, offset: 0.62 },
  { id: "f7", from: "UAE", to: "Thailand", duration: 15, offset: 0.71 },
  { id: "f8", from: "India", to: "Japan", duration: 19, offset: 0.82 },
  { id: "f9", from: "Thailand", to: "Australia", duration: 21, offset: 0.91 },
  { id: "f10", from: "China", to: "United States", duration: 24, offset: 0.18 },
  { id: "f11", from: "Japan", to: "Canada", duration: 23, offset: 0.37 },
  { id: "f12", from: "South Africa", to: "Italy", duration: 20, offset: 0.49 },
  { id: "f13", from: "United Kingdom", to: "Germany", duration: 11, offset: 0.57 },
  { id: "f14", from: "France", to: "UAE", duration: 14, offset: 0.68 },
  { id: "f15", from: "Australia", to: "Japan", duration: 20, offset: 0.76 },
  { id: "f16", from: "Brazil", to: "United States", duration: 19, offset: 0.85 },
]

function normalizeLongitude(value: number) {
  let lon = value
  while (lon > 180) lon -= 360
  while (lon < -180) lon += 360
  return lon
}

function shortestLongitudeDelta(fromLon: number, toLon: number) {
  let diff = toLon - fromLon
  while (diff > 180) diff -= 360
  while (diff < -180) diff += 360
  return diff
}

function interpolateCoordinates(from: number[], to: number[], t: number) {
  const lon = normalizeLongitude(from[0] + shortestLongitudeDelta(from[0], to[0]) * t)
  const lat = from[1] + (to[1] - from[1]) * t
  return [lon, lat]
}

function getPlaneBearing(current: number[], next: number[]) {
  const dx = shortestLongitudeDelta(current[0], next[0])
  const dy = next[1] - current[1]
  return (Math.atan2(dx, -dy) * 180) / Math.PI
}

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
            radial-gradient(circle at 50% 45%, rgba(217, 163, 49, 0.13), transparent 15%),
            radial-gradient(circle at 50% 50%, rgba(255, 230, 160, 0.065), transparent 42%),
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
          z-index: 9;
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
            radial-gradient(circle at 50% 47%, rgba(245, 184, 63, 0.13), transparent 19%),
            radial-gradient(circle at 28% 42%, rgba(245, 184, 63, 0.075), transparent 12%),
            radial-gradient(circle at 75% 56%, rgba(245, 184, 63, 0.065), transparent 13%);
          pointer-events: none;
        }

        .gi-earth-stage {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          place-items: center;
          overflow: visible;
        }

        .gi-map.large .gi-earth-stage {
          inset: -70px -180px -50px -100px;
        }

        .gi-earth-shell {
          position: relative;
          width: min(86%, 680px);
          aspect-ratio: 1;
          border-radius: 999px;
          display: grid;
          place-items: center;
          filter:
            drop-shadow(0 34px 90px rgba(0, 0, 0, 0.58))
            drop-shadow(0 0 42px rgba(217, 163, 49, 0.12));
        }

        .gi-map.large .gi-earth-shell {
          width: min(92%, 860px);
        }

        .gi-earth-aura {
          position: absolute;
          inset: 5%;
          border-radius: 999px;
          background:
            radial-gradient(circle at 42% 35%, rgba(245, 184, 63, 0.22), transparent 12%),
            radial-gradient(circle at 58% 56%, rgba(217, 163, 49, 0.15), transparent 18%),
            radial-gradient(circle, rgba(245, 184, 63, 0.15), transparent 62%);
          filter: blur(16px);
          animation: giAuraPulse 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .gi-earth-light {
          position: absolute;
          inset: -4%;
          border-radius: 999px;
          background:
            radial-gradient(circle at 31% 25%, rgba(255, 248, 221, 0.18), transparent 13%),
            radial-gradient(circle at 44% 38%, rgba(217, 163, 49, 0.07), transparent 28%);
          mix-blend-mode: screen;
          z-index: 7;
          pointer-events: none;
        }

        .gi-earth-shadow {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background:
            radial-gradient(circle at 32% 28%, transparent 0 31%, rgba(0, 0, 0, 0.14) 55%, rgba(0, 0, 0, 0.66) 100%),
            linear-gradient(125deg, rgba(255, 255, 255, 0.08), transparent 34%, rgba(0, 0, 0, 0.45) 100%);
          box-shadow:
            inset -66px -42px 118px rgba(0, 0, 0, 0.62),
            inset 24px 14px 54px rgba(255, 245, 204, 0.08),
            0 0 48px rgba(217, 163, 49, 0.15);
          pointer-events: none;
          z-index: 6;
        }

        .gi-earth-rim {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px solid rgba(255, 230, 160, 0.22);
          box-shadow:
            0 0 44px rgba(217, 163, 49, 0.13),
            inset 0 0 28px rgba(255, 230, 160, 0.06),
            inset 0 0 1px rgba(255, 255, 255, 0.24);
          pointer-events: none;
          z-index: 8;
        }

        .gi-map-svg {
          position: relative;
          z-index: 4;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 999px;
        }

        .gi-sphere {
          stroke: rgba(255, 230, 160, 0.18);
          stroke-width: 0.7;
        }

        .gi-graticule {
          fill: none;
          stroke: rgba(255, 238, 190, 0.15);
          stroke-width: 0.45;
        }

        .gi-country {
          fill: rgba(165, 171, 181, 0.62);
          stroke: rgba(255, 242, 205, 0.24);
          stroke-width: 0.38;
          outline: none;
          transition: fill 0.22s ease, stroke 0.22s ease;
        }

        .gi-country:hover {
          fill: rgba(217, 163, 49, 0.46);
          stroke: rgba(255, 238, 190, 0.56);
        }

        .gi-route-glow {
          stroke: rgba(217, 163, 49, 0.16);
          stroke-width: 4.2;
          fill: none;
          filter: blur(2.8px);
          pointer-events: none;
        }

        .gi-route-line {
          stroke: rgba(245, 184, 63, 0.68);
          stroke-width: 0.82;
          stroke-dasharray: 2.2 4.4;
          fill: none;
          animation: giDash 5.4s linear infinite;
          pointer-events: none;
        }

        .gi-city-ring {
          fill: rgba(217, 163, 49, 0.06);
          stroke: rgba(245, 184, 63, 0.48);
          stroke-width: 0.7;
        }

        .gi-city-dot {
          fill: rgba(255, 248, 226, 0.98);
          filter: drop-shadow(0 0 6px rgba(245, 184, 63, 0.95));
        }

        .gi-marker-ring {
          fill: rgba(217, 163, 49, 0.08);
          stroke: rgba(245, 184, 63, 0.78);
          stroke-width: 0.8;
          animation: giPulseRing 2.25s ease-in-out infinite;
        }

        .gi-marker-dot {
          fill: #f5b83f;
          filter: drop-shadow(0 0 8px rgba(245, 184, 63, 1));
        }

        .gi-marker-label {
          fill: rgba(255, 248, 226, 0.96);
          font-size: 6px;
          font-weight: 800;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.92);
          stroke-width: 2.5px;
          pointer-events: none;
          text-anchor: middle;
          letter-spacing: 0.03em;
        }

        .gi-map.large .gi-marker-label {
          font-size: 7px;
        }

        .gi-plane-group {
          pointer-events: none;
        }

        .gi-plane-aura {
          fill: rgba(245, 184, 63, 0.2);
          opacity: 0.92;
        }

        .gi-plane-trail {
          fill: none;
          stroke: rgba(245, 184, 63, 0.5);
          stroke-width: 1.1;
          stroke-linecap: round;
          opacity: 0.88;
        }

        .gi-real-plane {
          pointer-events: none;
          image-rendering: auto;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes giDash {
          to {
            stroke-dashoffset: -90;
          }
        }

        @keyframes giPulseRing {
          0%, 100% {
            r: 2.2;
            opacity: 0.4;
          }
          50% {
            r: 5.2;
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

        @keyframes giAuraPulse {
          0%, 100% {
            transform: scale(0.985);
            opacity: 0.72;
          }
          50% {
            transform: scale(1.035);
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

          .gi-map.large .gi-earth-stage {
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

          .gi-map.large .gi-earth-stage,
          .gi-earth-stage {
            inset: -35px -70px -25px -55px;
          }

          .gi-earth-shell {
            width: min(92%, 420px);
          }

          .gi-benefit-img {
            height: 230px;
          }

          .gi-marker-label {
            font-size: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gi-live-dot,
          .gi-marker-ring,
          .gi-earth-aura,
          .gi-route-line {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  )
}

function GlobalNetworkMap({ large = false }) {
  const [scene, setScene] = useState({
    rotation: -24,
    time: 0,
  })

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    let raf = 0
    let last = performance.now()
    const start = performance.now()

    const animate = (now: number) => {
      const delta = now - last

      if (delta >= 33) {
        const elapsed = (now - start) / 1000
        setScene({
          time: elapsed,
          rotation: ((elapsed * 5.4) % 360) - 24,
        })
        last = now
      }

      raf = window.requestAnimationFrame(animate)
    }

    raf = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(raf)
  }, [])

  const cityMap = useMemo(() => {
    const map: Record<string, number[]> = {}
    for (const city of CITIES) {
      map[city.name] = city.coordinates
    }
    map[HUB.name] = HUB.coordinates
    return map
  }, [])

  const activeFlights = useMemo(() => {
    return FLIGHT_ROUTES.map((route) => {
      const from = cityMap[route.from]
      const to = cityMap[route.to]
      if (!from || !to) return null

      const progress = ((scene.time / route.duration) + route.offset) % 1
      const nextProgress = (((scene.time + 0.15) / route.duration) + route.offset) % 1

      const current = interpolateCoordinates(from, to, progress)
      const next = interpolateCoordinates(from, to, nextProgress)
      const bearing = getPlaneBearing(current, next)

      return {
        ...route,
        from,
        to,
        current,
        bearing,
      }
    }).filter(Boolean)
  }, [scene.time, cityMap])

  const scale = large ? 310 : 205
  const markerRadius = large ? 1.8 : 1.4
  const planeWidth = large ? 20 : 15
  const planeHeight = large ? 32 : 24
  const sphereGradientId = large ? "giEarthOceanLarge" : "giEarthOceanSmall"
  const planeGlowId = large ? "giRealPlaneGlowLarge" : "giRealPlaneGlowSmall"

  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <div className="gi-map-caption">
        <span className="gi-live-dot" />
        Live Global Earth
      </div>

      <div className="gi-map-glow" />

      <div className="gi-earth-stage">
        <div className="gi-earth-shell">
          <div className="gi-earth-aura" />

          <ComposableMap
            className="gi-map-svg"
            projection="geoOrthographic"
            projectionConfig={{
              scale,
              center: [0, 0],
              rotate: [-scene.rotation, -18, 0],
            }}
          >
            <defs>
              <radialGradient id={sphereGradientId} cx="38%" cy="30%" r="72%">
                <stop offset="0%" stopColor="#2d3847" />
                <stop offset="42%" stopColor="#111821" />
                <stop offset="74%" stopColor="#07090d" />
                <stop offset="100%" stopColor="#020304" />
              </radialGradient>

              <filter id={planeGlowId} x="-120%" y="-120%" width="340%" height="340%">
                <feDropShadow dx="0" dy="0" stdDeviation="1.6" floodColor="#f5b83f" floodOpacity="0.78" />
                <feDropShadow dx="0" dy="0" stdDeviation="3.6" floodColor="#f5b83f" floodOpacity="0.32" />
              </filter>
            </defs>

            <Sphere className="gi-sphere" fill={`url(#${sphereGradientId})`} />
            <Graticule className="gi-graticule" />

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

            {FLIGHT_ROUTES.map((route) => {
              const from = cityMap[route.from]
              const to = cityMap[route.to]
              if (!from || !to) return null

              return (
                <g key={`route-${route.id}`}>
                  <Line from={from} to={to} className="gi-route-glow" />
                  <Line from={from} to={to} className="gi-route-line" />
                </g>
              )
            })}

            <Marker coordinates={HUB.coordinates}>
              <circle className="gi-marker-ring" r={markerRadius + 1.5} />
              <circle className="gi-marker-dot" r={markerRadius + 0.75} />
              <text y={-7} className="gi-marker-label">
                {HUB.name}
              </text>
            </Marker>

            {CITIES.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <circle className="gi-city-ring" r={markerRadius + 0.3} />
                <circle className="gi-city-dot" r={markerRadius * 0.52} />
              </Marker>
            ))}

            {activeFlights.map((flight) => (
              <Marker key={`plane-${flight.id}`} coordinates={flight.current}>
                <g className="gi-plane-group" transform={`rotate(${flight.bearing})`}>
                  <ellipse className="gi-plane-aura" cx="0" cy="8" rx="3.5" ry="8" />
                  <path className="gi-plane-trail" d="M0 8 L0 19" />
                  <image
                    className="gi-real-plane"
                    href={REAL_AIRPLANE_SRC}
                    x={planeWidth / -2}
                    y={planeHeight / -2}
                    width={planeWidth}
                    height={planeHeight}
                    preserveAspectRatio="xMidYMid meet"
                    filter={`url(#${planeGlowId})`}
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          <div className="gi-earth-shadow" />
          <div className="gi-earth-light" />
          <div className="gi-earth-rim" />
        </div>
      </div>
    </div>
  )
}