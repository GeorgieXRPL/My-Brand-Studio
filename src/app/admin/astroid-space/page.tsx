import type { Metadata } from "next";
import { AstroidSpaceModeration } from "@/components/admin-mocks/AstroidSpaceModeration";

export const metadata: Metadata = {
  title: "Astroid Space moderation mock",
  description: "Password-free mock of the Astroid Space moderation queue. Edits stay on this page.",
  robots: { index: false, follow: false },
};

export default function AstroidSpaceMockPage() {
  return <AstroidSpaceModeration />;
}
