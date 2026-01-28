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
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "welcoming-chef-noor",
    title: "Welcoming Chef Noor — A New Culinary Chapter from the GCC",
    description:
      "Gastronomist International welcomes Chef Noor, representing the new wave of modern Middle Eastern gastronomy from the GCC.",
    date: "2026-01-24",
    banner: "/images/chef-noor.png",
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
