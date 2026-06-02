import HomeScreen from "@/screens/HomeScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
  openGraph: {
    type: "website",
    title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
    description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
    url: "https://www.allianceengineeringco.com/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
    description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  return <HomeScreen />;
}
