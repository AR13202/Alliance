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
  const primarySpecs = product.highlights.slice(0, 2).map((item) => ({
    label: item.label.toUpperCase(),
    value: item.value,
  }));

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-page min-h-screen">
      <Navbar />

      <main className="site-main border-t" style={{ borderColor: "var(--site-border)" }}>
        <div className="container mx-auto px-4 py-4 sm:px-5 lg:px-6">
          <nav className="site-copy mb-5 flex items-center gap-1.5 text-[11px]">
            <Link href="/" className="transition-colors hover:opacity-80">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="transition-colors hover:opacity-80">
              Components
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="site-heading truncate">{productCode}</span>
          </nav>

          <section className="grid gap-8 pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <div>
              <div className="site-card overflow-hidden rounded-xl border">
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
                    className={`group flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border transition-all sm:h-20 sm:w-20 ${
                      selectedImg === index
                        ? "border-[color:var(--site-border-strong)]"
                        : "border-[color:var(--site-border)]"
                    }`}
                    style={{ backgroundColor: "var(--site-surface)" }}
                    aria-label={`View product image ${index + 1}`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--site-accent)" }}>
                In Stock
              </div>
              <h1 className="site-heading max-w-xl text-[1.9rem] font-semibold leading-tight sm:text-[2.15rem]">
                {product.name}
              </h1>
              <p className="site-copy mt-2 text-xs">
                Model ID: {productCode} | IEC 60044
              </p>
              <p className="site-copy mt-4 max-w-xl text-sm leading-7">{product.description}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {primarySpecs.map((spec) => (
                  <div key={spec.label} className="site-card rounded-lg border px-4 py-3">
                    <div className="site-copy text-[10px] font-semibold uppercase tracking-[0.18em]">
                      {spec.label}
                    </div>
                    <div className="site-heading mt-2 text-sm font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="site-button-primary inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors">
                  <Download className="h-4 w-4" />
                  Download Datasheet
                </button>
                <button className="site-button-secondary inline-flex h-11 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors">
                  <AlertTriangle className="h-4 w-4" />
                  View Brochure
                </button>
              </div>
            </div>
          </section>

          <div className="border-t" style={{ borderColor: "var(--site-border)" }} />

          <section className="py-10">
            <h2 className="site-heading mb-5 text-lg font-semibold">Technical Specifications</h2>
            <div className="site-card overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead style={{ backgroundColor: "var(--site-surface-muted)" }}>
                  <tr className="site-copy text-[10px] uppercase tracking-[0.16em]">
                    <th className="px-5 py-4 text-left font-semibold">Parameter</th>
                    <th className="px-5 py-4 text-left font-semibold">Specification</th>
                    <th className="px-5 py-4 text-left font-semibold">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {product.technicalSpecs.map((spec, index) => (
                    <tr key={spec.parameter} className={index === 0 ? "" : "border-t"} style={index === 0 ? undefined : { borderColor: "var(--site-border)" }}>
                      <td className="site-copy px-5 py-4">{spec.parameter}</td>
                      <td className="site-heading px-5 py-4 font-medium">{spec.specification}</td>
                      <td className="site-copy px-5 py-4">{spec.unit || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-6 border-t py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]" style={{ borderColor: "var(--site-border)" }}>
            <div>
              <h2 className="site-heading mb-5 text-lg font-semibold">Common Applications</h2>
              <div className="site-card space-y-4 rounded-xl border p-5">
                {product.applications.map((application) => (
                  <div key={application.label} className="site-copy flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--site-primary)" }} />
                    <span>{application.label}</span>
                  </div>
                ))}
                <div className="site-copy flex items-start gap-3 border-t pt-4 text-sm" style={{ borderColor: "var(--site-border)" }}>
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--site-accent)" }} />
                  <span>Verified for industrial distribution and metering installations.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="site-heading mb-5 text-lg font-semibold">Request an Inquiry</h2>
              <div className="site-card rounded-xl border p-5">
                <p className="site-copy mb-4 text-sm">
                  Have questions about bulk pricing or custom specifications? Contact our engineering team.
                </p>

                {submitted ? (
                  <div className="rounded-lg border px-4 py-5 text-sm" style={{ borderColor: "var(--site-border-strong)", backgroundColor: "var(--site-surface-muted)", color: "var(--site-heading)" }}>
                    Your inquiry has been captured for {productCode}. Our team will follow up shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="site-copy mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em]">
                          Full Name
                        </span>
                        <input
                          value={form.name}
                          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                          className="h-10 w-full rounded-md border px-3 text-sm outline-none transition-colors"
                          style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface-muted)", color: "var(--site-heading)" }}
                          placeholder="John Doe"
                          required
                        />
                      </label>
                      <label className="block">
                        <span className="site-copy mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em]">
                          Company/Email
                        </span>
                        <input
                          value={form.company}
                          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                          className="h-10 w-full rounded-md border px-3 text-sm outline-none transition-colors"
                          style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface-muted)", color: "var(--site-heading)" }}
                          placeholder="help@company.com"
                          required
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="site-copy mb-1.5 block text-[11px] font-medium uppercase tracking-[0.14em]">
                        Message
                      </span>
                      <textarea
                        value={form.message}
                        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                        rows={4}
                        className="w-full rounded-md border px-3 py-2.5 text-sm outline-none transition-colors"
                        style={{ borderColor: "var(--site-border)", backgroundColor: "var(--site-surface-muted)", color: "var(--site-heading)" }}
                        placeholder="Tell us about your project requirements..."
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      className="site-button-primary inline-flex h-10 w-full items-center justify-center rounded-md text-sm font-medium transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          <section className="border-t py-10" style={{ borderColor: "var(--site-border)" }}>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="site-heading text-lg font-semibold">Related Components</h2>
                <p className="site-copy mt-1 text-sm">Products frequently reviewed alongside this model.</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button className="site-card-soft site-copy flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="site-card-soft site-heading flex h-8 w-8 items-center justify-center rounded-full border">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="site-card group overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5"
                >
                  <div className="flex h-44 items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#e5edf7_100%)] p-5">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="site-chip inline-flex rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                      {relatedMeta[relatedProduct.category] || "Component"}
                    </div>
                    <h3 className="site-heading line-clamp-2 text-sm font-semibold">{relatedProduct.name}</h3>
                    <div className="site-copy text-xs">{relatedProduct.category}</div>
                    <div className="site-copy flex items-center gap-2 pt-1 text-xs">
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
