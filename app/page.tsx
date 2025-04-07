"use client";
import Hero from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { projects } from "@/constants/projects";
import Projects from "@/components/sections/Projects";
import { miniProjects } from "@/constants/miniprojects";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Skills />
        <Projects title="Featured Projects" projects={projects} />
        <Projects title="Mini Projects & Experiments" projects={miniProjects} />
        {/*<Contact />*/}
      </main>
    </div>
  );
}
