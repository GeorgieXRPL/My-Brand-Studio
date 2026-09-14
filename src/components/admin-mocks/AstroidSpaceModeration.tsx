"use client";

import { useState } from "react";
import { spaceQueueSeed } from "@/content/adminMocks";

type Item = (typeof spaceQueueSeed)[number] & { decision?: "approved" | "held" };

export function AstroidSpaceModeration() {
  const [queue, setQueue] = useState<Item[]>(spaceQueueSeed);

  function decide(id: string, decision: "approved" | "held") {
    setQueue((rows) => rows.map((row) => (row.id === id ? { ...row, decision } : row)));
  }

  const pending = queue.filter((q) => !q.decision).length;

  return (
    <div className="min-h-screen bg-[#050814] text-[#eef2ff]">
      <header className="border-b border-white/5 bg-[#070b18]/80 px-4 py-4 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/80">
              Internal queue
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight">
              Moderation · Astroid · Starlike
            </h1>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            {pending} waiting
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <p className="mb-6 max-w-xl text-sm text-white/55">
          Approve community stars, wishes, and coloring uploads. This mock never writes to
          astroid.space.
        </p>
        <ul className="space-y-4">
          {queue.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-white/10 bg-[#0b1020] p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                  {item.kind}
                  <span className="mx-2 text-white/20">·</span>
                  <span className="normal-case tracking-normal text-white/45">
                    {item.id} · {item.by} · {item.when}
                  </span>
                </p>
                {item.decision && (
                  <span
                    className={
                      item.decision === "approved"
                        ? "text-xs font-semibold text-emerald-300"
                        : "text-xs font-semibold text-amber-300"
                    }
                  >
                    {item.decision}
                  </span>
                )}
              </div>
              <p className="mt-3 text-lg leading-snug">{item.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => decide(item.id, "approved")}
                  className="rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-semibold text-[#04120c]"
                >
                  Approve
                </button>
                <button
                  type="button"
                  onClick={() => decide(item.id, "held")}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80 hover:border-amber-300/50"
                >
                  Hold
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
