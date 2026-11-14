/**
 * Terrain + contour-line maths shared by every map on the site.
 *
 *  - `createNoise`  seeded 2D simplex noise
 *  - `fbm`          layered noise ("fractal Brownian motion") for natural-looking hills
 *  - `contour`      marching squares: turns a height grid into contour line segments
 */

export type Noise2D = (x: number, y: number) => number;

/** Small, fast, seedable PRNG (mulberry32). */
export function prng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Stable 32-bit hash of a string, so a project name always draws the same map. */
export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const GRAD = [1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 0, 1, 0, -1];

/** Seeded 2D simplex noise, output roughly in [-1, 1]. */
export function createNoise(seed: number): Noise2D {
  const rand = prng(seed);
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = p[i];
    p[i] = p[j];
    p[j] = tmp;
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  return (x, y) => {
    const s = (x + y) * F2;
    const i = Math.floor(x + s);
    const j = Math.floor(y + s);
    const t = (i + j) * G2;
    const x0 = x - (i - t);
    const y0 = y - (j - t);
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = 1 - i1;
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;

    let n = 0;
    let a = 0.5 - x0 * x0 - y0 * y0;
    if (a > 0) {
      const g = (perm[ii + perm[jj]] & 7) * 2;
      a *= a;
      n += a * a * (GRAD[g] * x0 + GRAD[g + 1] * y0);
    }
    a = 0.5 - x1 * x1 - y1 * y1;
    if (a > 0) {
      const g = (perm[ii + i1 + perm[jj + j1]] & 7) * 2;
      a *= a;
      n += a * a * (GRAD[g] * x1 + GRAD[g + 1] * y1);
    }
    a = 0.5 - x2 * x2 - y2 * y2;
    if (a > 0) {
      const g = (perm[ii + 1 + perm[jj + 1]] & 7) * 2;
      a *= a;
      n += a * a * (GRAD[g] * x2 + GRAD[g + 1] * y2);
    }
    return 70 * n;
  };
}

/** Layered noise. More octaves = more fine detail on top of the big shapes. */
export function fbm(noise: Noise2D, x: number, y: number, octaves = 3): number {
  let amp = 1;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * noise(x * freq, y * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2.05;
  }
  return sum / norm;
}

/**
 * Marching squares. Walks every cell of a `cols` x `rows` height grid and
 * calls `emit` with one line segment (in grid units) wherever the surface
 * crosses `level`. Segment ends are linearly interpolated so lines are smooth.
 */
export function contour(
  field: Float32Array,
  cols: number,
  rows: number,
  level: number,
  emit: (x1: number, y1: number, x2: number, y2: number) => void,
): void {
  for (let j = 0; j < rows - 1; j++) {
    const row = j * cols;
    for (let i = 0; i < cols - 1; i++) {
      const a = field[row + i]; // top-left
      const b = field[row + i + 1]; // top-right
      const c = field[row + cols + i + 1]; // bottom-right
      const d = field[row + cols + i]; // bottom-left
      const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
      if (idx === 0 || idx === 15) continue;

      // Crossing points on each edge of the cell.
      const tx = i + (level - a) / (b - a);
      const ty = j;
      const rx = i + 1;
      const ry = j + (level - b) / (c - b);
      const bx = i + (level - d) / (c - d);
      const by = j + 1;
      const lx = i;
      const ly = j + (level - a) / (d - a);

      switch (idx) {
        case 1:
        case 14:
          emit(lx, ly, bx, by);
          break;
        case 2:
        case 13:
          emit(bx, by, rx, ry);
          break;
        case 3:
        case 12:
          emit(lx, ly, rx, ry);
          break;
        case 4:
        case 11:
          emit(tx, ty, rx, ry);
          break;
        case 6:
        case 9:
          emit(tx, ty, bx, by);
          break;
        case 7:
        case 8:
          emit(tx, ty, lx, ly);
          break;
        case 5:
          emit(tx, ty, lx, ly);
          emit(bx, by, rx, ry);
          break;
        case 10:
          emit(tx, ty, rx, ry);
          emit(lx, ly, bx, by);
          break;
      }
    }
  }
}

export type RGB = [number, number, number];

/** "#22d3ee" -> [34, 211, 238] */
export function hexToRgb(hex: string): RGB {
  const h = hex.trim().replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, '$&$&') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Colour at position t (0..1) along a list of evenly spaced stops. */
export function ramp(stops: RGB[], t: number, alpha = 1): string {
  const x = Math.max(0, Math.min(1, t)) * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(x));
  const f = x - i;
  const a = stops[i];
  const b = stops[i + 1];
  const c = (k: number) => Math.round(a[k] + (b[k] - a[k]) * f);
  return `rgba(${c(0)}, ${c(1)}, ${c(2)}, ${alpha})`;
}

/** Reads the elevation colour ramp and highlight colours from the CSS theme. */
export function readThemeColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (name: string) => cs.getPropertyValue(name).trim();
  return {
    stops: ['--ramp-0', '--ramp-1', '--ramp-2', '--ramp-3'].map((n) => hexToRgb(v(n))),
    hot: v('--hot'),
    glow: hexToRgb(v('--accent-2')),
    alphaLow: parseFloat(v('--ramp-alpha-low')) || 0.25,
    alphaHigh: parseFloat(v('--ramp-alpha-high')) || 0.8,
  };
}
