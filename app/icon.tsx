import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The tab icon: C and M joined by the wordmark's teal bar, on white. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#1a1a18",
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        <span>C</span>
        <span style={{ width: 2, height: 16, backgroundColor: "#277370", margin: "0 3px" }} />
        <span>M</span>
      </div>
    ),
    { ...size }
  );
}
