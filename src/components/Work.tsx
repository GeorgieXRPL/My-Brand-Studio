"use client";

import { useAudience } from "@/lib/audience";
import { portfolio } from "@/content/site";

export function Work() {
  const { audience } = useAudience();
  const items = portfolio.filter((p) => p.tags.includes(audience));

  return (
    <section id="work" className="section-pad audience-fade">
      <div className="wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Work
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Recent builds — filtered for {audience === "business" ? "Business" : "Creator"}.
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.id} className="border-t border-[var(--line)] pt-6">
              <h3 className="font-display text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-[var(--fg-muted)] leading-relaxed">{item.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Visit site →
                </a>
                {item.adminUrl && (
                  <a
                    href={item.adminUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  >
                    Admin demo →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
