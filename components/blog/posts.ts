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
    slug: "welcoming-chef-mark-lester-morales-international-member",
    title:
      "Welcoming Chef Mark Lester Morales — International Member from North Macedonia",
    description:
      "Gastronomist International proudly welcomes Chef Mark Lester Morales as an International Member from North Macedonia, known for his experience honed in a five-star hotel kitchen.",
    date: "2026-09-07",
    banner: "/images/mark.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "International Member",
      "North Macedonia",
      "Five-Star Hotel Kitchen",
      "Gastronomist International",
    ],
    region: "North Macedonia",
    content: [
      "Gastronomist International proudly welcomes Chef Mark Lester Morales as an International Member representing North Macedonia.",
      "Chef Mark Lester Morales brings valuable culinary experience shaped and honed within a five-star hotel kitchen, where discipline, consistency, precision, and professional standards are part of everyday culinary life.",
      "His journey reflects the dedication of chefs who continue to grow through hard work, passion, and commitment to the craft. In professional kitchens, excellence is built not only through talent, but through daily discipline, teamwork, leadership, and respect for the standards of hospitality.",
      "As part of Gastronomist International, Chef Mark Lester Morales joins a global culinary recognition platform created to support chefs, culinary professionals, hospitality leaders, educators, consultants, and food innovators who deserve international visibility.",
      "This recognition celebrates his professional journey and highlights the importance of showcasing chefs whose experience, passion, and contribution deserve to be seen beyond the kitchen.",
      "Welcome to Gastronomist International, Chef Mark Lester Morales. Your experience, passion, and professional dedication are a valuable addition to our growing international culinary community.",
    ],
    translations: {
      ru: {
        title:
          "Добро пожаловать, Chef Mark Lester Morales — международный член из Северной Македонии",
        description:
          "Gastronomist International с гордостью приветствует Chef Mark Lester Morales как международного члена из Северной Македонии, известного своим опытом, полученным и развитым на кухне пятизвёздочного отеля.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Международный член",
          "Северная Македония",
          "Кухня пятизвёздочного отеля",
          "Gastronomist International",
        ],
        region: "Северная Македония",
        content: [
          "Gastronomist International с гордостью приветствует Chef Mark Lester Morales как международного члена, представляющего Северную Македонию.",
          "Chef Mark Lester Morales обладает ценным кулинарным опытом, сформированным и развитым на кухне пятизвёздочного отеля, где дисциплина, стабильность, точность и профессиональные стандарты являются частью ежедневной работы.",
          "Его путь отражает преданность шеф-поваров, которые продолжают развиваться благодаря труду, страсти и верности своему ремеслу. В профессиональной кухне мастерство строится не только на таланте, но и на ежедневной дисциплине, командной работе, лидерстве и уважении к стандартам гостеприимства.",
          "Став частью Gastronomist International, Chef Mark Lester Morales присоединяется к глобальной платформе кулинарного признания, созданной для поддержки шеф-поваров, кулинарных профессионалов, лидеров индустрии гостеприимства, преподавателей, консультантов и новаторов в сфере гастрономии, которые заслуживают международной видимости.",
          "Это признание отмечает его профессиональный путь и подчёркивает важность продвижения шеф-поваров, чей опыт, страсть и вклад заслуживают быть увиденными за пределами кухни.",
          "Добро пожаловать в Gastronomist International, Chef Mark Lester Morales. Ваш опыт, страсть и профессиональная преданность являются ценным вкладом в наше растущее международное кулинарное сообщество.",
        ],
      },
    },
  },
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