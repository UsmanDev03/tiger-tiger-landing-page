import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Truck,
  PackageCheck,
  TrendingUp,
  ChefHat,
  ShieldCheck,
  Layers,
  Check,
  Store,
  UtensilsCrossed,
  Warehouse,
  UserCheck,
  Boxes,
} from "lucide-react";
import heroImg from "@/assets/hero-dishes.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import { TradeForm } from "@/components/landing/TradeForm";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { ProductCarousel } from "@/components/landing/ProductCarousel";
import { Reveal } from "@/components/landing/Reveal";
import { MobileNav } from "@/components/landing/MobileNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiger Tiger Foods — Wholesale Pan-Asian Range for UK Trade" },
      {
        name: "description",
        content:
          "Open a trade account with Tiger Tiger Foods — the UK's leading developer of authentic Pan-Asian cuisine. 48–72 hour nationwide delivery, low MOQs, backed by JK Foods.",
      },
      { property: "og:title", content: "Tiger Tiger Foods — Wholesale Pan-Asian Range for UK Trade" },
      {
        property: "og:description",
        content:
          "Sell the Asian flavours Britain actually wants. Trade accounts for retail, cash & carry, restaurants and caterers. Apply in under 60 seconds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tiger Tiger Foods — Wholesale Pan-Asian" },
      {
        name: "twitter:description",
        content: "Open a UK trade account. 48–72 hour delivery, low MOQs, full range.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tiger Tiger Foods",
          slogan: "Unleash The Taste",
          description:
            "UK wholesale supplier of authentic Pan-Asian cuisine — curry pastes, sauces, noodles, rice and kitchen basics for retail and foodservice.",
          areaServed: "GB",
          brand: { "@type": "Brand", name: "Tiger Tiger" },
          parentOrganization: { "@type": "Organization", name: "JK Foods" },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const values = [
  {
    icon: TrendingUp,
    title: "Margins Worth the Shelf Space",
    body:
      "Trade pricing engineered for real-world channel margins — priced to move at retail, priced to plate at foodservice.",
  },
  {
    icon: ChefHat,
    title: "Proper Recipes, Full Strength",
    body:
      "Authentic Pan-Asian formulations built by our development kitchen — no watered-down flavour, no apologies.",
  },
  {
    icon: ShieldCheck,
    title: "Supply You Can Plan Around",
    body:
      "UK-held stock and named account managers mean you forecast once and get what you ordered, on time.",
  },
  {
    icon: Layers,
    title: "One Brand, Every Size",
    body:
      "Retail jars to caterer tubs across the same recipes. Menu consistency from prep bench to takeaway shelf.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Top announcement bar */}
      <div className="bg-plum text-white">
        <p className="mx-auto max-w-7xl px-4 py-2.5 text-center text-xs font-medium tracking-wide sm:text-sm">
          The UK's leading developer of authentic Pan-Asian cuisine.
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#">
            <img src="/logo.avif" alt="Tiger Tiger" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <a href="#why" className="text-sm font-semibold text-plum hover:text-orange-cta">Why Stock Us</a>
            <a href="#range" className="text-sm font-semibold text-plum hover:text-orange-cta">Product Range</a>
            <a href="#sectors" className="text-sm font-semibold text-plum hover:text-orange-cta">Sectors</a>
            <a href="#distribution" className="text-sm font-semibold text-plum hover:text-orange-cta">Distribution</a>
            <a href="#faq" className="text-sm font-semibold text-plum hover:text-orange-cta">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#apply" className="btn-cta hidden text-sm md:inline-flex">
              Apply for a Trade Account
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-dark to-crimson text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-cta/20 blur-3xl" aria-hidden />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-cta" /> UK Trade Only
              </span>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Sell the Asian Flavours{" "}
                <span className="text-orange-cta">Britain Actually Wants</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Authentic Pan-Asian recipes at trade pricing, distributed nationwide across the UK
                from our own warehouses. Retail, wholesale, restaurants and caterers — one range,
                every channel.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#apply" className="btn-cta text-base">
                  Apply for a Trade Account <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
                <a href="#range" className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-orange-cta hover:underline">
                  See the Full Range →
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md">
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-cta">
                    <Truck className="h-4 w-4" aria-hidden /> Delivery
                  </dt>
                  <dd className="mt-1 text-lg font-bold">48–72 hour UK</dd>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-cta">
                    <PackageCheck className="h-4 w-4" aria-hidden /> Orders
                  </dt>
                  <dd className="mt-1 text-lg font-bold">Low minimums</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-2 rounded-3xl bg-orange-cta/30 blur-2xl" aria-hidden />
              <img
                src={heroImg}
                alt="Premium Pan-Asian dishes — Thai green curry, stir-fried noodles, jasmine rice with curry paste and coconut milk"
                width={1280}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="relative aspect-square w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </section>

        {/* VALUE PROPS */}
        <section id="why" className="bg-offwhite py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">
                Why buyers keep us in the range
              </p>
              <h2 className="mt-3 text-3xl font-black text-plum sm:text-4xl">
                Four Reasons Buyers Keep Us on the Order Sheet
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <article className="group h-full rounded-2xl border-t-4 border-plum bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-plum/10 text-plum transition group-hover:bg-orange-cta group-hover:text-white">
                      <v.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-plum">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {v.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT RANGE */}
        <section id="range" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">
                  The Range
                </p>
                <h2 className="mt-3 text-3xl font-black text-plum sm:text-4xl">
                  A Range Wide Enough to Cover the Whole Menu
                </h2>
              </div>
              <a href="#apply" className="btn-ghost-plum text-sm">
                Request full catalogue <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </Reveal>

            <div className="mt-12">
              <ProductCarousel />
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section id="sectors" className="bg-offwhite py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">Sectors</p>
              <h2 className="mt-3 text-3xl font-black text-plum sm:text-4xl">
                Built for Your Side of the Trade
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {[
                {
                  icon: Store,
                  eyebrow: "Wholesale",
                  title: "Retail, Cash & Carry, Convenience",
                  body:
                    "Rate-of-sale winners at every price point — jars, pouches and pack sizes buyers reorder without prompting.",
                  cta: "Open a Wholesale Account",
                },
                {
                  icon: UtensilsCrossed,
                  eyebrow: "Foodservice",
                  title: "Restaurants, Takeaways, Caterers",
                  body:
                    "Kitchen-grade tubs, consistent recipes and stable pricing your development chef can actually build a menu on.",
                  cta: "Open a Foodservice Account",
                },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-plum p-8 text-white shadow-xl sm:p-10">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-cta/20 blur-3xl transition group-hover:bg-orange-cta/30" aria-hidden />
                    <div className="relative">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-orange-cta">
                        <s.icon className="h-7 w-7" aria-hidden />
                      </div>
                      <p className="mt-6 text-xs font-bold uppercase tracking-wider text-orange-cta">
                        {s.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-black sm:text-3xl">{s.title}</h3>
                      <p className="mt-4 text-white/80">{s.body}</p>
                      <a href="#apply" className="btn-cta mt-8 self-start">
                        {s.cta} <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DISTRIBUTION */}
        <section id="distribution" className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <Reveal>
              <img
                src={warehouseImg}
                alt="Tiger Tiger Foods UK distribution warehouse operated by JK Foods"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">
                Distribution
              </p>
              <h2 className="mt-3 text-3xl font-black text-plum sm:text-4xl">
                UK-Held Stock, Backed by JK Foods
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Every SKU is warehoused in the UK by our distribution partner JK Foods and shipped
                on your named account manager's watch — not a call centre.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  { icon: Warehouse, text: "UK-warehoused inventory across the full trade range" },
                  { icon: Truck, text: "48–72 hour nationwide delivery, named-day slots on request" },
                  { icon: UserCheck, text: "Named account manager, not a shared inbox" },
                  { icon: Boxes, text: "Mixed pallets and case-level top-ups on repeat orders" },
                ].map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-cta text-white">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm text-foreground sm:text-base">{b.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* TRADE FORM */}
        <section id="apply" className="relative overflow-hidden bg-gradient-to-br from-plum-dark via-plum to-crimson py-20 sm:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
            <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-orange-cta/40 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:pt-4">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">
                Trade Registration
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Open Your Trade Account Today
              </h2>
              <p className="mt-4 text-white/85">
                One short application. A named account manager gets back to you within one working
                day with your full price list, MOQs and starter order form.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-cta" aria-hidden /> No sign-up fee, no minimum contract</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-cta" aria-hidden /> Strictly UK trade — not open to consumers</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-cta" aria-hidden /> Full catalogue and price list on approval</li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <TradeForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-offwhite py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-cta">FAQ</p>
              <h2 className="mt-3 text-3xl font-black text-plum sm:text-4xl">
                Trade Questions, Answered Plainly
              </h2>
            </Reveal>
            <div className="mt-12">
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-14 text-white/70">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="inline-flex flex-col items-center">
             <img src="/logo.avif" alt="Tiger Tiger" className="h-12 w-auto" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm">
            Tiger Tiger Foods trade programme. UK distribution supported by JK Foods.
          </p>
          <div className="mt-4 text-xs text-white/50">
            © {new Date().getFullYear()} Tiger Tiger Foods.{" "}
            <a
              href="https://www.tigertigerfoods.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-orange-cta hover:underline"
            >
              Official Website ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
