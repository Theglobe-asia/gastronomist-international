"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import MobileSidebar from "@/components/MobileSidebar"
import { useLanguage } from "@/components/LanguageProvider"
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineNewspaper,
  HiOutlineInformationCircle,
  HiOutlineShoppingBag,
} from "react-icons/hi2"

const NAV_CONFIG = [
  { href: "/", labelKey: "nav.home", icon: HiOutlineHome },
  { href: "/chefs", labelKey: "nav.chefs", icon: HiOutlineUsers },
  { href: "/press", labelKey: "nav.press", icon: HiOutlineNewspaper },
  { href: "/about", labelKey: "nav.about", icon: HiOutlineInformationCircle },
  { href: "/shop", labelKey: "nav.shop", icon: HiOutlineShoppingBag },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const NAV = useMemo(
    () =>
      NAV_CONFIG.map((item) => ({
        href: item.href,
        label: t(item.labelKey),
        icon: item.icon,
      })),
    [t]
  )

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-yellow-400/20 bg-black/70 backdrop-blur-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(900px 140px at 18% 0%, rgba(212,163,54,0.22), transparent 62%),
              radial-gradient(700px 120px at 82% 0%, rgba(255,230,160,0.10), transparent 70%),
              linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))
            `,
          }}
        />

        <div className="container relative flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold tracking-wide text-white transition hover:text-yellow-300"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              {t("brand.name")}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            {NAV.map((i) => {
              const Icon = i.icon

              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className="
                    inline-flex items-center gap-2
                    rounded-xl border border-yellow-400/15
                    bg-white/[0.03] px-4 py-2
                    text-sm text-neutral-100
                    transition
                    hover:border-yellow-400/45
                    hover:bg-yellow-400/10
                    hover:text-yellow-200
                  "
                >
                  <Icon
                    className="h-4 w-4 text-yellow-300/85"
                    aria-hidden
                  />
                  <span>{i.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex items-center rounded-xl border border-yellow-400/20 bg-white/[0.04] p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-label={t("common.switchToEnglish")}
                className={`
                  rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide transition
                  ${
                    language === "en"
                      ? "bg-yellow-400 text-black"
                      : "text-neutral-300 hover:bg-yellow-400/10 hover:text-yellow-200"
                  }
                `}
              >
                {t("common.language.en")}
              </button>

              <button
                type="button"
                onClick={() => setLanguage("ru")}
                aria-label={t("common.switchToRussian")}
                className={`
                  rounded-lg px-3 py-1.5 text-xs font-bold tracking-wide transition
                  ${
                    language === "ru"
                      ? "bg-yellow-400 text-black"
                      : "text-neutral-300 hover:bg-yellow-400/10 hover:text-yellow-200"
                  }
                `}
              >
                {t("common.language.ru")}
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
                inline-flex items-center gap-2
                rounded-xl border border-yellow-400/20
                bg-white/[0.04] px-4 py-2
                text-sm text-white
                transition
                hover:border-yellow-400/45
                hover:bg-yellow-400/10
              "
            >
              <HiOutlineUsers
                className="h-4 w-4 text-yellow-300/85"
                aria-hidden
              />
              <span>{t("common.menu")}</span>
            </button>
          </div>
        </div>
      </div>

      <MobileSidebar open={open} setOpen={setOpen} nav={NAV} />
    </header>
  )
}