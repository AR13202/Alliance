import TermsOfServiceScreen from "@/screens/TermsOfServiceScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the B2B engineering specifications, quotations validity, and purchasing terms for Alliance Engineering Company.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.allianceengineeringco.com/terms-of-service",
  },
  keywords: [
    "Current Transformer Manufacturer",
    "Control Transformer Manufacturer",
    "Industrial Battery Charger",
    "Current Transformer India",
  ],
};

export default function TermsOfServicePage() {
  return <TermsOfServiceScreen />;
}
