import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Financing & Offers",
  description:
    "Financing your Carrier purchase through Hearth — same-day funding, no home equity required, consistent monthly payments. Plus current Carrier promotions including Cool Cash rebates.",
};

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";
const CARD_SHADOW = "0 4px 24px rgba(15,23,42,0.06)";

const hearthBenefits = [
  {
    title: "Consistent monthly payments",
    description: "Your payment stays the same regardless of how interest rates move.",
  },
  {
    title: "Funding within one business day",
    description: "Get approved fast and start your project without waiting.",
  },
  {
    title: "No home equity required",
    description: "Personal loans mean you don't need to use your home as collateral.",
  },
];

const offers = [
  {
    img: `${BASE}/brand_173_2.jpg`,
    title: "Cool Cash Rebate",
    headline: "Up to $1,650 cash back",
    description:
      "Cash back on qualifying Carrier heating and cooling systems. Stack rebates with financing for the lowest out-of-pocket on a full system upgrade. Ask us which combinations qualify.",
  },
  {
    img: `${BASE}/brand_173_3.jpg`,
    title: "Carrier Infinity® Air Purifier",
    headline: "Whole-home air quality",
    description:
      "The most effective whole-home air purifier Carrier makes — captures particles, allergens, and bacteria far better than a standard filter. Promotional pricing available with qualifying system installs.",
  },
  {
    img: `${BASE}/brand_173_4.jpg`,
    title: "Carrier Greenspeed® Intelligence",
    headline: "Top-of-line efficiency",
    description:
      "Carrier's flagship high-efficiency heat pump technology. Variable-speed operation, exceptional comfort, and the lowest operating cost in the lineup. Currently eligible for the Cool Cash rebate.",
  },
];

const paymentMethods = [
  { label: "Cash", note: "Standard payment" },
  { label: "Check", note: "Personal or business" },
  { label: "All Major Credit Cards", note: "Visa, Mastercard, Amex, Discover" },
  { label: "Financing", note: "Through Hearth, with approved credit" },
];

export default function FinancingPage() {
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
              "radial-gradient(circle at 40% 60%, rgba(30,111,191,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Financing & Offers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "#0a1628" }}>
              Make Your Carrier Project Affordable
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#475569" }}>
              A new heating or cooling system is one of the biggest purchases
              you&apos;ll make for your home. We work with Hearth to make
              financing fast and painless — and we always pass along Carrier&apos;s
              current rebates when they apply.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hearth */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Our Financing Partner
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "#0a1628" }}>
                Hearth — Personal Loans for HVAC Projects
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                Hearth partners with leading lending providers to help homeowners
                find personal loan options without affecting their credit score.
                Pre-qualifying takes a couple minutes online.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hearthBenefits.map(({ title, description }, i) => (
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
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-base font-bold"
                    style={{ background: "#fff7ed", color: "#f59e0b" }}
                  >
                    {i + 1}
                  </div>
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

      {/* Current offers */}
      <section className="py-20 px-6" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Current Offers
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0a1628" }}>
                Carrier Promotions Available Now
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map(({ img, title, headline, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: CARD_SHADOW,
                  }}
                >
                  <div
                    className="relative h-44 flex items-center justify-center"
                    style={{ background: "#f1f5f9" }}
                  >
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: "#f59e0b" }}
                    >
                      {title}
                    </p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#0a1628" }}>
                      {headline}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                      {description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-xs text-center mt-6" style={{ color: "#94a3b8" }}>
              Offer details and eligibility vary. Contact us for current terms and qualifying products.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Payment Methods
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0a1628" }}>
                We Accept
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paymentMethods.map(({ label, note }, i) => (
              <FadeIn key={label} delay={i * 0.05}>
                <div
                  className="p-6 rounded-2xl flex items-start gap-4"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    boxShadow: CARD_SHADOW,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                    style={{ background: "#fff7ed", color: "#f59e0b" }}
                  >
                    ✓
                  </div>
                  <div>
                    <p className="text-base font-semibold mb-1" style={{ color: "#0a1628" }}>
                      {label}
                    </p>
                    <p className="text-xs" style={{ color: "#475569" }}>
                      {note}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — kept dark feature block */}
      <section className="py-20 px-6">
        <FadeIn>
          <div
            className="max-w-3xl mx-auto rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #1e6fbf 0%, #0a1628 100%)",
              border: "1px solid rgba(30,111,191,0.3)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Ready to Discuss Your Project?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#bfdbfe" }}>
              Contact us to find out which financing options and promotions you
              qualify for. We&apos;ll lay it out clearly — no fine print surprises.
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
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
