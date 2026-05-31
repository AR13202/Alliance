"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const products = [
  { name: "Current Transformers", href: "/products/current-transformers" },
  { name: "Control Transformers", href: "/products/control-transformers" },
  { name: "Industrial Battery Chargers", href: "/products/industrial-battery-chargers" },
  { name: "Automatic Voltage Stabilizers", href: "/products/automatic-voltage-stabilizers" },
];

const documentation = [
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Our Clients", href: "/client" },
  { name: "Our Certifications", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/10 pt-16 md:pt-20 pb-8 md:pb-12 px-6 md:px-12">
      <div className="max-w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-3 mb-20 justify-end">
          {/* Company Info Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/logo.png"
                alt="Alliance Engineering Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers. GeM registered.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* IndiaMART */}
              <a
                href="https://www.indiamart.com/alliance-engg-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-white hover:bg-[#ff6f00] hover:border-[#ff6f00] transition-all duration-300"
                title="IndiaMART Profile"
              >
                <span className="font-extrabold tracking-tighter text-[9px] uppercase font-sans">iM</span>
              </a>

              {/* Justdial */}
              <a
                href="https://www.justdial.com/Chandigarh/Alliance-Engg-Co-Industrial-Area/0172PX172-X172-140601183211-L4K4_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-white hover:bg-[#00529b] hover:border-[#00529b] transition-all duration-300"
                title="Justdial Listing"
              >
                <span className="font-black tracking-tighter text-[11px] lowercase font-sans">jd</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/alliance-engg-co/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                title="LinkedIn Page"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* ExportersIndia */}
              <a
                href="https://www.exportersindia.com/allianceenggco/about-us.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-white hover:bg-[#0263ca] hover:border-[#0263ca] transition-all duration-300"
                title="ExportersIndia Profile"
              >
                <span className="font-extrabold tracking-tighter text-[9px] uppercase font-sans">ei</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2 lg:col-span-2">
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
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-8">
              Ouick Links
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

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-8">
              Manufacturing Facility
            </h4>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-sm text-primary mb-2">Chandigarh / Panchkula</p>
                <p className="text-secondary text-sm leading-relaxed">
                  Plot No.: 417, Industrial Area Phase -2
                  Chandigarh<br />
                  India — 160002
                </p>
                <p className="text-secondary text-sm mt-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91-9417374546, +91-7589124094
                </p>
                <p className="text-secondary text-sm mt-1 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> <a href="mailto:alliancemeters@gmail.com">alliancemeters@gmail.com</a>
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
              href="/privacy-policy"
              className="text-secondary text-[12px] hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
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
