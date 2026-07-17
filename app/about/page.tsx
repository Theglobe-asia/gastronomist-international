// app/about/page.tsx
// @ts-nocheck
"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Card from "@/components/ui/Card"

const leaders = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation, recognition, and professional connection.",
    img: "/images/chefalex.png?v=2",
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

const stats = [
  {
    value: "100+",
    label: "Countries Connected",
    trend: [42, 48, 44, 57, 61, 66, 63, 72, 78, 84, 88, 94],
  },
  {
    value: "25K+",
    label: "Culinary Professionals",
    trend: [18, 23, 27, 31, 36, 42, 48, 54, 61, 68, 74, 82],
  },
  {
    value: "200+",
    label: "Partner Associations",
    trend: [25, 30, 28, 36, 40, 46, 51, 55, 62, 70, 76, 83],
  },
  {
    value: "6",
    label: "Continents Represented",
    trend: [34, 38, 42, 48, 53, 57, 62, 67, 70, 76, 82, 88],
  },
]

const pillars = [
  {
    title: "Recognition",
    text: "Celebrating culinary professionals through official visibility, editorial features, and global recognition.",
  },
  {
    title: "Connection",
    text: "Building bridges between chefs, educators, hospitality leaders, consultants, and food innovators worldwide.",
  },
  {
    title: "Education",
    text: "Encouraging knowledge-sharing, modern gastronomy, professional growth, and higher culinary standards.",
  },
  {
    title: "Leadership",
    text: "Supporting regional representatives and global ambassadors who strengthen the culinary community.",
  },
]

