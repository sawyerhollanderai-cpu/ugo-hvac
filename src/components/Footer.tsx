import Link from "next/link";
import Logo from "@/components/Logo";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS,
  LICENSE,
  HOURS,
  services,
} from "@/lib/site";

const explore = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/financing", label: "Financing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="temp-rule" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              A two-generation family trade. Carrier Factory-Authorized
              installation, honest repair, and in-house sheet metal — keeping
              Greater Hartford comfortable since 1972.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="eyebrow rounded-full border border-paper/20 px-4 py-2 !text-[0.58rem] text-paper/75">
                Carrier Factory Authorized Dealer
              </span>
              <span className="eyebrow rounded-full border border-paper/20 px-4 py-2 !text-[0.58rem] text-paper/75">
                {LICENSE}
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ember">Explore</p>
            <ul className="space-y-2.5">
              {explore.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ember">Services</p>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map(({ id, title }) => (
                <li key={id}>
                  <Link
                    href={`/services#${id}`}
                    className="text-sm text-paper/65 transition-colors duration-200 hover:text-paper"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <p className="eyebrow mb-5 text-ember">Talk to us</p>
            <a
              href={PHONE_TEL}
              className="display block text-2xl text-paper transition-colors hover:text-amber"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block text-sm text-paper/65 hover:text-paper"
            >
              {EMAIL}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/65">
              {ADDRESS}
            </p>
            <p className="mt-4 font-mono text-[0.7rem] tracking-wider text-paper/50 uppercase">
              {HOURS}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-wider text-amber uppercase">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ember" />
              24/7 Emergency Service
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-paper/12 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Ugo DiGrazia Heating &amp; Cooling
            LLC. All rights reserved.
          </p>
          <p className="display italic text-paper/55">
            <span lang="it">Due generazioni, un mestiere.</span>{" "}
            <span aria-hidden>✳</span> Since 1972
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div
        aria-hidden
        className="display pointer-events-none -mb-[0.26em] text-center text-[clamp(4.5rem,16.5vw,15rem)] leading-none font-semibold whitespace-nowrap text-paper/[0.05] italic"
      >
        DiGrazia
      </div>
    </footer>
  );
}
