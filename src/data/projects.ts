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
    slug: "baettledger",
    title: "BaettLedger",
    summary: "A construction-site equipment tracking system that automatically detects and reconciles equipment moving on and off job sites using edge cameras and Azure AI, replacing manual clipboard tracking.",
    description: "Our team designed an automated equipment-tracking pipeline combining edge image capture, Azure AI services, cloud APIs, structured data storage, and a live dashboard.\n\nA Raspberry Pi and camera capture four views for each tracking session:\n- left\n- middle\n- right\n- overview\n\nThe images are uploaded to Azure Blob Storage and processed through Azure AI Vision.\n\nDetection results are then passed through an Azure AI Foundry Count Agent, which performs structured count reconciliation before trusted counts are stored and exposed through the API.\n\nA confidence threshold of 0.80 is used as a reliability safeguard before detections are accepted.",
    status: "completed",
    featured: true,
    role: "API Backend Owner",
    technologies: [
      "Python 3.11",
      "Azure Functions",
      "Azure AI Vision",
      "Azure AI Foundry",
      "Azure SQL",
      "Azure Blob Storage",
      "Azure Static Web Apps",
      "Raspberry Pi"
    ],
    problem: "Construction sites often rely on manual observation, clipboards, and spreadsheets to track equipment entering and leaving a job site.\n\nThis process is slow, error-prone, and provides little real-time visibility into what equipment is currently on-site, what has left, or what may be missing.",
    architecture: "Edge Camera\n→ Azure Functions\n→ Blob Storage\n→ AI Vision\n→ Count Agent\n→ Azure SQL\n→ Dashboard",
    course: "Emerging Trends",
    projectType: "Applied AI / Cloud / Edge Computing",
    responsibilities: [
      "Built and tested the complete v2 API backend end-to-end against real Azure resources",
      "Implemented equipment-tracking session creation",
      "Built photo-upload flows into Azure Blob Storage",
      "Implemented Azure SQL database writes",
      "Integrated Azure AI Vision detection calls",
      "Integrated the Azure AI Foundry Count Agent",
      "Implemented detection persistence and reconciliation logic",
      "Added idempotent duplicate-request handling",
      "Implemented authenticated API requests",
      "Tested the complete backend workflow across Azure services",
      "Debugged cross-service configuration and request issues",
      "Merged backend changes into the main repository through pull requests"
    ],
    challenges: [
      "One of the biggest challenges was making the system reliable across multiple independent cloud services.",
      "Small configuration or request-formatting issues could break the entire pipeline even when the individual service was working correctly.",
      "Examples included malformed endpoint configuration values and PowerShell JSON/request formatting issues during API testing.",
      "This reinforced the importance of validating configuration boundaries, testing integrations independently, and tracing failures across distributed systems rather than assuming the problem exists inside a single service."
    ],
    lessons: [
      "Building an AI-enabled system is not just about calling an AI model.",
      "The reliability of the surrounding API layer, authentication, storage, configuration, error handling, idempotency, and confidence rules has a major impact on whether the AI output can actually be trusted in a production-style workflow."
    ]
  },
  {
    slug: "focus-farm",
    title: "Focus Farm",
    projectType: "Mobile / Gamification / Digital Wellbeing",
    summary: "A gamified mobile focus app that introduces mindful friction before distracting app use and turns successful resistance into progress for a persistent pixel-art tree.",
    problem: "Distracting apps can become subconscious habits because access is nearly frictionless.\n\nFocus Farm explores the idea of adding a deliberate pause between impulse and action, using short mindfulness exercises, commitments, and visible game progress to encourage more intentional device use.",
    description: "A React Native mobile application combining focus interventions, app-selection controls, timers, sleep-related streak mechanics, local persistence, and a pixel-art growth system.",
    role: "Sole Developer and App Architect",
    technologies: [
      "React Native",
      "Expo",
      "expo-router",
      "TypeScript",
      "NativeWind",
      "@react-native-async-storage/async-storage",
      "react-native-reanimated"
    ],
    responsibilities: [
      "designed the app architecture from scratch",
      "structured the step-by-step implementation plan",
      "designed the mobile UI layout",
      "defined and enforced shared color/design tokens",
      "implemented the gamification logic",
      "implemented persistent farm/tree state",
      "implemented focus/intervention flows",
      "implemented app selection/blocklist UI",
      "implemented commitment timer flows",
      "directed and implemented a major visual refactor from a 16-tile SVG-based farm grid to a layered single-tree sprite system",
      "preserved existing gamification/state logic through the visual architecture refactor"
    ],
    solutions: [
      "single-tree gamified dashboard with multiple growth stages",
      "mindfulness intervention flow before temporary access",
      "breathing exercises and/or MCQ friction prompts",
      "commitment timers such as 15, 30, or 60 minutes",
      "blocklist interface for selecting restricted apps",
      "sleep streak tracking tied to farm/tree progress",
      "persistent local state (Intervention or blocking workflow rather than system-wide enforcement)"
    ],
    challenges: [
      "The major technical/design challenge was replacing the original 16-tile SVG/math-based farm visualization with a layered pixel-art tree sprite system without breaking the existing gamification logic or TypeScript build."
    ],
    lessons: [
      "Separating visual representation from game state made it possible to completely replace the rendering system without rewriting the underlying progression logic."
    ],
    status: "completed",
    featured: true
  },
  {
    slug: "self-flow",
    title: "Self Flow",
    projectType: "Behavioral UX / Productivity / Frontend Architecture",
    summary: "A minimalist behavioral-mirror web application designed for honest daily self-reflection and productivity tracking without the cognitive friction, shame, and punitive failure states common in traditional productivity apps.",
    problem: "Many productivity-tracking apps rely on dense metrics, explicit progress counters, and aggressive failure states. Missing a goal often produces red warnings, shame, or cognitive overload, which can make users abandon the product entirely.\n\nSelf Flow was designed as a calmer alternative: a non-judgmental space where daily choices are treated as neutral data points to observe rather than failures to punish.",
    description: "A client-side reflective check-in experience built around a deterministic branching state flow.\n\nThe interface presents one question at a time and routes users through a structured reflection sequence based on their answers.\n\nThe system intentionally removes progress counters and heavy manual input to reduce choice paralysis and encourage presence.",
    role: "Solo Software Developer / Creator",
    technologies: ["React 18+", "Tailwind CSS", "LocalStorage"],
    responsibilities: [
      "designed the product concept and interaction architecture from original handwritten notebook sketches",
      "designed the UI/UX layout",
      "defined the custom visual system and Tailwind color tokens",
      "implemented the question state controller",
      "implemented branching navigation using a data-driven object graph / linked map",
      "separated question data from UI rendering",
      "implemented local persistence for the MVP",
      "built the reflective interaction flow end-to-end"
    ],
    solutions: [
      "linear five-question reflective stream",
      "one-question-at-a-time interaction to reduce cognitive load",
      "predefined click-target inputs instead of unnecessary typing",
      "non-punitive detour routing using neutral curiosity-based states",
      "hidden progress by intentionally omitting “step X of Y”",
      "contextual data mirror showing the current interaction data stream in a monospace terminal-style panel",
      "local persistence for MVP sessions"
    ],
    architecture: "A dedicated question graph stores each question and its possible options. Each option points to the ID of the next node, allowing the state controller to route dynamically without embedding large if/else trees inside UI components.",
    challenges: [
      "The main architecture challenge was making the branching questionnaire scalable without filling UI components with hardcoded conditional logic."
    ],
    lessons: [
      "Separating navigation data from presentation using a graph-based question model made the interaction flow easier to extend, reason about, and maintain."
    ],
    status: "completed",
    featured: true
  }
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}