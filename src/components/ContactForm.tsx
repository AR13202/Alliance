"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import SuccessPopover from "@/components/SuccessPopover";
import Turnstile from "@/components/Turnstile";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitError("Please complete the security check.");
      return;
    }

    const errs = validate();
    setErrors(errs);
    setSubmitError("");

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await sendContactEmail({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          formType: "contact-form",
          turnstileToken,
        });

        if (response.success) {
          setIsSuccessOpen(true);
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTurnstileToken("");
          setTurnstileKey((prev) => prev + 1);
        } else {
          setSubmitError(response.error || "Failed to send message. Please try again.");
        }
      } catch (err) {
        console.error("Submit error:", err);
        setSubmitError("An unexpected error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    if (submitError) setSubmitError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        {submitError && (
          <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20 font-body">
            {submitError}
          </div>
        )}

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
              disabled={isSubmitting}
              className="h-10 w-full rounded-md border border-border bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-55"
              placeholder={`Enter your ${label.toLowerCase()}`}
              maxLength={field === "name" ? 100 : 255}
              required={required}
            />
            {errors[field] && (
              <p className="mt-1 text-xs text-destructive font-body">{errors[field]}</p>
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
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-border bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-55"
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
            disabled={isSubmitting}
            rows={5}
            className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none disabled:opacity-55"
            placeholder="Tell us about your requirements..."
            maxLength={2000}
            required
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive font-body">{errors.message}</p>
          )}
        </div>

        <Turnstile
          key={turnstileKey}
          onVerify={(token) => {
            setTurnstileToken(token);
            setSubmitError("");
          }}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>

      <SuccessPopover isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </>
  );
};

export default ContactForm;
