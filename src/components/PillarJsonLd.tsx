import { CONTACT_EMAIL, SITE_URL } from "@/content/pricing";
import {
  SEO_PILLAR_URL,
  seoPillarFaqs,
  seoPillarMeta,
} from "@/content/seo-pillar";

export function PillarJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SEO_PILLAR_URL}#article`,
        headline: seoPillarMeta.h1,
        description: seoPillarMeta.description,
        inLanguage: "en-NZ",
        dateModified: "2026-09-14",
        mainEntityOfPage: SEO_PILLAR_URL,
        image: `${SITE_URL}/do-i-need-a-website/opengraph-image`,
        author: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SEO_PILLAR_URL}#faq`,
        mainEntity: seoPillarFaqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: seoPillarMeta.title,
            item: SEO_PILLAR_URL,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#org`,
        name: "My Brand Studio",
        url: SITE_URL,
        email: CONTACT_EMAIL,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
