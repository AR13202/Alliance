import AboutScreen from "@/screens/AboutScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Alliance Engineering Company — 30+ Years of Transformer Manufacturing, Chandigarh",
  description: "Established in 1992 in Chandigarh, Alliance Engineering is an ISO 9001:2015 certified, GeM-registered manufacturer of instrument & control transformers trusted by PSUs, Railways and heavy industry across India.",
  openGraph: {
    type: "website",
    title: "About Alliance Engineering Company — 30+ Years of Transformer Manufacturing, Chandigarh",
    description: "Established in 1992 in Chandigarh, Alliance Engineering is an ISO 9001:2015 certified, GeM-registered manufacturer of instrument & control transformers trusted by PSUs, Railways and heavy industry across India.",
    url: "https://www.allianceengineeringco.com/about",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Alliance Engineering Company — 30+ Years of Transformer Manufacturing, Chandigarh",
    description: "Established in 1992 in Chandigarh, Alliance Engineering is an ISO 9001:2015 certified, GeM-registered manufacturer of instrument & control transformers trusted by PSUs, Railways and heavy industry across India.",
    images: ["/logo.png"],
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
