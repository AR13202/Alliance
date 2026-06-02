import ClientScreen from "@/screens/ClientScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Trusted B2B Clients — Power Grid, PSU & Industrial Partners | Alliance Engineering",
  description: "Alliance Engineering's clients include leading PSUs, Indian Railways, state electricity boards, switchgear manufacturers, and heavy industries across India.",
  openGraph: {
    type: "website",
    title: "Our Trusted B2B Clients — Power Grid, PSU & Industrial Partners | Alliance Engineering",
    description: "Alliance Engineering's clients include leading PSUs, Indian Railways, state electricity boards, switchgear manufacturers, and heavy industries across India.",
    url: "https://www.allianceengineeringco.com/client",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Clients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Trusted B2B Clients — Power Grid, PSU & Industrial Partners | Alliance Engineering",
    description: "Alliance Engineering's clients include leading PSUs, Indian Railways, state electricity boards, switchgear manufacturers, and heavy industries across India.",
    images: ["/logo.png"],
  },
};

export default function ClientPage() {
  return <ClientScreen />;
}
