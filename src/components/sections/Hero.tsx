import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sage-dark">
              Software Developer
            </p>

            <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              {siteConfig.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#projects" className={buttonStyles("primary")}>
                View projects
              </Link>

              <Link href="/contact" className={buttonStyles("secondary")}>
                Contact me
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-[18rem] sm:max-w-md lg:mt-0 lg:max-w-none">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-sage-soft/70 blur-2xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-soft)]">
              <Image
                src="/images/profile/shivang-portrait.jpg"
                alt="Portrait of Shivang Thakur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 left-2 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:-left-4">
              <p className="text-sm font-semibold">Based in Canada</p>
              <p className="mt-1 text-sm text-muted">
                Open to software opportunities
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}