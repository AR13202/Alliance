"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Zap } from "lucide-react";

const footerColumns = [
  {
    title: "Products",
    links: ["Current Transformers", "Voltage Transformers", "Control Systems", "Electrical Products"],
  },
  {
    title: "Support",
    links: ["Datasheets", "Installation Guides", "Warranty Terms", "Knowledge Base"],
  },
  {
    title: "Treasury",
    links: ["Terms of Use", "Notice Office", "Investor Office", "Sustainability"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-[#101621]">
      <div className="container mx-auto px-4 py-8 sm:px-5 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-[1.15fr_0.75fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#243857] text-sky-300">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-semibold text-white">Alliance Engineering Company</span>
            </Link>
            <p className="mt-4 max-w-xs text-[11px] leading-6 text-slate-500">
              Leading the industry in precision power systems, metering infrastructure, and monitoring solutions.
            </p>
            <div className="mt-4 flex gap-2">
              {[Headphones].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 text-slate-500"
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
              ))}
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

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</h3>
            <p className="mt-4 text-[11px] leading-6 text-slate-500">
              Receive the latest updates on power grid technology.
            </p>
            <div className="mt-4 flex overflow-hidden rounded-lg border border-slate-800 bg-[#121b29]">
              <input
                placeholder="Email"
                className="h-10 flex-1 bg-transparent px-3 text-xs text-slate-200 outline-none placeholder:text-slate-600"
              />
              <button className="flex h-10 w-12 items-center justify-center bg-[#243857] text-slate-100">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-900 pt-4 text-[10px] text-slate-600">
          <div>Copyright 2026 Alliance Engineering Company. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
