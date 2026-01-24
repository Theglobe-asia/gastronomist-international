import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactWidget from "@/components/ContactWidget"
import BuyMeACoffeeWidget from "@/components/BuyMeACoffeeWidget"

export const metadata: Metadata = {
  title: "Gastronomist International",
  description:
    "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 relative overflow-x-hidden">
        {/* Global background light field */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `
              radial-gradient(1200px 600px at 20% -10%, rgba(120,220,255,0.18), transparent 60%),
              radial-gradient(1000px 500px at 90% 10%, rgba(255,255,255,0.10), transparent 65%),
              radial-gradient(900px 500px at 50% 100%, rgba(80,120,255,0.08), transparent 70%)
            `,
          }}
        />

        {/* App content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactWidget />
        </div>

        <BuyMeACoffeeWidget />
      </body>
    </html>
  )
}
