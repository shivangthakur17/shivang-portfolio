import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

interface SendContactEmailParams {
  name: string;
  email: string;
  company?: string;
  reason: string;
  subject: string;
  message: string;
}

export async function sendContactNotification(data: SendContactEmailParams): Promise<boolean> {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!toEmail || !fromEmail) {
    console.warn("Email configuration missing (CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL)");
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `[Portfolio Contact] ${data.subject}`,
      text: `
New contact form submission from your portfolio:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Reason: ${data.reason}
Subject: ${data.subject}

Message:
${data.message}
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Failed to send contact notification:", err);
    return false;
  }
}
