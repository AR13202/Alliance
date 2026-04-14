"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/client", label: "Clients" },
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
    <header
      className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-[color:var(--site-bg-soft)]/85"
      style={{
        borderColor: "var(--site-border)",
        backgroundColor: "color-mix(in srgb, var(--site-bg-soft) 92%, transparent)",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Alliance Engineering Company logo"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{
                  color: isActive(link.href) ? "var(--site-heading)" : "var(--site-text-soft)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className="flex items-center gap-2 rounded-md border px-3"
            style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface)" }}
          >
            <Search className="h-3.5 w-3.5" style={{ color: "var(--site-text-soft)" }} />
            <input
              readOnly
              value=""
              placeholder="Search components..."
              className="h-9 w-40 bg-transparent text-xs outline-none"
              style={{ color: "var(--site-heading)" }}
            />
          </div>

          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-md px-4 text-xs font-medium transition-colors site-button-primary"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border"
            style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface)", color: "var(--site-heading)" }}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="border-t px-4 pb-4 md:hidden"
          style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-bg-soft)" }}
        >
          <div
            className="mt-3 flex items-center gap-2 rounded-md border px-3"
            style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface)" }}
          >
            <Search className="h-3.5 w-3.5" style={{ color: "var(--site-text-soft)" }} />
            <input
              readOnly
              value=""
              placeholder="Search components..."
              className="h-9 w-full bg-transparent text-xs outline-none"
              style={{ color: "var(--site-heading)" }}
            />
          </div>
          <div className="mt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm transition-colors"
                style={{
                  backgroundColor: isActive(link.href) ? "var(--site-surface)" : "transparent",
                  color: isActive(link.href) ? "var(--site-heading)" : "var(--site-text-soft)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md text-sm font-medium site-button-primary"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
