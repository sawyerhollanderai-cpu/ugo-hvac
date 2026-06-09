import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Financing & Offers",
  description:
    "Finance your Carrier system through Hearth — funding within one business day, no home equity required, consistent monthly payments. Plus current Carrier promotions including up to $1,650 in Cool Cash rebates.",
};

const hearthBenefits = [
  {
    title: "Consistent monthly payments",
    text: "Your payment stays the same regardless of how interest rates move.",
  },
  {
    title: "Funding within one business day",
    text: "Get approved fast and start your project without waiting.",
  },
  {
    title: "No home equity required",
    text: "Personal loans mean you don't need to use your home as collateral.",
  },
];

const offers = [
  {
    title: "Cool Cash Rebate",
    headline: "$1,650",
    sub: "up to · cash back",
    copy: "Cash back on qualifying Carrier heating and cooling systems. Stack rebates with financing for the lowest out-of-pocket on a full system upgrade. Ask us which combinations qualify.",
    accent: "text-ember",
  },
  {
    title: "Carrier Infinity® Air Purifier",
    headline: "Purer air",
    sub: "whole-home air quality",
    copy: "The most effective whole-home air purifier Carrier makes — captures particles, allergens, and bacteria far better than a standard filter. Promotional pricing available with qualifying system installs.",
    accent: "text-glacier",
  },
  {
    title: "Carrier Greenspeed® Intelligence",
    headline: "Peak efficiency",
    sub: "flagship heat pump",
    copy: "Carrier's flagship high-efficiency heat pump technology. Variable-speed operation, exceptional comfort, and the lowest operating cost in the lineup. Currently eligible for the Cool Cash rebate.",
    accent: "text-ember",
  },
];

const paymentMethods = [
  { label: "Cash", note: "Standard payment" },
  { label: "Check", note: "Personal or business" },
  { label: "Credit cards", note: "Visa, Mastercard, Amex, Discover" },
  { label: "Financing", note: "Through Hearth, with approved credit" },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-40 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="display absolute -left-8 top-32 text-[18rem] leading-none text-ink/[0.04] select-none"
        >
          $
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 md:pt-48">
          <Reveal>
            <p className="eyebrow text-body">/ Financing &amp; offers</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5rem)] text-ink">
              Comfort now.{" "}
              <em className="wonk text-ember italic">
                Payments that behave.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
              A new heating or cooling system is one of the biggest purchases
              you&apos;ll make for your home. We work with Hearth to make
              financing fast and painless — and we always pass along
              Carrier&apos;s current rebates when they apply.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hearth */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="Our financing partner"
          title={
            <>
              Hearth — personal loans for{" "}
              <em className="wonk text-ember italic">HVAC projects</em>.
            </>
          }
          description="Hearth partners with leading lending providers to help homeowners find personal loan options without affecting their credit score. Pre-qualifying takes a couple of minutes online."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {hearthBenefits.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-[#fffdf8] p-9">
                <p className="display text-5xl text-ember/25 italic">
                  0{i + 1}
                </p>
                <h3 className="display mt-5 text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="border-y border-line bg-cream/70 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            index="02"
            eyebrow="Current offers"
            title={
              <>
                Carrier promotions,{" "}
                <em className="wonk text-ember italic">on now</em>.
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offers.map(({ title, headline, sub, copy, accent }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-9">
                  <p className="eyebrow text-body/60">{title}</p>
                  <p className={`display mt-5 text-[2.6rem] leading-none ${accent}`}>
                    {headline}
                  </p>
                  <p className="eyebrow mt-2 !text-[0.6rem] text-body/60">
                    {sub}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-body">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-xs text-body/60">
              Offer details and eligibility vary. Contact us for current terms
              and qualifying products.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Payment methods */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          index="03"
          eyebrow="Payment methods"
          title={
            <>
              We make paying{" "}
              <em className="wonk text-ember italic">simple</em>.
            </>
          }
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {paymentMethods.map(({ label, note }, i) => (
            <Reveal key={label} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col items-center bg-paper px-6 py-9 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember-soft text-ember">
                  <CheckIcon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <p className="mt-4 font-semibold text-ink">{label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-body">
                  {note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title={
          <>
            Ready to discuss your{" "}
            <em className="wonk text-amber italic">project</em>?
          </>
        }
        copy="Contact us to find out which financing options and promotions you qualify for. We'll lay it out clearly — no fine-print surprises."
      />
    </>
  );
}
