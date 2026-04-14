"use client";

import Link from "next/link";
import { ArrowRight, Globe, Headphones, MapPin, Phone, Zap } from "lucide-react";

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
    <footer className="border-t border-slate-900 bg-[#101621]">
      <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr_0.75fr_0.95fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#243857] text-sky-300">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold text-white">Alliance Engineering Company</span>
            </Link>
            <p className="mt-4 max-w-xs text-[11px] leading-6 text-slate-500">
              Precision electrical components since 1992. Serving industrial buyers across India and internationally.
            </p>
            <address className="mt-4 space-y-2 text-[11px] not-italic text-slate-500">
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
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 text-slate-500">
                <Headphones className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{column.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[11px] text-slate-500 transition-colors hover:text-slate-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <section>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</div>
            <h3 className="mt-4 text-sm font-semibold text-white">
              Stay updated with our latest products and industry news.
            </h3>
            <form className="mt-4 flex overflow-hidden rounded-lg border border-slate-800 bg-[#121b29]">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Newsletter email"
                className="h-10 flex-1 bg-transparent px-3 text-xs text-slate-200 outline-none placeholder:text-slate-600"
              />
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-1 bg-[#243857] px-3 text-[11px] font-medium text-slate-100"
              >
                Subscribe
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-900 pt-4 text-[10px] text-slate-600">
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
