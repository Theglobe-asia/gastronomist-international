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
    slug: "chef-ivan-antonov-18-years-hospitality-russian-national-records",
    title:
      "Chef Ivan Antonov: 18 Years in Hospitality, Culinary Leadership, and Two Russian National Records",
    description:
      "Gastronomist International highlights Chef Ivan Antonov, Executive Chef within the AMAKS Hotels & Resorts network, whose 18-year hospitality journey includes Executive Chef leadership and participation in two Russian national culinary records.",
    date: "2026-09-13",
    banner: "/images/ivan.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Executive Chef",
      "Russia",
      "Russian National Records",
      "Gastronomist International",
    ],
    region: "Russia",
    content: [
      "A professional culinary career is built through years of discipline, demanding kitchen operations, continuous development, teamwork, and the ability to lead people under pressure.",
      "For Chef Ivan Antonov, that journey has now reached 18 years of professional experience in the food and hospitality industry, including the last five years serving as Executive Chef across different culinary projects.",
      "Today, Chef Ivan works as an Executive Chef within the AMAKS Hotels & Resorts network, bringing extensive practical experience into professional hotel and hospitality operations.",
      "Nearly two decades in the hospitality industry provide far more than technical cooking knowledge.",
      "They develop an understanding of kitchen organization, team management, product control, service standards, menu execution, operational discipline, and the responsibility required to lead a professional culinary department.",
      "During the last five years, Chef Ivan’s career has increasingly focused on Executive Chef responsibilities across different projects.",
      "This experience has required not only culinary expertise, but also leadership, organization, problem-solving, planning, and the ability to transform culinary concepts into functioning operations.",
      "Among the most significant achievements of Chef Ivan Antonov’s professional journey are his contributions to two Russian national culinary records, both accomplished as part of professional chef teams.",
      "One record was established in Ust-Kachka, Russia, where the culinary team prepared an extraordinary 2,523 posekunchiki with pestiki.",
      "Posekunchik is a traditional small pie associated with the cuisine of the Perm region and represents an important part of local Russian gastronomic heritage.",
      "Preparing more than two thousand individual pieces for a record-setting event required extensive organization, teamwork, preparation, timing, and consistency.",
      "Another major culinary achievement took place in Moscow during the Russian Field Festival, known as Russkoye Pole.",
      "Working together with a team of professional chefs, Chef Ivan participated in the preparation of an extraordinary 1,945 liters of rassolnik.",
      "Rassolnik is one of Russia’s traditional soups, historically prepared with pickled cucumbers, vegetables, broth, and other regional ingredients.",
      "Producing almost two thousand liters of soup represents far more than simply increasing the size of a recipe.",
      "Large-scale culinary preparation requires precise ingredient calculations, production planning, equipment coordination, food-safety control, communication between team members, and consistent execution.",
      "The successful completion of the event resulted in another Russian national record for the culinary team.",
      "Despite the significance of these national records, one of the most memorable projects of Chef Ivan Antonov’s career was a completely different professional challenge.",
      "It was the opening of Ozon Spa in Tolyatti.",
      "The project was appropriately titled: From Paper to a Fully Operational Business.",
      "The concept reflected the complete journey of developing an operation from an initial idea and planning stage into a functioning hospitality business.",
      "Projects of this scale require an Executive Chef to think far beyond individual dishes.",
      "They can involve operational planning, kitchen organization, menu development, equipment requirements, purchasing systems, staffing structures, production processes, service standards, training, costing, and coordination with other departments.",
      "Seeing a concept move from documentation and planning into an active business operation became one of the most memorable experiences of Chef Ivan’s professional career.",
      "The role of an Executive Chef has changed considerably over the years.",
      "A modern Executive Chef must be a culinary professional, operational leader, mentor, organizer, problem solver, and business-minded manager at the same time.",
      "Chef Ivan Antonov’s 18 years of professional experience, five years of Executive Chef leadership, participation in two Russian national records, and involvement in developing a hospitality business from concept to operation demonstrate a career built through practical experience, responsibility, and continuous professional growth.",
      "Behind every successful project are countless hours of preparation, coordination, teamwork, responsibility, and determination.",
      "And behind every experienced chef is a professional journey shaped not only by the dishes they create, but also by the teams they lead, the operations they build, and the contribution they make to the wider culinary profession.",
    ],
    translations: {
      ru: {
        title:
          "Chef Ivan Antonov: 18 лет в hospitality, кулинарное лидерство и два национальных рекорда России",
        description:
          "Gastronomist International рассказывает о Chef Ivan Antonov, Executive Chef в сети AMAKS Hotels & Resorts, чей 18-летний путь в hospitality включает кулинарное лидерство и участие в двух национальных кулинарных рекордах России.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Executive Chef",
          "Россия",
          "Национальные рекорды России",
          "Gastronomist International",
        ],
        region: "Россия",
        content: [
          "Профессиональная кулинарная карьера строится годами дисциплины, сложных кухонных процессов, постоянного развития, командной работы и способности руководить людьми под давлением.",
          "Для Chef Ivan Antonov этот путь уже достиг 18 лет профессионального опыта в сфере питания и hospitality, включая последние пять лет работы Executive Chef в различных кулинарных проектах.",
          "Сегодня Chef Ivan работает Executive Chef в сети AMAKS Hotels & Resorts, привнося обширный практический опыт в профессиональные гостиничные и hospitality-операции.",
          "Почти два десятилетия в индустрии hospitality дают гораздо больше, чем технические кулинарные знания.",
          "Они формируют понимание организации кухни, управления командой, контроля продуктов, стандартов сервиса, выполнения меню, операционной дисциплины и ответственности, необходимой для руководства профессиональным кулинарным подразделением.",
          "В течение последних пяти лет карьера Chef Ivan всё больше была связана с обязанностями Executive Chef в разных проектах.",
          "Этот опыт требовал не только кулинарной экспертизы, но и лидерства, организации, решения проблем, планирования и способности превращать кулинарные концепции в работающие операции.",
          "Среди наиболее значимых достижений профессионального пути Chef Ivan Antonov — его участие в двух национальных кулинарных рекордах России, оба из которых были установлены в составе профессиональных команд шеф-поваров.",
          "Один из рекордов был установлен в Усть-Качке, Россия, где кулинарная команда приготовила впечатляющие 2 523 посекунчика с пестиками.",
          "Посекунчик — это традиционный небольшой пирожок, связанный с кухней Пермского региона, и важная часть местного российского гастрономического наследия.",
          "Приготовление более двух тысяч отдельных изделий для рекордного события требовало серьёзной организации, командной работы, подготовки, точного расчёта времени и стабильности.",
          "Другое крупное кулинарное достижение состоялось в Москве во время фестиваля «Русское поле».",
          "Работая вместе с командой профессиональных шеф-поваров, Chef Ivan участвовал в приготовлении впечатляющих 1 945 литров рассольника.",
          "Рассольник — один из традиционных русских супов, исторически приготовляемый с солёными огурцами, овощами, бульоном и другими региональными ингредиентами.",
          "Производство почти двух тысяч литров супа — это гораздо больше, чем простое увеличение рецепта.",
          "Крупномасштабное кулинарное производство требует точных расчётов ингредиентов, производственного планирования, координации оборудования, контроля пищевой безопасности, коммуникации между членами команды и стабильного исполнения.",
          "Успешное завершение события стало ещё одним национальным рекордом России для кулинарной команды.",
          "Несмотря на значимость этих национальных рекордов, одним из самых запоминающихся проектов в карьере Chef Ivan Antonov стал совершенно другой профессиональный вызов.",
          "Это было открытие Ozon Spa в Тольятти.",
          "Проект получил точное название: «От бумаги до полноценного действующего бизнеса».",
          "Эта концепция отражала полный путь развития операции — от первоначальной идеи и этапа планирования до функционирующего hospitality-бизнеса.",
          "Проекты такого масштаба требуют от Executive Chef мыслить далеко за пределами отдельных блюд.",
          "Они могут включать операционное планирование, организацию кухни, разработку меню, требования к оборудованию, системы закупок, структуру персонала, производственные процессы, стандарты сервиса, обучение, калькуляцию и координацию с другими отделами.",
          "Возможность увидеть, как концепция проходит путь от документов и планирования до действующего бизнеса, стала одним из самых запоминающихся опытов в профессиональной карьере Chef Ivan.",
          "Роль Executive Chef за последние годы значительно изменилась.",
          "Современный Executive Chef должен быть одновременно кулинарным профессионалом, операционным лидером, наставником, организатором, специалистом по решению проблем и бизнес-ориентированным управленцем.",
          "18 лет профессионального опыта Chef Ivan Antonov, пять лет лидерства на уровне Executive Chef, участие в двух национальных рекордах России и опыт развития hospitality-бизнеса от концепции до операции демонстрируют карьеру, построенную на практическом опыте, ответственности и постоянном профессиональном росте.",
          "За каждым успешным проектом стоят бесчисленные часы подготовки, координации, командной работы, ответственности и решимости.",
          "И за каждым опытным шеф-поваром стоит профессиональный путь, сформированный не только блюдами, которые он создаёт, но и командами, которыми он руководит, операциями, которые он строит, и вкладом, который он вносит в широкую кулинарную профессию.",
        ],
      },
    },
  },
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
  },
  {
    slug: "welcoming-chef-mark-lester-morales-international-member",
    title:
      "Mark Lester Morales: Chef de Partie with 14 Years of Five-Star Hotel Experience",
    description:
      "Gastronomist International highlights Mark Lester Morales, a Chef de Partie and International Member representing North Macedonia, with 14 years of experience in the five-star hotel industry.",
    date: "2026-09-07",
    banner: "/images/mark.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Chef de Partie",
      "North Macedonia",
      "Five-Star Hotel Kitchen",
      "Gastronomist International",
    ],
    region: "North Macedonia",
    content: [
      "Gastronomist International proudly recognizes Mark Lester Morales as an International Member representing North Macedonia.",
      "Mark Lester Morales is an experienced culinary professional with 14 years of experience in the five-star hotel industry, specializing in professional kitchen operations, food preparation, cooking, plating, food safety, and maintaining high standards of quality and consistency.",
      "His professional experience includes working in fast-paced hotel kitchens and multicultural culinary environments, where teamwork, cleanliness, guest satisfaction, and consistent food quality are essential every day.",
      "As a Chef de Partie, his responsibilities include preparing and cooking food according to hotel standards and recipes, maintaining consistent food quality, taste, presentation, and portion control, assisting senior kitchen leaders with daily operations, and handling mise en place before service.",
      "His career experience also includes maintaining high standards of hygiene, sanitation, and food safety, following HACCP principles and proper food-handling procedures, monitoring food freshness and storage, assisting during busy service periods and special events, working effectively with multicultural kitchen teams, keeping a clean and organized workstation, minimizing food waste, and supporting proper food-cost control.",
      "His hot kitchen skills include grilling, roasting, sautéing, braising, sauce preparation, and meat and seafood preparation.",
      "His cold kitchen skills include salads, dressings, appetizers, cold preparations, and basic plating.",
      "His professional kitchen skills include mise en place, portion control, food costing, menu preparation, plating and presentation, stock rotation, food safety and hygiene, HACCP principles, teamwork, and communication.",
      "Among his key strengths are 14 years of five-star hotel experience, strong kitchen discipline, reliability, hard work, teamwork, communication, the ability to work under pressure, consistent food quality, attention to detail, a clean and organized workstation, and adaptability to different cuisines and kitchen environments.",
      "His culinary philosophy is: Quality, consistency, cleanliness, and teamwork are the foundation of a successful kitchen.",
      "He believes that every dish should be prepared with care, consistency, and respect for the ingredients. He continuously aims to improve his culinary skills and contribute positively to every kitchen team he works with.",
      "Through this recognition, Gastronomist International celebrates not only his professional experience, but also the discipline, teamwork, and standards that define his culinary journey.",
    ],
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