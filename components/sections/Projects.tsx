"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/interactive-card";
import { FadeIn } from "@/components/fade-in";
import React from "react";
import { SectionWrapper } from "@/components/section-wrapper";
import { FaGithub, FaLink } from "react-icons/fa";
import { ProjectList } from "@/constants/types";

interface ProjectsProps {
  title: string;
  projects: ProjectList[];
}

const Projects: React.FC<ProjectsProps> = ({ title, projects }) => {
  return (
    <SectionWrapper id="projects" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 dark:text-rose-50">{title}</h2>
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
                <div className="flex flex-row gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300 flex items-center gap-2 mb-3"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="hidden sm:inline">View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300 flex items-center gap-2 mb-3"
                    >
                      <FaLink className="w-5 h-5" />
                      <span className="hidden sm:inline">View Live</span>
                    </a>
                  )}
                </div>
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
};

export default Projects;
