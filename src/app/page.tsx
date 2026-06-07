import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";

const services = [
  {
    title: "Heating",
    description:
      "Gas furnaces, boilers, and heat pumps — installed right and tuned for Connecticut winters. We keep your family warm when it matters most.",
    img: `${BASE}/Heating.jpg`,
    href: "/services#heating",
  },
  {
    title: "Air Conditioning",
    description:
      "Carrier central AC, ductless splits, and packaged systems. Energy-efficient cooling sized and installed for your home.",
    img: `${BASE}/Air-Conditioning.jpg`,
    href: "/services#cooling",
  },
  {
    title: "Indoor Air Quality",
    description:
      "Air cleaners, UV lights, humidifiers, and ventilators that make the air inside your home as clean as it can be.",
    img: `${BASE}/Indoor-Air-Quality-image.jpg`,
    href: "/services#air-quality",
  },
  {
    title: "Duct-Free Systems",
    description:
      "Flexible, energy-efficient mini-split heat pumps for additions, sunrooms, or any space without ductwork.",
    img: `${BASE}/Duct-Free-System-Heat-Pumps.jpg`,
    href: "/services#duct-free",
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "In-house custom duct, lab hoods, and specialty exhaust in welded black iron, aluminum, or stainless steel.",
    img: `${BASE}/carrier-1.jpg`,
    href: "/services#sheet-metal",
  },
  {
    title: "Water Heaters",
    description:
      "Tank and tankless water heater installation and replacement. Hot water on demand, every time.",
    img: `${BASE}/Water-Heaters.jpg`,
    href: "/services#water-heaters",
  },
];

const stats = [
  { value: "60+", label: "Years Serving CT" },
  { value: "24/7", label: "Emergency Service" },
  { value: "A+", label: "Carrier Authorized" },
];

const guides = [
  { label: "Select a New System", href: "/services#heating" },
  { label: "Repair or Replace?", href: "/services#cooling" },
  { label: "Energy Bill Concerns", href: "/services#duct-sealing" },
  { label: "Healthier Home", href: "/services#air-quality" },
  { label: "Ready for Maintenance", href: "/services#service-agreement" },
];

const offers = [
  {
    img: `${BASE}/brand_173_2.jpg`,
    title: "Cool Cash Rebate",
    description: "Up to $1,650 cash back on qualifying Carrier heating & cooling systems.",
  },
  {
    img: `${BASE}/brand_173_3.jpg`,
    title: "Carrier Infinity® Air Purifier",
    description: "The most effective way to enhance your home's air quality.",
  },
  {
    img: `${BASE}/brand_173_4.jpg`,
    title: "Carrier Greenspeed® Intelligence",
    description: "A breakthrough in high-efficiency home comfort solutions.",
  },
];

const testimonials = [
  {
    quote:
      "Consummate professionals & advisors — always available, honest, and extremely knowledgeable.",
    name: "Hartford Review",
    rating: 5,
  },
  {
    quote:
      "Professionalism, quality, and responsiveness all in one. They showed up on time and got the job done right.",
    name: "Google Reviewer",
    rating: 5,
  },
];

const serviceArea = [
  "Berlin", "Bloomfield", "Cromwell", "East Hartford",
  "Glastonbury", "Hartford", "Kensington", "Manchester",
  "Newington", "Rocky Hill", "West Hartford", "Wethersfield",
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Stats bar */}
      <section style={{ background: "#112240" }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 divide-x" style={{ borderColor: "rgba(30,111,191,0.2)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-6">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#f59e0b" }}>
                  {value}
                </p>
                <p className="text-xs md:text-sm mt-1" style={{ color: "#94a3b8" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How can we help? — guide strip */}
      <section className="pt-20 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                How Can We Help?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#e2e8f0" }}>
                Where do you want to start?
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {guides.map(({ label, href }, i) => (
                <Link
                  key={label}
                  href={href}
                  className="group relative px-4 py-5 rounded-2xl text-center transition-all duration-200"
                  style={{
                    background: "#112240",
                    border: "1px solid rgba(30,111,191,0.2)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold transition-transform duration-200 group-hover:scale-110"
                    style={{ background: "rgba(245,158,11,0.15)", color: "#f59e0b" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs font-semibold leading-tight" style={{ color: "#e2e8f0" }}>
                    {label}
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#e2e8f0" }}>
                Complete Home Comfort Solutions
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, description, img, href }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <Link
                  href={href}
                  className="group block rounded-2xl overflow-hidden relative h-full"
                  style={{ background: "#112240" }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)",
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#e2e8f0" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {description}
                    </p>
                    <p
                      className="mt-4 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#f59e0b" }}
                    >
                      Learn more &rarr;
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: "rgba(30,111,191,0.15)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(30,111,191,0.3)",
                }}
              >
                See All Services &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 px-6" style={{ background: "#112240" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={`${BASE}/60-years-of-service.png`}
                alt="60 Years of Service"
                fill
                className="object-contain p-8"
                style={{ background: "rgba(10,22,40,0.5)" }}
              />
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              Trusted by Hartford Families for Over 60 Years
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              Founder Ugo DiGrazia emigrated from Sicily to Hartford in 1961
              and started the business in 1972. Today his son Ugo Jr. carries
              on the family trade — and the company still ranks in the top
              20% of independent Carrier dealers in Connecticut.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              We&apos;re not a call center — we&apos;re your neighbors. When you
              call us, you get honest answers, fair pricing, and technicians who
              treat your home like their own.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: "#1e6fbf", color: "#ffffff" }}
            >
              Our Story
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                  Current Offers
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#e2e8f0" }}>
                  Carrier Promotions Available Now
                </h2>
              </div>
              <Link
                href="/financing"
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: "#f59e0b" }}
              >
                View financing options &rarr;
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map(({ img, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <Link
                  href="/financing"
                  className="group block rounded-2xl overflow-hidden h-full"
                  style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
                >
                  <div className="relative h-44 overflow-hidden flex items-center justify-center" style={{ background: "#ffffff" }}>
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#e2e8f0" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ background: "#112240" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                Customer Reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#e2e8f0" }}>
                What Our Customers Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(({ quote, name, rating }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{ background: "rgba(10,22,40,0.5)", border: "1px solid rgba(30,111,191,0.15)" }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <span key={j} style={{ color: "#f59e0b" }}>★</span>
                    ))}
                  </div>
                  <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#cbd5e1" }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                    — {name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Coverage Area
            </p>
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#e2e8f0" }}>
              Proudly Serving Greater Hartford
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceArea.map((town) => (
                <span
                  key={town}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: "rgba(30,111,191,0.15)", color: "#94a3b8" }}
                >
                  {town}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <FadeIn>
          <div
            className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1e6fbf 0%, #112240 100%)",
              border: "1px solid rgba(30,111,191,0.3)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Ready for Year-Round Comfort?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#bfdbfe" }}>
              Whether you need a quick repair or a full system replacement, our
              team is ready to help. Call us or request service online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8602961281"
                className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
                style={{ background: "#f59e0b", color: "#0a1628" }}
              >
                Call 860-296-1281
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
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
