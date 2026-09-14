import type { Metadata } from "next";
import { IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { MockBanner } from "@/components/admin-mocks/MockBanner";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gg-body",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-gg-display",
});

export default function AdminMockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${ibm.variable} ${serif.variable} ${ibm.className} min-h-screen bg-[#071018]`}>
      <MockBanner />
      {children}
    </div>
  );
}
