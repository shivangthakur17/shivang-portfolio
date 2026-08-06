import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "capstone-project",
    title: "Capstone Project",
    summary:
      "A full-stack software project built to solve a real-world business problem.",
    description:
      "This project is currently being completed and prepared for an industry showcase.",
    status: "in-progress",
    featured: true,
    role: "Full-Stack Developer",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "personal-project",
    title: "Personal Project",
    summary:
      "An independent project focused on practical development and problem-solving.",
    status: "in-progress",
    featured: true,
    technologies: ["React", "Node.js"],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}