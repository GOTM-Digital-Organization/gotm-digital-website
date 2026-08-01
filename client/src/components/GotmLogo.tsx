export default function GotmLogo({ size = 200, textColor = "#0D0D1A" }: { size?: number; textColor?: string }) {
  return (
    <svg
      width={size}
      height={size * (110 / 300)}
      viewBox="0 0 300 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D946EF", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#818CF8", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glowLogo">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Crosshair target icon ── centred at (36, 36) in a 72×72 box */}
      <g transform="translate(18, 10)" filter="url(#glowLogo)">
        {/* Outer circle */}
        <circle cx="36" cy="36" r="30" fill="none" stroke="url(#brandGradLogo)" strokeWidth="2.5" />
        {/* Inner circle */}
        <circle cx="36" cy="36" r="18" fill="none" stroke="url(#brandGradLogo)" strokeWidth="2" />
        {/* Centre dot */}
        <circle cx="36" cy="36" r="3.5" fill="url(#brandGradLogo)" />

        {/* Top tick */}
        <line x1="36" y1="0"  x2="36" y2="14" stroke="url(#brandGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Bottom tick */}
        <line x1="36" y1="58" x2="36" y2="72" stroke="url(#brandGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Left tick */}
        <line x1="0"  y1="36" x2="14" y2="36" stroke="url(#brandGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right tick */}
        <line x1="58" y1="36" x2="72" y2="36" stroke="url(#brandGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* ── Wordmark ── */}
      <text x="100" y="58" fontFamily="Syne, DM Sans, sans-serif" fontWeight="900" fontSize="56" fill={textColor} letterSpacing="-1">GOTM</text>
      <line x1="100" y1="68" x2="294" y2="68" stroke="url(#brandGradLogo)" strokeWidth="1" opacity="0.6" />
      <text x="197" y="84" fontFamily="Syne, DM Sans, sans-serif" fontWeight="700" fontSize="13" fill="url(#brandGradLogo)" textAnchor="middle" letterSpacing="5">DIGITAL</text>
      <text x="197" y="100" fontFamily="Plus Jakarta Sans, DM Sans, sans-serif" fontWeight="400" fontSize="10" fill="#888899" textAnchor="middle" letterSpacing="2">MARKETING THAT WORKS</text>
    </svg>
  );
}
