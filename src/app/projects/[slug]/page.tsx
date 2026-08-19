import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        <article className="mt-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage-dark">
              {project.status.replace("-", " ")}
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {project.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-surface-soft px-3 py-1.5 text-sm text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonStyles(
                      "primary",
                      "gap-2",
                    )}
                  >
                    Live project
                    <ExternalLink size={17} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonStyles(
                      "secondary",
                      "gap-2",
                    )}
                  >
                    View GitHub
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="rounded-[2rem] border border-border bg-surface-soft p-6">
              <h2 className="font-display text-xl font-semibold">
                Project overview
              </h2>

              <dl className="mt-6 space-y-5">
                {project.role && (
                  <div>
                    <dt className="text-sm font-semibold text-muted">
                      My role
                    </dt>

                    <dd className="mt-1">
                      {project.role}
                    </dd>
                  </div>
                )}

                <div>
                  <dt className="text-sm font-semibold text-muted">
                    Status
                  </dt>

                  <dd className="mt-1 capitalize">
                    {project.status.replace("-", " ")}
                  </dd>
                </div>

                {project.projectType && (
                  <div>
                    <dt className="text-sm font-semibold text-muted">
                      Project Type
                    </dt>

                    <dd className="mt-1">
                      {project.projectType}
                    </dd>
                  </div>
                )}

                {project.course && (
                  <div>
                    <dt className="text-sm font-semibold text-muted">
                      Course
                    </dt>

                    <dd className="mt-1">
                      {project.course}
                    </dd>
                  </div>
                )}
              </dl>
            </aside>

            <div className="space-y-12">
              {project.description && (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    About the project
                  </h2>

                  <p className="mt-4 leading-8 text-muted whitespace-pre-wrap">
                    {project.description}
                  </p>
                </section>
              )}

              {project.problem && (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    The Problem
                  </h2>

                  <p className="mt-4 leading-8 text-muted whitespace-pre-wrap">
                    {project.problem}
                  </p>
                </section>
              )}

              {project.team && (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    The Team
                  </h2>

                  <p className="mt-4 leading-8 text-muted whitespace-pre-wrap">
                    {project.team}
                  </p>
                </section>
              )}

              {project.responsibilities?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Responsibilities
                  </h2>

                  <ul className="mt-4 space-y-3 text-muted">
                    {project.responsibilities.map((res) => (
                      <li key={res}>• {res}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.architecture && (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Architecture
                  </h2>

                  <p className="mt-4 leading-8 text-muted whitespace-pre-wrap">
                    {project.architecture}
                  </p>
                </section>
              )}

              {project.challenges?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Challenges
                  </h2>

                  <ul className="mt-4 space-y-3 text-muted">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.solutions?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Solutions
                  </h2>

                  <ul className="mt-4 space-y-3 text-muted">
                    {project.solutions.map((solution) => (
                      <li key={solution}>
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.outcomes?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Outcomes
                  </h2>

                  <ul className="mt-4 space-y-3 text-muted">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.lessons?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Lessons learned
                  </h2>

                  <ul className="mt-4 space-y-3 text-muted">
                    {project.lessons.map((lesson) => (
                      <li key={lesson}>
                        • {lesson}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.screenshots?.length ? (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Screenshots
                  </h2>

                  <div className="mt-5 grid gap-6">
                    {project.screenshots.map((src, index) => (
                      <div key={index} className="overflow-hidden rounded-[2rem] border border-border bg-surface">
                        <img src={src} alt={`Screenshot ${index + 1}`} className="w-full h-auto" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {project.videoUrl && (
                <section>
                  <h2 className="font-display text-2xl font-semibold">
                    Project walkthrough
                  </h2>

                  <div className="mt-5 aspect-video overflow-hidden rounded-[2rem] border border-border bg-surface">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} walkthrough`}
                      className="size-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </section>
              )}
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}