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
    <div className="min-h-screen bg-[#0d1118] text-slate-100">
      <Navbar />

      <main className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05),_transparent_36%),linear-gradient(180deg,_#0f141c_0%,_#0c1017_100%)]">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-100">Get In Touch</h1>
          <p className="mt-2 text-lg text-slate-400">
            Have a question or need a quote? We'd love to hear from you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl border border-slate-800 bg-[#121924] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#162233]">
                    <item.icon className="h-5 w-5 text-sky-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">{item.label}</h3>
                    <p className="mt-1 whitespace-pre-line text-sm text-slate-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-800 bg-[#121924] p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold text-slate-100">Send Us a Message</h2>
              <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-[#162233]/60" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-slate-800">
            <div className="flex h-64 items-center justify-center bg-[#111722] text-slate-400">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-sky-300" />
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
