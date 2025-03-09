
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: number;
  number: string;
  title: string;
  description: string;
  animation?: string;
  className?: string;
}

export function ServiceCard({ id, number, title, description, animation, className }: ServiceCardProps) {
  const navigate = useNavigate();
  
  return (
    <div 
      className={cn(
        "mystic-card rounded-2xl overflow-hidden group",
        "animate-fade-in [animation-delay:var(--delay,0ms)]",
        className
      )}
      style={{ "--delay": `${(id % 10) * 100}ms` } as React.CSSProperties}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold">
            {number}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <Button 
          onClick={() => navigate('/appointment')}
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          Book Session
        </Button>
      </div>
      
      {animation && (
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity">
          <div className={animation}></div>
        </div>
      )}
    </div>
  );
}
