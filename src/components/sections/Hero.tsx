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

          <div className="relative mx-auto mt-12 w-full max-w-[20rem] sm:max-w-[22rem] lg:mt-0 lg:max-w-[26rem]">
            {/* Editorial background shape with subtle grain */}
            <div className="absolute top-12 bottom-0 left-4 right-4 -z-10 rounded-t-full rounded-b-3xl bg-surface-soft">
              <div 
                className="absolute inset-0 rounded-t-full rounded-b-3xl opacity-[0.04] mix-blend-multiply dark:opacity-10 dark:mix-blend-overlay"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
              />
            </div>

            {/* Free-standing Portrait */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/profile/shivang-portrait.png"
                alt="Portrait of Shivang Thakur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -left-4 z-10 rounded-2xl border border-border bg-background/90 px-6 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:-left-8">
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