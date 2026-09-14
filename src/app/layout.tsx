import type { Metadata, Viewport } from "next";
import { Syne, Figtree } from "next/font/google";
import { AudienceProvider } from "@/lib/audience";
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
  title: {
    default: "My Brand Studio · Websites, SEO, admin backends",
    template: "%s · My Brand Studio",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
  },
  description:
    "My Brand Studio builds websites, SEO, social systems, AI automation, and owner-friendly admin backends for business and creator brands. Free same-day draft before 10am NZ. Brand Studio Capture is our SaaS product.",
  openGraph: {
    title: "My Brand Studio",
    description:
      "Websites, growth, and admin backends for Business and Creator brands. Free same-day draft before 10am NZ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-audience="business"
      suppressHydrationWarning
      className={`${syne.variable} ${figtree.variable} h-full`}
    >
      <body className="min-h-full antialiased audience-fade">
        <AudienceProvider>{children}</AudienceProvider>
      </body>
    </html>
  );
}
