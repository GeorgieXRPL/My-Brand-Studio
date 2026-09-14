import { NextRequest, NextResponse } from "next/server";

const SITES: Record<string, { origin: string; aliases: string[] }> = {
  space: {
    origin: "https://www.astroid.space",
    aliases: ["https://www.astroid.space", "https://astroid.space"],
  },
};

function rewriteHtml(html: string, prefix: string, aliases: string[]) {
  let out = html;
  for (const alias of aliases) {
    out = out.split(alias).join(prefix);
  }
  return out
    .replaceAll('href="/', `href="${prefix}/`)
    .replaceAll("href='/", `href='${prefix}/`)
    .replaceAll('src="/', `src="${prefix}/`)
    .replaceAll("src='/", `src='${prefix}/`)
    .replaceAll('srcset="/', `srcset="${prefix}/`)
    .replaceAll('action="/', `action="${prefix}/`);
}

function rewriteCss(css: string, prefix: string, aliases: string[]) {
  let out = css;
  for (const alias of aliases) {
    out = out.split(alias).join(prefix);
  }
  return out.replaceAll("url(/", `url(${prefix}/`).replaceAll("url('/", `url('${prefix}/`);
}

async function proxy(req: NextRequest, site: string, path: string[]) {
  const target = SITES[site];
  if (!target) {
    return NextResponse.json({ error: "Unknown embed" }, { status: 404 });
  }

  const search = new URL(req.url).search;
  const dest = `${target.origin}/${path.join("/")}${search}`;
  const upstream = await fetch(dest, {
    headers: {
      "user-agent": req.headers.get("user-agent") || "Mozilla/5.0",
      accept: req.headers.get("accept") || "*/*",
    },
    redirect: "follow",
  });

  const contentType = upstream.headers.get("content-type") || "application/octet-stream";
  const headers = new Headers();
  headers.set("content-type", contentType);
  headers.set("cache-control", "public, max-age=60");

  const prefix = `/work-embed/${site}`;

  if (contentType.includes("text/html")) {
    const html = rewriteHtml(await upstream.text(), prefix, target.aliases);
    return new NextResponse(html, { status: upstream.status, headers });
  }

  if (contentType.includes("text/css")) {
    const css = rewriteCss(await upstream.text(), prefix, target.aliases);
    return new NextResponse(css, { status: upstream.status, headers });
  }

  return new NextResponse(upstream.body, { status: upstream.status, headers });
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ site: string; path?: string[] }> },
) {
  const { site, path = [] } = await params;
  return proxy(req, site, path);
}
