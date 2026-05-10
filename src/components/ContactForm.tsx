"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams?.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: prefilledProduct,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!prefilledProduct) return;
    setForm((prev) => (prev.subject ? prev : { ...prev, subject: prefilledProduct }));
  }, [prefilledProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    if (form.name.length > 100) errs.name = "Name must be under 100 characters";
    if (form.message.length > 2000) errs.message = "Message must be under 2000 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">
          We've received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { label: "Name", field: "name", type: "text", required: true },
        { label: "Email", field: "email", type: "email", required: true },
        { label: "Phone Number", field: "phone", type: "tel", required: false },
      ].map(({ label, field, type, required }) => (
        <div key={field}>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            {label} {required && <span className="text-primary">*</span>}
          </label>
          <input
            type={type}
            value={form[field as keyof typeof form]}
            onChange={(e) => update(field, e.target.value)}
            className="h-10 w-full rounded-md border border-border bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder={`Enter your ${label.toLowerCase()}`}
            maxLength={field === "name" ? 100 : 255}
            required={required}
          />
          {errors[field] && (
            <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
          )}
        </div>
      ))}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Subject / Product of Interest
        </label>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className="h-10 w-full rounded-md border border-border bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="e.g. CT 50/5 Current Transformer"
          maxLength={200}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us about your requirements..."
          maxLength={2000}
          required
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
