// components/LanguageProvider.tsx
"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Language = "en" | "ru"

type Dictionary = Record<string, string>

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const STORAGE_KEY = "gastronomist-language"

const dictionary: Record<Language, Dictionary> = {
  en: {
    "brand.name": "Gastronomist International",

    "nav.home": "Home",
    "nav.chefs": "Our Chefs",
    "nav.press": "Press Release",
    "nav.about": "About Us",
    "nav.shop": "Shop",

    "common.menu": "Menu",
    "common.language.en": "EN",
    "common.language.ru": "RU",
    "common.switchToEnglish": "Switch to English",
    "common.switchToRussian": "Switch to Russian",

    "footer.organization": "Organization",
    "footer.connect": "Connect",
    "footer.description":
      "Connecting chefs, culinary leaders, hospitality professionals, educators, and innovators through a global network dedicated to excellence in gastronomy.",
    "footer.follow":
      "Follow Gastronomist International for global culinary stories, chef recognition, press updates, and professional community news.",
    "footer.rights":
      "© 2023 Gastronomist International. All rights reserved.",
    "footer.tagline": "Building a Global Community of Culinary Excellence.",
  },

  ru: {
    "brand.name": "Gastronomist International",

    "nav.home": "Главная",
    "nav.chefs": "Наши шеф-повара",
    "nav.press": "Пресс-релизы",
    "nav.about": "О нас",
    "nav.shop": "Магазин",

    "common.menu": "Меню",
    "common.language.en": "EN",
    "common.language.ru": "RU",
    "common.switchToEnglish": "Переключить на английский",
    "common.switchToRussian": "Переключить на русский",

    "footer.organization": "Организация",
    "footer.connect": "Связаться",
    "footer.description":
      "Мы объединяем шеф-поваров, кулинарных лидеров, специалистов индустрии гостеприимства, преподавателей и новаторов через глобальную сеть, посвящённую совершенству в гастрономии.",
    "footer.follow":
      "Следите за Gastronomist International, чтобы узнавать мировые кулинарные истории, новости признания шеф-поваров, пресс-релизы и обновления профессионального сообщества.",
    "footer.rights":
      "© 2023 Gastronomist International. Все права защищены.",
    "footer.tagline": "Создаём глобальное сообщество кулинарного совершенства.",
  },
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (stored === "ru" || stored === "en") {
    return stored
  }

  const browserLanguage = window.navigator.language.toLowerCase()

  if (browserLanguage.startsWith("ru")) {
    return "ru"
  }

  return "en"
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    setLanguageState(getInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage)
    }

    const toggleLanguage = () => {
      setLanguageState((current) => (current === "en" ? "ru" : "en"))
    }

    const t = (key: string) => {
      return dictionary[language][key] || dictionary.en[key] || key
    }

    return {
      language,
      setLanguage,
      toggleLanguage,
      t,
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}