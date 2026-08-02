// app/shop/page.tsx
// @ts-nocheck
"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import { useLanguage } from "@/components/LanguageProvider"

type Product = {
  id: string
  name: string
  tag: string
  title: string
  copy: string
  priceUsdYearly: number
  href: string
  imagePng: string
  featured?: boolean
}

type CartItem = { productId: string; qty: number }

const PRODUCTS: Product[] = [
  {
    id: "track-me",
    name: "Track Me Solutions",
    tag: "Hospitality SaaS Platform",
    title: "Cost • Recipes • Inventory",
    copy: "A hospitality SaaS platform answered to the cost, recipe, inventory challenges of every chefs, operators, of hotel, restaurant and bar.",
    priceUsdYearly: 540,
    href: "https://trackme.solutions/",
    imagePng: "/images/track-me.png",
    featured: true,
  },
]

const shopCopy = {
  en: {
    products: {
      "track-me": {
        name: "Track Me Solutions",
        tag: "Hospitality SaaS Platform",
        title: "Cost • Recipes • Inventory",
        copy: "A hospitality SaaS platform answered to the cost, recipe, inventory challenges of every chefs, operators, of hotel, restaurant and bar.",
      },
    },

    topEyebrow: "Shop Dashboard • Products & Solutions",
    pageTitle: "Shop",
    pageAccent: "Gastronomist",
    pageDescription:
      "Handpicked tools and platforms recommended for chefs, operators, hotels, restaurants, and bars — presented as a modern editorial dashboard.",
    backHome: "Back to Home",
    visitPrefix: "Visit",

    cart: "Cart",
    items: "Items",
    open: "Open →",
    openCart: "Open cart",
    closeCart: "Close cart",
    subtotal: "Subtotal",
    billing: "Billing",
    yearly: "Yearly",
    year: "year",
    yearlyLower: "yearly",
    usdYearly: "USD / yearly",

    featured: "Featured",
    price: "Price",
    addToCart: "Add to Cart",
    learnMore: "Learn More",
    add: "Add",
    openProduct: "Open",

    productMetrics: [
      { label: "Designed for", value: "Hotels • Restaurants • Bars" },
      { label: "Best for", value: "Chef Ops • Cost Control • Stock" },
      { label: "Billing", value: "USD / year" },
      { label: "Link", value: "trackme.solutions" },
    ],

    moreProducts: "More Products",
    moreProductsDescription: "Additional modules (future-ready).",

    whatYouGet: "What you get",
    whatYouGetDescription:
      "A clear path to tighter control and cleaner operations.",
    verified: "Verified",
    benefits: [
      "Recipe costing and margin visibility",
      "Inventory tracking and movement discipline",
      "Operational clarity for teams and owners",
      "Scales from single venue to multi-site",
    ],

    recommendedFor: "Recommended for",
    recommendedDescription: "Roles that need fast, accurate numbers.",
    recommendedRoles: [
      "Executive Chefs",
      "Sous Chefs",
      "Restaurant Owners",
      "Bar Managers",
      "Hotel Operators",
      "Cost Controllers",
    ],

    readyTitle: "Ready to explore?",
    readyTextBefore: "Add items to your cart, then continue to the platform:",
    reviewCart: "Review Cart",
    cartNotice: "This cart is a UI experience (no payment processing on this page).",

    verifyProduct: "Verify the product",
    verifyDescription: "Watch a quick overview before you decide.",
    youtubeTitle: "Track Me Solutions demo",
    watchYoutube: "Watch on YouTube",

    shoppingCart: "Shopping Cart",
    emptyTitle: "Your cart is empty",
    emptyDescription: "Add a product to see it here.",
    tba: "TBA",
    remove: "Remove",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    quantity: "Quantity",
    continue: "Continue",
    continuePlatform: "Continue to platform",
  },

  ru: {
    products: {
      "track-me": {
        name: "Track Me Solutions",
        tag: "SaaS-платформа для индустрии гостеприимства",
        title: "Себестоимость • Рецепты • Инвентарь",
        copy: "SaaS-платформа для индустрии гостеприимства, созданная для решения задач себестоимости, рецептур и складского контроля для шеф-поваров, операторов, отелей, ресторанов и баров.",
      },
    },

    topEyebrow: "Панель магазина • продукты и решения",
    pageTitle: "Магазин",
    pageAccent: "Gastronomist",
    pageDescription:
      "Отобранные инструменты и платформы, рекомендованные для шеф-поваров, операторов, отелей, ресторанов и баров — представлены как современная редакционная панель.",
    backHome: "Назад на главную",
    visitPrefix: "Посетить",

    cart: "Корзина",
    items: "Товары",
    open: "Открыть →",
    openCart: "Открыть корзину",
    closeCart: "Закрыть корзину",
    subtotal: "Итого",
    billing: "Оплата",
    yearly: "Ежегодно",
    year: "год",
    yearlyLower: "ежегодно",
    usdYearly: "USD / ежегодно",

    featured: "Рекомендуемое",
    price: "Цена",
    addToCart: "Добавить в корзину",
    learnMore: "Подробнее",
    add: "Добавить",
    openProduct: "Открыть",

    productMetrics: [
      { label: "Создано для", value: "Отели • Рестораны • Бары" },
      { label: "Лучше всего для", value: "Chef Ops • Контроль затрат • Склад" },
      { label: "Оплата", value: "USD / год" },
      { label: "Ссылка", value: "trackme.solutions" },
    ],

    moreProducts: "Больше продуктов",
    moreProductsDescription: "Дополнительные модули, готовые для будущего.",

    whatYouGet: "Что вы получаете",
    whatYouGetDescription:
      "Понятный путь к более строгому контролю и более чистым операционным процессам.",
    verified: "Проверено",
    benefits: [
      "Калькуляция рецептов и видимость маржи",
      "Отслеживание склада и дисциплина движения запасов",
      "Операционная ясность для команд и владельцев",
      "Подходит для одной точки и для сети объектов",
    ],

    recommendedFor: "Рекомендуется для",
    recommendedDescription: "Роли, которым нужны быстрые и точные цифры.",
    recommendedRoles: [
      "Executive Chefs",
      "Sous Chefs",
      "Владельцы ресторанов",
      "Бар-менеджеры",
      "Операторы отелей",
      "Контролёры затрат",
    ],

    readyTitle: "Готовы изучить?",
    readyTextBefore: "Добавьте товары в корзину, затем перейдите на платформу:",
    reviewCart: "Проверить корзину",
    cartNotice: "Эта корзина является UI-опытом — обработка платежей на этой странице не выполняется.",

    verifyProduct: "Проверить продукт",
    verifyDescription: "Посмотрите краткий обзор перед принятием решения.",
    youtubeTitle: "Демо Track Me Solutions",
    watchYoutube: "Смотреть на YouTube",

    shoppingCart: "Корзина покупок",
    emptyTitle: "Ваша корзина пуста",
    emptyDescription: "Добавьте продукт, чтобы увидеть его здесь.",
    tba: "Будет объявлено",
    remove: "Удалить",
    decreaseQuantity: "Уменьшить количество",
    increaseQuantity: "Увеличить количество",
    quantity: "Количество",
    continue: "Продолжить",
    continuePlatform: "Перейти на платформу",
  },
}

