import { CONTACT_EMAIL, SITE_URL } from "@/content/pricing";

export function GET() {
  const body = [
    "# My Brand Studio",
    "",
    `> Websites, SEO, social systems, AI automation, and owner-friendly admin backends for business and creator brands in New Zealand.`,
    "",
    `- Home: ${SITE_URL}`,
    `- Templates: ${SITE_URL}/templates`,
    `- Do I need a website?: ${SITE_URL}/do-i-need-a-website`,
    `- Book a same-day draft: ${SITE_URL}/#same-day`,
    `- Email: ${CONTACT_EMAIL}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
