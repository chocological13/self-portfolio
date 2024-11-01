"use client";
import { motion } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { ScrollLink } from "@/components/scroll-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = (type: "creative" | "ats") => {
    const resumeLinks = {
      creative: process.env.NEXT_PUBLIC_DOWNLOAD_CREATIVE_CV,
      ats: process.env.NEXT_PUBLIC_DOWNLOAD_ATS_CV,
    };

    window.open(resumeLinks[type]);
  };

  return (
    <section
      id="about"
      className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-rose-300/20 dark:from-rose-950 dark:to-gray-950" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-500 dark:to-rose-300">
              Nina Mustofa
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Software Engineer
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 dark:text-gray-300">
              Turning coffee into code and snacking on strawberries ☕🍓
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="default"
              onClick={handleViewProjects}
              className="w-44 bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-800"
            >
              View Projects
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-44 border-rose-200 dark:border-rose-800 flex justify-between items-center"
                >
                  Download Resume
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => handleDownloadResume("ats")}>
                  ATS Friendly
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDownloadResume("creative")}
                >
                  Creative CV
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ScrollLink href="#skills">
            <ArrowDown className="w-6 h-6 text-rose-600 dark:text-rose-400" />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
