import PrivacyPolicyScreen from "@/screens/PrivacyPolicyScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Alliance Engineering Company handles your inquiry details, specifications, and data safety.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.allianceengineeringco.com/privacy-policy",
  },
  keywords: [
    "Current Transformer Manufacturer",
    "Control Transformer Manufacturer",
    "Industrial Battery Charger",
    "Current Transformer India",
  ],
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyScreen />;
}
