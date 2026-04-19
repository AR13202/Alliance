import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutScreen() {
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
            <img
              className="w-full h-full object-cover"
              alt="architectural blueprint overlaying a modern industrial facility"
              src="/stitch/about_hero.png"
            />
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-20 w-full">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                Established 1992
              </span>
              <h1 className="text-[3.5rem] leading-[1.1] font-extrabold text-primary tracking-tighter mb-6 font-headline">
                30+ Years of Excellence in <br /> Transformer Manufacturing.
              </h1>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                Established in 1992 in Chandigarh, Alliance Engineering Company has grown from a regional manufacturer to a trusted OEM partner for PSUs, Railways, and heavy industries across India.
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-24 bg-primary self-center"></div>
                <span className="font-headline font-bold text-primary italic">
                  Precision in every detail.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-8 font-headline">
                  Three Decades of Structural Excellence
                </h2>
                <p className="text-secondary mb-6 leading-relaxed">
                  Founded in Chandigarh in 1992, Alliance Engineering began with a singular vision: to deliver precision-engineered electrical components that form the unbreakable backbone of India's industrial infrastructure.
                </p>
                <p className="text-secondary mb-12 leading-relaxed">
                  Through a commitment to zero-defect manufacturing and continuous technical innovation, we have expanded from a local manufacturer to a national leader in high-voltage metering and industrial transformer design.
                </p>
                <div className="p-8 bg-surface-container-lowest rounded-xl border-l-4 border-primary">
                  <p className="text-primary font-bold italic text-lg">
                    "Our history is written in the stability of the industrial grids we build and the trust of the PSUs and Railways we serve."
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                <div className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all hover:bg-surface-bright border border-transparent hover:border-primary/10 shadow-sm">
                  <div className="flex items-start gap-6">
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors font-headline">
                      1992
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2 font-headline">
                        The Foundation
                      </h4>
                      <p className="text-secondary text-sm">
                        Inception in Chandigarh with a focus on regional electrical contracting and design precision.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all hover:bg-surface-bright border border-transparent hover:border-primary/10 shadow-sm">
                  <div className="flex items-start gap-6">
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors font-headline">
                      2005
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2 font-headline">
                        Industrial Pivot
                      </h4>
                      <p className="text-secondary text-sm">
                        Expansion into large-scale industrial projects and specialized electrical automation systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all hover:bg-surface-bright border border-transparent hover:border-primary/10 shadow-sm">
                  <div className="flex items-start gap-6">
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors font-headline">
                      2015
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2 font-headline">
                        Quality Benchmark
                      </h4>
                      <p className="text-secondary text-sm">
                        Achieved ISO 9001:2015 certification, setting a new standard for operational excellence in the sector.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-square bg-surface-container rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="sophisticated electrical components"
                    src="/stitch/about_history.png"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-12 rounded-xl hidden lg:block shadow-2xl">
                  <p className="text-2xl font-bold leading-tight font-headline">
                    30+ Years of
                    <br />
                    Unmatched
                    <br />
                    Expertise.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-16">
                  <h3 className="text-primary font-bold tracking-[0.1em] text-xs uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-primary"></span> Our Mission
                  </h3>
                  <h2 className="text-4xl font-extrabold text-tertiary mb-6 font-headline">
                    Unbreakable Industrial Backbone.
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    To deliver precision-engineered electrical components that form the unbreakable backbone of India's industrial infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="text-primary font-bold tracking-[0.1em] text-xs uppercase mb-4 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-primary"></span> Our Vision
                  </h3>
                  <h2 className="text-4xl font-extrabold text-tertiary mb-6 font-headline">
                    Most Trusted Name.
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    To remain the most trusted name in instrument and control transformers through zero-defect manufacturing and continuous technical innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Bento Grid */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-primary mb-4 font-headline">
                Foundation of Values
              </h2>
              <p className="text-secondary max-w-xl mx-auto">
                Our work is guided by four industrial pillars that ensure every project meets the Alliance standard.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
              <div className="md:col-span-3 lg:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    verified
                  </span>
                  <h4 className="text-xl font-bold text-primary mb-4 font-headline">
                    Uncompromising Quality
                  </h4>
                  <p className="text-secondary text-sm">
                    ISO 9001:2015 certified manufacturing. Quality is not a goal; it is our operational baseline.
                  </p>
                </div>
              </div>
              <div className="md:col-span-3 lg:col-span-4 bg-primary text-white p-10 rounded-xl flex flex-col justify-between shadow-lg">
                <div>
                  <span
                    className="material-symbols-outlined text-white/50 text-4xl mb-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    engineering
                  </span>
                  <h4 className="text-xl font-bold mb-4 font-headline">Customer-Centric Engineering</h4>
                  <p className="text-on-primary-container text-sm opacity-90">
                    Custom built-to-spec transformers designed for non-standard requirements and legacy panels.
                  </p>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">
                    bolt
                  </span>
                  <h4 className="text-xl font-bold text-primary mb-4 font-headline">
                    Timely Execution
                  </h4>
                  <p className="text-secondary text-sm">
                    North India's fastest turnaround. Streamlined manufacturing designed for rapid deployment.
                  </p>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-8 bg-surface-container-lowest p-10 rounded-xl flex items-center gap-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="hidden sm:block">
                  <span className="material-symbols-outlined text-primary text-6xl">
                    handshake
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2 font-headline">
                    Integrity & Transparency
                  </h4>
                  <p className="text-secondary text-sm">
                    We build partnerships, not just projects. Honest communication and transparent operations.
                  </p>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-4 bg-secondary-container p-10 rounded-xl flex flex-col justify-center border border-primary/5">
                <p className="text-primary font-bold text-center text-2xl tracking-tighter font-headline">
                  Zero Defects.
                  <br />
                  Zero Accidents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Certifications */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight font-headline">
                Committed to Global Standards.
              </h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                Every Alliance Engineering project is backed by our ISO 9001:2015 certification and a legacy of absolute precision.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl opacity-80">
                    workspace_premium
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl opacity-80">
                    verified_user
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Certified Safety
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-white text-primary px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95">
              View Our Certifications
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
