# Session review: My Brand Studio

Review of the work done on this marketing site, now live at [mybrandstudio.club](https://mybrandstudio.club).

## Goal

Turn the company site into a pitch-ready studio: shippable template looks, password-free admin demos, live work embeds, cleaner copy, and the real domain pointed at this repo instead of the old waitlist.

## What shipped

### Templates

A catalog in the same spirit as [ggsaltaire.com/templates](https://www.ggsaltaire.com/templates): boxed rooms, look name, tags, and a short pitch.

- Homepage section (`#templates`) shows the three live rooms
- Full catalog at `/templates`
- Nav and footer link to Templates

**Live rooms (real products we already shipped)**

| Look | Source | Links |
| --- | --- | --- |
| Night hub | GGSaltaire | Live site + mock editor |
| Raid desk | Astroid Club | Live site + mock ops |
| Wish board | Astroid Space | Live site + mock moderation |

**Starter looks for pitches:** Cream shop, Soft product, Workshop, High street, Ink desk, Course loft, Photo folio.

### Admin mocks (no password)

The admin list no longer opens the real gated consoles. Visitors can click through clones:

- `/admin/ggsaltaire` — tagline, socials, projects, weekly schedule. Save / reload / export stay on this page
- `/admin/astroid-ops` — gates, escrow, raids, players, log. Pause and comp wallets are local
- `/admin/astroid-space` — approve / hold stars, wishes, and uploads

Each page has a **Mock** bar: nothing writes to the live sites. Work and template cards use the same mock URLs.

### Work section

- **HypeMaker** removed
- **Astroid Space** added for both Business and Creator
- **Astroid Club** also shows for both audiences
- Every card has the same browser-chrome iframe (`h-80`)
- GGSaltaire and Astroid Club iframe the live sites
- Astroid Space blocks framing (`X-Frame-Options: DENY`), so its iframe loads a same-origin preview at `/work-embed/space`

Iframes mount after hydration so server HTML and the first client paint match. That fixed the Recoverable Error on `/`.

### Sketch

`POST /api/sketch` is still in the repo (template fallback, optional Groq / OpenAI). There was no `.env.local` key, so Sketch is **off the landing page and out of the header** until an LLM key is set.

### Copy

Em dashes (`—`) were removed from user-facing copy. CSS variables like `--accent` were left alone.

### Favicon

Teal **M** on navy at `/icon.svg`, plus an Apple touch icon.

### Domain cutover

`mybrandstudio.club` used to serve the waitlist project (`Brand Studio — Waitlist`).

- New Vercel project: **my-brand-studio** (Simplifi), linked to `GeorgieXRPL/My-Brand-Studio`
- `mybrandstudio.club` and `www.mybrandstudio.club` moved onto that project
- Current local site deployed to production

`app.mybrandstudio.club` was not touched. That is still Brand Studio Capture.

## Homepage order

1. Hero (Business / Creator)
2. Services
3. Admin backends
4. Templates (featured live rooms)
5. Same-day draft
6. Pricing
7. Work (embeds)
8. Brand Studio Capture

## Routes added

| Path | What it is |
| --- | --- |
| `/templates` | Full look catalog |
| `/admin/ggsaltaire` | Content editor mock |
| `/admin/astroid-ops` | Live ops mock |
| `/admin/astroid-space` | Moderation mock |
| `/work-embed/space` | Proxy so Space can sit in an iframe |

## Still open

- Latest UI is live from a local Vercel deploy. Push `main` when you want git deploys to match production
- Sketch stays off the homepage until `GROQ_API_KEY` or `OPENAI_API_KEY` is set
- Astroid Space embed is a same-origin proxy, not a direct iframe of astroid.space
- Same-day form is still mailto unless the book API is wired in the live env
