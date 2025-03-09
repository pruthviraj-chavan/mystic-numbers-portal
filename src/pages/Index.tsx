
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MysticNumberFlow } from "@/components/animations/MysticNumberFlow";
import { Footer } from "@/components/common/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative">
        <MysticNumberFlow />
        <Hero />
        <ServicesPreview />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
