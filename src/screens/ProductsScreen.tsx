"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
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
import type { Product } from "@/data/products";

interface ProductsScreenProps {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
}

export default function ProductsScreen({ products, initialCategory, initialQuery }: ProductsScreenProps) {
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategoryValue = initialCategory || "all";
  const searchQuery = initialQuery?.trim() ?? "";

  const [currentPage, setCurrentPage] = useState(1);
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc">("featured");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categoriesList = useMemo(() => {
    const order = [
      "all",
      "Current Transformers",
      "Control Transformers",
      "Battery Chargers",
      "Dimmers / Variable Transformers / Variacs",
      "Digital / Analog Meters",
      "Transformer Oil Filtration Plant",
      "Transformer Oil Filtration Machine",
      "Ring Type Current Transformer",
      "Bar Type Current Transformer",
      "Window Type Current Transformer",
      "Wound Type Current Transformer",
      "Buzzer Hooter Siren",
      "DC Shunts",
      "DC Power Pack",
      "Bus Bar Insulators",
      "LED Indicator"
    ];

    const uniqueFromProducts = Array.from(new Set(products.map(p => p.category)));
    const remaining = uniqueFromProducts.filter(cat => !order.includes(cat));
    const finalOrder = [...order, ...remaining];

    return finalOrder.map(val => {
      if (val === "all") {
        return { label: "All Products", value: "all" };
      }
      let label = val;
      if (val === "Dimmers / Variable Transformers / Variacs") {
        label = "Dimmers & Variacs";
      } else if (val === "Digital / Analog Meters") {
        label = "Digital & Meters";
      } else if (val === "Transformer Oil Filtration Plant") {
        label = "Filtration Plants";
      } else if (val === "Transformer Oil Filtration Machine") {
        label = "Filtration Machines";
      } else if (val === "Ring Type Current Transformer") {
        label = "Ring CTs";
      } else if (val === "Bar Type Current Transformer") {
        label = "Bar CTs";
      } else if (val === "Window Type Current Transformer") {
        label = "Window CTs";
      } else if (val === "Wound Type Current Transformer") {
        label = "Wound CTs";
      } else if (val === "Buzzer Hooter Siren") {
        label = "Buzzers & Hooters";
      } else if (val === "Bus Bar Insulators") {
        label = "Insulators";
      } else if (val === "LED Indicator") {
        label = "LED Indicators";
      }
      return { label, value: val };
    });
  }, []);

  const visibleCategories = useMemo(() => {
    return showAllCategories ? categoriesList : categoriesList.slice(0, 6);
  }, [showAllCategories, categoriesList]);

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const itemsPerPage = 8;

  // Filter and sort products based on category, search query, and sort choice
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

    if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [selectedCategoryValue, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setCategory = (value: string) => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
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
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    if (localSearch.trim()) {
      params.set("query", localSearch.trim());
    } else {
      params.delete("query");
    }
    setCurrentPage(1);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    if (value.trim()) {
      params.set("query", value.trim());
    } else {
      params.delete("query");
    }
    setCurrentPage(1);
    router.replace(`${pathname}?${params.toString()}`);
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
            <div ref={sortRef} className="relative w-full md:w-auto mt-4 md:mt-0">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex w-full md:w-auto justify-between md:justify-start items-center gap-2 px-6 py-3 bg-white border border-outline-variant/20 text-on-surface text-xs font-bold tracking-widest uppercase hover:bg-surface-container-low transition-all shadow-sm rounded-md"
              >
                Sort by: {sortBy === "featured" ? "Featured" : sortBy === "name-asc" ? "Name (A-Z)" : "Name (Z-A)"}
                <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-200 ${showSortDropdown ? "rotate-180" : ""}`} />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-full md:w-48 bg-white border border-outline-variant/20 rounded-md shadow-lg z-20 py-1">
                  {[
                    { label: "Featured", value: "featured" },
                    { label: "Name (A-Z)", value: "name-asc" },
                    { label: "Name (Z-A)", value: "name-desc" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value as any);
                        setShowSortDropdown(false);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-surface-container-low transition-colors ${
                        sortBy === option.value ? "text-primary bg-surface-container-lowest" : "text-secondary"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Full Width Search */}
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative flex items-center group">
              <Search className="absolute left-5 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
              <input 
                name="search"
                value={localSearch}
                onChange={handleSearchChange}
                className="w-full pl-14 pr-6 py-5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline/50 text-lg transition-all shadow-sm" 
                placeholder="Search catalog for components, systems, or specifications..." 
                type="text"
              />
            </div>
          </form>

          {/* Categories Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {visibleCategories.map((cat) => (
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
            <button 
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center gap-1 px-4 py-2 text-primary text-[11px] font-black tracking-[0.15em] uppercase hover:opacity-70 transition-all duration-300"
            >
              {showAllCategories ? "Show Less" : "Show More"}
              <Plus className={`w-4 h-4 transition-transform duration-300 ${showAllCategories ? "rotate-45" : ""}`} />
            </button>
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => {
              return (
                <div 
                  key={product.id}
                  onClick={() => router.push(`/products/${product.id}`)}
                  className="bg-white  cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10 group"
                >
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#eef2ff] to-white flex items-center justify-center overflow-hidden">
                    {/* <span className="absolute top-4 left-4 bg-tertiary text-white text-[9px] font-black px-3 py-1 rounded-full tracking-[0.2em] shadow-lg transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500 z-10">
                      TOP RATED
                    </span> */}
                    <img 
                      alt={product.name} 
                      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-black text-primary leading-none mb-4 font-headline group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="space-y-3 mb-6">
                      {product.specs.slice(0, 2).map((spec, index) => (
                        <div key={index} className="flex items-center gap-3 text-secondary text-sm font-medium">
                          <Sparkles className="w-4 h-4 text-primary opacity-40 shrink-0" />
                          <span className="line-clamp-1">{spec.parameter}: {spec.specification}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-6 border-t border-outline-variant/30 flex gap-3 items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/products/${product.id}#inquiry`);
                        }}
                        className="flex-1 text-center py-2.5 border border-primary text-primary font-black text-[10px] tracking-widest uppercase rounded hover:bg-primary/5 transition-all">
                        Custom Quote
                      </button>
                      <Link 
                        href={`/products/${product.id}`} 
                        className="flex-1 text-center py-2.5 bg-primary border border-primary text-white font-black text-[10px] tracking-widest uppercase rounded hover:opacity-90 hover:shadow-lg transition-all shadow-md shadow-primary/10">
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
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
