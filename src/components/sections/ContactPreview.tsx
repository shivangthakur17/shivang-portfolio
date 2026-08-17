import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";

export function ContactPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[2rem] bg-sage p-10 text-white sm:p-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-sage-soft">
              I am open to discussing new opportunities, collaborations, or simply sharing ideas. Let's build something useful together.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className={buttonStyles("secondary", "bg-white text-sage-dark border-transparent hover:bg-surface-soft gap-2")}
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
