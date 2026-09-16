import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBookCta } from "@/components/StickyBookCta";
import { LookCardFigure } from "@/components/LookCardFigure";
import {
  BOOKING_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  SITE_URL,
} from "@/content/pricing";
import { getLookStill } from "@/content/look-stills";

const title = "Website for tradies NZ · same-day sketch | My Brand Studio";
const description =
  "Got a phone on Yellow but no website people can Google? NZ tradies: book a free same-day sketch or call +64 22 504 9628.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/for-trades" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/for-trades`,
    type: "website",
    locale: "en_NZ",
    siteName: "My Brand Studio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ForTradesPage() {
  const workshop = getLookStill("look-workshop-tradie-hours");

  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="section-pad relative overflow-hidden"
          style={{ backgroundImage: "var(--mesh), var(--hero-glow)" }}
        >
          <div className="wrap relative max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              For trades · NZ &amp; AU
            </p>
            <h1 className="font-display mt-3 text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-tight tracking-tight">
              Got a phone on Yellow but no website people can Google?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
              We sketch a simple brand page the same day after a short call —
              your phone, services, and a URL that shows up when someone searches
              you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={BOOKING_URL}
                className="cta-pulse rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg)]"
              >
                Book same-day sketch
              </a>
              <a
                href={CONTACT_PHONE_TEL}
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
              >
                Call {CONTACT_PHONE}
              </a>
              <a
                href={BOOKING_URL}
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Book a call
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-[var(--line)]">
          <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                What you get
              </h2>
              <ul className="mt-4 space-y-3 text-[var(--fg-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    ·
                  </span>
                  Same-day 1-page sketch after a short discovery call
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    ·
                  </span>
                  Your phone + services on a page Google can find
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    ·
                  </span>
                  Optional light edits later if you proceed
                </li>
              </ul>

              <h2 className="font-display mt-10 text-2xl font-semibold tracking-tight">
                What it costs
              </h2>
              <p className="mt-4 text-[var(--fg-muted)]">
                Before 10am NZ: free sketch. After that: next day free, or $149
                for same-day. Full packages on{" "}
                <a href="/#pricing" className="text-[var(--accent)] hover:underline">
                  pricing
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Built for vans and Yellow listings
              </h2>
              <p className="mt-4 text-[var(--fg-muted)]">
                Not startup decks — a clear page with hours, services, and a
                number people can tap.
              </p>
              {workshop ? (
                <div className="mt-6">
                  <LookCardFigure still={workshop} />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-[var(--line)]">
          <div className="wrap max-w-2xl text-center sm:text-left">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Ready when you are
            </h2>
            <p className="mt-3 text-[var(--fg-muted)]">
              Text or call from the job site. Or book the same-day form — no
              waitlist.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href={CONTACT_PHONE_TEL}
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg)]"
              >
                Call {CONTACT_PHONE}
              </a>
              <a
                href={BOOKING_URL}
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)]"
              >
                Book free draft
              </a>
            </div>
            <p className="mt-8 text-sm text-[var(--fg-muted)]">
              Curious about websites in general?{" "}
              <a href="/do-i-need-a-website" className="text-[var(--accent)] hover:underline">
                Do I need a website?
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyBookCta />
    </>
  );
}
