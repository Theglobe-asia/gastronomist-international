"use client"

import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Glass footer shell */}
      <div className="relative border-t border-white/10 bg-black/35 backdrop-blur-2xl">
        {/* Edge glow / refraction */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(800px 140px at 20% 100%, rgba(120,220,255,0.18), transparent 60%),
              radial-gradient(700px 120px at 80% 100%, rgba(255,255,255,0.10), transparent 68%),
              linear-gradient(0deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))
            `,
          }}
        />

        <div className="container relative flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          {/* Branding */}
          <div className="text-sm text-neutral-300">
            © {new Date().getFullYear()} Gastronomist International. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/gastronomist_international?igsh=Nnl4azVuMGM1dm9q&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                h-10 w-10 rounded-xl
                border border-white/10
                bg-white/[0.04]
                text-neutral-300
                hover:text-white
                hover:border-white/20
                hover:bg-white/[0.08]
                transition
              "
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="https://www.facebook.com/share/14JXNNtLziy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                h-10 w-10 rounded-xl
                border border-white/10
                bg-white/[0.04]
                text-neutral-300
                hover:text-white
                hover:border-white/20
                hover:bg-white/[0.08]
                transition
              "
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
