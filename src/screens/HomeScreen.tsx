import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const featuredProducts = [
  {
    id: "ct-50-5",
    title: "Electric Solid State Meter",
    subtitle: "Industrial Utility",
    label: "Protection",
    price: "$499.00",
    image: "https://placehold.co/420x420/1ed6c1/0a5a57?text=Meter",
    badge: "New",
  },
  {
    id: "sm-1000",
    title: "Precision Digital Multimeter",
    subtitle: "Field Test Equipment",
    label: "Measurement",
    price: "$159.50",
    image: "https://placehold.co/420x420/f2d08f/6b4a18?text=Meter",
    badge: "",
  },
  {
    id: "mcb-63a",
    title: "Monitor Power Station Unit",
    subtitle: "Industrial Monitoring",
    label: "Distribution",
    price: "$675.00",
    image: "https://placehold.co/420x420/7a8c9d/1d2a35?text=Station",
    badge: "",
  },
  {
    id: "relay-pr200",
    title: "Solid Air Power Analyzer 300",
    subtitle: "Portable Sensor",
    label: "Conversion",
    price: "$89.00",
    image: "https://placehold.co/420x420/57c0ff/0c3f65?text=Analyzer",
    badge: "Top",
  },
];

const trustedCompanies = [
  "VoltEdge Industries",
  "NexaGrid Power",
  "Astra Utilities",
  "IronCore Systems",
  "Northline Energy",
  "Axis Control Works",
];

const categories = [
  {
    title: "Current Transformers",
    href: "/products?category=current-transformers",
    image: "https://placehold.co/800x420/c9d8d7/48545c?text=CT",
    eyebrow: "Electrical Measurement Components | Trending",
  },
  {
    title: "Monitoring & Control",
    href: "/products?category=other-electrical-products",
    image: "https://placehold.co/800x420/bccfcb/53646b?text=Control",
    eyebrow: "Industrial Automation",
  },
];

