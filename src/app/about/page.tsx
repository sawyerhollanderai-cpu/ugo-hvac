import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ugo DiGrazia Heating & Cooling — Hartford's trusted HVAC company since the 1960s. Carrier Factory-Authorized Dealer. License #306632.",
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
              Six Decades of Doing It Right
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
              Ugo DiGrazia Heating & Cooling has been part of the Hartford
              community since the 1960s. We&apos;ve watched the industry change
              dramatically — and so have our tools and technology — but our
              approach has stayed the same: show up, do the work right, and
              treat customers like neighbors.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story + badge */}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              A Family Business with a Long Memory
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              Ugo DiGrazia started with a simple idea: Hartford families deserve
              reliable heating and cooling from people they can trust. That idea
              has guided everything we&apos;ve done for more than 60 years — from
              the equipment we recommend to the technicians we hire.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              We&apos;re a Carrier Factory-Authorized Dealer, which means our
              technicians are trained to Carrier&apos;s exacting standards, and
              we have access to the full product line, warranty support, and
              technical resources that come with that certification.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#94a3b8" }}>
              We serve Berlin, Bloomfield, Cromwell, East Hartford, Glastonbury,
              Hartford, Kensington, Manchester, Newington, Rocky Hill, West
              Hartford, and Wethersfield — the same communities we&apos;ve
              called home for generations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Carrier section */}
      <section className="py-20 px-6" style={{ background: "#112240" }}>
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
              full manufacturer warranty — and technicians who know the equipment
              inside and out.
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
      <section className="py-24 px-6">
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
                  className="p-8 rounded-2xl"
                  style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
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
      <section className="py-20 px-6" style={{ background: "#112240" }}>
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
