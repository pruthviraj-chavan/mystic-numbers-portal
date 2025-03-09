
import React, { useEffect, useRef } from "react";

export function AstroNumerologySpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    // Animation variables
    let frame = 0;
    let animationId: number;
    
    // Spiral parameters
    const numerologyNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11", "22", "33"];
    
    const drawSpiral = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.45;
      
      // Draw spiral
      const totalRotations = 3;
      const pointsPerRotation = 30;
      const totalPoints = totalRotations * pointsPerRotation;
      
      for (let i = 0; i < totalPoints; i++) {
        const progress = i / totalPoints;
        const angle = progress * Math.PI * 2 * totalRotations + frame / 100;
        const radius = progress * maxRadius;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Draw number
        if (i % 15 === 0) {
          const numberIndex = Math.floor((i / 15) % numerologyNumbers.length);
          const number = numerologyNumbers[numberIndex];
          
          const opacity = 0.2 + Math.sin(frame / 30 + i / 10) * 0.15;
          
          ctx.fillStyle = `rgba(138, 77, 255, ${opacity})`;
          ctx.font = `${14 + progress * 10}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(number, x, y);
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      frame++;
      drawSpiral();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0"
    />
  );
}
