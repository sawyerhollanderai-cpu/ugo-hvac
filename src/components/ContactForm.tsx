"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bestTime: string;
  street: string;
  street2: string;
  city: string;
  zip: string;
  existingCustomer: string;
  heatProblem: boolean;
  coolingProblem: boolean;
  otherProblems: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bestTime: "Anytime",
  street: "",
  street2: "",
  city: "",
  zip: "",
  existingCustomer: "",
  heatProblem: false,
  coolingProblem: false,
  otherProblems: "",
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500";
  const inputStyle: React.CSSProperties = {
    background: "#0a1628",
    border: "1px solid rgba(30,111,191,0.2)",
    color: "#e2e8f0",
  };
  const labelClass =
    "block text-xs font-semibold uppercase tracking-wide mb-2";
  const labelStyle: React.CSSProperties = { color: "#94a3b8" };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="p-12 rounded-2xl text-center"
        style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-5"
          style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b" }}
        >
          ✓
        </div>
        <h2 className="text-xl font-bold mb-3" style={{ color: "#e2e8f0" }}>
          Message Received
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
          Thanks for reaching out. We&apos;ll be in touch shortly. For urgent
          issues, call us at{" "}
          <a href="tel:8602961281" className="font-semibold" style={{ color: "#f59e0b" }}>
            860-296-1281
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl space-y-6"
      style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
    >
      <div>
        <h2 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>
          Service Request
        </h2>
        <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
          For urgent repairs, please call <span style={{ color: "#f59e0b" }}>860-296-1281</span>.
        </p>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>First Name *</label>
          <input
            type="text"
            required
            className={inputClass}
            style={inputStyle}
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Last Name *</label>
          <input
            type="text"
            required
            className={inputClass}
            style={inputStyle}
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} style={labelStyle}>Phone *</label>
          <input
            type="tel"
            required
            placeholder="860-000-0000"
            className={inputClass}
            style={inputStyle}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Email *</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
            style={inputStyle}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      {/* Best time to contact */}
      <div>
        <label className={labelClass} style={labelStyle}>When can we contact you?</label>
        <div className="flex flex-wrap gap-2">
          {["Anytime", "Daytime", "Evening"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm({ ...form, bestTime: opt })}
              className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150"
              style={{
                background:
                  form.bestTime === opt ? "#f59e0b" : "rgba(30,111,191,0.1)",
                color: form.bestTime === opt ? "#0a1628" : "#cbd5e1",
                border:
                  form.bestTime === opt
                    ? "1px solid #f59e0b"
                    : "1px solid rgba(30,111,191,0.2)",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Address */}
      <div className="space-y-3">
        <label className={labelClass} style={labelStyle}>Address</label>
        <input
          type="text"
          placeholder="Street address"
          className={inputClass}
          style={inputStyle}
          value={form.street}
          onChange={(e) => setForm({ ...form, street: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address line 2 (optional)"
          className={inputClass}
          style={inputStyle}
          value={form.street2}
          onChange={(e) => setForm({ ...form, street2: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="City"
            className={inputClass}
            style={inputStyle}
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="ZIP"
            className={inputClass}
            style={inputStyle}
            value={form.zip}
            onChange={(e) => setForm({ ...form, zip: e.target.value })}
          />
        </div>
      </div>

      {/* Existing customer */}
      <div>
        <label className={labelClass} style={labelStyle}>Are you an existing customer?</label>
        <div className="flex gap-2">
          {["Yes", "No"].map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setForm({ ...form, existingCustomer: opt })}
              className="px-5 py-2 rounded-full text-xs font-semibold transition-all duration-150"
              style={{
                background:
                  form.existingCustomer === opt ? "#1e6fbf" : "rgba(30,111,191,0.1)",
                color: form.existingCustomer === opt ? "#ffffff" : "#cbd5e1",
                border:
                  form.existingCustomer === opt
                    ? "1px solid #1e6fbf"
                    : "1px solid rgba(30,111,191,0.2)",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Problem checkboxes */}
      <div>
        <label className={labelClass} style={labelStyle}>What&apos;s the issue?</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <label
            className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer flex-1"
            style={{
              background: form.heatProblem ? "rgba(245,158,11,0.1)" : "rgba(30,111,191,0.05)",
              border: form.heatProblem
                ? "1px solid rgba(245,158,11,0.4)"
                : "1px solid rgba(30,111,191,0.2)",
            }}
          >
            <input
              type="checkbox"
              checked={form.heatProblem}
              onChange={(e) => setForm({ ...form, heatProblem: e.target.checked })}
              className="w-4 h-4 accent-amber-500"
            />
            <span className="text-sm" style={{ color: "#e2e8f0" }}>
              Problem with heat
            </span>
          </label>
          <label
            className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer flex-1"
            style={{
              background: form.coolingProblem ? "rgba(245,158,11,0.1)" : "rgba(30,111,191,0.05)",
              border: form.coolingProblem
                ? "1px solid rgba(245,158,11,0.4)"
                : "1px solid rgba(30,111,191,0.2)",
            }}
          >
            <input
              type="checkbox"
              checked={form.coolingProblem}
              onChange={(e) => setForm({ ...form, coolingProblem: e.target.checked })}
              className="w-4 h-4 accent-amber-500"
            />
            <span className="text-sm" style={{ color: "#e2e8f0" }}>
              Problem with cooling
            </span>
          </label>
        </div>
      </div>

      {/* Other problems */}
      <div>
        <label className={labelClass} style={labelStyle}>Tell us more</label>
        <textarea
          rows={4}
          placeholder="Describe the issue or what you're looking for..."
          className={inputClass}
          style={{ ...inputStyle, resize: "vertical" }}
          value={form.otherProblems}
          onChange={(e) => setForm({ ...form, otherProblems: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
        style={{ background: "#f59e0b", color: "#0a1628" }}
      >
        Send Request
      </button>
    </form>
  );
}
