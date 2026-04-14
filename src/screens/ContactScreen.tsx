import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "1234 Industrial Park Drive\nSuite 200, Houston, TX 77001" },
  { icon: Phone, label: "Phone", value: "+1 (713) 555-0142" },
  { icon: Mail, label: "Email", value: "sales@powergridsolutions.com" },
  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 8:00 AM - 6:00 PM CST\nSat: 9:00 AM - 1:00 PM CST" },
];

export default function ContactScreen() {
  return (
    <div className="site-page min-h-screen">
      <Navbar />

      <main className="site-main">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="site-heading text-4xl font-bold">Get In Touch</h1>
          <p className="site-copy mt-2 text-lg">
            Have a question or need a quote? We'd love to hear from you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="site-card flex gap-4 rounded-xl border p-5">
                  <div className="site-card-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    <item.icon className="h-5 w-5" style={{ color: "var(--site-primary)" }} />
                  </div>
                  <div>
                    <h3 className="site-heading text-sm font-semibold">{item.label}</h3>
                    <p className="site-copy mt-1 whitespace-pre-line text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="site-card rounded-xl border p-6 md:p-8">
              <h2 className="site-heading mb-6 text-xl font-semibold">Send Us a Message</h2>
              <Suspense fallback={<div className="site-card-soft h-96 animate-pulse rounded-lg border" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border" style={{ borderColor: "var(--site-border)" }}>
            <div className="site-band site-copy flex h-64 items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8" style={{ color: "var(--site-primary)" }} />
                <p className="text-sm">1234 Industrial Park Drive, Houston, TX 77001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
