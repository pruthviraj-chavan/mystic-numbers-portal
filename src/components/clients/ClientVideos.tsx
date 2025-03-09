
import React from "react";
import { Play, Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Dummy video data
const clientVideos = [
  {
    id: 1,
    title: "How Numerology Changed My Career Path",
    client: "Aarav Khanna",
    thumbnail: "bg-gradient-to-r from-purple-500/20 to-blue-500/20",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Finding Love Through Compatibility Numerology",
    client: "Meera & Rohan Joshi",
    thumbnail: "bg-gradient-to-r from-pink-500/20 to-red-500/20",
    duration: "5:14",
  },
  {
    id: 3,
    title: "My Business Success Story with Dr. Shivaani",
    client: "Deepak Mehta",
    thumbnail: "bg-gradient-to-r from-amber-500/20 to-orange-500/20",
    duration: "4:28",
  },
  {
    id: 4,
    title: "Numerology and My Spiritual Awakening",
    client: "Nisha Gupta",
    thumbnail: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
    duration: "6:10",
  },
];

export function ClientVideos() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
          Client Success Videos
          <span className="block text-sm font-normal text-muted-foreground mt-2">
            Watch stories of transformation through numerology
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {clientVideos.map((video) => (
            <Card key={video.id} className="mystic-card group">
              <CardContent className="p-0 overflow-hidden">
                <div className={`aspect-video flex items-center justify-center relative ${video.thumbnail}`}>
                  <Film className="h-24 w-24 text-white/10 absolute" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs py-1 px-2 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    By {video.client}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
