import {
  Chrome,
  Code,
  FileText,
  Music4,
  ShoppingCart,
  CircleDollarSign,
  Edit,
  Calendar,
  BookOpen,
  Brain,
} from "lucide-react";

export const stackConfig = [
  {
    title: "Development",
    items: [
      {
        name: "Stripe",
        description: "Payment",
        icon: CircleDollarSign,
      },
      {
        name: "Remix",
        description: "E-Commerce Framework",
        icon: Code,
      },
      {
        name: "Next.js",
        description: "React Framework",
        icon: FileText,
      },
      {
        name: "Tailwind",
        description: "CSS Utility",
        icon: Edit,
      },
      {
        name: "Shopify",
        description: "E-Commerce Platform",
        icon: ShoppingCart,
      },
      {
        name: "VS Code",
        description: "Code Editor",
        icon: BookOpen,
      },
      {
        name: "Supabase",
        description: "Database",
        icon: Brain,
      },
      {
        name: "Vercel",
        description: "Hosting",
        icon: Chrome,
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Apple Music",
        description: "Music Streaming",
        icon: Music4,
      },
      {
        name: "Grammarly",
        description: "Writing Assistant",
        icon: Edit,
      },
      {
        name: "Google Calendar",
        description: "Scheduling",
        icon: Calendar,
      },
      {
        name: "Arc",
        description: "Browser",
        icon: Chrome,
      },
      {
        name: "Apple Notes",
        description: "Note-taking",
        icon: FileText,
      },
      {
        name: "ChatGPT",
        description: "AI Assistant",
        icon: Brain,
      },
    ],
  },
];
