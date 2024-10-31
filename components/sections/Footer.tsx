"use client";

import { SocialLinks } from "@/components/social-links";
import React from "react";
import { HeartHandshake } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-rose-900/10">
      <div className="container px-4 py-12 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-lg font-semibold text-rose-500">
              Let&apos;s Connect
            </h3>
            <HeartHandshake className="text-rose-500 w-5 h-5" />
          </div>

          <div className="flex justify-center gap-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
