# My Brand Studio (company site)

Marketing site for **My Brand Studio**. Websites, SEO, social, AI automation, and admin backends for Business and Creator audiences.

The SaaS product **Brand Studio Capture** lives in a separate repo (`Brand building schedule`) and is only linked from this site.

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Same-day drafts

- **Free** if booked before **10:00am NZ**
- After 10am: next day free, or **$149 NZD** same-day if capacity allows

## Templates

`/templates` is the look catalog. Live rooms (GGSaltaire, Astroid ops, Astroid Space) plus the studio, high street, and online rooms from the Asta templates tab.

## Sketch trial

`POST /api/sketch` generates a one-page HTML preview. It is off the landing page until an LLM key is set.

- Works without an API key (template fallback)
- Optional: set `GROQ_API_KEY` or `OPENAI_API_KEY` in `.env.local` for LLM sketches
- Rate limited (~8 / hour / IP)

## Deploy

Connect this folder as its own Vercel project (do not share the Capture app project).

```bash
npx vercel
```

## SEO

Public routes are `/`, `/templates`, and `/do-i-need-a-website`. The site ships:

- `robots.txt` (blocks `/admin`, `/api/`, `/work-embed`)
- `sitemap.xml` (includes `/do-i-need-a-website`)
- `llms.txt`
- JSON-LD (`WebSite` + `ProfessionalService`)
- Open Graph image at `/opengraph-image`
- IndexNow key at `/6c8f2a91d4e047b3a1f9c0e8b7d6a5c4.txt`

Submit `https://mybrandstudio.club/sitemap.xml` in Google Search Console and Bing Webmaster. Optional env vars: `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`.

## Branding

| Surface | Name |
|---------|------|
| Company + this site | **My Brand Studio** |
| SaaS app | **Brand Studio Capture** |
