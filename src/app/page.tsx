import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AdminPitch } from "@/components/AdminPitch";
import { Templates } from "@/components/Templates";
import { SameDay } from "@/components/SameDay";
import { Pricing } from "@/components/Pricing";
import { Work } from "@/components/Work";
import { CaptureStrip } from "@/components/CaptureStrip";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyBookCta } from "@/components/StickyBookCta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <AdminPitch />
        <Templates featured />
        <SameDay />
        <Pricing />
        <Work />
        <CaptureStrip />
      </main>
      <SiteFooter />
      <StickyBookCta />
    </>
  );
}
