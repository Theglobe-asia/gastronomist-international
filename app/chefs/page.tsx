// app/chefs/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionProps } from "framer-motion";

// ✅ Typed motion wrapper for <article>
type ArticleMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"article"> & MotionProps> &
  React.RefAttributes<HTMLElement>
>;
const MotionArticle = motion.article as ArticleMotion;

const chefs = [
  {
    name: "Chef Mar",
    role: "International Member",
    blurb: "Specializes in modernizing traditional recipes with innovative techniques.",
    img: "/images/chefmar.png",
  },
  {
    name: "Chef Arman",
    role: "International Member",
    blurb: "Passionate about sustainable cooking and seasonal ingredients.",
    img: "/images/chefarman.png",
  },
  {
    name: "Chef Sandar",
    role: "International Member",
    blurb: "Renowned for artistic pastry creations blending flavor and design.",
    img: "/images/chefsandar.png",
  },
  {
    name: "Chef Deric",
    role: "International Member",
    blurb: "Expert in precision cooking and creative plating aesthetics.",
    img: "/images/chefderic.png",
  },
  {
    name: "Chef Gaviola",
    role: "International Member",
    blurb: "Celebrated for blending Asian flavors with contemporary gastronomy.",
    img: "/images/chefgaviola.png",
  },
  {
    name: "Chef Francis",
    role: "International Member",
    blurb: "Known for curating immersive dining experiences worldwide.",
    img: "/images/cheffrancis.png",
  },
  {
    name: "Chef Rommel",
    role: "International Member",
    blurb: "Dedicated to training and mentoring the next generation of chefs.",
    img: "/images/chefrommel.png",
  },
  {
    name: "Chef Marvin",
    role: "International Member",
    blurb: "Transforms dining concepts into world-class restaurant operations.",
    img: "/images/chefmarvin.png",
  },
  {
    name: "Chef Kono",
    role: "International Member",
    blurb: "Blends global culinary heritage with modern techniques.",
    img: "/images/chefkono.png",
  },
];

export default function ChefsPage() {
  const [selectedChef, setSelectedChef] = useState<any | null>(null);

  return (
    <main className="container py-16 space-y-10">
      {/* Title */}
      <section className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Chefs
          </span>
        </h1>
        <p className="text-neutral-300 max-w-2xl">
          Meet our dedicated culinary professionals, representing the spirit of Gastronomist International.
        </p>
        <div className="h-px w-28 bg-yellow-500/60 rounded" />
      </section>

      {/* Grid of chefs */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((c) => (
          <MotionArticle
            key={c.name}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedChef(c)}
          >
            {/* Portrait */}
            <div className="w-full h-80 sm:h-96 md:h-[500px] flex items-center justify-center bg-gray-100">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 text-black">
              <h3 className="font-semibold text-lg">{c.name}</h3>
              <p className="text-xs text-gray-500">{c.role}</p>
              <p className="text-sm text-gray-700 mt-2">{c.blurb}</p>
            </div>
          </MotionArticle>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedChef && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedChef(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden">
                <div className="w-full h-96 flex items-center justify-center bg-gray-100">
                  <img
                    src={selectedChef.img}
                    alt={selectedChef.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-black">
                  <h2 className="text-2xl font-bold">{selectedChef.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{selectedChef.role}</p>
                  <p className="mt-4 text-gray-700">{selectedChef.blurb}</p>
                  <button
                    onClick={() => setSelectedChef(null)}
                    className="mt-6 px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:brightness-110 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
