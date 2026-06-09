import Link from "next/link";
import Reveal from "@/components/Reveal";
import ThermoDial from "@/components/ThermoDial";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import HeatCoolSplit from "@/components/HeatCoolSplit";
import CTABand from "@/components/CTABand";
import {
  ServiceGlyph,
  ArrowIcon,
  StarIcon,
  PhoneIcon,
  CheckIcon,
} from "@/components/icons";
import {
  services,
  PHONE_DISPLAY,
  PHONE_TEL,
  LICENSE,
} from "@/lib/site";

const quickPaths = [
  { label: "Select a new system", href: "/services#heating" },
  { label: "Repair or replace?", href: "/services#cooling" },
  { label: "High energy bills", href: "/services#duct-sealing" },
  { label: "Healthier air", href: "/services#air-quality" },
  { label: "Time for maintenance", href: "/services#service-agreement" },
];

const stats = [
  { node: <Counter value={60} suffix="+" />, label: "Years in the trade" },
  { node: <Counter value={2} />, label: "Generations of DiGrazias" },
  { node: <>Top <Counter value={20} suffix="%" /></>, label: "Of CT Carrier dealers" },
  { node: <>24/7</>, label: "Emergency service" },
];

const timeline = [
  {
    year: "1961",
    text: "Ugo DiGrazia emigrates from Sicily to Hartford with the sheet-metal trade in his hands.",
  },
  {
    year: "1972",
    text: "He opens the shop on Franklin Avenue that still carries his name.",
  },
  {
    year: "2012",
    text: "The Hartford Courant features the family: “Carrying Carrier for Six Decades on Two Continents.”",
  },
  {
    year: "Today",
    text: "Ugo Jr. runs the business — same phone number, same standards, top 20% of CT Carrier dealers.",
  },
];

const testimonials = [
  {
    quote:
      "Both father and son came to my rescue. Consummate professionals and advisors — always available, honest, and extremely knowledgeable.",
    name: "Carol Sexton",
    detail: "West Hartford · after a gas leak at her home",
  },
  {
    quote:
      "Professionalism, quality, and responsiveness all in one. They showed up on time and got the job done right.",
    name: "Google Review",
    detail: "Greater Hartford homeowner",
  },
];

