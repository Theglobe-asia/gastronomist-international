import "./globals.css"
import type { Metadata, Viewport } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactWidget from "@/components/ContactWidget"
import BuyMeCoffee from "@/components/BuyMeCoffee"
// import PwaRegister from "@/components/PwaRegister"

const SITE_URL = "https://www.gastronomistinternational.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Gastronomist International",
  description:
    "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [{ url: "/logo.png" }],
    shortcut: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },

  appleWebApp: {
    capable: true,
    title: "Gastronomist International",
    statusBarStyle: "black-translucent",
  },

  openGraph: {
    type: "website",
    siteName: "Gastronomist International",
    title: "Gastronomist International",
    description:
      "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Gastronomist International",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gastronomist International",
    description:
      "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.",
    images: ["/logo.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#050505] text-neutral-100">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: `
              radial-gradient(1200px 620px at 18% -10%, rgba(212,163,54,0.16), transparent 62%),
              radial-gradient(1000px 520px at 88% 6%, rgba(255,230,160,0.08), transparent 68%),
              radial-gradient(900px 520px at 50% 110%, rgba(212,163,54,0.08), transparent 72%),
              linear-gradient(180deg, #050505 0%, #0b0906 46%, #030303 100%)
            `,
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(circle at center, black 0%, black 46%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, black 46%, transparent 82%)",
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (regs) {
        return Promise.all(regs.map(function (r) { return r.unregister(); }));
      }).catch(function(){});
    }
    if ("caches" in window) {
      caches.keys().then(function (keys) {
        return Promise.all(keys.map(function (k) { return caches.delete(k); }));
      }).catch(function(){});
    }
  } catch (e) {}
})();
`,
          }}
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactWidget />
        </div>

        <BuyMeCoffee />

        {/* <PwaRegister /> */}
      </body>
    </html>
  )
}