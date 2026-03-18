import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "1234 Industrial Park Drive\nSuite 200, Houston, TX 77001" },
  { icon: Phone, label: "Phone", value: "+1 (713) 555-0142" },
  { icon: Mail, label: "Email", value: "sales@powergridsolutions.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM CST\nSat: 9:00 AM – 1:00 PM CST" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground">Get In Touch</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Have a question or need a quote? We'd love to hear from you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                    <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 text-xl font-semibold text-foreground">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <div className="flex h-64 items-center justify-center bg-secondary text-muted-foreground">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                <p className="text-sm">1234 Industrial Park Drive, Houston, TX 77001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
