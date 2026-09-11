import { ImageResponse } from "next/og";

export const alt = "Churchtown Media";
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
          backgroundColor: "#f3eee4",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#1a2744",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Churchtown Media
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: "#1a1916",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 920,
          }}
        >
          Know what the public record already shows.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: "#6a6760",
          }}
        >
          Institrace · SIBA Digital
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
