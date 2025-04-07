import { ProjectList } from "@/constants/types";

export const projects: ProjectList[] = [
  {
    title: "🏠 StayEase - Property Renting App",
    description:
      "Full-stack development of core features including user authentication, authorization, profile management, and property management modules. Implemented secure role-based access control and streamlined property listing workflows.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "REST API",
      "Next.js",
      "TypeScript",
    ],
    metrics:
      "Supported multiple user roles with secure authentication, efficient property listing and management workflows with search and filter options, and robust access control for enhanced user experience and dynamic rate adjustments",
    github: process.env.NEXT_PUBLIC_GITHUB_STAYEASE || "",
  },
  {
    title: "🌃 Eventastic - Event Management Service",
    description:
      "Developed a scalable backend service for event management using Spring Boot. Implemented caching with Redis to improve response times and deployed the application on Google Cloud Platform.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "JWT",
      "REST API",
      "Maven",
    ],
    metrics:
      "Enabled seamless event browsing and ticket purchasing, supporting multiple user roles with secure access control and performance improvements through caching",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_EVENTASTIC}`,
  },
  {
    title: "🌐 Company Profile Website",
    description:
      "Modern company profile website built with Next.js and TypeScript. Features responsive design, optimized performance, and seamless user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: "Responsive design with optimized performance scores",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_RAGEQUIT}`,
  },
  {
    title: "🎲 W-Bingo – The Most Adorable Custom Bingo App!",
    description:
      "A playful and customizable bingo game built with Next.js 14, Firebase, and more! Create your own boards, enjoy sound effects, confetti explosions, and track your board progress. Actively evolving—multiplayer mode and mobile app coming soon!",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "shadcn/ui",
      "Framer Motion",
      "Lucide Icons",
    ],
    metrics:
      "Interactive board, customizable items, animations, confetti, and progress tracking.",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_W_BINGO}`,
    demo: `${process.env.NEXT_PUBLIC_DEMO_W_BINGO}`,
  },
  {
    title: "🍓 Berry Busy - Sweet To-Do App",
    description:
      "A delightful task management app with a strawberry garden twist. Users can securely sign up, manage tasks by status, and stay motivated with a visual progress tracker. Built with Supabase, Next.js, and deployed on Vercel for a sweet productivity experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    metrics:
      "Implemented secure email authentication, dynamic task flow (Pending, In Progress, Completed), and a 'Today’s Focus' filter. Encourages user engagement with progress tracking and visual feedback through a growing garden mechanic. Deployed on Vercel with optimized performance and responsive design.",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_BERRY_BUSY}`,
    demo: `${process.env.NEXT_PUBLIC_DEMO_BERRY_BUSY}`,
  },
  {
    title: "🖇️ URL Shortener - Full Stack App",
    description:
      "A full stack URL shortener that generates compact links with blazing fast redirects. Built with Go (Gin) on the backend and a modern Next.js frontend.",
    tech: ["Golang", "Gin", "Redis", "Next.js", "TypeScript", "Tailwind CSS"],
    metrics:
      "Utilizes Redis for lightning-fast URL lookup and storage, offering a smooth user experience with responsive UI and clean, minimalist design. Built from scratch to demonstrate backend efficiency and frontend clarity.",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_URL_SHORTENER}`,
  },
  {
    title: "Visit my GitHub page to view more!",
    description:
      "Explore a collection of smaller experiments and side projects—from playful e-cards to practical tools like to-do apps.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "..and more.",
    ],
    metrics:
      "A mix of learning projects, creative ideas, and personal experiments.",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  },
];
