"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={closeMenu}
        >
          Shivang Thakur
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className={buttonStyles("primary", "min-h-10 px-4")}
            >
              Let&apos;s talk
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-action-secondary-border transition-colors text-action-secondary-text hover:bg-action-secondary-hover-bg hover:border-action-secondary-hover-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col py-5">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border/70 py-4 text-base font-medium"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className={buttonStyles("primary", "mt-5 w-full")}
              onClick={closeMenu}
            >
              Let&apos;s talk
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}