function usd(n: number) {
  if (!n) return "$0"
  return `$${n.toLocaleString("en-US")}`
}

export default function ShopPage() {
  const { language } = useLanguage()
  const copy = shopCopy[language]

  const products = useMemo(
    () =>
      PRODUCTS.map((product) => ({
        ...product,
        ...(copy.products[product.id] || {}),
      })),
    [copy.products],
  )

  const featured = useMemo(() => products.find((p) => p.featured) ?? products[0], [products])
  const others = useMemo(() => products.filter((p) => p.id !== featured.id), [products, featured.id])
  const visibleOthers = useMemo(() => others.filter((p) => p.priceUsdYearly > 0), [others])

  const [cartOpen, setCartOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])

  const cartCount = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items])

  const cartLines = useMemo(() => {
    return items
      .map((it) => {
        const p = products.find((x) => x.id === it.productId)
        if (!p) return null
        return { product: p, qty: it.qty, lineTotal: p.priceUsdYearly * it.qty }
      })
      .filter(Boolean) as { product: Product; qty: number; lineTotal: number }[]
  }, [items, products])

  const subtotal = useMemo(() => cartLines.reduce((sum, l) => sum + l.lineTotal, 0), [cartLines])

  function addToCart(productId: string) {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.productId === productId)
      if (idx === -1) return [...prev, { productId, qty: 1 }]
      const next = [...prev]
      next[idx] = { ...next[idx], qty: next[idx].qty + 1 }
      return next
    })
    setCartOpen(true)
  }

  function inc(productId: string) {
    setItems((prev) => prev.map((x) => (x.productId === productId ? { ...x, qty: x.qty + 1 } : x)))
  }

  function dec(productId: string) {
    setItems((prev) =>
      prev
        .map((x) => (x.productId === productId ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0),
    )
  }

  function remove(productId: string) {
    setItems((prev) => prev.filter((x) => x.productId !== productId))
  }

  const youtubeEmbedSrc = "https://www.youtube.com/embed/jfeTXzZmIRU"

  return (
    <main className="container py-12 sm:py-16 space-y-8">
      {/* Local bloom for glass depth */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(1200px 520px at 18% 10%, rgba(120,220,255,0.16), transparent 62%),
            radial-gradient(900px 480px at 86% 16%, rgba(255,255,255,0.10), transparent 70%),
            radial-gradient(900px 520px at 50% 110%, rgba(80,120,255,0.08), transparent 70%)
          `,
        }}
      />

      {/* Top editorial header */}
      <section className="glass-panel glass-panel-pad glass-shine glass-glow">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              {copy.topEyebrow}
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              {copy.pageTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                {copy.pageAccent}
              </span>
            </h1>

            <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
              {copy.pageDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/">
                <Button className="glass-btn glass-btn-muted glass-shine">{copy.backHome}</Button>
              </Link>

              <a href={featured.href} target="_blank" rel="noreferrer">
                <Button className="glass-btn glass-shine">{copy.visitPrefix} {featured.name}</Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-neutral-400">{copy.cart}</div>
                  <div className="mt-1 text-sm text-white">
                    {copy.items}{" "}
                    <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-2 text-xs text-neutral-200">
                      {cartCount}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCartOpen(true)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white hover:border-white/20 hover:bg-white/[0.07] transition"
                  aria-label={copy.openCart}
                >
                  {copy.open}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-neutral-400">{copy.subtotal}</div>
                  <div className="mt-1 text-sm text-white">{usd(subtotal)}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-[11px] text-neutral-400">{copy.billing}</div>
                  <div className="mt-1 text-sm text-white">{copy.yearly}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main dashboard grid */}
      <section className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Left: catalog */}
        <div className="lg:col-span-8 space-y-6">
          {/* Featured product */}
          <Card className="p-0 overflow-hidden">
            <div className="relative h-[240px] sm:h-[300px] border-b border-white/10 bg-white/[0.02]">
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(900px 320px at 20% 10%, rgba(255,212,0,0.14), transparent 62%), radial-gradient(900px 320px at 80% 10%, rgba(120,220,255,0.10), transparent 70%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-yellow-400/90" />
                {copy.featured}
              </div>

              <div className="h-full w-full flex items-center justify-center p-6">
                <Image
                  src={featured.imagePng}
                  alt={`${featured.name} image`}
                  width={920}
                  height={520}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs text-neutral-400">{featured.tag}</div>
                  <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-white">{featured.name}</h2>
                  <div className="mt-2 text-sm text-neutral-300">{featured.title}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-neutral-400">{copy.price}</div>
                  <div className="mt-2 text-2xl font-bold text-white">{usd(featured.priceUsdYearly)}</div>
                  <div className="mt-1 text-xs text-neutral-400">{copy.usdYearly}</div>
                </div>
              </div>

              <p className="mt-5 text-sm text-neutral-300 leading-relaxed max-w-3xl">
                {featured.copy}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => addToCart(featured.id)}>
                  <Button className="glass-btn glass-shine">{copy.addToCart}</Button>
                </button>

                <a href={featured.href} target="_blank" rel="noreferrer">
                  <Button className="glass-btn glass-btn-muted glass-shine">{copy.learnMore}</Button>
                </a>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                {copy.productMetrics.map((m) => {
                  const value =
                    m.label === copy.billing
                      ? `${usd(featured.priceUsdYearly)} ${m.value}`
                      : m.value

                  return (
                    <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                      <div className="text-[11px] text-neutral-400">{m.label}</div>
                      <div className="mt-2 text-sm text-white">{value}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Card>

          {/* Optional grid (kept future-proof) */}
          {visibleOthers.length > 0 && (
            <Card className="p-6 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{copy.moreProducts}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{copy.moreProductsDescription}</p>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                {visibleOthers.map((p) => (
                  <div key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                    <div className="h-40 border-b border-white/10 bg-white/[0.02] flex items-center justify-center p-4">
                      <Image src={p.imagePng} alt={`${p.name} image`} width={520} height={320} className="h-full w-full object-contain" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-white truncate">{p.name}</div>
                          <div className="mt-1 text-xs text-neutral-400">{p.tag}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-neutral-400">{copy.yearly}</div>
                          <div className="mt-1 text-sm text-white">{usd(p.priceUsdYearly)}</div>
                        </div>
                      </div>

                      <div className="mt-3 text-sm text-neutral-300 font-medium">{p.title}</div>
                      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{p.copy}</p>

                      <div className="mt-4 flex gap-3">
                        <button onClick={() => addToCart(p.id)}>
                          <Button className="glass-btn glass-shine">{copy.add}</Button>
                        </button>
                        <a href={p.href} target="_blank" rel="noreferrer">
                          <Button className="glass-btn glass-btn-muted glass-shine">{copy.openProduct}</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Right: panels */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{copy.whatYouGet}</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {copy.whatYouGetDescription}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                {copy.verified}
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed list-disc pl-5">
              {copy.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">{copy.recommendedFor}</h3>
            <p className="mt-1 text-sm text-neutral-400">{copy.recommendedDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {copy.recommendedRoles.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">{copy.readyTitle}</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {copy.readyTextBefore}{" "}
              <span className="text-white font-medium">{usd(featured.priceUsdYearly)} USD {copy.yearlyLower}</span>.
            </p>

            <div className="mt-5">
              <button onClick={() => setCartOpen(true)} className="w-full">
                <Button className="glass-btn glass-shine w-full">{copy.reviewCart}</Button>
              </button>
            </div>

            <p className="mt-3 text-xs text-neutral-400">
              {copy.cartNotice}
            </p>
          </Card>

          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">{copy.verifyProduct}</h3>
            <p className="mt-1 text-sm text-neutral-400">{copy.verifyDescription}</p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={youtubeEmbedSrc}
                  title={copy.youtubeTitle}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://youtu.be/jfeTXzZmIRU"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button className="glass-btn glass-btn-muted glass-shine w-full">
                  {copy.watchYoutube}
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Cart FAB (kept ABOVE BMC + ContactWidget) */}
      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className={[
          "fixed right-[18px] z-[85] rounded-full px-4 py-3",
          "border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white",
          "shadow-2xl shadow-black/40 hover:bg-white/[0.10] hover:border-white/20 transition",
          "flex items-center gap-3",
        ].join(" ")}
        style={{ bottom: 170 }} // keep above BMC and Register Today
        aria-label={copy.openCart}
      >
        <span aria-hidden className="text-base">🛒</span>
        <span className="text-sm font-medium">{copy.cart}</span>
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-2 text-xs">
          {cartCount}
        </span>
      </button>

      {/* Drawer overlay */}
      <div
        className={[
          "fixed inset-0 z-[90] transition",
          cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "bg-black/60 backdrop-blur-sm",
        ].join(" ")}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed top-0 right-0 z-[91] h-full w-[92%] max-w-[420px]",
          "transition-transform duration-200",
          cartOpen ? "translate-x-0" : "translate-x-[110%]",
        ].join(" ")}
        aria-label={copy.shoppingCart}
      >
        <div className="glass-panel glass-shine h-full border-l border-white/10 flex flex-col">
          {/* drawer header */}
          <div className="p-5 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <div className="text-xs text-neutral-400">{copy.shoppingCart}</div>
              <div className="mt-2 text-lg font-semibold text-white">
                {copy.items}{" "}
                <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-2 text-xs text-neutral-200">
                  {cartCount}
                </span>
              </div>
            </div>

            <button
              onClick={() => setCartOpen(false)}
              className="rounded-xl px-3 py-2 text-white border border-white/15 bg-white/[0.04]
                         hover:bg-white/[0.08] hover:border-white/25 transition"
              aria-label={copy.closeCart}
            >
              ✕
            </button>
          </div>

          {/* drawer body */}
          <div className="p-5 flex-1 overflow-auto">
            {cartLines.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm font-medium text-white">{copy.emptyTitle}</div>
                <div className="mt-2 text-sm text-neutral-400">{copy.emptyDescription}</div>
              </div>
            ) : (
              <div className="space-y-3">
                {cartLines.map((l) => (
                  <div
                    key={l.product.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex gap-3"
                  >
                    <div className="h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden flex items-center justify-center">
                      <Image
                        src={l.product.imagePng}
                        alt={`${l.product.name} image`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain p-2"
                        priority={l.product.featured === true}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-white truncate">{l.product.name}</div>
                          <div className="mt-1 text-xs text-neutral-400">
                            {l.product.priceUsdYearly > 0 ? `${usd(l.product.priceUsdYearly)} / ${copy.year}` : copy.tba}
                          </div>
                        </div>

                        <div className="text-sm font-semibold text-white whitespace-nowrap">
                          {l.product.priceUsdYearly > 0 ? usd(l.lineTotal) : "—"}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2 flex-wrap">
                        <button
                          type="button"
                          onClick={() => dec(l.product.id)}
                          className="h-9 w-10 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition"
                          aria-label={copy.decreaseQuantity}
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm text-white" aria-label={`${copy.quantity} ${l.qty}`}>
                          {l.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => inc(l.product.id)}
                          className="h-9 w-10 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition"
                          aria-label={copy.increaseQuantity}
                        >
                          +
                        </button>

                        <button
                          type="button"
                          onClick={() => remove(l.product.id)}
                          className="ml-auto rounded-xl px-3 py-2 border border-white/10 bg-white/[0.03] text-xs text-neutral-200 hover:bg-white/[0.07] transition"
                          aria-label={copy.remove}
                        >
                          {copy.remove}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* drawer footer */}
          <div className="p-5 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-neutral-300">{copy.subtotal}</div>
              <div className="text-lg font-semibold text-white">{usd(subtotal)}</div>
            </div>

            <a
              className={[
                "block",
                cartLines.length === 0 ? "pointer-events-none opacity-60" : "",
              ].join(" ")}
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              aria-label={copy.continuePlatform}
              onClick={(e) => {
                if (cartLines.length === 0) e.preventDefault()
              }}
            >
              <Button className="glass-btn glass-shine w-full">{copy.continue}</Button>
            </a>

            <div className="text-xs text-neutral-400">
              {copy.cartNotice}
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}
