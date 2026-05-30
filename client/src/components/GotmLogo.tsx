export default function GotmLogo({ size = 200 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * (110 / 300)}
      viewBox="0 0 300 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#E8304A", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#C8102E", stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glowLogo">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(18, 10)" filter="url(#glowLogo)">
        <circle cx="36" cy="36" r="32" fill="none" stroke="url(#goldGradLogo)" strokeWidth="2.5" />
        <circle cx="36" cy="36" r="20" fill="none" stroke="url(#goldGradLogo)" strokeWidth="2" />
        <circle cx="36" cy="36" r="5" fill="url(#goldGradLogo)" />
        <line x1="36" y1="0" x2="36" y2="13" stroke="url(#goldGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="59" x2="36" y2="72" stroke="url(#goldGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="0" y1="36" x2="13" y2="36" stroke="url(#goldGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="59" y1="36" x2="72" y2="36" stroke="url(#goldGradLogo)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <text x="100" y="58" fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="56" fill="#111111" letterSpacing="-1">GOTM</text>
      <line x1="100" y1="68" x2="294" y2="68" stroke="url(#goldGradLogo)" strokeWidth="1" opacity="0.5" />
      <text x="197" y="84" fontFamily="DM Sans, sans-serif" fontWeight="600" fontSize="13" fill="url(#goldGradLogo)" textAnchor="middle" letterSpacing="5">DIGITAL</text>
      <text x="197" y="100" fontFamily="DM Sans, sans-serif" fontWeight="400" fontSize="10" fill="#999999" textAnchor="middle" letterSpacing="2">MARKETING THAT WORKS</text>
    </svg>
  );
}
