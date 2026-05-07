import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          border: "1px solid #e0e0d8",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 14,
            fontWeight: 400,
            color: "#112d6e",
            letterSpacing: "-0.5px",
          }}
        >
          cm
        </span>
      </div>
    ),
    { ...size }
  );
}
