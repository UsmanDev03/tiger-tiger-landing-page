"use client";
import { useState } from "react";
import { ShieldCheck, Clock3, FileCheck2, Loader2, CheckCircle2 } from "lucide-react";

export function TradeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-black/5">
        <CheckCircle2 className="mx-auto h-14 w-14 text-orange-cta" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold text-plum">Application received</h3>
        <p className="mt-2 text-muted-foreground">
          A named account manager will be in touch within 24 business hours with your full price list.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8"
    >
      <div className="mb-6 flex flex-wrap gap-4 text-xs font-medium text-plum">
        <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-orange-cta" aria-hidden /> Reviewed within 24 business hours</span>
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-orange-cta" aria-hidden /> Strictly trade only</span>
        <span className="inline-flex items-center gap-1.5"><FileCheck2 className="h-4 w-4 text-orange-cta" aria-hidden /> Full price list sent on approval</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Business Name" name="business" required />
        <Field label="Contact Person" name="contact" required />
        <Field label="Business Email" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <div className="flex flex-col">
          <label className="mb-1.5 text-sm font-semibold text-plum">Business Type</label>
          <select
            name="type"
            required
            className="h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30"
            defaultValue=""
          >
            <option value="" disabled>Select…</option>
            <option>Retail / Convenience</option>
            <option>Cash &amp; Carry / Wholesale</option>
            <option>Restaurant / Takeaway</option>
            <option>Caterer / Foodservice</option>
            <option>Other</option>
          </select>
        </div>
        <Field label="UK Postcode" name="postcode" required />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-cta mt-6 w-full py-4 text-base disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Submitting…</>
        ) : (
          "Submit Application"
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
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
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1.5 text-sm font-semibold text-plum">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-orange-cta focus:ring-2 focus:ring-orange-cta/30"
      />
    </div>
  );
}
