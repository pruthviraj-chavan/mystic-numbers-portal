
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ServicesList } from "@/components/services/ServicesList";
import { RotatingZodiacWheel } from "@/components/animations/RotatingZodiacWheel";
import { AstroNumerologySpiral } from "@/components/animations/AstroNumerologySpiral";
import { Footer } from "@/components/common/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 relative">
        <div className="container max-w-6xl py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Numerology Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
            Each number has a vibration that influences different areas of your life. 
            Choose from our expert services to unlock your numeric potential.
          </p>
          
          <div className="relative h-60 my-8 overflow-hidden">
            <RotatingZodiacWheel />
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <AstroNumerologySpiral />
          </div>
          <ServicesList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
