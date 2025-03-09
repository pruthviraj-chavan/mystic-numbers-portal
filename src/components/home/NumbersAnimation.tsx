
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const numerologyNumbers = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "11", "22", "33"
];

interface FloatingNumber {
  id: number;
  number: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function NumbersAnimation() {
  const [numbers, setNumbers] = useState<FloatingNumber[]>([]);

  useEffect(() => {
    // Create initial floating numbers
    const initialNumbers = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      number: numerologyNumbers[Math.floor(Math.random() * numerologyNumbers.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 5 + 3,
      opacity: Math.random() * 0.2 + 0.1,
    }));

    setNumbers(initialNumbers);

    // Animation loop
    const interval = setInterval(() => {
      setNumbers(prev => 
        prev.map(num => ({
          ...num,
          y: (num.y + 0.1 * num.speed) % 100,
          opacity: num.opacity + (Math.random() * 0.02 - 0.01),
        }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {numbers.map((num) => (
        <div
          key={num.id}
          className={cn(
            "floating-number",
            num.size > 2 ? "animate-pulse-subtle" : ""
          )}
          style={{
            left: `${num.x}%`,
            top: `${num.y}%`,
            fontSize: `${num.size * 1.5}rem`,
            opacity: num.opacity,
            transition: 'transform 6s ease-in-out, opacity 3s ease-in-out',
          }}
        >
          {num.number}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background"></div>
    </div>
  );
}
