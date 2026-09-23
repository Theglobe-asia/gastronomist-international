// components/editorial-magazine/posts.ts

export type EditorialMagazineLanguage = "en" | "ru"

export type EditorialMagazinePostTranslation = {
  title?: string
  subtitle?: string
  description?: string
  category?: string
  issue?: string
  readTime?: string
  author?: string
  region?: string
  tags?: string[]
  featuredQuote?: string
  content?: string[]
}

export type EditorialMagazinePost = {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  category: string
  issue: string
  readTime: string
  banner: string
  author: string
  region?: string
  tags: string[]
  featuredQuote?: string
  content: string[]
  translations?: Partial<
    Record<EditorialMagazineLanguage, EditorialMagazinePostTranslation>
  >
}

export const EDITORIAL_MAGAZINE_POSTS: EditorialMagazinePost[] = [
  {
    slug: "do-not-stay-hidden-inside-the-kitchen",
    title: "Do Not Stay Hidden Inside the Kitchen",
    subtitle:
      "The new era of culinary recognition belongs to chefs who are ready to be seen.",
    description:
      "An editorial feature from Gastronomist International on visibility, recognition, and why modern culinary professionals must step beyond the kitchen to build a stronger global professional identity.",
    date: "2026-09-23",
    category: "Editorial Vision",
    issue: "Issue 01",
    readTime: "5 min read",
    banner: "/images/recognition.png",
    author: "Gastronomist International Editorial",
    region: "Global",
    tags: [
      "Editorial Magazine",
      "Chef Recognition",
      "Culinary Identity",
      "Professional Visibility",
      "Gastronomist International",
    ],
    featuredQuote:
      "A chef’s work begins in the kitchen, but their professional identity should not end there.",
    content: [
      "For many years, chefs have built their careers behind the kitchen doors: preparing, leading, teaching, organizing, creating, and carrying the weight of daily operations with discipline and precision.",
      "Yet in the modern culinary world, professional excellence deserves visibility.",
      "A chef’s work begins in the kitchen, but their professional identity should not end there.",
      "Gastronomist International was created with a clear belief: culinary professionals should not remain hidden inside the kitchen.",
      "The world deserves to know the people behind the craft, the stories behind the discipline, and the journeys behind every professional achievement.",
      "Recognition is not simply about publicity. It is about giving value to the years of training, sacrifice, consistency, and leadership that shape a culinary career.",
      "In today’s hospitality landscape, chefs are no longer only food creators. They are leaders, educators, innovators, mentors, cultural representatives, business builders, and guardians of culinary identity.",
      "The Editorial Magazine exists to highlight these stories in a modern, premium, and professional way.",
      "Each feature is designed to give chefs, culinary leaders, hospitality professionals, and gastronomy figures a platform where their journey can be presented with dignity and global visibility.",
      "This is not only a magazine. It is a living archive of culinary excellence.",
      "It is a space where professional identity, personal journey, cultural heritage, and modern gastronomy meet.",
      "The future of gastronomy belongs to professionals who are willing to be recognized, connected, and remembered.",
    ],
    translations: {
      ru: {
        title: "Не оставайтесь скрытыми внутри кухни",
        subtitle:
          "Новая эпоха кулинарного признания принадлежит шеф-поварам, которые готовы быть увиденными.",
        description:
          "Редакционный материал Gastronomist International о видимости, признании и о том, почему современные кулинарные профессионалы должны выходить за пределы кухни, формируя более сильную международную профессиональную идентичность.",
        category: "Редакционное видение",
        issue: "Выпуск 01",
        readTime: "5 минут чтения",
        author: "Редакция Gastronomist International",
        region: "Глобальный уровень",
        tags: [
          "Редакционный журнал",
          "Признание шеф-поваров",
          "Кулинарная идентичность",
          "Профессиональная видимость",
          "Gastronomist International",
        ],
        featuredQuote:
          "Работа шеф-повара начинается на кухне, но его профессиональная идентичность не должна заканчиваться там.",
        content: [
          "На протяжении многих лет шеф-повара строили свою карьеру за дверями кухни: готовили, руководили, обучали, организовывали, создавали и ежедневно несли ответственность за операционные процессы с дисциплиной и точностью.",
          "Однако в современном кулинарном мире профессиональное мастерство заслуживает видимости.",
          "Работа шеф-повара начинается на кухне, но его профессиональная идентичность не должна заканчиваться там.",
          "Gastronomist International был создан с чётким убеждением: кулинарные профессионалы не должны оставаться скрытыми внутри кухни.",
          "Мир должен знать людей, стоящих за ремеслом, истории, стоящие за дисциплиной, и путь, стоящий за каждым профессиональным достижением.",
          "Признание — это не просто публичность. Это уважение к годам обучения, жертвенности, стабильности и лидерства, которые формируют кулинарную карьеру.",
          "В современной сфере гостеприимства шеф-повара уже не являются только создателями блюд. Они лидеры, преподаватели, новаторы, наставники, культурные представители, создатели бизнеса и хранители кулинарной идентичности.",
          "Editorial Magazine создан для того, чтобы освещать эти истории современно, премиально и профессионально.",
          "Каждая публикация предназначена для того, чтобы дать шеф-поварам, кулинарным лидерам, специалистам гостеприимства и деятелям гастрономии платформу, где их путь может быть представлен достойно и с международной видимостью.",
          "Это не просто журнал. Это живой архив кулинарного совершенства.",
          "Это пространство, где профессиональная идентичность, личный путь, культурное наследие и современная гастрономия встречаются вместе.",
          "Будущее гастрономии принадлежит профессионалам, готовым быть признанными, связанными и запомненными.",
        ],
      },
    },
  },
  {
    slug: "the-modern-chef-as-a-global-cultural-voice",
    title: "The Modern Chef as a Global Cultural Voice",
    subtitle:
      "Why today’s culinary professionals represent more than recipes, kitchens, and menus.",
    description:
      "An editorial look at the evolving role of chefs as cultural voices, professional leaders, and ambassadors of gastronomy across borders.",
    date: "2026-09-18",
    category: "Culinary Culture",
    issue: "Issue 01",
    readTime: "4 min read",
    banner: "/images/partnership.png",
    author: "Gastronomist International Editorial",
    region: "Global",
    tags: [
      "Culinary Culture",
      "Global Gastronomy",
      "Chef Leadership",
      "Cultural Representation",
      "Editorial Magazine",
    ],
    featuredQuote:
      "A chef carries more than technique. A chef carries memory, identity, discipline, and culture.",
    content: [
      "The modern chef is no longer defined only by the ability to prepare excellent food.",
      "Across the world, chefs have become cultural voices, professional leaders, mentors, educators, and representatives of the communities that shaped them.",
      "Every dish can carry memory. Every technique can carry history. Every menu can express identity.",
      "This is why gastronomy continues to be one of the strongest bridges between people, regions, and cultures.",
      "A chef working in a professional kitchen may be preparing food for guests, but in a deeper sense, they are also communicating values, traditions, personal discipline, and creative perspective.",
      "Modern gastronomy is global, but it remains deeply human.",
      "It is built through the hands, minds, and stories of professionals who carry their heritage into the present while learning from the wider world.",
      "Gastronomist International recognizes this broader role of the chef.",
      "The chef is not only a worker behind the pass. The chef is a voice of craft, culture, memory, and professional excellence.",
    ],
    translations: {
      ru: {
        title: "Современный шеф-повар как глобальный культурный голос",
        subtitle:
          "Почему сегодняшние кулинарные профессионалы представляют нечто большее, чем рецепты, кухни и меню.",
        description:
          "Редакционный взгляд на меняющуюся роль шеф-поваров как культурных голосов, профессиональных лидеров и послов гастрономии за пределами границ.",
        category: "Кулинарная культура",
        issue: "Выпуск 01",
        readTime: "4 минуты чтения",
        author: "Редакция Gastronomist International",
        region: "Глобальный уровень",
        tags: [
          "Кулинарная культура",
          "Мировая гастрономия",
          "Лидерство шеф-поваров",
          "Культурное представительство",
          "Редакционный журнал",
        ],
        featuredQuote:
          "Шеф-повар несёт в себе больше, чем технику. Он несёт память, идентичность, дисциплину и культуру.",
        content: [
          "Современный шеф-повар больше не определяется только способностью готовить отличную еду.",
          "По всему миру шеф-повара стали культурными голосами, профессиональными лидерами, наставниками, преподавателями и представителями сообществ, которые их сформировали.",
          "Каждое блюдо может нести память. Каждая техника может нести историю. Каждое меню может выражать идентичность.",
          "Именно поэтому гастрономия остаётся одним из самых сильных мостов между людьми, регионами и культурами.",
          "Шеф-повар, работающий на профессиональной кухне, может готовить еду для гостей, но в более глубоком смысле он также передаёт ценности, традиции, личную дисциплину и творческий взгляд.",
          "Современная гастрономия глобальна, но при этом остаётся глубоко человеческой.",
          "Она строится через руки, ум и истории профессионалов, которые несут своё наследие в настоящее, одновременно обучаясь у более широкого мира.",
          "Gastronomist International признаёт эту более широкую роль шеф-повара.",
          "Шеф-повар — это не только человек за кухонной линией. Шеф-повар — это голос ремесла, культуры, памяти и профессионального совершенства.",
        ],
      },
    },
  },
  {
    slug: "recognition-as-a-professional-standard",
    title: "Recognition as a Professional Standard",
    subtitle:
      "Why official culinary recognition matters in a global hospitality industry.",
    description:
      "A Gastronomist International editorial on professional recognition, trust, visibility, and the value of documenting culinary excellence.",
    date: "2026-09-10",
    category: "Professional Recognition",
    issue: "Issue 01",
    readTime: "4 min read",
    banner: "/images/medal.png",
    author: "Gastronomist International Editorial",
    region: "Global",
    tags: [
      "Professional Recognition",
      "Culinary Excellence",
      "Membership",
      "Hospitality",
      "Editorial Magazine",
    ],
    featuredQuote:
      "Recognition helps transform professional experience into documented legacy.",
    content: [
      "Professional recognition matters because culinary work is often intense, demanding, and unseen by the wider public.",
      "Many chefs spend years building skills, managing teams, preparing services, training staff, creating menus, and maintaining standards without receiving proper documentation of their professional contribution.",
      "Recognition helps transform professional experience into documented legacy.",
      "It allows culinary professionals to present their journey with clarity, credibility, and dignity.",
      "In a global hospitality industry, recognition also supports trust.",
      "When a chef’s achievements, membership, and professional identity are documented, their work becomes easier to understand, present, and share across borders.",
      "This is especially important for chefs who work internationally, represent cultural traditions, or build careers across different kitchens, hotels, restaurants, institutions, and countries.",
      "Gastronomist International believes that professional recognition should not be treated as decoration alone.",
      "It should be treated as part of a chef’s professional identity.",
      "A certificate, medal, published profile, or editorial feature can become part of a larger record of contribution, discipline, and excellence.",
    ],
    translations: {
      ru: {
        title: "Признание как профессиональный стандарт",
        subtitle:
          "Почему официальное кулинарное признание важно в глобальной индустрии гостеприимства.",
        description:
          "Редакционный материал Gastronomist International о профессиональном признании, доверии, видимости и ценности документирования кулинарного мастерства.",
        category: "Профессиональное признание",
        issue: "Выпуск 01",
        readTime: "4 минуты чтения",
        author: "Редакция Gastronomist International",
        region: "Глобальный уровень",
        tags: [
          "Профессиональное признание",
          "Кулинарное совершенство",
          "Членство",
          "Гостеприимство",
          "Редакционный журнал",
        ],
        featuredQuote:
          "Признание помогает превратить профессиональный опыт в задокументированное наследие.",
        content: [
          "Профессиональное признание важно, потому что кулинарная работа часто бывает интенсивной, требовательной и невидимой для широкой публики.",
          "Многие шеф-повара годами развивают навыки, управляют командами, проводят сервисы, обучают сотрудников, создают меню и поддерживают стандарты, не получая должного документального подтверждения своего профессионального вклада.",
          "Признание помогает превратить профессиональный опыт в задокументированное наследие.",
          "Оно позволяет кулинарным профессионалам представлять свой путь ясно, достоверно и достойно.",
          "В глобальной индустрии гостеприимства признание также поддерживает доверие.",
          "Когда достижения, членство и профессиональная идентичность шеф-повара задокументированы, его работу легче понять, представить и показать за пределами границ.",
          "Это особенно важно для шеф-поваров, которые работают на международном уровне, представляют культурные традиции или строят карьеру в разных кухнях, отелях, ресторанах, институциях и странах.",
          "Gastronomist International считает, что профессиональное признание не должно восприниматься только как украшение.",
          "Оно должно быть частью профессиональной идентичности шеф-повара.",
          "Сертификат, медаль, опубликованный профиль или редакционная статья могут стать частью более широкой записи вклада, дисциплины и мастерства.",
        ],
      },
    },
  },
]

export function getLocalizedEditorialMagazinePost(
  post: EditorialMagazinePost,
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost {
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
    subtitle: translation.subtitle || post.subtitle,
    description: translation.description || post.description,
    category: translation.category || post.category,
    issue: translation.issue || post.issue,
    readTime: translation.readTime || post.readTime,
    author: translation.author || post.author,
    region: translation.region || post.region,
    tags: translation.tags || post.tags,
    featuredQuote: translation.featuredQuote || post.featuredQuote,
    content: translation.content || post.content,
  }
}

export function getSortedEditorialMagazinePosts(
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost[] {
  return [...EDITORIAL_MAGAZINE_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => getLocalizedEditorialMagazinePost(post, language))
}

export function getLatestEditorialMagazinePost(
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost {
  return getSortedEditorialMagazinePosts(language)[0]
}

export function getEditorialMagazinePostBySlug(
  slug: string,
  language: EditorialMagazineLanguage = "en"
): EditorialMagazinePost | undefined {
  const post = EDITORIAL_MAGAZINE_POSTS.find((item) => item.slug === slug)

  if (!post) {
    return undefined
  }

  return getLocalizedEditorialMagazinePost(post, language)
}