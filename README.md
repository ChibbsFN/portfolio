# John — Astro Portfolio

This is an Astro upgrade of your "minimal diary / portfolio + life" site.

## Run locally
1. Install Node.js (LTS is fine)
2. In this folder:
   - `npm install`
   - `npm run dev`
3. Open the URL Astro prints (usually http://localhost:4321)

## Add a new diary post
Create a new Markdown file in `src/diary/` like:

```md
---
title: "My title"
pubDate: 2025-12-14
description: "One sentence summary"
tags: ["finland", "vantaa"]
draft: false
---

Write here...
```

## Deploy to GitHub Pages
This repo includes `.github/workflows/deploy.yml` using the official Astro GitHub Action.
In GitHub: Settings → Pages → Source: GitHub Actions.
