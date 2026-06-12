import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/site";

/**
 * Ugo's real logo, lifted from his original site. Height-scaled with
 * w-auto so the true aspect ratio is preserved on every surface.
 */
export function LogoMark({
  className = "h-10 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={IMG.logo}
      alt="Ugo DiGrazia Heating & Cooling"
      width={160}
      height={120}
      priority={priority}
      className={`${className} object-contain`}
    />
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Ugo DiGrazia Heating & Cooling — home"
      className="group flex items-center gap-3"
    >
      <LogoMark className="h-11 w-auto transition-transform duration-300 group-hover:scale-105" />
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
