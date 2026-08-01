export default function GotmLogo({ size = 200, textColor = "#0D0D1A" }: { size?: number; textColor?: string }) {
  // viewBox: 340 wide × 90 tall — enough room for icon + "GOTM" + "DIGITAL"
  const vw = 340;
  const vh = 90;
  return (
    <svg
      width={size}
      height={size * (vh / vw)}
      viewBox={`0 0 ${vw} ${vh}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D946EF", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#818CF8", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glowLogo">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Crosshair icon — 60×60 box, centred at (30,30), offset (8,15) ── */}
      <g transform="translate(8, 15)" filter="url(#glowLogo)">
        <circle cx="30" cy="30" r="24" fill="none" stroke="url(#brandGradLogo)" strokeWidth="2.2" />
        <circle cx="30" cy="30" r="14" fill="none" stroke="url(#brandGradLogo)" strokeWidth="1.8" />
        <circle cx="30" cy="30" r="3"  fill="url(#brandGradLogo)" />
        {/* ticks */}
        <line x1="30" y1="0"  x2="30" y2="12" stroke="url(#brandGradLogo)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="30" y1="48" x2="30" y2="60" stroke="url(#brandGradLogo)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="0"  y1="30" x2="12" y2="30" stroke="url(#brandGradLogo)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="48" y1="30" x2="60" y2="30" stroke="url(#brandGradLogo)" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* ── Wordmark — starts at x=80 ── */}
      {/* "GOTM" — large, bold */}
      <text
        x="80" y="52"
        fontFamily="Syne, DM Sans, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill={textColor}
        letterSpacing="-1"
      >
        GOTM
      </text>
      {/* Thin rule under GOTM */}
      <line x1="80" y1="60" x2="334" y2="60" stroke="url(#brandGradLogo)" strokeWidth="0.8" opacity="0.55" />
      {/* "DIGITAL" — spaced caps */}
      <text
        x="207" y="74"
        fontFamily="Syne, DM Sans, sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="url(#brandGradLogo)"
        textAnchor="middle"
        letterSpacing="5"
      >
        DIGITAL
      </text>
      {/* "MARKETING THAT WORKS" — tiny tagline */}
      <text
        x="207" y="87"
        fontFamily="Plus Jakarta Sans, DM Sans, sans-serif"
        fontWeight="400"
        fontSize="8.5"
        fill="#8888AA"
        textAnchor="middle"
        letterSpacing="2"
      >
        MARKETING THAT WORKS
      </text>
    </svg>
  );
}
