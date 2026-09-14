"use client";

import { useState } from "react";
import { useAudience } from "@/lib/audience";

export function SketchTrial() {
  const { audience } = useAudience();
  const [prompt, setPrompt] = useState("");
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/sketch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, audience }),
      });
      const data = (await res.json()) as { html?: string; error?: string };
      if (!res.ok || !data.html) {
        throw new Error(data.error || "Could not generate sketch");
      }
      setHtml(data.html);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="sketch" className="section-pad audience-fade">
      <div className="wrap">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Try it
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Sketch a homepage in the browser.
        </h2>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)] leading-relaxed">
          Describe your business or creator vibe. We generate a one-page HTML preview,
          watermarked. Book a free same-day session before 10am to refine it with My Brand
          Studio.
        </p>
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            minLength={12}
            placeholder={
              audience === "business"
                ? "e.g. Wellington trades company that needs a clean site revamp…"
                : "e.g. Streamer hub with schedule, points, and neon energy…"
            }
            className="min-w-0 flex-1 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-5 py-3 outline-none focus:border-[var(--accent)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--bg)] disabled:opacity-60"
          >
            {loading ? "Sketching…" : "Generate sketch"}
          </button>
        </form>
        {error && <p className="mt-3 text-sm text-[var(--accent)]">{error}</p>}
        {html && (
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--line)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-2 text-xs text-[var(--fg-muted)]">
              <span>Preview · My Brand Studio watermark</span>
              <a href="#same-day" className="text-[var(--accent)] hover:underline">
                Book free same-day refine →
              </a>
            </div>
            <iframe
              title="Site sketch preview"
              sandbox=""
              srcDoc={html}
              className="h-[28rem] w-full bg-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
