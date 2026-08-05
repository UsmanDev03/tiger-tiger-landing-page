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
  
  // Track karega ke kis video par click ho chuka hai aur wo play ho rahi hai
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Ek waqt mein 6 videos nazar aayengi
  const visibleCount = 6;

  useEffect(() => {
    const timer = window.setInterval(() => {
      // Agar koi video play ho rahi ho toh carousel ko pause rakh sakte hain ya chalne dein
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
            const embedUrl = `${cleanUrl}/embed?autoplay=1`;
            const isPlaying = playingIndex === index;

            return (
              <div
                key={`${story.id}-${index}`}
                className="min-w-[150px] sm:min-w-[calc(16.666%-14px)] flex-1 flex flex-col overflow-hidden bg-transparent border-0 p-0 shadow-none shrink-0"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg flex items-center justify-center">
                  
                  {isPlaying ? (
                    // Jab user click karega toh iframe play ho jayega isi card ke andar
                    <iframe
                      src={embedUrl}
                      className="absolute w-[145%] h-[140%] -top-[18%] -left-[22%] border-0 pointer-events-auto"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  ) : (
                    // Default state: Clickable custom play trigger overlay
                    <div 
                      onClick={() => setPlayingIndex(index)}
                      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent group"
                    >
                      {/* Play Button Icon */}
                      <div className="w-12 h-12 rounded-full bg-orange-cta/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-5 h-5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="mt-3 text-xs font-bold text-white tracking-wide drop-shadow">
                        Watch Reel
                      </span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}