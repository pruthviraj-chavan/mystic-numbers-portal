
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientTestimonials } from "@/components/clients/ClientTestimonials";
import { ClientVideos } from "@/components/clients/ClientVideos";
import { Footer } from "@/components/common/Footer";

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <ClientsHero />
        <ClientTestimonials />
        <ClientVideos />
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
