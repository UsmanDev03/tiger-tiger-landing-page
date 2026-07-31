"use client";
import { useState } from "react";
import { ShieldCheck, Clock3, FileCheck2, Loader2, CheckCircle2, ChevronDown } from "lucide-react";
import chineseImg from "@/assets/chinese.png";
import thaiImg from "@/assets/thai.png";
import vietnameseImg from "@/assets/vietnamese.png";
import koreanImg from "@/assets/korean.png";
import japaneseImg from "@/assets/japanese.png";
import indianImg from "@/assets/indian.png";

export function TradeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    { id: "chinese", label: "Chinese", img: chineseImg.src || chineseImg },
    { id: "thai", label: "Thai", img: thaiImg.src || thaiImg },
    { id: "vietnamese", label: "Vietnamese", img: vietnameseImg.src || vietnameseImg },
    { id: "korean", label: "Korean", img: koreanImg.src || koreanImg },
    { id: "japanese", label: "Japanese", img: japaneseImg.src || japaneseImg },
    { id: "indian", label: "Indian", img: indianImg.src || indianImg },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-plum/10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-orange-cta" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-plum">Application received</h3>
        <p className="mt-2 text-plum/70">
          A named account manager will be in touch within 24 business hours with your full price list.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-plum/10 sm:p-9"
    >
      {/* Trust strip */}
      <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-plum/10 pb-6 text-xs font-medium text-plum">
        <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-orange-cta" aria-hidden /> Reviewed within 24 business hours</span>
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-orange-cta" aria-hidden /> Strictly trade only</span>
        <span className="inline-flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-orange-cta" aria-hidden /> Full price list sent on approval</span>
      </div>

      {/* Billing Information */}
      <h3 className="mb-5 text-2xl font-bold text-plum">Billing Information</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Contact Name" name="contact" required />
        <Field label="Business Name" name="business" required />
        <div className="sm:col-span-2">
          <Field label="Company Registration Number" name="companyRegistration" required />
        </div>
        <Field label="Company VAT Number" name="vatNumber" />
        <Field label="Position in Business" name="position" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      {/* Address Information + Primary Interest side by side */}
      <h3 className="mb-5 mt-10 text-2xl font-bold text-plum">Address Information</h3>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: address fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field label="Street Address" name="streetAddress" required />
          </div>
          <div className="sm:col-span-2">
            <Field label="Address 2" name="address2" />
          </div>
          <Field label="Country" name="country" required />
          <Field label="State" name="state" />
          <Field label="City" name="city" required />
          <Field label="Post Code" name="postCode" required />

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="businessType" className="mb-1.5 text-sm font-semibold text-plum">
              Type of Business
            </label>
            <div className="relative">
              <select
                id="businessType"
                name="businessType"
                required
                className="h-11 w-full appearance-none rounded-lg border border-plum/20 bg-white px-3 pr-9 text-sm text-plum outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30"
              >
                <option value="Wholesale">Wholesale</option>
                <option value="Retail">Retail</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Caterer">Caterer</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-plum/50" aria-hidden />
            </div>
          </div>
        </div>

        {/* Right: Primary Interest */}
        <div>
          <h4 className="mb-4 text-xl font-bold text-plum">Primary Interest</h4>
          <div className="grid grid-cols-3 gap-3">
            {interests.map((item) => {
              const isSelected = selectedInterests.includes(item.id);
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => toggleInterest(item.id)}
                  aria-pressed={isSelected}
                  className={`group relative overflow-hidden rounded-xl border p-3 text-center transition-all ${
                    isSelected
                      ? "border-orange-cta bg-orange-cta/5 ring-2 ring-orange-cta/30"
                      : "border-plum/15 bg-plum/5 hover:border-orange-cta/50 hover:bg-plum/10"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-cta text-white shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  )}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-plum/10">
                    <img src={item.img} alt={item.label} className="h-full w-full object-cover" />
                  </div>
                  <span className="mt-2 block text-sm font-semibold text-plum">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-cta mt-10 flex w-full items-center justify-center gap-2 py-4 text-base disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Submitting…</>
        ) : (
          "Submit Application"
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-plum/70">
        By submitting, you consent to Tiger Tiger Foods and our distribution partner JK Foods
        contacting you about trade pricing. We never share your details with third parties.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="mb-1.5 text-sm font-semibold text-plum">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="h-11 w-full rounded-lg border border-plum/25 bg-white px-3 text-sm text-plum outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30"
      />
    </div>
  );
}