"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/config/pricingPlan";

export default function PricingCards() {
  return (
    <div className="min-h-screen flex items-center justify-center from-gray-100 to-gray-200 p-4">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-1"
          >
            <Card
              className={`${plan.color} ${plan.textColor} h-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader className="space-y-1 pb-3">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className={`${plan.textColor} text-2xl font-extrabold`}
                >
                  ${plan.price}
                  <span className="text-lg font-normal">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center text-sm"
                    >
                      {feature.included ? (
                        <Check className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="mr-2 h-4 w-4 text-red-500 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "opacity-75"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.color === "bg-background" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-background text-primary hover:bg-background/90"}`}
                >
                  Get started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
