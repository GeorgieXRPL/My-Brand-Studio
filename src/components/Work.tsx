"use client";

import { useEffect, useState } from "react";
import { useAudience } from "@/lib/audience";
import { portfolio, type PortfolioItem } from "@/content/site";

function hostLabel(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

function SiteEmbed({ item }: { item: PortfolioItem }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2 text-xs text-[var(--fg-muted)]">
        <span className="flex gap-1" aria-hidden>
          <i className="block h-2 w-2 rounded-full bg-[#ff5f56]" />
          <i className="block h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <i className="block h-2 w-2 rounded-full bg-[#27c93f]" />
        </span>
        <span className="truncate">{hostLabel(item.url)}</span>
      </div>
      {mounted ? (
        <iframe
          src={item.embedSrc}
          title={`${item.name} live site`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full bg-white"
        />
      ) : (
        <div className="h-80 w-full bg-white" aria-hidden />
      )}
    </div>
  );
}

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
          Recent builds, filtered for {audience === "business" ? "Business" : "Creator"}.
        </h2>
        <ul className="mt-12 grid gap-10 lg:grid-cols-2">
          {items.map((item) => (
            <li key={item.id} className="border-t border-[var(--line)] pt-6">
              <SiteEmbed item={item} />
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
                    className="text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  >
                    Open mock admin →
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
