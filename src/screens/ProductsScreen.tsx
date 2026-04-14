"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Grid2x2,
  ListFilter,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Product, products } from "@/data/products";

type CategoryKey = "current-transformers" | "other-electrical-products";

const ratioOptions = ["50/5A", "100/5A", "200/5A", "400/5A"];
const constructionOptions = ["Solid Core", "Split Core", "Window Type"];
const classOptions = ["All Classes", "0.2S", "0.5S", "1.0"];
const apertureOptions = ["24mm", "36mm", "50mm", "80mm"];

const categoryCards: Array<{
  key: CategoryKey;
  title: string;
  badge: string;
  image: string;
  description: string;
}> = [
  {
    key: "current-transformers",
    title: "Current Transformers",
    badge: "Precision Series",
    image: "https://placehold.co/900x560/7d8f94/16202d?text=Current+Transformers",
    description:
      "High-precision metering and measurement solutions engineered for extreme reliability in industrial power systems, substations, and control cabinets.",
  },
  {
    key: "other-electrical-products",
    title: "Other Electrical Products",
    badge: "General Utility",
    image: "https://placehold.co/900x560/c4c8d0/1a2331?text=Electrical+Products",
    description:
      "A diverse range of relays, breakers, metering units, and distribution products designed for seamless integration and industrial safety.",
  },
];

function getCardMeta(product: Product) {
  return {
    badge:
      product.category === "Current Transformers"
        ? "Top Rated"
        : product.brand === "ALECS"
          ? "ALECS"
          : "Industrial",
    price: "Custom Quote",
    // ✅ specs is now { parameter, specification, unit } — format as "Parameter: Specification"
    subtitle: product.specs
      .slice(0, 2)
      .map((s) => `${s.parameter}: ${s.specification}`)
      .join(" | "),
    // ✅ customizations.option is already a plain string label — no split needed
    features: product.customizations.slice(0, 2).map((item) => item.option),
  };
}

const excellenceCards = [
  {
    title: "Certified Quality",
    icon: ShieldCheck,
    description:
      "All products meet international IEC, ANSI, and UL quality and performance standards for global compliance.",
  },
  {
    title: "Fast Shipping",
    icon: Truck,
    description:
      "Expedited global logistics networks ensuring mission-critical components arrive on schedule, every time.",
  },
  {
    title: "Expert Support",
    icon: Sparkles,
    description:
      "24/7 technical assistance and configuration consulting from our specialized team of senior power engineers.",
  },
];

