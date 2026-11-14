// Generates public/og.png, the preview card shown when the site is shared.
// Run with: npm run og
import sharp from 'sharp';
import { createNoise, fbm, contour, ramp, hexToRgb } from '../src/lib/terrain.ts';

const stops = ['#47504f', '#5f7f62', '#a39a5c', '#dfa32c'].map(hexToRgb);

const W = 1200;
const H = 630;
const cell = 10;
const cols = Math.ceil(W / cell) + 1;
const rows = Math.ceil(H / cell) + 1;
const noise = createNoise(43615);
const field = new Float32Array(cols * rows);

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < cols; i++) {
    const x = i * cell;
    const y = j * cell;
    const dx = x - 930;
    const dy = y - 210;
    const peak = 1.1 * Math.exp(-(dx * dx + dy * dy) / (2 * 110 * 110));
    field[j * cols + i] = fbm(noise, x / 380, y / 380, 3) * 0.72 + peak;
  }
}

let paths = '';
for (let n = 0; n < 26; n++) {
  const level = -0.99 + n * 0.11;
  let d = '';
  contour(field, cols, rows, level, (x1, y1, x2, y2) => {
    d += `M${(x1 * cell).toFixed(1)} ${(y1 * cell).toFixed(1)}L${(x2 * cell).toFixed(1)} ${(y2 * cell).toFixed(1)}`;
  });
  if (!d) continue;
  const glow = level > 0.74;
  const t = (level + 0.72) / 1.46;
  const stroke = glow ? '#cf5a2e' : ramp(stops, t, 1);
  const opacity = glow ? 0.95 : 0.3 + 0.55 * Math.max(0, Math.min(1, t));
  paths += `<path d="${d}" fill="none" stroke="${stroke}" stroke-opacity="${opacity}" stroke-width="${glow ? 2 : 1.4}" stroke-linecap="round"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#151718"/>
  ${paths}
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#151718" stop-opacity=".92"/><stop offset=".7" stop-color="#151718" stop-opacity="0"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="72" y="330" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="112" fill="#e2dfd5" letter-spacing="1">BEN TSUI</text>
  <text x="76" y="396" font-family="Menlo, monospace" font-size="24" fill="#dfa32c" letter-spacing="4">FULL-STACK SOFTWARE ENGINEER</text>
  <text x="76" y="560" font-family="Menlo, monospace" font-size="20" fill="#8a8c85" letter-spacing="3">BENTSUI.DEV  ·  43.6150° N  116.2023° W</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('Wrote public/og.png');
