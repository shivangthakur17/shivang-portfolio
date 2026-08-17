import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const journeyItems = [
  {
    period: "Current",
    role: "Full-Stack Development",
    description:
      "Focusing on building reliable, maintainable web applications using modern React, Next.js, and TypeScript.",
  },
  {
    period: "Recent",
    role: "Capstone Project",
    description:
      "Collaborating on an industry-level project to solve real business problems, emphasizing architecture and clean code.",
  },
  {
    period: "Foundation",
    role: "Software Engineering",
    description:
      "Developing a strong baseline in programming principles, problem-solving, and practical development workflows.",
  },
];

export function Journey() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="My current direction."
          description="A brief look at my recent experience and where I am heading as a developer."
        />

        <div className="mt-16 max-w-4xl space-y-8">
          {journeyItems.map((item, index) => (
            <article
              key={index}
              className="grid gap-4 border-t border-border pt-8 md:grid-cols-[1fr_3fr] md:gap-8"
            >
              <p className="font-mono text-sm font-semibold text-muted">
                {item.period}
              </p>

              <div>
                <h3 className="font-display text-xl font-semibold">
                  {item.role}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
