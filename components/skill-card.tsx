import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  level: string;
  category: string;
  index: number;
}

export const SkillCard = ({ name, level, category, index }: SkillCardProps) => {
  const baseDelay =
    category === "Backend" ? 0 : category === "Frontend" ? 0.2 : 0.4;

  const getGradient = (category: string) => {
    switch (category) {
      case "Backend":
        return "from-violet-500 to-rose-500 dark:from-violet-600 dark:to-rose-600";
      case "Frontend":
        return "from-blue-500 to-rose-500 dark:from-blue-600 dark:to-rose-600";
      default:
        return "from-emerald-500 to-rose-500 dark:from-emerald-600 dark:to-rose-600";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-200";
      case "Intermediate":
        return "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-200";
      default:
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: baseDelay + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-gradient-to-r",
          getGradient(category),
        )}
        style={{ filter: "blur(20px)", transform: "translate(0, 10px)" }}
      />
      <div className="relative p-6 rounded-lg bg-white dark:bg-gray-900 border border-rose-100/20 dark:border-rose-900/20 shadow-lg hover:shadow-xl transition-shadow">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
          {name}
        </h4>
        <span
          className={cn(
            "inline-block px-2 py-1 rounded text-sm font-medium",
            getLevelColor(level),
          )}
        >
          {level}
        </span>
      </div>
    </motion.div>
  );
};
