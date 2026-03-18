"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ChevronRight, Send } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SpecTable from "@/components/SpecTable";
import { getProductById, getRelatedProducts } from "@/data/products";

export default function ProductDetailScreen({
  productId,
}: {
  productId: string;
}) {
  const product = getProductById(productId);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) {
    return null;
  }

  const related = getRelatedProducts(product.id);
  const allImages = [product.image, ...product.thumbnails];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={allImages[selectedImg]}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImg(index)}
                    className={`h-20 w-20 overflow-hidden rounded-md border transition-all ${
                      selectedImg === index ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
              <p className="leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="space-y-2">
                {product.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {spec}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                >
                  <Send className="h-4 w-4" /> Send an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Specifications</h2>
          <SpecTable specs={product.technicalSpecs} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Common Applications</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.applications.map((application) => (
              <div key={application} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-border bg-card p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-foreground">Interested in this product?</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Contact our sales team for pricing, bulk orders, or custom specifications.
            </p>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Related Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
