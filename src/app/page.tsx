import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <main>
      <section className="flex min-h-screen items-center pt-28 pb-24">
        <Container>
          <SectionHeading
            eyebrow="Portfolio foundation"
            title="Shivang Thakur"
            description="Software developer building reliable digital products through thoughtful engineering and practical problem-solving."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className={buttonStyles("primary")}>
              View projects
            </Link>

            <Link href="/contact" className={buttonStyles("secondary")}>
              Contact me
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}