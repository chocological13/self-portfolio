"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {[
        {
          Icon: FaGithub,
          href: process.env.NEXT_PUBLIC_GITHUB_URL,
          label: "GitHub",
        },
        {
          Icon: FaLinkedin,
          href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
          label: "LinkedIn",
        },
        {
          Icon: Mail,
          href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
          label: "Email",
        },
      ].map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400"
          whileHover={{ y: -4 }}
          whileTap={{ y: 0 }}
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};
