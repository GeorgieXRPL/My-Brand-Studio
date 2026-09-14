"use client";

import { useEffect, useState } from "react";
import { CONTACT_EMAIL, SAME_DAY } from "@/content/pricing";
import { getNzParts, isFreeSameDayWindow } from "@/lib/sameDay";

export function SameDay() {
  const [free, setFree] = useState(true);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      setFree(isFreeSameDayWindow(new Date(), SAME_DAY.freeBeforeHourNz));
      setClock(getNzParts().label);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="same-day" className="section-pad audience-fade">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Same-day draft
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Book before 10am NZ. Draft the same day, free.
          </h2>
          <p className="mt-5 max-w-xl text-[var(--fg-muted)] leading-relaxed">
            A short discovery call about your service, then a one-page concept draft the
            same calendar day. {SAME_DAY.disclaimer}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-[var(--fg-muted)]">
            <li>
              <span className="text-[var(--accent)]">Before 10:00am NZ</span>: free same-day sketch
            </li>
            <li>
              <span className="text-[var(--fg)]">At / after 10am</span>: next day free, or $
              {SAME_DAY.paidSameDayNzd} NZD same-day if capacity allows
            </li>
          </ul>
          {clock && (
            <p className="mt-4 text-xs uppercase tracking-wider text-[var(--fg-muted)]">
              NZ clock now: {clock} · window is{" "}
              <span className={free ? "text-[var(--accent-2)]" : "text-[var(--accent)]"}>
                {free ? "OPEN (free)" : "CLOSED (paid / next day)"}
              </span>
            </p>
          )}
        </div>
        <form
          className="space-y-4 border-t border-[var(--line)] pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
          action={`mailto:${CONTACT_EMAIL}`}
          method="get"
          encType="text/plain"
        >
          <p className="font-display text-xl font-semibold">Request a slot</p>
          <label className="block text-sm">
            <span className="text-[var(--fg-muted)]">Name</span>
            <input
              required
              name="name"
              className="mt-1.5 w-full rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="block text-sm">
            <span className="text-[var(--fg-muted)]">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-1.5 w-full rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </label>
          <label className="block text-sm">
            <span className="text-[var(--fg-muted)]">What do you need?</span>
            <textarea
              required
              name="body"
              rows={3}
              placeholder="Business revamp, creator hub, admin console…"
              className="mt-1.5 w-full rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2.5 outline-none focus:border-[var(--accent)]"
            />
          </label>
          <input type="hidden" name="subject" value="Same-day draft booking, My Brand Studio" />
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--bg)]"
          >
            {free ? "Book free same-day draft" : "Request next slot / paid same-day"}
          </button>
          <p className="text-xs text-[var(--fg-muted)]">
            Opens your email client to {CONTACT_EMAIL}. Cal.com embed can replace this form later.
          </p>
        </form>
      </div>
    </section>
  );
}
