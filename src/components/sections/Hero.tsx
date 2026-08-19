import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Subtle Fabric Texture Background Layer */}
      <div 
        className="pointer-events-none absolute inset-0 -z-30 bg-[url('/images/textures/fabric-light.png')] bg-cover bg-center bg-no-repeat opacity-[0.05] dark:bg-[url('/images/textures/fabric-dark.png')] dark:opacity-[0.04]"
      />
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

          <div className="relative mx-auto mt-10 w-full max-w-[18rem] sm:max-w-sm lg:mt-0 lg:max-w-[28rem]">
            {/* Subtle halo for dark mode separation */}
            <div className="absolute left-1/2 top-[15%] -z-20 hidden w-3/4 -translate-x-1/2 rounded-full bg-sage/15 blur-[80px] dark:block" />

            {/* ONE clean editorial background arch */}
            <div className="absolute inset-x-4 top-8 bottom-0 -z-10 overflow-hidden rounded-t-full rounded-b-3xl bg-surface-soft sm:inset-x-8 sm:top-12">
              {/* Real Tile Pattern Asset */}
              <div 
                className="absolute inset-0 opacity-[0.08] mix-blend-luminosity dark:opacity-[0.04] dark:mix-blend-overlay"
                style={{ 
                  backgroundImage: "url('/images/backgrounds/hero-pattern.png')",
                  backgroundSize: "200px",
                  backgroundPosition: "center top",
                }}
              />
            </div>

            {/* ONE stable portrait image without object-cover cropping */}
            <div className="relative w-full">
              <Image
                src="/images/profile/shivang-portrait.png"
                alt="Portrait of Shivang Thakur"
                width={1024}
                height={1536}
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Floating Availability Badge */}
            <div className="absolute -bottom-4 -left-2 z-10 rounded-xl border border-border bg-background/95 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:-left-6">
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