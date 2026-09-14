import { ImageResponse } from "next/og";

export const alt =
  "Corner-cafe homepage with a warm room photo, menu, hours, and a Come sit heading.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(160deg, #4a2c1c 0%, #2a1810 55%, #1a100c 100%)",
          color: "#f3e6c8",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#d7c4a0" }}>
          <span style={{ fontWeight: 700, color: "#f3e6c8" }}>Mill</span>
          <span>Menu · Hours</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#e8c98a" }}>
            My Brand Studio
          </div>
          <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: -2, lineHeight: 1.08, marginTop: 12, maxWidth: 980 }}>
            Do I need a website, an app, or a brand site?
          </div>
          <div style={{ fontSize: 26, color: "#d7c4a0", marginTop: 18 }}>
            Instagram helps people you know. A brand site is yours to own and find.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
