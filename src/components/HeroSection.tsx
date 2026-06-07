"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`${BASE}/hero.jpg`}
          alt="Hartford HVAC professionals"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.55) 50%, rgba(10,22,40,0.9) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" }}
          >
            Hartford&apos;s Trusted HVAC Company
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ color: "#ffffff" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Comfort You Can
          <br />
          <span style={{ color: "#f59e0b" }}>Count On</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "#cbd5e1" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Serving Greater Hartford families for over 60 years. Carrier
          Factory-Authorized installation, repair, and maintenance — with 24/7
          emergency service when you need it most.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{ background: "#f59e0b", color: "#0a1628" }}
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            Our Services
          </Link>
        </motion.div>

        {/* Carrier badge */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div
            className="flex items-center gap-4 px-6 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}
          >
            <Image
              src={`${BASE}/carrier-factory-authorized-dealer.png`}
              alt="Carrier Factory Authorized Dealer"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <span className="text-xs" style={{ color: "#94a3b8" }}>
              License #306632
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "2px solid rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.6)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