export default function ProductsScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams?.get("category") as CategoryKey | null;
  const searchQuery = searchParams?.get("query")?.trim() ?? "";
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedClass, setSelectedClass] = useState("All Classes");

  useEffect(() => {
    setVisibleCount(6);
    setSelectedClass("All Classes");
  }, [selectedCategory, searchQuery]);

  const categoryMeta = useMemo(() => {
    if (selectedCategory === "other-electrical-products") {
      return categoryCards[1];
    }
    return categoryCards[0];
  }, [selectedCategory]);

  const categoryProducts = useMemo(() => {
    if (selectedCategory === "other-electrical-products") {
      return products.filter((product) => product.category !== "Current Transformers");
    }
    return products.filter((product) => product.category === "Current Transformers");
  }, [selectedCategory]);

  const searchedProducts = useMemo(() => {
    if (!searchQuery) return [];

    const normalizedQuery = searchQuery.toLowerCase();
    return products.filter((product) => {
      const haystack = [
        product.name,
        product.shortDescription,
        product.description,
        product.category,
        ...product.categories,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    if (selectedClass === "All Classes") return categoryProducts;
    // ✅ specs is now objects — check against specification string
    return categoryProducts.filter((product) =>
      product.specs.some((spec) => spec.specification.includes(selectedClass)),
    );
  }, [categoryProducts, selectedCategory, selectedClass]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const progress = Math.min((displayedProducts.length / Math.max(filteredProducts.length, 1)) * 100, 100);

  const selectCategory = (category: CategoryKey) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("category", category);
    router.push(`${pathname || "/products"}?${params.toString()}`);
  };

  const clearCategory = () => {
    router.push(pathname || "/products");
  };

  return (
    <div className="site-page min-h-screen">
      <Navbar />

      {!selectedCategory && !searchQuery ? (
        <main className="site-main">
          <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-6">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-2xl">
                <h1 className="site-heading text-3xl font-semibold tracking-tight sm:text-4xl">Product Categories</h1>
                <p className="site-copy mt-3 text-sm leading-7">
                  Precision-engineered electrical components built for the future of power infrastructure. Explore our comprehensive range of high-performance solutions.
                </p>
              </div>
              <button className="site-button-secondary inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-xs font-medium">
                View All Catalog
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {categoryCards.map((category) => (
                <button
                  key={category.key}
                  onClick={() => selectCategory(category.key)}
                  className="site-card group overflow-hidden rounded-2xl border text-left transition-all hover:-translate-y-0.5"
                >
                  <div className="overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                      <h2 className="site-heading text-xl font-semibold sm:text-2xl">{category.title}</h2>
                      <span className="site-chip rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                        {category.badge}
                      </span>
                    </div>
                    <p className="site-copy text-sm leading-7">{category.description}</p>
                    <div className="site-button-primary inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium">
                      Explore Collection
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <section className="py-16">
              <h2 className="site-heading mb-8 text-center text-2xl font-semibold">Engineered for Excellence</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {excellenceCards.map((item) => (
                  <div key={item.title} className="site-card rounded-2xl border p-6 text-center">
                    <div className="site-card-soft mx-auto flex h-11 w-11 items-center justify-center rounded-full border" style={{ color: "var(--site-primary)" }}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="site-heading mt-4 text-base font-semibold">{item.title}</h3>
                    <p className="site-copy mt-3 text-sm leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      ) : (
        <main className="site-main">
          <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-6">
            {searchQuery ? (
              <>
                <nav className="site-copy mb-6 flex items-center gap-1.5 text-[11px]">
                  <Link href="/" className="hover:opacity-80">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/products" className="hover:opacity-80">
                    Products
                  </Link>
                  <span>/</span>
                  <span className="site-heading">Search</span>
                </nav>

                <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="site-chip mb-3 inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Product Search
                    </div>
                    <h1 className="site-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                      Results for "{searchQuery}"
                    </h1>
                    <p className="site-copy mt-3 max-w-2xl text-sm leading-7">
                      {searchedProducts.length} matching products found in the catalog.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/products")}
                    className="site-button-secondary inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-xs font-medium transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back to Categories
                  </button>
                </div>

                {searchedProducts.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                    {searchedProducts.map((product) => {
                      const meta = getCardMeta(product);

                      return (
                        <Link
                          key={product.id}
                          href={`/products/${product.id}`}
                          className="site-card group overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5"
                        >
                          <div className="relative bg-[linear-gradient(180deg,#f8fafc_0%,#d9e7f8_100%)]">
                            <div className="site-button-primary absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em]">
                              {meta.badge}
                            </div>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>

                          <div className="space-y-3 p-4">
                            <div>
                              <h3 className="site-heading text-base font-semibold">{product.name}</h3>
                              <p className="site-copy mt-1 text-[11px] uppercase tracking-[0.12em]">
                                {meta.subtitle}
                              </p>
                            </div>

                            <div className="site-copy space-y-2 text-xs">
                              {meta.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                  <Sparkles className="h-3 w-3" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "var(--site-border)" }}>
                              <div className="site-heading text-lg font-semibold">{meta.price}</div>
                              <div className="site-copy text-xs font-medium uppercase tracking-[0.14em]">View Product</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="site-card rounded-2xl border px-6 py-12 text-center">
                    <h2 className="site-heading text-xl font-semibold">No matching products found</h2>
                    <p className="site-copy mx-auto mt-3 max-w-xl text-sm leading-7">
                      Try a different product name, category keyword, or browse the full catalog instead.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
            <nav className="site-copy mb-6 flex items-center gap-1.5 text-[11px]">
              <Link href="/" className="hover:opacity-80">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:opacity-80">
                Electrical Components
              </Link>
              <span>/</span>
              <span className="site-heading">{categoryMeta.title}</span>
            </nav>

            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="site-chip mb-3 inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Selected Category: {categoryMeta.title}
                </div>
                <h1 className="site-heading text-3xl font-semibold tracking-tight sm:text-4xl">{categoryMeta.title}</h1>
                <p className="site-copy mt-3 max-w-2xl text-sm leading-7">
                  {categoryMeta.description}
                </p>
              </div>
              <button
                onClick={clearCategory}
                className="site-button-secondary inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-xs font-medium transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Categories
              </button>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              {categoryCards.map((category) => {
                const active = category.key === selectedCategory;
                return (
                  <button
                    key={category.key}
                    onClick={() => selectCategory(category.key)}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      active
                        ? "border-[color:var(--site-border-strong)] bg-[color:var(--site-surface-strong)]"
                        : "border-[color:var(--site-border)] bg-[color:var(--site-surface)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="site-heading text-sm font-semibold">{category.title}</div>
                        <div className="site-copy mt-1 text-xs">{category.badge}</div>
                      </div>
                      {active && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--site-primary) 12%, transparent)", color: "var(--site-primary)" }}>
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
              <aside className="space-y-7">
                <div>
                  <div className="site-copy mb-4 text-[11px] font-semibold uppercase tracking-[0.18em]">Filters</div>
                  <div className="site-card space-y-6 rounded-xl border p-4 sm:p-5">
                    <FilterSection title="Primary Ratio" options={ratioOptions} />
                    <FilterSection title="Construction Type" options={constructionOptions} />

                    <div>
                      <div className="mb-3 text-xs font-semibold text-slate-300">Accuracy Class</div>
                      <div className="rounded-lg border border-slate-800 bg-[#141d2b]">
                        <select
                          value={selectedClass}
                          onChange={(event) => setSelectedClass(event.target.value)}
                          className="h-10 w-full rounded-lg bg-transparent px-3 text-xs text-slate-200 outline-none"
                        >
                          {classOptions.map((option) => (
                            <option key={option} value={option} className="bg-[#141d2b]">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 text-xs font-semibold text-slate-300">Aperture Size</div>
                      <div className="grid grid-cols-2 gap-2">
                        {apertureOptions.map((option) => (
                          <button
                            key={option}
                            className="rounded-md border border-slate-800 bg-[#141d2b] px-3 py-2 text-[11px] text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <section>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                  <p className="site-copy text-xs">
                    Showing 1-{displayedProducts.length} of {Math.max(filteredProducts.length, displayedProducts.length)} products in {categoryMeta.title}
                  </p>

                  <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4">
                    <button className="site-copy flex items-center gap-2 text-xs hover:opacity-80">
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                      Sort by Recommended
                    </button>
                    <div className="site-card-soft flex items-center gap-1 rounded-md border p-1">
                      <button className="site-button-primary flex h-7 w-7 items-center justify-center rounded">
                        <Grid2x2 className="h-3.5 w-3.5" />
                      </button>
                      <button className="site-copy flex h-7 w-7 items-center justify-center rounded">
                        <ListFilter className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                  {displayedProducts.map((product) => {
                    const meta = getCardMeta(product);

                    return (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="site-card group overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5"
                      >
                        <div className="relative bg-[linear-gradient(180deg,#f8fafc_0%,#d9e7f8_100%)]">
                          <div className="site-button-primary absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em]">
                            {meta.badge}
                          </div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="space-y-3 p-4">
                          <div>
                            <h3 className="site-heading text-base font-semibold">{product.name}</h3>
                            {/* ✅ subtitle is pre-formatted in getCardMeta as a string */}
                            <p className="site-copy mt-1 text-[11px] uppercase tracking-[0.12em]">{meta.subtitle}</p>
                          </div>

                          <div className="site-copy space-y-2 text-xs">
                            {meta.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2">
                                <Sparkles className="h-3 w-3" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "var(--site-border)" }}>
                            <div className="site-heading text-lg font-semibold">{meta.price}</div>
                            <div className="site-copy text-xs font-medium uppercase tracking-[0.14em]">View Product</div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <p className="site-copy mb-3 text-xs">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </p>
                  <div className="h-[2px] w-36 overflow-hidden rounded-full" style={{ backgroundColor: "var(--site-border)" }}>
                    <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: "var(--site-primary)" }} />
                  </div>
                  {visibleCount < filteredProducts.length ? (
                    <button
                      onClick={() => setVisibleCount((count) => count + 3)}
                      className="site-button-secondary mt-5 inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium transition-colors"
                    >
                      Load More Products
                    </button>
                  ) : (
                    <button className="site-button-secondary mt-5 inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium">
                      Load More Products
                    </button>
                  )}
                </div>
              </section>
            </div>
            </>
            )}
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}

function FilterSection({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  return (
    <div>
      <div className="site-heading mb-3 text-xs font-semibold">{title}</div>
      <div className="space-y-2.5">
        {options.map((option) => (
          <label key={option} className="site-copy flex items-center gap-2 text-xs">
            <input type="checkbox" className="h-3.5 w-3.5 rounded bg-transparent" style={{ borderColor: "var(--site-border-strong)" }} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
