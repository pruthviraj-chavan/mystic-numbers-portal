
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { NumbersAnimation } from "./NumbersAnimation";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      <NumbersAnimation />
      
      <div className="container max-w-5xl px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block rounded-full px-4 py-1.5 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-2">
            Discover Your Cosmic Blueprint
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Unlock the Secrets of Your Numbers with 
            <span className="text-gradient block mt-2">Dr. Shivaani Kalle</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers hold hidden meanings that shape your destiny, relationships, and career. 
            With expert numerology insights, discover your true potential and align your life 
            with cosmic vibrations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/appointment')}
              className="rounded-full text-base px-8 h-12"
            >
              Book a Session
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/services')}
              className="rounded-full text-base px-8 h-12"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#services-preview" 
          className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 backdrop-blur-sm text-primary hover:bg-primary/20 transition-colors"
        >
          <ArrowDown size={20} />
        </a>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-radial from-primary/5 to-transparent -z-10"></div>
    </section>
  );
}
