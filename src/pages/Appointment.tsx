
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { Footer } from "@/components/common/Footer";

const Appointment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Book Your Numerology Consultation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
              Schedule a personalized session with Dr. Shivaani Kalle and discover how 
              numerology can transform your understanding of yourself and your life path.
            </p>
          </div>
          
          <AppointmentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
