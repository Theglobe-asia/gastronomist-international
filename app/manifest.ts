import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gastronomist International",
    short_name: "Gastronomist",
    description:
      "We embrace the diversity of talent and expertise within the culinary community, particularly focusing on modern gastronomy techniques.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "maskable" },

      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },

      { src: "/logo.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "1024x1024", type: "image/png", purpose: "maskable" },
    ],
  }
}
