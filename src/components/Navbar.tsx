"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "#", label: "Solutions" },
  { href: "#", label: "Support" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#111722]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111722]/85">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
        <div className="flex items-center gap-7">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#243857] text-sky-300">
              <Zap className="h-3.5 w-3.5" />
            </div>
            <span className="text-[13px] font-semibold text-white">Alliance Engineering Company</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs transition-colors ${
                  isActive(link.href) ? "text-slate-100" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-[#141d2b] px-3">
            <Search className="h-3.5 w-3.5 text-slate-500" />
            <input
              readOnly
              value=""
              placeholder="Search components..."
              className="h-9 w-40 bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-600"
            />
          </div>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-md bg-[#243857] px-4 text-xs font-medium text-slate-100 transition-colors hover:bg-[#2f4668]"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-[#141d2b] text-slate-300 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-[#111722] px-4 pb-4 md:hidden">
          <div className="mt-3 flex items-center gap-2 rounded-md border border-slate-800 bg-[#141d2b] px-3">
            <Search className="h-3.5 w-3.5 text-slate-500" />
            <input
              readOnly
              value=""
              placeholder="Search components..."
              className="h-9 w-full bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-600"
            />
          </div>
          <div className="mt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(link.href) ? "bg-[#1a2434] text-slate-100" : "text-slate-400 hover:bg-[#141d2b] hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-md bg-[#243857] px-4 text-sm font-medium text-slate-100"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
