"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FlameIcon, SnowflakeIcon, CheckIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bestTime: string;
  street: string;
  city: string;
  zip: string;
  existingCustomer: string;
  heatProblem: boolean;
  coolingProblem: boolean;
  notes: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bestTime: "Anytime",
  street: "",
  city: "",
  zip: "",
  existingCustomer: "",
  heatProblem: false,
  coolingProblem: false,
  notes: "",
};

const label = "eyebrow mb-2.5 block !text-[0.6rem] text-body/80";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-line bg-[#fffdf8] p-12 text-center md:p-16"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember-soft text-ember">
          <CheckIcon className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <h2 className="display mt-7 text-4xl text-ink italic" lang="it">
          Grazie.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-body">
          We got your request and we&apos;ll be in touch shortly. For urgent
          issues, call{" "}
          <a href={PHONE_TEL} className="font-semibold text-ember">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-7 rounded-[2rem] border border-line bg-[#fffdf8] p-8 md:p-10"
    >
      <div className="border-b border-line pb-6">
        <p className="eyebrow text-ember">Service request</p>
        <h2 className="display mt-3 text-3xl text-ink">
          Tell us what&apos;s going on.
        </h2>
        <p className="mt-2 text-xs text-body">
          For urgent repairs, call{" "}
          <a href={PHONE_TEL} className="font-mono font-semibold text-ember">
            {PHONE_DISPLAY}
          </a>{" "}
          — a person answers.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={label}>
            First name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            className="field"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>
            Last name *
          </label>
          <input
            id="lastName"
            type="text"
            required
            className="field"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="860-000-0000"
            className="field"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="field"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <span className={label}>Best time to reach you</span>
        <div className="flex flex-wrap gap-2">
          {["Anytime", "Daytime", "Evening"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm({ ...form, bestTime: opt })}
              className={`rounded-full border px-5 py-2.5 font-mono text-[0.68rem] tracking-wider uppercase transition-all duration-200 ${
                form.bestTime === opt
                  ? "border-ember bg-ember text-paper"
                  : "border-line bg-paper text-body hover:border-ember/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="street" className={label}>
            Street address
          </label>
          <input
            id="street"
            type="text"
            className="field"
            value={form.street}
            onChange={(e) => setForm({ ...form, street: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="city" className={label}>
            City
          </label>
          <input
            id="city"
            type="text"
            className="field"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="zip" className={label}>
            ZIP
          </label>
          <input
            id="zip"
            type="text"
            className="field"
            value={form.zip}
            onChange={(e) => setForm({ ...form, zip: e.target.value })}
          />
        </div>
      </div>

      <div>
        <span className={label}>Existing customer?</span>
        <div className="flex gap-2">
          {["Yes", "No"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm({ ...form, existingCustomer: opt })}
              className={`rounded-full border px-6 py-2.5 font-mono text-[0.68rem] tracking-wider uppercase transition-all duration-200 ${
                form.existingCustomer === opt
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-body hover:border-ink/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className={label}>What&apos;s the issue?</span>
        <div className="grid gap-3 sm:grid-cols-2">
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-200 ${
              form.heatProblem
                ? "border-ember/50 bg-ember-soft"
                : "border-line bg-paper hover:border-ember/40"
            }`}
          >
            <input
              type="checkbox"
              checked={form.heatProblem}
              onChange={(e) =>
                setForm({ ...form, heatProblem: e.target.checked })
              }
              className="sr-only"
            />
            <FlameIcon
              className={`h-5 w-5 ${form.heatProblem ? "text-ember" : "text-body/50"}`}
            />
            <span
              className={`text-sm font-medium ${form.heatProblem ? "text-ember-deep" : "text-ink-2"}`}
            >
              Problem with heat
            </span>
            {form.heatProblem && (
              <CheckIcon className="ml-auto h-4 w-4 text-ember" strokeWidth={2.4} />
            )}
          </label>
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-200 ${
              form.coolingProblem
                ? "border-glacier/50 bg-glacier-soft"
                : "border-line bg-paper hover:border-glacier/40"
            }`}
          >
            <input
              type="checkbox"
              checked={form.coolingProblem}
              onChange={(e) =>
                setForm({ ...form, coolingProblem: e.target.checked })
              }
              className="sr-only"
            />
            <SnowflakeIcon
              className={`h-5 w-5 ${form.coolingProblem ? "text-glacier" : "text-body/50"}`}
            />
            <span
              className={`text-sm font-medium ${form.coolingProblem ? "text-glacier-deep" : "text-ink-2"}`}
            >
              Problem with cooling
            </span>
            {form.coolingProblem && (
              <CheckIcon className="ml-auto h-4 w-4 text-glacier" strokeWidth={2.4} />
            )}
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={label}>
          Tell us more
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Describe the issue or what you're looking for…"
          className="field resize-y"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
      </div>

      <button type="submit" className="btn btn-ember w-full !py-4">
        Send request
      </button>
    </form>
  );
}
