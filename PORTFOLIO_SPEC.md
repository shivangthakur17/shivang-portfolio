# Portfolio Specification

This document serves as the source of truth for the product and design requirements of the portfolio website.

## 1. Existing technology choices
* Next.js 16+ (App Router)
* TypeScript
* Tailwind CSS 4
* React
* Lucide React
* clsx, tailwind-merge
* Zod
* Prisma, PostgreSQL
* Resend
* Git + GitHub, Vercel for deployment

## 2. Development philosophy
* Modular, reusable, scalable, maintainable, data-driven, strongly typed.
* Simple rather than over-engineered.
* Accessible, responsive, performant.
* Centralized configuration and shared components.

## 3. Design system
**Visual direction:** calm, premium, editorial, organized, minimal, distinctive. Avoid stereotypical neon developer portfolio look.

### Colors
* Primary background: `#F8F6F1`
* Supporting surface: `#EEE9DF`
* Soft surface: `#F3EFE7`
* Primary text: `#20231F`
* Muted text: `#686D65`
* Primary sage: `#718267`
* Dark sage: `#526249`
* Soft sage: `#DCE4D6`
* Border: `#DCD6CA`

### Typography
* Headings/display: Manrope
* Body/interface: Inter

## 4. Overall experience
The visitor should feel the developer is organized, thoughtful, professional, and knows how to build things properly. Personal brand first, revealing software engineering work naturally. Avoid excessive animation, use generous whitespace, subtle texture, and depth.

## 5. Hero section
* **Desktop:** Split composition (intro/name on left, professional portrait on right).
* **Mobile:** Purpose-built mobile layout with excellent spacing.
* **Content:** Role, name, concise value statement, View Projects CTA, Contact CTA, portrait (`public/images/profile/shivang-portrait.jpg`).

## 6. Signature interaction
* Subtle signature mouse interaction (devices with pointer).
* Short desaturated sage/chalk texture following immediately behind cursor.
* Only last 1 cm of movement, disappears immediately, very low opacity, soft chalk/powder texture, sage green.
* Disabled on touch/mobile, respects `prefers-reduced-motion`, no performance impact.
* Prefer CSS/canvas/native APIs over heavy libraries.

## 7. Header/navigation
* Responsive header. Minimal desktop, easy mobile.
* Links: Home, About, Projects, Contact. Include "Let's talk" CTA if it fits.

## 8. Homepage structure
1. Header
2. Hero
3. Featured / Selected Projects
4. About preview
5. Journey / experience / current direction
6. Contact preview
7. Footer

## 9. Projects architecture
* Data-driven. One `Project` TypeScript model, one data source (`src/data/projects.ts`), one dynamic route `/projects/[slug]`.
* Reusable project card and case-study template.

## 10. Optional project information
* Render sections only if data exists. No empty headings/cards/gaps.
* Possible fields: slug, title, summary, description, status, featured, role, technologies, image, live URL, GitHub URL, walkthrough video URL, problem, solution, architecture, screenshots, challenges, lessons, team information, responsibilities, outcomes.

## 11. Project case studies
* Should feel like a professional engineering case study.
* Flexible architecture to add a video walkthrough in the future.

## 12. About section/page
* Concise and professional.
* Focus: software development, practical problem solving, maintainable architecture, full-stack, learning/growth, capstone work, collaboration.
* Avoid generic motivational filler.

## 13. Contact system
* No public authentication/account required. No admin dashboard.
* Fields: name, email, company (optional), reason for contacting, subject, message.

## 14. Contact backend
* Next.js server/API route, Zod validation, PostgreSQL, Prisma, Resend.
* Flow: Form -> Server -> Validation -> Abuse protection -> Database -> Resend -> Notification -> Success response.
* Environment variables for secrets.

## 15. Contact rate limiting
* Maximum 5 accepted contact submissions per day per visitor/IP.
* Handle proxies/IP appropriately. Basic content filtering and spam resistance.

## 16. PostgreSQL and Prisma
* Use only for contact submissions/rate-limit persistence.
* Portfolio content remains typed code/data.

## 17. Footer/signature
* Subtle personal signature at the bottom.
* Feels like a real handwritten signature. Architecture allows easy insertion of an image later.

## 18. Responsive requirements
* Mobile-first. Test at 320px, 375px, 390px, 430px, tablet, laptop, wide desktop.
* Accessible tappable areas, readable typography, no horizontal overflow.

## 19. Accessibility
* Semantic HTML, keyboard navigation, visible focus states, sensible heading hierarchy, alt text, form labels, reasonable contrast, reduced-motion.

## 20. Performance
* Fast, Next Image, Server Components by default, lazy loading, lightweight animations.

## 21. SEO / sharing
* Metadata, titles, descriptions, Open Graph, favicon, social preview, canonical URL, sitemap, robots metadata.

## 22. QR / portfolio hub idea
* Serve as a personal hub (portfolio, resume, LinkedIn, GitHub). Stable URLs.

## 23. Dark mode
* Support light and dark themes (light default).
* Dark direction: deep forest/charcoal background, warm off-white text, sage brand accent.
* Use centralized design tokens.

## 24. Git workflow
* Work feature by feature. Test, lint, build before committing.
* Meaningful conventional commits.

## 25. Validation loop
* Run `npm run build` after every meaningful batch. Fix failures before claiming completion.

## 26. Autonomous boundaries
* Do not introduce major structural changes/dependencies/destructive actions without asking.
