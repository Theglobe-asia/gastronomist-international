"use client"

import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/40 bg-black py-6 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Gastronomist International. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-neutral-400">
          <Link
            href="https://www.instagram.com/gastronomist_international?igsh=Nnl4azVuMGM1dm9q&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="https://www.facebook.com/share/14JXNNtLziy/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebook size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
