import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      {/* Primary Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Primary Categories</h2>
              <p className="mt-2 text-muted-foreground">Explore our most popular product categories</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline">
              View all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Current Transformers", img: "https://placehold.co/800x400/111827/06b6d4?text=Current+Transformers" },
              { title: "Monitoring & Control", img: "https://placehold.co/800x400/111827/06b6d4?text=Monitoring+%26+Control" },
            ].map((cat) => (
              <Link
                key={cat.title}
                to="/products"
                className="group relative overflow-hidden rounded-lg border border-border"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <Link to="/products" className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-xl border border-border bg-gradient-to-r from-primary/10 to-card p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold text-foreground">Looking for a Custom Solution?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Our engineering team can design and manufacture custom electrical components tailored to your exact specifications.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
