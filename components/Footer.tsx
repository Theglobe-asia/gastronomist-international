import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Gastronomist International</p>
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com" aria-label="Facebook" className="hover:opacity-80">FB</Link>
          <Link href="https://instagram.com" aria-label="Instagram" className="hover:opacity-80">IG</Link>
          <Link href="mailto:gastronomist.intl@gmail.com" aria-label="Email" className="hover:opacity-80">Email</Link>
        </div>
      </div>
    </footer>
  )
}
