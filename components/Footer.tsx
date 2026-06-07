"use client"

import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="relative border-t border-yellow-400/20 bg-black/80 backdrop-blur-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 260px at 20% 100%, rgba(212,163,54,0.12), transparent 65%),
              radial-gradient(1000px 220px at 80% 100%, rgba(255,220,120,0.08), transparent 70%),
              linear-gradient(0deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))
            `,
          }}
        />

        <div className="container relative py-14">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white">
                Gastronomist International
              </h3>

              <div className="mt-3 h-px w-24 bg-gradient-to-r from-yellow-400 to-transparent" />

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Connecting chefs, culinary leaders, hospitality professionals,
                educators, and innovators through a global network dedicated to
                excellence in gastronomy.
              </p>

              <Link
                href="/?register=1"
                className="
                  mt-6 inline-flex items-center
                  rounded-xl
                  border border-yellow-400/40
                  bg-gradient-to-r from-yellow-500 to-yellow-200
                  px-5 py-3
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >
                Apply for Membership
              </Link>
            </div>

            {/* Membership */}
            <div>
              <h4 className="font-semibold text-yellow-300">
                Membership
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                <li>
                  <Link href="/?register=1" className="hover:text-yellow-300">
                    Become a Member
                  </Link>
                </li>

                <li>
                  <Link href="/membership-fee" className="hover:text-yellow-300">
                    Membership Fee
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-yellow-300">
                    Benefits
                  </Link>
                </li>

                <li>
                  <Link href="/press" className="hover:text-yellow-300">
                    Recognition
                  </Link>
                </li>
              </ul>
            </div>

            {/* Organization */}
            <div>
              <h4 className="font-semibold text-yellow-300">
                Organization
              </h4>

              <ul className="mt-4 space-y-3 text-sm text-neutral-400">
                <li>
                  <Link href="/chefs" className="hover:text-yellow-300">
                    Global Leaders
                  </Link>
                </li>

                <li>
                  <Link href="/press" className="hover:text-yellow-300">
                    Press Releases
                  </Link>
                </li>

                <li>
                  <Link href="/shop" className="hover:text-yellow-300">
                    Official Shop
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-yellow-300">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-yellow-300">
                Connect
              </h4>

              <p className="mt-4 text-sm text-neutral-400">
                Follow Gastronomist International and stay updated with global
                culinary news, member recognition, and upcoming initiatives.
              </p>

              <div className="mt-6 flex gap-4">
                <Link
                  href="https://www.instagram.com/gastronomist_international?igsh=Nnl4azVuMGM1dm9q&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-yellow-400/20
                    bg-white/[0.03]
                    text-neutral-300
                    transition
                    hover:border-yellow-400/50
                    hover:text-yellow-300
                  "
                >
                  <FaInstagram size={18} />
                </Link>

                <Link
                  href="https://www.facebook.com/share/14JXNNtLziy/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-yellow-400/20
                    bg-white/[0.03]
                    text-neutral-300
                    transition
                    hover:border-yellow-400/50
                    hover:text-yellow-300
                  "
                >
                  <FaFacebook size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-yellow-400/10 pt-6">
            <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} Gastronomist International. All rights reserved.
              </div>

              <div>
                Building a Global Community of Culinary Excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}