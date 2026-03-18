"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

export default function ProductsScreen() {
  const [active, setActive] = useState("All");
  const filtered = getProductsByCategory(active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Product Categories</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Precision-engineered electrical components built for the future of power infrastructure.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === category
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filtered.length} of {filtered.length} products
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
