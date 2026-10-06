// components/data/gastronomist-members.ts

export type MemberLanguage = "en" | "ru"

export type MemberTranslation = {
  name?: string
  role?: string
  blurb?: string
  region?: string
  specialty?: string
  focus?: string
}

export type ChefDirectoryMember = {
  name: string
  role: string
  blurb: string
  img: string
  region: string
  specialty: string
  translations?: Partial<Record<MemberLanguage, MemberTranslation>>
}

export type AboutLeaderMember = {
  name: string
  role: string
  blurb: string
  img: string
  region: string
  focus: string
  translations?: Partial<Record<MemberLanguage, MemberTranslation>>
}

export const chefDirectoryMembers: ChefDirectoryMember[] = [
  {
    name: "Chef Arkady Nikolaevich Zorin",
    role: "International Member",
    blurb:
      "Executive Chef of “Vstrecha Druzey” Restaurant in Moscow with 17 years of culinary experience and eight years in executive kitchen leadership. Inspired by his mother’s cooking, he explores fermentation and traditional food preservation and participates in culinary competitions.",
    img: "/images/zorin.png",
    region: "Russia",
    specialty: "Fermentation & Food Preservation",
    translations: {
      ru: {
        name: "Шеф-повар Зорин Аркадий Николаевич",
        role: "Международный член",
        blurb:
          "Шеф-повар московского ресторана «Встреча друзей» с 17-летним опытом в кулинарии и восемью годами руководства профессиональной кухней. Вдохновлённый кулинарными традициями своей матери, он изучает ферментацию и традиционные способы сохранения продуктов, а также участвует в кулинарных соревнованиях.",
        region: "Россия",
        specialty: "Ферментация и сохранение продуктов",
      },
    },
  },
  {
    name: "Chef Igor Yuryevich Sudarkin",
    role: "International Member",
    blurb:
      "Executive Chef with 16 years of professional culinary experience, including six years in executive kitchen leadership. His background spans Russian, Italian, and Turkish cuisine, family restaurant operations, resort and sanatorium hospitality, catering, gastronomy forums, and children’s culinary masterclasses.",
    img: "/images/igor.png",
    region: "Russia",
    specialty: "Russian, Italian & Turkish Cuisine",
    translations: {
      ru: {
        name: "Шеф-повар Игорь Юрьевич Сударкин",
        role: "Международный член",
        blurb:
          "Executive Chef с 16-летним профессиональным опытом в кулинарной индустрии, включая шесть лет руководства кухней. Его профессиональный путь охватывает русскую, итальянскую и турецкую кухню, работу в семейном ресторане, курортной и санаторной сфере, кейтеринг, гастрономические форумы и детские кулинарные мастер-классы.",
        region: "Россия",
        specialty: "Русская, итальянская и турецкая кухня",
      },
    },
  },
  {
    name: "Chef Morozov Nikolai Nikolaevich",
    role: "International Member",
    blurb:
      "Executive Chef of Restoratsiya “Shalyapin” with 15 years of culinary experience, specializing in the revival and reinterpretation of high Russian cuisine from the Silver Age. His work combines historical research, authentic early 20th-century recipes, modern technique, refined presentation, and the preservation of Russian culinary heritage.",
    img: "/images/morozov.png",
    region: "Russia",
    specialty: "Russian Culinary Heritage",
    translations: {
      ru: {
        name: "Шеф-повар Морозов Николай Николаевич",
        role: "Международный член",
        blurb:
          "Executive Chef Ресторацiи «ШаляпинЪ» с 15-летним профессиональным кулинарным опытом, специализирующийся на возрождении и переосмыслении высокой русской кухни Серебряного века. Его работа объединяет исторические исследования, аутентичные рецептуры начала XX столетия, современные техники, современную подачу и сохранение российского кулинарного наследия.",
        region: "Россия",
        specialty: "Русское кулинарное наследие",
      },
    },
  },
  {
    name: "Tatyana Yuryevna Yukhimishena",
    role: "International Member",
    blurb:
      "Restaurateur, entrepreneur, business leader, and co-founder of the family restaurant project “Bulba & Borsch.” Her professional approach combines restaurant operations, team leadership, guest experience, national cuisine, cultural preservation, financial discipline, and continuous business development.",
    img: "/images/tatyana.png",
    region: "Russia",
    specialty: "Restaurant Leadership & Hospitality",
    translations: {
      ru: {
        name: "Татьяна Юрьевна Юхимишена",
        role: "Международный член",
        blurb:
          "Ресторатор, предприниматель, руководитель и одна из основателей семейного ресторанного проекта «Бульба и Борщ». Её профессиональный подход объединяет ресторанные операции, управление командой, гостевой опыт, национальную кухню, сохранение культурных традиций, финансовую дисциплину и постоянное развитие бизнеса.",
        region: "Россия",
        specialty: "Ресторанное лидерство и гостеприимство",
      },
    },
  },
  {
    name: "Chef Lilia Vladimirovna Gilfanova",
    role: "International Member",
    blurb:
      "Chef and catering professional with more than 15 years of experience in gastronomy and over five years working professionally as a Chef. Her work includes catering, private functions, off-site events, traditional plov prepared over an open fire, culinary storytelling, and children’s culinary masterclasses.",
    img: "/images/lilia.png",
    region: "Russia",
    specialty: "Catering & Culinary Education",
    translations: {
      ru: {
        name: "Шеф-повар Лилия Владимировна Гильфанова",
        role: "Международный член",
        blurb:
          "Шеф-повар и специалист по кейтерингу с более чем 15-летним опытом работы в гастрономии и более чем пятилетним профессиональным опытом в должности шеф-повара. Её деятельность включает кейтеринг, частные и выездные мероприятия, приготовление традиционного плова на открытом огне, кулинарное повествование и проведение детских кулинарных мастер-классов.",
        region: "Россия",
        specialty: "Кейтеринг и кулинарное образование",
      },
    },
  },
  {
    name: "Chef Andrey Evgenyevich Lodygin",
    role: "International Member",
    blurb:
      "Executive Chef of the gluten-free café and bakery Emerald City in Nizhny Novgorod, Russia, with 23 years of culinary experience. His professional journey spans Japanese, Russian, Italian, French, Chinese, Russian Northern, and gluten-free gastronomy, reflecting a career built through craft, discovery, reinvention, and continuous professional development.",
    img: "/images/andrey.png",
    region: "Russia",
    specialty: "Gluten-Free Gastronomy",
    translations: {
      ru: {
        name: "Chef Andrey Evgenyevich Lodygin",
        role: "Международный член",
        blurb:
          "Executive Chef безглютенового кафе и пекарни «Изумрудный город» в Нижнем Новгороде, Россия, с 23-летним кулинарным опытом. Его профессиональный путь охватывает японскую, русскую, итальянскую, французскую, китайскую, северорусскую и безглютеновую гастрономию, отражая карьеру, построенную на мастерстве, открытиях, профессиональном переосмыслении и постоянном развитии.",
        region: "Россия",
        specialty: "Безглютеновая гастрономия",
      },
    },
  },
  {
    name: "Chef Ilya Alexandrovich Koptelov",
    role: "International Member",
    blurb:
      "Russian culinary professional and Food Service Technology Engineer with more than 20 years of experience in culinary operations, food production, menu development, and modern food-service technology. His career is built on family culinary heritage, professional restaurant experience, technological discipline, and the development of structured food-service systems.",
    img: "/images/alexandrovich.png",
    region: "Russia",
    specialty: "Food Service Technology",
    translations: {
      ru: {
        name: "Chef Ilya Alexandrovich Koptelov",
        role: "Международный член",
        blurb:
          "Российский кулинарный профессионал и инженер-технолог общественного питания с более чем 20-летним опытом в кулинарных операциях, пищевом производстве, разработке меню и современных food-service технологиях. Его карьера построена на семейном кулинарном наследии, профессиональном ресторанном опыте, технологической дисциплине и развитии структурированных систем общественного питания.",
        region: "Россия",
        specialty: "Технология общественного питания",
      },
    },
  },
  {
    name: "Chef Gaetano Zambito",
    role: "International Member",
    blurb:
      "Italian chef, restaurateur, brand chef, culinary educator, and Ambassador of Taste with extensive international experience across Italy, Germany, Spain, Iran, and Russia. His career is rooted in authentic Italian and Mediterranean cuisine, entrepreneurship, hospitality leadership, culinary education, and professional gastronomy.",
    img: "/images/gaetano.png",
    region: "Italy / Russia",
    specialty: "Italian-Mediterranean Cuisine",
    translations: {
      ru: {
        name: "Chef Gaetano Zambito",
        role: "Международный член",
        blurb:
          "Итальянский шеф-повар, ресторатор, бренд-шеф, кулинарный преподаватель и Ambassador of Taste с обширным международным опытом в Италии, Германии, Испании, Иране и России. Его карьера основана на аутентичной итальянской и средиземноморской кухне, предпринимательстве, hospitality-лидерстве, кулинарном образовании и профессиональной гастрономии.",
        region: "Италия / Россия",
        specialty: "Итальянско-средиземноморская кухня",
      },
    },
  },
  {
    name: "Chef Pavel Sergeyevich Belyanin",
    role: "International Member",
    blurb:
      "International Member representing Russia, recognized for competition achievements including Silver Medalist at the Battle of Restaurateurs in Ulyanovsk, participant in the Battle of Chefs, Bronze Medalist in a Barbecue Battle, and meaningful community involvement through culinary master classes for children with disabilities.",
    img: "/images/pavel.png",
    region: "Russia",
    specialty: "Culinary Competition",
    translations: {
      ru: {
        name: "Chef Pavel Sergeyevich Belyanin",
        role: "Международный член",
        blurb:
          "Международный член, представляющий Россию, отмеченный кулинарными достижениями, включая серебряную медаль в Battle of Restaurateurs в Ульяновске, участие в Battle of Chefs, бронзовую медаль в Barbecue Battle, а также значимое участие в общественных кулинарных мастер-классах для детей с инвалидностью.",
        region: "Россия",
        specialty: "Кулинарные соревнования",
      },
    },
  },
  {
    name: "Chef Ivan Antonov",
    role: "International Member",
    blurb:
      "Executive Chef within the AMAKS Hotels & Resorts network, with 18 years of hospitality experience, five years of Executive Chef leadership, and participation in two Russian national culinary records.",
    img: "/images/ivan.png",
    region: "Russia",
    specialty: "Hospitality Leadership",
    translations: {
      ru: {
        name: "Chef Ivan Antonov",
        role: "Международный член",
        blurb:
          "Executive Chef в сети AMAKS Hotels & Resorts, с 18-летним опытом в hospitality, пятью годами лидерства на уровне Executive Chef и участием в двух национальных кулинарных рекордах России.",
        region: "Россия",
        specialty: "Лидерство в hospitality",
      },
    },
  },
  {
    name: "Chef Alexey Alexandrovich Zhigulin",
    role: "International Member",
    blurb:
      "Executive Chef at Ikorets Country Park Hotel, with 27 years in the culinary profession, more than 15 years in executive culinary leadership, and a career shaped by discipline, naval culinary service, professional training, and long-term commitment to the craft.",
    img: "/images/Alexey.png",
    region: "Russia",
    specialty: "Executive Chef Leadership",
    translations: {
      ru: {
        name: "Chef Alexey Alexandrovich Zhigulin",
        role: "Международный член",
        blurb:
          "Executive Chef в Ikorets Country Park Hotel, с 27-летним опытом в кулинарной профессии, более чем 15-летним опытом руководства на уровне Executive Chef, а также карьерой, сформированной дисциплиной, кулинарной службой на флоте, профессиональным обучением и долгосрочной преданностью ремеслу.",
        region: "Россия",
        specialty: "Лидерство Executive Chef",
      },
    },
  },
  {
    name: "Chef Mark Lester Morales",
    role: "International Member",
    blurb:
      "International Member representing North Macedonia and Chef de Partie with 14 years of experience in the five-star hotel industry. Skilled in professional kitchen operations, food preparation, cooking, plating, food safety, HACCP principles, mise en place, portion control, teamwork, cleanliness, and consistent high-quality food standards.",
    img: "/images/mark.png",
    region: "North Macedonia",
    specialty: "Five-Star Hotel Kitchen",
    translations: {
      ru: {
        name: "Chef Mark Lester Morales",
        role: "Международный член",
        blurb:
          "Международный член, представляющий Северную Македонию, Chef de Partie с 14-летним опытом работы в индустрии пятизвёздочных отелей. Обладает навыками профессиональной кухонной работы, подготовки продуктов, приготовления, подачи блюд, пищевой безопасности, принципов HACCP, mise en place, контроля порций, командной работы, чистоты и стабильных стандартов высокого качества.",
        region: "Северная Македония",
        specialty: "Кухня пятизвёздочного отеля",
      },
    },
  },
  {
    name: "Chef Noor",
    role: "International Member",
    blurb:
      "Representing the new wave of modern Middle Eastern gastronomy from the GCC, with a focus on culinary excellence, cultural identity, and professional recognition.",
    img: "/images/gcc_noor.png",
    region: "GCC — Middle East",
    specialty: "Modern Gastronomy",
    translations: {
      ru: {
        name: "Chef Noor",
        role: "Международный член",
        blurb:
          "Представляет новую волну современной ближневосточной гастрономии из региона GCC, с акцентом на кулинарное мастерство, культурную идентичность и профессиональное признание.",
        region: "GCC — Ближний Восток",
        specialty: "Современная гастрономия",
      },
    },
  },
  {
    name: "Chef Mar",
    role: "International Member",
    blurb: "Specializes in modernizing traditional recipes with innovative techniques.",
    img: "/images/chefmar.png",
    region: "Asia",
    specialty: "Modern Heritage",
    translations: {
      ru: {
        name: "Chef Mar",
        role: "Международный член",
        blurb:
          "Специализируется на модернизации традиционных рецептов с помощью инновационных техник.",
        region: "Азия",
        specialty: "Современное наследие",
      },
    },
  },
  {
    name: "Chef Arman",
    role: "International Member",
    blurb: "Passionate about sustainable cooking and seasonal ingredients.",
    img: "/images/chefarman.png",
    region: "Europe",
    specialty: "Sustainability",
    translations: {
      ru: {
        name: "Chef Arman",
        role: "Международный член",
        blurb:
          "Увлечён устойчивой кулинарией и использованием сезонных ингредиентов.",
        region: "Европа",
        specialty: "Устойчивое развитие",
      },
    },
  },
  {
    name: "Chef Sandar",
    role: "International Member",
    blurb: "Renowned for artistic pastry creations blending flavor and design.",
    img: "/images/chefsandar.png",
    region: "Asia",
    specialty: "Pastry Arts",
    translations: {
      ru: {
        name: "Chef Sandar",
        role: "Международный член",
        blurb:
          "Известен художественными кондитерскими работами, объединяющими вкус и дизайн.",
        region: "Азия",
        specialty: "Кондитерское искусство",
      },
    },
  },
  {
    name: "Chef Deric",
    role: "International Member",
    blurb: "Expert in precision cooking and creative plating aesthetics.",
    img: "/images/chefderic.png",
    region: "Americas",
    specialty: "Modern Plating",
    translations: {
      ru: {
        name: "Chef Deric",
        role: "Международный член",
        blurb:
          "Эксперт в точной кулинарии и креативной эстетике подачи блюд.",
        region: "Америка",
        specialty: "Современная подача",
      },
    },
  },
  {
    name: "Chef Francis",
    role: "International Member",
    blurb: "Known for curating immersive dining experiences worldwide.",
    img: "/images/cheffrancis.png",
    region: "Europe",
    specialty: "Fine Dining",
    translations: {
      ru: {
        name: "Chef Francis",
        role: "Международный член",
        blurb:
          "Известен созданием глубоких гастрономических впечатлений по всему миру.",
        region: "Европа",
        specialty: "Высокая кухня",
      },
    },
  },
  {
    name: "Chef Rommel",
    role: "International Member",
    blurb: "Dedicated to training and mentoring the next generation of chefs.",
    img: "/images/chefrommel.png",
    region: "Asia",
    specialty: "Mentorship",
    translations: {
      ru: {
        name: "Chef Rommel",
        role: "Международный член",
        blurb:
          "Посвящает себя обучению и наставничеству следующего поколения шеф-поваров.",
        region: "Азия",
        specialty: "Наставничество",
      },
    },
  },
  {
    name: "Chef Kono",
    role: "International Member",
    blurb: "Blends global culinary heritage with modern techniques.",
    img: "/images/chefkono.png",
    region: "Oceania",
    specialty: "Fusion",
    translations: {
      ru: {
        name: "Chef Kono",
        role: "Международный член",
        blurb:
          "Объединяет мировое кулинарное наследие с современными техниками.",
        region: "Океания",
        specialty: "Фьюжн",
      },
    },
  },
]

