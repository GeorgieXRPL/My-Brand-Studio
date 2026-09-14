import { CONTACT_EMAIL } from "@/content/pricing";

export function SiteFooter() {
  return (
    <footer className="section-pad border-t border-[var(--line)] audience-fade">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">My Brand Studio</p>
          <p className="mt-2 max-w-sm text-sm text-[var(--fg-muted)]">
            Websites, SEO, social, AI automation, and admin backends for business and
            creator brands. Brand Studio Capture is our SaaS product.
          </p>
        </div>
        <div className="text-sm text-[var(--fg-muted)]">
          <a href="/templates" className="block hover:text-[var(--fg)]">
            Templates
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block text-[var(--accent)] hover:underline">
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2">© {new Date().getFullYear()} My Brand Studio</p>
        </div>
      </div>
    </footer>
  );
}