const reliabilityPoints = [
  {
    title: "ISO 9001 Certified",
    icon: ShieldCheck,
    text: "Global quality management standards in manufacturing.",
  },
  {
    title: "Fast Global Delivery",
    icon: Truck,
    text: "Logistics centers located in 5 major continents.",
  },
  {
    title: "Expert Support",
    icon: Headphones,
    text: "24/7 technical hotline with electrical engineers.",
  },
  {
    title: "5-Year Warranty",
    icon: Clock3,
    text: "Comprehensive protection on all industrial lines.",
  },
];

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />

      <main className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05),_transparent_34%),linear-gradient(180deg,_#0f141c_0%,_#0c1017_100%)]">
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#0f1623]">
          <img
            // src="https://placehold.co/1400x620/5f8497/213446?text=Industrial+Plant"
            src="/hero_section.png"
            alt="Industrial plant"
            className="h-[72vh] min-h-[520px] w-full object-cover sm:h-[82vh] lg:h-[100dvh]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,22,35,0.9)_0%,rgba(15,22,35,0.6)_42%,rgba(15,22,35,0.16)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-center">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-10">
              <div className="max-w-[760px]">
                <h1 className="max-w-[720px] text-[2.65rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[3.55rem] lg:text-[4.1rem]">
                  Powering Industrial Efficiency
                  <br />
                  with Precision
                </h1>
                <p className="mt-4 max-w-[520px] text-sm leading-6 text-slate-300 sm:leading-7">
                  High-performance electrical components engineered for monitoring, protection, and power distribution. From smart meters to current transformers, reliability starts with precision.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#e9f0fa] px-4 text-sm font-medium text-slate-900 sm:w-auto"
                  >
                    View Full Catalog
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-slate-500/50 bg-[#111b2a]/50 px-4 text-sm font-medium text-slate-100 sm:w-auto"
                  >
                    Technical Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 sm:px-5 lg:px-6">
          <section className="py-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/80">
                  About Us
                </div>
                <h2 className="mt-3 max-w-[520px] text-[30px] font-semibold leading-tight text-white sm:text-[36px]">
                  Precision-engineered electrical systems for modern industry.
                </h2>
                <p className="mt-4 max-w-[620px] text-[15px] leading-8 text-slate-400">
                  Alliance Engineering Company delivers dependable electrical components for monitoring, protection, and power distribution. We work with industrial buyers, utilities, and engineering teams that need performance, consistency, and long-term reliability across every installation.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[10px] border border-slate-800 bg-[#131b27] px-5 py-6">
                  <div className="text-[28px] font-semibold text-white">20+</div>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">Product Lines</p>
                </div>
                <div className="rounded-[10px] border border-slate-800 bg-[#131b27] px-5 py-6">
                  <div className="text-[28px] font-semibold text-white">50+</div>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">Industry Partners</p>
                </div>
                <div className="rounded-[10px] border border-slate-800 bg-[#131b27] px-5 py-6">
                  <div className="text-[28px] font-semibold text-white">30+</div>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">Years Of Experience</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <section className="overflow-hidden border-y border-slate-800 bg-[#111722] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-5 lg:px-6">
            <div className="mb-8 sm:mb-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300/80">
                Trusted By Companies
              </div>
              <h2 className="mt-3 text-[28px] font-semibold tracking-tight text-slate-100 sm:text-[32px]">
                Preferred by industrial teams worldwide
              </h2>
              <p className="mt-2 max-w-[620px] text-[13px] leading-6 text-slate-500">
                Utilities, automation partners, and manufacturing operators rely on our components for dependable performance across critical infrastructure.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#111722_0%,rgba(17,23,34,0)_100%)] sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#111722_0%,rgba(17,23,34,0)_100%)] sm:w-24" />

              <div className="marquee-track flex w-max gap-4">
                {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                  <div
                    key={`${company}-${index}`}
                    className="flex min-w-[220px] items-center gap-4 rounded-[12px] border border-slate-800 bg-[#131b27] px-5 py-4 shadow-[0_12px_30px_rgba(2,8,23,0.16)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1a2534] text-sm font-semibold text-sky-300">
                      {company
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">{company}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                        Industry Partner
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 sm:px-5 lg:px-6">
          <section className="py-12 sm:py-16">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-[30px] font-semibold text-slate-100">Primary Categories</h2>
                <p className="mt-2 max-w-[520px] text-[13px] leading-6 text-slate-500">
                  Explore our core product families built for electrical measurement, monitoring, and industrial control.
                </p>
              </div>
              <Link href="/products" className="text-[11px] text-slate-500 transition-colors hover:text-slate-300">
                Browse all categories
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group relative min-h-[220px] overflow-hidden rounded-[6px] border border-slate-900 bg-[#121924] sm:min-h-[250px] md:min-h-[285px]"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[250px] md:h-[285px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,36,0.04)_0%,rgba(17,25,36,0.92)_82%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-slate-500">{category.eyebrow}</div>
                    <h3 className="text-[22px] font-semibold text-white">{category.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="border-y border-slate-800 bg-[#111722] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-5 lg:px-6">
            <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-10 sm:flex-row sm:items-center sm:gap-8">
              <div>
                <h2 className="text-[30px] font-semibold tracking-tight text-slate-100 sm:text-[32px]">Featured Products</h2>
                <p className="mt-2 max-w-[520px] text-[13px] leading-6 text-slate-500">
                  Discover a curated selection of high-demand components chosen for reliability, accuracy, and field performance.
                </p>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-[#1a2230] text-slate-500">
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-[#1a2230] text-slate-300">
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group flex min-h-[390px] flex-col overflow-hidden rounded-[10px] border border-slate-800 bg-[#121924] transition-all hover:-translate-y-0.5 hover:border-slate-600 sm:min-h-[420px]"
                >
                  <div className="relative mx-3 mt-3 overflow-hidden rounded-[8px] bg-[linear-gradient(180deg,#e7f0f5_0%,#d4e0ea_100%)]">
                    {product.badge && (
                      <div className="absolute right-3 top-3 rounded-md bg-emerald-500/85 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-[260px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-3 pb-4 pt-4">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#546988]">
                        {product.label}
                      </div>
                      <h3 className="mt-2 text-[15px] font-semibold leading-6 text-slate-100">{product.title}</h3>
                      <p className="mt-2 text-[11px] text-slate-500">{product.subtitle}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-900 pt-4">
                      <div className="text-[15px] font-semibold text-white">{product.price}</div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">View Product</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-6 sm:px-5 lg:px-6">
          <section className="grid gap-8 py-12 sm:py-14 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <div className="pt-2">
              <h2 className="max-w-lg text-[2.3rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.75rem]">
                Built for Industrial Reliability
              </h2>
              <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-slate-400 sm:text-[16px] sm:leading-8">
                Every product in our catalog undergoes rigorous stress testing at 120% load capacity. Our manufacturing partners adhere to strict ISO standards, ensuring that when you install an Industrial Electric component, you're installing peace of mind.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {reliabilityPoints.map((item) => (
                  <div key={item.title} className="rounded-[8px] border border-slate-800 bg-[#131923] px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full text-[#5a79a2]">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-slate-100">{item.title}</h3>
                    <p className="mt-1.5 max-w-[220px] text-[13px] leading-6 text-slate-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -left-3 top-5 h-16 w-16 rounded-[10px] bg-[#1a2230]" />
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-[10px] bg-[#1a2230]" />
              <div className="relative overflow-hidden rounded-[10px] border border-[#26535a] bg-[radial-gradient(circle_at_center,_rgba(99,228,225,0.28)_0%,_rgba(34,104,111,0.95)_50%,_rgba(31,94,100,1)_100%)] shadow-[0_26px_60px_rgba(0,0,0,0.28)]">
                <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center sm:min-h-[420px] sm:px-8 lg:min-h-[460px]">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center text-white">
                    <ShieldCheck className="h-20 w-20 stroke-[1.25]" />
                  </div>
                  <div className="text-[26px] font-light uppercase tracking-[0.3em] text-white/95">Reliability</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="relative overflow-hidden rounded-[14px] border border-[#6782a3] bg-[linear-gradient(180deg,#5d799d_0%,#567293_100%)] px-5 py-8 text-center sm:px-10 sm:py-12">
              <div className="absolute right-8 top-4 text-[82px] font-semibold italic text-white/10">⚡</div>
              <h2 className="text-[24px] font-semibold text-white sm:text-[26px]">Request a Custom Configuration</h2>
              <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-slate-100/85 sm:text-[17px] sm:leading-8">
                Need a specific specification for your facility? Our engineering team can help you design a custom power solution tailored to your exact requirements.
              </p>
              <div className="mx-auto mt-8 flex max-w-[520px] flex-col items-center justify-center gap-3 sm:flex-row">
                <input
                  placeholder="Enter your business email"
                  className="h-12 w-full rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/55"
                />
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center rounded-md bg-white px-6 text-sm font-semibold text-slate-900"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
