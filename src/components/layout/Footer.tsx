import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-12 sm:flex-row">
          <div className="flex flex-col gap-2 sm:gap-1">
            <p className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted">
              {siteConfig.role}
            </p>
          </div>

          {/* Signature Placeholder: Replace this div with an actual image when ready */}
          <div className="flex h-12 items-center justify-center text-sm font-style: italic text-muted opacity-50">
            {/* Future signature image will go here */}
          </div>

          <div className="flex gap-6 text-sm font-medium text-muted">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
