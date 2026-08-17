import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";

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
            <ContactForm />
          </section>
        </div>
      </Container>
    </main>
  );
}