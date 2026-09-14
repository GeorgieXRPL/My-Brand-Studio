import type { MetadataRoute } from "next";
import { lookImagePath, lookStills } from "@/content/look-stills";
import { SITE_URL } from "@/content/pricing";
import { SEO_PILLAR_URL } from "@/content/seo-pillar";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pillarImages = lookStills
    .filter((still) => still.slug.startsWith("look-"))
    .map((still) => `${SITE_URL}${lookImagePath(still.slug)}`);

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/templates`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: SEO_PILLAR_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${SITE_URL}/do-i-need-a-website/opengraph-image`, ...pillarImages],
    },
  ];
}
