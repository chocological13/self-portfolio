"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/skill-card";
import { CategoryCard } from "@/components/category-card";

const technologies = {
  Backend: [
    { name: "Java", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Spring Boot", level: "Intermediate" },
    { name: "JWT", level: "Intermediate" },
    { name: "Redis", level: "Intermediate" },
  ],
  Frontend: [
    { name: "React", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "JavaScript (Vanilla)", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" },
    { name: "Vercel", level: "Intermediate" },
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-violet-600 dark:from-rose-400 dark:to-violet-400">
              Technical Skills
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Expertise across the full development stack
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, skills]) => (
            <CategoryCard key={category} category={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map(({ name, level }, index) => (
                  <SkillCard
                    key={name}
                    name={name}
                    level={level}
                    category={category}
                    index={index}
                  />
                ))}
              </div>
            </CategoryCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
