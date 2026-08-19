import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { ThemeProvider, ThemeScript } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CursorEffect } from "@/components/effects/CursorEffect";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Shivang Thakur | Software Developer",
    template: "%s | Shivang Thakur",
  },
  description:
    "Portfolio of Shivang Thakur, a software developer building thoughtful and reliable digital products.",
  openGraph: {
    title: "Shivang Thakur | Software Developer",
    description:
      "Portfolio of Shivang Thakur, a software developer building thoughtful and reliable digital products.",
    url: "/",
    siteName: "Shivang Thakur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivang Thakur | Software Developer",
    description:
      "Portfolio of Shivang Thakur, a software developer building thoughtful and reliable digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <CursorEffect />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}