import type { Metadata } from "next";
import { AstroidOpsConsole } from "@/components/admin-mocks/AstroidOpsConsole";

export const metadata: Metadata = {
  title: "Astroid ops mock",
  description: "Token-free mock of the Astroid live ops console. Edits stay on this page.",
  robots: { index: false, follow: false },
};

export default function AstroidOpsMockPage() {
  return <AstroidOpsConsole />;
}
