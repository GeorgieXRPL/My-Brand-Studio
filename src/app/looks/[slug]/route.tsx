import { ImageResponse } from "next/og";
import { getLookStill, lookStills } from "@/content/look-stills";

export const runtime = "nodejs";

export function generateStaticParams() {
  return lookStills.map((still) => ({ slug: still.slug }));
}

export async function GET(
  _req: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const still = getLookStill(slug);
  if (!still) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "36px 40px",
          background: still.bg,
          color: still.fg,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 1,
            color: still.muted,
          }}
        >
          <span style={{ fontWeight: 700, color: still.fg }}>{still.brand}</span>
          <span>
            {still.nav[0]} · {still.nav[1]}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            {still.headline}
          </div>
          <div style={{ marginTop: 16, fontSize: 22, color: still.muted }}>
            A brand site you can own and find.
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 750 },
  );
}
