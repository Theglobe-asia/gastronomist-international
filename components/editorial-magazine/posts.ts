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
    slug: "yulia-antonova-mystic-mask-art-culture-creative-expression",
    title: "Yulia Antonova — Mystic Mask",
    subtitle:
      "Contemporary Abstract Artist · Author · Poet · Cultural Diplomacy Ambassador",
    description:
      "An editorial portrait of Yulia Antonova, known creatively as Mystic Mask — a contemporary abstract artist, author, poet, and cultural figure whose journey connects visual art, literature, music, cultural diplomacy, and creative expression.",
    date: "2026-09-23",
    category: "Art & Cultural Diplomacy",
    issue: "Issue 01",
    readTime: "8 min read",
    banner: "/images/mask.png",
    author: "Gastronomist International Editorial",
    region: "Russia · Crimea",
    tags: [
      "Yulia Antonova",
      "Mystic Mask",
      "Contemporary Art",
      "Abstract Art",
      "Cultural Diplomacy",
      "Poetry",
      "Creative Expression",
      "Gastronomist International",
    ],
    featuredQuote: "She creates with love.",
    content: [
      "Yulia Antonova, known by her creative pseudonym Mystic Mask, is a contemporary abstract artist, author, poet, and cultural figure whose life and work bring together visual art, literature, cultural diplomacy, and creative expression.",

      "She serves as Vice President of the Union of Abstract Artists of Russia and heads its branch in the Republic of Crimea. She is also a member of the Union of Russian Artists of the Republic of Crimea.",

      "Beyond visual art, Yulia is an author and poet and a member of the Russian Union of Writers.",

      "Her international cultural involvement includes her recognition as an Honorary Member and Ambassador of Cultural Diplomacy of Gastronomist International, as well as an Honorary Member of the International Alliance of Professional Chefs.",

      "Early Life and Education",

      "Yulia Antonova was born in 1976 in Crimea.",

      "From 1984 to 1993, she studied at School No. 2 in Alushta. In 1993, she graduated with honors from professional secretarial and typing courses.",

      "From 1996 to 2003, she studied at a university in Simferopol, graduating with a professional qualification in Law. From 1994 to 2011, she worked professionally in her field.",

      "Today, she continues to pursue additional education, reflecting her long-standing commitment to personal and professional development.",

      "A Life Surrounded by Art",

      "Creativity has been an integral part of Yulia's life since childhood.",

      "From 1986 to 1993, she attended and graduated from art school, developing the artistic foundation that would later become central to her identity as a contemporary abstract artist.",

      "Her creative interests, however, have never been limited to painting.",

      "Between 1988 and 1992, she completed the course “Theory of Journalistic Mastery” at the press center of the Alushta Center for Children and Youth Creativity. During this period, she wrote articles for the newspaper Alushtinsky Vestnik.",

      "In 1993, she worked in local television, where she hosted her own program.",

      "Her exploration of the arts continued decades later. From 2020 to 2023, she studied piano at music school, further expanding her relationship with artistic expression through music.",

      "Mystic Mask and the World of Abstraction",

      "As Mystic Mask, Yulia Antonova has dedicated a significant part of her life to abstract art.",

      "Her works are characterized by expressive color, movement, emotion, and predominantly uplifting tonalities. Through combinations of color and abstraction, she seeks to create works that communicate positive emotions and invite viewers into an imaginative visual world.",

      "For Yulia, painting is more than a decorative or technical practice. It is deeply connected with emotion, personal energy, and her understanding of the relationship between art and human well-being.",

      "She has studied aspects of intermodal expressive arts therapy and art therapy, influences that have contributed to her personal artistic philosophy.",

      "Yulia describes her paintings as symbolic talismans created with positive intention. Within her artistic philosophy, they are intended to evoke feelings associated with well-being, love, prosperity, good fortune, happiness, and positive energy.",

      "Each work is conceived as an individual creation with its own character and emotional identity.",

      "At the heart of her practice is a simple principle: She creates with love.",

      "Art, Culture and International Recognition",

      "Yulia Antonova has participated in international exhibitions and has received recognition in international artistic competitions and exhibitions.",

      "Her paintings are held in private collections in Russia, Italy, France, and Germany, extending the presence of her work beyond her home country.",

      "Alongside her artistic practice, her involvement in cultural organizations reflects a broader commitment to strengthening relationships between people through creativity and cultural exchange.",

      "As an Honorary Member and Ambassador of Cultural Diplomacy of Gastronomist International, she represents a connection between the worlds of art, culture, international collaboration, and gastronomy.",

      "Beyond the Canvas",

      "Yulia maintains an active lifestyle, practices Eastern martial arts, and speaks several foreign languages.",

      "She currently lives in Alushta, continuing her artistic, literary, cultural, and educational activities.",

      "Her journey has moved through many forms of expression — painting, journalism, television, literature, poetry, music, and cultural diplomacy — yet creativity remains the common thread connecting them all.",

      "For Yulia Antonova, art is not simply something to observe.",

      "It is a way to communicate emotion, create connections, explore the human experience, and bring positive expression into people's lives.",

      "Through Mystic Mask, she continues to invite audiences into a world where color, imagination, emotion, and abstraction meet — and where every canvas carries its own story.",
    ],
    translations: {
      ru: {
        title: "Юлия Антонова — Mystic Mask",
        subtitle:
          "Современный художник-абстракционист · Автор · Поэт · Посол культурной дипломатии",
        description:
          "Редакционный портрет Юлии Антоновой, известной под творческим псевдонимом Mystic Mask — современного художника-абстракциониста, автора, поэта и деятеля культуры, чей путь объединяет изобразительное искусство, литературу, музыку, культурную дипломатию и творческое самовыражение.",
        category: "Искусство и культурная дипломатия",
        issue: "Выпуск 01",
        readTime: "8 минут чтения",
        author: "Редакция Gastronomist International",
        region: "Россия · Крым",
        tags: [
          "Юлия Антонова",
          "Mystic Mask",
          "Современное искусство",
          "Абстрактное искусство",
          "Культурная дипломатия",
          "Поэзия",
          "Творческое самовыражение",
          "Gastronomist International",
        ],
        featuredQuote: "Она создаёт с любовью.",
        content: [
          "Юлия Антонова, известная под творческим псевдонимом Mystic Mask, — современный художник-абстракционист, автор, поэт и деятель культуры, чья жизнь и творчество объединяют изобразительное искусство, литературу, культурную дипломатию и творческое самовыражение.",

          "Она занимает должность вице-президента Союза абстракционистов России и руководит его филиалом в Республике Крым. Также она является членом Союза русских художников Республики Крым.",

          "Помимо изобразительного искусства, Юлия является автором и поэтом, а также членом Российского союза писателей.",

          "Её международная культурная деятельность включает признание в качестве Почётного члена и Посла культурной дипломатии Gastronomist International, а также Почётного члена Международного альянса профессиональных кулинаров.",

          "Ранние годы и образование",

          "Юлия Антонова родилась в 1976 году в Крыму.",

          "С 1984 по 1993 год она обучалась в школе № 2 города Алушты. В 1993 году с отличием окончила профессиональные курсы секретарей-машинисток.",

          "С 1996 по 2003 год Юлия обучалась в университете в Симферополе и получила профессиональную квалификацию по специальности «Юриспруденция». С 1994 по 2011 год она работала по специальности.",

          "Сегодня она продолжает получать дополнительное образование, демонстрируя неизменное стремление к личностному и профессиональному развитию.",

          "Жизнь, окружённая искусством",

          "Творчество является неотъемлемой частью жизни Юлии с самого детства.",

          "С 1986 по 1993 год она обучалась в художественной школе и успешно её окончила, сформировав творческую основу, которая впоследствии стала важной частью её идентичности как современного художника-абстракциониста.",

          "Однако её творческие интересы никогда не ограничивались только живописью.",

          "С 1988 по 1992 год она прошла курс «Теория журналистского мастерства» при пресс-центре Алуштинского центра детского и юношеского творчества. В этот период она писала статьи для газеты «Алуштинский вестник».",

          "В 1993 году Юлия работала на местном телевидении, где вела собственную программу.",

          "Спустя десятилетия её исследование различных форм искусства продолжилось. С 2020 по 2023 год она обучалась игре на фортепиано в музыкальной школе, расширяя своё творческое самовыражение через музыку.",

          "Mystic Mask и мир абстракции",

          "Под творческим псевдонимом Mystic Mask Юлия Антонова посвятила значительную часть своей жизни абстрактному искусству.",

          "Её работы отличаются выразительным цветом, движением, эмоциональностью и преимущественно светлой, позитивной тональностью. Через сочетание цвета и абстракции она стремится создавать произведения, передающие положительные эмоции и приглашающие зрителя в мир воображения.",

          "Для Юлии живопись — это не просто декоративная или техническая практика. Она глубоко связана с эмоциями, личной энергией и её пониманием взаимосвязи между искусством и благополучием человека.",

          "Она изучала аспекты интермодальной терапии выразительными искусствами и арт-терапии, что оказало влияние на формирование её собственной художественной философии.",

          "Юлия описывает свои картины как символические талисманы, создаваемые с позитивным намерением. В рамках её художественной философии они призваны вызывать чувства, связанные с благополучием, любовью, достатком, удачей, счастьем и положительной энергией.",

          "Каждая работа задумывается как самостоятельное произведение со своим характером и эмоциональной индивидуальностью.",

          "В основе её творческого подхода лежит простой принцип: она создаёт с любовью.",

          "Искусство, культура и международное признание",

          "Юлия Антонова принимала участие в международных выставках и получала признание на международных художественных конкурсах и выставочных проектах.",

          "Её картины находятся в частных коллекциях в России, Италии, Франции и Германии, расширяя присутствие её творчества за пределами родной страны.",

          "Наряду с художественной практикой её участие в культурных организациях отражает более широкое стремление укреплять связи между людьми посредством творчества и культурного обмена.",

          "В качестве Почётного члена и Посла культурной дипломатии Gastronomist International она представляет связь между мирами искусства, культуры, международного сотрудничества и гастрономии.",

          "За пределами холста",

          "Юлия ведёт активный образ жизни, занимается восточными единоборствами и владеет несколькими иностранными языками.",

          "В настоящее время она живёт в Алуште и продолжает художественную, литературную, культурную и образовательную деятельность.",

          "Её жизненный путь прошёл через множество форм самовыражения — живопись, журналистику, телевидение, литературу, поэзию, музыку и культурную дипломатию, однако творчество остаётся общей нитью, объединяющей все эти направления.",

          "Для Юлии Антоновой искусство — это не просто то, на что смотрят.",

          "Это способ передавать эмоции, создавать связи между людьми, исследовать человеческий опыт и приносить позитивное самовыражение в жизнь окружающих.",

          "Через Mystic Mask она продолжает приглашать зрителей в мир, где встречаются цвет, воображение, эмоции и абстракция — и где каждый холст несёт свою собственную историю.",
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