// app/page.tsx
// @ts-nocheck
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,
  Marker,
  Sphere,
} from "react-simple-maps"
import LatestStory from "@/components/blog/latest-story"
import { getLatestPost } from "@/components/blog/posts"
import { useLanguage, type Language } from "@/components/LanguageProvider"

const ASSET_V = "2026-01-28-1"
const img = (path: string) => `${path}?v=${ASSET_V}`

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const REAL_AIRPLANE_SRC = "/images/real-airplane.png"
const REAL_CHEF_HAT_SRC = "/images/chef-hat-no-bg.png"

const HOME_COPY: Record<Language, Record<string, string>> = {
  en: {
    heroEyebrow: "Global Culinary Community",
    heroTitlePrefix: "Uniting Culinary",
    heroTitleHighlight: "Excellence",
    heroTitleSuffix: "Around the World",
    heroDescription:
      "Gastronomist International embraces the diversity of talent and expertise within the culinary community, with a focus on modern gastronomy, professional recognition, and global connection.",
    discoverMore: "Discover More",
    viewRecognition: "View Recognition",
    worldwideMembers: "Worldwide Members",
    networkTitle: "A Global Network of Culinary Excellence",
    networkDescription:
      "A refined international platform for chefs, hospitality leaders, educators, and gastronomy professionals connected through recognition, collaboration, and shared standards of excellence.",
    benefitsEyebrow: "Member Benefits & Recognition",
    benefitsTitle: "Honoring Excellence. Empowering Chefs.",
    benefitsCarouselLabel: "Member benefits carousel",
    benefitsControlsLabel: "Member benefit controls",
    previousBenefit: "Previous member benefit",
    nextBenefit: "Next member benefit",
    viewBenefit: "View",
    testimonialsEyebrow: "Global Voices",
    testimonialsTitle: "Professional Recognition Across Borders",
    testimonialsCarouselLabel: "Global voices carousel",
    carouselControls: "Carousel controls",
    previousVoice: "Previous global voice",
    nextVoice: "Next global voice",
    viewVoice: "View",
  },
  ru: {
    heroEyebrow: "Глобальное кулинарное сообщество",
    heroTitlePrefix: "Объединяя кулинарное",
    heroTitleHighlight: "совершенство",
    heroTitleSuffix: "по всему миру",
    heroDescription:
      "Gastronomist International объединяет разнообразные таланты и профессиональный опыт кулинарного сообщества, уделяя особое внимание современной гастрономии, профессиональному признанию и международным связям.",
    discoverMore: "Узнать больше",
    viewRecognition: "Смотреть признание",
    worldwideMembers: "Участники по всему миру",
    networkTitle: "Глобальная сеть кулинарного совершенства",
    networkDescription:
      "Изысканная международная платформа для шеф-поваров, лидеров индустрии гостеприимства, преподавателей и специалистов гастрономии, объединённых признанием, сотрудничеством и общими стандартами совершенства.",
    benefitsEyebrow: "Преимущества и признание участников",
    benefitsTitle: "Отмечаем совершенство. Поддерживаем шеф-поваров.",
    benefitsCarouselLabel: "Карусель преимуществ участников",
    benefitsControlsLabel: "Управление преимуществами участников",
    previousBenefit: "Предыдущее преимущество",
    nextBenefit: "Следующее преимущество",
    viewBenefit: "Смотреть",
    testimonialsEyebrow: "Голоса мира",
    testimonialsTitle: "Профессиональное признание без границ",
    testimonialsCarouselLabel: "Карусель отзывов мирового сообщества",
    carouselControls: "Управление каруселью",
    previousVoice: "Предыдущий отзыв",
    nextVoice: "Следующий отзыв",
    viewVoice: "Смотреть",
  },
}

const POPUP_COPY: Record<Language, Record<string, string>> = {
  en: {
    fallbackTitle: "Latest from the Journal",
    fallbackDescription:
      "Read the newest chef feature and editorial story from the Gastronomist International Journal.",
    closeLabel: "Close latest journal feature notification",
    eyebrow: "Latest Journal Feature",
    readStory: "Read Story",
  },
  ru: {
    fallbackTitle: "Новое из журнала",
    fallbackDescription:
      "Читайте новую публикацию о шеф-поваре и редакционную историю от Gastronomist International Journal.",
    closeLabel: "Закрыть уведомление о новой публикации журнала",
    eyebrow: "Новая публикация журнала",
    readStory: "Читать историю",
  },
}

const MAP_COPY: Record<Language, Record<string, string>> = {
  en: {
    liveEarth: "Live Global Earth",
    globalHub: "Global Hub",
    memberPresenceTitle: "Gastronomist Member Presence",
  },
  ru: {
    liveEarth: "Глобальная карта в реальном времени",
    globalHub: "Глобальный центр",
    memberPresenceTitle: "Присутствие участников Gastronomist",
  },
}


const VERIFIER_COPY: Record<Language, any> = {
  en: {
    eyebrow: "Certificate Authenticity Verifier",
    title: "Verify Official Certificate",
    highlight: "Serial Number",
    description:
      "Enter the SN printed on the certificate seal to verify authenticity through the official Gastronomist International registry.",
    button: "Verify Certificate",
    verifyingButton: "Verifying…",

    modalEyebrow: "Official Verification",
    modalTitle: "Scanning Certificate Registry",
    modalDescription:
      "Please wait while we validate the serial number, holder record, issue data, and current certificate status.",
    close: "Close verification result",
    verifyingStatus: "Verification in progress",
    processing: "Processing official registry check",
    completed: "Verification completed",
    resultTitleVerified: "Verified & Authentic",
    resultTitleExpired: "Certificate Expired",
    resultTitleRevoked: "Certificate Revoked",
    resultTitleInvalid: "Certificate Not Found",
    resultTitleRateLimited: "Too Many Attempts",
    resultTitleError: "Verification Unavailable",
    resultMessageVerified:
      "This certificate serial number matches an official Gastronomist International record.",
    resultMessageExpired:
      "This certificate exists in the official registry, but its current status is expired.",
    resultMessageRevoked:
      "This certificate exists in the official registry, but its current status is revoked.",
    resultMessageInvalid:
      "No official certificate record matched the serial number provided.",
    resultMessageRateLimited:
      "Too many verification attempts were detected. Please try again later.",
    resultMessageError:
      "The verification service is temporarily unavailable. Please try again shortly.",
    holderName: "Certificate Holder",
    certificateType: "Certificate Type",
    serialNumber: "Serial Number",
    issueDate: "Issue Date",
    currentStatus: "Current Status",
    tryAgain: "Verify Another Serial",
    invalidInput: "Please enter a valid serial number.",

    stages: [
      "Reading serial number",
      "Checking official registry",
      "Validating holder record",
      "Reviewing certificate status",
      "Preparing verification result",
    ],
  },
  ru: {
    eyebrow: "Проверка подлинности сертификата",
    title: "Проверить официальный",
    highlight: "серийный номер",
    description:
      "Введите SN, указанный на печати сертификата, чтобы проверить подлинность через официальный реестр Gastronomist International.",
    button: "Проверить сертификат",
    verifyingButton: "Проверка…",

    modalEyebrow: "Официальная проверка",
    modalTitle: "Сканирование реестра сертификатов",
    modalDescription:
      "Пожалуйста, подождите, пока мы проверяем серийный номер, запись владельца, дату выдачи и текущий статус сертификата.",
    close: "Закрыть результат проверки",
    verifyingStatus: "Проверка выполняется",
    processing: "Обработка официальной проверки реестра",
    completed: "Проверка завершена",
    resultTitleVerified: "Подтверждено и подлинно",
    resultTitleExpired: "Сертификат истёк",
    resultTitleRevoked: "Сертификат отозван",
    resultTitleInvalid: "Сертификат не найден",
    resultTitleRateLimited: "Слишком много попыток",
    resultTitleError: "Проверка недоступна",
    resultMessageVerified:
      "Этот серийный номер сертификата совпадает с официальной записью Gastronomist International.",
    resultMessageExpired:
      "Этот сертификат существует в официальном реестре, но его текущий статус истёк.",
    resultMessageRevoked:
      "Этот сертификат существует в официальном реестре, но его текущий статус отозван.",
    resultMessageInvalid:
      "Официальная запись сертификата не найдена по указанному серийному номеру.",
    resultMessageRateLimited:
      "Обнаружено слишком много попыток проверки. Пожалуйста, попробуйте позже.",
    resultMessageError:
      "Сервис проверки временно недоступен. Пожалуйста, попробуйте немного позже.",
    holderName: "Владелец сертификата",
    certificateType: "Тип сертификата",
    serialNumber: "Серийный номер",
    issueDate: "Дата выдачи",
    currentStatus: "Текущий статус",
    tryAgain: "Проверить другой номер",
    invalidInput: "Пожалуйста, введите действительный серийный номер.",

    stages: [
      "Чтение серийного номера",
      "Проверка официального реестра",
      "Проверка записи владельца",
      "Проверка статуса сертификата",
      "Подготовка результата проверки",
    ],
  },
}

const FEATURES_BY_LANGUAGE: Record<Language, [string, string][]> = {
  en: [
    ["Global Culinary Network", "Connecting chefs, culinary leaders, educators, and hospitality professionals worldwide."],
    ["Professional Recognition", "A platform for honoring culinary excellence, leadership, and achievement."],
    ["Leader Collaboration", "Creating international connections through shared knowledge, programs, and partnerships."],
    ["Worldwide Community", "A growing global presence across countries, continents, and culinary cultures."],
  ],
  ru: [
    ["Глобальная кулинарная сеть", "Объединяем шеф-поваров, кулинарных лидеров, преподавателей и специалистов индустрии гостеприимства по всему миру."],
    ["Профессиональное признание", "Платформа для признания кулинарного совершенства, лидерства и достижений."],
    ["Сотрудничество лидеров", "Создаём международные связи через обмен знаниями, программы и партнёрства."],
    ["Мировое сообщество", "Растущее глобальное присутствие в разных странах, континентах и кулинарных культурах."],
  ],
}

