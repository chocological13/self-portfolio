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
          href: "https://github.com/chocological13",
          label: "GitHub",
        },
        {
          Icon: FaLinkedin,
          href: "https://www.linkedin.com/in/annisamustofa/",
          label: "LinkedIn",
        },
        {
          Icon: Mail,
          href: "mailto:annisamustofa@outlook.com",
          label: "Email",
        },
      ].map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
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
