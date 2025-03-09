
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { Footer } from "@/components/common/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
};

export default About;
