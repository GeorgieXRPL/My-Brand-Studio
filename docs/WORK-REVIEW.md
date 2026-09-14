# Work review — My Brand Studio site

**Repo:** https://github.com/GeorgieXRPL/My-Brand-Studio  
**Live:** https://mybrandstudio.club  
**Reviewed:** 14 September 2026  
**Vercel project:** `simplifi-labs/my-brand-studio`

This is a review of the work done on the company marketing site (not Brand Studio Capture). Most of it is **live on production**. A lot of it is **not yet committed / pushed to GitHub**. Last git commit on `main` was `2d8bbd4` (template catalog / Work section). Later deploys used `vercel --prod`.

---

## What we shipped

### Templates and homepage catalog

- Restored the Asta / GGSaltaire-style look catalog with left-to-right rows.
- Homepage **Templates** no longer shows Live rooms. Those stay in **Work**.
- `/templates` still shows all groups, including live rooms.
- Awning look contrast fixed (readable chrome, not the old dark-on-stripe “LANE BOOK SHOP” problem).
- HypeMaker removed. Em dashes stripped from site copy. Sketch trial stays off the homepage until an LLM key is set.

### First-visit motion

- Galaxy CSS intro on first visit to `/` only (`localStorage` key `mbs-galaxy-intro`). Skip or Escape.
- Hero then animates (word roll, headline, buttons, orbs).
- `prefers-reduced-motion` turns both off.
- Replay: delete `mbs-galaxy-intro` and refresh `/`.

### SSL, headers, and “safe” forms

- Apex + `www` already had valid Let’s Encrypt HTTPS (good until ~15 Nov 2026). HTTP 308s to HTTPS.
- HSTS, nosniff, referrer-policy, frame ancestors, and Permissions-Policy are on production.
- Local `http://localhost:3000` will still show Chrome “Not secure”. That is expected on HTTP.

### Booking form (email)

**The form path is fixed. Inbox delivery is working via Resend.**

| Before | After |
|--------|--------|
| Opened the visitor’s mail client (`mailto:`) | POST over HTTPS to `/api/book` |
| Contact was `hello@mybrandstudio.app` (domain does not exist) | `hello@mybrandstudio.club` (Google Workspace) |
| No server send | Resend, then FormSubmit fallback |

Details:

- Rate limit: 6 / hour / IP. Validates name, email, brief.
- `RESEND_API_KEY` is set on Vercel **Production**.
- Domain verified on Resend as **`updates.mybrandstudio.club`** (not the apex, so Workspace MX on `hello@` stays intact).
- From address: `bookings@updates.mybrandstudio.club`.
- To: `hello@mybrandstudio.club`. Reply-To: the visitor’s email.
- A production test returned `{ ok: true }` after the From fix.
- Footer `mailto:` is a contact link only, not the form.

### SEO and discoverability

Taken from the pack on `origin/seo/manual-injection-pack` (`docs/brand-studio-seo/`).

**New pillar:** https://mybrandstudio.club/do-i-need-a-website

- Title, meta, H1, canonical, OG, FAQ, and Article JSON-LD from the pack.
- NZ English, live studio CTAs, no waitlist / fake rankings / free builder.
- Look-card stills as real `<img>` tags with descriptive alts.
- Linked from header, footer, and hero.

**Also live:**

- `/templates` has a real H1 (`Looks you can ship.`) and `og:url` on the templates URL.
- `/favicon.ico` returns 200.
- `sitemap.xml` lists `/`, `/templates`, `/do-i-need-a-website` plus look images.
- `robots.txt` allows `/`, blocks `/admin`, `/api/`, `/work-embed`.
- `llms.txt`, site JSON-LD (`WebSite` + `ProfessionalService`), Open Graph image.
- IndexNow key at `/6c8f2a91d4e047b3a1f9c0e8b7d6a5c4.txt`. New URLs were pinged (202).

---

## Live URLs

| URL | Role |
|-----|------|
| https://mybrandstudio.club | Homepage |
| https://mybrandstudio.club/templates | Full look catalog |
| https://mybrandstudio.club/do-i-need-a-website | SEO pillar |
| https://mybrandstudio.club/#same-day | Booking form |
| https://mybrandstudio.club/api/book | Form endpoint |
| https://mybrandstudio.club/sitemap.xml | Sitemap |
| https://mybrandstudio.club/robots.txt | Robots |
| https://app.mybrandstudio.club | Capture app (separate project) |

Contact: **hello@mybrandstudio.club**

---

## What is still yours to do

These need your accounts. They cannot be finished from this machine.

1. **Google Search Console** — add `https://mybrandstudio.club`, submit `https://mybrandstudio.club/sitemap.xml`, then URL Inspection → Request indexing on `/do-i-need-a-website`.
2. **Bing Webmaster** — import from Google or add the sitemap. Optional: `BING_SITE_VERIFICATION` on Vercel.
3. **Search Console / Bing meta tags** — paste codes into `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` if you use the HTML-tag method.
4. **GitHub** — production is ahead of `origin/main`. Commit and push when you want GitHub to match the live site.
5. **Cloudflare** — not set up. Nameservers are still the registrar. Do not flip NS to Cloudflare without a mail plan; Workspace MX can break. Vercel already provides HTTPS/CDN.

---

## Do not break

- **Apex DNS / MX** stays on Google (`smtp.google.com`). Resend lives on the `updates.` subdomain only.
- **Do not** point Cloudflare orange-cloud at the apex without Full (Strict) SSL and a mail plan.
- **Do not** put this work in the Capture repo.
- Same-day offer: free before **10:00am NZ**; after 10am next day free or **$149 NZD** same-day if capacity allows.

---

## Git vs production

Uncommitted / untracked locally (already deployed):

- Booking API, Resend From address, SameDay form
- Galaxy intro + hero motion
- SEO pillar, look stills, sitemap, robots, JSON-LD, favicon
- Security headers, `.env.example`, README SEO notes
- Pack copy under `docs/brand-studio-seo/`

If you want a PR, a clean title is:

`seo: add /do-i-need-a-website pillar + templates/favicon fixes`

Include the booking and motion work in a separate commit if you want a smaller review.
