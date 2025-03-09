
import React from "react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    id: 1,
    number: "1",
    title: "Life Path Number Analysis",
    description: "Discover your true purpose and destiny based on your birth date.",
    animation: "animate-float",
  },
  {
    id: 2,
    number: "2",
    title: "Name Numerology Reading",
    description: "Your name carries a hidden vibration. Let's decode its meaning!",
    animation: "animate-pulse-subtle",
  },
  {
    id: 3,
    number: "3",
    title: "Compatibility & Relationship Numerology",
    description: "Understand your romantic and personal relationships through numbers.",
    animation: "animate-pulse-subtle",
  },
  {
    id: 4,
    number: "4",
    title: "Career & Business Numerology",
    description: "Find the best career path and business name aligned with your energy.",
    animation: "animate-float",
  },
  {
    id: 5,
    number: "5",
    title: "Personal Year Forecast",
    description: "Uncover what this year holds for you based on numerology cycles.",
    animation: "animate-pulse-subtle",
  },
  {
    id: 6,
    number: "6",
    title: "Karmic Debt Number Analysis",
    description: "Decode your past-life challenges and balance your karmic energy.",
    animation: "animate-float",
  },
  {
    id: 7,
    number: "7",
    title: "Lucky Number & Color Prediction",
    description: "Find your lucky numbers and colors for success and positivity.",
    animation: "animate-pulse-subtle",
  },
  {
    id: 8,
    number: "8",
    title: "House & Address Numerology",
    description: "See how your home's numerology affects your life energy.",
    animation: "animate-float",
  },
  {
    id: 9,
    number: "9",
    title: "Angel Number Guidance",
    description: "Understand the repeating numbers (111, 222, 333) and their divine messages.",
    animation: "animate-pulse-subtle",
  },
  {
    id: 10,
    number: "🔮",
    title: "Chakra & Numerology Energy Balance",
    description: "Align your numerological energy with your chakras for peace and growth.",
    animation: "animate-float",
  },
];

export function ServicesList() {
  return (
    <section className="py-20 relative">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
