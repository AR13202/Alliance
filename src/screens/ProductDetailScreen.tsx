"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductById, getRelatedProducts } from "@/data/products";

const standardDescriptions: Record<string, string> = {
  "IS 2705": "Adherence to Indian standards for current transformer specifications.",
  "IEC 61869-2": "International Electrotechnical Commission standards for instrument transformers.",
  "IEC 61869": "International Electrotechnical Commission standards for instrument transformers.",
  "IEC 60044-1": "Instrument transformers standard for current transformers.",
  "ISO 9001:2015": "Certified Quality Management Systems for precision manufacturing.",
  "ISO 9001": "Certified Quality Management Systems for precision manufacturing.",
  "ROHS": "Compliance with Restriction of Hazardous Substances for environmental safety.",
  "RoHS": "Compliance with Restriction of Hazardous Substances for environmental safety.",
  "CE": "Conformity with health, safety, and environmental protection standards for the EEA.",
  "CE MARK": "Conformity with health, safety, and environmental protection standards for the EEA.",
  "CE Mark": "Conformity with health, safety, and environmental protection standards for the EEA.",
  "IREPS": "Registered and approved vendor for Indian Railways e-Procurement System.",
  "IS 6034-1989": "Indian standard specification for transformer oil filtration plants.",
  "IS 6034": "Indian standard specification for transformer oil filtration plants.",
  "IS 335-1993": "Indian standard for new insulating oils for transformers and switchgear.",
  "IS 335": "Indian standard for new insulating oils for transformers and switchgear.",
  "IEC 60296": "International standard for fluids for electrotechnical applications.",
  "IS 11171": "Indian standard for dry-type power transformers.",
  "IEC 61558": "International standard for safety of power transformers, power supplies and reactors."
};

