import type { Metadata, Viewport } from "next";
import { Syne, Figtree } from "next/font/google";
import { AudienceProvider } from "@/lib/audience";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { SITE_URL } from "@/content/pricing";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0c1218",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "My Brand Studio · Websites, SEO, admin backends",
    template: "%s · My Brand Studio",
  },
  description:
    "My Brand Studio builds websites, SEO, social systems, AI automation, and owner-friendly admin backends for business and creator brands. Free same-day draft before 10am NZ.",
  applicationName: "My Brand Studio",
  authors: [{ name: "My Brand Studio", url: SITE_URL }],
  creator: "My Brand Studio",
  publisher: "My Brand Studio",
  category: "technology",
  keywords: [
    "website design New Zealand",
    "SEO",
    "admin backends",
    "creator websites",
    "same-day website draft",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-icon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "My Brand Studio",
    description:
      "Websites, growth, and admin backends for Business and Creator brands. Free same-day draft before 10am NZ.",
    type: "website",
    url: SITE_URL,
    siteName: "My Brand Studio",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Brand Studio",
    description:
      "Websites, growth, and admin backends for Business and Creator brands.",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NZ"
      data-audience="business"
      suppressHydrationWarning
      className={`${syne.variable} ${figtree.variable} h-full`}
    >
      <body className="min-h-full antialiased audience-fade">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=window.matchMedia("(prefers-reduced-motion: reduce)");if(m.matches)return;var p=location.pathname;if(p!=="/"&&p!=="")return;if(!localStorage.getItem("mbs-galaxy-intro"))document.documentElement.dataset.galaxy="pending";}catch(e){}})();`,
          }}
        />
        <SiteJsonLd />
        <AudienceProvider>{children}</AudienceProvider>
      </body>
    </html>
  );
}
