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

## Branding

| Surface | Name |
|---------|------|
| Company + this site | **My Brand Studio** |
| SaaS app | **Brand Studio Capture** |
