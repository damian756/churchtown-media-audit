import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#f3eee4",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 72,
            fontWeight: 400,
            color: "#1a2744",
            letterSpacing: "-1px",
          }}
        >
          cm
        </span>
      </div>
    ),
    { ...size }
  );
}
