"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo, { LogoMark } from "@/components/Logo";
import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS, HOURS } from "@/lib/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/financing", label: "Financing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > lastY.current + 4);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 ${
          hidden && !open ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-line bg-paper/85 pr-2.5 pl-4 shadow-[0_10px_40px_-18px_rgba(21,28,37,0.35)] backdrop-blur-xl">
          <Logo />

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map(({ href, label }) => {
              const active = pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-ember after:transition-all after:duration-300 hover:text-ember ${
                      active
                        ? "text-ember after:w-full"
                        : "text-ink after:w-0 hover:after:w-full"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_TEL}
              className="btn btn-ink hidden !px-5 !py-2.5 lg:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
              <span className="font-mono text-[0.8rem] tracking-wide">
                {PHONE_DISPLAY}
              </span>
            </a>
            <a
              href={PHONE_TEL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="btn btn-ink !p-3 lg:hidden"
            >
              <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative h-11 w-11 rounded-full border border-line bg-paper lg:hidden"
            >
              <span
                className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-28 pb-10 lg:hidden"
          >
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...links].map(
                ({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.45 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`display block py-2.5 text-4xl ${
                        pathname === href ? "text-ember italic" : "text-paper"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto space-y-4 border-t border-paper/15 pt-6"
            >
              <a
                href={PHONE_TEL}
                className="display block text-3xl text-paper"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="eyebrow text-paper/50">
                {HOURS} · 24/7 Emergency
              </p>
              <p className="text-sm text-paper/50">{ADDRESS}</p>
              <LogoMark className="h-9 w-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
