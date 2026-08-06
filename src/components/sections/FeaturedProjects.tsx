import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built with purpose."
          description="A selection of projects focused on practical problems, thoughtful design, and reliable engineering."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-[2rem] border border-border bg-surface-soft p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-sm font-semibold capitalize text-sage-dark">
                {project.status.replace("-", " ")}
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className={buttonStyles("secondary", "mt-6")}
              >
                View case study
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}