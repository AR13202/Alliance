import PrivacyPolicyScreen from "@/screens/PrivacyPolicyScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Alliance Engineering Company handles your inquiry details, specifications, and data safety.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyScreen />;
}
