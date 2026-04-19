"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Product, products } from "@/data/products";

// Map actual category data to the chip labels
const categoryLabels = [
  { label: "All Products", value: "all" },
  { label: "Transformers", value: "Current Transformers" },
  { label: "Electricals", value: "other-electrical-products" },
  { label: "Switchgear", value: "Switchgear" },
  { label: "Panels", value: "Panels" },
];

export default function ProductsScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategoryValue = searchParams?.get("category") || "all";
  const searchQuery = searchParams?.get("query")?.trim() ?? "";
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategoryValue !== "all") {
      if (selectedCategoryValue === "other-electrical-products") {
        result = result.filter(p => p.category !== "Current Transformers");
      } else {
        result = result.filter(p => p.category.includes(selectedCategoryValue) || p.categories.includes(selectedCategoryValue));
      }
    }

    if (searchQuery) {
      const normalizedQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(normalizedQuery) || 
        p.category.toLowerCase().includes(normalizedQuery) ||
        p.shortDescription.toLowerCase().includes(normalizedQuery)
      );
    }

    return result;
  }, [selectedCategoryValue, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setCategory = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    params.delete("query"); // Clear query when changing category
    setCurrentPage(1);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim();
    
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    setCurrentPage(1);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 md:pb-24 max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Controls Section */}
        <section className="mb-12 space-y-8">
          {/* Header & Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tighter font-headline uppercase">
                Engineered Products
              </h1>
              <p className="text-secondary font-body text-sm tracking-wide opacity-80">
                Industrial precision for global infrastructure.
              </p>
            </div>
            <div className="relative w-full md:w-auto mt-4 md:mt-0">
              <button className="flex w-full md:w-auto justify-between md:justify-start items-center gap-2 px-6 py-3 bg-white border border-outline-variant/20 text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container-low transition-all shadow-sm rounded-md">
                Sort by: Featured
                <ChevronDown className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>

          {/* Full Width Search */}
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative flex items-center group">
              <Search className="absolute left-5 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
              <input 
                name="search"
                defaultValue={searchQuery}
                className="w-full pl-14 pr-6 py-5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 text-lg transition-all shadow-sm" 
                placeholder="Search catalog for components, systems, or specifications..." 
                type="text"
              />
            </div>
          </form>

          {/* Categories Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {categoryLabels.map((cat) => (
              <button 
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-200 border ${
                  selectedCategoryValue === cat.value
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white text-secondary border-outline-variant/30 hover:bg-surface-container-high hover:border-outline-variant"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <button className="flex items-center gap-1 px-4 py-2 text-primary text-[11px] font-black tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">
              Show More
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => {
              const voltageSpec = product.specs.find(s => s.parameter.toLowerCase().includes("voltage"))?.specification || "Multiple Ratings";
              const constructionSpec = product.specs.find(s => s.parameter.toLowerCase().includes("construction"))?.specification || "Industrial Grade";

              return (
                <Link 
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10 group"
                >
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#eef2ff] to-white flex items-center justify-center p-8 overflow-hidden">
                    <span className="absolute top-4 left-4 bg-tertiary text-white text-[9px] font-black px-3 py-1 rounded-full tracking-[0.2em] shadow-lg transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      TOP RATED
                    </span>
                    <img 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-black text-primary leading-none mb-3 font-headline group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-outline font-black uppercase tracking-[0.15em] mb-4">
                      {constructionSpec} | VOLTAGE: {voltageSpec}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-secondary text-sm font-medium">
                        <Sparkles className="w-4 h-4 text-primary opacity-40" />
                        <span>Accuracy Class: {product.specs[0]?.specification}</span>
                      </div>
                      <div className="flex items-center gap-3 text-secondary text-sm font-medium">
                        <Sparkles className="w-4 h-4 text-primary opacity-40" />
                        <span>Compliance Certified</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                      <button className="text-primary font-black text-[11px] tracking-widest uppercase hover:underline decoration-2 underline-offset-4">
                        Custom Quote
                      </button>
                      <button className="text-outline font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
                        View Product
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full py-24 text-center">
              <h2 className="text-2xl font-black text-primary tracking-tighter mb-4 font-headline opacity-50">No matching products found</h2>
              <p className="text-secondary opacity-70">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-3">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-12 h-12 flex items-center justify-center text-outline hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-md font-black text-xs tracking-widest transition-all ${
                    currentPage === i + 1
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-secondary hover:bg-surface-container-low"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-12 h-12 flex items-center justify-center text-outline hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
