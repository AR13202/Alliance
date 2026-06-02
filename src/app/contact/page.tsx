import ContactScreen from "@/screens/ContactScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Alliance Engineering Company — Get a Quote | Chandigarh, India",
  description: "Contact Alliance Engineering for current transformers, control transformers & battery chargers. Request a quote, custom specifications, or bulk procurement inquiry. Plot 417, Industrial Area Phase 2, Chandigarh.",
  openGraph: {
    type: "website",
    title: "Contact Alliance Engineering Company — Get a Quote | Chandigarh, India",
    description: "Contact Alliance Engineering for current transformers, control transformers & battery chargers. Request a quote, custom specifications, or bulk procurement inquiry. Plot 417, Industrial Area Phase 2, Chandigarh.",
    url: "https://www.allianceengineeringco.com/contact",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Alliance Engineering Company — Get a Quote | Chandigarh, India",
    description: "Contact Alliance Engineering for current transformers, control transformers & battery chargers. Request a quote, custom specifications, or bulk procurement inquiry. Plot 417, Industrial Area Phase 2, Chandigarh.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  return <ContactScreen />;
}
