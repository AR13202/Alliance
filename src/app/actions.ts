"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  formType: "contact-form" | "contact-screen" | "home-screen" | "product-detail";
}

export async function sendContactEmail(data: ContactInput) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
    console.error("RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL is not defined in environment variables.");
    return { success: false, error: "Email service is currently unavailable. Please try again later." };
  }

  // Basic server-side validation
  if (!data.name || !data.name.trim()) {
    return { success: false, error: "Name is required." };
  }
  if (!data.email || !data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: "A valid email address is required." };
  }
  if (!data.message || !data.message.trim()) {
    return { success: false, error: "Message is required." };
  }

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    const emailSubject = data.subject 
      ? `Alliance Engineering Inquiry: ${data.subject}` 
      : `New Inquiry from ${data.name} via Website`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Website Inquiry</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; line-height: 1.5; background-color: #f8fafc; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            .header { bg-color: #1a1b4b; background: #1a1b4b; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.05em; }
            .content { padding: 32px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0f172a; }
            .message-box { background: #f1f5f9; border-radius: 6px; padding: 16px; font-size: 14px; white-space: pre-wrap; color: #334155; margin-top: 8px; border-left: 4px solid #1a1b4b; }
            .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Technical Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Source Form</div>
                <div class="value">${data.formType}</div>
              </div>
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value"><strong>${data.name}</strong></div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${data.phone}</div>
              </div>` : ""}
              ${data.company ? `
              <div class="field">
                <div class="label">Company Name</div>
                <div class="value">${data.company}</div>
              </div>` : ""}
              ${data.subject ? `
              <div class="field">
                <div class="label">Product / Subject Interest</div>
                <div class="value">${data.subject}</div>
              </div>` : ""}
              <div class="field">
                <div class="label">Message / Requirements</div>
                <div class="message-box">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              This email was generated automatically from the Alliance Engineering Website.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: resData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: emailSubject,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend send error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: resData };
  } catch (err: any) {
    console.error("Resend exception:", err);
    return { success: false, error: err.message || "Failed to send email message." };
  }
}
