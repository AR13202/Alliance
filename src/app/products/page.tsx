import { Suspense } from "react";
import ProductsScreen from "@/screens/ProductsScreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Products — Transformers, Battery Chargers & Meters | Alliance Engineering",
  description: "Browse Alliance Engineering's full product range: LT current transformers, control transformers, industrial battery chargers, voltage stabilizers, variacs and panel meters. IS & IEC compliant. Chandigarh, India.",
  openGraph: {
    type: "website",
    title: "Electrical Products — Transformers, Battery Chargers & Meters | Alliance Engineering",
    description: "Browse Alliance Engineering's full product range: LT current transformers, control transformers, industrial battery chargers, voltage stabilizers, variacs and panel meters. IS & IEC compliant. Chandigarh, India.",
    url: "https://www.allianceengineeringco.com/products",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Products — Transformers, Battery Chargers & Meters | Alliance Engineering",
    description: "Browse Alliance Engineering's full product range: LT current transformers, control transformers, industrial battery chargers, voltage stabilizers, variacs and panel meters. IS & IEC compliant. Chandigarh, India.",
    images: ["/logo.png"],
  },
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c1017]" />}>
      <ProductsScreen />
    </Suspense>
  );
}
