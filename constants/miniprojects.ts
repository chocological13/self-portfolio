import { ProjectList } from "@/constants/types";

export const miniProjects: ProjectList[] = [
  {
    title: "💘 Valentine Bug",
    description:
      "A playful mini-game where you catch coding bugs to win someone’s heart. Debug your way through love and unlock a sweet valentine message at the end!",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "useSound",
    ],
    metrics:
      "Mobile-friendly, sound-enabled, and full of charm — this interactive game adds a quirky twist to debugging and Valentine's Day fun.",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_VALENTINE_BUG}`,
    demo: `${process.env.NEXT_PUBLIC_DEMO_VALENTINE_BUG}`,
  },
  {
    title: "💌 Valentine Card",
    description:
      "A cheeky Valentine’s Day card that refuses to take 'no' for an answer. Try to reject it and watch the button run away — it’s all love and laughs!",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics:
      "Interactive animations and witty responses keep users engaged — because love always finds a way (especially when you can't click 'No').",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_VALENTINE_CARD}`,
    demo: `${process.env.NEXT_PUBLIC_DEMO_VALENTINE_CARD}`,
  },
  {
    title: "⏱️ Simple Pomodoro",
    description:
      "A cozy, pixelated Pomodoro timer to help you stay focused and productive. Simple, nostalgic, and effective.",
    tech: ["HTML", "CSS", "JavaScript"],
    metrics:
      "Classic Pomodoro technique wrapped in a charming retro UI, featuring interactive timers for a focused workflow.",
    github: `${process.env.NEXT_PUBLIC_GITHUB_URL}${process.env.NEXT_PUBLIC_GITHUB_SIMPLE_POMODORO}`,
    demo: `${process.env.NEXT_PUBLIC_DEMO_SIMPLE_POMODORO}`,
  },
];
