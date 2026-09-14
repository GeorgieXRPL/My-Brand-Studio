"use client";

import { GalaxyIntro } from "@/components/GalaxyIntro";
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
      <GalaxyIntro />
      <div className="hero-orbs" aria-hidden>
        <i className="hero-orb hero-orb-a" />
        <i className="hero-orb hero-orb-b" />
        <i className="hero-orb hero-orb-c" />
      </div>
      <div className="hero-stage wrap section-pad relative flex min-h-[min(100svh,52rem)] flex-col justify-end pb-16 pt-24 sm:justify-center sm:pb-24">
        <p className="hero-title font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
          <span>My</span> <span>Brand</span> <span>Studio</span>
        </p>
        <h1
          key={audience + "-h"}
          className="hero-headline mt-6 max-w-2xl font-display text-[clamp(1.5rem,3.4vw,2.35rem)] font-semibold leading-tight tracking-tight text-[var(--fg)]"
        >
          {c.headline}
        </h1>
        <p
          key={audience + "-p"}
          className="hero-support mt-4 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg"
        >
          {c.support}
        </p>
        <div className="hero-actions mt-8 flex flex-wrap items-center gap-3">
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
          <a
            href="/do-i-need-a-website"
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            Do I need a website?
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
