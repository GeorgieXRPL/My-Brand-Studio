import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Templates } from "@/components/Templates";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBookCta } from "@/components/StickyBookCta";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Looks you can ship. Live rooms plus the studio, high street, and online catalog for client pitches.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Looks you can ship",
    description:
      "Live rooms plus the studio, high street, and online catalog for client pitches.",
    url: "/templates",
    type: "website",
  },
};

export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Templates />
      </main>
      <SiteFooter />
      <StickyBookCta />
    </>
  );
}
