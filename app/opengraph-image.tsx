import { ImageResponse } from "next/og";

export const alt = "Churchtown Media builds and runs Institrace.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const HEADING = "Churchtown Media builds and runs Institrace.";
const FOOT = "Southport. Churchtown Media Ltd, company number 16960442.";
const MARK = "CHURCHTOWNMEDIA";

/**
 * Inter, the site's face, for the card (Next 16.2 changed ImageResponse's default to Geist, whose spacing after
 * "Churchtown" read as a double space here). Fetched from Google Fonts at build time with only the letters the card
 * uses, as the Next.js docs show; if the fetch fails the card falls back to the default face rather than failing.
 */
async function loadInter(weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`)
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** The shared-link card, set like the site's letterhead: the wordmark, an ink rule, one sentence, the company line. */
export default async function Image() {
  const [regular, medium, semibold] = await Promise.all([
    loadInter(400, FOOT),
    loadInter(500, MARK),
    loadInter(600, HEADING),
  ]);
  const fonts = [
    regular && { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    medium && { name: "Inter", data: medium, weight: 500 as const, style: "normal" as const },
    semibold && { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

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
          fontFamily: fonts.length ? "Inter" : undefined,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              fontWeight: 500,
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
          {HEADING}
        </div>
        <div style={{ fontSize: 24, fontWeight: 400, color: "#615f59" }}>{FOOT}</div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
