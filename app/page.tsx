"use client";
import Hero from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/*<Contact />*/}
      </main>
    </div>
  );
}
