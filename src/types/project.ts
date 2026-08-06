export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  status: ProjectStatus;
  featured: boolean;
  role?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  challenges?: string[];
  solutions?: string[];
  lessons?: string[];
};