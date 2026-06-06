import AboutScreen from "@/screens/AboutScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our 30+ Years of Manufacturing Expertise",
  description: "Learn about Alliance Engineering Company's history since 1992, our ISO 9001:2015 certified manufacturing facility in Chandigarh, and our dedication to precision instrument and control transformers.",
  openGraph: {
    type: "website",
    title: "About Our 30+ Years of Manufacturing Expertise | Alliance Engineering Company",
    description: "Learn about Alliance Engineering Company's history since 1992, our ISO 9001:2015 certified manufacturing facility in Chandigarh, and our dedication to precision instrument and control transformers.",
    url: "https://www.allianceengineeringco.com/about",
    images: [
      {
        url: "/alliance_factory_og.png",
        width: 1200,
        height: 630,
        alt: "About Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our 30+ Years of Manufacturing Expertise | Alliance Engineering Company",
    description: "Learn about Alliance Engineering Company's history since 1992, our ISO 9001:2015 certified manufacturing facility in Chandigarh, and our dedication to precision instrument and control transformers.",
    images: ["/alliance_factory_og.png"],
  },
};

export default function AboutPage() {
  return <AboutScreen />;
}
