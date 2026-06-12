import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_TEL, LICENSE } from "@/lib/site";

interface CTABandProps {
  title?: React.ReactNode;
  copy?: string;
}

export default function CTABand({
  title = (
    <>
      Ready when your <em className="wonk text-amber italic">weather</em>{" "}
      isn&apos;t.
    </>
  ),
  copy = "A quick repair, a full system, or just an honest second opinion — call the DiGrazias and talk to someone who's actually done the work.",
}: CTABandProps) {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center md:py-28">
          {/* Temperature glows */}
          <div
            aria-hidden
            className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-ember/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-glacier/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="dot-grid absolute inset-0 opacity-40"
          />

          <div className="relative">
            <p className="eyebrow text-paper/55">
              Greater Hartford · 24/7 Emergency
            </p>
            <h2 className="display mx-auto mt-5 max-w-3xl text-4xl text-paper md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/65">
              {copy}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={PHONE_TEL} className="btn btn-ember">
                <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
                Call {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn btn-ghost-dark">
                Request service online
              </Link>
            </div>
            <p className="eyebrow mt-10 !text-[0.6rem] text-paper/40">
              Carrier Factory Authorized · {LICENSE} · Est. 1972
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
