import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Churchtown Media - Digital Growth for Southport Businesses';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            marginBottom: 40,
            letterSpacing: '-0.05em',
          }}
        >
          Churchtown<span style={{ color: '#3b82f6' }}>Media</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 42,
            fontWeight: 600,
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          We build revenue engines. Not just websites.
        </div>

        {/* Location Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 60,
            padding: '16px 32px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: 999,
            color: '#60a5fa',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          🚀 Serving Southport & North West
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
