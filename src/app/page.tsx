import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AdminPitch } from "@/components/AdminPitch";
import { SameDay } from "@/components/SameDay";
import { Pricing } from "@/components/Pricing";
import { Work } from "@/components/Work";
import { CaptureStrip } from "@/components/CaptureStrip";
import { SketchTrial } from "@/components/SketchTrial";
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
        <SameDay />
        <Pricing />
        <Work />
        <CaptureStrip />
        <SketchTrial />
      </main>
      <SiteFooter />
      <StickyBookCta />
    </>
  );
}
