
import React, { useEffect, useRef } from "react";

export function SacredGeometry() {
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
    const totalFrames = 240;
    let animationId: number;
    
    const clearCanvas = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    
    const drawFlowerOfLife = (progress: number) => {
      if (!ctx) return;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
      
      // Calculate current radius based on progress
      const radius = maxRadius * Math.min(1, progress * 1.5);
      
      // First circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius / 3, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(138, 77, 255, ${progress * 0.6})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw petals
      const petalCount = 6;
      const petalProgress = Math.min(1, progress * 2);
      
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * Math.PI * 2) / petalCount;
        const x = centerX + Math.cos(angle) * (radius / 3);
        const y = centerY + Math.sin(angle) * (radius / 3);
        
        if (petalProgress > 0) {
          ctx.beginPath();
          ctx.arc(x, y, radius / 3 * petalProgress, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(138, 77, 255, ${petalProgress * 0.5})`;
          ctx.stroke();
        }
      }
      
      // Outer circles
      if (progress > 0.5) {
        const outerProgress = (progress - 0.5) * 2;
        const outerPetalCount = 12;
        
        for (let i = 0; i < outerPetalCount; i++) {
          const angle = (i * Math.PI * 2) / outerPetalCount + Math.PI / 6;
          const x = centerX + Math.cos(angle) * (radius / 3 * 2);
          const y = centerY + Math.sin(angle) * (radius / 3 * 2);
          
          ctx.beginPath();
          ctx.arc(x, y, radius / 3 * outerProgress, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(138, 77, 255, ${outerProgress * 0.4})`;
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      frame = (frame + 1) % totalFrames;
      const progress = Math.sin((frame / totalFrames) * Math.PI) * 0.5 + 0.5;
      
      clearCanvas();
      drawFlowerOfLife(progress);
      
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
      className="w-full h-full"
    />
  );
}
