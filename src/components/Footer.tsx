"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const products = [
  { name: "Current Transformers", href: "/products/current-transformers" },
  { name: "Control Transformers", href: "/products/control-transformers" },
  { name: "Battery Chargers", href: "/products/battery-chargers" },
  { name: "Potential Transformers", href: "/products/potential-transformers" },
];

const documentation = [
  { name: "ISO 9001:2015 Certification", href: "#" },
  { name: "GeM & IREPS Registration", href: "#" },
  { name: "Technical Specifications", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/10 pt-16 md:pt-20 pb-8 md:pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Company Info Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/logo.png"
                alt="Alliance Engineering Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers. GeM & IREPS registered.
            </p>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-8">
              Products
            </h4>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation Column */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-8">
              Documentation
            </h4>
            <ul className="space-y-4">
              {documentation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-8">
              Manufacturing Facility
            </h4>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-sm text-primary mb-2">Chandigarh / Panchkula</p>
                <p className="text-secondary text-sm leading-relaxed">
                  Plot No.: 417, Industrial Area Phase -2<br />
                  Chandigarh, Haryana, India — 134113
                </p>
                <p className="text-secondary text-sm mt-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 172 400 1234
                </p>
                <p className="text-secondary text-sm mt-1 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> sales@allianceengineering.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary text-[12px]">
            © {new Date().getFullYear()} Alliance Engineering Company. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link
              href="#"
              className="text-secondary text-[12px] hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-secondary text-[12px] hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
