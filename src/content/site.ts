export type Audience = "business" | "creator";

export type PortfolioItem = {
  id: string;
  name: string;
  blurb: string;
  url: string;
  adminUrl?: string;
  tags: Audience[];
  embedSrc: string;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "ggsaltaire",
    name: "GGSaltaire",
    blurb:
      "Creator hub with live-editable schedule, socials, and projects. Password admin so the owner ships updates without a developer.",
    url: "https://www.ggsaltaire.com",
    adminUrl: "/admin/ggsaltaire",
    tags: ["creator", "business"],
    embedSrc: "https://www.ggsaltaire.com",
  },
  {
    id: "astroid-space",
    name: "Astroid Space",
    blurb:
      "Branded experience site with moderation admin for stars, wishes, and community uploads.",
    url: "https://www.astroid.space",
    adminUrl: "/admin/astroid-space",
    tags: ["creator", "business"],
    embedSrc: "/work-embed/space",
  },
  {
    id: "astroid-club",
    name: "Astroid Club",
    blurb:
      "Holder hub with a live ops console for raids, payouts, gates, and player tooling.",
    url: "https://astroid.club",
    adminUrl: "/admin/astroid-ops",
    tags: ["business", "creator"],
    embedSrc: "https://astroid.club",
  },
  {
    id: "card-seat",
    name: "Card Seat",
    blurb:
      "Community game where Grok turns an X account's public posts into a Magic-like creature card. Prompt-first. No X API.",
    url: "https://cardseat.com",
    tags: ["business", "creator"],
    embedSrc: "https://cardseat.com",
  },
];

export type Service = {
  id: string;
  title: string;
  business: string;
  creator: string;
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Website builds & revamps",
    business:
      "Upgrade tired SMB and startup sites into clear, conversion-ready pages, with optional light admin so you own the edits.",
    creator:
      "Colourful, interactive hubs for your following: logins, points, schedules, and community energy that matches your vibe.",
  },
  {
    id: "admin",
    title: "Admin backends",
    business:
      "Own your content and ops console, or delegate care for a fraction of typical agency retainers.",
    creator:
      "Ship schedule, links, and drops yourself. Same admin patterns we built for creator hubs and live communities.",
  },
  {
    id: "seo",
    title: "SEO",
    business:
      "Technical foundations and steady keyword work so local and niche buyers can find you.",
    creator:
      "Make your hub discoverable. Titles, structure, and content rhythm that feed the algorithm without sounding corporate.",
  },
  {
    id: "social",
    title: "Social & content",
    business:
      "Consistent presence without hiring a full marketing desk. Optional pairing with Brand Studio Capture.",
    creator:
      "Keep the feed alive in your voice. Pair agency help with Brand Studio Capture when you want draft velocity on your phone.",
  },
  {
    id: "ai",
    title: "AI automation",
    business:
      "Lead routing, follow-ups, and workflow bots that cut admin hours.",
    creator:
      "Automate the boring ops around drops, waitlists, and community replies so you stay on-camera.",
  },
];

export const copy = {
  business: {
    headline: "Sites and backends that run your business.",
    support:
      "Revamps, SEO, and ops consoles for SMBs and startups. Manage yourself or delegate for less than agency rates.",
    secondaryCta: "See admin demos",
  },
  creator: {
    headline: "Hubs your community actually wants to hang in.",
    support:
      "Interactive sites, logins, points, and playful builds, plus the admin to keep schedule and drops fresh.",
    secondaryCta: "See community builds",
  },
} as const;
