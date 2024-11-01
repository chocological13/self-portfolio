"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/interactive-card";
import { FadeIn } from "@/components/fade-in";
import React from "react";
import { SectionWrapper } from "@/components/section-wrapper";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "StayEase - Property Renting App",
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
    github: process.env.NEXT_PUBLIC_GITHUB_STAYEASE,
  },
  {
    title: "Event Management Service",
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
    title: "Company Profile Website",
    description:
      "Modern company profile website built with Next.js and TypeScript. Features responsive design, optimized performance, and seamless user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    metrics: "Responsive design with optimized performance scores",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_RAGEQUIT}`,
  },
  {
    title: "Visit my GitHub page to view more!",
    description: "All of the projects I've worked on.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "..and more.",
    ],
    metrics: "A compilation of my codebase.",
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
];

export function Projects() {
  return (
    <SectionWrapper id="projects" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 dark:text-rose-50">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <InteractiveCard>
                <h3 className="text-xl font-semibold mb-4 dark:text-rose-100">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300 flex items-center gap-2 mb-3"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="hidden sm:inline">View Code</span>
                </a>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-rose-100/80 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 border-t dark:border-rose-900/50 pt-4">
                  {project.metrics}
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
