import { ImageResponse } from "next/og";

export const alt = "My Brand Studio";
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
          justifyContent: "flex-end",
          padding: "72px",
          background: "linear-gradient(145deg, #0c1218 0%, #132433 55%, #0f1a1a 100%)",
          color: "#e8eef4",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#2dd4bf" }}>
          New Zealand
        </div>
        <div style={{ fontSize: 86, fontWeight: 700, letterSpacing: -3, marginTop: 12 }}>
          My Brand Studio
        </div>
        <div style={{ fontSize: 32, color: "#9aafc0", marginTop: 16, maxWidth: 820 }}>
          Sites, SEO, and admin backends you can run yourself.
        </div>
      </div>
    ),
    { ...size },
  );
}
