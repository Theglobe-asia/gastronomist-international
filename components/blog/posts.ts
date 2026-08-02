// components/blog/posts.ts

export type BlogLanguage = "en" | "ru"

export type BlogPostTranslation = {
  title?: string
  description?: string
  author?: string
  tags?: string[]
  region?: string
  content?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string // ISO: YYYY-MM-DD
  banner: string // /images/...
  ogImage?: string // /images/... dedicated Facebook/Open Graph preview image
  author: string
  tags: string[]
  region?: string
  content?: string[]
  translations?: Partial<Record<BlogLanguage, BlogPostTranslation>>
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
    ogImage: "/images/yulia-antonova-mystic-mask-og.png",
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
    translations: {
      ru: {
        title:
          "Gastronomist International объявляет о почётном партнёрстве с Юлией Антоновой, «Mystic Mask»",
        description:
          "Gastronomist International с гордостью объявляет о почётном культурном партнёрстве с Юлией Антоновой, известной под творческим именем Mystic Mask, которая будет представлять организацию в России.",
        author: "Gastronomist International",
        tags: [
          "Пресс-релиз",
          "Почётное партнёрство",
          "Культурный представитель",
          "Россия",
          "Gastronomist International",
        ],
        region: "Россия",
        content: [
          "Gastronomist International с честью объявляет о почётном культурном партнёрстве с Юлией Антоновой, известной под творческим именем Mystic Mask, выдающейся абстрактной художницей, автором, поэтом, автором песен и уважаемой культурной фигурой.",
          "Юлия Антонова является вице-президентом Союза абстрактных художников России и почётным членом Академии художеств имени И. К. Айвазовского. Она также является ценным членом Союза писателей России, а её творческие работы отражают художественное мастерство, культурное наследие, эмоциональную глубину и значимое человеческое выражение.",
          "Помимо художественных достижений, Юлия имеет юридическое образование, объединяя творчество, интеллектуальное видение, лидерство и культурную деятельность. Её многогранный путь отражает сильную связь между искусством, знаниями, идентичностью и международным сотрудничеством.",
          "В рамках этого почётного партнёрства Юлия Антонова будет представлять Gastronomist International в России, выступая культурным мостом для meaningful collaboration, artistic exchange, and international community engagement.",
          "Это сотрудничество отражает общую миссию — выстраивать мосты между гастрономией, культурой, искусством, литературой и человеческим самовыражением. Gastronomist International продолжает признавать людей, чей талант, лидерство и творческое видение способствуют более связанному и культурно обогащённому миру.",
          "Добро пожаловать в Gastronomist International, Юлия Антонова — Mystic Mask. Ваше искусство, культурная преданность и международное творческое присутствие являются значимым дополнением к нашему глобальному сообществу.",
        ],
      },
    },
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
    translations: {
      ru: {
        title:
          "Добро пожаловать, Chef Noor — новая кулинарная глава из стран GCC",
        description:
          "Gastronomist International приветствует Chef Noor, представляющую новую волну современной ближневосточной гастрономии из региона GCC.",
        author: "Gastronomist International",
        tags: [
          "GCC",
          "Современная гастрономия",
          "Членство",
          "Ближний Восток",
        ],
        region: "GCC — Ближний Восток",
      },
    },
  },
]

export function getLocalizedPost(post: BlogPost, language: BlogLanguage = "en"): BlogPost {
  if (language === "en") {
    return post
  }

  const translation = post.translations?.[language]

  if (!translation) {
    return post
  }

  return {
    ...post,
    title: translation.title || post.title,
    description: translation.description || post.description,
    author: translation.author || post.author,
    tags: translation.tags || post.tags,
    region: translation.region || post.region,
    content: translation.content || post.content,
  }
}

export function getSortedPosts(language: BlogLanguage = "en") {
  return [...BLOG_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => getLocalizedPost(post, language))
}

export function getLatestPost(language: BlogLanguage = "en") {
  return getSortedPosts(language)[0]
}