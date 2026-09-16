export type WebsitePackage = {
  id: string;
  name: string;
  priceLabel: string;
  bestFor: string;
  includes: string[];
  highlightFor: Array<"business" | "creator">;
};

export type Addon = {
  id: string;
  name: string;
  priceLabel: string;
  notes: string;
};

export const SAME_DAY = {
  freeBeforeHourNz: 10,
  paidSameDayNzd: 149,
  timezone: "Pacific/Auckland",
  disclaimer:
    "Same-day drafts cover a 1-page concept after a short discovery call. Final page count and complexity are confirmed on the call.",
} as const;

export const websitePackages: WebsitePackage[] = [
  {
    id: "same-day",
    name: "Same-Day Sketch",
    priceLabel: "Free before 10am NZ · else $149 same-day or next day free",
    bestFor: "Lead magnet / qualifying call",
    includes: [
      "30–45 min discovery session",
      "1-page draft concept the same day (when booked before 10am NZ)",
      "Credit toward Starter or Custom if you proceed within 14 days",
    ],
    highlightFor: ["business", "creator"],
  },
  {
    id: "starter",
    name: "Starter Template",
    priceLabel: "$1,200 – $1,800 NZD",
    bestFor: "SMB / creator one-pager",
    includes: [
      "Template-based site with your brand colours and fonts",
      "Contact / CTA setup",
      "Basic SEO + deploy",
      "One revision round",
    ],
    highlightFor: [],
  },
  {
    id: "business",
    name: "Business Site",
    priceLabel: "$3,500 – $5,500 NZD",
    bestFor: "Revamp / multi-page SMB",
    includes: [
      "Up to 5 pages",
      "SEO setup, forms, analytics",
      "Lightweight admin (GGSaltaire-style) or CMS handoff",
    ],
    highlightFor: ["business"],
  },
  {
    id: "creator",
    name: "Creator Community",
    priceLabel: "$4,500 – $8,000 NZD",
    bestFor: "Interactive / fandom hubs",
    includes: [
      "Login-ready shell",
      "Points or simple rewards UI",
      "Schedule / hub patterns",
      "Playful motion. Games and economy scoped separately",
    ],
    highlightFor: ["creator"],
  },
  {
    id: "custom",
    name: "Custom + Admin",
    priceLabel: "$8,000 – $18,000+ NZD",
    bestFor: "Product-grade builds",
    includes: [
      "Custom UX and auth",
      "Admin console",
      "Integrations (payments, chain, live ops)",
      "Quoted per scope",
    ],
    highlightFor: [],
  },
];

export const addons: Addon[] = [
  {
    id: "seo",
    name: "SEO starter",
    priceLabel: "$600 setup + $350/mo",
    notes: "Tech SEO + light monthly content / keywords",
  },
  {
    id: "social",
    name: "Social content",
    priceLabel: "$500 – $1,200/mo",
    notes: "Pairs well with Brand Studio Capture for draft velocity",
  },
  {
    id: "ai",
    name: "AI automation",
    priceLabel: "From $800 setup + $200/mo",
    notes: "Workflows, bots, lead routing",
  },
  {
    id: "admin-care",
    name: "Admin care",
    priceLabel: "$150 – $400/mo",
    notes: "Hosting, edits, ops. Manage yourself or delegate for a fraction of agency rates",
  },
];

export const capturePlans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    detail: "10 drafts / month · Share everywhere",
  },
  {
    id: "creator",
    name: "Creator",
    price: "$19/mo",
    detail: "200 drafts · Direct Post · content schedule",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$49/mo",
    detail: "1,000 drafts · Agents · self-hosted hub",
  },
] as const;

export const CAPTURE_APP_URL = "https://app.mybrandstudio.club";
export const SITE_URL = "https://mybrandstudio.club";
export const CONTACT_EMAIL = "hello@mybrandstudio.club";
export const CONTACT_PHONE = "+64 22 504 9628";
export const CONTACT_PHONE_TEL = "tel:+64225049628";
/** Same-day HTTPS booking form. Override with NEXT_PUBLIC_BOOKING_URL if needed. */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "/#same-day";
export const BOOKING_FROM_EMAIL = "bookings@updates.mybrandstudio.club";
