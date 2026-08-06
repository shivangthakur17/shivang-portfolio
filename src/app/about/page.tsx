import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Shivang Thakur, his development approach, experience, and goals.",
};

const values = [
  {
    title: "Clarity",
    description:
      "I prefer simple, understandable solutions over unnecessary complexity.",
  },
  {
    title: "Maintainability",
    description:
      "I build reusable systems that remain easy to update as projects grow.",
  },
  {
    title: "Practical impact",
    description:
      "I focus on solving real problems and creating useful experiences.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Developer, problem solver, and lifelong learner."
          description="I build software with a focus on reliability, thoughtful design, and long-term maintainability."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              I am a software developer based in Canada, currently working on
              projects that combine frontend development, backend systems, and
              practical business requirements.
            </p>

            <p>
              My capstone work has strengthened my experience with teamwork,
              architecture, debugging, and presenting technical solutions to
              industry professionals.
            </p>

            <p>
              I care about clean structure, reusable components, accessible
              interfaces, and code that another developer can understand.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-border bg-surface-soft p-7">
            <h2 className="font-display text-2xl font-semibold">
              Current focus
            </h2>

            <ul className="mt-6 space-y-4 text-muted">
              <li>Full-stack web development</li>
              <li>TypeScript and Next.js</li>
              <li>Database-backed applications</li>
              <li>Scalable component architecture</li>
              <li>Industry-ready project presentation</li>
            </ul>
          </aside>
        </div>

        <section className="mt-24">
          <SectionHeading
            eyebrow="How I work"
            title="Principles behind my projects."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[2rem] border border-border bg-surface-soft p-6"
              >
                <h3 className="font-display text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}