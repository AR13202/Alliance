import TermsOfServiceScreen from "@/screens/TermsOfServiceScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the B2B engineering specifications, quotations validity, and purchasing terms for Alliance Engineering Company.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceScreen />;
}
