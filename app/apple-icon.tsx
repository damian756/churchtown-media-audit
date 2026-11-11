import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** The home-screen icon: C and M joined by the wordmark's teal bar, on white. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#1a1a18",
          fontSize: 76,
          fontWeight: 600,
        }}
      >
        <span>C</span>
        <span style={{ width: 6, height: 80, backgroundColor: "#277370", margin: "0 14px" }} />
        <span>M</span>
      </div>
    ),
    { ...size }
  );
}
