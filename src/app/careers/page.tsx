import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowIcon, PinIcon, ClockIcon } from "@/components/icons";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Ugo DiGrazia Heating & Cooling — Hartford's family HVAC company since 1972. Now hiring an HVAC Install Technician. Carrier factory training, established routes, no corporate layers.",
};

const openings = [
  {
    title: "Install Technician — HVAC",
    type: "Full-time",
    location: "Hartford, CT",
    description:
      "We're looking for an experienced HVAC install technician to join our crew. You'll work on Carrier residential and light commercial installs across Greater Hartford. Familiarity with central AC, gas furnaces, boilers, and ductless heat pumps required.",
  },
];

const reasons = [
  {
    title: "Family-owned since 1972",
    text: "We've built a 50-year reputation by treating our team and customers right. No corporate layers, no quotas pushed from above.",
  },
  {
    title: "Carrier Factory-Authorized",
    text: "Work on top-tier equipment. Ongoing factory training and access to the full Carrier product line and technical resources.",
  },
  {
    title: "Established Hartford routes",
    text: "Decades of repeat customers and a steady pipeline of new installs. You won't be chasing leads.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-40 h-[30rem] w-[30rem] rounded-full bg-glacier/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 md:pt-48">
          <Reveal>
            <p className="eyebrow text-body">/ Careers — join the crew</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5rem)] text-ink">
              A trade that never goes{" "}
              <em className="wonk text-ember italic">out of season</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
              We&apos;re always interested in skilled technicians who take
              pride in their craft. Below are the positions we&apos;re
              actively looking to fill — if you don&apos;t see your role,
              send us your resume anyway.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading
          index="01"
          eyebrow="Now hiring"
          title={
            <>
              Open{" "}
              <em className="wonk text-ember italic">positions</em>.
            </>
          }
        />
        <div className="mt-12 space-y-6">
          {openings.map(({ title, type, location, description }) => (
            <Reveal key={title}>
              <div className="rounded-[2rem] border border-line bg-[#fffdf8] p-8 md:p-12">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="display text-3xl text-ink md:text-4xl">
                      {title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ember-soft px-3.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-ember-deep uppercase">
                        <ClockIcon className="h-3.5 w-3.5" strokeWidth={2} />
                        {type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-glacier-soft px-3.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-glacier-deep uppercase">
                        <PinIcon className="h-3.5 w-3.5" strokeWidth={2} />
                        {location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                      `Application: ${title}`
                    )}`}
                    className="btn btn-ember shrink-0"
                  >
                    Apply by email
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-7 max-w-3xl border-t border-line pt-7 text-base leading-relaxed text-body">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why here */}
      <section className="border-y border-line bg-cream/70 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            index="02"
            eyebrow="Why work here"
            title={
              <>
                The DiGrazia{" "}
                <em className="wonk text-ember italic">difference</em>.
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-paper p-9">
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
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center md:py-24">
            <div
              aria-hidden
              className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-ember/25 blur-[110px]"
            />
            <div
              aria-hidden
              className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-glacier/25 blur-[110px]"
            />
            <div className="relative">
              <p className="eyebrow text-paper/55">Open application</p>
              <h2 className="display mx-auto mt-5 max-w-2xl text-4xl text-paper md:text-5xl">
                Don&apos;t see your{" "}
                <em className="wonk text-amber italic">role</em>?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/65">
                We&apos;re always open to hearing from skilled HVAC,
                plumbing, and sheet-metal professionals. Send your resume and
                we&apos;ll be in touch when an opportunity opens up.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}?subject=General%20Application`}
                  className="btn btn-ember"
                >
                  Email your resume
                </a>
                <Link href="/contact" className="btn btn-ghost-dark">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
