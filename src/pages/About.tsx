
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { SacredGeometry } from "@/components/animations/SacredGeometry"; 
import { MysticNumberFlow } from "@/components/animations/MysticNumberFlow";
import { Footer } from "@/components/common/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        <MysticNumberFlow />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <SacredGeometry />
        </div>
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
};

export default About;
