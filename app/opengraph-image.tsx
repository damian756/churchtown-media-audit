import { ImageResponse } from "next/og";

export const alt = "Churchtown Media — Digital Strategy & Technical Advisory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "80px 96px",
          borderLeft: "6px solid #112d6e",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: "#a0a0a0",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Churchtown Media
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 400,
            color: "#112d6e",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Digital strategy, technical architecture and intelligence.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            color: "#6b6b6b",
          }}
        >
          churchtownmedia.co.uk
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
