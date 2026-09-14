"use client";

import { useAudience } from "@/lib/audience";
import { copy } from "@/content/site";

export function Hero() {
  const { audience } = useAudience();
  const c = copy[audience];

  return (
    <section
      id="top"
      className="relative min-h-[min(100svh,52rem)] overflow-hidden audience-fade"
      style={{ backgroundImage: "var(--mesh), var(--hero-glow)" }}
    >
      <div className="wrap section-pad relative flex min-h-[min(100svh,52rem)] flex-col justify-end pb-16 pt-24 sm:justify-center sm:pb-24">
        <p className="font-display reveal text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
          My Brand Studio
        </p>
        <h1
          key={audience + "-h"}
          className="reveal mt-6 max-w-2xl font-display text-[clamp(1.5rem,3.4vw,2.35rem)] font-semibold leading-tight tracking-tight text-[var(--fg)]"
          style={{ animationDelay: "80ms" }}
        >
          {c.headline}
        </h1>
        <p
          key={audience + "-p"}
          className="reveal mt-4 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg"
          style={{ animationDelay: "140ms" }}
        >
          {c.support}
        </p>
        <div
          className="reveal mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="/#same-day"
            className="cta-pulse rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg)]"
          >
            Free same-day draft before 10am
          </a>
          <a
            href={audience === "business" ? "/#admin" : "/#work"}
            className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
          >
            {c.secondaryCta}
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent"
      />
    </section>
  );
}
