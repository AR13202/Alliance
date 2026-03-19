import { Award, Factory, ShieldCheck, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const values = [
  {
    icon: Factory,
    title: "Quality Manufacturing",
    description: "State-of-the-art production facilities with automated testing and quality control at every stage.",
  },
  {
    icon: Users,
    title: "Industry Experience",
    description: "Over 25 years of expertise in designing and manufacturing electrical components for global markets.",
  },
  {
    icon: Award,
    title: "Customer First",
    description: "Dedicated support teams, custom engineering solutions, and flexible delivery to meet your deadlines.",
  },
];

const certs = ["ISO 9001:2015", "CE Marking", "IEC 61869", "UL Listed", "RoHS Compliant"];

export default function AboutScreen() {
  return (
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />

      <main className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05),_transparent_36%),linear-gradient(180deg,_#0f141c_0%,_#0c1017_100%)]">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-100 md:text-5xl">Alliance Engineering Company</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Engineering precision electrical components for a safer, more efficient world.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-800 bg-[#121924] p-8 md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-100">Our Story</h2>
            <p className="leading-relaxed text-slate-400">
              Founded in 1998, Alliance Engineering Company has grown from a small workshop into a globally recognized manufacturer of industrial electrical components. Our commitment to precision engineering and rigorous quality standards has earned the trust of utility companies, OEMs, and industrial facilities across 40+ countries.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Today, we operate two manufacturing facilities equipped with advanced CNC machinery, automated winding systems, and ISO-certified testing laboratories. Every product that leaves our factory undergoes comprehensive testing to ensure it meets the highest international standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111722] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-100">What Sets Us Apart</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-800 bg-[#121924] p-8 text-center transition-all hover:border-slate-600"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#162233]">
                  <value.icon className="h-7 w-7 text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-xl border border-slate-800">
            <img
              src="https://placehold.co/1200x400/111827/06b6d4?text=Manufacturing+Facility"
              alt="Manufacturing facility"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111722] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-slate-100">Certifications & Compliance</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 rounded-full border border-slate-800 bg-[#121924] px-5 py-2.5"
              >
                <ShieldCheck className="h-4 w-4 text-sky-300" />
                <span className="text-sm font-medium text-slate-100">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
