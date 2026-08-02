// app/membership-fee/page.tsx
// @ts-nocheck
"use client"

import Script from "next/script"
import Link from "next/link"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { useLanguage } from "@/components/LanguageProvider"

const membershipFeeCopy = {
  en: {
    eyebrow: "Membership Fee • Final Step",
    titlePrefix: "Welcome to",
    titleAccent: "Gastronomist International",
    description:
      "Your application was submitted successfully. To become an official member, please complete the membership fee process below.",
    backHome: "Back to Home",
    aboutMembership: "About Membership",

    includesTitle: "Membership Includes",
    includesBadge: "Official Benefits",
    includesItems: [
      "Shipping of the official medal",
      "Official logo access (membership recognition)",
      "Certificate of membership",
      "Social media publication recognizing your membership",
    ],

    paymentTitle: "Complete Your Membership Fee",
    paymentDescription: "Secure checkout powered by Stripe.",
    securePayment: "Secure Payment",
    afterPayment:
      "After payment, keep an eye on your email for confirmation and next steps. If you need support, contact us via the Register widget.",

    importantTitle: "Important",
    importantDescription:
      "Membership becomes official after the membership fee is completed. This helps us prepare and ship your medal, certificate, and publish your recognition across our channels.",
    worldwide: "Worldwide",
    globalNetwork: "Global Network",
    official: "Official",
    recognition: "Recognition",
  },

  ru: {
    eyebrow: "Членский взнос • финальный шаг",
    titlePrefix: "Добро пожаловать в",
    titleAccent: "Gastronomist International",
    description:
      "Ваша заявка успешно отправлена. Чтобы стать официальным членом, пожалуйста, завершите процесс оплаты членского взноса ниже.",
    backHome: "Назад на главную",
    aboutMembership: "О членстве",

    includesTitle: "Что входит в членство",
    includesBadge: "Официальные преимущества",
    includesItems: [
      "Доставка официальной медали",
      "Доступ к официальному логотипу для признания членства",
      "Сертификат членства",
      "Публикация в социальных сетях с признанием вашего членства",
    ],

    paymentTitle: "Завершите оплату членского взноса",
    paymentDescription: "Безопасная оплата через Stripe.",
    securePayment: "Безопасная оплата",
    afterPayment:
      "После оплаты следите за своей электронной почтой для подтверждения и дальнейших шагов. Если вам нужна поддержка, свяжитесь с нами через виджет регистрации.",

    importantTitle: "Важно",
    importantDescription:
      "Членство становится официальным после завершения оплаты членского взноса. Это помогает нам подготовить и отправить вашу медаль, сертификат и опубликовать ваше признание на наших каналах.",
    worldwide: "Весь мир",
    globalNetwork: "Глобальная сеть",
    official: "Официально",
    recognition: "Признание",
  },
}

export default function MembershipFeePage() {
  const { language } = useLanguage()
  const copy = membershipFeeCopy[language]

  return (
    <main className="container py-12 sm:py-16 space-y-10">
      {/* Local bloom for glass depth */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(1100px 520px at 18% 12%, rgba(120,220,255,0.18), transparent 62%),
            radial-gradient(900px 480px at 86% 16%, rgba(255,255,255,0.10), transparent 70%),
            radial-gradient(900px 520px at 50% 110%, rgba(80,120,255,0.08), transparent 70%)
          `,
        }}
      />

      {/* Stripe script */}
      <Script async src="https://js.stripe.com/v3/buy-button.js" />

      {/* Editorial hero */}
      <section className="glass-panel glass-panel-pad glass-shine glass-glow">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              {copy.eyebrow}
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              {copy.titlePrefix}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                {copy.titleAccent}
              </span>
            </h1>

            <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
              {copy.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/">
                <Button className="glass-btn glass-btn-muted glass-shine">
                  {copy.backHome}
                </Button>
              </Link>
              <Link href="/about">
                <Button className="glass-btn glass-shine">
                  {copy.aboutMembership}
                </Button>
              </Link>
            </div>
          </div>

          {/* Membership includes */}
          <div className="lg:col-span-4">
            <Card className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-white">
                  {copy.includesTitle}
                </div>
                <div className="text-xs text-neutral-400">
                  {copy.includesBadge}
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                {copy.includesItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment area */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 space-y-6">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  {copy.paymentTitle}
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                  {copy.paymentDescription}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                {copy.securePayment}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <stripe-buy-button
                buy-button-id="buy_btn_1SvG73IoMRePCb5s7G0iYQcl"
                publishable-key="pk_live_51SvFqUIoMRePCb5sb26wIzjIHv6NR6BmULJyaToInVBEtSyHTcmN8RN8T6FvHXzFa5pXFgvDI1DNixhRXQNzAevl009ru58qhm"
              />
            </div>

            <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
              {copy.afterPayment}
            </p>
          </Card>
        </div>

        {/* Right: reassurance */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">
              {copy.importantTitle}
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {copy.importantDescription}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="text-sm font-semibold text-white">
                  {copy.worldwide}
                </div>
                <div className="mt-1 text-[11px] text-neutral-400">
                  {copy.globalNetwork}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="text-sm font-semibold text-white">
                  {copy.official}
                </div>
                <div className="mt-1 text-[11px] text-neutral-400">
                  {copy.recognition}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
