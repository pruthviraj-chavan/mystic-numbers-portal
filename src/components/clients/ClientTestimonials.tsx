
import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    photo: "😊",
    rating: 5,
    testimonial: "Dr. Shivaani's life path reading was incredibly accurate. Her insights helped me change careers, and I've never been happier!",
    lifePathNumber: "7",
  },
  {
    id: 2,
    name: "Rahul Mehra",
    photo: "😀",
    rating: 5,
    testimonial: "The business numerology consultation revolutionized my company. After renaming based on Dr. Kalle's advice, our growth increased by 40%!",
    lifePathNumber: "8",
  },
  {
    id: 3,
    name: "Ananya Patel",
    photo: "🙂",
    rating: 5,
    testimonial: "My relationship compatibility reading with my partner gave us deep insights into our dynamics. We now understand each other so much better.",
    lifePathNumber: "2",
  },
  {
    id: 4,
    name: "Vikram Singh",
    photo: "😄",
    rating: 5,
    testimonial: "The home numerology analysis transformed our living space. The energy shifted immediately after making the suggested changes!",
    lifePathNumber: "4",
  },
  {
    id: 5,
    name: "Maya Desai",
    photo: "😊",
    rating: 5,
    testimonial: "Dr. Shivaani's angel number guidance helped me recognize the signs universe was sending. I now feel more connected to my spiritual path.",
    lifePathNumber: "9",
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    photo: "😎",
    rating: 5,
    testimonial: "The personal year forecast was spot on! It prepared me for major life changes and helped me navigate them with confidence.",
    lifePathNumber: "1",
  },
];

export function ClientTestimonials() {
  return (
    <section className="py-16 bg-secondary/50 relative overflow-hidden">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
          Client Testimonials
          <span className="block text-sm font-normal text-muted-foreground mt-2">
            Hear from those who've experienced the power of numerology
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="mystic-card bg-card/80 backdrop-blur overflow-hidden"
            >
              <CardContent className="p-6 relative">
                <div className="absolute -right-4 -top-4 text-8xl opacity-5 pointer-events-none rotate-12">
                  <Quote />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    {testimonial.photo}
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="text-xs text-muted-foreground flex items-center mt-4">
                  <span>Life Path Number: </span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary ml-2">
                    {testimonial.lifePathNumber}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