function buildLivePath(values: number[], width: number, height: number, padding: number) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = Math.max(1, max - min)
  const xStep = (width - padding * 2) / Math.max(1, values.length - 1)

  return values
    .map((value, index) => {
      const x = padding + index * xStep
      const normalized = (value - min) / span
      const y = padding + (1 - normalized) * (height - padding * 2)

      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(" ")
}

function LiveStatsCard({
  value,
  label,
  trend,
  index,
}: {
  value: string
  label: string
  trend: number[]
  index: number
}) {
  const [liveTrend, setLiveTrend] = useState<number[]>(trend)

  useEffect(() => {
    setLiveTrend(trend)
  }, [trend])

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    const timer = window.setInterval(() => {
      setLiveTrend((currentTrend) => {
        const current = currentTrend.length ? currentTrend : trend
        const last = current[current.length - 1] ?? 50
        const previous = current[current.length - 2] ?? last
        const direction = last >= previous ? 1 : -1
        const wave = Math.sin(Date.now() / (620 + index * 90)) * (4 + index)
        const lift = direction * 1.2
        const pulse = Math.round((Math.random() - 0.32) * (7 + index))
        const next = Math.max(12, Math.min(98, Math.round(last + wave + lift + pulse)))

        return [...current.slice(1), next]
      })
    }, 820 + index * 130)

    return () => window.clearInterval(timer)
  }, [index, trend])

  const chartWidth = 260
  const chartHeight = 82
  const chartPadding = 10
  const linePath = useMemo(
    () => buildLivePath(liveTrend, chartWidth, chartHeight, chartPadding),
    [liveTrend]
  )

  const min = Math.min(...liveTrend)
  const max = Math.max(...liveTrend)
  const span = Math.max(1, max - min)
  const lastValue = liveTrend[liveTrend.length - 1] ?? 0
  const previousValue = liveTrend[liveTrend.length - 2] ?? lastValue
  const lastY = chartPadding + (1 - (lastValue - min) / span) * (chartHeight - chartPadding * 2)
  const directionText = lastValue >= previousValue ? "Rising" : "Tracking"

  return (
    <motion.article
      className="about-live-stat-card"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="about-live-stat-top">
        <div>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>

        <div className="about-live-badge">
          <i />
          Live
        </div>
      </div>

      <div className="about-live-chart" aria-label={`${label} live trend graph`}>
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img">
          {Array.from({ length: 4 }).map((_, gridIndex) => {
            const y = chartPadding + gridIndex * ((chartHeight - chartPadding * 2) / 3)

            return (
              <line
                key={gridIndex}
                x1={chartPadding}
                x2={chartWidth - chartPadding}
                y1={y}
                y2={y}
              />
            )
          })}

          <motion.path
            d={linePath}
            initial={false}
            animate={{ d: linePath }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />

          <motion.circle
            cx={chartWidth - chartPadding}
            cy={lastY}
            r="4"
            initial={false}
            animate={{ r: [3.5, 6.5, 3.5], opacity: [1, 0.45, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="about-live-stat-footer">
        <span>{directionText} signal</span>
        <span>{String(lastValue).padStart(2, "0")}%</span>
      </div>
    </motion.article>
  )
}

function LiveStatsPanel() {
  return (
    <section className="about-stats about-live-stats" aria-label="Live global statistics">
      {stats.map((item, index) => (
        <LiveStatsCard
          key={item.label}
          value={item.value}
          label={item.label}
          trend={item.trend}
          index={index}
        />
      ))}
    </section>
  )
}

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
          <img src="/images/recognition.png" alt="Gastronomist International recognition" />
          <div className="about-visual-overlay" />
          <div className="about-visual-card">
            <strong>Global Culinary Community</strong>
            <span>Modern gastronomy, professional recognition, and worldwide connection.</span>
          </div>
        </div>
      </section>

      <LiveStatsPanel />

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
          <span className="about-eyebrow">What We Stand For</span>
          <h2>Built for the global culinary community.</h2>
        </div>

        <div className="about-pillars">
          {pillars.map((item) => (
            <article key={item.title}>
              <div className="about-pillar-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
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
        .about-pillars p,
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
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
        }

        .about-hero-visual img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: contain;
          opacity: 0.9;
          padding: 18px;
        }

        .about-visual-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.72), transparent 55%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.72), transparent 55%);
        }

        .about-visual-card {
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

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 34px;
        }

        .about-stats article,
        .about-card,
        .about-pillars article,
        .leader-card,
        .about-presence {
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

        .about-stats article {
          padding: 22px;
          text-align: center;
        }

        .about-stats strong {
          display: block;
          color: #d9a331;
          font-size: 34px;
          line-height: 1;
        }

        .about-stats span {
          display: block;
          margin-top: 8px;
          color: rgba(247, 240, 223, 0.68);
          font-size: 13px;
        }

        .about-live-stats {
          align-items: stretch;
        }

        .about-live-stat-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 22px;
          padding: 18px;
          background:
            radial-gradient(360px 160px at 20% 0%, rgba(217, 163, 49, 0.16), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.058), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 80px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(18px);
        }

        .about-live-stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 10%,
            rgba(255, 238, 177, 0.12) 46%,
            transparent 72%
          );
          transform: translateX(-90%);
          animation: aboutLiveStatShine 5.4s ease-in-out infinite;
          pointer-events: none;
        }

        .about-live-stat-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          text-align: left;
        }

        .about-live-stat-top strong {
          display: block;
          color: #d9a331;
          font-size: 34px;
          line-height: 1;
          text-shadow: 0 0 18px rgba(217, 163, 49, 0.18);
        }

        .about-live-stat-top span {
          display: block;
          margin-top: 8px;
          color: rgba(247, 240, 223, 0.7);
          font-size: 13px;
        }

        .about-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(217, 163, 49, 0.3);
          border-radius: 999px;
          padding: 6px 9px;
          background: rgba(217, 163, 49, 0.08);
          color: #f4d98a;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .about-live-badge i {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #d9a331;
          box-shadow: 0 0 16px rgba(217, 163, 49, 0.9);
          animation: aboutLiveBlink 1.1s ease-in-out infinite;
        }

        .about-live-chart {
          position: relative;
          z-index: 2;
          margin-top: 18px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.16);
          border-radius: 16px;
          background:
            radial-gradient(circle at 80% 30%, rgba(217, 163, 49, 0.08), transparent 38%),
            rgba(0, 0, 0, 0.18);
        }

        .about-live-chart svg {
          display: block;
          width: 100%;
          height: 92px;
        }

        .about-live-chart line {
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 1;
        }

        .about-live-chart path {
          fill: none;
          stroke: #d9a331;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 8px rgba(217, 163, 49, 0.36));
        }

        .about-live-chart circle {
          fill: #f7f0df;
          stroke: #d9a331;
          stroke-width: 2;
          filter: drop-shadow(0 0 12px rgba(217, 163, 49, 0.72));
        }

        .about-live-stat-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          color: rgba(247, 240, 223, 0.62);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .about-live-stat-footer span:last-child {
          color: #f4d98a;
          font-weight: 900;
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

        .about-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .about-pillars article {
          padding: 24px;
          transition: 0.25s ease;
        }

        .about-pillars article:hover,
        .leader-card:hover {
          border-color: rgba(217, 163, 49, 0.68);
        }

        .about-pillar-icon {
          color: #d9a331;
          font-size: 34px;
          margin-bottom: 14px;
        }

        .about-pillars h3 {
          color: #fff;
          margin-bottom: 10px;
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

        @keyframes aboutLiveBlink {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.86);
          }
          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes aboutLiveStatShine {
          0%, 28% {
            opacity: 0;
            transform: translateX(-90%);
          }
          42% {
            opacity: 1;
          }
          62%, 100% {
            opacity: 0;
            transform: translateX(90%);
          }
        }

        @media (max-width: 1180px) {
          .about-hero,
          .about-grid,
          .about-presence {
            grid-template-columns: 1fr;
          }

          .about-stats,
          .about-pillars,
          .leader-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .about-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .about-stats,
          .about-pillars,
          .leader-grid,
          .presence-list {
            grid-template-columns: 1fr;
          }

          .about-hero-visual,
          .about-hero-visual img {
            min-height: 380px;
          }

          .about-live-stat-card {
            padding: 18px 16px;
          }

          .about-live-stat-top {
            gap: 10px;
          }

          .about-live-chart svg {
            height: 86px;
          }

          .leader-image {
            height: 300px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-live-badge i,
          .about-live-stat-card::before {
            animation: none !important;
          }

          .about-live-chart path,
          .about-live-chart circle {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
}