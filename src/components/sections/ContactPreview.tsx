import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[2rem] bg-sage p-10 text-white sm:p-16 dark:bg-surface-soft dark:text-foreground">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-sage-soft dark:text-muted">
              I am open to discussing new opportunities, collaborations, or simply sharing ideas. Let's build something useful together.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className={buttonStyles("secondary", "bg-background border-transparent text-foreground hover:bg-surface gap-2 dark:border-border-secondary dark:bg-transparent dark:hover:bg-surface")}
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
