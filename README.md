# Shmully 2026 — Vail, CO 🐷⛳

Mobile-first site for the 2026 Vail Shmully (Jul 30 – Aug 2). Vite + React, no backend.

## Editing content

**Everything editable lives in one file: `src/data/content.ts`** — roster, TBD pigs,
beds, agenda, arrivals, money, rules, glossary, and the scoreboard fallback data.
Update it and redeploy; no component changes needed.

## Going live with the scoreboard

1. In the Google Sheet: `File → Share → Publish to web`, pick the scores tab, choose **CSV**.
2. Paste the URL into `SCORES_CSV_URL` in `src/data/content.ts`.
3. The page polls every 60s. Expected CSV columns (header row first):

   ```
   Type,Day,Name,H1,H2,...,H18,Total
   TEAM,1,Milk Bag Boys,9,8,10,...,      ← team hole-by-hole scores (blank = not played)
   TALLY,,Carlos,,,...,10                ← shmully count per player (Total column)
   ```

Until the URL is set, the site shows clearly-labeled sample data.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the build locally
```

## Deploy

```bash
npx vercel --prod          # Vercel (vercel.json handles SPA rewrites)
# or Netlify (public/_redirects handles SPA rewrites):
npx netlify deploy --prod --dir=dist
```
