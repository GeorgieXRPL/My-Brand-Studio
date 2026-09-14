import type { Metadata } from "next";
import { GgsaltaireEditor } from "@/components/admin-mocks/GgsaltaireEditor";

export const metadata: Metadata = {
  title: "GGSaltaire editor mock",
  description: "Password-free mock of the GGSaltaire content editor. Edits stay on this page.",
  robots: { index: false, follow: false },
};

export default function GgsaltaireAdminMockPage() {
  return <GgsaltaireEditor />;
}
