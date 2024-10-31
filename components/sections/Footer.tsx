"use client";

import { SocialLinks } from "@/components/social-links";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-rose-900/10">
      <div className="container px-4 py-12 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-rose-500">
              Let&apos;s Connect
            </h3>
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
