import { Suspense } from "react";
import ProductsScreen from "@/screens/ProductsScreen";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c1017]" />}>
      <ProductsScreen />
    </Suspense>
  );
}
