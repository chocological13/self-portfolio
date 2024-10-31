"use client";

import { smoothScroll } from "@/lib/smooth-scroll";
import React from "react";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollLink = ({ href, children, className }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elementId = href.replace("#", "");
    smoothScroll(elementId);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