const BENEFITS_BY_LANGUAGE: Record<Language, [string, string, string][]> = {
  en: [
    ["Chef Recognition", "Honoring culinary professionals and their achievements.", img("/images/recognition.png")],
    ["Excellence Award", "Recognizing outstanding culinary excellence worldwide.", img("/images/cube-logo.png")],
    ["Membership Medal", "Symbol of honor, dedication, and professional excellence.", img("/images/medal.png")],
    ["Certificates & Badges", "Authentication of skills, expertise, and achievement.", img("/images/partnership.png")],
  ],
  ru: [
    ["Признание шеф-поваров", "Отмечаем кулинарных профессионалов и их достижения.", img("/images/recognition.png")],
    ["Награда за совершенство", "Признание выдающегося кулинарного мастерства по всему миру.", img("/images/cube-logo.png")],
    ["Медаль участника", "Символ чести, преданности делу и профессионального совершенства.", img("/images/medal.png")],
    ["Сертификаты и бейджи", "Подтверждение навыков, экспертности и достижений.", img("/images/partnership.png")],
  ],
}

const TESTIMONIALS_BY_LANGUAGE = {
  en: [
    {
      quote:
        "The platform gives chefs a more professional way to present international recognition and connect with serious culinary leaders.",
      name: "Chef Alessio Romano",
      role: "Executive Chef & Owner",
      location: "Rome, Italy",
    },
    {
      quote:
        "Recognition from a global culinary community brings credibility, pride, and meaningful visibility to professionals in education and hospitality.",
      name: "Chef Amina Benali",
      role: "Culinary Instructor",
      location: "Marrakech, Morocco",
    },
    {
      quote:
        "For chefs working across hotels and restaurants, international affiliation matters. This gives the recognition a polished and professional home.",
      name: "Chef Kenji Watanabe",
      role: "Hotel Executive Chef",
      location: "Tokyo, Japan",
    },
  ],
  ru: [
    {
      quote:
        "Эта платформа даёт шеф-поварам более профессиональный способ представить международное признание и установить связь с серьёзными кулинарными лидерами.",
      name: "Chef Alessio Romano",
      role: "Шеф-повар и владелец",
      location: "Рим, Италия",
    },
    {
      quote:
        "Признание от глобального кулинарного сообщества приносит доверие, гордость и значимую видимость специалистам в образовании и гостеприимстве.",
      name: "Chef Amina Benali",
      role: "Кулинарный преподаватель",
      location: "Марракеш, Марокко",
    },
    {
      quote:
        "Для шеф-поваров, работающих в отелях и ресторанах, международная принадлежность имеет значение. Это создаёт достойное и профессиональное пространство для признания.",
      name: "Chef Kenji Watanabe",
      role: "Executive Chef отеля",
      location: "Токио, Япония",
    },
  ],
}

const NETWORK_STATS_BY_LANGUAGE = {
  en: [
    { value: 25, suffix: "K+", label: "Members Worldwide" },
    { value: 100, suffix: "+", label: "Countries Represented" },
    { value: 200, suffix: "+", label: "Culinary Associations" },
    { value: 6, suffix: "", label: "Continents Connected" },
  ],
  ru: [
    { value: 25, suffix: "K+", label: "Участников по всему миру" },
    { value: 100, suffix: "+", label: "Представленных стран" },
    { value: 200, suffix: "+", label: "Кулинарных ассоциаций" },
    { value: 6, suffix: "", label: "Связанных континентов" },
  ],
}


const HUB = {
  name: "Global Hub",
  coordinates: [12.4964, 41.9028],
}

const CITIES = [
  { name: "Canada", coordinates: [-106.3468, 56.1304] },
  { name: "United States", coordinates: [-98.5795, 39.8283] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  { name: "Brazil", coordinates: [-51.9253, -14.235] },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Spain", coordinates: [-3.7492, 40.4637] },
  { name: "Italy", coordinates: [12.4964, 41.9028] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "UAE", coordinates: [53.8478, 23.4241] },
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "Thailand", coordinates: [100.9925, 15.87] },
  { name: "China", coordinates: [104.1954, 35.8617] },
  { name: "Japan", coordinates: [138.2529, 36.2048] },
  { name: "Australia", coordinates: [133.7751, -25.2744] },
  { name: "South Africa", coordinates: [22.9375, -30.5595] },
]

const MEMBER_PULSE_LOCATIONS = [
  { name: "France", coordinates: [2.2137, 46.2276], count: "Member Presence" },
  { name: "Thailand", coordinates: [100.9925, 15.87], count: "Member Presence" },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859], count: "Member Presence" },
  { name: "Myanmar", coordinates: [95.956, 21.9162], count: "Member Presence" },
  { name: "Russia", coordinates: [105.3188, 61.524], count: "Member Presence" },
  { name: "Azerbaijan", coordinates: [47.5769, 40.1431], count: "Member Presence" },
  { name: "Morocco", coordinates: [-7.0926, 31.7917], count: "Member Presence" },
  { name: "Philippines", coordinates: [121.774, 12.8797], count: "Member Presence" },
  { name: "Italy", coordinates: [12.4964, 41.9028], count: "Member Presence" },
  { name: "Brazil", coordinates: [-51.9253, -14.235], count: "Member Presence" },
  { name: "Spain", coordinates: [-3.7492, 40.4637], count: "Member Presence" },
  { name: "Japan", coordinates: [138.2529, 36.2048], count: "Member Presence" },
  { name: "South Korea", coordinates: [127.7669, 35.9078], count: "Member Presence" },
  { name: "China", coordinates: [104.1954, 35.8617], count: "Member Presence" },
  { name: "Malaysia", coordinates: [101.9758, 4.2105], count: "Member Presence" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], count: "Member Presence" },
  { name: "Egypt", coordinates: [30.8025, 26.8206], count: "Member Presence" },
  { name: "Indonesia", coordinates: [113.9213, -0.7893], count: "Member Presence" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], count: "Member Presence" },
  { name: "United States", coordinates: [-98.5795, 39.8283], count: "Member Presence" },
  { name: "New York", coordinates: [-74.006, 40.7128], count: "Member Presence" },
  { name: "United Arab Emirates", coordinates: [53.8478, 23.4241], count: "Member Presence" },
  { name: "Qatar", coordinates: [51.1839, 25.3548], count: "Member Presence" },
  { name: "Kuwait", coordinates: [47.4818, 29.3117], count: "Member Presence" },
]

const FLIGHT_ROUTES = [
  { id: "f1", from: "Canada", to: "United Kingdom", duration: 18, offset: 0.03 },
  { id: "f2", from: "United States", to: "France", duration: 16, offset: 0.14 },
  { id: "f3", from: "Mexico", to: "Spain", duration: 20, offset: 0.26 },
  { id: "f4", from: "Brazil", to: "South Africa", duration: 22, offset: 0.41 },
  { id: "f5", from: "Italy", to: "UAE", duration: 13, offset: 0.54 },
  { id: "f6", from: "Germany", to: "India", duration: 17, offset: 0.62 },
  { id: "f7", from: "UAE", to: "Thailand", duration: 15, offset: 0.71 },
  { id: "f8", from: "India", to: "Japan", duration: 19, offset: 0.82 },
  { id: "f9", from: "Thailand", to: "Australia", duration: 21, offset: 0.91 },
  { id: "f10", from: "China", to: "United States", duration: 24, offset: 0.18 },
  { id: "f11", from: "Japan", to: "Canada", duration: 23, offset: 0.37 },
  { id: "f12", from: "South Africa", to: "Italy", duration: 20, offset: 0.49 },
  { id: "f13", from: "United Kingdom", to: "Germany", duration: 11, offset: 0.57 },
  { id: "f14", from: "France", to: "UAE", duration: 14, offset: 0.68 },
  { id: "f15", from: "Australia", to: "Japan", duration: 20, offset: 0.76 },
  { id: "f16", from: "Brazil", to: "United States", duration: 19, offset: 0.85 },
]

function normalizeLongitude(value: number) {
  let lon = value
  while (lon > 180) lon -= 360
  while (lon < -180) lon += 360
  return lon
}

function shortestLongitudeDelta(fromLon: number, toLon: number) {
  let diff = toLon - fromLon
  while (diff > 180) diff -= 360
  while (diff < -180) diff += 360
  return diff
}

function interpolateCoordinates(from: number[], to: number[], t: number) {
  const lon = normalizeLongitude(from[0] + shortestLongitudeDelta(from[0], to[0]) * t)
  const lat = from[1] + (to[1] - from[1]) * t
  return [lon, lat]
}

function getPlaneBearing(current: number[], next: number[]) {
  const dx = shortestLongitudeDelta(current[0], next[0])
  const dy = next[1] - current[1]
  return (Math.atan2(dx, -dy) * 180) / Math.PI
}

function AnimatedCount({
  value,
  suffix = "",
  start = false,
  duration = 4200,
}: {
  value: number
  suffix?: string
  start?: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setCount(value)
      return
    }

    let frame = 0
    const animationStart = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - animationStart) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(value * eased))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [value, duration, start])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

function AnimatedStatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number
  suffix: string
  label: string
  index: number
}) {
  const cardRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -8% 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`gi-stat-card ${isVisible ? "is-visible" : ""}`}
      style={{
        "--statDelay": `${index * 180}ms`,
        animationDelay: `${index * 180}ms, ${index * 180 + 1100}ms`,
      }}
    >
      <strong>
        <AnimatedCount
          value={value}
          suffix={suffix}
          start={isVisible}
          duration={4200}
        />
      </strong>
      <span>{label}</span>
    </article>
  )
}

