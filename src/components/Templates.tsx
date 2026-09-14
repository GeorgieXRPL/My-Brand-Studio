import { templateGroups, templates } from "@/content/templates";
import { TemplateCard } from "@/components/TemplateCard";

export function Templates({
  featured = false,
}: {
  featured?: boolean;
}) {
  const groups = featured
    ? templateGroups.filter((g) => g.id !== "live")
    : templateGroups;

  return (
    <section id="templates" className="section-pad audience-fade">
      <div className="wrap template-wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Templates
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Looks you can ship.
        </h2>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)] leading-relaxed">
          {featured
            ? "Boxed rooms for new sites. High street, studio, and online looks for client pitches. Live builds are further down the page."
            : "Boxed rooms for new sites. Live rooms are real admin we already shipped. High street and creator looks are for client pitches."}
        </p>

        {groups.map((group) => {
          const items = templates.filter((t) => t.group === group.id);
          if (!items.length) return null;
          return (
            <div key={group.id} className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-2)]">
                {group.label}
              </p>
              <p className="mt-2 max-w-xl text-sm text-[var(--fg-muted)]">{group.note}</p>
              <ul className="template-row">
                {items.map((look) => (
                  <li key={look.id}>
                    <TemplateCard look={look} compact={featured} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {featured && (
          <a
            href="/templates"
            className="mt-10 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            All template looks →
          </a>
        )}
      </div>
    </section>
  );
}
