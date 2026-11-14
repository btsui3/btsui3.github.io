# bentsui.dev

Personal site and blog. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Change the content

| To change...                         | Edit                                  |
| ------------------------------------ | ------------------------------------- |
| Intro, jobs, projects, skills        | `src/data/site.ts`                    |
| Photos in "Off the clock"            | `src/components/OffClock.astro`       |
| Colours and fonts                    | `src/styles/global.css` (top of file) |
| The social share image               | `npm run og`                          |

## Write a blog post

Add a Markdown file to `src/content/blog/`:

```md
---
title: My post
description: One sentence shown in lists and link previews.
pubDate: 2026-12-01
tags: [go, databases]
draft: true        # visible in `npm run dev` only; remove to publish
---

Post body in Markdown.
```

The file name becomes the URL: `my-post.md` is served at `/blog/my-post/`.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The custom domain is set by `public/CNAME`.
