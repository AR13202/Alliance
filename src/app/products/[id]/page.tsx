import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import ProductDetailScreen from "@/screens/ProductDetailScreen";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  if (!getProductById(params.id)) {
    notFound();
  }

  return <ProductDetailScreen productId={params.id} />;
}
