import ProductsScreen from "@/screens/ProductsScreen";
import type { Metadata } from "next";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Industrial Electrical Products Catalog",
  description: "Explore our B2B electrical product catalog including low-voltage current transformers, custom control transformers, automatic Float-Cum-Boost battery chargers, and servo stabilizers. Manufactured by Alliance Engineering Company.",
  openGraph: {
    type: "website",
    title: "Industrial Electrical Products Catalog | Alliance Engineering Company",
    description: "Explore our B2B electrical product catalog including low-voltage current transformers, custom control transformers, automatic Float-Cum-Boost battery chargers, and servo stabilizers. Manufactured by Alliance Engineering Company.",
    url: "https://www.allianceengineeringco.com/products",
    images: [
      {
        url: "/alliance_factory_og.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Electrical Products Catalog | Alliance Engineering Company",
    description: "Explore our B2B electrical product catalog including low-voltage current transformers, custom control transformers, automatic Float-Cum-Boost battery chargers, and servo stabilizers. Manufactured by Alliance Engineering Company.",
    images: ["/alliance_factory_og.png"],
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
