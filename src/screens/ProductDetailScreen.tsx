"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Plus,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductById, getRelatedProducts } from "@/data/products";

type InquiryFormState = {
  name: string;
  email: string;
  message: string;
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
    email: "",
    message: "",
  });

  const productCode = useMemo(() => product?.id.toUpperCase().replace(/-/g, "-"), [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-inter">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:underline">Return to Catalog</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);
  const allImages = product.thumbnails.length > 0 ? product.thumbnails : [product.image];
  const primarySpecs = product.highlights.slice(0, 3);

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      <Navbar />

      <main className="flex-grow pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-10 flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.2em] text-secondary/40">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary transition-colors">CATALOG</Link>
            <ChevronRight className="w-3 h-3 text-primary/30" />
            <span className="text-primary">{product.category}</span>
          </nav>

          {/* Product Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-20">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] rounded-2xl border border-outline-variant/10 overflow-hidden flex items-center justify-center p-12 group">
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                    {product.status}
                  </span>
                  {product.standard && (
                    <span className="bg-white/80 backdrop-blur-sm text-secondary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] border border-outline-variant/20">
                      {product.standard}
                    </span>
                  )}
                </div>
                
                <img
                  src={allImages[selectedImg]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {allImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImg(index)}
                      className={`relative w-24 aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden flex-shrink-0 bg-surface-container-low ${
                        selectedImg === index ? "border-primary shadow-lg scale-105" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-contain p-2" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-8 bg-primary"></span>
                  <span className="text-primary text-[11px] font-black tracking-[0.3em] uppercase">Industrial Series</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-secondary tracking-tight leading-none mb-4">
                  {product.name}
                </h1>
                <p className="text-secondary/60 text-sm font-medium tracking-wide">
                  Model Ref: <span className="text-primary font-bold">{productCode}</span> | {product.brand}
                </p>
              </div>

              <p className="text-secondary/70 text-base leading-relaxed mb-10 max-w-xl">
                {product.description}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                {primarySpecs.map((spec) => (
                  <div key={spec.label} className="bg-surface-container-low/50 border border-outline-variant/10 rounded-xl p-4 flex flex-col items-center text-center">
                    <span className="text-[10px] font-black tracking-[0.15em] text-secondary/40 uppercase mb-2">{spec.label}</span>
                    <span className="text-lg font-black text-secondary">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 bg-primary text-white font-black text-xs tracking-[0.2em] uppercase py-5 rounded-xl shadow-xl shadow-primary/20 hover:bg-secondary transition-colors group flex items-center justify-center gap-3">
                  <Download className="w-4 h-4" />
                  Request Datasheet
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex-1 border-2 border-outline-variant/10 text-secondary font-black text-xs tracking-[0.2em] uppercase py-5 rounded-xl hover:border-primary/30 transition-colors flex items-center justify-center gap-3">
                  <FileText className="w-4 h-4" />
                  Technical Brochure
                </button>
              </div>
            </div>
          </section>

          {/* Detailed Content Tabs/Sections */}
          <div className="space-y-32">
            
            {/* Technical Specifications */}
            <section>
              <div className="flex items-end justify-between mb-12 border-l-4 border-primary pl-6">
                <div>
                  <h2 className="text-3xl font-black text-secondary tracking-tight">Technical Specifications</h2>
                  <p className="text-secondary/50 text-sm font-medium mt-2 uppercase tracking-widest">Engineering Data Sheet</p>
                </div>
                <Zap className="w-10 h-10 text-primary/10" />
              </div>

              <div className="bg-white border border-outline-variant/10 rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                  <thead>
                    <tr className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
                      <th className="px-8 py-5 text-[11px] font-black tracking-[0.2em] uppercase">Parameter</th>
                      <th className="px-8 py-5 text-[11px] font-black tracking-[0.2em] uppercase">Specification</th>
                      <th className="px-8 py-5 text-[11px] font-black tracking-[0.2em] uppercase">Unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {product.technicalSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-primary/5 transition-colors group">
                        <td className="px-8 py-5 text-sm font-bold text-secondary/40 uppercase tracking-wider group-hover:text-primary transition-colors">{spec.parameter}</td>
                        <td className="px-8 py-5 text-base font-black text-secondary">{spec.specification}</td>
                        <td className="px-8 py-5 text-sm font-medium text-secondary/60">{spec.unit || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Application & Standards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-secondary tracking-tight">Verified Applications</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.applications.map((app, i) => (
                    <div key={i} className="bg-surface-container-low border border-outline-variant/5 rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-colors">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(35,34,116,0.3)]"></div>
                      <span className="text-secondary font-bold text-sm uppercase tracking-wide">{app.label}</span>
                    </div>
                  ))}
                </div>
                
                {product.applicationNote && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#eef2ff] to-[#f8fafc] rounded-2xl border border-primary/5 flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <p className="text-secondary/70 text-sm font-medium leading-relaxed italic">
                      "{product.applicationNote}"
                    </p>
                  </div>
                )}
              </section>

              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-black text-secondary tracking-tight">Compliance & Standards</h2>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {product.standards.map((std, i) => (
                    <div key={i} className="bg-white border-2 border-outline-variant/10 rounded-xl px-6 py-4 flex flex-col items-center justify-center min-w-[120px] hover:border-secondary/40 transition-colors">
                      <span className="text-[9px] font-black text-secondary/30 tracking-[0.2em] mb-1">STANDARD</span>
                      <span className="text-sm font-black text-secondary uppercase tracking-[0.1em]">{std}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Customization Options */}
            {product.customizations.length > 0 && (
              <section className="bg-secondary rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="mb-12">
                     <span className="text-primary text-[11px] font-black tracking-[0.4em] uppercase block mb-4">Engineered Variations</span>
                     <h2 className="text-4xl font-black tracking-tight leading-none mb-4">Industrial Customizations</h2>
                     <p className="text-white/60 max-w-2xl font-medium">Tailor this component to your infrastructure requirements with our modular engineering options.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.customizations.map((opt, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group">
                        <div className="flex items-center justify-between mb-6">
                          <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black">0{i+1}</span>
                          <Plus className="w-5 h-5 opacity-30 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-wider mb-3 leading-tight">{opt.option}</h3>
                        <p className="text-white/50 text-sm leading-relaxed font-medium">{opt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Inquiry Section */}
            <section id="inquiry" className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 border-2 border-outline-variant/10 rounded-[2.5rem] overflow-hidden">
               <div className="bg-primary p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h2 className="text-4xl font-black tracking-tight leading-none mb-6">Engineering Consultation</h2>
                  <p className="text-white/70 font-medium mb-12 text-lg">
                    Speak with our technical specialists for bulk procurement or specific engineering requirements.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-white/40 text-[10px] font-black tracking-[0.2em] uppercase">Ready to ship</span>
                        <span className="block font-bold">Standard 4-6 Weeks</span>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="p-12 lg:p-16 bg-white">
                 {submitted ? (
                   <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-secondary tracking-tight">Inquiry Received</h3>
                        <p className="text-secondary/50 font-medium mt-2">Reference ID: {productCode?.slice(0, 8)}</p>
                      </div>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-black text-xs tracking-widest uppercase hover:underline"
                      >
                        Send Another message
                      </button>
                   </div>
                 ) : (
                   <form onSubmit={handleInquirySubmit} className="space-y-8">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <div className="space-y-4">
                         <label className="block text-[10px] font-black tracking-[0.2em] text-secondary/40 uppercase">Full Name</label>
                         <input 
                           required
                           type="text"
                           placeholder="Enter your name"
                           className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary px-0 py-3 text-secondary font-bold placeholder:text-secondary/20 outline-none transition-all"
                           value={form.name}
                           onChange={e => setForm({...form, name: e.target.value})}
                         />
                       </div>
                       <div className="space-y-4">
                         <label className="block text-[10px] font-black tracking-[0.2em] text-secondary/40 uppercase">Business Email</label>
                         <input 
                           required
                           type="email"
                           placeholder="name@company.com"
                           className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary px-0 py-3 text-secondary font-bold placeholder:text-secondary/20 outline-none transition-all"
                           value={form.email}
                           onChange={e => setForm({...form, email: e.target.value})}
                         />
                       </div>
                     </div>

                     <div className="space-y-4">
                       <label className="block text-[10px] font-black tracking-[0.2em] text-secondary/40 uppercase">Technical Requirements</label>
                       <textarea 
                         required
                         rows={4}
                         placeholder="Describe your specifications..."
                         className="w-full bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-primary px-0 py-3 text-secondary font-bold placeholder:text-secondary/20 outline-none transition-all resize-none"
                         value={form.message}
                         onChange={e => setForm({...form, message: e.target.value})}
                       />
                     </div>

                     <button className="w-full bg-secondary text-white font-black text-[11px] tracking-[0.3em] uppercase py-6 rounded-xl hover:bg-primary transition-all shadow-xl shadow-secondary/20">
                       Submit Technical Inquiry
                     </button>
                   </form>
                 )}
               </div>
            </section>

            {/* Related Products Grid */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <div>
                   <h2 className="text-3xl font-black text-secondary tracking-tight">Related Components</h2>
                   <p className="text-secondary/50 font-medium uppercase tracking-[0.2em] text-[10px] mt-2">Frequently specified together</p>
                </div>
                <Link href="/products" className="text-primary font-black text-xs tracking-widest uppercase hover:underline flex items-center gap-2">
                  View Catalog
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {related.map((relProduct) => (
                  <Link 
                    key={relProduct.id}
                    href={`/products/${relProduct.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-outline-variant/10 group h-full flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-b from-[#f8fafc] to-white flex items-center justify-center p-8 relative overflow-hidden">
                       <img 
                        src={relProduct.image} 
                        alt={relProduct.name}
                        className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                       />
                       <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-primary text-[9px] font-black tracking-[0.3em] uppercase mb-2 block">{relProduct.category}</span>
                      <h3 className="text-secondary font-black text-lg leading-tight mb-4 group-hover:text-primary transition-colors">{relProduct.name}</h3>
                      <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                         <span className="text-secondary/40 text-[10px] font-bold uppercase tracking-widest">{relProduct.status}</span>
                         <Plus className="w-5 h-5 text-primary/30 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
