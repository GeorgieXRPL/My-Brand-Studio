import { templates, type TemplateLook } from "@/content/templates";

export type LookStill = {
  slug: string;
  alt: string;
  caption?: string;
  brand: string;
  nav: [string, string];
  headline: string;
  bg: string;
  fg: string;
  muted: string;
};

const palette: Record<string, Pick<LookStill, "bg" | "fg" | "muted">> = {
  night: { bg: "#0b1424", fg: "#e8eef8", muted: "#9ab0c8" },
  ops: { bg: "#10141c", fg: "#d7ffe3", muted: "#7f9a88" },
  space: { bg: "#0a0c14", fg: "#f2e9ff", muted: "#b7a6d4" },
  ink: { bg: "#f6f1e8", fg: "#1a1612", muted: "#6a5f54" },
  split: { bg: "#111111", fg: "#f5f5f5", muted: "#a3a3a3" },
  photo: { bg: "#1a120c", fg: "#ffd166", muted: "#e8c98a" },
  cream: { bg: "#f4efe6", fg: "#2a241c", muted: "#5c5348" },
  brute: { bg: "#ffffff", fg: "#111111", muted: "#444444" },
  kitchen: { bg: "#1a0c08", fg: "#ffb703", muted: "#f6e6c8" },
  saas: { bg: "#eef1f7", fg: "#1b2430", muted: "#5b6778" },
  coast: { bg: "#c8e0dc", fg: "#16332f", muted: "#3d5a55" },
  term: { bg: "#07140f", fg: "#b8f5cc", muted: "#7ddea0" },
  gold: { bg: "#14110c", fg: "#d4b36a", muted: "#e8d9b0" },
  folio: { bg: "#141414", fg: "#ffffff", muted: "#d4d4d4" },
  cafe: { bg: "#3a2418", fg: "#f3e6c8", muted: "#d7c4a0" },
  bakery: { bg: "#e8d0a4", fg: "#3d2a16", muted: "#6b4e2e" },
  dairy: { bg: "#162418", fg: "#f4f0c8", muted: "#c9d6b8" },
  florist: { bg: "#3a2430", fg: "#ffe4ee", muted: "#f0c4d4" },
  awning: { bg: "#1d3557", fg: "#ffffff", muted: "#f6efe3" },
  workshop: { bg: "#c9a46c", fg: "#2a1608", muted: "#4a3018" },
  deli: { bg: "#f2e6d4", fg: "#7a1414", muted: "#8a3030" },
  pet: { bg: "#c8d6c0", fg: "#2a3324", muted: "#4a5840" },
  dtc: { bg: "#f7f4ef", fg: "#111111", muted: "#3a3a3a" },
  spark: { bg: "#fff4e8", fg: "#2b2118", muted: "#7a6554" },
  course: { bg: "#2c1810", fg: "#f4c49a", muted: "#d4a078" },
  vintage: { bg: "#3e242a", fg: "#f6d7c8", muted: "#d4b0a4" },
};

function stillFromTemplate(look: TemplateLook, extras?: Partial<LookStill>): LookStill {
  const colors = palette[look.look] ?? palette.cream;
  return {
    slug: look.id,
    alt: `${look.name} homepage with ${look.nav[0]} and ${look.nav[1]} in the nav and a ${look.headline} heading.`,
    brand: look.brand,
    nav: look.nav,
    headline: look.headline,
    ...colors,
    ...extras,
  };
}

const byId = Object.fromEntries(templates.map((look) => [look.id, look]));

export const lookStills: LookStill[] = [
  stillFromTemplate(byId["corner-cafe"], {
    slug: "look-corner-cafe-menu-hours",
    alt: "Corner-cafe homepage with a warm room photo, menu, hours, and a Come sit heading.",
    caption: "Cafe look. Hours and menu on the page, not only in Stories.",
  }),
  stillFromTemplate(byId.workshop, {
    slug: "look-workshop-tradie-hours",
    alt: "Workshop homepage on plywood grain with Bolt, Book, and Hours in the nav.",
    caption: "Tradie look. A van URL beats a Linktree on the tailgate.",
  }),
  stillFromTemplate(byId["soft-saas"], {
    slug: "look-soft-saas-login",
    alt: "Light product homepage with Product and Login in the nav and a Less clicking heading.",
    caption: "Login on the web first. Native app later, if people actually return.",
  }),
  stillFromTemplate(byId["course-loft"], {
    slug: "look-course-loft-login",
    alt: "Course loft homepage in a terracotta room with Start and Login in the nav.",
    caption: "Hub in the browser. Members can wait for an app.",
  }),
  stillFromTemplate(byId.awning, {
    slug: "look-awning-high-street",
    alt: "High-street shop homepage with a stripe awning, Book and Shop links, and a Walk in heading.",
    caption: "A shopfront URL. Not a stack of bio buttons.",
  }),
  stillFromTemplate(byId["cream-studio"], {
    slug: "look-cream-studio-local",
    alt: "Warm paper local-business homepage with North, Book, and Work links and a Come in heading.",
    caption: "One job on the home page. Reads as a shop, not a startup.",
  }),
  stillFromTemplate(byId["florist-bench"], {
    slug: "look-florist-bench-order",
    alt: "Florist homepage, photo first, with Order and Hours and a Same-day heading.",
    caption: "Enquiry and phone in reach. Same-day, not a contact maze.",
  }),
  stillFromTemplate(byId["creator-desk"], {
    slug: "look-creator-desk-newsletter",
    alt: "Creator desk homepage on warm paper with Notes and Join, one orange spark in the type.",
    caption: "A name and a weekly note. Bio points here, not to another list.",
  }),
  stillFromTemplate(byId["bakery-paper"], {
    slug: "look-bakery-paper-order",
    alt: "Bakery homepage on kraft paper with Today and Order in the nav and a Still warm heading.",
    caption: "Done-for-you from a look, not a blank builder.",
  }),
  stillFromTemplate(byId["kitchen-fire"], {
    slug: "look-kitchen-fire-hospitality",
    alt: "Restaurant homepage with a low ember, Menu and Nights links, and a Book a table heading.",
    caption: "Hours and booking on a page Google can read.",
  }),
  stillFromTemplate(byId["dtc-shelf"], {
    slug: "look-dtc-shelf-product",
    alt: "White product-shop homepage with one object, Shop and Cart links, and a One thing heading.",
    caption: "Sell the object. Search still needs a public page.",
  }),
  stillFromTemplate(byId["pet-porch"], {
    slug: "look-pet-porch-groomer",
    alt: "Sage pet-shop homepage with Book and Shop links and a Good dog heading.",
    caption: "Local service with a calm shopfront, not a toy brand.",
  }),
  ...templates.map((look) => stillFromTemplate(look)),
];

const stillBySlug = new Map(lookStills.map((still) => [still.slug, still]));

export function getLookStill(slug: string) {
  return stillBySlug.get(slug);
}

export function lookStillForTemplate(look: TemplateLook) {
  return stillFromTemplate(look);
}

export function lookImagePath(slug: string) {
  return `/looks/${slug}`;
}
