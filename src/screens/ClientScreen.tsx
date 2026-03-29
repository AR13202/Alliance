import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type ClientEntry = {
  name: string;
  logo?: string;
};

type ClientCategory = {
  title: string;
  eyebrow: string;
  description: string;
  clients: ClientEntry[];
};

const clientCategories: ClientCategory[] = [
  {
    title: "Government Sector",
    eyebrow: "Public Organizations",
    description:
      "Public utilities, institutions, and government-linked organizations that rely on dependable electrical infrastructure.",
    clients: [
      {
        name: "Power Grid Corporation of India Ltd.",
        logo: "/client_logos/Power_Grid_Corporation_of_India_Ltd..svg",
      },
      {
        name: "Haryana Vidyut Prasaran Nigam Limited",
        logo: "/client_logos/hvpn.jpeg",
      },
      {
        name: "Uttar Haryana Bijli Vitran Nigam",
        logo: "/client_logos/uhbvn.png",
      },
      {
        name: "Chandigarh Power Distribution Limited",
        logo: "/client_logos/Chandigarh_Power_Distribution_Limited.png",
      },
      { name: "Panjab University", logo: "/client_logos/pu_logo.png" }
    ],
  },
  {
    title: "Private Sector",
    eyebrow: "Industry & Enterprise",
    description:
      "Industrial groups, manufacturers, enterprises, infrastructure companies, and commercial organizations served across India.",
    clients: [
      { name: "JSW Group", logo: "/client_logos/JSW_Group_Logo.png" },
      { name: "ESAB India", logo: "/client_logos/esab_logo.png" },
      { name: "Cheema Boilers", logo: "/client_logos/cbl.png" },
      { name: "HMT Machine Tools", logo: "/client_logos/hmt_india_logo.png" },
      { name: "Emco Switchgear", logo: "/client_logos/emco.png" },
      { name: "JayVee Industries", logo: "/client_logos/jaybee.jpg" },
      {
        name: "Taalin Machinery and Robotics Pvt. Ltd.",
        logo: "/client_logos/taalin.png",
      },
      { name: "Van Norman Machine", logo: "/client_logos/van_norman.webp" },
      { name: "Solken Power", logo: "/client_logos/solken.png" },
      { name: "GAC Energy & Automation", logo: "/client_logos/GAC.png" },
      { name: "HDFC Bank", logo: "/client_logos/hdfc_bank_logo.svg" },
      { name: "Reliance Jio", logo: "/client_logos/jio.png" },
      { name: "ABS Fujitsu General Pvt. Ltd.", logo: "/client_logos/ABS.webp" },
      { name: "Damcosoft", logo: "/client_logos/damcosoft.png" },
      { name: "JLPL Infrastructure Pvt. Ltd.", logo: "/client_logos/JIPL-logo.png" },
      { name: "Gilco India Pvt. Ltd.", logo: "/client_logos/Gilco.png" },
      { name: "PCCL Agro Division", logo: "/client_logos/pccl.png" },
      { name: "Thapar University", logo: "/client_logos/thapar.png" },
      {
        name: "Chandigarh University",
        logo: "/client_logos/chandigarh-university.webp",
      },
      { name: "Lovely Professional University", logo: "/client_logos/lpu.svg" },
      { name: "Chitkara University", logo: "/client_logos/chitkara-university.webp" },
      { name: "Indian School of Business", logo: "/client_logos/isb.svg" }
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ClientScreen() {
  const totalClients = clientCategories.reduce(
    (sum, category) => sum + category.clients.length,
    0,
  );

  return (
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />

      <main className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),_transparent_34%),linear-gradient(180deg,_#0f141c_0%,_#0c1017_100%)]">
        <section className="border-b border-slate-800/80">
          <div className="container mx-auto px-4 py-14 sm:px-5 lg:px-6 lg:py-18">
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300/80">
                Client Portfolio
              </div>
              <h1 className="mt-4 text-[2.4rem] font-semibold leading-tight text-white sm:text-[3.2rem]">
                Organizations we have proudly served
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-8 text-slate-400">
                Our work supports utilities, industrial groups, institutions,
                enterprises, and infrastructure developments across India.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[12px] border border-slate-800 bg-[#131b27] px-5 py-6">
                <div className="text-[28px] font-semibold text-white">
                  {totalClients}+
                </div>
                <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">
                  Client Organizations
                </p>
              </div>
              <div className="rounded-[12px] border border-slate-800 bg-[#131b27] px-5 py-6">
                <div className="text-[28px] font-semibold text-white">
                  {clientCategories.length}
                </div>
                <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">
                  Industry Segments
                </p>
              </div>
              <div className="rounded-[12px] border border-slate-800 bg-[#131b27] px-5 py-6">
                <div className="text-[28px] font-semibold text-white">
                  India
                </div>
                <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-slate-500">
                  Primary Market
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 py-12 sm:px-5 lg:px-6 lg:py-16">
            <div className="space-y-10">
              {clientCategories.map((category) => (
                <section
                  key={category.title}
                  className="rounded-[20px] border border-slate-800/80 bg-[#101722]/85 p-6 sm:p-8"
                >
                  <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300/75">
                        {category.eyebrow}
                      </div>
                      <h2 className="mt-2 text-[1.7rem] font-semibold text-white sm:text-[2rem]">
                        {category.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      {category.clients.length} organizations
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {category.clients.map((client) => (
                      <div
                        key={client.name}
                        className="group rounded-[14px] border border-slate-800 bg-[#0f1623] p-4 transition-colors hover:border-slate-700"
                      >
                        <div className="flex h-24 items-center justify-center rounded-[12px] bg-white p-4">
                          {client.logo ? (
                            <img
                              src={client.logo}
                              alt={`${client.name} logo`}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#dbeafe_0%,#f8fafc_100%)] text-[1.4rem] font-semibold tracking-[0.18em] text-slate-700">
                              {getInitials(client.name)}
                            </div>
                          )}
                        </div>
                        <div className="mt-4 text-sm font-medium leading-6 text-slate-200">
                          {client.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
