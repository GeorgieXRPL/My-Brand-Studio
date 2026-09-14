import { CONTACT_EMAIL, SITE_URL } from "@/content/pricing";

export const INDEXNOW_KEY = "6c8f2a91d4e047b3a1f9c0e8b7d6a5c4";

export const indexablePaths = ["/", "/templates", "/do-i-need-a-website"] as const;

export const indexableUrls = indexablePaths.map((path) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`,
);

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "My Brand Studio",
      description:
        "Websites, SEO, social systems, AI automation, and owner-friendly admin backends for business and creator brands.",
      inLanguage: "en-NZ",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#org`,
      name: "My Brand Studio",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      image: `${SITE_URL}/opengraph-image`,
      areaServed: { "@type": "Country", name: "New Zealand" },
      priceRange: "$$",
      serviceType: [
        "Website design",
        "SEO",
        "Admin backends",
        "AI automation",
      ],
      hasPart: {
        "@type": "Article",
        url: `${SITE_URL}/do-i-need-a-website`,
        name: "Do I need a website, an app, or a brand site?",
      },
    },
  ],
};
