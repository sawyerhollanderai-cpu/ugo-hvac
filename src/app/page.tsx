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
      "Central AC, ductless splits, and packaged systems. Energy-efficient cooling solutions sized and installed for your home.",
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
    title: "Packaged Units",
    description:
      "All-in-one rooftop and packaged HVAC systems built for reliability and easy maintenance.",
    img: `${BASE}/Packaged-Units.jpg`,
    href: "/services#packaged",
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

const testimonials = [
  {
    quote:
      "Prompt, professional, and genuinely honest. I've used Ugo DiGrazia twice now and I won't go anywhere else.",
    name: "Google Reviewer",
    rating: 5,
  },
  {
    quote:
      "Professionalism, quality, and responsiveness all in one. They showed up on time and got the job done right the first time.",
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

      {/* Services */}
      <section className="py-24 px-6">
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
                  className="group block rounded-2xl overflow-hidden relative"
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
        </div>
      </section>

      {/* About strip */}
      <section
        className="py-24 px-6"
        style={{ background: "#112240" }}
      >
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
              Ugo DiGrazia Heating & Cooling has been keeping Greater Hartford
              comfortable through every season since the 1960s. As a Carrier
              Factory-Authorized Dealer, we combine decades of hands-on
              experience with industry-leading equipment and a commitment to
              doing the job right.
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
              About Us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
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
                  className="p-8 rounded-2xl"
                  style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rating }).map((_, j) => (
                      <span key={j} style={{ color: "#f59e0b" }}>&#9733;</span>
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
      <section className="py-16 px-6" style={{ background: "#112240" }}>
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
