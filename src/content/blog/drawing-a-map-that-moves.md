---
title: Drawing a topographic map that moves
description: The contour lines on this site are not an image or a video. They are computed in your browser sixty times a second. Here is how, in about a hundred lines of TypeScript.
pubDate: 2026-11-14
tags: [canvas, typescript, algorithms]
---

The map behind the home page reacts to your cursor: the ground swells under it, and a click leaves a summit behind. There is no WebGL, no library and no pre-rendered asset. It is a 2D canvas, a noise function and one classic algorithm.

## 1. Make some ground

A contour map needs a height for every point. I get one from **simplex noise**, a function that takes `(x, y)` and returns a smooth, random-looking value between -1 and 1. One layer of noise looks like gentle dunes. Stack three layers, each twice as detailed and half as tall, and you get something that reads as real terrain:

```ts
export function fbm(noise: Noise2D, x: number, y: number, octaves = 3) {
  let amp = 1, freq = 1, sum = 0, norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * noise(x * freq, y * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2.05;
  }
  return sum / norm;
}
```

The noise is seeded, so the map is the same on every visit. The project cards further down the page each hash their own name into a seed, which is why every project has its own terrain and always the same one.

## 2. Find the lines

A contour line is every point where the ground is exactly, say, 1,200 metres. Finding that directly is hard. **Marching squares** makes it easy by refusing to look at the whole map at once.

Lay a grid over the terrain and sample the height at each corner. Then visit one cell at a time and ask a yes-or-no question of its four corners: are you above 1,200 m? Four answers give sixteen possible cells, and each one tells you exactly where the line enters and leaves:

- all four corners above, or all four below: no line passes through
- one corner different from the rest: the line cuts that corner off
- two neighbours different: the line runs straight across

The last piece is where on the edge the line crosses. If one corner is at 1,100 m and the next is at 1,300 m, the 1,200 m line crosses halfway. That is one line of linear interpolation, and it is the difference between blocky stair-steps and smooth curves.

Run that once per elevation level, draw every fifth line a little heavier, and you have a topographic map.

## 3. Make it move

The interactive part is almost free. Before tracing the lines, I add a bump to the height field wherever the pointer is:

```ts
h += pointer.amp * Math.exp(-(dx * dx + dy * dy) / (2 * 120 * 120));
```

That is a Gaussian: tall at the cursor, fading to nothing about two hundred pixels out. The contour algorithm does not know or care that the ground changed. It traces whatever heights it is given, so the lines bend around the new hill by themselves. A placed summit is the same bump, pinned in place and eased in over 900 milliseconds.

Lines above a certain height are drawn in the accent colour. Natural terrain never gets that tall, so the colour only ever appears where you raised the ground.

## 4. Keep it cheap

A full-screen animation is easy to make expensive. A few decisions keep this one light:

- **Coarse grid, smooth lines.** Heights are sampled every 13 pixels, not every pixel. Interpolation hides the difference, and the work drops by a factor of about 170.
- **One path per level.** All segments for an elevation go into a single canvas path with a single `stroke()` call.
- **Stop when nobody is looking.** An `IntersectionObserver` pauses the loop when the hero scrolls away, and it pauses again when the tab is hidden.
- **Respect the setting.** With "reduce motion" turned on there is no animation loop at all. The map is drawn once and only redraws when you move.

The whole thing, noise included, is under 4 KB of JavaScript. The source is in [`src/lib/terrain.ts`](https://github.com/btsui3/btsui3.github.io/blob/master/src/lib/terrain.ts) if you want to borrow it.
