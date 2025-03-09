
import React from "react";
import { CheckCircle } from "lucide-react";

const expertiseItems = [
  "Life Path & Destiny Analysis",
  "Relationship Compatibility",
  "Business Name & Career Numerology",
  "Angel Number Interpretations",
  "Karmic & Spiritual Healing",
];

export function AboutHero() {
  return (
    <section className="py-28 px-4 relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in [animation-delay:200ms]">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About Dr. Shivaani Kalle
              <span className="text-gradient block mt-1">Numerology Expert</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              Dr. Shivaani Kalle is a renowned numerologist with years of experience decoding 
              numerical energies to bring clarity, success, and harmony into people's lives.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 my-6 text-lg italic">
              "Numbers are not just digits; they are cosmic codes unlocking your destiny."
            </blockquote>
            
            <h2 className="text-xl font-semibold mb-4">Expertise in:</h2>
            <ul className="space-y-3 mb-6">
              {expertiseItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-tr from-primary/30 to-primary/5 flex items-center justify-center p-10">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-card flex items-center justify-center">
                  <span className="text-8xl">🔮</span>
                </div>
                <h3 className="mt-6 text-lg font-medium">Dr. Shivaani Kalle</h3>
                <p className="text-sm text-muted-foreground">Numerology Expert</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-stars-pattern opacity-20 animate-pulse-subtle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
