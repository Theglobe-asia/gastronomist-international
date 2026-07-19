// app/chefs/page.tsx
"use client"

import React, { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import type { IconType } from "react-icons"
import {
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineTrophy,
} from "react-icons/hi2"
import { activeMembersTotal, chefDirectoryMembers } from "@/components/data/gastronomist-members"

type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>

type SectionMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"section"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>

type ArticleMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"article"> & MotionProps> &
    React.RefAttributes<HTMLElement>
>

const MotionDiv = motion.div as DivMotion
const MotionSection = motion.section as SectionMotion
const MotionArticle = motion.article as ArticleMotion

const chefs = chefDirectoryMembers

const regions = ["All", "Asia", "Europe", "Americas", "Oceania", "GCC — Middle East"] as const
type Region = (typeof regions)[number]

const stats: {
  label: string
  value: string
  icon: IconType
}[] = [
  { label: "Active Members", value: `${activeMembersTotal}`, icon: HiOutlineUserGroup },
  { label: "Global Coverage", value: "Worldwide", icon: HiOutlineGlobeAlt },
  { label: "Recognition", value: "Official", icon: HiOutlineTrophy },
  { label: "Modern Gastronomy", value: "Innovation", icon: HiOutlineSparkles },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

export default function ChefsPage() {
  const [selectedChef, setSelectedChef] = useState<(typeof chefs)[number] | null>(null)
  const [region, setRegion] = useState<Region>("All")

  const filtered = useMemo(() => {
    if (region === "All") return chefs
    return chefs.filter((chef) => chef.region === region)
  }, [region])

  return (
    <main className="chefs-page">
      <section className="chefs-hero">
        <div className="chefs-hero-copy">
          <span className="chefs-eyebrow">Global Members • Editorial Directory</span>
          <h1>
            Our <span>Chefs</span>
          </h1>
          <div className="chefs-divider" />
          <p>
            Meet culinary professionals worldwide — connected through recognition,
            collaboration, and modern gastronomy.
          </p>

          <div className="chefs-hero-links">
            <a href="/about">About Gastronomist</a>
            <a href="/press">Press Release</a>
          </div>
        </div>

        <div className="chefs-hero-visual">
          <div className="chefs-intro-glow" aria-hidden="true" />

          <div className="chefs-intro-stage" aria-hidden="true">
            {chefs.slice(0, 6).map((chef, index) => (
              <div
                key={`chef-intro-${chef.name}`}
                className={`chefs-intro-card chefs-intro-card-${index + 1}`}
              >
                <img src={chef.img} alt="" />
                <span>{chef.region}</span>
              </div>
            ))}
          </div>

          <div className="chefs-hero-overlay" />
          <div className="chefs-hero-card">
            <strong>International Culinary Directory</strong>
            <span>
              A curated platform for chefs, leaders, educators, and gastronomy
              professionals across regions.
            </span>
          </div>
        </div>
      </section>

      <section className="chefs-dashboard">
        <div className="chefs-dashboard-main">
          <span className="chefs-eyebrow">Member Dashboard</span>
          <h2>Browse chefs by region.</h2>
          <p>
            Presented in a premium editorial format, each profile reflects professional
            recognition, global visibility, and culinary contribution.
          </p>

          <div className="chefs-stats">
            {stats.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.label}>
                  <Icon className="chefs-stat-icon" aria-hidden />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              )
            })}
          </div>
        </div>

        <div className="chefs-filter-card">
          <span className="chefs-eyebrow">Filter by Region</span>
          <p>A quick editorial filter for the global member directory.</p>

          <div className="chefs-filter-list">
            {regions.map((item) => {
              const active = region === item

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRegion(item)}
                  className={active ? "active" : ""}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="chefs-section">
        <div className="chefs-section-head">
          <span className="chefs-eyebrow">Leadership & Ambassadors</span>
          <h2>Professional members across the global culinary community.</h2>
          <p>
            Click a profile to view the full editorial card. All images are shown in
            full view without cropping.
          </p>
        </div>

        <MotionSection
          className="chefs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filtered.map((chef) => (
            <MotionArticle
              key={chef.name}
              variants={cardVariants}
              className="chef-card"
              onClick={() => setSelectedChef(chef)}
            >
              <div className="chef-image">
                <img src={chef.img} alt={chef.name} />
              </div>

              <div className="chef-content">
                <div className="chef-meta">
                  <span>{chef.region}</span>
                  <small>{chef.specialty}</small>
                </div>

                <h3>{chef.name}</h3>
                <p className="chef-role">{chef.role}</p>
                <p>{chef.blurb}</p>
              </div>
            </MotionArticle>
          ))}
        </MotionSection>
      </section>

      <section className="chefs-notes">
        <article>
          <span className="chefs-eyebrow">Editorial Mission</span>
          <h2>Recognition, connection, and global professionalism.</h2>
          <p>
            “We embrace the diversity of talent and expertise within the culinary
            community — modern techniques, global recognition, and real collaboration.”
          </p>
        </article>

        <div className="chefs-note-list">
          <div>
            <strong>Standards</strong>
            <span>A consistent platform for recognition and global professionalism.</span>
          </div>

          <div>
            <strong>Community</strong>
            <span>Members worldwide connected through shared purpose and craft.</span>
          </div>

          <div>
            <strong>Innovation</strong>
            <span>Modern gastronomy techniques and education presented with clarity.</span>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedChef && (
          <>
            <MotionDiv
              className="chef-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedChef(null)}
            />

            <MotionDiv
              className="chef-modal-wrap"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22 }}
            >
              <div className="chef-modal">
                <button
                  type="button"
                  onClick={() => setSelectedChef(null)}
                  aria-label="Close"
                  className="chef-modal-close"
                >
                  ✕
                </button>

                <div className="chef-modal-image">
                  <img src={selectedChef.img} alt={selectedChef.name} />
                </div>

                <div className="chef-modal-content">
                  <span className="chefs-eyebrow">Leader Profile • {selectedChef.region}</span>
                  <h2>{selectedChef.name}</h2>
                  <p className="chef-modal-role">{selectedChef.role}</p>
                  <p>{selectedChef.blurb}</p>

                  <div className="chef-modal-grid">
                    <div>
                      <small>Region</small>
                      <strong>{selectedChef.region}</strong>
                    </div>

                    <div>
                      <small>Focus</small>
                      <strong>{selectedChef.specialty}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .chefs-page {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0 40px;
          color: #f7f0df;
        }

        .chefs-hero {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 34px;
          align-items: center;
          margin-bottom: 34px;
        }

        .chefs-hero-copy h1,
        .chefs-dashboard-main h2,
        .chefs-section-head h2,
        .chefs-notes h2,
        .chef-modal-content h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .chefs-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .chefs-hero-copy h1 span {
          color: #d9a331;
        }

        .chefs-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .chefs-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .chefs-divider::after {
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

        .chefs-hero-copy p,
        .chefs-dashboard-main p,
        .chefs-filter-card p,
        .chefs-section-head p,
        .chef-content p,
        .chefs-notes p,
        .chefs-note-list span,
        .chef-modal-content p {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .chefs-hero-copy p {
          max-width: 620px;
          font-size: 16px;
        }

        .chefs-hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .chefs-hero-links a {
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

        .chefs-hero-links a:hover {
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
          transform: translateY(-2px);
        }

        .chefs-hero-visual {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 28px;
          background:
            radial-gradient(680px 280px at 72% 18%, rgba(217, 163, 49, 0.15), transparent 62%),
            radial-gradient(520px 220px at 20% 78%, rgba(244, 217, 138, 0.08), transparent 64%),
            rgba(255, 255, 255, 0.03);
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
          isolation: isolate;
        }

        .chefs-intro-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(115deg, transparent 8%, rgba(244, 217, 138, 0.09) 42%, transparent 72%),
            radial-gradient(circle at 52% 36%, rgba(217, 163, 49, 0.16), transparent 34%);
          animation: chefsIntroGlow 6.8s ease-in-out infinite;
          pointer-events: none;
        }

        .chefs-intro-stage {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .chefs-intro-card {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.3);
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.024)),
            rgba(0, 0, 0, 0.34);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 24px 70px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(14px);
          animation: chefsIntroFloat 7.5s ease-in-out infinite;
          will-change: transform;
        }

        .chefs-intro-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px 12px 34px;
          opacity: 0.95;
          filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.34));
        }

        .chefs-intro-card span {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          padding: 6px 8px;
          color: #f4d98a;
          background: rgba(0, 0, 0, 0.56);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
        }

        .chefs-intro-card-1 {
          left: 7%;
          top: 8%;
          width: 31%;
          height: 43%;
          animation-delay: -1s;
        }

        .chefs-intro-card-2 {
          right: 8%;
          top: 9%;
          width: 29%;
          height: 40%;
          animation-delay: -2.6s;
        }

        .chefs-intro-card-3 {
          left: 34%;
          top: 27%;
          width: 34%;
          height: 47%;
          z-index: 3;
          animation-delay: -4.4s;
        }

        .chefs-intro-card-4 {
          left: 9%;
          bottom: 21%;
          width: 25%;
          height: 34%;
          animation-delay: -5.7s;
        }

        .chefs-intro-card-5 {
          right: 7%;
          bottom: 21%;
          width: 25%;
          height: 34%;
          animation-delay: -3.2s;
        }

        .chefs-intro-card-6 {
          left: 57%;
          top: 39%;
          width: 23%;
          height: 31%;
          opacity: 0.88;
          animation-delay: -6.5s;
        }

        .chefs-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.76), transparent 56%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.78), transparent 58%),
            radial-gradient(circle at 72% 34%, transparent 0%, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.55) 100%);
        }

        .chefs-hero-card {
          position: absolute;
          z-index: 5;
          left: 24px;
          right: 24px;
          bottom: 24px;
          border: 1px solid rgba(217, 163, 49, 0.24);
          border-radius: 20px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.68);
          backdrop-filter: blur(16px);
        }

        .chefs-hero-card strong,
        .chefs-hero-card span {
          display: block;
        }

        .chefs-hero-card strong {
          color: #fff;
          font-size: 18px;
        }

        .chefs-hero-card span {
          margin-top: 6px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 14px;
          line-height: 1.6;
        }

        .chefs-dashboard {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 22px;
          margin-bottom: 54px;
        }

        .chefs-dashboard-main,
        .chefs-filter-card,
        .chef-card,
        .chefs-notes,
        .chefs-note-list div,
        .chef-modal {
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

        .chefs-dashboard-main,
        .chefs-filter-card {
          padding: 28px;
        }

        .chefs-dashboard-main h2,
        .chefs-section-head h2,
        .chefs-notes h2 {
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.05;
        }

        .chefs-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 24px;
        }

        .chefs-stats article {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
        }

        .chefs-stat-icon {
          width: 22px;
          height: 22px;
          color: #d9a331;
          margin-bottom: 10px;
        }

        .chefs-stats strong {
          display: block;
          color: #fff;
          font-size: 20px;
        }

        .chefs-stats span {
          display: block;
          color: rgba(247, 240, 223, 0.62);
          font-size: 11px;
          margin-top: 4px;
        }

        .chefs-filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .chefs-filter-list button {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 999px;
          padding: 10px 14px;
          color: rgba(247, 240, 223, 0.8);
          background: rgba(255, 255, 255, 0.03);
          transition: 0.25s ease;
        }

        .chefs-filter-list button:hover,
        .chefs-filter-list button.active {
          border-color: rgba(217, 163, 49, 0.72);
          color: #f4d98a;
          background: rgba(217, 163, 49, 0.12);
        }

        .chefs-section {
          margin-bottom: 58px;
        }

        .chefs-section-head {
          max-width: 900px;
          margin-bottom: 28px;
        }

        .chefs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .chef-card {
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .chef-card:hover {
          border-color: rgba(217, 163, 49, 0.68);
        }

        .chef-image {
          height: 340px;
          overflow: hidden;
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(217, 163, 49, 0.16);
        }

        .chef-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 16px;
          transition: 0.4s ease;
        }

        .chef-card:hover .chef-image img {
          transform: scale(1.035);
        }

        .chef-content {
          padding: 20px;
        }

        .chef-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .chef-meta span,
        .chef-meta small {
          color: #d9a331;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .chef-meta small {
          color: rgba(247, 240, 223, 0.58);
          text-align: right;
        }

        .chef-content h3 {
          color: #fff;
          font-size: 21px;
          margin-bottom: 4px;
        }

        .chef-role {
          color: #d9a331 !important;
          font-size: 13px;
          margin-bottom: 10px;
        }

        .chefs-notes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          align-items: center;
          padding: 30px;
          margin-bottom: 40px;
        }

        .chefs-note-list {
          display: grid;
          gap: 12px;
        }

        .chefs-note-list div {
          padding: 16px;
        }

        .chefs-note-list strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .chefs-note-list span {
          display: block;
          font-size: 14px;
        }

        .chef-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(10px);
        }

        .chef-modal-wrap {
          position: fixed;
          inset: 0;
          z-index: 91;
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .chef-modal {
          position: relative;
          width: min(980px, 100%);
          max-height: 90vh;
          overflow: auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 24px;
          padding: 24px;
        }

        .chef-modal-close {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 5;
          border: 1px solid rgba(217, 163, 49, 0.25);
          border-radius: 12px;
          padding: 8px 11px;
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
          transition: 0.25s ease;
        }

        .chef-modal-close:hover {
          border-color: rgba(217, 163, 49, 0.6);
          color: #f4d98a;
        }

        .chef-modal-image {
          min-height: 520px;
          border: 1px solid rgba(217, 163, 49, 0.18);
          border-radius: 20px;
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .chef-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 18px;
        }

        .chef-modal-content {
          padding: 34px 12px 12px;
        }

        .chef-modal-content h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
        }

        .chef-modal-role {
          color: #d9a331 !important;
          margin-top: 8px;
          margin-bottom: 16px;
        }

        .chef-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 26px;
        }

        .chef-modal-grid div {
          border: 1px solid rgba(217, 163, 49, 0.18);
          border-radius: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
        }

        .chef-modal-grid small,
        .chef-modal-grid strong {
          display: block;
        }

        .chef-modal-grid small {
          color: rgba(247, 240, 223, 0.58);
          font-size: 11px;
          margin-bottom: 6px;
        }

        .chef-modal-grid strong {
          color: #fff;
        }

        @keyframes chefsIntroFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(0, -10px, 0) scale(1.018);
          }
        }

        @keyframes chefsIntroGlow {
          0%, 100% {
            opacity: 0.55;
            transform: translate3d(-10px, 0, 0) scale(1);
          }

          50% {
            opacity: 1;
            transform: translate3d(10px, -8px, 0) scale(1.04);
          }
        }

        @media (max-width: 1180px) {
          .chefs-hero,
          .chefs-dashboard,
          .chefs-notes,
          .chef-modal {
            grid-template-columns: 1fr;
          }

          .chefs-stats,
          .chefs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .chefs-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .chefs-stats,
          .chefs-grid {
            grid-template-columns: 1fr;
          }

          .chefs-hero-visual {
            min-height: 420px;
          }

          .chefs-intro-card {
            border-radius: 18px;
          }

          .chefs-intro-card img {
            padding: 10px 10px 32px;
          }

          .chefs-intro-card-1 {
            left: 5%;
            top: 8%;
            width: 43%;
            height: 38%;
          }

          .chefs-intro-card-2 {
            right: 5%;
            top: 12%;
            width: 41%;
            height: 37%;
          }

          .chefs-intro-card-3 {
            left: 23%;
            top: 37%;
            width: 54%;
            height: 40%;
          }

          .chefs-intro-card-4,
          .chefs-intro-card-5,
          .chefs-intro-card-6 {
            display: none;
          }

          .chef-image {
            height: 320px;
          }

          .chef-modal-image {
            min-height: 420px;
          }

          .chef-modal-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .chefs-intro-glow,
          .chefs-intro-card {
            animation: none !important;
          }
        }

      `}</style>
    </main>
  )
}