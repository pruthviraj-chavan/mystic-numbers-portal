
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Personalized Numerology Services",
    description: "Tailored numerology readings for your unique life journey.",
  },
  {
    title: "Expert Numerologist",
    description: "Over 10+ years of experience decoding numbers and destiny.",
  },
  {
    title: "Confidential & Private Consultations",
    description: "Secure, 1-on-1 guidance respecting your privacy.",
  },
  {
    title: "Ongoing Support & Guidance",
    description: "Continuous numerology insights and future forecasting.",
  },
  {
    title: "Diverse Numerology Systems",
    description: "Vedic, Western, and Chaldean numerology techniques.",
  },
  {
    title: "Easy Online Access",
    description: "Video consultations available worldwide.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Expert Numerology Guidance</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Experience transformative insights from a recognized professional in the field of numerology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 rounded-2xl mystic-card",
                `animate-fade-in [animation-delay:${index * 100}ms]`
              )}
            >
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
}
