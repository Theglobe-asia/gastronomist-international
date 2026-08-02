// app/press/page.tsx
"use client"

import React from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import { useLanguage } from "@/components/LanguageProvider"

type H1Motion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"h1"> & MotionProps> &
    React.RefAttributes<HTMLHeadingElement>
>

type DivMotion = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentPropsWithoutRef<"div"> & MotionProps> &
    React.RefAttributes<HTMLDivElement>
>

type PressFact = {
  label: string
  value: string
}

type PressTimelineItem = {
  t: string
  d: string
}

type PressGalleryItem = {
  src: string
  label: string
}

type PressRelatedItem = {
  title: string
  href: string
  desc: string
  external?: boolean
}

const MotionH1 = motion.h1 as H1Motion
const MotionDiv = motion.div as DivMotion

const pressCopy = {
  en: {
    pressTitle: "Press",
    pressAccent: "Release",

    yuliaHeroAlt:
      "Yulia Antonova Mystic Mask honorary partnership with Gastronomist International",
    yuliaHeroCardTitle: "Latest Official Announcement",
    yuliaHeroCardDescription:
      "Honorary cultural partnership recognizing Yulia Antonova — Mystic Mask as the representative of Gastronomist International in Russia.",
    yuliaHeroEyebrow: "Latest Press Release • Editorial Release",
    yuliaHeroLead:
      "Gastronomist International Announces Honorary Partnership with Yulia Antonova, “Mystic Mask.”",
    yuliaHeroDescription:
      "Gastronomist International is honored to welcome Yulia Antonova, known by her stage name Mystic Mask, into an honorary cultural partnership that will represent the organization in Russia and support meaningful international cultural exchange.",

    yuliaFacts: [
      { label: "Category", value: "Honorary Cultural Partnership" },
      { label: "Representative", value: "Yulia Antonova — Mystic Mask" },
      { label: "Representation", value: "Gastronomist International in Russia" },
      { label: "Focus", value: "Culture • Art • Literature • Global Exchange" },
    ] as PressFact[],

    yuliaStats: [
      { label: "Country", value: "Russia" },
      { label: "Role", value: "Honorary Partner" },
      { label: "Creative Field", value: "Arts + Literature" },
      { label: "Mission", value: "Cultural Exchange" },
    ] as PressFact[],

    yuliaTimeline: [
      {
        t: "Official Announcement",
        d: "Gastronomist International announces an honorary cultural partnership with Yulia Antonova, known by her stage name Mystic Mask.",
      },
      {
        t: "Representation in Russia",
        d: "Yulia Antonova will represent Gastronomist International in Russia, strengthening international cultural connection and community engagement.",
      },
      {
        t: "Shared Purpose",
        d: "The partnership builds bridges between gastronomy, culture, art, literature, and meaningful human expression.",
      },
    ] as PressTimelineItem[],

    yuliaGallery: [
      { src: "/images/yulia-antonova-mystic-mask.png", label: "Mystic Mask" },
      { src: "/images/recognition.png", label: "Honorary Recognition" },
      { src: "/images/medal.png", label: "Global Partnership" },
    ] as PressGalleryItem[],

    yuliaRelated: [
      {
        title: "Read Journal Feature",
        href: "/blog/honorary-partnership-yulia-antonova-mystic-mask-russia",
        desc: "View the official Gastronomist Journal article about the Yulia Antonova honorary partnership.",
      },
      {
        title: "About Gastronomist",
        href: "/about",
        desc: "Our mission, vision, and leadership network.",
      },
      {
        title: "Explore Our Chefs",
        href: "/chefs",
        desc: "Meet members representing Gastronomist International worldwide.",
      },
    ] as PressRelatedItem[],

    editorialStoryEyebrow: "Editorial Story",
    yuliaStoryTitle: "Honorary partnership with cultural purpose.",
    yuliaStoryParagraphs: [
      "Gastronomist International is honored to announce an honorary cultural partnership with Yulia Antonova, known by her stage name Mystic Mask, a distinguished abstract artist, author, poet, songwriter, and respected cultural figure.",
      "Yulia Antonova serves as the Vice President of the Union of Abstract Artists of Russia and is an Honorary Member of the I.K. Aivazovsky Academy of Arts. She is also a valued member of the Union of Writers of Russia, with creative works that reflect artistic excellence, cultural heritage, emotional depth, and meaningful human expression.",
      "Beyond her artistic achievements, Yulia holds a Law Degree, bringing together creativity, intellectual insight, leadership, and cultural advocacy. Her diverse background represents the powerful connection between art, knowledge, identity, and international collaboration.",
    ],
    yuliaRepresentationEyebrow: "Russia Representation",
    yuliaRepresentationTitle:
      "Representing Gastronomist International in Russia.",
    yuliaRepresentationParagraphs: [
      "Through this honorary partnership, Yulia Antonova will represent Gastronomist International in Russia, serving as a cultural bridge for meaningful collaboration, artistic exchange, and international community engagement.",
      "Her role reflects Gastronomist International’s commitment to expanding its presence through respected leaders who embody creativity, culture, global connection, and professional recognition.",
    ],

    releaseTimelineEyebrow: "Release Timeline",
    releaseTimelineTitle: "Key points of the announcement.",
    inFocusEyebrow: "In Focus",
    inFocusTitle: "Recognition, partnership, and shared purpose.",
    yuliaGalleryAria: "Yulia Antonova press release focus gallery",
    welcomeEyebrow: "Welcome Statement",
    welcomeTitle:
      "Welcome to Gastronomist International, Yulia Antonova — Mystic Mask.",
    welcomeParagraph:
      "Your artistry, cultural dedication, and international creative presence are a meaningful addition to our global community.",

    atAGlance: "At a Glance",
    related: "Related",
    globalNetwork: "Global Network",
    yuliaGlobalTitle:
      "Culture, gastronomy, and international recognition.",
    yuliaGlobalParagraph:
      "Gastronomist International continues to build a global platform that connects chefs, creative leaders, hospitality professionals, and cultural advocates through recognition, storytelling, and meaningful collaboration.",

    previousPressAria: "Previous press release",
    previousPressEyebrow: "Previous Official Press Release",
    previousPressTitle: "Strategic Collaboration with CSF International",
    previousPressParagraph:
      "The original CSF International announcement remains fully preserved below, including its original image, facts, editorial story, timeline, gallery, related details, and global network section.",

    csfHeroAlt: "Gastronomist International and CSF International collaboration",
    csfHeroCardTitle: "Official Announcement",
    csfHeroCardDescription:
      "Strategic collaboration supporting chefs, communities, and artisan traditions.",
    csfHeroEyebrow: "Official Announcement • Editorial Release",
    csfHeroLead:
      "Gastronomist International Announces Strategic Collaboration with CSF International.",
    csfHeroDescription:
      "This collaboration aligns culinary leadership with community-driven action, connecting influence to initiatives that support chefs, empower communities, and preserve artisan traditions.",

    csfFacts: [
      { label: "Category", value: "Strategic Collaboration" },
      { label: "Partners", value: "Gastronomist International × CSF International" },
      {
        label: "Focus",
        value: "Support chefs • Empower communities • Preserve artisan traditions",
      },
      { label: "Reach", value: "Worldwide" },
    ] as PressFact[],

    csfStats: [
      { label: "Global Members", value: "Worldwide" },
      { label: "Community", value: "Culinary Professionals" },
      { label: "Mission", value: "Support + Recognition" },
      { label: "Standard", value: "Excellence" },
    ] as PressFact[],

    csfTimeline: [
      {
        t: "Announcement",
        d: "Gastronomist International confirms strategic collaboration with CSF International.",
      },
      {
        t: "Shared Mission",
        d: "Supporting chefs, empowering communities in need, and preserving artisan traditions.",
      },
      {
        t: "Sustainable Action",
        d: "Creating practical opportunities and meaningful assistance where it matters most.",
      },
    ] as PressTimelineItem[],

    csfGallery: [
      { src: "/images/medal.png", label: "Recognition" },
      { src: "/images/recognition.png", label: "Global Acknowledgment" },
      { src: "/images/partnership.png", label: "Strategic Partnership" },
    ] as PressGalleryItem[],

    csfRelated: [
      {
        title: "Explore Our Chefs",
        href: "/chefs",
        desc: "Meet members representing Gastronomist International worldwide.",
      },
      {
        title: "About Gastronomist",
        href: "/about",
        desc: "Our mission, vision, and leadership network.",
      },
      {
        title: "Visit CSF Intl",
        href: "https://www.csfint.com/",
        desc: "Learn more about CSF International’s work and impact.",
        external: true,
      },
    ] as PressRelatedItem[],

    csfStoryTitle: "Partnership with purpose.",
    csfStoryParagraphs: [
      "Gastronomist International has officially partnered with CSF International in a shared mission to support chefs, empower communities in need, and preserve artisan traditions.",
      "The collaboration reflects a commitment to meaningful action, professional recognition, cultural preservation, and sustainable support within the global culinary community.",
    ],
    csfGalleryAria: "In Focus falling gallery",
    csfGlobalTitle: "Professional culinary recognition worldwide.",
    csfGlobalParagraph:
      "Gastronomist International continues to build a platform for chefs, hospitality professionals, and culinary leaders across regions.",
  },

  ru: {
    pressTitle: "Пресс",
    pressAccent: "Релиз",

    yuliaHeroAlt:
      "Юлия Антонова Mystic Mask почётное партнёрство с Gastronomist International",
    yuliaHeroCardTitle: "Последнее официальное объявление",
    yuliaHeroCardDescription:
      "Почётное культурное партнёрство с признанием Юлии Антоновой — Mystic Mask как представителя Gastronomist International в России.",
    yuliaHeroEyebrow: "Последний пресс-релиз • редакционная публикация",
    yuliaHeroLead:
      "Gastronomist International объявляет о почётном партнёрстве с Юлией Антоновой, «Mystic Mask».",
    yuliaHeroDescription:
      "Gastronomist International с честью приветствует Юлию Антонову, известную под творческим именем Mystic Mask, в рамках почётного культурного партнёрства, через которое она будет представлять организацию в России и поддерживать значимый международный культурный обмен.",

    yuliaFacts: [
      { label: "Категория", value: "Почётное культурное партнёрство" },
      { label: "Представитель", value: "Юлия Антонова — Mystic Mask" },
      { label: "Представительство", value: "Gastronomist International в России" },
      { label: "Фокус", value: "Культура • Искусство • Литература • Глобальный обмен" },
    ] as PressFact[],

    yuliaStats: [
      { label: "Страна", value: "Россия" },
      { label: "Роль", value: "Почётный партнёр" },
      { label: "Творческая сфера", value: "Искусство + литература" },
      { label: "Миссия", value: "Культурный обмен" },
    ] as PressFact[],

    yuliaTimeline: [
      {
        t: "Официальное объявление",
        d: "Gastronomist International объявляет о почётном культурном партнёрстве с Юлией Антоновой, известной под творческим именем Mystic Mask.",
      },
      {
        t: "Представительство в России",
        d: "Юлия Антонова будет представлять Gastronomist International в России, укрепляя международные культурные связи и взаимодействие с сообществом.",
      },
      {
        t: "Общая цель",
        d: "Партнёрство создаёт мосты между гастрономией, культурой, искусством, литературой и значимым человеческим самовыражением.",
      },
    ] as PressTimelineItem[],

    yuliaGallery: [
      { src: "/images/yulia-antonova-mystic-mask.png", label: "Mystic Mask" },
      { src: "/images/recognition.png", label: "Почётное признание" },
      { src: "/images/medal.png", label: "Глобальное партнёрство" },
    ] as PressGalleryItem[],

    yuliaRelated: [
      {
        title: "Читать публикацию журнала",
        href: "/blog/honorary-partnership-yulia-antonova-mystic-mask-russia",
        desc: "Откройте официальную статью Gastronomist Journal о почётном партнёрстве с Юлией Антоновой.",
      },
      {
        title: "О Gastronomist",
        href: "/about",
        desc: "Наша миссия, видение и лидерская сеть.",
      },
      {
        title: "Наши шеф-повара",
        href: "/chefs",
        desc: "Познакомьтесь с участниками, представляющими Gastronomist International по всему миру.",
      },
    ] as PressRelatedItem[],

    editorialStoryEyebrow: "Редакционная история",
    yuliaStoryTitle: "Почётное партнёрство с культурной целью.",
    yuliaStoryParagraphs: [
      "Gastronomist International с честью объявляет о почётном культурном партнёрстве с Юлией Антоновой, известной под творческим именем Mystic Mask, выдающейся абстрактной художницей, автором, поэтом, автором песен и уважаемой культурной фигурой.",
      "Юлия Антонова является вице-президентом Союза абстрактных художников России и почётным членом Академии художеств имени И. К. Айвазовского. Она также является ценным членом Союза писателей России, а её творческие работы отражают художественное мастерство, культурное наследие, эмоциональную глубину и значимое человеческое выражение.",
      "Помимо художественных достижений, Юлия имеет юридическое образование, объединяя творчество, интеллектуальное видение, лидерство и культурную деятельность. Её многогранный путь отражает сильную связь между искусством, знаниями, идентичностью и международным сотрудничеством.",
    ],
    yuliaRepresentationEyebrow: "Представительство в России",
    yuliaRepresentationTitle:
      "Представляет Gastronomist International в России.",
    yuliaRepresentationParagraphs: [
      "В рамках этого почётного партнёрства Юлия Антонова будет представлять Gastronomist International в России, выступая культурным мостом для значимого сотрудничества, художественного обмена и международного взаимодействия с сообществом.",
      "Её роль отражает стремление Gastronomist International расширять своё присутствие через уважаемых лидеров, которые воплощают творчество, культуру, глобальные связи и профессиональное признание.",
    ],

    releaseTimelineEyebrow: "Хронология релиза",
    releaseTimelineTitle: "Ключевые пункты объявления.",
    inFocusEyebrow: "В фокусе",
    inFocusTitle: "Признание, партнёрство и общая цель.",
    yuliaGalleryAria: "Галерея фокуса пресс-релиза Юлии Антоновой",
    welcomeEyebrow: "Приветственное заявление",
    welcomeTitle:
      "Добро пожаловать в Gastronomist International, Юлия Антонова — Mystic Mask.",
    welcomeParagraph:
      "Ваше искусство, культурная преданность и международное творческое присутствие являются значимым дополнением к нашему глобальному сообществу.",

    atAGlance: "Краткий обзор",
    related: "Связанные материалы",
    globalNetwork: "Глобальная сеть",
    yuliaGlobalTitle:
      "Культура, гастрономия и международное признание.",
    yuliaGlobalParagraph:
      "Gastronomist International продолжает создавать глобальную платформу, которая объединяет шеф-поваров, творческих лидеров, специалистов индустрии гостеприимства и культурных представителей через признание, сторителлинг и значимое сотрудничество.",

    previousPressAria: "Предыдущий пресс-релиз",
    previousPressEyebrow: "Предыдущий официальный пресс-релиз",
    previousPressTitle: "Стратегическое сотрудничество с CSF International",
    previousPressParagraph:
      "Оригинальное объявление CSF International полностью сохранено ниже, включая исходное изображение, факты, редакционную историю, хронологию, галерею, связанные материалы и раздел глобальной сети.",

    csfHeroAlt: "Сотрудничество Gastronomist International и CSF International",
    csfHeroCardTitle: "Официальное объявление",
    csfHeroCardDescription:
      "Стратегическое сотрудничество в поддержку шеф-поваров, сообществ и ремесленных традиций.",
    csfHeroEyebrow: "Официальное объявление • редакционная публикация",
    csfHeroLead:
      "Gastronomist International объявляет о стратегическом сотрудничестве с CSF International.",
    csfHeroDescription:
      "Это сотрудничество объединяет кулинарное лидерство с общественно ориентированными инициативами, направленными на поддержку шеф-поваров, расширение возможностей сообществ и сохранение ремесленных традиций.",

    csfFacts: [
      { label: "Категория", value: "Стратегическое сотрудничество" },
      { label: "Партнёры", value: "Gastronomist International × CSF International" },
      {
        label: "Фокус",
        value: "Поддержка шеф-поваров • Развитие сообществ • Сохранение ремесленных традиций",
      },
      { label: "Охват", value: "Весь мир" },
    ] as PressFact[],

    csfStats: [
      { label: "Глобальные участники", value: "Весь мир" },
      { label: "Сообщество", value: "Кулинарные профессионалы" },
      { label: "Миссия", value: "Поддержка + признание" },
      { label: "Стандарт", value: "Совершенство" },
    ] as PressFact[],

    csfTimeline: [
      {
        t: "Объявление",
        d: "Gastronomist International подтверждает стратегическое сотрудничество с CSF International.",
      },
      {
        t: "Общая миссия",
        d: "Поддержка шеф-поваров, расширение возможностей нуждающихся сообществ и сохранение ремесленных традиций.",
      },
      {
        t: "Устойчивые действия",
        d: "Создание практических возможностей и значимой помощи там, где это особенно важно.",
      },
    ] as PressTimelineItem[],

    csfGallery: [
      { src: "/images/medal.png", label: "Признание" },
      { src: "/images/recognition.png", label: "Глобальное признание" },
      { src: "/images/partnership.png", label: "Стратегическое партнёрство" },
    ] as PressGalleryItem[],

    csfRelated: [
      {
        title: "Наши шеф-повара",
        href: "/chefs",
        desc: "Познакомьтесь с участниками, представляющими Gastronomist International по всему миру.",
      },
      {
        title: "О Gastronomist",
        href: "/about",
        desc: "Наша миссия, видение и лидерская сеть.",
      },
      {
        title: "Посетить CSF Intl",
        href: "https://www.csfint.com/",
        desc: "Узнайте больше о работе и влиянии CSF International.",
        external: true,
      },
    ] as PressRelatedItem[],

    csfStoryTitle: "Партнёрство с целью.",
    csfStoryParagraphs: [
      "Gastronomist International официально вступила в партнёрство с CSF International в рамках общей миссии по поддержке шеф-поваров, расширению возможностей нуждающихся сообществ и сохранению ремесленных традиций.",
      "Сотрудничество отражает приверженность значимым действиям, профессиональному признанию, культурному сохранению и устойчивой поддержке в глобальном кулинарном сообществе.",
    ],
    csfGalleryAria: "Галерея в фокусе",
    csfGlobalTitle: "Профессиональное кулинарное признание во всём мире.",
    csfGlobalParagraph:
      "Gastronomist International продолжает строить платформу для шеф-поваров, специалистов индустрии гостеприимства и кулинарных лидеров из разных регионов.",
  },
}

