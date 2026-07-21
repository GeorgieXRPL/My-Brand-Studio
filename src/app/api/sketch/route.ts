import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = { prompt?: string; audience?: string };

const buckets = new Map<string, { count: number; reset: number }>();
const LIMIT = 8;
const WINDOW_MS = 60 * 60 * 1000;

function rateLimit(ip: string) {
  const now = Date.now();
  const row = buckets.get(ip);
  if (!row || now > row.reset) {
    buckets.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (row.count >= LIMIT) return false;
  row.count += 1;
  return true;
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function templateSketch(prompt: string, audience: string) {
  const isCreator = audience === "creator";
  const bg = isCreator
    ? "linear-gradient(160deg,#1a0a22,#2a1038 40%,#0f172a)"
    : "linear-gradient(145deg,#0c1218,#132433 50%,#0f1a1a)";
  const accent = isCreator ? "#ff6b6b" : "#2dd4bf";
  const accent2 = isCreator ? "#c8f542" : "#5eead4";
  const title = isCreator ? "Your community hub" : "Your business, online";
  const safe = escapeHtml(prompt.slice(0, 280));

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>My Brand Studio sketch</title>
<style>
  *{box-sizing:border-box} body{margin:0;font-family:Georgia,serif;color:#f4f4f5;background:${bg};min-height:100vh}
  .bar{position:fixed;inset:auto 0 0 0;background:rgba(0,0,0,.72);color:#fff;font:600 12px/1.4 system-ui,sans-serif;padding:10px 14px;text-align:center;letter-spacing:.02em}
  .hero{padding:14vh 8vw 20vh;max-width:920px}
  h1{font-size:clamp(2rem,6vw,3.4rem);line-height:1.05;margin:0 0 .6em;letter-spacing:-.03em}
  p{font-size:1.05rem;opacity:.85;max-width:36rem;line-height:1.55}
  .cta{display:inline-block;margin-top:1.5rem;background:${accent};color:#111;padding:.85rem 1.35rem;border-radius:999px;font:700 14px system-ui,sans-serif;text-decoration:none}
  .chip{display:inline-block;border:1px solid ${accent2};color:${accent2};padding:.35rem .7rem;border-radius:999px;font:600 11px system-ui,sans-serif;margin-bottom:1rem;text-transform:uppercase;letter-spacing:.12em}
  .brief{margin-top:2rem;padding:1rem 1.1rem;border-left:3px solid ${accent};background:rgba(255,255,255,.06);font:500 13px/1.5 system-ui,sans-serif;opacity:.9}
</style>
</head>
<body>
  <main class="hero">
    <span class="chip">${isCreator ? "Creator sketch" : "Business sketch"}</span>
    <h1>${title}</h1>
    <p>A starting composition from My Brand Studio. Replace this with your real story, offer, and proof — then book a same-day refine before 10am NZ (free).</p>
    <a class="cta" href="#book">Book free same-day draft</a>
    <div class="brief"><strong>Your brief:</strong> ${safe}</div>
  </main>
  <div class="bar">Sketch by My Brand Studio · Not a finished site · Book same-day to refine</div>
</body>
</html>`;
}

async function llmSketch(prompt: string, audience: string): Promise<string | null> {
  const key = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY;
  if (!key) return null;

  const useGroq = Boolean(process.env.GROQ_API_KEY);
  const url = useGroq
    ? "https://api.groq.com/openai/v1/chat/completions"
    : "https://api.openai.com/v1/chat/completions";
  const model = useGroq
    ? process.env.GROQ_MODEL || "llama-3.3-70b-versatile"
    : process.env.OPENAI_MODEL || "gpt-4o-mini";

  const system = `You generate a single self-contained HTML landing page (inline CSS only, no scripts, no external URLs).
Audience mode: ${audience}.
Brand watermark footer fixed at bottom: "Sketch by My Brand Studio · Not a finished site · Book same-day to refine".
Keep it one viewport-ish hero: brand-feeling name placeholder, one headline, one short sentence, one CTA.
Avoid purple-on-white AI clichés. Prefer ${audience === "creator" ? "ink + coral/lime energy" : "slate + teal trust"}.
Return ONLY HTML starting with <!DOCTYPE html>.`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      max_tokens: 1800,
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt.slice(0, 600) },
      ],
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) return null;
  const start = content.indexOf("<!DOCTYPE");
  const html = start >= 0 ? content.slice(start) : content;
  if (!html.toLowerCase().includes("<html")) return null;
  return html;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit — try again in an hour, or book a same-day slot." },
      { status: 429 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const prompt = (body.prompt || "").trim();
  const audience = body.audience === "creator" ? "creator" : "business";
  if (prompt.length < 12) {
    return NextResponse.json({ error: "Prompt too short" }, { status: 400 });
  }

  try {
    const llm = await llmSketch(prompt, audience);
    const html = llm ?? templateSketch(prompt, audience);
    return NextResponse.json({ html, mode: llm ? "llm" : "template" });
  } catch {
    return NextResponse.json({ html: templateSketch(prompt, audience), mode: "template" });
  }
}