function Benefits3DSpinCarousel() {
  const { language } = useLanguage()
  const copy = HOME_COPY[language] || HOME_COPY.en
  const benefits = BENEFITS_BY_LANGUAGE[language] || BENEFITS_BY_LANGUAGE.en
  const [activeIndex, setActiveIndex] = useState(0)
  const total = benefits.length

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced || total <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [total])

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => (current + direction + total) % total)
  }

  const getOffset = (index: number) => {
    let offset = index - activeIndex

    if (offset > total / 2) {
      offset -= total
    }

    if (offset < total / -2) {
      offset += total
    }

    return offset
  }

  return (
    <section id="recognition" className="gi-section gi-benefits-spin-section">
      <span className="gi-eyebrow gi-center">{copy.benefitsEyebrow}</span>
      <h2 className="gi-section-title">{copy.benefitsTitle}</h2>

      <div className="gi-benefit-spin-carousel" aria-label={copy.benefitsCarouselLabel}>
        <div className="gi-benefit-spin-stage">
          {benefits.map(([title, desc, image], index) => {
            const offset = getOffset(index)
            const distance = Math.min(Math.abs(offset), 2)
            const isActive = offset === 0

            return (
              <article
                className={`gi-benefit-card gi-benefit-spin-card ${
                  isActive ? "is-active" : ""
                }`}
                key={title}
                style={{
                  "--benefitX": `${offset * 44}%`,
                  "--benefitZ": `${distance * -155}px`,
                  "--benefitRotateY": `${offset * -38}deg`,
                  "--benefitRotateZ": `${offset * -3}deg`,
                  "--benefitScale": `${1 - distance * 0.08}`,
                  "--benefitOpacity": `${distance > 1 ? 0 : isActive ? 1 : 0.52}`,
                  "--mobileBenefitX": `${offset * 78}%`,
                  "--mobileBenefitRotateY": `${offset * -9}deg`,
                  "--mobileBenefitScale": `${1 - distance * 0.1}`,
                  zIndex: 20 - distance,
                }}
                aria-hidden={!isActive}
              >
                <div className="gi-benefit-card-shine" />
                <div className="gi-benefit-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            )
          })}
        </div>

        <div className="gi-benefit-carousel-controls" aria-label={copy.benefitsControlsLabel}>
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label={copy.previousBenefit}
          >
            ‹
          </button>

          <div className="gi-benefit-carousel-dots">
            {benefits.map(([title], index) => (
              <button
                type="button"
                key={title}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`${copy.viewBenefit} ${title}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label={copy.nextBenefit}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

function Testimonials3DCarousel() {
  const { language } = useLanguage()
  const copy = HOME_COPY[language] || HOME_COPY.en
  const testimonials = TESTIMONIALS_BY_LANGUAGE[language] || TESTIMONIALS_BY_LANGUAGE.en
  const [activeIndex, setActiveIndex] = useState(0)
  const total = testimonials.length

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced || total <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [total])

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => (current + direction + total) % total)
  }

  const getOffset = (index: number) => {
    let offset = index - activeIndex

    if (offset > total / 2) {
      offset -= total
    }

    if (offset < total / -2) {
      offset += total
    }

    return offset
  }

  return (
    <section className="gi-testimonials">
      <div className="gi-testimonial-head">
        <div>
          <span className="gi-eyebrow">{copy.testimonialsEyebrow}</span>
          <h2>{copy.testimonialsTitle}</h2>
        </div>
      </div>

      <div className="gi-testimonial-carousel" aria-label={copy.testimonialsCarouselLabel}>
        <div className="gi-testimonial-stage">
          {testimonials.map((item, index) => {
            const offset = getOffset(index)
            const distance = Math.min(Math.abs(offset), 2)
            const isActive = offset === 0

            return (
              <article
                className={`gi-testimonial-card gi-carousel-card ${
                  isActive ? "is-active" : ""
                }`}
                key={item.name}
                style={{
                  "--cardX": `${offset * 48}%`,
                  "--cardZ": `${distance * -120}px`,
                  "--cardRotate": `${offset * -18}deg`,
                  "--cardScale": `${1 - distance * 0.08}`,
                  "--cardOpacity": `${distance > 1 ? 0 : isActive ? 1 : 0.58}`,
                  "--mobileCardX": `${offset * 78}%`,
                  "--mobileCardRotate": `${offset * -6}deg`,
                  "--mobileCardScale": `${1 - distance * 0.1}`,
                  zIndex: 20 - distance,
                }}
                aria-hidden={!isActive}
              >
                <div className="gi-card-shine" />
                <div className="gi-quote-mark">“</div>
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <small>{item.location}</small>
              </article>
            )
          })}
        </div>

        <div className="gi-carousel-controls" aria-label={copy.carouselControls}>
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            aria-label={copy.previousVoice}
          >
            ‹
          </button>

          <div className="gi-carousel-dots">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.name}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`${copy.viewVoice} ${item.name}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => moveCarousel(1)}
            aria-label={copy.nextVoice}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

function LatestFeaturePopup({
  visible,
  onClose,
  latestPost,
}: {
  visible: boolean
  onClose: () => void
  latestPost: any
}) {
  const { language } = useLanguage()
  const popupCopy = POPUP_COPY[language] || POPUP_COPY.en

  if (!visible || !latestPost) return null

  const featureHref = latestPost.slug ? `/blog/${latestPost.slug}` : "/blog"
  const featureTitle = latestPost.title || popupCopy.fallbackTitle
  const featureDescription =
    latestPost.description ||
    popupCopy.fallbackDescription

  return (
    <aside className="gi-feature-popup" role="status" aria-live="polite">
      <div className="gi-feature-popup-glow" />
      <button
        type="button"
        className="gi-feature-popup-close"
        onClick={onClose}
        aria-label={popupCopy.closeLabel}
      >
        ×
      </button>

      <div className="gi-feature-popup-mark">
        {latestPost.banner ? (
          <img src={latestPost.banner} alt={featureTitle} />
        ) : (
          <span>✦</span>
        )}
      </div>

      <div className="gi-feature-popup-content">
        <span>{popupCopy.eyebrow}</span>
        <h3>{featureTitle}</h3>
        <p>{featureDescription}</p>

        {latestPost.date ? <small>{latestPost.date}</small> : null}

        <a href={featureHref} onClick={onClose}>
          {popupCopy.readStory}
        </a>
      </div>
    </aside>
  )
}


function CertificateVerifier() {
  const { language } = useLanguage()
  const copy = VERIFIER_COPY[language] || VERIFIER_COPY.en
  const [serialNumber, setSerialNumber] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [stageIndex, setStageIndex] = useState(0)
  const [result, setResult] = useState<any>(null)
  const [verificationStartedAt, setVerificationStartedAt] = useState<number | null>(null)

  useEffect(() => {
    if (!modalOpen || !verifying || !verificationStartedAt) return

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - verificationStartedAt
      const nextProgress = Math.min(Math.round((elapsed / 10000) * 100), 99)
      const nextStage = Math.min(
        Math.floor((elapsed / 10000) * copy.stages.length),
        copy.stages.length - 1
      )

      setProgress(nextProgress)
      setStageIndex(nextStage)
    }, 120)

    return () => window.clearInterval(timer)
  }, [copy.stages.length, modalOpen, verifying, verificationStartedAt])

  const resetVerifier = () => {
    setResult(null)
    setProgress(0)
    setStageIndex(0)
    setVerificationStartedAt(null)
  }

  const closeVerifier = () => {
    if (verifying) return

    setModalOpen(false)
    resetVerifier()
  }

  const getResultTitle = (resultType: string) => {
    if (resultType === "verified") return copy.resultTitleVerified
    if (resultType === "expired") return copy.resultTitleExpired
    if (resultType === "revoked") return copy.resultTitleRevoked
    if (resultType === "rate_limited") return copy.resultTitleRateLimited
    if (resultType === "server_error") return copy.resultTitleError

    return copy.resultTitleInvalid
  }

  const getResultMessage = (resultType: string) => {
    if (resultType === "verified") return copy.resultMessageVerified
    if (resultType === "expired") return copy.resultMessageExpired
    if (resultType === "revoked") return copy.resultMessageRevoked
    if (resultType === "rate_limited") return copy.resultMessageRateLimited
    if (resultType === "server_error") return copy.resultMessageError

    return copy.resultMessageInvalid
  }

  const verifyCertificate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedSerial = serialNumber.trim().toUpperCase().replace(/\s+/g, "")

    if (!/^[A-Z0-9-]{3,40}$/.test(normalizedSerial)) {
      setModalOpen(true)
      setVerifying(false)
      setProgress(100)
      setResult({
        result: "invalid",
        message: copy.invalidInput,
      })
      return
    }

    setSerialNumber(normalizedSerial)
    setModalOpen(true)
    setVerifying(true)
    setResult(null)
    setProgress(0)
    setStageIndex(0)
    setVerificationStartedAt(Date.now())

    const minimumWait = new Promise((resolve) => window.setTimeout(resolve, 10000))

    try {
      const request = fetch("/api/verify-certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serialNumber: normalizedSerial,
        }),
      }).then(async (response) => {
        const data = await response.json().catch(() => ({}))

        return {
          response,
          data,
        }
      })

      const [{ response, data }] = await Promise.all([request, minimumWait])

      setProgress(100)
      setStageIndex(copy.stages.length - 1)

      if (!response.ok && data?.result !== "rate_limited") {
        setResult({
          result: data?.result || "server_error",
          message: data?.message || copy.resultMessageError,
        })
      } else {
        setResult(data)
      }
    } catch {
      await minimumWait

      setProgress(100)
      setStageIndex(copy.stages.length - 1)
      setResult({
        result: "server_error",
        message: copy.resultMessageError,
      })
    } finally {
      setVerifying(false)
      setVerificationStartedAt(null)
    }
  }

  const resultType = result?.result || "invalid"
  const certificate = result?.certificate

  return (
    <section className="gi-verifier-section" id="certificate-verifier">
      <div className="gi-verifier-panel">
        <div className="gi-verifier-copy">
          <span className="gi-eyebrow">{copy.eyebrow}</span>
          <h2>
            {copy.title} <span>{copy.highlight}</span>
          </h2>
          <p>{copy.description}</p>
        </div>

        <form className="gi-verifier-form" onSubmit={verifyCertificate}>
          <label htmlFor="certificate-sn" className="sr-only">
            {copy.serialNumber}
          </label>
          <input
            id="certificate-sn"
            type="text"
            value={serialNumber}
            onChange={(event) => setSerialNumber(event.target.value)}
            autoComplete="off"
            spellCheck={false}
          />

          <button type="submit" disabled={verifying}>
            {verifying ? copy.verifyingButton : copy.button}
          </button>

        </form>
      </div>

      {modalOpen ? (
        <div className="gi-verifier-modal-wrap" role="dialog" aria-modal="true">
          <div className="gi-verifier-modal-backdrop" onClick={closeVerifier} />

          <div className="gi-verifier-modal">
            <button
              type="button"
              className="gi-verifier-close"
              onClick={closeVerifier}
              aria-label={copy.close}
              disabled={verifying}
            >
              ×
            </button>

            <div className={`gi-scanner-emblem ${resultType}`}>
              <div className="gi-scanner-ring" />
              <div className="gi-scanner-line" />
              <span>{verifying ? "SN" : resultType === "verified" ? "✓" : "!"}</span>
            </div>

            <span className="gi-eyebrow">{copy.modalEyebrow}</span>
            <h3>{verifying ? copy.modalTitle : getResultTitle(resultType)}</h3>
            <p>
              {verifying
                ? copy.modalDescription
                : result?.message || getResultMessage(resultType)}
            </p>

            <div className="gi-verifier-progress">
              <div
                className="gi-verifier-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="gi-verifier-stage">
              <strong>{verifying ? copy.verifyingStatus : copy.completed}</strong>
              <span>
                {verifying
                  ? copy.stages[stageIndex] || copy.processing
                  : `${progress}%`}
              </span>
            </div>

            {certificate ? (
              <div className="gi-verifier-result-grid">
                <div>
                  <small>{copy.holderName}</small>
                  <strong>{certificate.holderName}</strong>
                </div>
                <div>
                  <small>{copy.certificateType}</small>
                  <strong>{certificate.certificateType}</strong>
                </div>
                <div>
                  <small>{copy.serialNumber}</small>
                  <strong>{certificate.serialNumber}</strong>
                </div>
                <div>
                  <small>{copy.issueDate}</small>
                  <strong>{certificate.issueDate}</strong>
                </div>
                <div>
                  <small>{copy.currentStatus}</small>
                  <strong>{certificate.status}</strong>
                </div>
              </div>
            ) : null}

            {!verifying ? (
              <button
                type="button"
                className="gi-verifier-again"
                onClick={() => {
                  setModalOpen(false)
                  resetVerifier()
                }}
              >
                {copy.tryAgain}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default function Page() {
  const { language } = useLanguage()
  const copy = HOME_COPY[language] || HOME_COPY.en
  const features = FEATURES_BY_LANGUAGE[language] || FEATURES_BY_LANGUAGE.en
  const networkStats = NETWORK_STATS_BY_LANGUAGE[language] || NETWORK_STATS_BY_LANGUAGE.en
  const latestPost = getLatestPost()
  const [showFeatureNotice, setShowFeatureNotice] = useState(false)

  useEffect(() => {
    if (!latestPost) return

    const timer = window.setTimeout(() => {
      setShowFeatureNotice(true)
    }, 700)

    return () => window.clearTimeout(timer)
  }, [latestPost])

  return (
    <main className="gi-page">
      <LatestFeaturePopup
        visible={showFeatureNotice}
        latestPost={latestPost}
        onClose={() => setShowFeatureNotice(false)}
      />
      <section className="gi-hero">
        <div className="gi-hero-copy">
          <span className="gi-eyebrow">{copy.heroEyebrow}</span>
          <h1>
            {copy.heroTitlePrefix} <span>{copy.heroTitleHighlight}</span> {copy.heroTitleSuffix}
          </h1>
          <div className="gi-divider" />
          <p>
            {copy.heroDescription}
          </p>

          <div className="gi-hero-actions">
            <a href="#global-network">{copy.discoverMore}</a>
            <a href="#recognition">{copy.viewRecognition}</a>
          </div>
        </div>

        <div className="gi-map-stage">
          <GlobalNetworkMap large />
        </div>
      </section>

      <section className="gi-feature-row">
        {features.map(([title, desc]) => (
          <article className="gi-feature-card" key={title}>
            <div className="gi-feature-icon">
              <img src={REAL_CHEF_HAT_SRC} alt="" aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </section>

      <CertificateVerifier />

      <section id="global-network" className="gi-network-panel">
        <div className="gi-network-info">
          <span className="gi-eyebrow">{copy.worldwideMembers}</span>
          <h2>{copy.networkTitle}</h2>
          <p>
            {copy.networkDescription}
          </p>

          <div className="gi-stat-grid">
            {networkStats.map((stat, index) => (
              <AnimatedStatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Benefits3DSpinCarousel />

      <Testimonials3DCarousel />

      <LatestStory />

      <style jsx global>{`
        .gi-page {
          min-height: 100vh;
          color: #f7f0df;
          overflow: hidden;
        }

        .gi-hero {
          width: min(1800px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-feature-row,
        .gi-network-panel,
        .gi-section,
        .gi-testimonials {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto;
        }

        .gi-feature-popup {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 80;
          width: min(480px, calc(100vw - 32px));
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 24px;
          padding: 18px;
          display: grid;
          grid-template-columns: 104px 1fr;
          gap: 14px;
          background:
            radial-gradient(360px 220px at 18% 0%, rgba(217, 163, 49, 0.18), transparent 64%),
            linear-gradient(180deg, rgba(18, 15, 10, 0.96), rgba(5, 5, 5, 0.94));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 28px 80px rgba(0, 0, 0, 0.52),
            0 0 44px rgba(217, 163, 49, 0.12);
          backdrop-filter: blur(18px);
          animation: giFeaturePopupIn 0.72s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .gi-feature-popup-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 8%,
            rgba(255, 238, 177, 0.11) 44%,
            transparent 74%
          );
          transform: translateX(-92%);
          animation: giFeaturePopupShine 5.2s ease-in-out infinite;
          pointer-events: none;
        }

        .gi-feature-popup-close {
          position: absolute;
          right: 12px;
          top: 12px;
          z-index: 3;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
          color: rgba(247, 240, 223, 0.86);
          cursor: pointer;
          font-size: 20px;
          line-height: 1;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .gi-feature-popup-close:hover {
          transform: rotate(90deg);
          border-color: rgba(244, 217, 138, 0.72);
          background: rgba(217, 163, 49, 0.12);
        }

        .gi-feature-popup-mark {
          position: relative;
          z-index: 2;
          width: 104px;
          height: 104px;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 18px;
          display: grid;
          place-items: center;
          color: #d9a331;
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.18), transparent 62%),
            rgba(255, 255, 255, 0.035);
          box-shadow: 0 0 28px rgba(217, 163, 49, 0.12);
          overflow: hidden;
        }

        .gi-feature-popup-mark img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .gi-feature-popup-mark span {
          animation: giFeaturePopupPulse 1.8s ease-in-out infinite;
        }

        .gi-feature-popup-content {
          position: relative;
          z-index: 2;
          padding-right: 26px;
        }

        .gi-feature-popup-content span {
          display: block;
          margin-bottom: 6px;
          color: #d9a331;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gi-feature-popup-content h3 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.035em;
          margin-bottom: 8px;
        }

        .gi-feature-popup-content p {
          color: rgba(247, 240, 223, 0.74);
          font-size: 13px;
          line-height: 1.58;
          margin-bottom: 10px;
        }

        .gi-feature-popup-content small {
          display: block;
          margin-bottom: 14px;
          color: rgba(247, 240, 223, 0.54);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gi-feature-popup-content a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0 14px;
          border: 1px solid rgba(217, 163, 49, 0.42);
          border-radius: 999px;
          background: rgba(217, 163, 49, 0.1);
          color: #f4d98a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .gi-feature-popup-content a:hover {
          transform: translateY(-2px);
          border-color: rgba(244, 217, 138, 0.84);
          background: rgba(217, 163, 49, 0.16);
        }

        .gi-hero {
          display: grid;
          grid-template-columns: minmax(340px, 0.42fr) minmax(840px, 1.58fr);
          gap: 20px;
          align-items: center;
          padding: 78px 0 34px;
          overflow: visible;
        }

        .gi-map-stage {
          position: relative;
          min-width: 0;
          overflow: visible;
        }

        .gi-hero-copy {
          position: relative;
          z-index: 4;
        }

        .gi-hero-copy h1,
        .gi-network-info h2,
        .gi-section-title,
        .gi-testimonial-head h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #fff;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .gi-hero-copy h1 {
          font-size: clamp(48px, 6vw, 92px);
          line-height: 0.98;
        }

        .gi-hero-copy h1 span {
          color: #d9a331;
        }

        .gi-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gi-center {
          text-align: center;
        }

        .gi-divider {
          width: 210px;
          height: 1px;
          margin: 26px 0;
          background: linear-gradient(90deg, transparent, #d9a331, transparent);
          position: relative;
        }

        .gi-divider::after {
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

        .gi-hero-copy p,
        .gi-network-info p,
        .gi-feature-card p,
        .gi-benefit-card p,
        .gi-testimonial-card p {
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .gi-hero-copy p {
          max-width: 560px;
          font-size: 16px;
        }

        .gi-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .gi-hero-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 12px;
          border: 1px solid rgba(217, 163, 49, 0.45);
          background: rgba(255, 255, 255, 0.035);
          color: #f4d98a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: 0.25s ease;
        }

        .gi-hero-actions a:hover {
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
          transform: translateY(-2px);
        }

        .gi-feature-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          padding: 22px 0 44px;
        }

        .gi-feature-card,
        .gi-network-panel,
        .gi-benefit-card,
        .gi-testimonials {
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

        .gi-feature-card {
          padding: 28px 20px;
          text-align: center;
          transition: 0.25s ease;
        }

        .gi-feature-card:hover,
        .gi-benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(217, 163, 49, 0.68);
        }

        .gi-feature-icon {
          width: 82px;
          height: 82px;
          margin: 0 auto 18px;
          display: grid;
          place-items: center;
          background: transparent;
          border: none;
          box-shadow: none;
          overflow: visible;
        }

        .gi-feature-icon img {
          width: 82px;
          height: 82px;
          object-fit: contain;
          display: block;
          transform: none;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.42));
        }

        .gi-feature-card h3,
        .gi-benefit-card h3 {
          color: #d9a331;
          text-transform: uppercase;
          font-size: 15px;
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .gi-feature-card p {
          font-size: 13px;
        }

        .gi-network-panel {
          display: block;
          padding: 28px;
          margin-bottom: 52px;
        }

        .gi-network-info {
          max-width: 100%;
        }

        .gi-network-info p {
          max-width: 820px;
        }

        .gi-network-info h2,
        .gi-testimonial-head h2,
        .gi-section-title {
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.05;
        }

        .gi-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 28px;
          max-width: 100%;
        }

        .gi-stat-card {
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(18px);
          border: 1px solid rgba(217, 163, 49, 0.28);
          border-radius: 16px;
          padding: 18px 18px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
            radial-gradient(circle at 20% 20%, rgba(217, 163, 49, 0.08), transparent 55%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 30px rgba(0, 0, 0, 0.18);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .gi-stat-card.is-visible {
          animation:
            giStatAppear 0.9s ease both,
            giStatFloat 7.2s ease-in-out infinite;
        }

        .gi-stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -140%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 221, 136, 0.12),
            transparent
          );
        }

        .gi-stat-card.is-visible::before {
          animation: giStatShine 5.8s linear infinite;
          animation-delay: var(--statDelay);
        }

        .gi-stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(244, 217, 138, 0.5);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 18px 36px rgba(0, 0, 0, 0.24);
        }

        .gi-stat-card strong {
          display: block;
          color: #e7b23c;
          font-size: 34px;
          line-height: 1;
          text-shadow: 0 0 16px rgba(231, 178, 60, 0.14);
        }

        .gi-stat-card.is-visible strong {
          animation: giNumberGlow 4.2s ease-in-out infinite;
        }

        .gi-stat-card span {
          display: block;
          margin-top: 7px;
          color: rgba(247, 240, 223, 0.72);
          font-size: 12px;
        }

        .gi-section {
          padding: 30px 0 54px;
        }

        .gi-section-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .gi-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .gi-benefit-card {
          padding: 18px;
          text-align: center;
          transition: 0.25s ease;
        }

        .gi-benefit-img {
          height: 270px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          background: radial-gradient(circle, rgba(217, 163, 49, 0.12), rgba(255, 255, 255, 0.02));
          margin-bottom: 18px;
        }

        .gi-benefit-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gi-benefits-spin-section {
          position: relative;
          overflow: hidden;
        }

        .gi-benefits-spin-section::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 52%;
          width: min(720px, 90vw);
          height: min(720px, 90vw);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.16), transparent 58%),
            conic-gradient(from 0deg, transparent, rgba(217, 163, 49, 0.12), transparent);
          transform: translate(-50%, -50%);
          animation: giBenefitAuraSpin 18s linear infinite;
          pointer-events: none;
        }

        .gi-benefit-spin-carousel {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 22px;
          margin-top: 10px;
        }

        .gi-benefit-spin-stage {
          position: relative;
          min-height: 500px;
          perspective: 1500px;
          transform-style: preserve-3d;
          overflow: hidden;
        }

        .gi-benefit-spin-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(390px, 68%);
          min-height: 430px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: hidden;
          opacity: var(--benefitOpacity);
          transform:
            translate(-50%, -50%)
            translateX(var(--benefitX))
            translateZ(var(--benefitZ))
            rotateY(var(--benefitRotateY))
            rotateZ(var(--benefitRotateZ))
            scale(var(--benefitScale));
          transform-style: preserve-3d;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 28px 80px rgba(0, 0, 0, 0.42);
          transition:
            opacity 0.68s ease,
            transform 0.82s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .gi-benefit-spin-card.is-active {
          border-color: rgba(244, 217, 138, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 38px 110px rgba(0, 0, 0, 0.52),
            0 0 64px rgba(217, 163, 49, 0.18);
        }

        .gi-benefit-card-shine {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            120deg,
            transparent 8%,
            rgba(255, 238, 177, 0.16) 44%,
            transparent 70%
          );
          opacity: 0;
          transform: translateX(-95%);
          pointer-events: none;
        }

        .gi-benefit-spin-card.is-active .gi-benefit-card-shine {
          animation: giCarouselShine 4.2s ease-in-out infinite;
        }

        .gi-benefit-spin-card .gi-benefit-img {
          position: relative;
          z-index: 1;
          height: 260px;
        }

        .gi-benefit-spin-card h3,
        .gi-benefit-spin-card p {
          position: relative;
          z-index: 3;
        }

        .gi-benefit-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .gi-benefit-carousel-controls > button {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: #f4d98a;
          font-size: 26px;
          line-height: 1;
          cursor: pointer;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease;
        }

        .gi-benefit-carousel-controls > button:hover {
          transform: translateY(-2px);
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
        }

        .gi-benefit-carousel-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .gi-benefit-carousel-dots button {
          width: 10px;
          height: 10px;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition:
            width 0.28s ease,
            background 0.28s ease,
            border-color 0.28s ease;
        }

        .gi-benefit-carousel-dots button.active {
          width: 30px;
          border-color: rgba(244, 217, 138, 0.9);
          background: #d9a331;
        }

        .gi-testimonials {
          position: relative;
          padding: 28px;
          margin-bottom: 44px;
          overflow: hidden;
        }

        .gi-testimonials::before {
          content: "";
          position: absolute;
          inset: -40% 10% auto;
          height: 260px;
          background: radial-gradient(circle, rgba(217, 163, 49, 0.16), transparent 68%);
          pointer-events: none;
        }

        .gi-testimonial-head {
          position: relative;
          z-index: 3;
        }

        .gi-testimonial-carousel {
          position: relative;
          z-index: 3;
          margin-top: 24px;
          display: grid;
          gap: 20px;
        }

        .gi-testimonial-stage {
          position: relative;
          min-height: 310px;
          perspective: 1400px;
          transform-style: preserve-3d;
          overflow: hidden;
        }

        .gi-testimonial-card {
          border: 1px solid rgba(217, 163, 49, 0.22);
          border-radius: 18px;
          padding: 22px;
          background: rgba(255, 255, 255, 0.03);
        }

        .gi-carousel-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(620px, 72%);
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 8%, rgba(217, 163, 49, 0.18), transparent 34%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 26px 70px rgba(0, 0, 0, 0.4);
          opacity: var(--cardOpacity);
          transform:
            translate(-50%, -50%)
            translateX(var(--cardX))
            translateZ(var(--cardZ))
            rotateY(var(--cardRotate))
            scale(var(--cardScale));
          transform-style: preserve-3d;
          transition:
            opacity 0.65s ease,
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .gi-carousel-card.is-active {
          border-color: rgba(244, 217, 138, 0.68);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 34px 100px rgba(0, 0, 0, 0.5),
            0 0 52px rgba(217, 163, 49, 0.16);
        }

        .gi-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 10%,
            rgba(255, 238, 177, 0.12) 46%,
            transparent 72%
          );
          opacity: 0;
          transform: translateX(-90%);
          pointer-events: none;
        }

        .gi-carousel-card.is-active .gi-card-shine {
          animation: giCarouselShine 4.2s ease-in-out infinite;
        }

        .gi-quote-mark {
          position: absolute;
          right: 24px;
          top: 10px;
          color: rgba(217, 163, 49, 0.15);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 120px;
          line-height: 1;
          pointer-events: none;
        }

        .gi-testimonial-card strong,
        .gi-testimonial-card span,
        .gi-testimonial-card small {
          display: block;
          position: relative;
          z-index: 2;
        }

        .gi-testimonial-card strong {
          color: #fff;
          margin-top: 18px;
        }

        .gi-testimonial-card span {
          color: rgba(247, 240, 223, 0.64);
          font-size: 12px;
          margin-top: 4px;
        }

        .gi-testimonial-card small {
          color: #d9a331;
          margin-top: 8px;
        }

        .gi-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .gi-carousel-controls > button {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
          color: #f4d98a;
          font-size: 26px;
          line-height: 1;
          cursor: pointer;
          transition:
            transform 0.24s ease,
            border-color 0.24s ease,
            background 0.24s ease;
        }

        .gi-carousel-controls > button:hover {
          transform: translateY(-2px);
          border-color: rgba(244, 217, 138, 0.85);
          background: rgba(217, 163, 49, 0.12);
        }

        .gi-carousel-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .gi-carousel-dots button {
          width: 10px;
          height: 10px;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition:
            width 0.28s ease,
            background 0.28s ease,
            border-color 0.28s ease;
        }

        .gi-carousel-dots button.active {
          width: 30px;
          border-color: rgba(244, 217, 138, 0.9);
          background: #d9a331;
        }

        .gi-map {
          position: relative;
          min-height: 430px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.26);
          background:
            radial-gradient(circle at 50% 45%, rgba(217, 163, 49, 0.13), transparent 15%),
            radial-gradient(circle at 50% 50%, rgba(255, 230, 160, 0.065), transparent 42%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -80px 120px rgba(0, 0, 0, 0.48),
            0 28px 90px rgba(0, 0, 0, 0.38);
        }

        .gi-map.large {
          min-height: 760px;
          border: none;
          background: transparent;
          box-shadow: none;
          overflow: visible;
        }

        .gi-map-caption {
          position: absolute;
          top: 16px;
          left: 18px;
          z-index: 9;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d9a331;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gi-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #f5b83f;
          box-shadow: 0 0 20px rgba(245, 184, 63, 0.9);
          animation: giBlink 1.5s ease-in-out infinite;
        }

        .gi-map-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 50% 47%, rgba(245, 184, 63, 0.13), transparent 19%),
            radial-gradient(circle at 28% 42%, rgba(245, 184, 63, 0.075), transparent 12%),
            radial-gradient(circle at 75% 56%, rgba(245, 184, 63, 0.065), transparent 13%);
          pointer-events: none;
        }

        .gi-earth-stage {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: grid;
          place-items: center;
          overflow: visible;
        }

        .gi-map.large .gi-earth-stage {
          inset: -70px -180px -50px -100px;
        }

        .gi-earth-shell {
          position: relative;
          width: min(86%, 680px);
          aspect-ratio: 1;
          border-radius: 999px;
          display: grid;
          place-items: center;
          filter:
            drop-shadow(0 34px 90px rgba(0, 0, 0, 0.58))
            drop-shadow(0 0 42px rgba(217, 163, 49, 0.12));
        }

        .gi-map.large .gi-earth-shell {
          width: min(92%, 860px);
        }

        .gi-earth-aura {
          position: absolute;
          inset: 5%;
          border-radius: 999px;
          background:
            radial-gradient(circle at 42% 35%, rgba(245, 184, 63, 0.22), transparent 12%),
            radial-gradient(circle at 58% 56%, rgba(217, 163, 49, 0.15), transparent 18%),
            radial-gradient(circle, rgba(245, 184, 63, 0.15), transparent 62%);
          filter: blur(16px);
          animation: giAuraPulse 4.8s ease-in-out infinite;
          pointer-events: none;
        }

        .gi-earth-light {
          position: absolute;
          inset: -4%;
          border-radius: 999px;
          background:
            radial-gradient(circle at 31% 25%, rgba(255, 248, 221, 0.14), transparent 13%),
            radial-gradient(circle at 44% 38%, rgba(217, 163, 49, 0.05), transparent 28%);
          mix-blend-mode: screen;
          z-index: 7;
          pointer-events: none;
        }

        .gi-earth-shadow {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background:
            radial-gradient(circle at 32% 28%, transparent 0 42%, rgba(0, 0, 0, 0.08) 58%, rgba(0, 0, 0, 0.48) 100%),
            linear-gradient(125deg, rgba(255, 255, 255, 0.055), transparent 39%, rgba(0, 0, 0, 0.31) 100%);
          box-shadow:
            inset -48px -32px 88px rgba(0, 0, 0, 0.42),
            inset 22px 14px 44px rgba(255, 245, 204, 0.07),
            0 0 48px rgba(217, 163, 49, 0.15);
          pointer-events: none;
          z-index: 6;
          opacity: 0.68;
        }

        .gi-earth-rim {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 1px solid rgba(255, 230, 160, 0.26);
          box-shadow:
            0 0 44px rgba(217, 163, 49, 0.15),
            inset 0 0 28px rgba(255, 230, 160, 0.07),
            inset 0 0 1px rgba(255, 255, 255, 0.28);
          pointer-events: none;
          z-index: 8;
        }

        .gi-map-svg {
          position: relative;
          z-index: 4;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 999px;
        }

        .gi-sphere {
          stroke: rgba(255, 230, 160, 0.24);
          stroke-width: 0.75;
        }

        .gi-graticule {
          fill: none;
          stroke: rgba(255, 238, 190, 0.2);
          stroke-width: 0.45;
        }

        .gi-country {
          fill: rgba(218, 181, 88, 0.88);
          stroke: rgba(255, 246, 215, 0.62);
          stroke-width: 0.52;
          outline: none;
          vector-effect: non-scaling-stroke;
          filter: drop-shadow(0 0 2px rgba(245, 184, 63, 0.18));
          transition: fill 0.22s ease, stroke 0.22s ease;
        }

        .gi-country:hover {
          fill: rgba(255, 215, 118, 0.98);
          stroke: rgba(255, 255, 255, 0.78);
        }

        .gi-route-glow {
          stroke: rgba(217, 163, 49, 0.14);
          stroke-width: 4.2;
          fill: none;
          filter: blur(2.8px);
          pointer-events: none;
        }

        .gi-route-line {
          stroke: rgba(255, 226, 158, 0.62);
          stroke-width: 0.78;
          stroke-dasharray: 2.2 4.4;
          fill: none;
          animation: giDash 5.4s linear infinite;
          pointer-events: none;
        }

        .gi-city-ring {
          fill: rgba(217, 163, 49, 0.08);
          stroke: rgba(255, 237, 181, 0.64);
          stroke-width: 0.75;
        }

        .gi-city-dot {
          fill: rgba(255, 248, 226, 0.98);
          filter: drop-shadow(0 0 6px rgba(245, 184, 63, 0.95));
        }

        .gi-member-pulse-marker {
          pointer-events: auto;
          cursor: pointer;
        }

        .gi-member-pulse-ring {
          fill: rgba(217, 163, 49, 0.11);
          stroke: rgba(255, 228, 156, 0.86);
          stroke-width: 1.2;
          filter:
            drop-shadow(0 0 18px rgba(245, 184, 63, 1))
            drop-shadow(0 0 48px rgba(217, 163, 49, 0.78));
          animation: giMemberPulse 3.2s ease-out infinite;
          animation-delay: var(--memberPulseDelay);
        }

        .gi-member-pulse-ring-two {
          animation-delay: calc(var(--memberPulseDelay) + 0.95s);
          opacity: 0.74;
        }

        .gi-member-pulse-ring-three {
          animation-delay: calc(var(--memberPulseDelay) + 1.9s);
          opacity: 0.56;
        }

        .gi-member-pulse-core {
          fill: #f5b83f;
          stroke: rgba(255, 248, 226, 0.95);
          stroke-width: 1.2;
          filter:
            drop-shadow(0 0 24px rgba(245, 184, 63, 1))
            drop-shadow(0 0 62px rgba(217, 163, 49, 0.92))
            drop-shadow(0 0 96px rgba(217, 163, 49, 0.42));
          animation: giMemberCoreGlow 1.75s ease-in-out infinite;
          animation-delay: var(--memberPulseDelay);
        }

        .gi-member-pulse-spark {
          fill: rgba(255, 255, 255, 0.95);
          opacity: 0.92;
          filter: drop-shadow(0 0 5px rgba(255, 246, 215, 0.9));
          transform: translate(-0.8px, -0.8px);
        }

        .gi-member-pulse-label {
          fill: rgba(255, 248, 226, 0.98);
          font-size: 5.3px;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-anchor: middle;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.88);
          stroke-width: 2.4px;
          opacity: 0;
          transform: translateY(2px);
          transition:
            opacity 0.22s ease,
            transform 0.22s ease;
          pointer-events: none;
        }

        .gi-map.large .gi-member-pulse-label {
          font-size: 6.2px;
        }

        .gi-member-pulse-marker:hover .gi-member-pulse-label {
          opacity: 1;
          transform: translateY(0);
        }

        .gi-marker-ring {
          fill: rgba(217, 163, 49, 0.1);
          stroke: rgba(255, 237, 181, 0.82);
          stroke-width: 0.85;
          animation: giPulseRing 2.25s ease-in-out infinite;
        }

        .gi-marker-dot {
          fill: #f5b83f;
          filter: drop-shadow(0 0 8px rgba(245, 184, 63, 1));
        }

        .gi-marker-label {
          fill: rgba(255, 248, 226, 0.96);
          font-size: 6px;
          font-weight: 800;
          paint-order: stroke;
          stroke: rgba(0, 0, 0, 0.92);
          stroke-width: 2.5px;
          pointer-events: none;
          text-anchor: middle;
          letter-spacing: 0.03em;
        }

        .gi-map.large .gi-marker-label {
          font-size: 7px;
        }

        .gi-plane-group {
          pointer-events: none;
        }

        .gi-plane-aura {
          fill: rgba(245, 184, 63, 0.2);
          opacity: 0.92;
        }

        .gi-plane-trail {
          fill: none;
          stroke: rgba(245, 184, 63, 0.5);
          stroke-width: 1.1;
          stroke-linecap: round;
          opacity: 0.88;
        }

        .gi-real-plane {
          pointer-events: none;
          image-rendering: auto;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes giDash {
          to {
            stroke-dashoffset: -90;
          }
        }

        @keyframes giPulseRing {
          0%, 100% {
            r: 2.2;
            opacity: 0.4;
          }
          50% {
            r: 5.2;
            opacity: 1;
          }
        }

        @keyframes giMemberPulse {
          0% {
            r: 16.5;
            opacity: 0.96;
            stroke-width: 2.2;
          }
          72% {
            r: 90;
            opacity: 0;
            stroke-width: 0.72;
          }
          100% {
            r: 90;
            opacity: 0;
            stroke-width: 0.72;
          }
        }

        @keyframes giMemberCoreGlow {
          0%, 100% {
            opacity: 0.88;
            transform: scale(0.92);
          }
          50% {
            opacity: 1;
            transform: scale(1.18);
          }
        }

        @keyframes giBlink {
          0%, 100% {
            opacity: 0.45;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes giAuraPulse {
          0%, 100% {
            transform: scale(0.985);
            opacity: 0.72;
          }
          50% {
            transform: scale(1.035);
            opacity: 1;
          }
        }

        @keyframes giStatAppear {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes giStatFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes giStatShine {
          0% {
            left: -140%;
          }
          100% {
            left: 160%;
          }
        }

        @keyframes giNumberGlow {
          0%, 100% {
            text-shadow: 0 0 12px rgba(231, 178, 60, 0.08);
          }
          50% {
            text-shadow: 0 0 22px rgba(231, 178, 60, 0.22);
          }
        }

        @keyframes giCarouselShine {
          0%, 28% {
            opacity: 0;
            transform: translateX(-90%);
          }
          42% {
            opacity: 1;
          }
          62%, 100% {
            opacity: 0;
            transform: translateX(90%);
          }
        }

        @keyframes giBenefitAuraSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }


        .gi-verifier-section {
          width: min(1440px, calc(100% - 40px));
          margin: 0 auto 52px;
        }

        .gi-verifier-panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 0.82fr;
          gap: 26px;
          align-items: center;
          border: 1px solid rgba(217, 163, 49, 0.3);
          border-radius: 26px;
          padding: 30px;
          background:
            radial-gradient(760px 280px at 14% 0%, rgba(217, 163, 49, 0.16), transparent 64%),
            radial-gradient(620px 260px at 100% 12%, rgba(255, 238, 177, 0.09), transparent 64%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 30px 100px rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(18px);
        }

        .gi-verifier-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 8%,
            rgba(255, 238, 177, 0.08) 44%,
            transparent 74%
          );
          transform: translateX(-95%);
          animation: giVerifierPanelShine 6.8s ease-in-out infinite;
          pointer-events: none;
        }

        .gi-verifier-copy,
        .gi-verifier-form {
          position: relative;
          z-index: 2;
        }

        .gi-verifier-copy h2 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .gi-verifier-copy h2 span {
          color: #d9a331;
        }

        .gi-verifier-copy p {
          max-width: 720px;
          margin-top: 16px;
          color: rgba(247, 240, 223, 0.76);
          line-height: 1.72;
        }

        .gi-verifier-form {
          display: grid;
          gap: 12px;
          border: 1px solid rgba(217, 163, 49, 0.24);
          border-radius: 22px;
          padding: 20px;
          background: rgba(0, 0, 0, 0.28);
        }

        .gi-verifier-form input {
          width: 100%;
          min-height: 54px;
          border: 1px solid rgba(217, 163, 49, 0.28);
          border-radius: 16px;
          padding: 0 16px;
          background: rgba(0, 0, 0, 0.42);
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          outline: none;
          transition:
            border-color 0.24s ease,
            background 0.24s ease,
            box-shadow 0.24s ease;
        }

        .gi-verifier-form input::placeholder {
          color: rgba(247, 240, 223, 0.42);
        }

        .gi-verifier-form input:focus {
          border-color: rgba(244, 217, 138, 0.86);
          background: rgba(0, 0, 0, 0.56);
          box-shadow: 0 0 0 4px rgba(217, 163, 49, 0.1);
        }

        .gi-verifier-form button,
        .gi-verifier-again {
          min-height: 48px;
          border: 1px solid rgba(217, 163, 49, 0.56);
          border-radius: 16px;
          background: linear-gradient(135deg, #d9a331, #f4d98a);
          color: #090909;
          cursor: pointer;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition:
            transform 0.24s ease,
            box-shadow 0.24s ease,
            opacity 0.24s ease;
        }

        .gi-verifier-form button:hover,
        .gi-verifier-again:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(217, 163, 49, 0.2);
        }

        .gi-verifier-form button:disabled,
        .gi-verifier-close:disabled {
          cursor: not-allowed;
          opacity: 0.62;
        }

        .gi-verifier-form small {
          color: rgba(244, 217, 138, 0.82);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gi-verifier-form p {
          color: rgba(247, 240, 223, 0.6);
          font-size: 12px;
          line-height: 1.6;
        }

        .gi-verifier-modal-wrap,
        .gi-verifier-modal-backdrop {
          position: fixed;
          inset: 0;
        }

        .gi-verifier-modal-wrap {
          z-index: 110;
          display: grid;
          place-items: center;
          padding: 18px;
        }

        .gi-verifier-modal-backdrop {
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(12px);
        }

        .gi-verifier-modal {
          position: relative;
          width: min(720px, 100%);
          max-height: 92vh;
          overflow: auto;
          border: 1px solid rgba(217, 163, 49, 0.32);
          border-radius: 28px;
          padding: 30px;
          background:
            radial-gradient(620px 260px at 50% 0%, rgba(217, 163, 49, 0.18), transparent 62%),
            linear-gradient(180deg, rgba(18, 15, 10, 0.98), rgba(5, 5, 5, 0.96));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 34px 120px rgba(0, 0, 0, 0.72),
            0 0 60px rgba(217, 163, 49, 0.14);
          text-align: center;
        }

        .gi-verifier-close {
          position: absolute;
          right: 16px;
          top: 16px;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(217, 163, 49, 0.26);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
          color: rgba(247, 240, 223, 0.86);
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
        }

        .gi-scanner-emblem {
          position: relative;
          width: 132px;
          height: 132px;
          margin: 6px auto 22px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(217, 163, 49, 0.34);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(217, 163, 49, 0.18), transparent 62%),
            rgba(255, 255, 255, 0.035);
          overflow: hidden;
        }

        .gi-scanner-emblem.verified {
          border-color: rgba(93, 255, 168, 0.52);
          box-shadow: 0 0 42px rgba(93, 255, 168, 0.14);
        }

        .gi-scanner-emblem.expired,
        .gi-scanner-emblem.revoked,
        .gi-scanner-emblem.invalid,
        .gi-scanner-emblem.not_found,
        .gi-scanner-emblem.rate_limited,
        .gi-scanner-emblem.server_error {
          border-color: rgba(255, 102, 102, 0.52);
          box-shadow: 0 0 42px rgba(255, 102, 102, 0.14);
        }

        .gi-scanner-ring {
          position: absolute;
          inset: 14px;
          border: 1px dashed rgba(244, 217, 138, 0.44);
          border-radius: 999px;
          animation: giVerifierSpin 5.8s linear infinite;
        }

        .gi-scanner-line {
          position: absolute;
          left: 18px;
          right: 18px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f4d98a, transparent);
          box-shadow: 0 0 18px rgba(244, 217, 138, 0.56);
          animation: giVerifierScan 1.5s ease-in-out infinite;
        }

        .gi-scanner-emblem span {
          position: relative;
          z-index: 2;
          color: #f4d98a;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .gi-verifier-modal h3 {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .gi-verifier-modal p {
          max-width: 560px;
          margin: 14px auto 0;
          color: rgba(247, 240, 223, 0.74);
          line-height: 1.72;
        }

        .gi-verifier-progress {
          position: relative;
          height: 12px;
          margin-top: 24px;
          overflow: hidden;
          border: 1px solid rgba(217, 163, 49, 0.25);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.045);
        }

        .gi-verifier-progress-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #d9a331, #f4d98a, #fff0ad);
          box-shadow: 0 0 18px rgba(244, 217, 138, 0.32);
          transition: width 0.22s linear;
        }

        .gi-verifier-stage {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          color: rgba(247, 240, 223, 0.74);
          font-size: 12px;
        }

        .gi-verifier-stage strong {
          color: #f4d98a;
        }

        .gi-verifier-result-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
          text-align: left;
        }

        .gi-verifier-result-grid div {
          border: 1px solid rgba(217, 163, 49, 0.2);
          border-radius: 16px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .gi-verifier-result-grid small,
        .gi-verifier-result-grid strong {
          display: block;
        }

        .gi-verifier-result-grid small {
          margin-bottom: 6px;
          color: rgba(247, 240, 223, 0.54);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .gi-verifier-result-grid strong {
          color: #fff;
          line-height: 1.35;
        }

        .gi-verifier-again {
          margin-top: 24px;
          padding: 0 18px;
        }

        @keyframes giVerifierPanelShine {
          0%, 45% {
            opacity: 0;
            transform: translateX(-95%);
          }

          55% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(92%);
          }
        }

        @keyframes giVerifierSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes giVerifierScan {
          0%, 100% {
            top: 22px;
            opacity: 0.3;
          }

          50% {
            top: calc(100% - 24px);
            opacity: 1;
          }
        }

        @keyframes giFeaturePopupIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes giFeaturePopupShine {
          0%, 26% {
            opacity: 0;
            transform: translateX(-92%);
          }
          42% {
            opacity: 1;
          }
          62%, 100% {
            opacity: 0;
            transform: translateX(92%);
          }
        }

        @keyframes giFeaturePopupPulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.82;
          }
          50% {
            transform: scale(1.18) rotate(12deg);
            opacity: 1;
          }
        }

        @media (max-width: 1280px) {
          .gi-hero {
            grid-template-columns: minmax(320px, 0.5fr) minmax(620px, 1.5fr);
          }

          .gi-map.large {
            min-height: 620px;
          }

          .gi-map.large .gi-earth-stage {
            inset: -50px -110px -35px -70px;
          }
        }

        @media (max-width: 1180px) {
          .gi-hero {
            grid-template-columns: 1fr;
          }

          .gi-map-stage {
            min-height: 560px;
          }

          .gi-feature-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gi-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .gi-hero,
          .gi-feature-row,
          .gi-network-panel,
          .gi-section,
          .gi-testimonials {
            width: min(100% - 24px, 1440px);
          }

          .gi-hero {
            padding-top: 46px;
          }

          .gi-feature-row,
          .gi-benefit-grid,
          .gi-stat-grid {
            grid-template-columns: 1fr;
          }

          .gi-map-stage {
            min-height: 430px;
          }

          .gi-map.large,
          .gi-map {
            min-height: 420px;
          }

          .gi-map.large .gi-earth-stage,
          .gi-earth-stage {
            inset: -35px -70px -25px -55px;
          }

          .gi-earth-shell {
            width: min(92%, 420px);
          }

          .gi-benefit-img {
            height: 230px;
          }

          .gi-benefit-spin-stage {
            min-height: 520px;
          }

          .gi-benefit-spin-card {
            width: min(100%, 340px);
            min-height: 450px;
            transform:
              translate(-50%, -50%)
              translateX(var(--mobileBenefitX))
              translateZ(0)
              rotateY(var(--mobileBenefitRotateY))
              scale(var(--mobileBenefitScale));
          }

          .gi-benefit-spin-card .gi-benefit-img {
            height: 245px;
          }

          .gi-benefit-carousel-controls {
            gap: 12px;
          }

          .gi-testimonials {
            padding: 22px 14px;
          }

          .gi-testimonial-stage {
            min-height: 390px;
          }

          .gi-carousel-card {
            width: min(100%, 360px);
            min-height: 330px;
            padding: 22px 18px;
            transform:
              translate(-50%, -50%)
              translateX(var(--mobileCardX))
              translateZ(0)
              rotateY(var(--mobileCardRotate))
              scale(var(--mobileCardScale));
          }

          .gi-carousel-controls {
            gap: 12px;
          }

          .gi-feature-popup {
            left: 12px;
            right: 12px;
            bottom: 14px;
            width: auto;
            grid-template-columns: 74px 1fr;
            gap: 12px;
            padding: 14px;
            border-radius: 20px;
          }

          .gi-feature-popup-mark {
            width: 74px;
            height: 74px;
            border-radius: 15px;
          }

          .gi-feature-popup-content {
            padding-right: 22px;
          }

          .gi-feature-popup-content h3 {
            font-size: 19px;
          }

          .gi-feature-popup-content p {
            font-size: 12px;
          }

          .gi-member-pulse-label {
            display: none;
          }

          .gi-marker-label {
            font-size: 5px;
          }
        }


        @media (max-width: 960px) {
          .gi-verifier-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .gi-verifier-section {
            width: min(100% - 24px, 1440px);
          }

          .gi-verifier-panel,
          .gi-verifier-modal {
            padding: 22px;
            border-radius: 22px;
          }

          .gi-verifier-result-grid {
            grid-template-columns: 1fr;
          }

          .gi-verifier-stage {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gi-live-dot,
          .gi-marker-ring,
          .gi-earth-aura,
          .gi-route-line,
          .gi-stat-card,
          .gi-stat-card::before,
          .gi-stat-card strong,
          .gi-carousel-card.is-active .gi-card-shine,
          .gi-benefits-spin-section::before,
          .gi-benefit-spin-card.is-active .gi-benefit-card-shine,
          .gi-feature-popup,
          .gi-feature-popup-glow,
          .gi-feature-popup-mark span,
          .gi-member-pulse-ring,
          .gi-member-pulse-core,
          .gi-verifier-panel::before,
          .gi-scanner-ring,
          .gi-scanner-line {
            animation: none !important;
          }

          .gi-carousel-card,
          .gi-benefit-spin-card,
          .gi-feature-popup-close,
          .gi-feature-popup-content a,
          .gi-verifier-form button,
          .gi-verifier-again,
          .gi-verifier-progress-fill {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
}

function GlobalNetworkMap({ large = false }) {
  const { language } = useLanguage()
  const mapCopy = MAP_COPY[language] || MAP_COPY.en
  const [scene, setScene] = useState({
    rotation: -24,
    time: 0,
  })

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    let raf = 0
    let last = performance.now()
    const start = performance.now()

    const animate = (now: number) => {
      const delta = now - last

      if (delta >= 33) {
        const elapsed = (now - start) / 1000
        setScene({
          time: elapsed,
          rotation: ((elapsed * 5.4) % 360) - 24,
        })
        last = now
      }

      raf = window.requestAnimationFrame(animate)
    }

    raf = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(raf)
  }, [])

  const cityMap = useMemo(() => {
    const map: Record<string, number[]> = {}
    for (const city of CITIES) {
      map[city.name] = city.coordinates
    }
    map[HUB.name] = HUB.coordinates
    return map
  }, [])

  const activeFlights = useMemo(() => {
    return FLIGHT_ROUTES.map((route) => {
      const from = cityMap[route.from]
      const to = cityMap[route.to]
      if (!from || !to) return null

      const progress = ((scene.time / route.duration) + route.offset) % 1
      const nextProgress = (((scene.time + 0.15) / route.duration) + route.offset) % 1

      const current = interpolateCoordinates(from, to, progress)
      const next = interpolateCoordinates(from, to, nextProgress)
      const bearing = getPlaneBearing(current, next)

      return {
        ...route,
        from,
        to,
        current,
        bearing,
      }
    }).filter(Boolean)
  }, [scene.time, cityMap])

  const scale = large ? 310 : 205
  const markerRadius = large ? 1.8 : 1.4
  const planeWidth = large ? 20 : 15
  const planeHeight = large ? 32 : 24
  const sphereGradientId = large ? "giEarthOceanLarge" : "giEarthOceanSmall"
  const planeGlowId = large ? "giRealPlaneGlowLarge" : "giRealPlaneGlowSmall"

  return (
    <div className={`gi-map ${large ? "large" : ""}`}>
      <div className="gi-map-caption">
        <span className="gi-live-dot" />
        {mapCopy.liveEarth}
      </div>

      <div className="gi-map-glow" />

      <div className="gi-earth-stage">
        <div className="gi-earth-shell">
          <div className="gi-earth-aura" />

          <ComposableMap
            className="gi-map-svg"
            projection="geoOrthographic"
            projectionConfig={{
              scale,
              center: [0, 0],
              rotate: [-scene.rotation, -18, 0],
            }}
          >
            <defs>
              <radialGradient id={sphereGradientId} cx="38%" cy="30%" r="72%">
                <stop offset="0%" stopColor="#243246" />
                <stop offset="42%" stopColor="#101926" />
                <stop offset="74%" stopColor="#05080d" />
                <stop offset="100%" stopColor="#010203" />
              </radialGradient>

              <filter id={planeGlowId} x="-120%" y="-120%" width="340%" height="340%">
                <feDropShadow dx="0" dy="0" stdDeviation="1.6" floodColor="#f5b83f" floodOpacity="0.78" />
                <feDropShadow dx="0" dy="0" stdDeviation="3.6" floodColor="#f5b83f" floodOpacity="0.32" />
              </filter>
            </defs>

            <Sphere className="gi-sphere" fill={`url(#${sphereGradientId})`} />
            <Graticule className="gi-graticule" />

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className="gi-country"
                  />
                ))
              }
            </Geographies>

            {FLIGHT_ROUTES.map((route) => {
              const from = cityMap[route.from]
              const to = cityMap[route.to]
              if (!from || !to) return null

              return (
                <g key={`route-${route.id}`}>
                  <Line from={from} to={to} className="gi-route-glow" />
                  <Line from={from} to={to} className="gi-route-line" />
                </g>
              )
            })}

            <Marker coordinates={HUB.coordinates}>
              <circle className="gi-marker-ring" r={markerRadius + 1.5} />
              <circle className="gi-marker-dot" r={markerRadius + 0.75} />
              <text y={-7} className="gi-marker-label">
                {mapCopy.globalHub}
              </text>
            </Marker>

            {CITIES.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <circle className="gi-city-ring" r={markerRadius + 0.3} />
                <circle className="gi-city-dot" r={markerRadius * 0.52} />
              </Marker>
            ))}

            {MEMBER_PULSE_LOCATIONS.map((location, index) => (
              <Marker key={`member-pulse-${location.name}`} coordinates={location.coordinates}>
                <g
                  className="gi-member-pulse-marker"
                  style={{
                    "--memberPulseDelay": `${index * 0.16}s`,
                  }}
                >
                  <title>{`${location.name} — ${mapCopy.memberPresenceTitle}`}</title>
                  <circle className="gi-member-pulse-ring gi-member-pulse-ring-one" r={26.4} />
                  <circle className="gi-member-pulse-ring gi-member-pulse-ring-two" r={26.4} />
                  <circle className="gi-member-pulse-ring gi-member-pulse-ring-three" r={26.4} />
                  <circle className="gi-member-pulse-core" r={large ? 14.4 : 11.1} />
                  <circle className="gi-member-pulse-spark" r={large ? 3.75 : 2.85} />
                  <text y={large ? -9 : -7} className="gi-member-pulse-label">
                    {location.name}
                  </text>
                </g>
              </Marker>
            ))}

            {activeFlights.map((flight) => (
              <Marker key={`plane-${flight.id}`} coordinates={flight.current}>
                <g className="gi-plane-group" transform={`rotate(${flight.bearing})`}>
                  <ellipse className="gi-plane-aura" cx="0" cy="8" rx="3.5" ry="8" />
                  <path className="gi-plane-trail" d="M0 8 L0 19" />
                  <image
                    className="gi-real-plane"
                    href={REAL_AIRPLANE_SRC}
                    x={planeWidth / -2}
                    y={planeHeight / -2}
                    width={planeWidth}
                    height={planeHeight}
                    preserveAspectRatio="xMidYMid meet"
                    filter={`url(#${planeGlowId})`}
                  />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          <div className="gi-earth-shadow" />
          <div className="gi-earth-light" />
          <div className="gi-earth-rim" />
        </div>
      </div>
    </div>
  )
}