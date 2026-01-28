import { BLOG_POSTS } from "@/components/blog/posts"

const SITE_URL = "https://www.gastronomistinternational.com"

export default function Head() {
  const post = BLOG_POSTS.find((p) => p.slug === "welcoming-chef-noor")!

  const canonical = `${SITE_URL}/blog/${post.slug}`
  const ogImage = `${SITE_URL}${post.banner}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [ogImage],
    author: [{ "@type": "Organization", name: post.author }],
    publisher: {
      "@type": "Organization",
      name: "Gastronomist International",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  }

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Gastronomist International" />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
