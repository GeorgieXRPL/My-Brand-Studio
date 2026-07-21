"use client";

import { useAudience } from "@/lib/audience";

export function AudienceToggle() {
  const { audience, setAudience } = useAudience();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] p-1 backdrop-blur-md"
      role="group"
      aria-label="Audience"
    >
      {(
        [
          ["business", "Business"],
          ["creator", "Creator"],
        ] as const
      ).map(([id, label]) => {
        const active = audience === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setAudience(id)}
            className={[
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300",
              active
                ? "bg-[var(--accent)] text-[var(--bg)] shadow-[0_0_24px_var(--accent-soft)]"
                : "text-[var(--fg-muted)] hover:text-[var(--fg)]",
            ].join(" ")}
            aria-pressed={active}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
