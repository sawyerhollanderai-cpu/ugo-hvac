import Link from "next/link";

/**
 * The U° mark — Ugo + degrees. Type-only, renders crisp at any size,
 * no external asset required.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`${className} relative inline-flex shrink-0 items-center justify-center rounded-xl bg-ink text-paper`}
      aria-hidden
    >
      <span className="display text-[1.18em] leading-none tracking-tight">
        U<span className="text-ember">°</span>
      </span>
    </span>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <LogoMark className="h-10 w-10 text-base transition-transform duration-300 group-hover:-rotate-6" />
      <span className="leading-none">
        <span
          className={`display block text-[1.05rem] font-semibold tracking-tight ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          Ugo DiGrazia
        </span>
        <span
          className={`eyebrow mt-1 block !text-[0.55rem] ${
            dark ? "text-paper/55" : "text-body/70"
          }`}
        >
          Heating &amp; Cooling · Est. 1972
        </span>
      </span>
    </Link>
  );
}