const offers = [
  {
    title: "Cool Cash Rebate",
    headline: "$1,650",
    sub: "cash back",
    copy: "On qualifying Carrier heating & cooling systems. Stack rebates with financing for the lowest out-of-pocket.",
    accent: "text-ember",
  },
  {
    title: "Carrier Infinity®",
    headline: "Purer air",
    sub: "whole-home purifier",
    copy: "The most effective whole-home air purifier Carrier makes — promotional pricing with qualifying installs.",
    accent: "text-glacier",
  },
  {
    title: "Greenspeed® Intelligence",
    headline: "Peak efficiency",
    sub: "flagship heat pump",
    copy: "Variable-speed comfort with the lowest operating cost in the lineup. Currently Cool Cash eligible.",
    accent: "text-ember",
  },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────────── Hero */}
      <section className="relative overflow-hidden">
        {/* Ambient temperature field */}
        <div
          aria-hidden
          className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute top-32 -right-48 h-[34rem] w-[34rem] rounded-full bg-glacier/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="display absolute -right-12 -bottom-24 text-[26rem] leading-none text-ink/[0.04] select-none"
        >
          °
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 md:pt-48 md:pb-20">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-body">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ember" />
                  Hartford, Connecticut · Family HVAC since 1972
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="display mt-7 text-[clamp(3rem,7.5vw,5.9rem)] text-ink">
                  <span className="wonk text-ember italic">Warm</span> in
                  January.
                  <br />
                  <span className="wonk text-glacier italic">Cool</span> in
                  July.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-body">
                  Two generations of the DiGrazia family have kept Greater
                  Hartford comfortable for over fifty years — Carrier
                  factory-authorized installs, honest repairs, and a phone
                  that answers at 2 a.m.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn btn-ember">
                    Request service
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <a href={PHONE_TEL} className="btn btn-ghost">
                    <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
                    <span className="font-mono text-[0.8rem] tracking-wide">
                      {PHONE_DISPLAY}
                    </span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <p className="eyebrow mt-10 !text-[0.6rem] text-body/70">
                  Carrier Factory Authorized{" "}
                  <span className="text-ember" aria-hidden>✳</span> {LICENSE}{" "}
                  <span className="text-ember" aria-hidden>✳</span> 24/7
                  Emergency
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.2} y={36}>
                <ThermoDial />
              </Reveal>
            </div>
          </div>

          {/* Stats */}
          <Reveal delay={0.15}>
            <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {stats.map(({ node, label }) => (
                <div key={label} className="bg-paper px-6 py-7 text-center">
                  <dt className="sr-only">{label}</dt>
                  <dd className="display text-4xl text-ink md:text-[2.6rem]">
                    {node}
                  </dd>
                  <dd className="eyebrow mt-2 !text-[0.58rem] text-body/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ───────────────────────────── Services index */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow="What we do"
            title={
              <>
                Every part of{" "}
                <em className="wonk text-ember italic">home comfort</em>.
              </>
            }
          />
          <Reveal delay={0.1}>
            <div className="flex max-w-md flex-wrap gap-2 md:justify-end">
              {quickPaths.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-full border border-line bg-[#fffdf8] px-4 py-2 font-mono text-[0.65rem] tracking-wider text-body uppercase transition-colors duration-200 hover:border-ember hover:text-ember"
                >
                  {label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {services.map(({ id, index, title, tagline, icon, accent }, i) => (
            <Reveal key={id} delay={Math.min(i * 0.04, 0.2)} y={16}>
              <Link
                href={`/services#${id}`}
                className="group grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors duration-300 hover:bg-cream/60 md:grid-cols-[3.5rem_3.5rem_1fr_1fr_3rem] md:gap-6 md:px-4"
              >
                <span className="eyebrow text-body/60">{index}</span>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper transition-colors duration-300 ${
                    accent === "ember"
                      ? "group-hover:border-ember group-hover:text-ember"
                      : accent === "glacier"
                        ? "group-hover:border-glacier group-hover:text-glacier"
                        : "group-hover:border-ink group-hover:text-ink"
                  }`}
                >
                  <ServiceGlyph name={icon} className="h-5 w-5" />
                </span>
                <h3 className="display text-2xl text-ink md:text-3xl">
                  {title}
                </h3>
                <p className="hidden text-sm leading-snug text-body md:block">
                  {tagline}
                </p>
                <ArrowIcon className="h-5 w-5 justify-self-end text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ember" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── Heat / Cool split */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <Reveal>
          <HeatCoolSplit />
        </Reveal>
      </section>

      {/* ───────────────────────────── Story */}
      <section className="border-y border-line bg-cream/70">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="02"
              eyebrow="La famiglia"
              title={
                <>
                  From Sicily to{" "}
                  <em className="wonk text-ember italic">Franklin Avenue</em>.
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-body">
                Ugo DiGrazia emigrated from Sicily to Hartford in 1961 and
                founded the company in 1972. Through energy crises,
                recessions, and every generation of HVAC technology since,
                the family&apos;s sales have consistently ranked in the top
                20% of independent Carrier dealers in Connecticut.
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-body">
                Today his son Ugo Jr. carries on the trade. We&apos;re not a
                call center — we&apos;re your neighbors. When you call, you
                get honest answers, fair pricing, and technicians who treat
                your home like their own.
              </p>
              <Link href="/about" className="btn btn-ink mt-9">
                Read our story
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ol className="relative space-y-10 border-l-2 border-transparent pl-8 [border-image:linear-gradient(to_bottom,var(--color-glacier),var(--color-ember))_1]">
              {timeline.map(({ year, text }) => (
                <li key={year} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[2.42rem] h-3 w-3 rounded-full border-2 border-paper bg-ink"
                  />
                  <p className="display text-3xl text-ink italic">{year}</p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── Sheet metal */}
      <section className="relative overflow-hidden bg-ink">
        <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />
        <div
          aria-hidden
          className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-ember/15 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="03"
              eyebrow="In-house fabrication"
              dark
              title={
                <>
                  We bend our own{" "}
                  <em className="wonk text-amber italic">metal</em>.
                </>
              }
              description="Most contractors order ductwork from a third-party shop and wait. Ours is fabricated in-house — custom duct, lab hoods, and specialty exhaust, cut and welded to fit your home exactly."
            />
            <Reveal delay={0.12}>
              <ul className="mt-9 grid max-w-md grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Welded black iron",
                  "Aluminum",
                  "Stainless steel",
                  "Custom duct systems",
                  "Lab hoods",
                  "Specialty exhaust",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-mono text-[0.72rem] tracking-wider text-paper/70 uppercase"
                  >
                    <CheckIcon className="h-3.5 w-3.5 shrink-0 text-amber" strokeWidth={2.2} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services#sheet-metal"
                className="btn btn-ghost-dark mt-10"
              >
                About our shop
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="relative rounded-3xl border border-paper/15 bg-ink-2/80 p-8 md:p-10">
              <ServiceGlyph
                name="metal"
                className="absolute -right-8 -bottom-8 h-48 w-48 text-paper/[0.05]"
                strokeWidth={1}
              />
              <p className="eyebrow text-amber">Shop ticket · № 1972</p>
              <dl className="mt-7 space-y-5">
                {[
                  ["Material", "Galvanized steel · 26 ga"],
                  ["Seam", "Pittsburgh lock, hand-finished"],
                  ["Fit", "Measured on site, built to the inch"],
                  ["Turnaround", "No third-party shop. No waiting."],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-6 border-b border-paper/10 pb-4"
                  >
                    <dt className="eyebrow !text-[0.6rem] text-paper/45">
                      {k}
                    </dt>
                    <dd className="text-right font-mono text-[0.78rem] text-paper/85">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="display mt-7 text-xl text-paper/80 italic">
                “If it doesn&apos;t fit perfectly, we remake it.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────── Maintenance teaser */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <Link
            href="/services#service-agreement"
            className="group flex flex-col gap-8 rounded-[2rem] border border-line bg-[#fffdf8] p-8 transition-all duration-300 hover:border-ember/40 hover:shadow-[0_30px_60px_-30px_rgba(224,84,16,0.25)] md:flex-row md:items-center md:justify-between md:p-12"
          >
            <div className="max-w-2xl">
              <p className="eyebrow text-ember">The Service Agreement</p>
              <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
                Two tune-ups a year. Priority at 2 a.m. 10% off everything
                that breaks.
              </h2>
              <p className="mt-4 text-base text-body">
                Annual coverage that pays for itself — and a furnace that
                never surprises you in February.
              </p>
            </div>
            <span className="btn btn-ink shrink-0 group-hover:bg-ember">
              See the plan
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* ───────────────────────────── Testimonials */}
      <section className="border-y border-line bg-cream/70 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            index="04"
            eyebrow="In their words"
            title={
              <>
                The neighbors{" "}
                <em className="wonk text-ember italic">talk</em>.
              </>
            }
            align="center"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map(({ quote, name, detail }, i) => (
              <Reveal key={name} delay={i * 0.12}>
                <figure className="relative h-full rounded-3xl border border-line bg-paper p-9 md:p-11">
                  <span
                    aria-hidden
                    className="display absolute top-2 left-6 text-[6rem] leading-none text-ember/15 italic"
                  >
                    “
                  </span>
                  <div className="relative">
                    <div className="flex gap-1 text-amber">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <StarIcon key={j} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="display mt-6 text-2xl leading-snug text-ink md:text-[1.7rem]">
                      {quote}
                    </blockquote>
                    <figcaption className="mt-7">
                      <p className="font-medium text-ink">{name}</p>
                      <p className="eyebrow mt-1 !text-[0.58rem] text-body/60">
                        {detail}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────── Offers */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="05"
            eyebrow="Current offers"
            title={
              <>
                Carrier promotions,{" "}
                <em className="wonk text-ember italic">on now</em>.
              </>
            }
          />
          <Reveal delay={0.1}>
            <Link
              href="/financing"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ember"
            >
              Financing &amp; all offers
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map(({ title, headline, sub, copy, accent }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Link
                href="/financing"
                className="group flex h-full flex-col rounded-3xl border border-line bg-[#fffdf8] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-35px_rgba(21,28,37,0.4)]"
              >
                <p className="eyebrow text-body/60">{title}</p>
                <p className={`display mt-5 text-4xl ${accent}`}>{headline}</p>
                <p className="eyebrow mt-1 !text-[0.6rem] text-body/60">
                  {sub}
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-body">
                  {copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  Details
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
