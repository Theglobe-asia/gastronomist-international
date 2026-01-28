import { BLOG_POSTS } from "@/components/blog/posts"

export default function Head() {
  const post = BLOG_POSTS.find((p) => p.slug === "welcoming-chef-noor")!

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ""
  const canonical = siteUrl ? `${siteUrl}/blog/${post.slug}` : `/blog/${post.slug}`
  const ogImage = siteUrl ? `${siteUrl}${post.banner}` : post.banner

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
      logo: siteUrl
        ? { "@type": "ImageObject", url: `${siteUrl}/logo.png` }
        : { "@type": "ImageObject", url: `/logo.png` },
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
