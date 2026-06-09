import Link from "next/link";
import {
  FlameIcon,
  SnowflakeIcon,
  ArrowIcon,
} from "@/components/icons";

const panels = [
  {
    id: "heating",
    word: "Heat.",
    Icon: FlameIcon,
    accent: "text-amber",
    bg: "bg-[radial-gradient(130%_130%_at_18%_-10%,#52200a_0%,#241108_52%,#151c25_100%)]",
    copy: "Furnaces, boilers, and heat pumps installed right and tuned for the coldest night of a Connecticut January.",
    items: ["Gas furnaces & boilers", "Heat pumps to 21 SEER", "Emergency repair, 24/7"],
    label: "Explore heating",
  },
  {
    id: "cooling",
    word: "Cool.",
    Icon: SnowflakeIcon,
    accent: "text-glacier",
    bg: "bg-[radial-gradient(130%_130%_at_82%_-10%,#12365c_0%,#101d2c_52%,#151c25_100%)]",
    copy: "Quiet, efficient Carrier central air and ductless systems sized for your home — not the one down the street.",
    items: ["Central AC installation", "Ductless mini-splits", "Seasonal tune-ups"],
    label: "Explore cooling",
  },
];

export default function HeatCoolSplit() {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:flex-row">
      {panels.map(({ id, word, Icon, accent, bg, copy, items, label }) => (
        <Link
          key={id}
          href={`/services#${id}`}
          className={`group relative flex min-h-[420px] flex-1 flex-col justify-between overflow-hidden p-8 transition-[flex-grow] duration-500 ease-out md:p-12 md:hover:grow-[1.55] ${bg}`}
        >
          <Icon
            className={`absolute -right-10 -bottom-10 h-64 w-64 opacity-[0.07] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 ${accent}`}
            strokeWidth={1}
          />

          <div>
            <Icon className={`h-8 w-8 ${accent}`} strokeWidth={1.5} />
            <h3 className="display mt-6 text-5xl text-paper italic md:text-6xl">
              {word}
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65 md:text-base">
              {copy}
            </p>
          </div>

          <div className="relative mt-10">
            <ul className="space-y-2 border-t border-paper/15 pt-5">
              {items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[0.72rem] tracking-wider text-paper/60 uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
            <span
              className={`mt-7 inline-flex items-center gap-2 text-sm font-medium text-paper ${accent}`}
            >
              {label}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
