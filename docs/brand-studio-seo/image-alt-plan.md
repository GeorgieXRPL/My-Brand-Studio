# Image alt plan — `/do-i-need-a-website`

Follow [Google image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) and [Google’s alt-text guidance](https://developers.google.com/tech-writing/accessibility/self-study/write-alt-text).

## Rules (do not skip)

- Use a real HTML `img` (or `picture` + fallback `img` with `src`). Google does not index CSS background images.
- Filenames: short and descriptive (`look-corner-cafe-menu-hours.webp`), never `IMG_0234.jpg` or `image1.png`.
- Alt: a concise substitute for the image. Describe what the look-card *shows in this page’s context*. One phrase or two short sentences. Capitalise the first word. End with a period.
- Do **not** start with “Image of” or “Photo of”.
- Do **not** stuff keywords (`cafe website NZ SEO cafe website Auckland best cafe website`). Google treats that as spammy alt.
- Place each look-card next to the paragraph it illustrates (Instagram section → cafe/tradie cards; website vs app → login/hub card; creator section → creator desk). Nearby caption + body copy do the extra explaining.
- Keep alt under ~125 characters when you can; never pad to hit a number.
- Decorative rules, grain overlays, and repeated logos: `alt=""`.
- Preferred page image (`og:image` / `primaryImageOfPage`): a representative look (cafe or tradie), not the wordmark, not an extreme banner crop.
- Formats: WebP or AVIF with a JPEG/PNG fallback. Filename extension should match the file type.
- One stable URL per image across the site so Google can cache it.

**Bad:** `alt="website website New Zealand SEO brand studio cafe website"`  
**Better:** `alt="Cafe homepage."`  
**Best:** `alt="Corner-cafe homepage with mill photo, menu, hours, and a Come sit heading."`

---

## Look cards to use on this pillar

Use existing studio looks from [mybrandstudio.club](https://mybrandstudio.club). Do not invent client photos or star ratings on the cards.

| Section on page | Filename | Alt text | Nearby caption (visible) |
| --- | --- | --- | --- |
| Instagram / local proof | `look-corner-cafe-menu-hours.webp` | Corner-cafe homepage with a warm room photo, menu, hours, and a Come sit heading. | Cafe look. Hours and menu on the page, not only in Stories. |
| Instagram / tradie | `look-workshop-tradie-hours.webp` | Workshop homepage on plywood grain with Bolt, Book, and Hours in the nav. | Tradie look. A van URL beats a Linktree on the tailgate. |
| Website vs app | `look-soft-saas-login.webp` | Light product homepage with Product and Login in the nav and a Less clicking heading. | Login on the web first. Native app later, if people actually return. |
| Website vs app / hub | `look-course-loft-login.webp` | Course loft homepage in a terracotta room with Start and Login in the nav. | Hub in the browser. Members can wait for an app. |
| Linktree contrast | `look-awning-high-street.webp` | High-street shop homepage with a stripe awning, Book and Shop links, and a Walk in heading. | A shopfront URL. Not a stack of bio buttons. |
| Good enough 2026 | `look-cream-studio-local.webp` | Warm paper local-business homepage with North, Book, and Work links and a Come in heading. | One job on the home page. Reads as a shop, not a startup. |
| Florist / enquiry | `look-florist-bench-order.webp` | Florist homepage, photo first, with Order and Hours and a Same-day heading. | Enquiry and phone in reach. Same-day, not a contact maze. |
| Creator | `look-creator-desk-newsletter.webp` | Creator desk homepage on warm paper with Notes and Join, one orange spark in the type. | A name and a weekly note. Bio points here, not to another list. |
| DIY vs studio | `look-bakery-paper-order.webp` | Bakery homepage on kraft paper with Today and Order in the nav and a Still warm heading. | Done-for-you from a look, not a blank builder. |
| NZ / hospitality | `look-kitchen-fire-hospitality.webp` | Restaurant homepage with a low ember, Menu and Nights links, and a Book a table heading. | Hours and booking on a page Google can read. |
| Online shop (optional) | `look-dtc-shelf-product.webp` | White product-shop homepage with one object, Shop and Cart links, and a One thing heading. | Sell the object. Search still needs a public page. |
| Pets (optional) | `look-pet-porch-groomer.webp` | Sage pet-shop homepage with Book and Shop links and a Good dog heading. | Local service with a calm shopfront, not a toy brand. |

---

## Extra assets (if used)

| Asset | Filename | Alt | Notes |
| --- | --- | --- | --- |
| Same-day sketch path | `diagram-same-day-sketch-nz.webp` | Three-step path: book before 10am NZ, 30 to 45 minute call, one-page draft the same day. | Short alt; put the full steps in the body (already in the CTA). |
| Package strip (Starter / Business / Custom) | `packages-starter-business-custom.webp` | Three package tiles: Starter Template, Business Site, and Custom quoted per scope. | Do not bake fake prices into the image. |
| Admin mock (GGSaltaire) | `admin-ggsaltaire-schedule.webp` | Content editor showing tagline, socials, and a weekly schedule. | Only if the paragraph is about owner-editable admin. |
| OG / Discover preferred image | `og-do-i-need-a-website-cafe.webp` | (Set via `og:image`, not as visible alt on the article hero if the hero is the same file: reuse cafe alt above.) | Avoid the logo. Avoid a skinny banner. |

---

## Placement checklist before publish

- [ ] Each look-card sits in the section it illustrates, with a one-line visible caption.
- [ ] Hero / OG image is a look, not the wordmark.
- [ ] No alt repeats the H1 plus a keyword pile.
- [ ] Repeated decorative marks use `alt=""`.
- [ ] Image sitemap includes these URLs if they are not already discoverable from HTML `img src`.
- [ ] Captions do not claim rankings, traffic, or star ratings.
