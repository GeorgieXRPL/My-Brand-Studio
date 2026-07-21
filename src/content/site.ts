export type Audience = "business" | "creator";

export type PortfolioItem = {
  id: string;
  name: string;
  blurb: string;
  url: string;
  adminUrl?: string;
  tags: Audience[];
};

export const portfolio: PortfolioItem[] = [
  {
    id: "ggsaltaire",
    name: "GGSaltaire",
    blurb:
      "Creator hub with live-editable schedule, socials, and projects — password admin so the owner ships updates without a developer.",
    url: "https://www.ggsaltaire.com",
    adminUrl: "https://www.ggsaltaire.com/admin",
    tags: ["creator", "business"],
  },
  {
    id: "astroid-space",
    name: "Astroid Space",
    blurb:
      "Branded experience site with moderation admin for stars, wishes, and community uploads.",
    url: "https://astroid.space",
    adminUrl: "https://astroid.space/admin",
    tags: ["creator"],
  },
  {
    id: "astroid-club",
    name: "Astroid Club Admin",
    blurb:
      "Live ops console for raids, payouts, gates, and player tooling — product-grade backend control.",
    url: "https://astroid.club",
    adminUrl: "https://gw.astroid.club/admin",
    tags: ["business"],
  },
  {
    id: "hypemaker",
    name: "HypeMaker",
    blurb: "Sharp conversion landing with clear offer and contact path.",
    url: "https://hypemaker.io",
    tags: ["business"],
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
      "Upgrade tired SMB and startup sites into clear, conversion-ready pages — with optional light admin so you own the edits.",
    creator:
      "Colourful, interactive hubs for your following — logins, points, schedules, and community energy that matches your vibe.",
  },
  {
    id: "admin",
    title: "Admin backends",
    business:
      "Own your content and ops console, or delegate care for a fraction of typical agency retainers.",
    creator:
      "Ship schedule, links, and drops yourself — same admin patterns we built for creator hubs and live communities.",
  },
  {
    id: "seo",
    title: "SEO",
    business:
      "Technical foundations and steady keyword work so local and niche buyers can find you.",
    creator:
      "Make your hub discoverable — titles, structure, and content rhythm that feed the algorithm without sounding corporate.",
  },
  {
    id: "social",
    title: "Social & content",
    business:
      "Consistent presence without hiring a full marketing desk — optional pairing with Brand Studio Capture.",
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
      "Revamps, SEO, and ops consoles for SMBs and startups — manage yourself or delegate for less than agency rates.",
    secondaryCta: "See admin demos",
  },
  creator: {
    headline: "Hubs your community actually wants to hang in.",
    support:
      "Interactive sites, logins, points, and playful builds — plus the admin to keep schedule and drops fresh.",
    secondaryCta: "See community builds",
  },
} as const;
