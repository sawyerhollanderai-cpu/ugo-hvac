import Image from "next/image";
import Link from "next/link";
import { FlameIcon, SnowflakeIcon, ArrowIcon } from "@/components/icons";
import { MEDIA } from "@/lib/site";

const panels = [
  {
    id: "heating",
    word: "Heat.",
    Icon: FlameIcon,
    accent: "text-amber",
    img: `${MEDIA}/Heating.jpg`,
    overlay:
      "linear-gradient(150deg, rgba(82,32,10,0.78) 0%, rgba(36,17,8,0.84) 50%, rgba(21,28,37,0.94) 100%)",
    copy: "Furnaces, boilers, and heat pumps installed right and tuned for the coldest night of a Connecticut January.",
    items: ["Gas furnaces & boilers", "Heat pumps to 21 SEER", "Emergency repair, 24/7"],
    label: "Explore heating",
  },
  {
    id: "cooling",
    word: "Cool.",
    Icon: SnowflakeIcon,
    accent: "text-glacier",
    img: `${MEDIA}/Air-Conditioning.jpg`,
    overlay:
      "linear-gradient(150deg, rgba(18,54,92,0.78) 0%, rgba(16,29,44,0.84) 50%, rgba(21,28,37,0.94) 100%)",
    copy: "Quiet, efficient Carrier central air and ductless systems sized for your home — not the one down the street.",
    items: ["Central AC installation", "Ductless mini-splits", "Seasonal tune-ups"],
    label: "Explore cooling",
  },
];

export default function HeatCoolSplit() {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 md:flex-row">
      {panels.map(
        ({ id, word, Icon, accent, img, overlay, copy, items, label }) => (
          <Link
            key={id}
            href={`/services#${id}`}
            className="group relative flex min-h-[420px] flex-1 flex-col justify-between overflow-hidden p-8 transition-[flex-grow] duration-500 ease-out md:p-12 md:hover:grow-[1.55]"
          >
            <Image
              src={img}
              alt={`${word} — ${label}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundImage: overlay }}
            />
            <Icon
              className={`absolute -right-10 -bottom-10 h-64 w-64 opacity-[0.12] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 ${accent}`}
              strokeWidth={1}
            />

            <div className="relative">
              <Icon className={`h-8 w-8 ${accent}`} strokeWidth={1.5} />
              <h3 className="display mt-6 text-5xl text-paper italic md:text-6xl">
                {word}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70 md:text-base">
                {copy}
              </p>
            </div>

            <div className="relative mt-10">
              <ul className="space-y-2 border-t border-paper/15 pt-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[0.72rem] tracking-wider text-paper/65 uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <span
                className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${accent}`}
              >
                {label}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
