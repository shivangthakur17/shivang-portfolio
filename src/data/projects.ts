import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "capstone-project",
    title: "LÄYRD — Cake in a Can | Espresso Shots",
    summary: "A full-stack e-commerce platform built for a Calgary boutique dessert brand selling handcrafted cheesecakes, tiramisu in 250ml cans, and espresso shots, combining retail, private-event, wholesale, and administrative workflows in one platform.",
    description: "Our team built a full-stack commerce platform supporting four main user groups: retail customers, private-event customers, wholesale/business customers, and administrators. The platform evolved from a Next.js monolithic application into a microservice-based architecture that was containerized and deployed to Azure Kubernetes Service.",
    status: "completed",
    featured: true,
    role: "AI Integrations, Admin Panel & Cloud Deployment Lead",
    technologies: [
      "Next.js 16", "React 19", "Tailwind CSS", "Supabase PostgreSQL", "Supabase Auth", "Supabase Storage", "Express.js",
      "Stripe Checkout", "Resend", "Google Gemini 2.5 Flash", "OpenRouteService", "Docker", "Azure Kubernetes Service",
      "Azure Container Registry", "ingress-nginx", "cert-manager"
    ],
    problem: "LÄYRD's founder was managing orders, event bookings, and wholesale inquiries manually through Instagram messages, text conversations, and spreadsheets.\n\nThis created fragmented workflows, significant manual back-and-forth, and limited the business's ability to scale.\n\nThe goal was to create one centralized platform where customers could self-serve online while the business owner could manage operations through a unified administrative interface.",
    team: "Ritesh Patel — Backend Lead / Repository Owner\nAaryan — Frontend / UI\nShivang Thakur — AI Integrations, Admin Panel & Cloud Deployment",
    responsibilities: [
      "Built the full administrative experience across approximately 13 management pages.",
      "Developed the AI Label Studio workflow for generating custom event-can label concepts using Google Gemini.",
      "Built and integrated the ai-label-service microservice.",
      "Implemented Product Drops with scheduled releases and countdown functionality.",
      "Developed wholesale and business-account functionality.",
      "Containerized the Next.js frontend and four Express microservices as ARM64 Docker images.",
      "Published container images to Azure Container Registry.",
      "Deployed the application stack to Azure Kubernetes Service.",
      "Diagnosed and resolved a persistent ingress 502 networking issue caused by Azure Load Balancer traffic reaching nodes without ingress pods.",
      "Configured HTTPS using cert-manager and Let's Encrypt.",
      "Performed end-to-end integration testing during Sprint 6.",
      "Led final deployment and handoff preparation during Sprint 7."
    ],
    solutions: [
      "Retail Commerce: individual dessert cans, mix-and-match bundles, espresso shots, shopping cart, Stripe, e-transfer, and cash payment workflows",
      "Private Events: event inquiry flow, administrator approval, 50% deposit workflow, AI Label Studio for custom event-can labels",
      "Wholesale / B2B: business-account application, verification-code workflow, trade-pricing tiers",
      "Administrative Dashboard: orders, inventory, batch-based stock calculations, event management, wholesale management, promotional codes, availability slots, platform settings",
      "Premium Brand Experience: day/night themed interface, boutique visual direction, Cormorant Garamond and Inter typography, gold-accent brand system"
    ],
    architecture: "The project evolved through several architectural stages:\nNext.js monolith → separated services → microservice architecture → Docker containers → Azure Container Registry → Azure Kubernetes Service\n\nThe final deployment consisted of a Next.js frontend and four Express microservices running as independent containerized workloads.",
    challenges: [
      "One of the most significant deployment issues was a persistent 502 error after deploying the application to Azure Kubernetes Service.",
      "The Azure Load Balancer was forwarding traffic to cluster nodes that did not contain an ingress-controller pod, causing requests to fail before they reached the application.",
      "I traced the issue through the Kubernetes networking path and resolved it by configuring the ingress service with: externalTrafficPolicy: Local",
      "This ensured the load balancer routed traffic only to nodes capable of handling ingress requests."
    ],
    lessons: [
      "This was a valuable lesson in debugging infrastructure beyond the application layer and understanding how cloud load balancers, Kubernetes services, and ingress controllers interact.",
      "Client-exposed NEXT_PUBLIC_* environment variables in Next.js must be available at build time. When deploying the application through Docker, these values therefore needed to be passed using Docker build arguments and baked into the image rather than only injected when the container started. This meant deployment configuration and frontend builds had to be coordinated carefully whenever the public application URL changed."
    ]
  },
  {
    slug: "personal-project",
    title: "Personal Project",
    summary:
      "An independent project focused on practical development and problem-solving.",
    status: "in-progress",
    featured: false,
    technologies: ["React", "Node.js"],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}