"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import SuccessPopover from "@/components/SuccessPopover";
import Turnstile from "@/components/Turnstile";

export default function ContactScreen() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "Current Transformer",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitError("Please complete the security check.");
      return;
    }

    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await sendContactEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        subject: form.category,
        message: form.message,
        formType: "contact-screen",
        turnstileToken,
      });

      if (response.success) {
        setIsSuccessOpen(true);
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          category: "Current Transformer",
          message: "",
        });
        setTurnstileToken("");
        setTurnstileKey((prev) => prev + 1);
      } else {
        setSubmitError(response.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact screen form submit error:", err);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />

      <main className="pt-16 min-h-screen">
        {/* Contact Hero Section */}
        <section className="px-6 md:px-8 py-16 lg:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary tracking-tighter mb-6 lg:mb-8 leading-[1.1] font-headline">
                Get in Touch
              </h1>
              <p className="text-xl text-secondary mb-12 max-w-md font-body leading-relaxed">
                Partner with our engineering team to design and manufacture custom current and control transformers tailored to your precise electrical specifications.
              </p>

              <div className="space-y-8">
                {/* Contact Tiles */}
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-xl font-headline font-bold text-tertiary">+91-9417374546, +91-7589124094</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Inquiries</p>
                    <p className="text-xl font-headline font-bold text-tertiary">info@allianceengineeringco.com</p>
                  </div>
                </div>

                {/* Certification Badges */}
                <div className="pt-8 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-surface-container-low rounded-full flex items-center gap-2 border border-outline-variant/10">
                    <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-tight">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="px-4 py-2 bg-surface-container-low rounded-full flex items-center gap-2 border border-outline-variant/10">
                    <span className="material-symbols-outlined text-sm text-primary">support_agent</span>
                    <span className="text-xs font-bold text-secondary uppercase tracking-tight">Technical Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-12 rounded-xl border border-outline-variant/20 shadow-[0_20px_40px_rgba(39,38,116,0.04)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 text-red-600 text-sm p-4 rounded border border-red-100">
                      {submitError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Full Name *</label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all placeholder:opacity-50 disabled:opacity-60"
                        placeholder="Your Name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Company Name *</label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all placeholder:opacity-50 disabled:opacity-60"
                        placeholder="Company Name"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Email Address *</label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all placeholder:opacity-50 disabled:opacity-60"
                        placeholder="email@example.com"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Phone Number *</label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all placeholder:opacity-50 disabled:opacity-60"
                        placeholder="+91 98xxxxxx10"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Product Category *</label>
                    <div className="relative">
                      <select
                        className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all appearance-none cursor-pointer disabled:opacity-60"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        disabled={isSubmitting}
                        required
                      >
                        <option>Current Transformer</option>
                        <option>Control Transformer</option>
                        <option>Battery Charger</option>
                        <option>Potential Transformer</option>
                        <option>Tender/Bulk Order</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary uppercase tracking-wider px-1">Technical Requirements / Message *</label>
                    <textarea
                      className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary outline-none px-4 py-3 text-on-surface transition-all resize-none placeholder:opacity-50 disabled:opacity-60"
                      placeholder="Describe your product requirements, CT ratio, burden, accuracy class, quantity..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      disabled={isSubmitting}
                      required
                    ></textarea>
                  </div>
                  <Turnstile
                    key={turnstileKey}
                    onVerify={(token) => {
                      setTurnstileToken(token);
                      setSubmitError("");
                    }}
                  />
                  <button
                    className="w-full bg-primary text-white font-headline font-bold py-4 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98] shadow-lg shadow-primary/10 disabled:opacity-75 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="bg-surface-container-low py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl font-black text-primary tracking-tighter mb-4 font-headline uppercase">Global Headquarters</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 space-y-8">
                <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
                  <h3 className="text-2xl font-black text-tertiary mb-4 font-headline">Chandigarh, India</h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    Plot No.: 417, Industrial Area Phase -2,<br />
                    Chandigarh, 160002,<br />
                    India
                  </p>
                  <a
                    href="https://www.google.com/maps/place/ALLIANCE+ENGINEERING+COMPANY/@30.696768,76.7816297,17z/data=!3m1!4b1!4m6!3m5!1s0x390fec8d1998fad9:0x2cc4e6be2d1f99cd!8m2!3d30.696768!4d76.7816297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase hover:opacity-70 transition-opacity font-headline"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    Get Directions
                  </a>
                </div>
                <div className="p-8 border border-outline-variant/30 rounded-xl bg-surface/50">
                  <h4 className="text-sm font-bold text-outline uppercase tracking-widest mb-2">Technical Support</h4>
                  <p className="text-tertiary font-bold font-headline">Available Monday — Friday</p>
                  <p className="text-tertiary font-bold font-headline opacity-70">09:00 - 18:00 IST</p>
                </div>
              </div>

              <div className="lg:col-span-8 h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl relative group cursor-crosshair">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.199533838484!2d76.7816297!3d30.696768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8d1998fad9%3A0x2cc4e6be2d1f99cd!2sALLIANCE%20ENGINEERING%20COMPANY!5e1!3m2!1sen!2sin!4v1779892391905!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
                  title="Alliance Engineering Company Map Location"
                />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:bottom-8 sm:right-8 bg-white p-4 rounded-lg shadow-2xl flex items-center gap-4 border border-outline-variant/10 pointer-events-none">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-outline uppercase leading-tight">Alliance Engineering Company</p>
                    <p className="font-headline font-black text-tertiary text-sm sm:text-base leading-tight">Industrial Area Phase 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Certification Section */}
        <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-4xl">engineering</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-tertiary">Engineering Precision</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                Designed to IS 2705 and IEC 61869 specifications with 30+ years of manufacturing expertise.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-tertiary">Quality Assurance</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                Every current and control transformer is routine-tested in-house to guarantee accuracy curves.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-tertiary">Reliable Turnaround</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                North India's fastest turnaround and secure dispatch to power utilities, railways, and B2B clients.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SuccessPopover isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
}
