import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { ArrowIcon, StarIcon } from "@/components/icons";
import { LICENSE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ugo DiGrazia Heating & Cooling — Hartford's family HVAC company since 1972. Founded by Sicilian immigrant Ugo DiGrazia, carried on by Ugo Jr. Carrier Factory-Authorized Dealer, CT License #306632.",
};

const timeline = [
  {
    year: "1961",
    title: "Sicily → Hartford",
    text: "Ugo DiGrazia emigrates from Sicily to Hartford, bringing the trade with him.",
  },
  {
    year: "1972",
    title: "The shop opens",
    text: "He founds the company that still bears his name on Franklin Avenue.",
  },
  {
    year: "’70s–’00s",
    title: "Through everything",
    text: "Energy crises, recessions, every generation of HVAC technology — sales stay in the top 20% of CT's independent Carrier dealers.",
  },
  {
    year: "2012",
    title: "The Courant takes notice",
    text: "“Carrying Carrier for Six Decades on Two Continents” — Anne M. Hamilton, The Hartford Courant.",
  },
  {
    year: "Today",
    title: "The second generation",
    text: "Ugo Jr. — business-school trained, a decade in finance — runs the company with the same standards his father set.",
  },
];

const values = [
  {
    title: "Honest answers",
    text: "We tell you what's actually wrong and what it actually costs — before we do any work.",
  },
  {
    title: "Quality work",
    text: "Every installation and repair is done to manufacturer specs with parts that last.",
  },
  {
    title: "True availability",
    text: "24/7 emergency service means a real person answers when your heat goes out at midnight.",
  },
  {
    title: "Local knowledge",
    text: "60+ years in Greater Hartford means we understand Connecticut homes, weather, and what works.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -left-40 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="display absolute -right-10 top-24 text-[20rem] leading-none text-ink/[0.04] italic select-none"
        >
          1972
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-16 md:pt-48">
          <Reveal>
            <p className="eyebrow text-body">/ About — la famiglia</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5rem)] text-ink">
              Two generations.{" "}
              <em className="wonk text-ember italic">One trade.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
              We&apos;ve watched the industry change dramatically over fifty
              years — and so have our tools and technology — but our approach
              has stayed the same: show up, do the work right, treat
              customers like neighbors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder story */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(125%_125%_at_25%_-5%,#52200a_0%,#241108_55%,#151c25_100%)] p-10 md:p-12">
            <div aria-hidden className="dot-grid absolute inset-0" />
            <div className="relative">
              <p className="eyebrow text-amber">Fondata · Hartford, CT</p>
              <p className="display mt-4 text-[clamp(5rem,12vw,8.5rem)] leading-none text-paper italic">
                1972
              </p>
              <div className="temp-rule mt-8 opacity-60" />
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-paper/70">
                Featured in <em>The Hartford Courant</em> — “Carrying Carrier
                for Six Decades on Two Continents,” February 8, 2012.
              </p>
              <p className="eyebrow mt-6 !text-[0.58rem] text-paper/45">
                Carrier Factory Authorized · {LICENSE}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            index="01"
            eyebrow="The founder"
            title={
              <>
                A Sicilian immigrant&apos;s{" "}
                <em className="wonk text-ember italic">Hartford</em> business.
              </>
            }
          />
          <p className="mt-7 text-base leading-relaxed text-body">
            Ugo DiGrazia emigrated from Sicily to Hartford in 1961. Eleven
            years later, in 1972, he founded the company that still bears his
            name. Through the energy crises, recessions, and every generation
            of HVAC technology since, his sales have consistently ranked in
            the top 20% of independent Carrier dealers in Connecticut.
          </p>
          <p className="mt-5 text-base leading-relaxed text-body">
            Today his son, Ugo Jr., carries on the trade. A college graduate
            with business-school training and a decade of finance experience,
            he brings a second generation of expertise to the family business
            — combining the old-school work ethic that built the company with
            the systems and tools that keep it running for decades to come.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="border-y border-line bg-cream/70 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            index="02"
            eyebrow="The long way here"
            title={
              <>
                Fifty years,{" "}
                <em className="wonk text-ember italic">briefly</em>.
              </>
            }
          />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-5">
            {timeline.map(({ year, title, text }, i) => (
              <li key={year} className="bg-paper p-7">
                <Reveal delay={Math.min(i * 0.07, 0.3)}>
                  <p className="display text-3xl text-ember italic">{year}</p>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {title}
                  </p>
                  <p className="mt-2 text-[0.83rem] leading-relaxed text-body">
                    {text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div aria-hidden className="dot-grid absolute inset-0 opacity-30" />
        <div
          aria-hidden
          className="absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-ember/15 blur-[130px]"
        />
        <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center gap-1.5 text-amber">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <blockquote className="display mt-8 text-3xl leading-snug text-paper italic md:text-[2.6rem]">
            “Both father and son came to my rescue. Consummate professionals
            and advisors — always available, honest, and extremely
            knowledgeable.”
          </blockquote>
          <p className="eyebrow mt-9 text-paper/55">
            Carol Sexton · West Hartford
          </p>
          <p className="mt-2 text-xs text-paper/40">
            after the DiGrazias responded to a gas leak at her home
          </p>
        </Reveal>
      </section>

      {/* Carrier credentials */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Credentials"
            title={
              <>
                Carrier{" "}
                <em className="wonk text-glacier italic">
                  Factory-Authorized
                </em>{" "}
                Dealer.
              </>
            }
          />
          <p className="mt-7 text-base leading-relaxed text-body">
            Not every HVAC contractor is authorized to carry and install
            Carrier equipment. Earning Factory-Authorized Dealer status
            requires ongoing technician training, customer satisfaction
            standards, and a track record of quality work.
          </p>
          <p className="mt-5 text-base leading-relaxed text-body">
            It means when you buy a Carrier system through us, you get the
            full manufacturer warranty — and technicians who know the
            equipment inside and out.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(125%_125%_at_75%_-5%,#12365c_0%,#101d2c_55%,#151c25_100%)] p-10 text-center md:p-14">
            <div aria-hidden className="dot-grid absolute inset-0" />
            <div className="relative">
              <p className="eyebrow text-[#7db0e6]">Authorized · Trained · Warrantied</p>
              <p className="display mt-6 text-4xl leading-tight text-paper md:text-5xl">
                Factory
                <br />
                <em className="wonk italic text-[#7db0e6]">Authorized</em>
              </p>
              <div className="temp-rule mx-auto mt-8 max-w-44 opacity-60" />
              <p className="eyebrow mt-8 !text-[0.6rem] text-paper/50">
                {LICENSE} · Greater Hartford, CT
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-cream/70 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            index="04"
            eyebrow="How we work"
            title={
              <>
                What you can{" "}
                <em className="wonk text-ember italic">expect</em> from us.
              </>
            }
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-9 transition-all duration-300 hover:-translate-y-1 hover:border-ember/40">
                  <p className="eyebrow text-ember">0{i + 1}</p>
                  <h3 className="display mt-4 text-2xl text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link href="/services" className="btn btn-ink">
                See what we do
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title={
          <>
            Let&apos;s get your system{" "}
            <em className="wonk text-amber italic">running right</em>.
          </>
        }
        copy="Call us or fill out the service request form. We'll get back to you quickly with honest answers and a fair price."
      />
    </>
  );
}
