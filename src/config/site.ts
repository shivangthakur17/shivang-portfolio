export const siteConfig = {
  name: "Shivang Thakur",
  role: "Software Developer",
  description:
    "Building reliable digital products through thoughtful engineering and practical problem-solving.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "shivangthakur2006@gmail.com",
  links: {
    github: "https://github.com/shivangthakur17",
    linkedin: "https://www.linkedin.com/in/shivang-thakur-ba6853253/",
  },
} as const;