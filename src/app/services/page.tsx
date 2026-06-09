import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import {
  ServiceGlyph,
  ArrowIcon,
  CheckIcon,
  BoltIcon,
} from "@/components/icons";
import { services, agreementPerks, type Accent } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service HVAC in Greater Hartford, CT — heating, cooling, indoor air quality, duct-free systems, water heaters, in-house sheet metal fabrication, duct sealing, and plumbing.",
};

const plateBg: Record<Accent, string> = {
  ember:
    "bg-[radial-gradient(125%_125%_at_25%_-5%,#52200a_0%,#241108_55%,#151c25_100%)]",
  glacier:
    "bg-[radial-gradient(125%_125%_at_25%_-5%,#12365c_0%,#101d2c_55%,#151c25_100%)]",
  ink: "bg-[radial-gradient(125%_125%_at_25%_-5%,#2c3a4a_0%,#1c2632_55%,#151c25_100%)]",
};

const plateAccent: Record<Accent, string> = {
  ember: "text-amber",
  glacier: "text-[#7db0e6]",
  ink: "text-paper/80",
};

const statTone: Record<Accent, string> = {
  ember: "border-ember/25 bg-ember-soft text-ember-deep",
  glacier: "border-glacier/25 bg-glacier-soft text-glacier-deep",
  ink: "border-line bg-cream text-ink-2",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-40 h-[30rem] w-[30rem] rounded-full bg-glacier/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-32 h-[26rem] w-[26rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 md:pt-48">
          <Reveal>
            <p className="eyebrow text-body">/ Services — what we offer</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5rem)] text-ink">
              Nine trades.{" "}
              <em className="wonk text-ember italic">One phone number.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
              From first-time installs to emergency repairs, custom
              sheet-metal fabrication to indoor air quality — we handle every
              part of home comfort, plus plumbing when projects need it.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-2">
              {[...services.map(({ id, title }) => ({ id, title })), { id: "service-agreement", title: "Service Agreement" }].map(
                ({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="rounded-full border border-line bg-[#fffdf8] px-4 py-2 font-mono text-[0.65rem] tracking-wider text-body uppercase transition-colors duration-200 hover:border-ember hover:text-ember"
                  >
                    {title}
                  </a>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl space-y-28 px-6 py-20 md:space-y-36 md:py-28">
        {services.map(
          ({ id, index, title, description, features, stat, accent, icon }, i) => (
            <article
              key={id}
              id={id}
              className={`grid scroll-mt-32 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Icon plate */}
              <Reveal>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${plateBg[accent]}`}
                >
                  <div aria-hidden className="dot-grid absolute inset-0" />
                  <span
                    aria-hidden
                    className="display absolute -top-8 -right-2 text-[11rem] leading-none text-paper/[0.06] italic"
                  >
                    {index}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`flex h-28 w-28 items-center justify-center rounded-full border border-paper/20 bg-paper/[0.06] backdrop-blur-sm ${plateAccent[accent]}`}
                    >
                      <ServiceGlyph
                        name={icon}
                        className="h-12 w-12"
                        strokeWidth={1.4}
                      />
                    </span>
                  </div>
                  <p className="eyebrow absolute bottom-5 left-6 !text-[0.58rem] text-paper/45">
                    Ugo DiGrazia · SVC {index}
                  </p>
                  <p className="eyebrow absolute right-6 bottom-5 !text-[0.58rem] text-paper/45">
                    Est. 1972
                  </p>
                </div>
              </Reveal>

              {/* Copy */}
              <Reveal delay={0.1}>
                <p className="eyebrow flex items-center gap-3 text-body">
                  <span className="text-ember">/ {index}</span> {title}
                </p>
                <h2 className="display mt-4 text-3xl text-ink md:text-[2.6rem] md:leading-[1.05]">
                  {title}
                </h2>
                {stat && (
                  <p
                    className={`mt-6 rounded-2xl border px-5 py-4 text-sm leading-relaxed italic ${statTone[accent]}`}
                  >
                    {stat}
                  </p>
                )}
                <p className="mt-6 text-base leading-relaxed text-body">
                  {description}
                </p>
                <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-ink-2"
                    >
                      <CheckIcon
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          accent === "glacier" ? "text-glacier" : "text-ember"
                        }`}
                        strokeWidth={2.2}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-ink mt-9">
                  Request {title.toLowerCase()} service
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Reveal>
            </article>
          )
        )}
      </section>

      {/* Service agreement */}
      <section
        id="service-agreement"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-8"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink p-8 md:p-14">
            <div aria-hidden className="dot-grid absolute inset-0 opacity-40" />
            <div
              aria-hidden
              className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-ember/20 blur-[110px]"
            />
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow flex items-center gap-2 text-amber">
                  <BoltIcon className="h-3.5 w-3.5" strokeWidth={2} />
                  Maintenance plan
                </p>
                <h2 className="display mt-4 text-4xl text-paper md:text-5xl">
                  The Service{" "}
                  <em className="wonk text-amber italic">Agreement</em>.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-paper/65">
                  Annual coverage that pays for itself. Two tune-ups, priority
                  status when something breaks at 2 a.m., and discounts on
                  everything else.
                </p>
                <Link href="/contact" className="btn btn-ember mt-9">
                  Ask about the agreement
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
              <ul className="space-y-3.5 self-center">
                {agreementPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 border-b border-paper/10 pb-3.5 text-sm text-paper/85"
                  >
                    <CheckIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber"
                      strokeWidth={2.2}
                    />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABand
        title={
          <>
            Not sure what you{" "}
            <em className="wonk text-amber italic">need</em>?
          </>
        }
        copy="Call and describe what's going on. We'll tell you whether it's a repair, a tune-up, or something new — no pressure, no upsell."
      />
    </>
  );
}
