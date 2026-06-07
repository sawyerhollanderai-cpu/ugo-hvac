import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Ugo DiGrazia Heating & Cooling — Hartford's trusted HVAC company since 1972. Now hiring an Install Technician.",
};

const CARD_SHADOW = "0 4px 24px rgba(15,23,42,0.06)";

const openings = [
  {
    title: "Install Technician — HVAC",
    type: "Full-time",
    location: "Hartford, CT",
    description:
      "We're looking for an experienced HVAC install technician to join our crew. You'll work on Carrier residential and light commercial installs across Greater Hartford. Familiarity with central AC, gas furnaces, boilers, and ductless heat pumps required.",
    applyEmail: "ugo@ugohvac.com",
  },
];

const reasons = [
  {
    title: "Family-owned since 1972",
    description:
      "We've built a 60+ year reputation by treating our team and customers right. No corporate layers, no quotas pushed from above.",
  },
  {
    title: "Carrier Factory-Authorized",
    description:
      "Work on top-tier equipment. Ongoing factory training and access to the full Carrier product line and technical resources.",
  },
  {
    title: "Established Hartford routes",
    description:
      "Decades of repeat customers and a steady pipeline of new installs. You won't be chasing leads.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #f1f5f9 0%, #ffffff 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 50%, rgba(30,111,191,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Employment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "#0a1628" }}>
              Join a 60-Year-Old Family Business
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#475569" }}>
              We&apos;re always interested in skilled technicians who take pride
              in their craft. Below are the positions we&apos;re actively
              looking to fill — if you don&apos;t see your role, send us your
              resume anyway.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Now Hiring
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: "#0a1628" }}>
                Open Positions
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {openings.map(({ title, type, location, description, applyEmail }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: CARD_SHADOW,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold" style={{ color: "#0a1628" }}>
                      {title}
                    </h3>
                    <div className="flex gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#fff7ed", color: "#9a3412" }}
                      >
                        {type}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#eff6ff", color: "#1e40af" }}
                      >
                        {location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>
                    {description}
                  </p>
                  <a
                    href={`mailto:${applyEmail}?subject=${encodeURIComponent("Application: " + title)}`}
                    className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{ background: "#f59e0b", color: "#0a1628" }}
                  >
                    Apply by Email
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Why Work Here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0a1628" }}>
                The DiGrazia Difference
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map(({ title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: CARD_SHADOW,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-4"
                    style={{ background: "#f59e0b" }}
                  />
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#0a1628" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0a1628" }}>
              Don&apos;t See Your Role?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#475569" }}>
              We&apos;re always open to hearing from skilled HVAC, plumbing, and
              sheet-metal professionals. Send your resume and we&apos;ll be in
              touch when an opportunity opens up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ugo@ugohvac.com?subject=General%20Application"
                className="px-8 py-4 rounded-full font-semibold text-sm"
                style={{ background: "#f59e0b", color: "#0a1628" }}
              >
                Email Your Resume
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-semibold text-sm"
                style={{ background: "#1e6fbf", color: "#ffffff" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
