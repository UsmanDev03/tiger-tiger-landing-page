"use client";
import { motion } from "motion/react";
import curry from "@/assets/cat-curry.jpg";
import noodles from "@/assets/cat-noodles.jpg";
import coconut from "@/assets/cat-coconut.jpg";
import snacks from "@/assets/cat-snacks.jpg";

const items = [
  { title: "Curry Pastes & Cooking Sauces", tag: "Signature range", img: curry },
  { title: "Noodles & Rice", tag: "Wow Chow Range", img: noodles },
  { title: "Coconut & Kitchen Basics", tag: "Everyday essentials", img: coconut },
  { title: "Snacks, Drinks & Sides", tag: "Front-of-house", img: snacks },
];

export function ProductCarousel() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <motion.article
          key={it.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
        >
          <div className="aspect-square overflow-hidden bg-plum/5">
            <img
              src={it.img}
              alt={it.title}
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-cta">
              {it.tag}
            </p>
            <h3 className="mt-1.5 text-lg font-bold text-plum">{it.title}</h3>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
