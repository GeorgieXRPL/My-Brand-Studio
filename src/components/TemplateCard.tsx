import type { TemplateLook } from "@/content/templates";

export function TemplateRoom({ look }: { look: TemplateLook }) {
  return (
    <div className={`template-room look-${look.look}`} aria-hidden>
      <div className="template-room-chrome">
        <span className="template-room-brand">{look.brand}</span>
        <span className="template-room-nav">
          {look.nav[0]}
          <i />
          {look.nav[1]}
        </span>
      </div>
      <p className="template-room-line">{look.headline}</p>
      <p className="template-room-blurb">{look.blurb}</p>
      <span className="template-room-chip">{look.chip}</span>
    </div>
  );
}

export function TemplateCard({
  look,
  compact = false,
}: {
  look: TemplateLook;
  compact?: boolean;
}) {
  return (
    <article className="group">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--fg-muted)]">
        <span className="block font-display text-base font-semibold normal-case tracking-tight text-[var(--fg)]">
          {look.name}
        </span>
        {look.tags}
      </p>
      <TemplateRoom look={look} />
      <div className={compact ? "mt-3" : "mt-4"}>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {look.href ? (
            <a
              href={look.href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              On the live site →
            </a>
          ) : (
            <a href="/#same-day" className="text-[var(--accent)] hover:underline">
              Book this look →
            </a>
          )}
          {look.adminUrl && (
            <a
              href={look.adminUrl}
              className="text-[var(--fg-muted)] hover:text-[var(--fg)]"
            >
              Open mock admin →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
