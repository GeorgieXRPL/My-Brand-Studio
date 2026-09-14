"use client";

import { useAudience } from "@/lib/audience";
import { addons, websitePackages } from "@/content/pricing";

export function Pricing() {
  const { audience } = useAudience();

  return (
    <section id="pricing" className="section-pad border-y border-[var(--line)] audience-fade">
      <div className="wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Pricing
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Website packages and care add-ons, NZD.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {websitePackages.map((pkg) => {
            const highlighted = pkg.highlightFor.includes(audience);
            return (
              <article
                key={pkg.id}
                className={[
                  "border-t-2 pt-5 transition-colors duration-300",
                  highlighted ? "border-[var(--accent)]" : "border-[var(--line)]",
                ].join(" ")}
              >
                {highlighted && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    Recommended for {audience}
                  </p>
                )}
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-sm font-medium text-[var(--accent-2)]">{pkg.priceLabel}</p>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{pkg.bestFor}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--fg-muted)]">
                  {pkg.includes.map((line) => (
                    <li key={line}>· {line}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold">Add-ons & retainers</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {addons.map((a) => (
              <li key={a.id} className="border-t border-[var(--line)] pt-4">
                <p className="font-medium">{a.name}</p>
                <p className="mt-1 text-sm text-[var(--accent-2)]">{a.priceLabel}</p>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{a.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
