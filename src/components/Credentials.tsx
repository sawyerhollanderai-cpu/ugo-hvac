import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import { IMG, LICENSE_NO } from "@/lib/site";

/**
 * Real certificates + license, lifted from the original site:
 * Carrier Factory-Authorized Dealer badge, the 60-Years-of-Service seal,
 * and the CT contractor license number.
 */
export default function Credentials({ dark = false }: { dark?: boolean }) {
  const card = dark
    ? "border-paper/15 bg-paper/[0.04]"
    : "border-line bg-[#fffdf8]";
  const muted = dark ? "text-paper/55" : "text-body/65";
  const strong = dark ? "text-paper" : "text-ink";

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <Reveal>
        <div
          className={`flex h-full flex-col items-center rounded-3xl border p-8 text-center ${card}`}
        >
          <div className="relative flex h-24 w-full items-center justify-center">
            <Image
              src={IMG.carrierBadge}
              alt="Carrier Factory Authorized Dealer"
              width={200}
              height={88}
              className="h-full w-auto object-contain"
            />
          </div>
          <p className={`eyebrow mt-6 ${dark ? "text-amber" : "text-ember"}`}>
            Certified
          </p>
          <p className={`mt-2 font-medium ${strong}`}>
            Carrier Factory-Authorized
          </p>
          <p className={`mt-1.5 text-xs leading-relaxed ${muted}`}>
            Ongoing factory training, satisfaction standards, and the full
            manufacturer warranty on every install.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div
          className={`flex h-full flex-col items-center rounded-3xl border p-8 text-center ${card}`}
        >
          <div className="relative flex h-24 w-full items-center justify-center">
            <Image
              src={IMG.yearsSeal}
              alt="60 Years of Service"
              width={120}
              height={120}
              className="h-full w-auto object-contain"
            />
          </div>
          <p className={`eyebrow mt-6 ${dark ? "text-amber" : "text-ember"}`}>
            Recognized
          </p>
          <p className={`mt-2 font-medium ${strong}`}>60 Years of Service</p>
          <p className={`mt-1.5 text-xs leading-relaxed ${muted}`}>
            Recognized by Carrier for six decades in the trade — and a spot in
            the top 20% of CT dealers.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div
          className={`flex h-full flex-col items-center rounded-3xl border p-8 text-center ${card}`}
        >
          <div className="flex h-24 w-full items-center justify-center">
            <span
              className={`flex h-20 w-20 items-center justify-center rounded-full ${
                dark ? "bg-amber/15 text-amber" : "bg-ember-soft text-ember"
              }`}
            >
              <CheckIcon className="h-9 w-9" strokeWidth={2} />
            </span>
          </div>
          <p className={`eyebrow mt-6 ${dark ? "text-amber" : "text-ember"}`}>
            Licensed
          </p>
          <p className={`display mt-2 text-2xl ${strong}`}>
            CT&nbsp;#{LICENSE_NO}
          </p>
          <p className={`mt-1.5 text-xs leading-relaxed ${muted}`}>
            Fully licensed Connecticut HVAC contractor — insured, permitted,
            and inspected to code.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
