"use client";

import React, { useEffect, useState } from "react";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";
import video5 from "@/assets/video5.mp4";

// Original Data (Har video ab apni alag ID aur file ke sath hai)
const baseStories = [
  { id: 1, video: video1 },
  { id: 2, video: video2 },
  { id: 3, video: video3 },
  { id: 4, video: video4 },
  { id: 5, video: video5 },
];

// Seamless loop ke liye array ko double kar diya hai
const storiesData = [...baseStories, ...baseStories];

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Ek waqt mein 6 videos nazar aayengi
  const visibleCount = 6;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  // Jab index aakhri original item par pahuche toh bina jhatke ke wapis start par le aayega
  const handleTransitionEnd = () => {
    if (currentIndex >= baseStories.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto px-4 py-8 overflow-hidden bg-plum/90">
      <h3 className="mb-8 text-2xl font-black uppercase tracking-wider text-white text-center">
        what people are saying
      </h3>

      {/* Stories Track Container */}
      <div className="overflow-hidden">
        <div
          className={`flex gap-4 ${
            isTransitioning ? "transition-transform duration-700 ease-out" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {storiesData.map((story, index) => (
            <div
              key={`${story.id}-${index}`}
              className="min-w-[150px] sm:min-w-[calc(16.666%-14px)] flex-1 flex flex-col overflow-hidden bg-transparent border-0 p-0 shadow-none shrink-0"
            >
              {/* Vertical Story Card Video Box (Instagram Story Ratio 9:16) */}
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg">
                <video
                  src={story.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}