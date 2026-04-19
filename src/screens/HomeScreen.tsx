"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Headphones, Clock, Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomeScreen() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      <Navbar />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center px-6 md:px-12 py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/stitch/hero.jpg"
              alt="Industrial Precision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto md:mx-0">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary-container text-white rounded-full">
              ISO 9001:2015 Certified · Est. 1992 · Chandigarh, India
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6 md:mb-8 font-headline">
              Precision Electrical Equipment.<br />
              <span className="text-tertiary">Engineered for Every Market.</span>
            </h1>
            <p className="text-xl text-secondary max-w-2xl mb-12 leading-relaxed">
              Current transformers, control transformers & battery chargers — IS & IEC compliant, manufactured in India, trusted globally.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-on-primary rounded-md font-bold transition-all hover:translate-y-[-2px] shadow-xl shadow-primary/20 font-headline"
              >
                Request a Quote →
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-4 border-2 border-outline-variant/30 text-primary rounded-md font-bold hover:bg-surface-container transition-all font-headline text-center"
              >
                View Product Catalogue
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-4 items-center text-sm font-bold text-secondary">
              <span>GeM Registered</span><span className="opacity-30">|</span>
              <span>IREPS Registered</span><span className="opacity-30">|</span>
              <span>Udyam MSME</span><span className="opacity-30">|</span>
              <span>ISO 9001:2015</span><span className="opacity-30">|</span>
              <span>30+ Years</span>
            </div>
          </div>
        </section>

        {/* Clients Marquee Section */}
        <section className="bg-surface-container-low py-6 border-y border-outline-variant/10 overflow-hidden group">


          <div className="relative flex overflow-hidden">
            <div className="flex marquee-track gap-8 md:gap-12 items-center py-4 group-hover:[animation-play-state:paused]">
              {[
                { name: "PowerGrid", logo: "/client_logos/Power_Grid_Corporation_of_India_Ltd..svg" },
                { name: "JSW Group", logo: "/client_logos/JSW_Group_Logo.png" },
                { name: "HDFC Bank", logo: "/client_logos/hdfc_bank_logo.svg" },
                { name: "Reliance Jio", logo: "/client_logos/jio.png" },
                { name: "BHEL", logo: "/stitch/clients/bhel.png" },
                { name: "NTPC", logo: "/stitch/clients/ntpc.png" },
                { name: "NHPC", logo: "/stitch/clients/nhpc.png" },
                { name: "ESAB", logo: "/client_logos/esab_logo.png" },
                { name: "Panjab University", logo: "/client_logos/pu_logo.png" },
                { name: "ISB", logo: "/client_logos/isb.svg" },
              ].concat([
                { name: "PowerGrid", logo: "/client_logos/Power_Grid_Corporation_of_India_Ltd..svg" },
                { name: "JSW Group", logo: "/client_logos/JSW_Group_Logo.png" },
                { name: "HDFC Bank", logo: "/client_logos/hdfc_bank_logo.svg" },
                { name: "Reliance Jio", logo: "/client_logos/jio.png" },
                { name: "BHEL", logo: "/stitch/clients/bhel.png" },
                { name: "NTPC", logo: "/stitch/clients/ntpc.png" },
                { name: "NHPC", logo: "/stitch/clients/nhpc.png" },
                { name: "ESAB", logo: "/client_logos/esab_logo.png" },
                { name: "Panjab University", logo: "/client_logos/pu_logo.png" },
                { name: "ISB", logo: "/client_logos/isb.svg" },
              ]).map((client, idx) => (
                <div key={idx} className="flex-shrink-0 w-32 sm:w-40 md:w-48 h-16 md:h-20 flex items-center justify-center transition-all duration-500">
                  <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/stitch/about.jpg"
                  alt="Industrial Precision Component"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 p-6 md:p-8 bg-primary text-white rounded-xl shadow-2xl">
                <p className="text-[10px] md:text-sm font-label uppercase tracking-widest mb-1 md:mb-2 opacity-80">
                  Established
                </p>
                <p className="text-3xl md:text-5xl font-extrabold font-headline">1992</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-8 leading-tight font-headline">
                Defining the Standards of Structural Precision
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-12">
                For over three decades, Alliance Engineering has stood at the
                intersection of architectural clarity and industrial performance.
                We don't just manufacture components; we engineer the
                foundations of modern industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2 font-headline">30+</p>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                    <strong>Years of Manufacturing Excellence</strong>
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-primary mb-2 font-headline">500+</p>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                    <strong>Industrial Clients Served</strong>
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-primary mb-2 font-headline">20+</p>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                    <strong>Product Variants Available</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-primary mb-4 font-headline">
                  What We Manufacture
                </h2>
                <p className="text-secondary max-w-2xl">
                  From precision metering current transformers for HVPN and Powergrid substations, to rugged control transformers powering CNC and automation panels, Alliance Engineering delivers engineered reliability at every voltage level.
                </p>
              </div>
              <Link
                href="/products"
                className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2 group font-headline"
              >
                Browse All Categories
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg">
                <img
                  src="/stitch/transformers.jpg"
                  alt="Current Transformers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all"></div>
                <div className="absolute bottom-0 left-0 p-12 text-white">
                  <h3 className="text-3xl font-bold mb-2 font-headline">Current Transformers</h3>
                  <p className="opacity-80 max-w-sm">
                    High-accuracy monitoring for power distribution networks.
                  </p>
                </div>
              </div>
              <div className="group relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg">
                <img
                  src="/stitch/monitoring.jpg"
                  alt="Monitoring & Control"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-tertiary/60 group-hover:bg-tertiary/40 transition-all"></div>
                <div className="absolute bottom-0 left-0 p-12 text-white">
                  <h3 className="text-3xl font-bold mb-2 font-headline">Monitoring & Control</h3>
                  <p className="opacity-80 max-w-sm">
                    Intelligent command systems for automated industrial
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-headline">
                  Featured Products
                </h2>
                <p className="text-secondary max-w-2xl">
                  Precision-matched equipment engineered for critical industrial systems.
                </p>
              </div>
              <div className="flex gap-4 self-end md:self-auto">
                <button
                  onClick={() => scrollCarousel('left')}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-primary hover:bg-surface-container transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-primary hover:bg-surface-container transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-8 snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  id: 1,
                  name: "Solid State Meter",
                  category: "Energy Systems",
                  desc: "Advanced industrial power metering with real-time analytics and sub-0.1% accuracy.",
                  img: "/stitch/meter.png"
                },
                {
                  id: 2,
                  name: "Digital Multimeter",
                  category: "Test & Measurement",
                  desc: "Professional engineering-grade testing equipment for labs and field diagnostics.",
                  img: "/stitch/multimeter.png"
                },
                {
                  id: 3,
                  name: "Power Station Unit",
                  category: "Power Control",
                  desc: "Robust centralized control units designed for high-availability industrial facilities.",
                  img: "/stitch/power_station.png"
                },
                {
                  id: 4,
                  name: "Oil Filtration Plant",
                  category: "Oil Filtration",
                  desc: "High-capacity mobile filtration reaching moisture levels below 5 PPM and BDV 70 kV.",
                  img: "/assets/products/transformer-oil-filtration-plant/view-1.png",
                  fallback: "/stitch/transformers.jpg"
                }
              ].map((product) => (
                <div
                  key={product.id}
                  className="w-[85vw] md:w-[25vw] snap-start bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 flex-shrink-0 flex flex-col"
                >
                  <div className="h-48 bg-surface-container rounded-lg mb-6 flex items-center justify-center p-8">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        if (product.fallback) (e.target as HTMLImageElement).src = product.fallback;
                      }}
                    />
                  </div>
                  <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest font-label">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-extrabold text-primary mb-3 font-headline line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-secondary text-sm mb-8 leading-relaxed line-clamp-2">
                    {product.desc}
                  </p>
                  <button className="w-full py-4 border border-outline-variant/50 text-primary font-bold hover:bg-primary hover:text-white transition-all rounded-md font-headline mt-auto">
                    View Specifications
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Us Section */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight font-headline">
                  Why Industrial Buyers Choose Alliance Engineering
                </h2>
                <p className="text-xl opacity-80 mb-12">
                  We don't just manufacture components; we engineer foundations of
                  modern industry that exceed the most stringent Indian and international standards.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 md:gap-y-16">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 font-headline">ISO Quality Testing</h4>
                      <p className="text-sm opacity-60">In-house testing facility ensuring IS 2705 / IS 3156 compliance.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                      <Truck className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 font-headline">North India’s Fastest</h4>
                      <p className="text-sm opacity-60">Streamlined manufacturing process designed for rapid deployment.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                      <ShieldCheck className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 font-headline">MSME Pricing Advantage</h4>
                      <p className="text-sm opacity-60">Direct manufacturer pricing without compromising on industrial-grade reliability.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                      <Headphones className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 font-headline">Custom Engineering</h4>
                      <p className="text-sm opacity-60">Built-to-spec transformers for non-standard requirements and legacy panels.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&auto=format&fit=crop"
                  alt="Technical Excellence"
                  className="rounded-2xl shadow-3xl grayscale opacity-40 mix-blend-screen"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Configuration Section */}
        <section className="px-6 md:px-12 bg-surface py-20 md:py-32">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 leading-tight font-headline">
                Request a Technical<br className="hidden md:block" />Consultation
              </h2>
              <p className="text-lg text-secondary mb-12 leading-relaxed max-w-lg">
                Need a custom electrical solution? Our engineering team provides
                detailed consultation for large-scale industrial projects. Fill
                out the form and we'll reach out within 24 business hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                      Email Us
                    </p>
                    <p className="font-bold text-on-surface">sales@allianceengineering.in</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                      Direct Line
                    </p>
                    <p className="font-bold text-on-surface">+91 (172) 400 1234</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full mt-10 md:mt-0">
              <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 sm:p-8 md:p-12">
                <form className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-[#f1f1f1] border-none rounded py-4 px-6 text-sm placeholder:text-black/60 outline-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Engineering Solutions Ltd."
                        className="w-full bg-[#f1f1f1] border-none rounded py-4 px-6 text-sm placeholder:text-black/60 outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                      Product Interest
                    </label>
                    <div className="relative">
                      <select className="w-full bg-[#f1f1f1] border-none rounded py-4 px-6 text-sm appearance-none outline-none">
                        <option>Current Transformer</option>
                        <option>Control Transformer</option>
                        <option>Battery Charger</option>
                        <option>Potential Transformer</option>
                        <option>Tender</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-secondary font-label">
                      Message / Technical Requirements *
                    </label>
                    <textarea
                      placeholder="Describe your product requirements, CT ratio, burden, accuracy class, quantity, delivery location..."
                      rows={5}
                      className="w-full bg-[#f1f1f1] border-none rounded py-4 px-6 text-sm placeholder:text-black/60 outline-none resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white font-bold rounded text-sm transition-all hover:opacity-90 active:scale-[0.98] font-headline"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
