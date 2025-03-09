
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: "✨",
    title: "Life Path & Destiny Analysis",
    description: "Discover your true purpose and life path based on your birth date.",
  },
  {
    id: 2,
    icon: "🔮",
    title: "Compatibility & Relationships",
    description: "Understand your romantic and personal relationships through numerology.",
  },
  {
    id: 3,
    icon: "💼",
    title: "Business Name & Career",
    description: "Find the best career path and business name aligned with your energy.",
  },
  {
    id: 4,
    icon: "👼",
    title: "Angel Number Insights",
    description: "Decode repetitive number patterns and their spiritual messages.",
  },
];

export function ServicesPreview() {
  const navigate = useNavigate();

  return (
    <section 
      id="services-preview" 
      className="py-20 relative overflow-hidden"
    >
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">What We Offer</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Discover Your Numeric Destiny</h3>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each number carries a unique vibration that influences different aspects of your life.
            Our specialized numerology services help you harness these energies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "group mystic-card rounded-2xl p-6 flex flex-col items-center text-center",
                "hover:translate-y-[-4px]",
                `animate-fade-in [animation-delay:${index * 100}ms]`
              )}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => navigate('/services')}
            variant="outline" 
            className="group rounded-full border-primary/20"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-3xl -z-10"></div>
    </section>
  );
}
