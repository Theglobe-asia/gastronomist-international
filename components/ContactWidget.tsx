"use client"
import { useState } from "react"
import Button from "./ui/Button"

export default function ContactWidget() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setError(null); setOk(false)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error("Failed to send")
      setOk(true); (e.currentTarget as HTMLFormElement).reset()
    } catch (err: any) {
      setError(err.message || "Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setOpen(true)}>Contact Us</Button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-white/10 p-6">
            <button className="absolute right-4 top-4 text-sm" onClick={() => setOpen(false)}>Close</button>
            <h3 className="text-lg font-semibold mb-4">Become a Member</h3>
            <form className="space-y-3" onSubmit={submit}>
              <input required name="name" placeholder="Name" className="w-full rounded-xl bg-neutral-800 px-4 py-2" />
              <input required name="address" placeholder="Address" className="w-full rounded-xl bg-neutral-800 px-4 py-2" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl bg-neutral-800 px-4 py-2" />
              <input required name="currentPosition" placeholder="Current Position" className="w-full rounded-xl bg-neutral-800 px-4 py-2" />
              <input required name="currentCompany" placeholder="Current Company" className="w-full rounded-xl bg-neutral-800 px-4 py-2" />
              <select required name="experience" className="w-full rounded-xl bg-neutral-800 px-4 py-2">
                <option value="">How many years of experience do you have?</option>
                <option>1-5 years</option>
                <option>5 years and more</option>
              </select>
              <textarea required name="reason" placeholder="Reason why do you want to become a Member?" className="w-full rounded-xl bg-neutral-800 px-4 py-2 min-h-[120px]" />
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-400">All fields are required</span>
                <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</Button>
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              {ok && <p className="text-sm text-green-400">Sent</p>}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
