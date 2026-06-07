import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ugo DiGrazia Heating & Cooling — Hartford's trusted HVAC company since 1972. Carrier Factory-Authorized Dealer. Founded by Sicilian immigrant Ugo DiGrazia. License #306632.",
};

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";

const values = [
  {
    title: "Honest Answers",
    description:
      "We tell you what's actually wrong and what it actually costs — before we do any work.",
  },
  {
    title: "Quality Work",
    description:
      "Every installation and repair is done to manufacturer specs with parts that last.",
  },
  {
    title: "True Availability",
    description:
      "24/7 emergency service means a real person answers when your heat goes out at midnight.",
  },
  {
    title: "Local Knowledge",
    description:
      "60+ years in Greater Hartford means we understand Connecticut homes, weather, and what works.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #112240 0%, #0a1628 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #1e6fbf 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              From Sicily to Hartford — and Six Decades of Carrier
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
              Ugo DiGrazia Heating & Cooling is a family business with deep
              Hartford roots. We&apos;ve watched the industry change dramatically
              over 60+ years — and so have our tools and technology — but our
              approach has stayed the same: show up, do the work right, treat
              customers like neighbors.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div
              className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-10"
              style={{ background: "#112240" }}
            >
              <Image
                src={`${BASE}/60-years-of-service.png`}
                alt="60 Years of Service"
                fill
                className="object-contain p-10"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#f59e0b" }}
            >
              Founded 1972
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              A Sicilian Immigrant&apos;s Hartford Business
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              Ugo DiGrazia emigrated from Sicily to Hartford in 1961. Eleven
              years later, in 1972, he founded the company that still bears his
              name. Through the energy crises, recessions, and every generation
              of HVAC technology since, his sales have consistently ranked in
              the top 20% of independent Carrier dealers in Connecticut.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              Today his son, Ugo Jr., carries on the trade. A college graduate
              with business-school training and a decade of finance experience,
              he brings a second generation of expertise to the family
              business — combining the old-school work ethic that built the
              company with the systems and tools that keep it running for
              decades to come.
            </p>
            <p
              className="text-xs italic mt-6"
              style={{ color: "#64748b" }}
            >
              Featured in <em>The Hartford Courant</em> — &ldquo;Carrying
              Carrier for Six Decades on Two Continents&rdquo; by Anne M.
              Hamilton, February 8, 2012.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured testimonial pull-quote */}
      <section className="py-16 px-6" style={{ background: "#112240" }}>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#f59e0b" }}>
              In their words
            </p>
            <p
              className="text-2xl md:text-3xl leading-relaxed mb-6 font-light italic"
              style={{ color: "#e2e8f0" }}
            >
              &ldquo;Both father and son came to my rescue. Consummate
              professionals and advisors — always available, honest, and
              extremely knowledgeable.&rdquo;
            </p>
            <p className="text-sm" style={{ color: "#94a3b8" }}>
              — Carol Sexton, West Hartford
              <br />
              <span className="text-xs" style={{ color: "#64748b" }}>
                after the DiGrazias responded to a gas leak at her home
              </span>
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Carrier section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Our Credentials
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              Carrier Factory-Authorized Dealer
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              Not every HVAC contractor is authorized to carry and install
              Carrier equipment. Earning Factory-Authorized Dealer status
              requires ongoing technician training, customer satisfaction
              standards, and a track record of quality work.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              It means when you buy a Carrier system through us, you get the
              full manufacturer warranty — and technicians who know the
              equipment inside and out. License #306632.
            </p>
          </FadeIn>
          <FadeIn direction="right">
            <div
              className="rounded-2xl p-10 flex items-center justify-center"
              style={{ background: "rgba(10,22,40,0.5)", border: "1px solid rgba(30,111,191,0.15)" }}
            >
              <Image
                src={`${BASE}/carrier-factory-authorized-dealer.png`}
                alt="Carrier Factory Authorized Dealer"
                width={280}
                height={100}
                className="h-auto w-full max-w-[280px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: "#112240" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                How We Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#e2e8f0" }}>
                What You Can Expect From Us
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{ background: "rgba(10,22,40,0.5)", border: "1px solid rgba(30,111,191,0.15)" }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: "#f59e0b" }}
                  />
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#e2e8f0" }}>
              Let&apos;s Get Your System Running Right
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Call us or fill out our service request form. We&apos;ll get back
              to you quickly with honest answers and a fair price.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8602961281"
                className="px-8 py-4 rounded-full font-semibold text-sm"
                style={{ background: "#f59e0b", color: "#0a1628" }}
              >
                Call 860-296-1281
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-semibold text-sm"
                style={{ background: "#1e6fbf", color: "#ffffff" }}
              >
                Request Service
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
