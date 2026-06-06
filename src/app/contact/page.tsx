import ContactScreen from "@/screens/ContactScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote | Chandigarh",
  description: "Get in touch with Alliance Engineering Company. Request a technical quote, custom product drawings, or submit a bulk procurement inquiry for current/control transformers.",
  openGraph: {
    type: "website",
    title: "Contact Us & Request a Quote | Chandigarh | Alliance Engineering Company",
    description: "Get in touch with Alliance Engineering Company. Request a technical quote, custom product drawings, or submit a bulk procurement inquiry for current/control transformers.",
    url: "https://www.allianceengineeringco.com/contact",
    images: [
      {
        url: "/alliance_factory_og.png",
        width: 1200,
        height: 630,
        alt: "Contact Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Request a Quote | Chandigarh | Alliance Engineering Company",
    description: "Get in touch with Alliance Engineering Company. Request a technical quote, custom product drawings, or submit a bulk procurement inquiry for current/control transformers.",
    images: ["/alliance_factory_og.png"],
  },
};

export default function ContactPage() {
  return <ContactScreen />;
}
