import { towns } from "@/lib/site";

export default function Marquee() {
  const items = [...towns, "Greater Hartford"];

  const strip = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((town) => (
        <span key={town} className="flex items-center">
          <span className="display px-6 text-xl italic text-ink/80 md:px-9 md:text-2xl">
            {town}
          </span>
          <span className="text-ember" aria-hidden>
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-line bg-cream/60 py-5 md:py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {strip(false)}
          {strip(true)}
        </div>
      </div>
    </div>
  );
}