export const aboutLeadershipMembers: AboutLeaderMember[] = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation, recognition, and professional connection.",
    img: "/images/president.png?v=2",
    region: "Global",
    focus: "Modern Gastronomy",
    translations: {
      ru: {
        name: "Chef Alexander Hardinan",
        role: "Основатель — Gastronomist International",
        blurb:
          "Основатель и идейный лидер Gastronomist International, создающий глобальную платформу для кулинарных инноваций, признания и профессиональных связей.",
        region: "Глобальный уровень",
        focus: "Современная гастрономия",
      },
    },
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage, education, and culinary innovation.",
    img: "/images/chefcox.png?v=2",
    region: "Global",
    focus: "Food Heritage",
    translations: {
      ru: {
        name: "Chef Alan Coxon",
        role: "Кулинарный советник",
        blurb:
          "Известный кулинарный консультант и телеведущий, поддерживающий мировое гастрономическое наследие, образование и кулинарные инновации.",
        region: "Глобальный уровень",
        focus: "Гастрономическое наследие",
      },
    },
  },
  {
    name: "Yulia Antonova — Mystic Mask",
    role: "Russia Representative — Honorary Cultural Partner",
    blurb:
      "Representing Gastronomist International in Russia through cultural leadership, artistic exchange, international collaboration, and professional recognition.",
    img: "/images/yulia.png",
    region: "Russia",
    focus: "Cultural Representation",
    translations: {
      ru: {
        name: "Юлия Антонова — Mystic Mask",
        role: "Представитель в России — почётный культурный партнёр",
        blurb:
          "Представляет Gastronomist International в России через культурное лидерство, художественный обмен, международное сотрудничество и профессиональное признание.",
        region: "Россия",
        focus: "Культурное представительство",
      },
    },
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representative",
    blurb:
      "Representing Gastronomist International through regional culinary leadership, professional connection, and global collaboration.",
    img: "/images/chefhamid.png?v=2",
    region: "Azerbaijan",
    focus: "Representation",
    translations: {
      ru: {
        name: "Chef Hamid Aloyev",
        role: "Представитель в Азербайджане",
        blurb:
          "Представляет Gastronomist International через региональное кулинарное лидерство, профессиональные связи и глобальное сотрудничество.",
        region: "Азербайджан",
        focus: "Представительство",
      },
    },
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representative",
    blurb:
      "Supporting the organization’s international presence through culinary representation, professional standards, and community engagement.",
    img: "/images/chefluzac.png?v=2",
    region: "France",
    focus: "Representation",
    translations: {
      ru: {
        name: "Chef Luzach H Hubert",
        role: "Представитель во Франции",
        blurb:
          "Поддерживает международное присутствие организации через кулинарное представительство, профессиональные стандарты и взаимодействие с сообществом.",
        region: "Франция",
        focus: "Представительство",
      },
    },
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representative",
    blurb:
      "Contributing to Gastronomist International’s mission by connecting culinary professionals and strengthening regional visibility.",
    img: "/images/chefthet.png?v=2",
    region: "Myanmar",
    focus: "Representation",
    translations: {
      ru: {
        name: "Chef Thet Aung Zaw",
        role: "Представитель в Мьянме",
        blurb:
          "Вносит вклад в миссию Gastronomist International, объединяя кулинарных профессионалов и укрепляя региональную видимость.",
        region: "Мьянма",
        focus: "Представительство",
      },
    },
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Arabia Representative",
    blurb:
      "Representing professional culinary excellence and supporting global recognition across hospitality and gastronomy communities.",
    img: "/images/chefwael.png?v=2",
    region: "Saudi Arabia",
    focus: "Representation",
    translations: {
      ru: {
        name: "Chef Wael Alyzed",
        role: "Представитель в Саудовской Аравии",
        blurb:
          "Представляет профессиональное кулинарное мастерство и поддерживает глобальное признание в сообществах гостеприимства и гастрономии.",
        region: "Саудовская Аравия",
        focus: "Представительство",
      },
    },
  },
]

function localizeMember<T extends ChefDirectoryMember | AboutLeaderMember>(
  member: T,
  language: MemberLanguage = "en"
): T {
  if (language === "en") {
    return member
  }

  const translation = member.translations?.[language]

  if (!translation) {
    return member
  }

  return {
    ...member,
    name: translation.name || member.name,
    role: translation.role || member.role,
    blurb: translation.blurb || member.blurb,
    region: translation.region || member.region,
    specialty:
      "specialty" in member
        ? translation.specialty || member.specialty
        : undefined,
    focus: "focus" in member ? translation.focus || member.focus : undefined,
  } as T
}

export function getLocalizedChefDirectoryMembers(
  language: MemberLanguage = "en"
): ChefDirectoryMember[] {
  return chefDirectoryMembers.map((member) => localizeMember(member, language))
}

export function getLocalizedAboutLeadershipMembers(
  language: MemberLanguage = "en"
): AboutLeaderMember[] {
  return aboutLeadershipMembers.map((member) => localizeMember(member, language))
}

export const activeMembersTotal =
  chefDirectoryMembers.length + aboutLeadershipMembers.length