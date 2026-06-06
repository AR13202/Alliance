import ProductsScreen from "@/screens/ProductsScreen";
import type { Metadata } from "next";
import { products } from "@/data/products";

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

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const category = typeof resolvedParams.category === "string" ? resolvedParams.category : undefined;
  const query = typeof resolvedParams.query === "string" ? resolvedParams.query : undefined;

  return <ProductsScreen products={products} initialCategory={category} initialQuery={query} />;
}
