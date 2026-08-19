import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-20">
          <div className="max-w-xl">
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

          <div className="relative mx-auto mt-12 w-full max-w-[22rem] sm:max-w-[24rem] lg:mt-0 lg:max-w-[28rem]">
            {/* Subtle cool halo for dark mode separation */}
            <div className="absolute left-1/2 top-[15%] -z-20 hidden w-3/4 -translate-x-1/2 rounded-full bg-[#87A8A4]/15 blur-[80px] dark:block" />

            {/* Editorial background shape with real tile pattern */}
            <div className="absolute top-[10%] bottom-[2%] left-[10%] right-[10%] -z-10 overflow-hidden rounded-t-full rounded-b-3xl bg-surface-soft dark:bg-[#253332]">
              {/* Provided Tile Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.10] saturate-50 mix-blend-luminosity dark:opacity-[0.06] dark:mix-blend-overlay"
                style={{ 
                  backgroundImage: "url('/images/backgrounds/hero-pattern.png')",
                  backgroundSize: "200px 200px",
                  backgroundPosition: "center top",
                  backgroundRepeat: "repeat"
                }}
              />
            </div>

            {/* Free-standing Portrait - Natural Aspect Ratio */}
            <div className="relative w-full">
              <Image
                src="/images/profile/shivang-portrait.png"
                alt="Portrait of Shivang Thakur"
                width={1024}
                height={1536}
                priority
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="h-auto w-full object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Floating Availability Badge */}
            <div className="absolute -bottom-2 -left-2 z-10 rounded-xl border border-border bg-background/95 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:-left-4 lg:-left-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Based in Canada</p>
              <p className="mt-0.5 text-xs text-muted">
                Open to software opportunities
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}