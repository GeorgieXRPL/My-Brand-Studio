"use client";

import { AudienceToggle } from "@/components/AudienceToggle";
import {
  BOOKING_URL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from "@/content/pricing";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#admin", label: "Admin" },
  { href: "/templates", label: "Templates" },
  { href: "/for-trades", label: "For trades" },
  { href: "/do-i-need-a-website", label: "Do I need a site?" },
  { href: "/#same-day", label: "Same-day" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#work", label: "Work" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl audience-fade">
      <div className="wrap flex items-center justify-between gap-4 px-[clamp(1.25rem,4vw,3rem)] py-3">
        <a href="/#top" className="font-display text-lg font-semibold tracking-tight">
          My Brand Studio
        </a>
        <nav className="hidden items-center gap-5 text-sm text-[var(--fg-muted)] lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--fg)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <AudienceToggle />
          <a
            href={CONTACT_PHONE_TEL}
            className="hidden rounded-full border border-[var(--line)] px-3 py-2 text-sm font-medium text-[var(--fg)] hover:border-[var(--accent)] sm:inline-flex"
          >
            Call {CONTACT_PHONE}
          </a>
          <a
            href={BOOKING_URL}
            className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--bg)] sm:inline-flex"
          >
            Book free draft
          </a>
        </div>
      </div>
    </header>
  );
}
