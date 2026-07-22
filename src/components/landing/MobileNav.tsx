"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#why", label: "Why Stock Us" },
  { href: "#range", label: "Product Range" },
  { href: "#sectors", label: "Sectors" },
  { href: "#distribution", label: "Distribution" },
  { href: "#faq", label: "FAQ" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-plum md:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-2xl">
            <div className="flex justify-end">
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-plum"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <nav className="mt-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-plum hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a href="#apply" onClick={() => setOpen(false)} className="btn-cta mt-4">
                Apply for a Trade Account
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
