// components/ContactWidget.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'

const contactWidgetCopy = {
  en: {
    applyMembership: 'Apply for Membership',
    organization: 'Gastronomist International',
    title: 'Membership Application',
    description:
      'Submit your professional details first. After submission, you will be redirected to complete the membership fee.',
    fullName: 'Full name',
    email: 'Email',
    address: 'Address',
    currentPosition: 'Current position',
    currentCompany: 'Current company',
    experience: 'Experience (e.g. 1-5 years)',
    reason: 'Tell us why you want to join',
    submitting: 'Submitting…',
    submitApplication: 'Submit Application',
    cancel: 'Cancel',
    close: 'Close membership application',
    success: 'Application submitted ✓ Redirecting to membership fee…',
    sendFailed: 'Send failed',
  },
  ru: {
    applyMembership: 'Подать заявку на членство',
    organization: 'Gastronomist International',
    title: 'Заявка на членство',
    description:
      'Сначала отправьте свои профессиональные данные. После отправки вы будете перенаправлены для завершения оплаты членского взноса.',
    fullName: 'Полное имя',
    email: 'Электронная почта',
    address: 'Адрес',
    currentPosition: 'Текущая должность',
    currentCompany: 'Текущая компания',
    experience: 'Опыт работы (например, 1–5 лет)',
    reason: 'Расскажите, почему вы хотите присоединиться',
    submitting: 'Отправка…',
    submitApplication: 'Отправить заявку',
    cancel: 'Отмена',
    close: 'Закрыть заявку на членство',
    success: 'Заявка отправлена ✓ Перенаправление к оплате членского взноса…',
    sendFailed: 'Не удалось отправить',
  },
}

export default function ContactWidget() {
  const router = useRouter()
  const { language } = useLanguage()
  const copy = contactWidgetCopy[language]

  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState<null | string>(null)
  const [err, setErr] = useState<null | string>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)

    if (params.get('register') === '1') {
      setOpen(true)
    }
  }, [])

  function closeModal() {
    setOpen(false)
    setOk(null)
    setErr(null)

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)

      if (params.get('register') === '1') {
        router.replace('/')
      }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget

    setSending(true)
    setOk(null)
    setErr(null)

    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || `HTTP ${res.status}`)
      }

      form.reset()

      setOk(copy.success)

      setTimeout(() => {
        setOk(null)
        setOpen(false)
        router.push('/membership-fee')
      }, 700)
    } catch (e: any) {
      setErr(e?.message || copy.sendFailed)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-2xl border border-yellow-400/50 bg-gradient-to-r from-yellow-500 to-yellow-200 px-5 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:scale-[1.03]"
        >
          {copy.applyMembership}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-yellow-400/25 bg-[#070707]/95 p-6 shadow-2xl shadow-black/70">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  radial-gradient(700px 260px at 20% 0%, rgba(212,163,54,0.18), transparent 60%),
                  radial-gradient(600px 240px at 90% 10%, rgba(255,230,160,0.10), transparent 62%),
                  linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))
                `,
              }}
            />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
                    {copy.organization}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {copy.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {copy.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label={copy.close}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-300 transition hover:border-yellow-400/40 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={onSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder={copy.fullName}
                    required
                    className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder={copy.email}
                    required
                    className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                  />
                </div>

                <input
                  name="address"
                  placeholder={copy.address}
                  className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="currentPosition"
                    placeholder={copy.currentPosition}
                    className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                  />

                  <input
                    name="currentCompany"
                    placeholder={copy.currentCompany}
                    className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                  />
                </div>

                <input
                  name="experience"
                  placeholder={copy.experience}
                  className="w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                />

                <textarea
                  name="reason"
                  placeholder={copy.reason}
                  className="min-h-[110px] w-full rounded-xl border border-yellow-400/15 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400/50"
                />

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-xl border border-yellow-400/50 bg-gradient-to-r from-yellow-500 to-yellow-200 px-5 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-60"
                  >
                    {sending ? copy.submitting : copy.submitApplication}
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-white/15 px-5 py-3 text-white transition hover:border-yellow-400/40"
                  >
                    {copy.cancel}
                  </button>

                  {ok && <span className="text-sm text-green-400">{ok}</span>}
                  {err && <span className="text-sm text-red-400">{err}</span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
