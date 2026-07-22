"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What are your minimum order quantities?",
    a: "MOQs start from a single mixed pallet across our range, with case-level top-ups on repeat orders. Wholesale and foodservice accounts get bespoke MOQs after approval.",
  },
  {
    q: "How fast is UK delivery?",
    a: "Standard 48–72 hour nationwide delivery from UK-held stock via our JK Foods distribution network. Named-day slots available for account holders.",
  },
  {
    q: "How does trade pricing work?",
    a: "Once your trade application is approved, you receive a full price list scaled to your channel — retail, wholesale, or foodservice — with volume tiers.",
  },
  {
    q: "How long does the application process take?",
    a: "Applications are reviewed within 24 business hours. We verify trade status, assign an account manager, and send pricing plus a starter order form.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <div className="divide-y divide-border rounded-2xl bg-white ring-1 ring-black/5">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h3 itemProp="name" className="text-base font-semibold text-plum sm:text-lg">
                  {f.q}
                </h3>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-plum text-white">
                  {isOpen ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                </span>
              </button>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className={`grid overflow-hidden px-6 transition-[grid-template-rows,padding] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <p itemProp="text" className="min-h-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* JSON-LD FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
