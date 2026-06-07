"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500";
  const inputStyle = {
    background: "#112240",
    border: "1px solid rgba(30,111,191,0.2)",
    color: "#e2e8f0",
  } as React.CSSProperties;

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
      className="p-8 rounded-2xl space-y-5"
      style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
    >
      <h2 className="text-lg font-semibold mb-2" style={{ color: "#e2e8f0" }}>
        Service Request
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "#94a3b8" }}
          >
            Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
            style={inputStyle}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-wide mb-2"
            style={{ color: "#94a3b8" }}
          >
            Phone
          </label>
          <input
            type="tel"
            placeholder="860-000-0000"
            className={inputClass}
            style={inputStyle}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-wide mb-2"
          style={{ color: "#94a3b8" }}
        >
          Email *
        </label>
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

      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-wide mb-2"
          style={{ color: "#94a3b8" }}
        >
          Service Needed
        </label>
        <select
          className={inputClass}
          style={inputStyle}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option value="">Select a service...</option>
          <option>Heating Repair</option>
          <option>Heating Installation</option>
          <option>AC Repair</option>
          <option>AC Installation</option>
          <option>Tune-Up / Maintenance</option>
          <option>Indoor Air Quality</option>
          <option>Duct-Free / Mini-Split</option>
          <option>Water Heater</option>
          <option>Emergency Service</option>
          <option>Free Quote</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-wide mb-2"
          style={{ color: "#94a3b8" }}
        >
          Tell Us What&apos;s Going On
        </label>
        <textarea
          rows={5}
          placeholder="Describe the issue or what you're looking for..."
          className={inputClass}
          style={{ ...inputStyle, resize: "vertical" }}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
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
