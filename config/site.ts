import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://localhost:3000"

export const siteConfig: SiteConfig = {
  name: "BuildFastKit - saas starter by mrhashcoder",
  author: "mrhashcoder",
  description:
    "This repository provides a fast and flexible framework for building SaaS applications using Next.js, Tailwind CSS, and Shadcn components.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://mrhashcoder.in",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "mrhashcoder@gmail.com",
}
