
import React from "react";

export function ClientsHero() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container max-w-5xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Our Valued Clients
            <span className="text-gradient block mt-1">Success Stories</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:200ms]">
            Discover how numerology has transformed the lives of our clients, bringing clarity, 
            direction, and harmony through the ancient wisdom of numbers.
          </p>

          <div className="relative h-40 w-full my-12 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="astro-numerology-spiral w-80 h-80 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
