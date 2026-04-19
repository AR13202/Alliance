import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import ProductDetailScreen from "@/screens/ProductDetailScreen";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  if (!getProductById(id)) {
    notFound();
  }

  return <ProductDetailScreen productId={id} />;
}
