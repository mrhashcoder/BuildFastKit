export const plans = [
    {
      name: "Basic",
      price: 19,
      description: "Perfect for individuals just getting started.",
      features: [
        { name: "5 projects", included: true },
        { name: "1 GB storage", included: true },
        { name: "Basic analytics", included: true },
        { name: "24/7 support", included: false },
        { name: "Custom domain", included: false },
      ],
      color: "bg-white",
      textColor: "text-gray-900",
    },
    {
      name: "Pro",
      price: 49,
      description: "Ideal for growing businesses and teams.",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "10 GB storage", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Custom domain", included: false },
      ],
      color: "bg-primary",
      textColor: "text-primary-foreground",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For large-scale operations and organizations.",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Custom analytics", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Multiple custom domains", included: true },
      ],
      color: "bg-white",
      textColor: "text-secondary-foreground",
    },
  ]