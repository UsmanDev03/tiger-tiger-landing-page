"use client";
import React, { useEffect, useState } from "react";

// Instagram Reels URLs (clean, without tracking params)
const baseStories = [
  { id: 1, url: "https://www.instagram.com/reel/Dafr93lMqUt/" },
  { id: 2, url: "https://www.instagram.com/reel/DaaBOHqsBLR/" },
  { id: 3, url: "https://www.instagram.com/reel/DaPn6XxsN1a/" },
  { id: 4, url: "https://www.instagram.com/reel/DMlKfB1sPLG/" },
  { id: 5, url: "https://www.instagram.com/reel/DF6f1inS7ty/" },
];

// Seamless loop ke liye array ko double kar diya hai
const storiesData = [...baseStories, ...baseStories];

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Wapis 6 videos par set kar diya hai
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
          {storiesData.map((story, index) => {
            const cleanUrl = story.url.endsWith("/") ? story.url.slice(0, -1) : story.url;
            const embedUrl = `${cleanUrl}/embed`;

            return (
              <div
                key={`${story.id}-${index}`}
                className="min-w-[180px] sm:min-w-[calc(16.666%-14px)] flex-1 flex flex-col overflow-hidden bg-transparent border-0 p-0 shadow-none shrink-0"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg flex items-center justify-center">
                  <iframe
                    src={embedUrl}
                    className="absolute w-[145%] h-[140%] -top-[18%] -left-[22%] border-0 pointer-events-auto"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}