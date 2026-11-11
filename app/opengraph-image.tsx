import { ImageResponse } from "next/og";

export const alt = "Churchtown Media builds and runs Institrace.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/** The shared-link card, set like the site's letterhead: the wordmark, an ink rule, one sentence, the company line. */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "72px 88px",
          color: "#1a1a18",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span>Churchtown</span>
            <span style={{ width: 3, height: 32, backgroundColor: "#277370", margin: "0 18px" }} />
            <span>Media</span>
          </div>
          <div style={{ marginTop: 24, height: 2, backgroundColor: "#1a1a18" }} />
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 980 }}>
          Churchtown Media builds and runs Institrace.
        </div>
        <div style={{ fontSize: 24, color: "#615f59" }}>
          Southport. Churchtown Media Ltd, company number 16960442.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
