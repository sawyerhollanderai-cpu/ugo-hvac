"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,22,40,0.97)"
          : "linear-gradient(to bottom, rgba(10,22,40,0.85), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,111,191,0.2)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10/ugo-logo.png"
            alt="Ugo DiGrazia Heating & Cooling"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
          <span className="hidden sm:block text-sm font-semibold text-slate leading-tight">
            Ugo DiGrazia<br />
            <span className="text-muted font-normal">Heating & Cooling</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: pathname === href ? "#f59e0b" : "#e2e8f0",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:8602961281"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{ background: "#f59e0b", color: "#0a1628" }}
        >
          860-296-1281
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span
              className="block h-0.5 bg-slate transition-all duration-300"
              style={{
                transform: open ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-0.5 bg-slate transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-slate transition-all duration-300"
              style={{
                transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10,22,40,0.98)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-base font-medium py-2"
                    style={{ color: pathname === href ? "#f59e0b" : "#e2e8f0" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="tel:8602961281"
                  className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold"
                  style={{ background: "#f59e0b", color: "#0a1628" }}
                >
                  860-296-1281
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
