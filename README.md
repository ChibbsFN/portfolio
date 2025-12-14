# John in Vantaa — Astro diary + portfolio

This is a minimal personal site built with Astro. It includes:
- Diary posts (Markdown) → `src/content/diary`
- Portfolio projects (Markdown) → `src/content/projects`
- Photos in `public/` (GitHub Pages friendly)
- Cross-links between Diary ↔ Portfolio
- Optional `/admin` editor (Decap CMS)

## Run locally
1) Install Node.js LTS
2) In the repo folder:
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
This project is configured for **project pages**:
- Site: `https://chibbsfn.github.io`
- Base: `/portfolio`

Make sure GitHub Pages uses **GitHub Actions**.

### Important
Commit `package-lock.json` (run `npm install` once locally, then commit the lockfile). Without a lockfile, the Astro GitHub Action will fail.

## Where to put photos
Put these files in `public/`:
- `your-photo.jpg`
- `photo1.jpg` ... `photo6.jpg`
- `og-image.jpg`

The URLs become:
- `/portfolio/your-photo.jpg`
- `/portfolio/photo1.jpg`, etc.

## Editing content
### Simple (recommended)
Edit Markdown files directly on GitHub:
- Diary: `src/content/diary/*.md`
- Projects: `src/content/projects/*.md`

### Optional “backend” admin UI
`/admin` uses Decap CMS to commit Markdown back to GitHub.
GitHub Pages cannot run the required OAuth server, so you must host an auth endpoint on Netlify/Vercel (free).
If you don’t want that complexity, use the simple GitHub Markdown editing workflow.
