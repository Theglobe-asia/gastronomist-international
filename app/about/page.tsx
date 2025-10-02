// app/about/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionProps } from "framer-motion";

// ✅ typed wrappers for motion elements
type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
  React.RefAttributes<HTMLDivElement>
>;
type ArticleMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"article"> & MotionProps> &
  React.RefAttributes<HTMLElement>
>;

const MotionDiv = motion.div as DivMotion;
const MotionArticle = motion.article as ArticleMotion;

const leaders = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation.",
    img: "/images/chefalex.png?v=2",
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage and innovation.",
    img: "/images/chefcox.png?v=2",
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefhamid.png?v=2",
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefluzac.png?v=2",
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefthet.png?v=2",
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Representatives",
    blurb:
      "Chefs and leaders worldwide who represent Gastronomist International in their regions.",
    img: "/images/chefwael.png?v=2",
  },
];

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  return (
    <main className="container py-16 space-y-14">
      {/* Title + intro */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Gastronomist International
          </span>
        </h1>
        <p className="text-neutral-300 max-w-3xl">
          We are a global culinary community focused on modern gastronomy,
          knowledge-sharing, and professional recognition. Our platform connects
          chefs, educators, creators, and industry partners to celebrate
          excellence and elevate standards worldwide.
        </p>
        <div className="h-px w-28 bg-yellow-500/60 rounded" />
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6">
          <h3 className="font-semibold text-white">Our Mission</h3>
          <p className="mt-2 text-neutral-300">
            To empower culinary professionals with community, recognition, and
            opportunities—while championing innovation and ethical practice.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6">
          <h3 className="font-semibold text-white">Our Vision</h3>
          <p className="mt-2 text-neutral-300">
            A modern, inclusive culinary ecosystem where talent thrives, ideas
            travel, and excellence is visible on a global stage.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Network",
              d: "Connect chefs, educators, creators, and brands through events, media, and community spaces.",
            },
            {
              t: "Recognize",
              d: "Showcase achievements, profiles, and milestones to elevate members’ careers.",
            },
            {
              t: "Educate",
              d: "Share methods, research, and industry standards around modern gastronomy.",
            },
          ].map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-yellow-500/40 bg-white/[0.02] p-6"
            >
              <h3 className="font-semibold text-white">{i.t}</h3>
              <p className="mt-2 text-neutral-300">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Ambassadors with image cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Leadership & Ambassadors
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((p) => (
            <MotionArticle
              key={p.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedLeader(p)}
            >
              {/* Portrait */}
              <div className="w-full h-80 sm:h-96 md:h-[500px] overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-black">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="text-xs text-gray-500 mt-1">{p.role}</div>
                <p className="text-sm text-gray-700 mt-3">{p.blurb}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-2">
        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                     bg-yellow-500 text-black hover:bg-yellow-400 transition border border-yellow-500/60"
        >
          Register Today
        </a>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <>
            {/* Backdrop */}
            <MotionDiv
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
            />
            {/* Modal Content */}
            <MotionDiv
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden">
                <div className="w-full h-96 flex items-center justify-center bg-gray-100">
                  <img
                    src={selectedLeader.img}
                    alt={selectedLeader.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-black">
                  <h2 className="text-2xl font-bold">{selectedLeader.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedLeader.role}
                  </p>
                  <p className="mt-4 text-gray-700">{selectedLeader.blurb}</p>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="mt-6 px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:brightness-110 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
