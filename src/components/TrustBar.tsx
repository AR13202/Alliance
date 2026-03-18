import { ShieldCheck, Truck, Headphones } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "ISO 9001 Certified",
    description: "International quality standards ensuring consistent, reliable products.",
  },
  {
    icon: Truck,
    title: "Fast Global Delivery",
    description: "Worldwide shipping with expedited options for urgent requirements.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated engineering team available for technical guidance and support.",
  },
];

const TrustBar = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          Built for Industrial Reliability
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