export default function ProductDetailScreen({
  productId,
}: {
  productId: string;
}) {
  const product = getProductById(productId);
  const [selectedImg, setSelectedImg] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const productCode = useMemo(
    () => product?.id.toUpperCase().replace(/-/g, "-"),
    [product?.id]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-['Hanken_Grotesk'] bg-white text-[#131b2e]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#515f76] mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#1a1b4b] hover:underline font-semibold">
            Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const allImages = product.thumbnails.length > 0 ? product.thumbnails : [product.image];
  console.log(allImages);
  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-['Hanken_Grotesk'] text-[#131b2e] selection:bg-[#c1c1fc] min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 flex-grow">
        {/* Hero Section - Refined Split Layout */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#f8fafc] border border-[#c8c5d0] rounded-xl p-12 flex items-center justify-center relative overflow-hidden shadow-sm">
              <span className="absolute top-6 left-6 bg-[#1a1b4b] text-white px-3 py-1 font-['JetBrains_Mono'] text-[10px] rounded uppercase tracking-widest z-10">
                {product.status || "IN STOCK"}
              </span>
              <img
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105"
                src={allImages[selectedImg]}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImg(index)}
                  className={`aspect-square border-2 p-2 rounded-lg shadow-sm transition-colors duration-200 ${selectedImg === index ? "border-[#1a1b4b] bg-white" : "border-[#c8c5d0] hover:border-[#1a1b4b] bg-[#f8fafc]"
                    }`}
                >
                  <img className="w-full h-full object-contain" src={img} alt="" />
                </button>
              ))}
              {/* {Array.from({ length: Math.max(0, 4 - allImages.length) }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square border border-[#c8c5d0] p-2 bg-[#f8fafc] rounded-lg flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-[#777680]">image</span>
                </div>
              ))} */}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col h-full justify-start pt-4">
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-['Hanken_Grotesk'] font-bold text-[11px] tracking-[0.2em] text-[#1a1b4b] uppercase">
                  Industrial Series
                </span>
              </div>
              <h1 className="font-['Hanken_Grotesk'] font-bold text-4xl lg:text-5xl text-[#1a1b4b] leading-tight">
                {product.name}
              </h1>
              <p className="font-body-md text-[#46464f]">
                {/* Model Ref: <span className="text-[#1a1b4b] font-bold">{productCode}</span> |  */}
                {product.brand || "Alliance Engineering Company"}
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-[#46464f] leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.highlights && product.highlights.length > 0 && (
              <div className="mb-10 bg-[#f8fafc] border border-[#c8c5d0]/30 rounded-xl p-6 shadow-sm">
                <h3 className="font-['Hanken_Grotesk'] text-[11px] text-[#1a1b4b] uppercase font-bold tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#1a1b4b]/30"></span>
                  Key Technical Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div>
                        <p className="text-sm font-bold text-[#1a1b4b]">{highlight.label}</p>
                        <p className="text-[12px] text-[#46464f]">{highlight.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4 border-t border-[#c8c5d0]/30">
              <button
                onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#1a1b4b] text-white font-['Hanken_Grotesk'] font-bold text-xs tracking-widest px-10 py-4 rounded flex items-center gap-4 hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                REQUEST A QUOTE
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <button className="bg-[#f8fafc] border-2 border-[#c8c5d0] text-[#131b2e] font-['Hanken_Grotesk'] font-bold text-xs tracking-widest px-10 py-4 rounded flex items-center gap-4 hover:bg-[#f2f3ff] transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">download</span>
                TECHNICAL BROCHURE
              </button>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-['Hanken_Grotesk'] font-semibold text-2xl text-[#1a1b4b] mb-1">
                Technical Specifications
              </h2>
              <p className="text-[#46464f] text-sm">Validated industrial performance metrics for enterprise deployment.</p>
            </div>
            <div className="bg-[#1a1b4b]/5 px-4 py-1.5 rounded border border-[#1a1b4b]/10">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#1a1b4b] uppercase font-bold tracking-widest">
                Engineering Data Sheet {product.standard || "REV.04"}
              </span>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#c8c5d0]/30 rounded-xl p-6 lg:p-8 shadow-sm">
            <div className="overflow-hidden">
              <table className="w-full text-left border-collapse font-['Hanken_Grotesk']">
                <thead>
                  <tr className="border-b border-[#1a1b4b]/20">
                    <th className="py-4 px-4 font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#46464f]">
                      Parameter
                    </th>
                    <th className="py-4 px-4 font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest uppercase text-[#46464f]">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c8c5d0]/10">
                  {product.technicalSpecs.map((spec, index) => (
                    <tr key={index} className="hover:bg-white transition-colors duration-200">
                      <td className="py-4 px-4 text-[#46464f] font-medium">{spec.parameter}</td>
                      <td className="py-4 px-4 font-semibold text-[#1a1b4b]">
                        {spec.specification}
                        {spec.unit && (
                          <span className="font-normal text-xs text-[#777680] ml-1">
                            ({spec.unit})
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Standards & Compliance Section */}
        {product.standards && product.standards.length > 0 && (
          <section className="py-16 border-t border-[#c8c5d0]/20">
            <div className="mb-12">
              <h2 className="font-['Hanken_Grotesk'] font-semibold text-2xl text-[#1a1b4b] mb-1">
                Standards &amp; Compliance
              </h2>
              <p className="text-[#46464f] text-sm">
                Certified engineering excellence across regional and global regulatory frameworks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.standards.map((std, i) => {
                const desc = standardDescriptions[std] || standardDescriptions[std.toUpperCase()] || "Compliance with standard engineering and safety performance metrics.";
                return (
                  <div key={i} className="p-8 bg-[#f8fafc] border border-[#c8c5d0]/60 rounded-xl hover:bg-white hover:border-[#1a1b4b] hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-px bg-[#1a1b4b]/20 group-hover:w-12 transition-all"></span>
                      <h4 className="font-bold text-[#1a1b4b] text-lg">{std}</h4>
                    </div>
                    <p className="text-[#46464f] text-sm leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Customizations Section */}
        {product.customizations && product.customizations.length > 0 && (
          <section className="py-16">
            <div className="bg-[#1a1b4b] p-12 lg:p-16 rounded-xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg
                  className="w-full h-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 100 L100 0 M10 100 L100 10 M20 100 L100 20 M30 100 L100 30"
                    stroke="white"
                    strokeWidth="0.5"
                  ></path>
                </svg>
              </div>
              <div className="relative z-10 max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#dae2fd]"></span>
                  <span className="font-['Hanken_Grotesk'] font-bold text-[10px] text-[#dae2fd] uppercase tracking-widest font-bold">
                    Precision Configurations
                  </span>
                </div>
                <h2 className="font-['Hanken_Grotesk'] font-semibold text-3xl text-white mb-4">
                  Industrial Customizations
                </h2>
                <p className="text-white/70 text-base leading-relaxed">
                  Our modular engineering workflow allows for specific adaptations to meet your
                  site-specific infrastructure requirements. Consult with our technical team for
                  bespoke builds.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {product.customizations.map((cust, i) => (
                  <div
                    key={i}
                    className="group bg-white/5 border border-white/10 p-6 rounded hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center mb-6 text-white font-bold text-xs">
                      0{i + 1}
                    </div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-sm">
                      {cust.option}
                    </h4>
                    <p className="text-white/60 text-[13px] leading-relaxed">{cust.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consultation Form */}
        <section id="inquiry" className="py-16">
          <div className="bg-white rounded-xl overflow-hidden border border-[#c8c5d0] shadow-lg grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-[#f8fafc] p-12 flex flex-col justify-center border-r border-[#c8c5d0]/30">
              <h2 className="font-['Hanken_Grotesk'] font-semibold text-2xl text-[#1a1b4b] mb-6">
                Engineering Consultation
              </h2>
              <p className="text-[#46464f] mb-10 text-sm leading-relaxed">
                Connect with our technical desk for bulk specifications, tender support, or
                specialized engineering requests.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-5 p-5 rounded bg-white border border-[#c8c5d0]/40 shadow-sm">
                  <div className="w-10 h-10 rounded bg-[#1a1b4b]/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1a1b4b]">history</span>
                  </div>
                  <div>
                    <span className="block font-['Hanken_Grotesk'] font-bold text-[9px] uppercase text-[#777680] tracking-widest">
                      Lead Time
                    </span>
                    <span className="font-bold text-[#131b2e] text-base">Standard 4-6 Weeks</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-5 rounded bg-white border border-[#c8c5d0]/40 shadow-sm">
                  <div className="w-10 h-10 rounded bg-[#1a1b4b]/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1a1b4b]">support_agent</span>
                  </div>
                  <div>
                    <span className="block font-['Hanken_Grotesk'] font-bold text-[9px] uppercase text-[#777680] tracking-widest">
                      Technical Support
                    </span>
                    <span className="font-bold text-[#131b2e] text-base">24h Response Goal</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10">
                  <div className="w-20 h-20 rounded-full bg-[#1a1b4b]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#1a1b4b] text-4xl">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Hanken_Grotesk'] font-semibold text-[#131b2e] tracking-tight">
                      Inquiry Received
                    </h3>
                    <p className="text-[#131b2e]/50 font-medium mt-2">
                      Reference ID: {productCode?.slice(0, 8)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="text-[#1a1b4b] font-['Hanken_Grotesk'] font-bold text-xs tracking-widest uppercase hover:underline"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                    <div className="space-y-2">
                      <label className="font-['Hanken_Grotesk'] font-bold text-[10px] text-[#46464f] uppercase tracking-widest px-1">
                        Full Name
                      </label>
                      <input
                        required
                        className="w-full bg-[#f8fafc] border border-[#c8c5d0]/60 focus:bg-white focus:ring-1 focus:ring-[#1a1b4b] focus:border-[#1a1b4b] rounded p-3 text-sm transition-all outline-none text-[#131b2e]"
                        placeholder="e.g. Rahul Sharma"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-['Hanken_Grotesk'] font-bold text-[10px] text-[#46464f] uppercase tracking-widest px-1">
                        Business Email
                      </label>
                      <input
                        required
                        className="w-full bg-[#f8fafc] border border-[#c8c5d0]/60 focus:bg-white focus:ring-1 focus:ring-[#1a1b4b] focus:border-[#1a1b4b] rounded p-3 text-sm transition-all outline-none text-[#131b2e]"
                        placeholder="name@company.com"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-['Hanken_Grotesk'] font-bold text-[10px] text-[#46464f] uppercase tracking-widest px-1">
                        Phone Number
                      </label>
                      <input
                        required
                        className="w-full bg-[#f8fafc] border border-[#c8c5d0]/60 focus:bg-white focus:ring-1 focus:ring-[#1a1b4b] focus:border-[#1a1b4b] rounded p-3 text-sm transition-all outline-none text-[#131b2e]"
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Hanken_Grotesk'] font-bold text-[10px] text-[#46464f] uppercase tracking-widest px-1">
                      Technical Requirements
                    </label>
                    <textarea
                      required
                      className="w-full bg-[#f8fafc] border border-[#c8c5d0]/60 focus:bg-white focus:ring-1 focus:ring-[#1a1b4b] focus:border-[#1a1b4b] rounded p-3 text-sm resize-none transition-all outline-none text-[#131b2e]"
                      placeholder="Outline your project scope or specific CT parameters required..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1a1b4b] text-white font-['Hanken_Grotesk'] font-bold text-xs tracking-widest py-4 rounded hover:shadow-xl transition-all uppercase active:scale-[0.99]"
                  >
                    SUBMIT TECHNICAL INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Related Components */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-['Hanken_Grotesk'] font-semibold text-2xl text-[#1a1b4b]">
                Related Components
              </h2>
            </div>
            <Link
              className="bg-[#f8fafc] text-[#1a1b4b] font-['Hanken_Grotesk'] font-bold text-[11px] tracking-widest flex items-center gap-2 group px-5 py-2.5 border border-[#1a1b4b]/30 rounded hover:bg-[#1a1b4b] hover:text-white hover:border-[#1a1b4b] hover:shadow-sm transition-all"
              href="/products"
            >
              VIEW FULL CATALOG
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((relProduct) => (
              <Link
                href={`/products/${relProduct.id}`}
                key={relProduct.id}
                className="bg-[#f8fafc] border border-[#c8c5d0]/50 rounded-xl overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-square bg-[#f2f3ff]/50 relative overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    src={relProduct.image}
                    alt={relProduct.name}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-['Hanken_Grotesk'] font-bold text-[9px] text-[#777680] uppercase block mb-2 tracking-widest font-bold">
                      {relProduct.category}
                    </span>
                    <h4 className="font-bold text-[#1a1b4b] group-hover:text-[#1a1b4b] transition-colors leading-tight mb-4 text-base line-clamp-2">
                      {relProduct.name}
                    </h4>
                  </div>
                  <div className="pt-4 border-t border-[#c8c5d0]/30 flex justify-between items-center">
                    <span
                      className={`${relProduct.status === "Low Stock"
                        ? "text-[#ba1a1a] bg-[#ba1a1a]/5"
                        : "text-[#1a1b4b] bg-[#1a1b4b]/5"
                        } font-['JetBrains_Mono'] text-[9px] uppercase font-bold tracking-widest px-2 py-1 rounded`}
                    >
                      {relProduct.status || "In Stock"}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a1b4b] flex items-center gap-1 transition-opacity group-hover:opacity-75">
                      View Product
                      <span className="material-symbols-outlined text-[13px] font-black">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
