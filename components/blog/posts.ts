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
    slug: "chef-begimkulov-ruslan-european-italian-asian-cuisine-executive-chef",
    title:
      "Chef Begimkulov Ruslan: European Foundations, Italian Influence, and Asian Culinary Experience",
    description:
      "Gastronomist International profiles Chef Begimkulov Ruslan, an Executive Chef with 12 years of professional culinary experience, including five years in kitchen leadership, whose career spans Moscow and the Ryazan region with a focus on European, Italian, and Asian cuisine.",
    date: "2026-11-02",
    banner: "/images/ruslan.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Executive Chef",
      "European Cuisine",
      "Italian Cuisine",
      "Asian Cuisine",
      "Russia",
      "Kyrgyzstan",
      "Ryazan",
      "Culinary Associations",
      "Gastronomist International",
    ],
    region: "Kyrgyzstan / Russia",
    content: [
      "Chef Begimkulov Ruslan has 12 years of professional culinary experience, including 5 years working as an Executive Chef.",
      "Born in Kyrgyzstan, he currently lives and works in Russia, where he has built a substantial part of his professional career.",
      "Much of Chef Ruslan’s culinary experience was developed in Moscow, where he worked across different professional kitchen environments and strengthened his knowledge of international cuisine.",
      "His principal areas of expertise include European cuisine, with significant practical experience in both Italian and Asian cuisine.",
      "This diverse background has allowed him to develop a versatile approach to cooking and kitchen operations, combining different techniques, ingredients, and culinary traditions.",
      "Chef Ruslan currently works in the Ryazan region of Russia, where he has served for approximately two years as Executive Chef of Utyos Restaurant.",
      "The restaurant is located in Dubrovichi village, within the territory of the Aquamarine Recreation Base.",
      "In his role as Executive Chef, he is responsible for kitchen leadership, food quality, team organization, menu execution, and maintaining professional standards across daily operations.",
      "Chef Ruslan’s professional background reflects a strong understanding of several major culinary traditions.",
      "His experience in European cuisine provides a broad foundation, while his work with Italian and Asian cuisine has expanded his technical range and culinary perspective.",
      "This combination allows him to work confidently across different styles while adapting to the needs of the restaurant and its guests.",
      "Chef Begimkulov Ruslan is also involved in several professional culinary organizations and chef communities.",
      "His affiliations include the International Alliance of Professional Chefs, Chefs Team Russia, CHEF DELUXE — International Union of Culinary Arts Masters, and the Guild of Chefs of Tatarstan.",
      "Participation in these organizations allows him to remain connected with the broader professional culinary community, exchange experience with fellow chefs, and continue developing through professional collaboration.",
      "With more than a decade of culinary experience and several years in kitchen leadership, Chef Ruslan continues to develop his career through practical work, professional associations, and exposure to different culinary traditions.",
      "His journey from Kyrgyzstan to professional kitchens in Moscow and his current Executive Chef role in the Ryazan region reflects a career built on experience, adaptability, leadership, and continuous development.",
      "Chef Begimkulov Ruslan represents a modern culinary professional whose work brings together European foundations, Italian influence, Asian techniques, and professional kitchen leadership.",
    ],
    translations: {
      ru: {
        title:
          "Шеф-повар Бегимкулов Руслан: европейская основа, итальянское влияние и опыт азиатской кухни",
        description:
          "Gastronomist International представляет шеф-повара Бегимкулова Руслана — Executive Chef с 12-летним профессиональным кулинарным опытом, включая пять лет руководства кухней. Его карьерный путь охватывает Москву и Рязанскую область, а основные направления специализации включают европейскую, итальянскую и азиатскую кухню.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Executive Chef",
          "Европейская кухня",
          "Итальянская кухня",
          "Азиатская кухня",
          "Россия",
          "Кыргызстан",
          "Рязань",
          "Кулинарные ассоциации",
          "Gastronomist International",
        ],
        region: "Кыргызстан / Россия",
        content: [
          "Шеф-повар Бегимкулов Руслан имеет 12 лет профессионального кулинарного опыта, включая 5 лет работы в должности Executive Chef.",
          "Он родился в Кыргызстане и в настоящее время живёт и работает в России, где сформировалась значительная часть его профессиональной карьеры.",
          "Большая часть кулинарного опыта Руслана была получена в Москве, где он работал в различных профессиональных кухонных средах и укреплял знания международной кухни.",
          "К основным направлениям его специализации относится европейская кухня, а также значительный практический опыт в итальянской и азиатской кухне.",
          "Такой разнообразный профессиональный фон позволил ему сформировать универсальный подход к приготовлению блюд и кухонным операциям, объединяя разные техники, ингредиенты и кулинарные традиции.",
          "В настоящее время шеф Руслан работает в Рязанской области России, где около двух лет занимает должность Executive Chef ресторана «Утёс».",
          "Ресторан расположен в селе Дубровичи, на территории базы отдыха «Аквамарин».",
          "В качестве Executive Chef он отвечает за руководство кухней, качество блюд и продуктов, организацию команды, исполнение меню и поддержание профессиональных стандартов в ежедневной работе.",
          "Профессиональный опыт Руслана отражает уверенное знание нескольких крупных кулинарных направлений.",
          "Европейская кухня формирует широкую основу его работы, а опыт с итальянской и азиатской кухней расширяет его технический диапазон и профессиональный взгляд.",
          "Такое сочетание позволяет ему уверенно работать в разных стилях и адаптироваться к потребностям ресторана и его гостей.",
          "Шеф-повар Бегимкулов Руслан также участвует в деятельности нескольких профессиональных кулинарных организаций и сообществ шеф-поваров.",
          "В число его профессиональных объединений входят Международный Альянс Профессиональных Кулинаров, Chefs Team Russia, CHEF DELUXE — Международный союз мастеров кулинарного искусства и Гильдия поваров Татарстана.",
          "Участие в этих организациях помогает ему сохранять связь с широким профессиональным кулинарным сообществом, обмениваться опытом с коллегами и продолжать развитие через профессиональное сотрудничество.",
          "Имея более десяти лет кулинарного опыта и несколько лет руководства кухней, Руслан продолжает развивать карьеру через практическую работу, профессиональные ассоциации и знакомство с различными кулинарными традициями.",
          "Его путь из Кыргызстана через профессиональные кухни Москвы к нынешней должности Executive Chef в Рязанской области отражает карьеру, построенную на опыте, адаптивности, лидерстве и постоянном развитии.",
          "Шеф-повар Бегимкулов Руслан представляет современного кулинарного профессионала, в работе которого объединяются европейская основа, итальянское влияние, азиатские техники и профессиональное руководство кухней.",
        ],
      },
    },
  },
  {
    slug: "chef-dmitry-vladimirovich-shirokov-enigma-cuisine-gastronomic-dinners",
    title:
      "Chef Dmitry Vladimirovich Shirokov: Building a Culinary Identity Through Enigma Cuisine",
    description:
      "Gastronomist International profiles Chef Dmitry Vladimirovich Shirokov, an Executive Chef from Balashikha, Zheleznodorozhny, Russia, with 14 years of professional experience and five years in executive kitchen leadership, now developing his own author-driven gastronomic concept, Enigma Cuisine.",
    date: "2026-10-25",
    banner: "/images/shirokov.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Executive Chef",
      "Russia",
      "Enigma Cuisine",
      "Gastronomic Dinners",
      "Culinary Leadership",
      "Gastronomist International",
    ],
    region: "Russia",
    content: [
      "Chef Dmitry Vladimirovich Shirokov is a culinary professional from Balashikha, Zheleznodorozhny, Russia, with 14 years of professional experience, including 5 years working as an Executive Chef.",
      "Throughout his career, he has developed a strong interest in creating food that goes beyond conventional restaurant formats and gives guests a more personal and memorable gastronomic experience.",
      "Chef Dmitry is currently developing his own culinary direction under the concept of Enigma Cuisine.",
      "The idea is centered on author-driven gastronomic dinners, where each menu is created as a personal interpretation of ingredients, techniques, emotions, and culinary ideas.",
      "Rather than limiting himself to one traditional cuisine, Chef Dmitry aims to create dining experiences that encourage curiosity and discovery.",
      "Enigma Cuisine reflects an approach in which every dinner can become a unique culinary story — built around creativity, surprise, individuality, and the chef’s personal vision.",
      "Through these gastronomic dinners, he plans to present dishes that express his own style while continuing to evolve professionally and explore new culinary possibilities.",
      "With more than a decade in professional kitchens, Chef Dmitry has accumulated 14 years of culinary experience.",
      "For the past 5 years, he has worked at Executive Chef level, gaining experience in kitchen leadership, team management, menu development, operational organization, and maintaining professional standards.",
      "This combination of practical experience and creative ambition now forms the foundation for the next stage of his career.",
      "Chef Dmitry decided to join Gastronomist International because of its international character and the professional opportunities created through connections between chefs from different parts of the world.",
      "He sees value in being part of a community that brings together professionals with different levels of experience, culinary backgrounds, and international achievements.",
      "For him, the presence of highly accomplished chefs within the organization, including chefs with Michelin-level experience, represents an opportunity for inspiration, professional exchange, collaboration, and continued growth.",
      "His decision reflects a desire to become more connected with the global culinary community and to develop his own professional direction on an international level.",
      "Chef Dmitry’s current focus is the continued development of Enigma Cuisine and the creation of his own gastronomic dinners.",
      "His goal is to build a recognizable culinary identity that reflects his experience, creativity, and personal approach to food.",
      "For Chef Dmitry, gastronomy is not only about preparing dishes.",
      "It is about creating intrigue, emotion, and an experience that remains with the guest after the dinner is over.",
      "Enigma Cuisine is his way of transforming a meal into a personal culinary expression.",
      "Professional Information:",
      "Full Name: Dmitry Vladimirovich Shirokov",
      "Professional Experience: 14 years",
      "Executive Chef Experience: 5 years",
      "Location: Balashikha, Zheleznodorozhny, Russia",
      "Culinary Direction: Enigma Cuisine · Author Gastronomic Dinners",
      "Email: Shirokovd86@mail.ru",
      "Phone: +8 926 877 7441",
    ],
    translations: {
      ru: {
        title:
          "Шеф-повар Дмитрий Владимирович Широков: формируя кулинарную идентичность через Enigma Cuisine",
        description:
          "Gastronomist International представляет шеф-повара Дмитрия Владимировича Широкова — Executive Chef из Балашихи, Железнодорожного, Россия, с 14-летним профессиональным опытом и 5-летним опытом руководства кухней, который сегодня развивает собственную авторскую гастрономическую концепцию Enigma Cuisine.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Executive Chef",
          "Россия",
          "Enigma Cuisine",
          "Гастрономические ужины",
          "Кулинарное лидерство",
          "Gastronomist International",
        ],
        region: "Россия",
        content: [
          "Шеф-повар Дмитрий Владимирович Широков — кулинарный профессионал из Балашихи, Железнодорожного, Россия, с 14-летним профессиональным опытом, включая 5 лет работы в должности Executive Chef.",
          "На протяжении своей карьеры он проявлял особый интерес к созданию еды, выходящей за рамки привычных ресторанных форматов и дарящей гостям более личный и запоминающийся гастрономический опыт.",
          "В настоящее время шеф Дмитрий развивает собственное кулинарное направление под концепцией Enigma Cuisine.",
          "Эта идея основана на авторских гастрономических ужинах, где каждое меню создаётся как личная интерпретация ингредиентов, техник, эмоций и кулинарных идей.",
          "Не ограничивая себя одной традиционной кухней, шеф Дмитрий стремится создавать гастрономические впечатления, пробуждающие любопытство и ощущение открытия.",
          "Enigma Cuisine отражает подход, при котором каждый ужин может стать уникальной кулинарной историей, построенной на творчестве, неожиданности, индивидуальности и личном видении шефа.",
          "Через эти гастрономические ужины он планирует представлять блюда, выражающие его собственный стиль, продолжая профессионально развиваться и открывать новые кулинарные возможности.",
          "Имея за плечами более десяти лет работы на профессиональной кухне, шеф Дмитрий накопил 14 лет кулинарного опыта.",
          "Последние 5 лет он работает на уровне Executive Chef, получая опыт в руководстве кухней, управлении командой, разработке меню, организации операционной деятельности и поддержании профессиональных стандартов.",
          "Это сочетание практического опыта и творческих амбиций сегодня формирует основу следующего этапа его карьеры.",
          "Шеф Дмитрий решил присоединиться к Gastronomist International благодаря международному характеру организации и профессиональным возможностям, которые создаются через связи между шефами из разных стран мира.",
          "Он видит ценность в том, чтобы быть частью сообщества, объединяющего профессионалов с разным уровнем опыта, кулинарным бэкграундом и международными достижениями.",
          "Для него присутствие в организации высококвалифицированных шефов, включая поваров с мишленовским уровнем опыта, представляет возможность для вдохновения, профессионального обмена, сотрудничества и дальнейшего роста.",
          "Его решение отражает стремление стать более связанным с глобальным кулинарным сообществом и развивать своё профессиональное направление на международном уровне.",
          "Сейчас в центре внимания шефа Дмитрия — дальнейшее развитие Enigma Cuisine и создание собственных гастрономических ужинов.",
          "Его цель — сформировать узнаваемую кулинарную идентичность, отражающую его опыт, творчество и личный подход к еде.",
          "Для шефа Дмитрия гастрономия — это не только приготовление блюд.",
          "Это создание интриги, эмоции и впечатления, которое остаётся с гостем даже после завершения ужина.",
          "Enigma Cuisine — это его способ превратить трапезу в личное кулинарное высказывание.",
          "Профессиональная информация:",
          "Полное имя: Дмитрий Владимирович Широков",
          "Профессиональный опыт: 14 лет",
          "Опыт работы в должности Executive Chef: 5 лет",
          "Локация: Балашиха, Железнодорожный, Россия",
          "Кулинарное направление: Enigma Cuisine · Авторские гастрономические ужины",
          "Email: Shirokovd86@mail.ru",
          "Телефон: +8 926 877 7441",
        ],
      },
    },
  },

  {
    slug: "chef-dmitry-valeryevich-kirillov-executive-chef-kitchen-leadership-cheboksary",
    title:
      "Chef Dmitry Valeryevich Kirillov: From Childhood Interest to Professional Kitchen Leadership",
    description:
      "Gastronomist International profiles Chef Dmitry Valeryevich Kirillov, Executive Chef working within a small network of canteens including Stolovaya 21 in Cheboksary, Russia, whose journey reflects practical growth from culinary school and apprenticeship to kitchen leadership, team organization, and operational responsibility.",
    date: "2026-10-17",
    banner: "/images/dmitry.png",
    author: "Gastronomist International",
    tags: [
      "Chef Recognition",
      "Executive Chef",
      "Russia",
      "Kitchen Leadership",
      "Culinary Journey",
      "Gastronomist International",
    ],
    region: "Russia",
    content: [
      "For Chef Dmitry Valeryevich Kirillov, cooking has been part of his life since childhood.",
      "Today, at 35 years old, he works as an Executive Chef within a small network of canteens, including Stolovaya 21 in Cheboksary, Russia.",
      "He has been working in the Executive Chef position for approximately one year, leading a small kitchen team and taking responsibility not only for food preparation, but also for the organization and consistency of the entire operation.",
      "His journey into gastronomy was not immediate or certain. Like many professionals, he discovered his true connection with the kitchen only after experiencing the realities of the profession first-hand.",
      "After completing the ninth grade, Dmitry enrolled in a culinary vocational school.",
      "His parents initially approached the decision with caution, hoping he might choose what they considered a more secure profession.",
      "Dmitry himself was not completely certain at first.",
      "That changed when he began working as a kitchen apprentice.",
      "It was there that he quickly understood that professional cooking was very different from the glamorous image often presented on television.",
      "The reality of the kitchen meant early mornings, intense heat, heavy boxes, long working hours, physical effort, and strict discipline.",
      "Rather than discouraging him, that reality helped him understand the true character of the profession.",
      "As the years passed, Dmitry gradually earned greater responsibility in the kitchen.",
      "He began with side dishes, later progressed to the hot kitchen, and eventually became involved in the development of new dishes.",
      "Each stage of this progression strengthened his practical skills and gave him a broader understanding of professional kitchen operations.",
      "His journey reflects the traditional path of culinary development: learning through repetition, discipline, observation, responsibility, and continuous improvement.",
      "Today, Chef Dmitry leads a small kitchen team.",
      "For him, being an Executive Chef means much more than creating menus.",
      "His responsibilities include monitoring ingredients and product quality, organizing the daily work of the kitchen, distributing responsibilities among team members, training and supporting younger cooks, maintaining discipline and consistency, and taking responsibility for every plate served to the guest.",
      "This transition from cook to kitchen leader has given him a new understanding of the profession.",
      "Leadership requires not only culinary knowledge, but also organization, communication, patience, accountability, and the ability to support the development of others.",
      "Chef Dmitry's story reflects an important reality of professional gastronomy.",
      "A kitchen career is rarely built through immediate success.",
      "It develops gradually — through demanding shifts, physical work, mistakes, learning, and the willingness to accept greater responsibility.",
      "The professional kitchen taught him that every position matters.",
      "From preparing a simple garnish to managing an entire team, each responsibility contributes to the final guest experience.",
      "With his first year as an Executive Chef underway, Dmitry continues to develop his skills as both a culinary professional and team leader.",
      "His career is still evolving, but the foundation was built years earlier — from culinary school and apprenticeship to the hot kitchen, menu development, and eventually kitchen management.",
      "His story demonstrates that professional growth in gastronomy is built step by step.",
      "For Chef Dmitry Valeryevich Kirillov, the kitchen became a profession not because it was easy, but because through its discipline, responsibility, and constant demands, he discovered where he belonged.",
    ],
    translations: {
      ru: {
        title:
          "Шеф-повар Дмитрий Валерьевич Кириллов: от детского интереса к профессиональному лидерству на кухне",
        description:
          "Gastronomist International представляет шеф-повара Дмитрия Валерьевича Кириллова — Executive Chef, работающего в небольшой сети столовых, включая Stolovaya 21 в Чебоксарах, Россия. Его путь отражает практический профессиональный рост — от кулинарного училища и работы учеником до руководства кухней, организации команды и операционной ответственности.",
        author: "Gastronomist International",
        tags: [
          "Признание шеф-повара",
          "Executive Chef",
          "Россия",
          "Лидерство на кухне",
          "Кулинарный путь",
          "Gastronomist International",
        ],
        region: "Россия",
        content: [
          "Для шеф-повара Дмитрия Валерьевича Кириллова кулинария стала частью жизни ещё с детства.",
          "Сегодня, в возрасте 35 лет, он работает Executive Chef в небольшой сети столовых, включая Stolovaya 21 в Чебоксарах, Россия.",
          "Примерно один год он занимает должность Executive Chef, руководя небольшой командой кухни и отвечая не только за приготовление блюд, но и за организацию и стабильность всей операционной работы.",
          "Его путь в гастрономию не был мгновенным и однозначным. Как и многие профессионалы, он по-настоящему осознал свою связь с кухней только после того, как столкнулся с реальностью профессии на практике.",
          "После окончания девятого класса Дмитрий поступил в кулинарное профессиональное училище.",
          "Поначалу его родители относились к этому решению с осторожностью, надеясь, что он выберет более, как им казалось, надёжную профессию.",
          "Сам Дмитрий тоже не был до конца уверен в своём выборе.",
          "Это изменилось, когда он начал работать кухонным учеником.",
          "Именно тогда он быстро понял, что профессиональная кулинария сильно отличается от гламурного образа, который часто показывают по телевидению.",
          "Реальность кухни означала ранние подъёмы, сильную жару, тяжёлые коробки, долгие рабочие часы, физический труд и строгую дисциплину.",
          "Вместо того чтобы оттолкнуть его, эта реальность помогла ему понять истинный характер профессии.",
          "С годами Дмитрий постепенно получал всё больше ответственности на кухне.",
          "Он начинал с гарниров, затем перешёл в горячий цех и в итоге стал участвовать в разработке новых блюд.",
          "Каждый этап этого пути укреплял его практические навыки и давал более глубокое понимание работы профессиональной кухни.",
          "Его история отражает традиционный путь кулинарного развития: обучение через повторение, дисциплину, наблюдение, ответственность и постоянное совершенствование.",
          "Сегодня шеф Дмитрий руководит небольшой кухонной командой.",
          "Для него быть Executive Chef — значит намного больше, чем просто составлять меню.",
          "В круг его обязанностей входит контроль ингредиентов и качества продуктов, организация ежедневной работы кухни, распределение задач между членами команды, обучение и поддержка молодых поваров, поддержание дисциплины и стабильности, а также ответственность за каждую тарелку, поданную гостю.",
          "Этот переход от повара к руководителю кухни дал ему новое понимание профессии.",
          "Лидерство требует не только кулинарных знаний, но и организованности, коммуникации, терпения, ответственности и способности поддерживать развитие других.",
          "История шефа Дмитрия отражает важную реальность профессиональной гастрономии.",
          "Карьера на кухне редко строится через мгновенный успех.",
          "Она развивается постепенно — через тяжёлые смены, физический труд, ошибки, обучение и готовность принимать на себя всё большую ответственность.",
          "Профессиональная кухня научила его тому, что каждая позиция имеет значение.",
          "От приготовления простого гарнира до управления целой командой — каждая обязанность влияет на итоговый опыт гостя.",
          "Продолжая свой первый год в должности Executive Chef, Дмитрий развивает себя как кулинарный профессионал и как лидер команды.",
          "Его карьера всё ещё развивается, но фундамент был заложен много лет назад — от кулинарного училища и работы учеником до горячего цеха, разработки блюд и, в итоге, управления кухней.",
          "Его история доказывает, что профессиональный рост в гастрономии строится шаг за шагом.",
          "Для шеф-повара Дмитрия Валерьевича Кириллова кухня стала профессией не потому, что это было легко, а потому, что именно через дисциплину, ответственность и постоянные требования он понял, что это его место.",
        ],
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