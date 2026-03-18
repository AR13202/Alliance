import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Factory, Users, Award, ShieldCheck } from "lucide-react";

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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">PowerGrid Solutions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Engineering precision electrical components for a safer, more efficient world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 1998, PowerGrid Solutions has grown from a small workshop into a globally recognized manufacturer of industrial electrical components. Our commitment to precision engineering and rigorous quality standards has earned the trust of utility companies, OEMs, and industrial facilities across 40+ countries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we operate two manufacturing facilities equipped with advanced CNC machinery, automated winding systems, and ISO-certified testing laboratories. Every product that leaves our factory undergoes comprehensive testing to ensure it meets the highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">What Sets Us Apart</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-primary/50"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-lg border border-border">
            <img
              src="https://placehold.co/1200x400/111827/06b6d4?text=Manufacturing+Facility"
              alt="Manufacturing facility"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Certifications & Compliance</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certs.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
