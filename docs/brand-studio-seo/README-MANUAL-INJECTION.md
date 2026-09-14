# Brand Studio SEO — manual injection pack

**Repo:** https://github.com/GeorgieXRPL/My-Brand-Studio  
**Live site:** https://mybrandstudio.club  
**Not Capture:** do **not** put this in `My-Brand-Studio-Ca-ture`.

Cursor cloud agents cannot see this repo yet. Use this folder to open a PR yourself.

## Goal

Ship a search pillar page that answers “do I need a website / app / brand site?” and points to same-day sketch booking.

## New route

| Item | Value |
|------|--------|
| Path | `/do-i-need-a-website` |
| Canonical | `https://mybrandstudio.club/do-i-need-a-website` |
| Lang | `en-NZ` |

### Meta (from `meta.json`)

- **Title (45):** Do I need a website, an app, or a brand site?
- **Meta description (154):** Instagram is not a website. Learn when you need a brand site, when an app can wait, and what good enough looks like in 2026. Book a same-day sketch in NZ.
- **OG title:** same as title
- **OG description:** Most NZ businesses need a website before an app. Instagram helps people you know. A brand site is yours to own and find. Same-day sketch, My Brand Studio.
- **H1:** Do I need a website, an app, or a brand site that actually gets found?

Body copy: `do-i-need-a-website.md` (~3.9k words). Keep YAML front matter or map fields into your Next/meta helpers.

## Rules (do not break)

- Live studio positioning — packages, same-day sketch NZ, enquiry/GST as on the live site
- No waitlist / “coming soon” rewrite
- No fake free builder, no invented Google rankings / stars / GBP claims
- NZ English

## Also in the same PR (queued)

1. **`/templates`** — add a real H1; set `og:url` to the templates URL (not homepage)
2. **`favicon.ico`** — stop 404 on `/favicon.ico`
3. **Look cards** — where previews are CSS-only, prefer real `<img>` + descriptive alts (see `image-alt-plan.md`)
4. **Sitemap** — include `/do-i-need-a-website` (+ templates if missing)

## Clip scripts

Six ~30s scripts live in `meta.json` → `clipScripts`. Spoken first lines match FAQ H2s. Optional for Salt / shorts; not required for the page to ship.

## Suggested PR title

`seo: add /do-i-need-a-website pillar + templates/favicon fixes`

## Suggested PR body

```markdown
## Summary
- Add `/do-i-need-a-website` SEO pillar (NZ, live studio CTAs)
- Fix `/templates` H1 + og:url
- Favicon + look-card image alt plan where applicable
- Expand sitemap

## Test plan
- [ ] `/do-i-need-a-website` renders with correct title/meta/canonical
- [ ] FAQ section present; CTA books same-day sketch (not waitlist)
- [ ] `/templates` has H1; OG points at templates URL
- [ ] `/favicon.ico` 200
- [ ] Sitemap lists new URL
```

## Files in this pack

- `README-MANUAL-INJECTION.md` — this file
- `do-i-need-a-website.md` — full pillar draft
- `meta.json` — title/meta/keywords + clip scripts
- `image-alt-plan.md` — filename + alt guidance for looks / OG

## After merge

Submit the new URL in Google Search Console (URL Inspection → Request indexing). Keep app subdomain noindex if it still is.
