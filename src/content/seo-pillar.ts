import { SITE_URL } from "@/content/pricing";
import { lookStills } from "@/content/look-stills";

export const SEO_PILLAR_PATH = "/do-i-need-a-website";
export const SEO_PILLAR_URL = `${SITE_URL}${SEO_PILLAR_PATH}`;

export const seoPillarMeta = {
  title: "Do I need a website, an app, or a brand site?",
  description:
    "Instagram is not a website. Learn when you need a brand site, when an app can wait, and what good enough looks like in 2026. Book a same-day sketch in NZ.",
  ogTitle: "Do I need a website, an app, or a brand site?",
  ogDescription:
    "Most NZ businesses need a website before an app. Instagram helps people you know. A brand site is yours to own and find. Same-day sketch, My Brand Studio.",
  h1: "Do I need a website, an app, or a brand site that actually gets found?",
  keywords: [
    "do I need a website",
    "do I need a website if I have Instagram",
    "website vs app",
    "website vs Linktree",
    "is a Facebook page enough",
    "New Zealand small business website",
    "same-day website sketch NZ",
  ],
};

export const seoPillarFaqs = [
  {
    question: "Do I need a website if I already have Instagram?",
    answer:
      "If you want search, trust, and enquiries from people who do not follow you yet, yes. Keep Instagram for personality and proof. Put hours, services, and an enquiry form on a site you own, and point the bio at that.",
  },
  {
    question: "Should I build a website or an app first?",
    answer:
      "Website first. An app is for repeat use: logins, bookings, points, a hub. Almost every cafe, tradie, clinic, and creator still needs a public page so people can find them and understand the offer. You can add a login-ready shell later without starting in the App Store.",
  },
  {
    question: "Is a Linktree or Facebook page enough?",
    answer:
      "They are extras, not a home. A Linktree is a list of buttons. A Facebook page lives on Facebook. Neither gives you crawlable service pages, a proper enquiry form, or a URL that looks serious on an invoice. Keep them. Do not stop there.",
  },
  {
    question: "What does a good enough website look like in 2026?",
    answer:
      "Fast on a phone, honest about what you do, easy to contact, and possible to edit. One clear job on the home page, real photos, HTTPS, a title that matches the search, and a 40 to 60 word answer at the top of important pages. A one-page site can be enough. A 40-page site with no enquiry path is not.",
  },
  {
    question: "Should I DIY, hire an agency, or use Brand Studio?",
    answer:
      "DIY if you have time and patience. An agency if you want a large custom production and you are ready for those rates. My Brand Studio if you want done-for-you from a look that already feels like a shop, a same-day sketch, optional admin so you own the edits, and care plans that cost less than a typical retainer. We are not a free builder.",
  },
  {
    question: "How does SEO actually work for a new site?",
    answer:
      "You publish a useful, crawlable page for a real question, keep the business facts consistent, and let time and genuine mentions do some of the work. Technical setup helps. Hacks do not. New sites are slow. Anyone selling guaranteed rankings is not someone we will try to out-promise.",
  },
  {
    question: "What do you actually automate?",
    answer:
      "Lead routing, follow-ups, workflow bots, and a light admin console if you want to edit hours yourself. Optional social drafts through Brand Studio Capture. We do not automate fake reviews, directory spam, or AI blog farms.",
  },
  {
    question: "Do I need a .co.nz domain and a Google Business Profile?",
    answer:
      "A .co.nz is a good idea if your buyers are here, but it is not magic. A Google Business Profile is only for a real location or a genuine service-area business. Do not create one to look bigger than you are.",
  },
];

export const pillarLooks = {
  cafe: lookStills.find((s) => s.slug === "look-corner-cafe-menu-hours")!,
  workshop: lookStills.find((s) => s.slug === "look-workshop-tradie-hours")!,
  saas: lookStills.find((s) => s.slug === "look-soft-saas-login")!,
  course: lookStills.find((s) => s.slug === "look-course-loft-login")!,
  awning: lookStills.find((s) => s.slug === "look-awning-high-street")!,
  cream: lookStills.find((s) => s.slug === "look-cream-studio-local")!,
  florist: lookStills.find((s) => s.slug === "look-florist-bench-order")!,
  creator: lookStills.find((s) => s.slug === "look-creator-desk-newsletter")!,
  bakery: lookStills.find((s) => s.slug === "look-bakery-paper-order")!,
  kitchen: lookStills.find((s) => s.slug === "look-kitchen-fire-hospitality")!,
  dtc: lookStills.find((s) => s.slug === "look-dtc-shelf-product")!,
  pet: lookStills.find((s) => s.slug === "look-pet-porch-groomer")!,
};
