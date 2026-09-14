export function AdminPitch() {
  return (
    <section id="admin" className="section-pad border-y border-[var(--line)] bg-[var(--bg-elevated)] audience-fade">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Admin backends
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Manage your own backend, or hand it off for a fraction of market rates.
          </h2>
          <p className="mt-5 max-w-xl text-[var(--fg-muted)] leading-relaxed">
            Most businesses pay retainers just to change a schedule or approve a post.
            We build lightweight admin consoles so owners stay in control, with optional
            care plans when you want us on call. These live consoles are also{" "}
            <a href="/templates" className="text-[var(--accent)] hover:underline">
              template looks
            </a>
            .
          </p>
        </div>
        <ul className="space-y-6">
          <li>
            <a href="/admin/ggsaltaire" className="group block">
              <p className="font-display text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                GGSaltaire Content Editor →
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                Open the mock. Tagline, socials, projects, and weekly schedule. No password.
              </p>
            </a>
          </li>
          <li>
            <a href="/admin/astroid-ops" className="group block">
              <p className="font-display text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                Astroid live ops console →
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                Open the mock. Raids, payouts, gates, and player tooling. No token.
              </p>
            </a>
          </li>
          <li>
            <a href="/admin/astroid-space" className="group block">
              <p className="font-display text-lg font-semibold group-hover:text-[var(--accent)] transition-colors">
                Astroid Space moderation →
              </p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">
                Open the mock. Approve stars, wishes, and uploads. No password.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
