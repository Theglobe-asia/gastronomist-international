// components/ContactWidget.tsx
'use client'

import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageProvider'

type SubmissionToastStatus = 'sending' | 'success' | 'error'

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

    toastSendingTitle: 'Sending Application',
    toastSendingMessage: 'Your membership application is being submitted.',
    toastSuccessTitle: 'Application Sent',
    toastSuccessMessage: 'Successfully submitted. Redirecting to membership fee.',
    toastErrorTitle: 'Submission Failed',
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

    toastSendingTitle: 'Отправка заявки',
    toastSendingMessage: 'Ваша заявка на членство отправляется.',
    toastSuccessTitle: 'Заявка отправлена',
    toastSuccessMessage: 'Успешно отправлено. Перенаправление к оплате членского взноса.',
    toastErrorTitle: 'Ошибка отправки',
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
  const [toastStatus, setToastStatus] = useState<null | SubmissionToastStatus>(null)

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
    setToastStatus(null)

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)

      if (params.get('register') === '1') {
        router.replace('/')
      }
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget

    setSending(true)
    setOk(null)
    setErr(null)
    setToastStatus('sending')

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
      setToastStatus('success')

      setTimeout(() => {
        setOk(null)
        setToastStatus(null)
        setOpen(false)
        router.push('/membership-fee')
      }, 1300)
    } catch (e: any) {
      const errorMessage = e?.message || copy.sendFailed

      setErr(errorMessage)
      setToastStatus('error')
    } finally {
      setSending(false)
    }
  }

  const toastTitle =
    toastStatus === 'sending'
      ? copy.toastSendingTitle
      : toastStatus === 'success'
        ? copy.toastSuccessTitle
        : copy.toastErrorTitle

  const toastMessage =
    toastStatus === 'sending'
      ? copy.toastSendingMessage
      : toastStatus === 'success'
        ? copy.toastSuccessMessage
        : err || copy.sendFailed

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

      {toastStatus && (
        <div
          className={`gi-submit-toast gi-submit-toast-${toastStatus}`}
          role="status"
          aria-live="polite"
        >
          <div className="gi-toast-icon-wrap" aria-hidden="true">
            {toastStatus === 'sending' && (
              <div className="gi-toast-motion-lines">
                <span />
                <span />
                <span />
              </div>
            )}

            <div
              className={`gi-toast-envelope ${
                toastStatus === 'sending'
                  ? 'is-sending'
                  : toastStatus === 'success'
                    ? 'is-success'
                    : 'is-error'
              }`}
            >
              <span className="gi-toast-envelope-flap" />
              <span className="gi-toast-envelope-body" />

              {toastStatus === 'success' && (
                <svg
                  className="gi-toast-check"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5l4.2 4.2L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {toastStatus === 'error' && (
                <span className="gi-toast-error-mark">!</span>
              )}
            </div>
          </div>

          <div className="gi-submit-toast-copy">
            <strong>{toastTitle}</strong>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

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

      <style jsx global>{`
        .gi-submit-toast {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 80;
          display: flex;
          align-items: center;
          gap: 14px;
          width: min(390px, calc(100% - 32px));
          border: 1px solid rgba(212, 163, 54, 0.34);
          border-radius: 20px;
          padding: 14px 16px;
          background:
            radial-gradient(420px 140px at 18% 0%, rgba(212, 163, 54, 0.2), transparent 62%),
            linear-gradient(180deg, rgba(20, 20, 20, 0.98), rgba(6, 6, 6, 0.96));
          box-shadow:
            0 22px 60px rgba(0, 0, 0, 0.42),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          animation: giToastEnter 0.34s ease-out both;
        }

        .gi-submit-toast-success {
          border-color: rgba(74, 222, 128, 0.42);
        }

        .gi-submit-toast-error {
          border-color: rgba(248, 113, 113, 0.42);
        }

        .gi-toast-icon-wrap {
          position: relative;
          display: grid;
          place-items: center;
          width: 58px;
          height: 50px;
          flex: 0 0 auto;
        }

        .gi-toast-motion-lines {
          position: absolute;
          left: -3px;
          top: 15px;
          display: grid;
          gap: 5px;
        }

        .gi-toast-motion-lines span {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: rgba(244, 217, 138, 0.76);
          animation: giMotionLine 0.72s ease-in-out infinite;
        }

        .gi-toast-motion-lines span:nth-child(2) {
          width: 12px;
          animation-delay: 0.1s;
        }

        .gi-toast-motion-lines span:nth-child(3) {
          width: 15px;
          animation-delay: 0.2s;
        }

        .gi-toast-envelope {
          position: relative;
          width: 42px;
          height: 30px;
          color: #111;
          border: 2px solid rgba(244, 217, 138, 0.96);
          border-radius: 8px;
          background: linear-gradient(135deg, #f7d66d, #fff0ad);
          overflow: hidden;
          box-shadow: 0 10px 22px rgba(212, 163, 54, 0.22);
        }

        .gi-toast-envelope.is-sending {
          animation: giEnvelopeSend 0.9s ease-in-out infinite;
        }

        .gi-toast-envelope.is-success {
          border-color: rgba(74, 222, 128, 0.95);
          background: linear-gradient(135deg, #86efac, #dcfce7);
          animation: giEnvelopeSuccess 0.42s ease-out both;
        }

        .gi-toast-envelope.is-error {
          border-color: rgba(248, 113, 113, 0.95);
          background: linear-gradient(135deg, #fecaca, #fee2e2);
          animation: giEnvelopeError 0.42s ease-out both;
        }

        .gi-toast-envelope-flap {
          position: absolute;
          left: 4px;
          right: 4px;
          top: -13px;
          height: 26px;
          border-right: 2px solid rgba(17, 17, 17, 0.38);
          border-bottom: 2px solid rgba(17, 17, 17, 0.38);
          transform: rotate(45deg);
          transform-origin: center;
        }

        .gi-toast-envelope-body {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, transparent 48%, rgba(17, 17, 17, 0.28) 49%, transparent 51%),
            linear-gradient(225deg, transparent 48%, rgba(17, 17, 17, 0.22) 49%, transparent 51%);
          opacity: 0.7;
        }

        .gi-toast-check {
          position: absolute;
          inset: 0;
          width: 24px;
          height: 24px;
          margin: auto;
          color: #14532d;
          filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.4));
        }

        .gi-toast-check path {
          stroke-dasharray: 28;
          stroke-dashoffset: 28;
          animation: giCheckDraw 0.48s ease-out 0.12s forwards;
        }

        .gi-toast-error-mark {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #7f1d1d;
          font-size: 22px;
          font-weight: 900;
          line-height: 1;
        }

        .gi-submit-toast-copy {
          min-width: 0;
        }

        .gi-submit-toast-copy strong,
        .gi-submit-toast-copy span {
          display: block;
        }

        .gi-submit-toast-copy strong {
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .gi-submit-toast-copy span {
          margin-top: 3px;
          color: rgba(247, 240, 223, 0.74);
          font-size: 12px;
          line-height: 1.45;
        }

        @keyframes giToastEnter {
          from {
            opacity: 0;
            transform: translate3d(0, -10px, 0) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes giEnvelopeSend {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          45% {
            transform: translate3d(7px, -3px, 0) rotate(3deg);
          }
        }

        @keyframes giEnvelopeSuccess {
          0% {
            transform: scale(0.94);
          }

          70% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes giEnvelopeError {
          0%,
          100% {
            transform: translateX(0);
          }

          25% {
            transform: translateX(-3px);
          }

          55% {
            transform: translateX(3px);
          }

          80% {
            transform: translateX(-2px);
          }
        }

        @keyframes giMotionLine {
          0% {
            opacity: 0;
            transform: translateX(0);
          }

          45% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateX(-10px);
          }
        }

        @keyframes giCheckDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (max-width: 640px) {
          .gi-submit-toast {
            top: 14px;
            right: 16px;
            left: 16px;
            width: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gi-submit-toast,
          .gi-toast-envelope,
          .gi-toast-motion-lines span,
          .gi-toast-check path {
            animation: none !important;
          }

          .gi-toast-check path {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  )
}