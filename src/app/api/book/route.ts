import { NextRequest, NextResponse } from "next/server";
import { BOOKING_FROM_EMAIL, CONTACT_EMAIL, SITE_URL } from "@/content/pricing";

export const runtime = "nodejs";

const buckets = new Map<string, { count: number; reset: number }>();
const LIMIT = 6;
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

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function wantsHtml(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";
  return accept.includes("text/html") && !accept.includes("application/json");
}

function readField(value: FormDataEntryValue | string | null | undefined) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length < 200;
}

async function sendWithResend(input: {
  name: string;
  email: string;
  body: string;
  window: string;
}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `My Brand Studio <${BOOKING_FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      reply_to: input.email,
      subject: `Same-day draft booking from ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Window: ${input.window}`,
        "",
        input.body,
      ].join("\n"),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend send failed", res.status, detail.slice(0, 400));
  }
  return res.ok;
}

async function sendWithFormSubmit(input: {
  name: string;
  email: string;
  body: string;
  window: string;
}) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      window: input.window,
      message: input.body,
      _subject: `Same-day draft booking from ${input.name}`,
      _template: "box",
    }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req))) {
    if (wantsHtml(req)) {
      return NextResponse.redirect(new URL("/#same-day?booked=rate", SITE_URL), 303);
    }
    return NextResponse.json(
      { error: "Too many requests. Try again in an hour." },
      { status: 429 },
    );
  }

  const contentType = req.headers.get("content-type") ?? "";
  let name = "";
  let email = "";
  let body = "";
  let windowLabel = "";

  if (contentType.includes("application/json")) {
    const json = (await req.json()) as Record<string, unknown>;
    name = readField(typeof json.name === "string" ? json.name : "");
    email = readField(typeof json.email === "string" ? json.email : "");
    body = readField(typeof json.body === "string" ? json.body : "");
    windowLabel = readField(typeof json.window === "string" ? json.window : "");
  } else {
    const form = await req.formData();
    name = readField(form.get("name"));
    email = readField(form.get("email"));
    body = readField(form.get("body"));
    windowLabel = readField(form.get("window"));
  }

  if (name.length < 2 || name.length > 80 || !validEmail(email) || body.length < 8 || body.length > 2000) {
    if (wantsHtml(req)) {
      return NextResponse.redirect(new URL("/#same-day?booked=invalid", SITE_URL), 303);
    }
    return NextResponse.json({ error: "Check name, email, and brief." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    body,
    window: windowLabel || "not specified",
  };

  const delivered = (await sendWithResend(payload)) || (await sendWithFormSubmit(payload));
  if (!delivered) {
    if (wantsHtml(req)) {
      return NextResponse.redirect(new URL("/#same-day?booked=error", SITE_URL), 303);
    }
    return NextResponse.json(
      { error: "Could not send the request. Email hello@mybrandstudio.club directly." },
      { status: 502 },
    );
  }

  if (wantsHtml(req)) {
    return NextResponse.redirect(new URL("/#same-day?booked=1", SITE_URL), 303);
  }
  return NextResponse.json({ ok: true });
}
