import { ADDRESS } from "@/lib/site";
import { PinIcon } from "@/components/icons";

interface MapEmbedProps {
  height?: number;
}

export default function MapEmbed({ height = 460 }: MapEmbedProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    ADDRESS
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[#fffdf8]">
      <iframe
        title="Ugo DiGrazia Heating & Cooling — Hartford, CT"
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0 grayscale-[0.25] sepia-[0.12]"
      />
      <p className="eyebrow absolute top-5 left-5 flex items-center gap-2 rounded-full border border-line bg-paper/95 px-4 py-2.5 !text-[0.6rem] text-ink shadow-[0_10px_30px_-12px_rgba(21,28,37,0.35)] backdrop-blur">
        <PinIcon className="h-3.5 w-3.5 text-ember" strokeWidth={2} />
        {ADDRESS}
      </p>
    </div>
  );
}
