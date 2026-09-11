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
    slug: "chef-alexey-alexandrovich-zhigulin-27-years-culinary-journey",
    title:
      "Chef Alexey Alexandrovich Zhigulin: A Culinary Journey Built Through 27 Years of Dedication",
    description:
      "Gastronomist International highlights Chef Alexey Alexandrovich Zhigulin, Executive Chef at Ikorets Country Park Hotel, whose 27-year culinary journey includes naval service, professional education, and more than 15 years in executive culinary leadership.",
    date: "2026-09-11",
    banner: "/images/Alexey.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Executive Chef",
      "Russia",
      "Culinary Leadership",
      "Gastronomist International",
    ],
    region: "Russia",
    content: [
      "A successful culinary career is rarely defined by a single achievement. It is built through years of discipline, continuous learning, demanding services, leadership, and an unwavering commitment to the profession.",
      "For Chef Alexey Alexandrovich Zhigulin, that journey has now spanned 27 years in the culinary profession, including more than 15 years of experience as an Executive Chef.",
      "Today, he serves as Executive Chef at Ikorets Country Park Hotel, bringing decades of practical knowledge and leadership into the kitchen.",
      "Chef Alexey's professional foundation was established early in his career through formal vocational education. From 1998 to 1999, he studied at VGSPTU No. 53, where he successfully completed his studies and graduated with honors.",
      "His qualifications include recognition as a 5th Grade Professional Chef, demonstrating the technical knowledge and professional competency developed through his culinary training and experience. But graduation was only the beginning.",
      "From 1999 to 2001, Chef Alexey served in the Black Sea Fleet, where he held the rank of Chief Petty Officer and served as a Senior Chef aboard surface ships.",
      "This period became a distinctive chapter in his culinary journey. Working as a chef in a naval environment demanded far more than culinary ability alone. It required discipline, organization, responsibility, consistency, and the ability to perform effectively within a highly structured environment.",
      "Preparing and managing food operations aboard a naval vessel also presents challenges very different from those of a conventional professional kitchen. Space, resources, schedules, organization, and operational requirements all demand precision and adaptability.",
      "The experience further strengthened qualities that would remain important throughout Chef Alexey's career: discipline under pressure, responsibility for others, organization, teamwork, and professional consistency.",
      "Following his military service, Chef Alexey continued developing professionally. Recognizing that culinary professionals must continue learning throughout their careers, he completed an Advanced Professional Qualification Course in 2005.",
      "Twenty-seven years in a professional kitchen represents far more than a number.",
      "It means thousands of services, countless dishes prepared, changing culinary trends, new ingredients and techniques, demanding operations, difficult decisions, and years spent developing the ability to perform consistently under pressure.",
      "Throughout his career, Chef Alexey has accumulated 27 years of professional culinary experience. Such longevity requires adaptability.",
      "Professional kitchens continually evolve. Equipment changes. Techniques advance. Guest expectations rise. Food safety standards develop. New generations enter the profession.",
      "Remaining active and progressing through decades of these changes requires a chef to continuously learn while maintaining the discipline and fundamentals upon which professional cookery is built.",
      "One of the defining chapters of Chef Alexey's journey has been his progression into culinary leadership. For more than 15 years, he has worked at Executive Chef level.",
      "Becoming an Executive Chef changes the responsibilities of a culinary professional considerably. The position is no longer solely about preparing excellent food.",
      "An Executive Chef must lead people, establish standards, organize kitchen operations, develop teams, maintain consistency, control quality, and ensure that the entire culinary operation performs effectively.",
      "It requires the ability to make decisions under pressure while simultaneously protecting the standards expected from the kitchen.",
      "More than fifteen years in such a leadership position represents a substantial part of Chef Alexey's professional journey. Through those years, practical culinary experience becomes something greater: knowledge that can be transferred to the cooks and chefs working alongside him.",
      "There is knowledge that can be learned from books and classrooms, and there is knowledge that can only be acquired after years inside professional kitchens. Chef Alexey's career represents the latter.",
      "After nearly three decades in the profession, experience becomes visible not simply through technical ability, but through judgment: understanding how a kitchen behaves under pressure, recognizing problems before they become larger, maintaining standards during demanding periods, and knowing how to guide a team through service.",
      "For younger culinary professionals, working alongside chefs with this level of experience provides an important connection between generations.",
      "Techniques may evolve, but the fundamental principles of professional cooking remain: discipline, organization, consistency, respect for ingredients, teamwork, responsibility, and continuous improvement.",
      "Today, Chef Alexey continues his culinary journey as Executive Chef at Ikorets Country Park Hotel.",
      "His current position represents another chapter in a career that began with professional education, continued through culinary service aboard the ships of the Black Sea Fleet, developed through decades of professional kitchen experience, and ultimately grew into long-term culinary leadership.",
      "Yet even after 27 years, a chef's journey is never truly finished.",
      "Every service brings another challenge. Every menu presents another opportunity. Every young cook entering the kitchen represents another generation to teach. And every guest provides another reason to maintain the standards built throughout a lifetime in hospitality.",
      "Chef Alexey Alexandrovich Zhigulin's story demonstrates something fundamental about the culinary profession: lasting success is built over time.",
      "From graduating with honors and serving as a Senior Chef aboard surface ships of the Black Sea Fleet to continuing his professional qualifications and accumulating 27 years of culinary experience, including more than 15 years as an Executive Chef, his journey reflects sustained commitment to his craft.",
      "It is a career shaped not by a single moment, but by thousands of days spent learning, cooking, leading, adapting, and continuing forward.",
      "Today, as Executive Chef at Ikorets Country Park Hotel, Chef Alexey carries those decades of experience into every new chapter of his professional journey.",
      "Twenty-seven years in the profession. More than 15 years in culinary leadership. From naval service to Executive Chef. And a journey that continues.",
    ],
    translations: {
      ru: {
        title:
          "Chef Alexey Alexandrovich Zhigulin: кулинарный путь, построенный на 27 годах преданности профессии",
        description:
          "Gastronomist International рассказывает о Chef Alexey Alexandrovich Zhigulin, Executive Chef в Ikorets Country Park Hotel, чей 27-летний кулинарный путь включает службу на флоте, профессиональное образование и более 15 лет руководства на уровне Executive Chef.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Executive Chef",
          "Россия",
          "Кулинарное лидерство",
          "Gastronomist International",
        ],
        region: "Россия",
        content: [
          "Успешная кулинарная карьера редко определяется одним достижением. Она строится годами дисциплины, постоянного обучения, сложных служб, лидерства и неизменной преданности профессии.",
          "Для Chef Alexey Alexandrovich Zhigulin этот путь продолжается уже 27 лет в кулинарной профессии, включая более 15 лет опыта работы на уровне Executive Chef.",
          "Сегодня он работает Executive Chef в Ikorets Country Park Hotel, привнося в кухню десятилетия практических знаний и лидерского опыта.",
          "Профессиональная основа Chef Alexey была заложена в начале его карьеры через профильное профессиональное образование. С 1998 по 1999 год он обучался в VGSPTU No. 53, где успешно завершил обучение и окончил его с отличием.",
          "Его квалификация включает признание как Professional Chef 5th Grade, что подтверждает технические знания и профессиональную компетентность, развитые благодаря кулинарному обучению и опыту. Но выпуск стал только началом.",
          "С 1999 по 2001 год Chef Alexey проходил службу в Черноморском флоте, где имел звание Chief Petty Officer и служил Senior Chef на надводных кораблях.",
          "Этот период стал особой главой его кулинарного пути. Работа шеф-поваром в военно-морской среде требовала гораздо большего, чем только кулинарные способности. Она требовала дисциплины, организации, ответственности, стабильности и умения эффективно работать в строго структурированной системе.",
          "Организация питания на корабле отличается от работы в обычной профессиональной кухне. Пространство, ресурсы, графики, организация и операционные требования требуют точности и адаптивности.",
          "Этот опыт укрепил качества, которые оставались важными на протяжении всей карьеры Chef Alexey: дисциплина под давлением, ответственность за других, организованность, командная работа и профессиональная стабильность.",
          "После военной службы Chef Alexey продолжил профессиональное развитие. Понимая, что кулинарные специалисты должны учиться на протяжении всей карьеры, он завершил Advanced Professional Qualification Course в 2005 году.",
          "Двадцать семь лет на профессиональной кухне — это намного больше, чем просто число.",
          "Это тысячи служб, бесчисленное количество приготовленных блюд, меняющиеся кулинарные тенденции, новые ингредиенты и техники, сложные операции, трудные решения и годы, посвящённые развитию способности стабильно работать под давлением.",
          "За свою карьеру Chef Alexey накопил 27 лет профессионального кулинарного опыта. Такая продолжительность требует адаптивности.",
          "Профессиональные кухни постоянно развиваются. Меняется оборудование. Развиваются техники. Растут ожидания гостей. Совершенствуются стандарты безопасности пищевых продуктов. В профессию приходят новые поколения.",
          "Оставаться активным и развиваться в течение десятилетий таких изменений означает постоянно учиться, сохраняя дисциплину и фундаментальные принципы профессиональной кухни.",
          "Одной из определяющих глав пути Chef Alexey стал его переход к кулинарному лидерству. Более 15 лет он работает на уровне Executive Chef.",
          "Позиция Executive Chef значительно меняет обязанности кулинарного профессионала. Это уже не только приготовление отличной еды.",
          "Executive Chef должен руководить людьми, устанавливать стандарты, организовывать работу кухни, развивать команду, поддерживать стабильность, контролировать качество и обеспечивать эффективную работу всей кулинарной операции.",
          "Эта роль требует умения принимать решения под давлением и одновременно защищать стандарты, ожидаемые от кухни.",
          "Более пятнадцати лет на такой руководящей позиции представляют значительную часть профессионального пути Chef Alexey. За эти годы практический кулинарный опыт становится чем-то большим: знаниями, которые можно передавать поварам и шефам, работающим рядом.",
          "Существуют знания, которые можно получить из книг и учебных аудиторий, и существуют знания, которые приобретаются только после многих лет внутри профессиональных кухонь. Карьера Chef Alexey отражает именно этот второй путь.",
          "После почти трёх десятилетий в профессии опыт проявляется не только через технические навыки, но и через профессиональное суждение: понимание того, как кухня ведёт себя под давлением, умение замечать проблемы до того, как они станут серьёзнее, поддержание стандартов в сложные периоды и способность вести команду через службу.",
          "Для молодых кулинарных специалистов работа рядом с шефами такого уровня опыта создаёт важную связь между поколениями.",
          "Техники могут меняться, но фундаментальные принципы профессиональной кухни остаются прежними: дисциплина, организация, стабильность, уважение к ингредиентам, командная работа, ответственность и постоянное совершенствование.",
          "Сегодня Chef Alexey продолжает свой кулинарный путь как Executive Chef в Ikorets Country Park Hotel.",
          "Его нынешняя должность представляет ещё одну главу карьеры, начавшейся с профессионального образования, продолжившейся кулинарной службой на кораблях Черноморского флота, развившейся через десятилетия работы на профессиональной кухне и выросшей в долгосрочное кулинарное лидерство.",
          "Но даже после 27 лет путь шеф-повара никогда не бывает полностью завершён.",
          "Каждая служба приносит новый вызов. Каждое меню открывает новую возможность. Каждый молодой повар, приходящий на кухню, представляет новое поколение, которое можно обучать. И каждый гость даёт ещё одну причину поддерживать стандарты, построенные за годы работы в hospitality.",
          "История Chef Alexey Alexandrovich Zhigulin показывает важную истину кулинарной профессии: устойчивый успех строится временем.",
          "От окончания обучения с отличием и службы Senior Chef на надводных кораблях Черноморского флота до продолжения профессиональной квалификации и накопления 27 лет кулинарного опыта, включая более 15 лет в роли Executive Chef, его путь отражает глубокую преданность ремеслу.",
          "Это карьера, сформированная не одним моментом, а тысячами дней, проведённых в обучении, приготовлении, руководстве, адаптации и постоянном движении вперёд.",
          "Сегодня, как Executive Chef в Ikorets Country Park Hotel, Chef Alexey несёт эти десятилетия опыта в каждую новую главу своего профессионального пути.",
          "Двадцать семь лет в профессии. Более 15 лет в кулинарном лидерстве. От службы на флоте до Executive Chef. И путь, который продолжается.",
        ],
      },
    },
  },
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