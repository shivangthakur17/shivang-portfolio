import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="About me"
            title="Thoughtful development with a practical mindset."
          />

          <div>
            <p className="text-lg leading-8 text-muted">
              I am a software developer focused on building reliable,
              maintainable, and user-friendly digital products. I enjoy turning
              complex problems into clear, practical solutions.
            </p>

            <p className="mt-5 leading-8 text-muted">
              My work includes full-stack development, collaborative projects,
              and real-world problem solving through my capstone and personal
              projects.
            </p>

            <Link
              href="/about"
              className={buttonStyles("secondary", "mt-8")}
            >
              More about me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}