import { HeroComponent } from "@/types/components";

export const HeroData: HeroComponent = {
  title: "from 0 → 1, faster",
  image: "/images/hero-title-image.svg",
  description: {
    semi: "production-ready saas starter kits built with",
    main: "NextJS + Supabase + Stripe",
  },
  buttonTitle: "purchase",
  buttonUrl: "string",
};

export const termsData = [
  {
    title: "Introduction",
    content:
      "Welcome to [Your Company Name]! These terms and conditions outline the rules and regulations for the use of our services.",
  },
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using our website, you accept these terms in full. If you disagree with any part, please do not use our services.",
  },
  {
    title: "User Responsibilities",
    content: [
      "Provide accurate and up-to-date information.",
      "Do not engage in any illegal activities.",
      "Respect intellectual property rights.",
    ],
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this site is owned by [Your Company Name]. You may not reproduce or distribute any material without permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not responsible for any direct or indirect damages resulting from the use of our services.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to terminate or suspend access to our services without prior notice for any breach of these terms.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved in the appropriate legal jurisdiction.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions about these terms, please contact us at [Your Contact Email].",
  },
];
