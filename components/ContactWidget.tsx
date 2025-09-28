'use client'

import { useState } from 'react'

export default function ContactWidget() {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [ok, setOk] = useState<null | string>(null)
  const [err, setErr] = useState<null | string>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget // <- always the <form/>, never null
    setSending(true)
    setOk(null)
    setErr(null)

    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || `HTTP ${res.status}`)
      }

      form.reset()        // safe
      setOk('Sent ✓')
      setTimeout(() => {
        setOk(null)
        setOpen(false)    // close after success
      }, 1200)
    } catch (e: any) {
      setErr(e.message || 'Send failed')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-2xl px-5 py-3 font-medium bg-white text-black shadow-lg shadow-white/10"
        >
          Contact Us
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" placeholder="Full name" required
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
                <input name="email" type="email" placeholder="Email" required
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>

              <input name="address" placeholder="Address"
                className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />

              <div className="grid sm:grid-cols-2 gap-3">
                <input name="currentPosition" placeholder="Current position"
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
                <input name="currentCompany" placeholder="Current company"
                  className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />
              </div>

              <input name="experience" placeholder="Experience (e.g. 1-5 years)"
                className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2" />

              <textarea name="reason" placeholder="Tell us why you want to join"
                className="w-full rounded-lg bg-neutral-800 border border-white/10 px-3 py-2 min-h-[100px]" />

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-xl px-4 py-2 bg-white text-black font-medium disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send'}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2 border border-white/20 text-white"
                >
                  Cancel
                </button>
                {ok && <span className="text-green-400 text-sm">{ok}</span>}
                {err && <span className="text-red-400 text-sm">{err}</span>}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
