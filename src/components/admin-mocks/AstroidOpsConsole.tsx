"use client";

import { useMemo, useState } from "react";
import { astroidOpsSeed } from "@/content/adminMocks";

function Table({
  headers,
  rows,
}: {
  headers?: string[];
  rows: Array<Array<string | number>>;
}) {
  return (
    <div className="overflow-auto">
      <table className="w-full border-collapse text-left">
        {headers && (
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} className="whitespace-nowrap px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#7b8aa6]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#1e2c44]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`whitespace-nowrap px-3.5 py-2 ${j === 0 ? "text-[#7b8aa6]" : ""} ${j > 0 && headers ? "text-right" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AstroidOpsConsole() {
  const [paused, setPaused] = useState(false);
  const [comp, setComp] = useState(["Ast1demoWallet111111111111111111111111111"]);
  const [compInput, setCompInput] = useState("");
  const [filter, setFilter] = useState("");
  const [tick] = useState(() => new Date().toLocaleTimeString());

  const logs = useMemo(
    () => astroidOpsSeed.logs.filter((l) => l.toLowerCase().includes(filter.toLowerCase())),
    [filter],
  );

  return (
    <div className="min-h-screen bg-[#070b14] text-[#dce6f5] [font-family:ui-monospace,SFMono-Regular,Menlo,monospace] text-[13px] leading-relaxed">
      <header className="sticky top-[41px] z-40 flex flex-wrap items-center gap-3.5 border-b border-[#1e2c44] bg-[#0e1626] px-4 py-2.5">
        <h1 className="m-0 text-[15px] tracking-wide">
          astroid.club <span className="text-[#36b6ff]">admin</span>
        </h1>
        <span className="rounded-full border border-[#1c5] px-2 py-0.5 text-[11px] text-[#38d39f]">chain: on</span>
        <span className="rounded-full border border-[#1c5] px-2 py-0.5 text-[11px] text-[#38d39f]">quarry: on</span>
        <span className="rounded-full border border-[#1c5] px-2 py-0.5 text-[11px] text-[#38d39f]">
          payouts: on-chain
        </span>
        <span className="rounded-full border border-[#1c5] px-2 py-0.5 text-[11px] text-[#38d39f]">
          gate: ~0.25 SOL
        </span>
        <span className="rounded-full border border-[#1c5] px-2 py-0.5 text-[11px] text-[#38d39f]">
          12 online
        </span>
        <span className="ml-auto text-[#7b8aa6]">updated {tick}</span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="rounded-md border border-[#1e2c44] bg-[#131f33] px-2.5 py-1 hover:border-[#36b6ff]"
        >
          {paused ? "Resume" : "Pause"}
        </button>
      </header>

      <main className="mx-auto grid max-w-[1500px] gap-4 p-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5">
          {astroidOpsSeed.cards.map(([k, v]) => (
            <div key={k} className="rounded-[10px] border border-[#1e2c44] bg-[#0e1626] px-3.5 py-3">
              <div className="text-[11px] uppercase tracking-wide text-[#7b8aa6]">{k}</div>
              <div className="mt-1 text-[22px] font-semibold">{v}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
            <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
              Holder gate & oracle
            </h2>
            <Table rows={astroidOpsSeed.gate} />
          </section>
          <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
            <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
              Raid-wager escrow
            </h2>
            <Table rows={astroidOpsSeed.escrow} />
          </section>
        </div>

        <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
          <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
            Comp wallets, holder-gate bypass
          </h2>
          <div className="flex flex-wrap gap-2 border-b border-[#1e2c44] p-3">
            <input
              value={compInput}
              onChange={(e) => setCompInput(e.target.value)}
              placeholder="wallet address to comp past the holder gate"
              className="min-w-0 flex-1 rounded border border-[#1e2c44] bg-[#060a11] px-2 py-1.5 text-[#dce6f5] outline-none focus:border-[#36b6ff]"
            />
            <button
              type="button"
              className="rounded-md border border-[#1e2c44] bg-[#131f33] px-2.5 py-1 hover:border-[#36b6ff]"
              onClick={() => {
                const next = compInput.trim();
                if (!next) return;
                setComp((rows) => [next, ...rows]);
                setCompInput("");
              }}
            >
              Add
            </button>
          </div>
          <Table
            headers={["Wallet", "Status"]}
            rows={comp.map((w) => [w, "comped"])}
          />
        </section>

        <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
          <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
            Asteroids
          </h2>
          <Table
            headers={["Asteroid", "Resource", "Miners", "Drill", "Stake", "Treasury", "Defense", "Steal", "Found", "State"]}
            rows={astroidOpsSeed.asteroids.map((a) => [
              a.name,
              a.resource,
              a.miners,
              a.drill,
              a.stake,
              a.treasury,
              a.defense,
              a.steal,
              a.found,
              a.state,
            ])}
          />
        </section>

        <div className="grid gap-4 lg:grid-cols-2">
          <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
            <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
              Active raids
            </h2>
            <Table
              headers={["Attacker", "Party", "Target", "Attack", "Defense", "Bet", "ETA"]}
              rows={astroidOpsSeed.raidsActive.map((r) => [
                r.attacker,
                r.party,
                r.target,
                r.attack,
                r.defense,
                r.bet,
                r.eta,
              ])}
            />
          </section>
          <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
            <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
              Recent raid outcomes
            </h2>
            <Table
              headers={["Expedition", "Outcome", "Stolen", "Attack", "Defense", "When"]}
              rows={astroidOpsSeed.raidsRecent.map((r) => [
                r.id,
                r.outcome,
                r.stolen,
                r.attack,
                r.defense,
                r.when,
              ])}
            />
          </section>
        </div>

        <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
          <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
            Players
          </h2>
          <Table
            headers={["Wallet", "Tier", "Stake", "Drill", "Claimable", "Home"]}
            rows={astroidOpsSeed.players.map((p) => [
              p.wallet,
              p.tier,
              p.stake,
              p.drill,
              p.claimable,
              p.home,
            ])}
          />
        </section>

        <section className="overflow-hidden rounded-[10px] border border-[#1e2c44] bg-[#0e1626]">
          <h2 className="m-0 border-b border-[#1e2c44] bg-[#131f33] px-3.5 py-2 text-[12px] uppercase tracking-wide text-[#7b8aa6]">
            Live server log
          </h2>
          <div className="flex items-center gap-2 border-b border-[#1e2c44] p-3">
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="filter"
              className="min-w-0 flex-1 rounded border border-[#1e2c44] bg-[#060a11] px-2 py-1.5 outline-none focus:border-[#36b6ff]"
            />
            <span className="text-[#7b8aa6]">{logs.length} lines</span>
          </div>
          <pre className="max-h-64 overflow-auto p-3.5 text-[#8be9fd]">
            {logs.map((l) => (paused ? `[paused] ${l}` : l)).join("\n")}
          </pre>
        </section>
      </main>
    </div>
  );
}
