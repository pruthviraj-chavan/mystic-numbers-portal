
import React from "react";

export function RotatingZodiacWheel() {
  return (
    <div className="relative h-full w-full flex items-center justify-center pointer-events-none">
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30 flex items-center justify-center animate-spin-slow">
        {/* Zodiac circle */}
        <div className="absolute inset-0 rounded-full border border-primary/10"></div>
        
        {/* Zodiac signs positioned around the circle */}
        {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((sign, index) => {
          const angle = (index * 30) * (Math.PI / 180);
          const x = Math.cos(angle) * 120;
          const y = Math.sin(angle) * 120;
          
          return (
            <div
              key={index}
              className="absolute text-xl font-bold text-primary/70"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${index * 30}deg)`,
              }}
            >
              {sign}
            </div>
          );
        })}
        
        {/* Inner circle with numbers */}
        <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center relative">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
            const angle = (index * 40) * (Math.PI / 180);
            const x = Math.cos(angle) * 60;
            const y = Math.sin(angle) * 60;
            
            return (
              <div
                key={num}
                className="absolute w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {num}
              </div>
            );
          })}
          <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary/50 text-3xl">
            🔮
          </div>
        </div>
      </div>
    </div>
  );
}