export default function PressPage() {
  const { language } = useLanguage()
  const copy = pressCopy[language]

  return (
    <main className="press-page">
      <section className="press-release-block">
        <section className="press-hero">
          <div className="press-hero-visual">
            <img
              src="/images/yulia-antonova-mystic-mask.png"
              alt={copy.yuliaHeroAlt}
            />
            <div className="press-hero-overlay" />
            <div className="press-hero-card">
              <strong>{copy.yuliaHeroCardTitle}</strong>
              <span>{copy.yuliaHeroCardDescription}</span>
            </div>
          </div>

          <div className="press-hero-copy">
            <span className="press-eyebrow">{copy.yuliaHeroEyebrow}</span>

            <MotionH1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {copy.pressTitle} <span>{copy.pressAccent}</span>
            </MotionH1>

            <div className="press-divider" />

            <MotionDiv
              className="press-hero-lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {copy.yuliaHeroLead}
            </MotionDiv>

            <p>{copy.yuliaHeroDescription}</p>
          </div>
        </section>

        <section className="press-facts">
          {copy.yuliaFacts.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="press-layout">
          <div className="press-main">
            <article className="press-card">
              <span className="press-eyebrow">{copy.editorialStoryEyebrow}</span>
              <h2>{copy.yuliaStoryTitle}</h2>

              {copy.yuliaStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.yuliaRepresentationEyebrow}</span>
              <h2>{copy.yuliaRepresentationTitle}</h2>

              {copy.yuliaRepresentationParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.releaseTimelineEyebrow}</span>
              <h2>{copy.releaseTimelineTitle}</h2>

              <div className="press-timeline">
                {copy.yuliaTimeline.map((item) => (
                  <div key={item.t}>
                    <strong>{item.t}</strong>
                    <span>{item.d}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.inFocusEyebrow}</span>
              <h2>{copy.inFocusTitle}</h2>

              <div
                className="press-gallery press-falling-gallery"
                aria-label={copy.yuliaGalleryAria}
              >
                {copy.yuliaGallery.map((item, index) => (
                  <div
                    className="press-falling-card"
                    key={item.src}
                    style={
                      {
                        "--fallDelay": `${index * 1.25}s`,
                        "--fallX": `${(index - 1) * 108}%`,
                        "--fallMobileX": `${(index - 1) * 76}%`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="press-gallery-image">
                      <img src={item.src} alt={item.label} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.welcomeEyebrow}</span>
              <h2>{copy.welcomeTitle}</h2>

              <p>{copy.welcomeParagraph}</p>
            </article>
          </div>

          <aside className="press-sidebar">
            <article className="press-card">
              <span className="press-eyebrow">{copy.atAGlance}</span>

              <div className="press-stat-grid">
                {copy.yuliaStats.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.related}</span>

              <div className="press-related">
                {copy.yuliaRelated.map((item) => (
                  <a key={item.title} href={item.href}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </a>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.globalNetwork}</span>
              <h3>{copy.yuliaGlobalTitle}</h3>

              <p>{copy.yuliaGlobalParagraph}</p>
            </article>
          </aside>
        </section>
      </section>

      <section
        className="press-release-separator"
        aria-label={copy.previousPressAria}
      >
        <span className="press-eyebrow">{copy.previousPressEyebrow}</span>
        <h2>{copy.previousPressTitle}</h2>
        <p>{copy.previousPressParagraph}</p>
      </section>

      <section className="press-release-block">
        <section className="press-hero">
          <div className="press-hero-visual">
            <img
              src="/images/collab.png"
              alt={copy.csfHeroAlt}
            />
            <div className="press-hero-overlay" />
            <div className="press-hero-card">
              <strong>{copy.csfHeroCardTitle}</strong>
              <span>{copy.csfHeroCardDescription}</span>
            </div>
          </div>

          <div className="press-hero-copy">
            <span className="press-eyebrow">{copy.csfHeroEyebrow}</span>

            <MotionH1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {copy.pressTitle} <span>{copy.pressAccent}</span>
            </MotionH1>

            <div className="press-divider" />

            <MotionDiv
              className="press-hero-lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {copy.csfHeroLead}
            </MotionDiv>

            <p>{copy.csfHeroDescription}</p>
          </div>
        </section>

        <section className="press-facts">
          {copy.csfFacts.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="press-layout">
          <div className="press-main">
            <article className="press-card">
              <span className="press-eyebrow">{copy.editorialStoryEyebrow}</span>
              <h2>{copy.csfStoryTitle}</h2>

              {copy.csfStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.releaseTimelineEyebrow}</span>
              <h2>{copy.releaseTimelineTitle}</h2>

              <div className="press-timeline">
                {copy.csfTimeline.map((item) => (
                  <div key={item.t}>
                    <strong>{item.t}</strong>
                    <span>{item.d}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.inFocusEyebrow}</span>
              <h2>{copy.inFocusTitle}</h2>

              <div
                className="press-gallery press-falling-gallery"
                aria-label={copy.csfGalleryAria}
              >
                {copy.csfGallery.map((item, index) => (
                  <div
                    className="press-falling-card"
                    key={item.src}
                    style={
                      {
                        "--fallDelay": `${index * 1.25}s`,
                        "--fallX": `${(index - 1) * 108}%`,
                        "--fallMobileX": `${(index - 1) * 76}%`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="press-gallery-image">
                      <img src={item.src} alt={item.label} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="press-sidebar">
            <article className="press-card">
              <span className="press-eyebrow">{copy.atAGlance}</span>

              <div className="press-stat-grid">
                {copy.csfStats.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.related}</span>

              <div className="press-related">
                {copy.csfRelated.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </a>
                ))}
              </div>
            </article>

            <article className="press-card">
              <span className="press-eyebrow">{copy.globalNetwork}</span>
              <h3>{copy.csfGlobalTitle}</h3>
              <p>{copy.csfGlobalParagraph}</p>
            </article>
          </aside>
        </section>
      </section>

      <style jsx global>{`
        .press-page {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
          padding: 70px 0 40px;
          color: #f7f0df;
        }

        .press-release-block {
          display: block;
        }

        .press-release-block + .press-release-separator {
          margin-top: 58px;
        }

        .press-release-separator {
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 26px;
          padding: 34px;
          margin-bottom: 34px;
          background:
            radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 30px 100px rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(18px);
        }

        .press-release-separator h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.04;
          margin-bottom: 16px;
        }

        .press-release-separator p {
          max-width: 860px;
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .press-hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
          margin-bottom: 34px;
        }

        .press-hero-copy h1,
        .press-card h2,
        .press-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .press-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .press-hero-copy h1 span {
          color: #d9a331;
        }

        .press-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .press-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .press-divider::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 9px;
          height: 9px;
          border: 1px solid #d9a331;
          transform: translate(-50%, -50%) rotate(45deg);
          background: #050505;
        }

        .press-hero-lead {
          color: #fff;
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .press-hero-copy p,
        .press-card p,
        .press-related span,
        .press-timeline span {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .press-hero-copy p {
          max-width: 620px;
          font-size: 16px;
        }

        .press-hero-visual {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 28px;
          background:
            radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
            rgba(255, 255, 255, 0.03);
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.55);
        }

        .press-hero-visual img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: contain;
          padding: 18px;
          opacity: 0.94;
        }

        .press-hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.72), transparent 56%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.72), transparent 56%);
        }

        .press-hero-card {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          border: 1px solid rgba(217, 163, 49, 0.24);
          border-radius: 20px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.68);
          backdrop-filter: blur(16px);
        }

        .press-hero-card strong,
        .press-hero-card span {
          display: block;
        }

        .press-hero-card strong {
          color: #fff;
          font-size: 18px;
        }

        .press-hero-card span {
          margin-top: 6px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 14px;
          line-height: 1.6;
        }

        .press-facts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 34px;
        }

        .press-facts article,
        .press-card {
          border: 1px solid rgba(217, 163, 49, 0.26);
          background:
            radial-gradient(700px 260px at 20% 0%, rgba(217, 163, 49, 0.12), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          border-radius: 22px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 30px 100px rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(18px);
        }

        .press-facts article {
          padding: 20px;
        }

        .press-facts span,
        .press-stat-grid span {
          display: block;
          color: rgba(247, 240, 223, 0.58);
          font-size: 11px;
          margin-bottom: 6px;
        }

        .press-facts strong,
        .press-stat-grid strong {
          display: block;
          color: #fff;
          font-size: 15px;
          line-height: 1.35;
        }

        .press-layout {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 24px;
        }

        .press-main,
        .press-sidebar {
          display: grid;
          gap: 22px;
          align-content: start;
        }

        .press-card {
          padding: 28px;
        }

        .press-card h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .press-card h3 {
          font-size: 28px;
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .press-card p + p {
          margin-top: 16px;
        }

        .press-timeline {
          display: grid;
          gap: 12px;
          margin-top: 20px;
        }

        .press-timeline div,
        .press-stat-grid div,
        .press-related a,
        .press-gallery > div {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
        }

        .press-timeline div {
          padding: 16px;
        }

        .press-timeline strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .press-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .press-gallery > div {
          overflow: hidden;
        }

        .press-falling-gallery {
          position: relative;
          display: block;
          min-height: 292px;
          overflow: hidden;
          perspective: 1200px;
          border-radius: 20px;
          background:
            radial-gradient(circle at 50% 12%, rgba(217, 163, 49, 0.11), transparent 32%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0.01));
        }

        .press-falling-gallery::before,
        .press-falling-gallery::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          z-index: 4;
          height: 62px;
          pointer-events: none;
        }

        .press-falling-gallery::before {
          top: 0;
          background: linear-gradient(180deg, rgba(5, 5, 5, 0.78), transparent);
        }

        .press-falling-gallery::after {
          bottom: 0;
          background: linear-gradient(0deg, rgba(5, 5, 5, 0.78), transparent);
        }

        .press-falling-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(30%, 250px);
          min-width: 190px;
          overflow: hidden;
          transform-style: preserve-3d;
          animation: pressFocusFall 5.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          animation-delay: var(--fallDelay);
          will-change: transform, opacity, filter;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 70px rgba(0, 0, 0, 0.38);
        }

        .press-falling-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            120deg,
            transparent 10%,
            rgba(255, 238, 177, 0.16) 48%,
            transparent 74%
          );
          opacity: 0;
          transform: translateX(-90%);
          animation: pressFocusShine 5.4s ease-in-out infinite;
          animation-delay: var(--fallDelay);
          pointer-events: none;
        }

        .press-gallery-image {
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at center, rgba(217, 163, 49, 0.08), transparent 58%),
            rgba(255, 255, 255, 0.025);
        }

        .press-gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
        }

        .press-gallery span {
          display: block;
          border-top: 1px solid rgba(217, 163, 49, 0.14);
          padding: 12px;
          text-align: center;
          color: rgba(247, 240, 223, 0.74);
          font-size: 12px;
        }

        .press-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .press-stat-grid div {
          padding: 16px;
        }

        .press-related {
          display: grid;
          gap: 12px;
        }

        .press-related a {
          display: block;
          padding: 16px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .press-related a:hover {
          border-color: rgba(217, 163, 49, 0.62);
          background: rgba(217, 163, 49, 0.08);
        }

        .press-related strong {
          display: block;
          color: #fff;
          margin-bottom: 6px;
        }

        .press-related span {
          display: block;
          font-size: 13px;
        }

        @keyframes pressFocusFall {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(-190px)
              translateZ(-170px)
              rotateX(68deg)
              rotateZ(-8deg)
              scale(0.82);
          }
          18% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          58% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          82% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(205px)
              translateZ(-130px)
              rotateX(-48deg)
              rotateZ(7deg)
              scale(0.86);
          }
          100% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallX))
              translateY(205px)
              translateZ(-130px)
              rotateX(-48deg)
              rotateZ(7deg)
              scale(0.86);
          }
        }

        @keyframes pressFocusShine {
          0%, 22% {
            opacity: 0;
            transform: translateX(-90%);
          }
          34% {
            opacity: 1;
          }
          54%, 100% {
            opacity: 0;
            transform: translateX(92%);
          }
        }

        @keyframes pressFocusFallMobile {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(-220px)
              translateZ(-120px)
              rotateX(58deg)
              rotateZ(-5deg)
              scale(0.8);
          }
          18% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(0)
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          58% {
            opacity: 1;
            filter: blur(0);
            transform:
              translate(-50%, -50%)
              translateX(0)
              translateY(0)
              translateZ(0)
              rotateX(0deg)
              rotateZ(0deg)
              scale(1);
          }
          82% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(230px)
              translateZ(-100px)
              rotateX(-42deg)
              rotateZ(5deg)
              scale(0.84);
          }
          100% {
            opacity: 0;
            filter: blur(7px);
            transform:
              translate(-50%, -50%)
              translateX(var(--fallMobileX))
              translateY(230px)
              translateZ(-100px)
              rotateX(-42deg)
              rotateZ(5deg)
              scale(0.84);
          }
        }

        @media (max-width: 1180px) {
          .press-hero,
          .press-layout {
            grid-template-columns: 1fr;
          }

          .press-facts {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .press-page {
            width: min(100% - 24px, 1440px);
            padding-top: 46px;
          }

          .press-facts,
          .press-gallery,
          .press-stat-grid {
            grid-template-columns: 1fr;
          }

          .press-falling-gallery {
            min-height: 360px;
          }

          .press-falling-card {
            width: min(86%, 320px);
            min-width: 0;
            animation-name: pressFocusFallMobile;
          }

          .press-gallery-image {
            height: 210px;
          }

          .press-hero-visual,
          .press-hero-visual img {
            min-height: 380px;
          }

          .press-release-separator {
            padding: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .press-falling-card,
          .press-falling-card::before {
            animation: none !important;
          }

          .press-falling-gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            min-height: 0;
            overflow: visible;
            perspective: none;
            background: transparent;
          }

          .press-falling-gallery::before,
          .press-falling-gallery::after {
            display: none;
          }

          .press-falling-card {
            position: relative;
            left: auto;
            top: auto;
            width: auto;
            min-width: 0;
            opacity: 1;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}
