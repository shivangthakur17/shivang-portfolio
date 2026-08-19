import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";

export default function HomePage() {
  return (
    <main className="home-background min-h-screen">
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <Journey />
      <ContactPreview />
    </main>
  );
}