"use client";

import { useMemo, useState } from "react";
import { DAY_NAMES, ggsaltaireSeed } from "@/content/adminMocks";

const field =
  "mt-1.5 w-full rounded-[10px] border border-[#2a3b52] bg-[#0c1622] px-3 py-2.5 text-[0.95rem] text-[#e8eef8] outline-none focus:border-[#e85d04] focus:shadow-[0_0_0_3px_rgba(232,93,4,0.12)]";
const label = "text-[0.82rem] font-semibold tracking-wide text-[#9aabc2]";
const panel =
  "mb-6 rounded-lg border border-[rgba(210,224,245,0.1)] bg-[#101a28] p-6";

export function GgsaltaireEditor() {
  const [general, setGeneral] = useState({
    tagline: ggsaltaireSeed.tagline,
    watchUrl: ggsaltaireSeed.watchUrl,
    timezone: ggsaltaireSeed.timezone,
    kickChannel: ggsaltaireSeed.kickChannel,
    twitchChannel: ggsaltaireSeed.twitchChannel,
    youtubeChannel: ggsaltaireSeed.youtubeChannel,
  });
  const [socials, setSocials] = useState(ggsaltaireSeed.socials);
  const [projects, setProjects] = useState(ggsaltaireSeed.projects);
  const [schedule, setSchedule] = useState(ggsaltaireSeed.schedule);
  const [status, setStatus] = useState("Unsaved mock draft");

  const payload = useMemo(
    () => ({ ...general, socials, projects, schedule }),
    [general, socials, projects, schedule],
  );

  function publish() {
    setStatus("Saved on this page only. Live ggsaltaire.com is untouched.");
  }

  function exportBackup() {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ggsaltaire-mock-config.json";
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Backup downloaded. Still a mock.");
  }

  return (
    <div className="gg-mock min-h-screen bg-[#071018] pb-28 text-[#e8eef8]">
      <div className="mx-auto max-w-[860px] px-[clamp(1rem,4vw,2rem)] py-8">
        <div className="mb-6 flex items-center justify-between text-sm text-[#9aabc2]">
          <a href="https://www.ggsaltaire.com" target="_blank" rel="noreferrer" className="hover:text-[#e85d04]">
            ← View live site
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(210,224,245,0.2)] px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e85d04]" />
            EDITOR
          </span>
        </div>

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-gg-display)] text-[clamp(1.8rem,5vw,2.6rem)] italic tracking-tight">
            GG<span className="text-[#e85d04]">Saltaire</span> · Editor
          </h1>
          <p className="mt-2 text-[#9aabc2]">
            Update tagline, links, projects, and the weekly schedule. Save stays local on this mock.
          </p>
        </header>

        <div className="mb-6 rounded-md border border-[#e85d04] bg-[rgba(232,93,4,0.12)] px-4 py-3 text-sm">
          <strong>Mock editing:</strong> change anything below, then hit Save. Nothing publishes live.
        </div>

        <section className={panel}>
          <h2 className="font-[family-name:var(--font-gg-display)] text-xl font-bold">General</h2>
          <p className="mb-5 mt-1 text-sm text-[#6b7c93]">Hero tagline and where Watch points.</p>
          {(
            [
              ["tagline", "Tagline"],
              ["watchUrl", 'Main "Watch" button URL'],
              ["timezone", "Schedule timezone"],
              ["kickChannel", "Kick channel slug"],
              ["twitchChannel", "Twitch channel"],
              ["youtubeChannel", "YouTube handle"],
            ] as const
          ).map(([key, title]) => (
            <label key={key} className="mb-4 block">
              <span className={label}>{title}</span>
              <input
                className={field}
                value={general[key]}
                onChange={(e) => setGeneral((g) => ({ ...g, [key]: e.target.value }))}
              />
            </label>
          ))}
        </section>

        <section className={panel}>
          <h2 className="font-[family-name:var(--font-gg-display)] text-xl font-bold">Socials & Links</h2>
          <p className="mb-5 mt-1 text-sm text-[#6b7c93]">Shown on the hub. Add or drop a row.</p>
          {socials.map((s, i) => (
            <div key={`${s.key}-${i}`} className="mb-3 rounded-md border border-[rgba(210,224,245,0.1)] bg-[#0c1622] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[family-name:var(--font-gg-display)] font-bold text-[#9aabc2]">
                  Social {i + 1}
                </span>
                <button
                  type="button"
                  className="rounded-md border border-[rgba(210,224,245,0.2)] px-2.5 py-1 text-xs text-[#9aabc2] hover:border-[#e6392b] hover:text-[#e6392b]"
                  onClick={() => setSocials((rows) => rows.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {(["name", "handle", "url", "key"] as const).map((k) => (
                  <label key={k}>
                    <span className={label}>{k}</span>
                    <input
                      className={field}
                      value={s[k]}
                      onChange={(e) =>
                        setSocials((rows) =>
                          rows.map((row, j) => (j === i ? { ...row, [k]: e.target.value } : row)),
                        )
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            className="mt-1 w-full rounded-full border border-dashed border-[#e85d04] bg-[rgba(232,93,4,0.12)] py-2.5 text-sm font-bold text-[#e85d04]"
            onClick={() =>
              setSocials((rows) => [...rows, { key: "link", name: "New link", handle: "", url: "" }])
            }
          >
            + Add social
          </button>
        </section>

        <section className={panel}>
          <h2 className="font-[family-name:var(--font-gg-display)] text-xl font-bold">Projects / Build Log</h2>
          <p className="mb-5 mt-1 text-sm text-[#6b7c93]">Status: live, building, planned, shipped.</p>
          {projects.map((p, i) => (
            <div key={`${p.title}-${i}`} className="mb-3 rounded-md border border-[rgba(210,224,245,0.1)] bg-[#0c1622] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[family-name:var(--font-gg-display)] font-bold text-[#9aabc2]">
                  {p.emoji} {p.title || "Untitled"}
                </span>
                <button
                  type="button"
                  className="rounded-md border border-[rgba(210,224,245,0.2)] px-2.5 py-1 text-xs text-[#9aabc2] hover:border-[#e6392b] hover:text-[#e6392b]"
                  onClick={() => setProjects((rows) => rows.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {(["emoji", "title", "status", "tags"] as const).map((k) => (
                  <label key={k}>
                    <span className={label}>{k}</span>
                    <input
                      className={field}
                      value={p[k]}
                      onChange={(e) =>
                        setProjects((rows) =>
                          rows.map((row, j) => (j === i ? { ...row, [k]: e.target.value } : row)),
                        )
                      }
                    />
                  </label>
                ))}
              </div>
              <label className="mt-3 block">
                <span className={label}>desc</span>
                <textarea
                  className={`${field} min-h-20`}
                  value={p.desc}
                  onChange={(e) =>
                    setProjects((rows) =>
                      rows.map((row, j) => (j === i ? { ...row, desc: e.target.value } : row)),
                    )
                  }
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            className="mt-1 w-full rounded-full border border-dashed border-[#e85d04] bg-[rgba(232,93,4,0.12)] py-2.5 text-sm font-bold text-[#e85d04]"
            onClick={() =>
              setProjects((rows) => [
                ...rows,
                { emoji: "✨", title: "New project", status: "planned", desc: "", tags: "" },
              ])
            }
          >
            + Add project
          </button>
        </section>

        <section className={panel}>
          <h2 className="font-[family-name:var(--font-gg-display)] text-xl font-bold">Weekly Schedule</h2>
          <p className="mb-5 mt-1 text-sm text-[#6b7c93]">Times in 24-hour format. Tick Off for a rest day.</p>
          {schedule.map((d, i) => (
            <div key={d.day} className="mb-3 rounded-md border border-[rgba(210,224,245,0.1)] bg-[#0c1622] p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-[family-name:var(--font-gg-display)] font-bold">{DAY_NAMES[d.day]}</span>
                <label className="inline-flex items-center gap-2 text-sm text-[#9aabc2]">
                  <input
                    type="checkbox"
                    checked={d.off}
                    onChange={(e) =>
                      setSchedule((rows) =>
                        rows.map((row, j) => (j === i ? { ...row, off: e.target.checked } : row)),
                      )
                    }
                  />
                  Off / rest day
                </label>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <label>
                  <span className={label}>start</span>
                  <input
                    className={field}
                    value={d.start}
                    disabled={d.off}
                    onChange={(e) =>
                      setSchedule((rows) =>
                        rows.map((row, j) => (j === i ? { ...row, start: e.target.value } : row)),
                      )
                    }
                  />
                </label>
                <label>
                  <span className={label}>end</span>
                  <input
                    className={field}
                    value={d.end}
                    disabled={d.off}
                    onChange={(e) =>
                      setSchedule((rows) =>
                        rows.map((row, j) => (j === i ? { ...row, end: e.target.value } : row)),
                      )
                    }
                  />
                </label>
                <label className="sm:col-span-1">
                  <span className={label}>content</span>
                  <input
                    className={field}
                    value={d.content}
                    onChange={(e) =>
                      setSchedule((rows) =>
                        rows.map((row, j) => (j === i ? { ...row, content: e.target.value } : row)),
                      )
                    }
                  />
                </label>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-wrap items-center gap-3 border-t border-[rgba(210,224,245,0.1)] bg-[rgba(8,8,10,0.85)] px-[clamp(1rem,4vw,2rem)] py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={publish}
          className="rounded-full bg-[#e85d04] px-5 py-2.5 text-sm font-bold text-[#0a0a0a] shadow-[0_8px_24px_-8px_rgba(232,93,4,0.28)]"
        >
          Save & Publish
        </button>
        <button
          type="button"
          onClick={exportBackup}
          className="rounded-full border border-[rgba(210,224,245,0.2)] px-5 py-2.5 text-sm font-bold hover:border-[#e85d04] hover:text-[#e85d04]"
        >
          Export backup
        </button>
        <button
          type="button"
          onClick={() => {
            setGeneral({
              tagline: ggsaltaireSeed.tagline,
              watchUrl: ggsaltaireSeed.watchUrl,
              timezone: ggsaltaireSeed.timezone,
              kickChannel: ggsaltaireSeed.kickChannel,
              twitchChannel: ggsaltaireSeed.twitchChannel,
              youtubeChannel: ggsaltaireSeed.youtubeChannel,
            });
            setSocials(ggsaltaireSeed.socials);
            setProjects(ggsaltaireSeed.projects);
            setSchedule(ggsaltaireSeed.schedule);
            setStatus("Reloaded seed data");
          }}
          className="rounded-full border border-[rgba(210,224,245,0.2)] px-5 py-2.5 text-sm font-bold hover:border-[#e85d04] hover:text-[#e85d04]"
        >
          Reload
        </button>
        <span className="ml-auto text-sm text-[#36d399]">{status}</span>
      </div>
    </div>
  );
}
