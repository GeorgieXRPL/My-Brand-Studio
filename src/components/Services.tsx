"use client";

import { useAudience } from "@/lib/audience";
import { services } from "@/content/site";

export function Services() {
  const { audience } = useAudience();

  return (
    <section id="services" className="section-pad audience-fade">
      <div className="wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Services
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          One studio for websites, growth, and the systems behind them.
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.id} className="border-t border-[var(--line)] pt-6">
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p
                key={audience + s.id}
                className="reveal mt-3 text-[var(--fg-muted)] leading-relaxed"
              >
                {s[audience]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
