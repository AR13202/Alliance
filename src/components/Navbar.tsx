"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/client", label: "Clients" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-4 md:px-8 py-2 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Alliance Engineering Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center xl:w-1/2 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-headline tracking-tight transition-colors duration-200 pb-1 ${isActive(link.href)
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-secondary font-medium hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/CATALOG_ALLIANCE_ENGG_CO.pdf"
            download="CATALOG_ALLIANCE_ENGG_CO.pdf"
            className="hidden lg:inline-flex border border-primary text-primary px-6 py-2.5 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-primary/5 active:scale-95"
          >
            Download Catalogue
          </Link>
          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-primary text-white px-6 py-2.5 rounded-md font-headline font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-lg shadow-primary/10"
          >
            Contact Us
          </Link>
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-t border-outline-variant/10 shadow-xl p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-lg font-headline ${isActive(link.href) ? "text-primary font-bold" : "text-secondary"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/CATALOG_ALLIANCE_ENGG_CO.pdf"
            download="/CATALOG_ALLIANCE_ENGG_CO.pdf"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 border border-primary text-primary text-center rounded-md font-bold hover:bg-primary/5 transition-colors uppercase text-sm tracking-wider"
          >
            Download Catalogue
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 bg-primary text-white text-center rounded-md font-bold uppercase text-sm tracking-wider"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
