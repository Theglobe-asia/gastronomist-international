import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactWidget from "@/components/ContactWidget"

export const metadata: Metadata = {
  title: "Gastronomist International",
  description:
    "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques. “Your Talent Deserves Global, that’s why We Are Here”"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  )
}
