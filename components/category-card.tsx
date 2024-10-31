import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: string;
  children: React.ReactNode;
}

export const CategoryCard = ({ category, children }: CategoryCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const getGradient = (category: string) => {
    switch (category) {
      case "Backend":
        return "from-violet-500/20 via-transparent to-rose-500/20 dark:from-violet-900/20 dark:via-transparent dark:to-rose-900/20";
      case "Frontend":
        return "from-blue-500/20 via-transparent to-rose-500/20 dark:from-blue-900/20 dark:via-transparent dark:to-rose-900/20";
      default:
        return "from-emerald-500/20 via-transparent to-rose-500/20 dark:from-emerald-900/20 dark:via-transparent dark:to-rose-900/20";
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="relative group rounded-xl overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-50",
          getGradient(category),
        )}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(244, 63, 94, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative p-8">
        <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
          {category}
        </h3>
        {children}
      </div>
    </motion.div>
  );
};
