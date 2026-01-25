// app/membership-fee/page.tsx
// @ts-nocheck
"use client"

import Script from "next/script"
import Link from "next/link"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"

export default function MembershipFeePage() {
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
              Membership Fee • Final Step
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Gastronomist International
              </span>
            </h1>

            <p className="mt-4 text-neutral-300 leading-relaxed max-w-3xl">
              Your application was submitted successfully. To become an official member, please complete the
              membership fee process below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/">
                <Button className="glass-btn glass-btn-muted glass-shine">Back to Home</Button>
              </Link>
              <Link href="/about">
                <Button className="glass-btn glass-shine">About Membership</Button>
              </Link>
            </div>
          </div>

          {/* Membership includes */}
          <div className="lg:col-span-4">
            <Card className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-white">Membership Includes</div>
                <div className="text-xs text-neutral-400">Official Benefits</div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  Shipping of the official medal
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  Official logo access (membership recognition)
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  Certificate of membership
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  Social media publication recognizing your membership
                </li>
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
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Complete Your Membership Fee</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Secure checkout powered by Stripe.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                Secure Payment
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              {/* Stripe Buy Button Web Component */}
              <stripe-buy-button
                buy-button-id="buy_btn_1StUFUDJAqMG5OAa51ouNlbC"
                publishable-key="pk_live_51SqSY8DJAqMG5OAaEnXl2JOsNeLP4EXJoEwYUNOStIBS7y8NJ1Rekz45Sk8Y4u8vxw6q3AtsOWvCffjFUy4SHe3500nZNam8IA"
              />
            </div>

            <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
              After payment, keep an eye on your email for confirmation and next steps. If you need support, contact us
              via the Register widget.
            </p>
          </Card>
        </div>

        {/* Right: reassurance / editorial notes */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Important</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Membership becomes official after the membership fee is completed. This helps us prepare and ship your
              medal, certificate, and publish your recognition across our channels.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="text-sm font-semibold text-white">Worldwide</div>
                <div className="mt-1 text-[11px] text-neutral-400">Global Network</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <div className="text-sm font-semibold text-white">Official</div>
                <div className="mt-1 text-[11px] text-neutral-400">Recognition</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
