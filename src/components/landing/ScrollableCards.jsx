"use client";
import React, { useEffect, useState } from "react";
import { Store, UtensilsCrossed, ArrowRight } from "lucide-react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

const sectorsData = [
  {
    icon: Store,
    eyebrow: "Wholesale",
    title: "Retail, Cash & Carry, Convenience",
    body: "Rate of sale winners at every price point jars, pouches and pack sizes buyers reorder without prompting.",
    cta: "Open a Wholesale Account",
    imageSrc: image1,
  },
  {
    icon: UtensilsCrossed,
    eyebrow: "Foodservice",
    title: "Restaurants, Takeaways, Caterers",
    body: "Kitchen grade tubs, consistent recipes and stable pricing your development chef can actually build a menu on.",
    cta: "Open a Foodservice Account",
    imageSrc: image2,
  },
];

// Array ko double kar diya hai taake infinite forward loop seamless chale
const extendedSectors = [...sectorsData, ...sectorsData];

export default function SectorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Desktop par auto-scroll ke liye (hamesha forward move karega)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    // Jab slider second set ke end par pohanche toh baghair animation ke wapis 0 index par le aayein
    if (currentIndex >= sectorsData.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      
      // Foran baad transition wapis on kar dein taake agli forward movement smooth ho
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  return (
    <div className="mt-14 w-full">
      {/* Mobile par dono cards vertical list (stack) mein dikhenge */}
      <div className="flex flex-col md:hidden gap-6">
        {sectorsData.map((s) => (
          <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/10 p-6 text-white shadow-xl ring-1 ring-white/10 backdrop-blur gap-6">
            <div className="relative flex-1 text-left w-full">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-orange-cta">
                <s.icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-orange-cta">
                {s.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-black">{s.title}</h3>
              <p className="mt-3 text-sm text-white/80">{s.body}</p>
            </div>
            <div className="w-full h-[180px] rounded-2xl overflow-hidden border-2 border-blue-500/60 bg-black/20">
              <img src={s.imageSrc} alt={s.title} className="h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </div>

      {/* Desktop ke liye smooth forward-only infinite scrolling slider */}
      <div className="hidden md:block overflow-hidden w-full">
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-700 ease-out" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSectors.map((s, i) => (
            <div key={`${s.title}-${i}`} className="min-w-full flex-shrink-0">
              <article className="group relative flex h-full flex-row items-center justify-between overflow-hidden rounded-3xl bg-white/10 p-10 text-white shadow-xl ring-1 ring-white/10 backdrop-blur gap-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl transition group-hover:bg-orange-cta/30" aria-hidden />
                
                <div className="relative flex-1 text-left">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-cta">
                    <s.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-orange-cta">
                    {s.eyebrow}
                  </p>
                  <h3 className="mt-2 text-3xl font-black">{s.title}</h3>
                  <p className="mt-4 text-white/80">{s.body}</p>
                  <a href="#apply" className="btn-cta mt-8 inline-flex items-center gap-2">
                    {s.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>

                <div className="w-[280px] h-[220px] flex-shrink-0 rounded-2xl overflow-hidden bg-black/20">
                  <img src={s.imageSrc} alt={s.title} className="h-full w-full object-cover" />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}