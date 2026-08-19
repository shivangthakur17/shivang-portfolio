"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validations/contact";
import { buttonStyles } from "@/components/ui/Button";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side validation against schema
    const result = contactSchema.safeParse(data);
    
    if (!result.success) {
      setError(result.error.issues[0].message);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Failed to send message. Please try again.");
      }

      setSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-500" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-sage/50 bg-sage/10 p-4 text-sm text-sage" role="status">
          Thank you! Your message has been sent successfully. I will get back to you soon.
        </div>
      )}

      {/* Visually hidden honeypot field. If filled, the server will silently discard the submission. */}
      <div aria-hidden="true" className="hidden" style={{ display: "none" }}>
        <label htmlFor="botField">Do not fill this out if you are human:</label>
        <input type="text" id="botField" name="botField" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            disabled={loading}
            className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={255}
            disabled={loading}
            className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus disabled:opacity-50"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-semibold">
            Company <span className="ml-1 font-normal text-muted">Optional</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={150}
            disabled={loading}
            className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="reason" className="text-sm font-semibold">Reason</label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            disabled={loading}
            className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus disabled:opacity-50"
          >
            <option value="" disabled>Select a reason</option>
            <option value="job-opportunity">Job opportunity</option>
            <option value="project">Project discussion</option>
            <option value="collaboration">Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          disabled={loading}
          className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={2000}
          disabled={loading}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-focus disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={buttonStyles("primary", "min-h-12 w-full sm:w-auto")}
      >
        {loading ? "Sending..." : "Send message"}
      </button>

      <p className="text-sm leading-6 text-muted">
        Your data is sent securely and will not be shared with third parties.
      </p>
    </form>
  );
}
