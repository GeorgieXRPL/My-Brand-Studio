import { CAPTURE_APP_URL, capturePlans } from "@/content/pricing";

export function CaptureStrip() {
  return (
    <section
      id="capture"
      className="section-pad border-y border-[var(--line)] bg-[var(--bg-elevated)] audience-fade"
    >
      <div className="wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Product
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Brand Studio Capture
        </h2>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)] leading-relaxed">
          Our SaaS product. Speak on your phone, get platform-ready drafts, share or post
          everywhere. Built by My Brand Studio; separate from custom website work.
        </p>
        <ul className="mt-10 flex flex-wrap gap-8">
          {capturePlans.map((plan) => (
            <li key={plan.id}>
              <p className="font-display text-lg font-semibold">{plan.name}</p>
              <p className="text-[var(--accent-2)]">{plan.price}</p>
              <p className="mt-1 max-w-[14rem] text-sm text-[var(--fg-muted)]">{plan.detail}</p>
            </li>
          ))}
        </ul>
        <a
          href={CAPTURE_APP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
        >
          Open Brand Studio Capture →
        </a>
      </div>
    </section>
  );
}
