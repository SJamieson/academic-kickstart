// Generates the default Open Graph share card (1200×630) from an SVG template
// using sharp (already available via Astro's image pipeline). Re-run with:
//   node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og-default.png', import.meta.url));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="22%" r="70%">
      <stop offset="0%" stop-color="#0f766e" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#0f766e" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#14161a"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#0f766e"/>

  <!-- uncertainty-curve mark -->
  <g transform="translate(80,86)">
    <path d="M0 56 C 26 56, 30 8, 46 8 C 62 8, 66 56, 92 56" fill="none" stroke="#2dd4bf" stroke-width="7" stroke-linecap="round"/>
    <line x1="0" y1="60" x2="92" y2="60" stroke="#3f6f6a" stroke-width="4" stroke-linecap="round"/>
  </g>

  <text x="80" y="250" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="3" fill="#2dd4bf">HEAD OF TECHNOLOGY · THEMIS AI</text>

  <text font-family="Inter, Helvetica, Arial, sans-serif" font-size="62" font-weight="700" fill="#f4f3f0">
    <tspan x="80" y="338">Building AI that makes safe</tspan>
    <tspan x="80" y="418">decisions under uncertainty.</tspan>
  </text>

  <text x="80" y="556" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#e9e7e2">Stewart C. Jamieson</text>
  <text x="80" y="556" text-anchor="end" font-family="Inter, Helvetica, Arial, sans-serif" font-size="26" fill="#9b988f"><tspan x="1120">stewartjamieson.com</tspan></text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
