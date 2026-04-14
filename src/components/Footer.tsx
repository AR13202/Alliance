"use client";

import Link from "next/link";
import { ArrowRight, Globe, Headphones, MapPin, Phone } from "lucide-react";

const footerColumns = [
  {
    title: "Products",
    links: [
      "Current Transformers",
      "Voltage Transformers",
      "Control Transformers",
      "Panel Meters",
      "Battery Chargers",
      "Panel Accessories",
      "Electronic Hooters",
    ],
  },
  {
    title: "Support",
    links: ["Documentation", "Installation Guides", "Warranty Claims", "Technical Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Certifications", "Careers", "Contact", "Privacy Policy", "Terms of Use", "Sustainability"],
  },
];

export default function Footer() {
  return (
    <footer className="site-band border-t">
      <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr_0.75fr_0.95fr]">
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Alliance Engineering Company logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="site-copy mt-4 max-w-xs text-[11px] leading-6">
              Precision electrical components since 1992. Serving industrial buyers across India and internationally.
            </p>
            <address className="site-copy mt-4 space-y-2 text-[11px] not-italic">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>Chandigarh - 160002, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <span>+91-80438-69822</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5" />
                <span>allianceenggco.com</span>
              </div>
            </address>
            <div className="mt-4 flex gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border site-copy" style={{ borderColor: "var(--site-border)" }}>
                <Headphones className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="site-copy text-[10px] font-semibold uppercase tracking-[0.2em]">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="site-copy text-[11px] transition-colors hover:opacity-80">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <section>
            <div className="site-copy text-[10px] font-semibold uppercase tracking-[0.2em]">Newsletter</div>
            <h3 className="site-heading mt-4 text-sm font-semibold">
              Stay updated with our latest products and industry news.
            </h3>
            <form className="mt-4 flex overflow-hidden rounded-lg border site-card-soft">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Newsletter email"
                className="h-10 flex-1 bg-transparent px-3 text-xs outline-none"
                style={{ color: "var(--site-heading)" }}
              />
              <button
                type="button"
                className="site-button-primary flex h-10 items-center justify-center gap-1 px-3 text-[11px] font-medium"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </section>
        </div>

        <div className="site-copy mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-[10px]" style={{ borderColor: "var(--site-border)" }}>
          <div>Copyright 2025 Alliance Engineering Company. All rights reserved. | GST: 04ABMPV7035K1Z6 | IEC: ABMPV7035K</div>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
