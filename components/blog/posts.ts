// components/blog/posts.ts

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string // ISO: YYYY-MM-DD
  banner: string // /images/...
  author: string
  tags: string[]
  region?: string
  content?: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "honorary-partnership-yulia-antonova-mystic-mask-russia",
    title:
      "Gastronomist International Announces Honorary Partnership with Yulia Antonova, “Mystic Mask”",
    description:
      "Gastronomist International proudly announces an honorary cultural partnership with Yulia Antonova, known by her stage name Mystic Mask, who will represent the organization in Russia.",
    date: "2026-07-17",
    banner: "/images/yulia-antonova-mystic-mask.png",
    author: "Gastronomist International",
    tags: [
      "Press Release",
      "Honorary Partnership",
      "Cultural Arts Ambassador",
      "Russia",
      "Gastronomist International",
    ],
    region: "Russia",
    content: [
      "Gastronomist International is honored to announce an honorary cultural partnership with Yulia Antonova, known by her stage name Mystic Mask, a distinguished abstract artist, author, poet, songwriter, and respected cultural figure.",
      "Yulia Antonova serves as the Vice President of the Union of Abstract Artists of Russia and is an Honorary Member of the I.K. Aivazovsky Academy of Arts. She is also a valued member of the Union of Writers of Russia, with creative works that reflect artistic excellence, cultural heritage, emotional depth, and meaningful human expression.",
      "Beyond her artistic achievements, Yulia holds a Law Degree, bringing together creativity, intellectual insight, leadership, and cultural advocacy. Her diverse background represents the powerful connection between art, knowledge, identity, and international collaboration.",
      "Through this honorary partnership, Yulia Antonova will represent Gastronomist International in Russia, serving as a cultural bridge for meaningful collaboration, artistic exchange, and international community engagement.",
      "This collaboration reflects the shared mission of building bridges between gastronomy, culture, art, literature, and human expression. Gastronomist International continues to recognize individuals whose talent, leadership, and creative vision contribute to a more connected and culturally enriched world.",
      "Welcome to Gastronomist International, Yulia Antonova — Mystic Mask. Your artistry, cultural dedication, and international creative presence are a meaningful addition to our global community.",
    ],
  },
  {
    slug: "welcoming-chef-noor",
    title: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
    description:
      "Gastronomist International welcomes Chef Noor, representing the new wave of modern Middle Eastern gastronomy from the GCC.",
    date: "2026-01-24",
    banner: "/images/noor.png",
    author: "Gastronomist International",
    tags: ["GCC", "Modern Gastronomy", "Membership", "Middle East"],
    region: "GCC — Middle East",
  },
]

export function getSortedPosts() {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getLatestPost() {
  return getSortedPosts()[0]
}