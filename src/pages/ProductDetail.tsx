import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecTable from "@/components/SpecTable";
import ProductCard from "@/components/ProductCard";
import { getProductById, getRelatedProducts } from "@/data/products";
import { ChevronRight, CheckCircle2, Send } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const allImages = [product.image, ...product.thumbnails];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Hero */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={allImages[selectedImg]}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`h-20 w-20 overflow-hidden rounded-md border transition-all ${
                      selectedImg === i ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="space-y-2">
                {product.specs.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {s}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                >
                  <Send className="h-4 w-4" /> Send an Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Technical Specifications</h2>
          <SpecTable specs={product.technicalSpecs} />
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Common Applications</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-border bg-card p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-foreground">Interested in this product?</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Contact our sales team for pricing, bulk orders, or custom specifications.
            </p>
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Related Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
