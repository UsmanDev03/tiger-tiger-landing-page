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
      {/* Hamburger Button */}
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-amber-500 hover:bg-amber-500/10 md:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      {/* Overlay + Side Panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Side Container without Top Black Background */}
          <div className="absolute right-0 top-0 h-full w-80 p-6 text-white flex flex-col items-end">
            {/* Transparent Header with Close Button */}
            <div className="flex justify-end w-full pb-4">
              <button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-amber-500 hover:bg-white/10 transition"
              >
                <X className="h-7 w-7" aria-hidden />
              </button>
            </div>

            {/* Black Nav Box for Links only */}
            <nav className="w-full flex flex-col bg-neutral-950 p-4 rounded-3xl border border-amber-500/20 shadow-2xl">
              <ul className="flex flex-col w-full">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3.5 text-base font-semibold text-white transition hover:text-amber-400 hover:bg-amber-500/10 border-b border-amber-500/15 rounded-lg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>


              {/* Tiger Theme CTA Button */}
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="mt-6 w-full text-center rounded-xl bg-amber-500 px-4 py-3.5 text-base font-bold text-black transition hover:bg-amber-400 shadow-md shadow-amber-500/20"
              >
                Apply for a Trade Account
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

