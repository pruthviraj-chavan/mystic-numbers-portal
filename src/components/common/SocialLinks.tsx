
import React from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  vertical?: boolean;
  className?: string;
}

export function SocialLinks({ vertical = false, className }: SocialLinksProps) {
  const socialMedia = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-4 w-4" />,
      url: "https://wa.me/919404895667",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: "#",
    },
  ];

  return (
    <div 
      className={cn(
        "flex items-center gap-2",
        vertical && "flex-col",
        className
      )}
    >
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-accent/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
