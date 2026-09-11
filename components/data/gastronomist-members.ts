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
      "Representing North Macedonia as an International Member of Gastronomist International, known for his experience honed in a five-star hotel kitchen with discipline, precision, and professional culinary standards.",
    img: "/images/mark.png",
    region: "Europe",
    specialty: "Five-Star Hotel Kitchen",
    translations: {
      ru: {
        name: "Chef Mark Lester Morales",
        role: "Международный член",
        blurb:
          "Представляет Северную Македонию как международный член Gastronomist International, известный своим опытом, сформированным на кухне пятизвёздочного отеля, где важны дисциплина, точность и профессиональные кулинарные стандарты.",
        region: "Европа",
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