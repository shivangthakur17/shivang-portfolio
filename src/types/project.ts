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
  problem?: string;
  architecture?: string;
  team?: string;
  course?: string;
  projectType?: string;
  responsibilities?: string[];
  outcomes?: string[];
  screenshots?: string[];
  challenges?: string[];
  solutions?: string[];
  lessons?: string[];
};