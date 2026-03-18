import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://placehold.co/1920x800/0a0f1a/111827?text=Industrial+Facility')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Powering Industrial Efficiency with{" "}
            <span className="text-primary">Precision</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            High-performance electrical components engineered for reliability. Trusted by Fortune 500 manufacturers and utilities globally.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-md border border-primary px-6 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
