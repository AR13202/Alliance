"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductById, getRelatedProducts } from "@/data/products";

type InquiryFormState = {
  name: string;
  company: string;
  message: string;
};

const relatedMeta: Record<string, string> = {
  "Current Transformers": "Precision Series",
  Relays: "Protection Class",
  "Smart Meters": "Monitoring Suite",
  "Power Supplies": "Industrial Line",
  Breakers: "Safety Module",
};

export default function ProductDetailScreen({
  productId,
}: {
  productId: string;
}) {
  const product = getProductById(productId);
  const [selectedImg, setSelectedImg] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<InquiryFormState>({
    name: "",
    company: "",
    message: "",
  });

  const productCode = useMemo(() => product?.id.toUpperCase().replace(/-/g, "-"), [product?.id]);

  if (!product) {
    return null;
  }

  const related = getRelatedProducts(product.id, 4);
  const allImages = [product.image, ...product.thumbnails];
  const primarySpecs = product.specs.slice(0, 2).map((item) => {
    const [label, value] = item.split(":").map((part) => part.trim());
    return { label: label?.toUpperCase() || item.toUpperCase(), value: value || item };
  });

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />

      <main className="border-t border-white/5 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_34%),linear-gradient(180deg,_#0b111a_0%,_#0a0f17_100%)]">
        <div className="container mx-auto px-4 py-4 sm:px-5 lg:px-6">
          <nav className="mb-5 flex items-center gap-1.5 text-[11px] text-slate-500">
            <Link href="/" className="transition-colors hover:text-slate-200">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="transition-colors hover:text-slate-200">
              Components
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="truncate text-slate-300">{productCode}</span>
          </nav>

          <section className="grid gap-8 pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <div>
              <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#0d1623] shadow-[0_24px_80px_rgba(2,8,23,0.45)]">
                <div className="bg-[linear-gradient(180deg,#42b3ff_0%,#2489d6_100%)] p-6 sm:p-8">
                  <img
                    src={allImages[selectedImg]}
                    alt={product.name}
                    className="mx-auto aspect-square w-full max-w-[420px] object-contain drop-shadow-[0_18px_30px_rgba(2,8,23,0.4)]"
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {allImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImg(index)}
                    className={`group flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-[#0f1725] transition-all sm:h-20 sm:w-20 ${
                      selectedImg === index
                        ? "border-sky-400/80 shadow-[0_0_0_1px_rgba(56,189,248,0.25)]"
                        : "border-slate-800 hover:border-slate-600"
                    }`}
                    aria-label={`View product image ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                In Stock
              </div>
              <h1 className="max-w-xl text-[1.9rem] font-semibold leading-tight text-slate-50 sm:text-[2.15rem]">
                {product.name}
              </h1>
              <p className="mt-2 text-xs text-slate-500">
                Model ID: {productCode} | IEC 60044
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{product.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {primarySpecs.map((spec) => (
                  <div key={spec.label} className="rounded-lg border border-slate-800 bg-[#111827] px-4 py-3">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {spec.label}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-100">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#27456b] px-5 text-sm font-medium text-slate-100 transition-colors hover:bg-[#335985]">
                  <Download className="h-4 w-4" />
                  Download Datasheet
                </button>
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#0f1725] px-5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-[#152033]">
                  <AlertTriangle className="h-4 w-4" />
                  View Brochure
                </button>
              </div>
            </div>
          </section>

          <div className="border-t border-slate-900/90" />

          <section className="py-10">
            <h2 className="mb-5 text-lg font-semibold text-slate-100">Technical Specifications</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-900 bg-[#0f1623]">
              <table className="w-full text-sm">
                <thead className="bg-[#101a29]">
                  <tr className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                    <th className="px-5 py-4 text-left font-semibold">Parameter</th>
                    <th className="px-5 py-4 text-left font-semibold">Specification</th>
                    <th className="px-5 py-4 text-left font-semibold">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {product.technicalSpecs.map((spec, index) => (
                    <tr key={spec.parameter} className={index === 0 ? "" : "border-t border-slate-900"}>
                      <td className="px-5 py-4 text-slate-400">{spec.parameter}</td>
                      <td className="px-5 py-4 font-medium text-slate-100">{spec.specification}</td>
                      <td className="px-5 py-4 text-slate-400">{spec.unit || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-6 border-t border-slate-900/90 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-100">Common Applications</h2>
              <div className="space-y-4 rounded-xl border border-slate-900 bg-[#0d141f] p-5">
                {product.applications.map((application) => (
                  <div key={application} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    <span>{application}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 border-t border-slate-900 pt-4 text-sm text-slate-500">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Verified for industrial distribution and metering installations.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-lg font-semibold text-slate-100">Request an Inquiry</h2>
              <div className="rounded-xl border border-slate-900 bg-[#101826] p-5 shadow-[0_18px_40px_rgba(2,8,23,0.25)]">
                <p className="mb-4 text-sm text-slate-500">
                  Have questions about bulk pricing or custom specifications? Contact our engineering team.
                </p>

                {submitted ? (
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-5 text-sm text-emerald-200">
                    Your inquiry has been captured for {productCode}. Our team will follow up shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Full Name
                        </span>
                        <input
                          value={form.name}
                          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                          className="h-10 w-full rounded-md border border-slate-800 bg-[#0b1220] px-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-500"
                          placeholder="John Doe"
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                          Company/Email
                        </span>
                        <input
                          value={form.company}
                          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                          className="h-10 w-full rounded-md border border-slate-800 bg-[#0b1220] px-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-500"
                          placeholder="help@company.com"
                          required
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        Message
                      </span>
                      <textarea
                        value={form.message}
                        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                        rows={4}
                        className="w-full rounded-md border border-slate-800 bg-[#0b1220] px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-500"
                        placeholder="Tell us about your project requirements..."
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#3d5676] text-sm font-medium text-slate-100 transition-colors hover:bg-[#4a688f]"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-900/90 py-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">Related Components</h2>
                <p className="mt-1 text-sm text-slate-500">Products frequently reviewed alongside this model.</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-[#0f1725] text-slate-500">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-[#0f1725] text-slate-300">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group overflow-hidden rounded-xl border border-slate-800 bg-[#0f1725] transition-all hover:-translate-y-0.5 hover:border-slate-600 hover:shadow-[0_16px_34px_rgba(2,8,23,0.28)]"
                >
                  <div className="flex h-44 items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#e5edf7_100%)] p-5">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="inline-flex rounded-md border border-slate-700 bg-[#121d2d] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      {relatedMeta[relatedProduct.category] || "Component"}
                    </div>
                    <h3 className="line-clamp-2 text-sm font-semibold text-slate-100">{relatedProduct.name}</h3>
                    <div className="text-xs text-slate-500">{relatedProduct.category}</div>
                    <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
                      <FileText className="h-3.5 w-3.5" />
                      View Details
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
