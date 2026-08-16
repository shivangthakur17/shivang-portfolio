import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shivang Thakur about software development opportunities, projects, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something useful."
              description="Reach out about software opportunities, project discussions, or professional collaboration."
            />

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted">Email</p>

                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 inline-block font-medium transition-colors hover:text-sage-dark"
                >
                  {siteConfig.email}
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted">Location</p>
                <p className="mt-1">Canada</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted">
                  Availability
                </p>

                <p className="mt-1">
                  Open to software development opportunities
                </p>
              </div>
            </div>
          </div>

          <section className="rounded-[2rem] border border-border bg-surface-soft p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold"
                  >
                    Company
                    <span className="ml-1 font-normal text-muted">
                      Optional
                    </span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="text-sm font-semibold"
                  >
                    Reason
                  </label>

                  <select
                    id="reason"
                    name="reason"
                    required
                    defaultValue=""
                    className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="job-opportunity">
                      Job opportunity
                    </option>
                    <option value="project">
                      Project discussion
                    </option>
                    <option value="collaboration">
                      Collaboration
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-focus"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-focus"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sage px-6 font-semibold text-white transition-colors hover:bg-sage-dark sm:w-auto"
              >
                Send message
              </button>

              <p className="text-sm leading-6 text-muted">
                The form interface is ready. Secure message delivery will be
                connected in the next backend step.
              </p>
            </form>
          </section>
        </div>
      </Container>
    </main>
  );
}