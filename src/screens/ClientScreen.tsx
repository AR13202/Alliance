import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ClientScreen() {
  const publicClients = [
    { name: "POWERGRID", logo: "/stitch/clients/powergrid.png" },
    { name: "HVPN (Haryana Vidyut Prasaran Nigam)", logo: "/client_logos/hvpn.jpeg" },
    { name: "DHBVN (Dakshin Haryana Bijli Vitran Nigam)" },
    { name: "BBMB (Bhakra Beas Management Board)" },
    { name: "Indian Railways" },
    { name: "BHEL (Bharat Heavy Electricals Ltd.)", logo: "/stitch/clients/bhel.png" },
    { name: "UHBVN (Uttar Haryana Bijli Vitran Nigam)", logo: "/client_logos/uhbvn.png" },
    { name: "Chandigarh Power Distribution Limited", logo: "/client_logos/Chandigarh_Power_Distribution_Limited.png" },
    { name: "NTPC Limited", logo: "/stitch/clients/ntpc.png" },
    { name: "NHPC Limited", logo: "/stitch/clients/nhpc.png" },
  ];

  const privateClients = [
    { name: "JSW", logo: "/client_logos/JSW_Group_Logo.png" },
    { name: "L&T (Larsen & Toubro)" },
    { name: "HDFC Bank", logo: "/client_logos/hdfc_bank_logo.svg" },
    { name: "Reliance Jio", logo: "/client_logos/jio.png" },
    { name: "ESAB India", logo: "/client_logos/esab_logo.png" },
    { name: "ABS Fujitsu General", logo: "/client_logos/ABS.webp" },
    { name: "GAC Energy & Automation", logo: "/client_logos/GAC.png" },
    { name: "Gilco India Pvt. Ltd.", logo: "/client_logos/Gilco.png" },
    { name: "JIPL Infrastructure", logo: "/client_logos/JIPL-logo.png" },
    { name: "Cheema Boilers", logo: "/client_logos/cbl.png" },
    { name: "Damcosoft", logo: "/client_logos/damcosoft.png" },
    { name: "Emco Switchgear", logo: "/client_logos/emco.png" },
    { name: "HMT Machine Tools", logo: "/client_logos/hmt_india_logo.png" },
    { name: "JayVee Industries", logo: "/client_logos/jaybee.jpg" },
    { name: "PCCL Agro Division", logo: "/client_logos/pccl.png" },
    { name: "Solken Power", logo: "/client_logos/solken.png" },
    { name: "Taalin Machinery and Robotics", logo: "/client_logos/taalin.png" },
    { name: "Van Norman Machine", logo: "/client_logos/van_norman.webp" },
  ];

  const educationClients = [
    { name: "Panjab University", logo: "/client_logos/pu_logo.png", desc: "Structural Analysis & Design Partner" },
    { name: "Thapar University", logo: "/client_logos/thapar.png", desc: "Research & Testing Laboratory Collaboration" },
    { name: "Indian School of Business (ISB)", logo: "/client_logos/isb.svg", desc: "Infrastructure Strategic Planning" },
    { name: "Chandigarh University", logo: "/client_logos/chandigarh-university.webp", desc: "Academic Infrastructure Development" },
    { name: "Chitkara University", logo: "/client_logos/chitkara-university.webp", desc: "Technical Partnership" },
    { name: "Lovely Professional University (LPU)", logo: "/client_logos/lpu.svg", desc: "Institutional Grid Solutions" },
  ];

  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main className="pt-16 min-h-screen">
        {/* Hero Section with Analytics */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                  Our Global Impact
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary leading-tight mb-6 lg:mb-8 font-headline">
                  Built on Trust & <br /> Engineering Excellence.
                </h1>
                <p className="text-secondary text-lg max-w-xl leading-relaxed mb-12">
                  For over three decades, Alliance Engineering has partnered with industry leaders and government institutions to deliver critical infrastructure solutions across the globe.
                </p>
              </div>
              {/* Analytics Bento Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-end h-48 shadow-sm">
                  <span className="text-4xl font-extrabold text-primary mb-2">500+</span>
                  <span className="text-secondary font-medium uppercase tracking-wider text-xs">
                    Total Clients Served
                  </span>
                </div>
                <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-end h-48 text-white shadow-lg">
                  <span className="text-4xl font-extrabold mb-2 text-on-primary">20+</span>
                  <span className="opacity-80 font-medium uppercase tracking-wider text-xs text-on-primary">
                    Countries Reached
                  </span>
                </div>
                <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-end h-48 col-span-2 shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-extrabold text-tertiary">30+</span>
                    <div className="h-10 w-[1px] bg-outline-variant/30"></div>
                    <span className="text-secondary font-medium uppercase tracking-wider text-xs leading-tight">
                      Years of
                      <br />
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Aesthetic Blueprint Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
              <defs>
                <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100" width="100"></rect>
            </svg>
          </div>
        </section>

        {/* Clients Grid Sections */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            {/* Public Organizations */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 md:mb-12 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-tertiary tracking-tight font-headline">
                  Public Organizations & Government Sector
                </h2>
                <div className="h-[2px] w-12 sm:w-auto sm:flex-grow bg-outline-variant/20"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {publicClients.map((client) => (
                  <div
                    key={client.name}
                    className="bg-surface-container-lowest h-40 rounded-xl flex items-center justify-center p-6 transition-all border border-transparent hover:border-primary/10 hover:shadow-md group relative overflow-hidden"
                  >
                    {client.logo ? (
                      <img
                        className="max-h-full max-w-full object-contain"
                        alt={client.name}
                        src={client.logo}
                      />
                    ) : (
                      <span className="font-bold text-center text-primary/80 font-headline">{client.name}</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white text-[8px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl px-1">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Sector */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 md:mb-12 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-tertiary tracking-tight font-headline">
                  Private Sector & Industrial Enterprise
                </h2>
                <div className="h-[2px] w-12 sm:w-auto sm:flex-grow bg-outline-variant/20"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {privateClients.map((client) => (
                  <div
                    key={client.name}
                    className="bg-surface-container-lowest h-36 rounded-xl flex items-center justify-center p-4 transition-all shadow-sm border border-transparent hover:border-primary/10 hover:shadow-lg group relative overflow-hidden"
                  >
                    {client.logo ? (
                      <img
                        className="max-h-full max-w-full object-contain"
                        alt={client.name}
                        src={client.logo}
                      />
                    ) : (
                      <span className="font-bold text-center text-primary/80 text-sm font-headline">{client.name}</span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white text-[7px] text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl px-1">
                      {client.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational & Research */}
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 mb-8 md:mb-12 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-tertiary tracking-tight font-headline">
                  Educational & Research Institutions
                </h2>
                <div className="h-[2px] w-12 sm:w-auto sm:flex-grow bg-outline-variant/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {educationClients.map((client) => (
                  <div
                    key={client.name}
                    className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all group hover:shadow-xl"
                  >
                    <div className="h-28 mb-6 flex items-center justify-center transition-all">
                      <img
                        className="max-h-full object-contain"
                        alt={client.name}
                        src={client.logo}
                      />
                    </div>
                    <h3 className="text-center font-bold text-primary group-hover:text-tertiary transition-colors font-headline">
                      {client.name}
                    </h3>
                    <p className="text-center text-secondary text-sm mt-2 font-body">
                      {client.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 sm:mb-6 tracking-tight font-headline">
              Ready to build the future together?
            </h2>
            <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Join our network of prestigious clients and experience the precision of Alliance Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-95 text-white">
                Start a Project
              </button>
              <button className="bg-secondary-container text-primary px-10 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all active:scale-95">
                Request Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
