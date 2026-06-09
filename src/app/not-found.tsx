import Link from "next/link";
import { ArrowIcon, PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -left-40 h-[30rem] w-[30rem] rounded-full bg-glacier/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-32 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-40 text-center">
        <p className="eyebrow text-body">/ Error — page not found</p>
        <h1 className="display mt-6 text-[clamp(5rem,16vw,10rem)] leading-none text-ink">
          404<span className="text-ember">°</span>
        </h1>
        <p className="display mt-4 text-2xl text-ink italic md:text-3xl">
          This page lost its heat.
        </p>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-body">
          The page you&apos;re looking for isn&apos;t here — but the people
          who can fix your furnace are.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn btn-ember">
            Back to the warmth
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <a href={PHONE_TEL} className="btn btn-ghost">
            <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
            <span className="font-mono text-[0.8rem] tracking-wide">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
