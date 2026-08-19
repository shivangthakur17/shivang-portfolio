import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-[1.75rem] bg-sage p-7 sm:p-8 md:p-12 lg:rounded-[2rem] lg:p-16 text-white dark:bg-surface-soft dark:text-foreground">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-6 text-lg text-sage-soft md:mt-4 dark:text-muted">
              I am open to discussing new opportunities, collaborations, or simply sharing ideas. Let's build something useful together.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className={buttonStyles("inverse", "gap-2")}
              >
                Let's talk
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
