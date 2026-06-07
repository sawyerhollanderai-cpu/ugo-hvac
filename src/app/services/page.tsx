import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service HVAC installation, repair, and maintenance in Greater Hartford, CT. Heating, cooling, indoor air quality, water heaters, and more.",
};

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";

const services = [
  {
    id: "heating",
    title: "Heating",
    img: `${BASE}/Heating.jpg`,
    description:
      "Connecticut winters are no joke, and a reliable heating system isn't optional — it's essential. We install, service, and repair gas furnaces, hot water boilers, and heat pump systems from Carrier and other top brands. Every installation is sized for your home and tuned for maximum efficiency, so you stay warm without watching your energy bill climb.",
    features: [
      "Gas furnaces & boilers",
      "Heat pump systems",
      "Heating tune-ups & maintenance",
      "Emergency heating repair",
      "System replacement & upgrade",
    ],
  },
  {
    id: "cooling",
    title: "Air Conditioning",
    img: `${BASE}/Air-Conditioning.jpg`,
    description:
      "Stay cool all summer with a system that's sized right and installed properly. Oversized or undersized AC is a common problem we fix every season — proper load calculation makes all the difference. Whether you need a new central system, a replacement unit, or a seasonal tune-up, we've got you covered.",
    features: [
      "Central AC installation",
      "AC repair & emergency service",
      "Seasonal tune-ups",
      "System replacement",
      "Energy efficiency upgrades",
    ],
  },
  {
    id: "air-quality",
    title: "Indoor Air Quality",
    img: `${BASE}/Indoor-Air-Quality-image.jpg`,
    description:
      "The air inside your home can be significantly more polluted than outdoor air. Allergens, bacteria, humidity imbalance, and stale air all affect how your family feels day to day. We offer a full range of indoor air quality solutions that integrate directly with your existing HVAC system.",
    features: [
      "Whole-home air cleaners",
      "UV germicidal lights",
      "Whole-home humidifiers",
      "Energy recovery ventilators",
      "Programmable thermostats",
    ],
  },
  {
    id: "duct-free",
    title: "Duct-Free Systems",
    img: `${BASE}/Duct-Free-System-Heat-Pumps.jpg`,
    description:
      "Mini-split heat pumps are the most flexible, efficient way to heat and cool spaces that don't have ductwork. Sunrooms, finished basements, additions, garages — wherever your existing system doesn't reach, a ductless system can. They're also a great choice for whole-home zoning when you want independent temperature control in different rooms.",
    features: [
      "Single & multi-zone mini-splits",
      "Heat pump & cooling-only options",
      "No ductwork required",
      "Year-round heating & cooling",
      "Ideal for additions & retrofits",
    ],
  },
  {
    id: "packaged",
    title: "Packaged Units",
    img: `${BASE}/Packaged-Units.jpg`,
    description:
      "Packaged HVAC systems combine heating and cooling in a single outdoor unit, keeping mechanical equipment out of your living space. They're common in Connecticut homes that don't have a basement or utility closet for a traditional split system. We install and service rooftop and ground-level packaged units from leading manufacturers.",
    features: [
      "Gas/electric packaged systems",
      "Rooftop & ground-mount units",
      "All-in-one heating & cooling",
      "Installation & replacement",
      "Preventive maintenance plans",
    ],
  },
  {
    id: "water-heaters",
    title: "Water Heaters",
    img: `${BASE}/Water-Heaters.jpg`,
    description:
      "Don't wait until your water heater fails to think about replacing it. We install tank and tankless water heaters, helping you choose the right size and fuel type for your household. Tankless units deliver hot water on demand and last significantly longer than traditional tank heaters — ask us if one is right for your home.",
    features: [
      "Tank & tankless installation",
      "Gas & electric options",
      "Emergency replacement",
      "Efficiency upgrades",
      "Annual inspections",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-36 pb-20 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #112240 0%, #0a1628 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #1e6fbf 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "#e2e8f0" }}>
              HVAC Services Built for Connecticut
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
              From first-time installs to emergency repairs, we handle every part
              of home comfort. Ask about our maintenance agreements to keep your
              system running at peak efficiency year-round.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-28">
          {services.map(({ id, title, img, description, features }, i) => (
            <div
              key={id}
              id={id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </FadeIn>
              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
                  {title}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: "#e2e8f0" }}>
                  {title} Services
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                  {description}
                </p>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#cbd5e1" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#f59e0b" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{ background: "#1e6fbf", color: "#ffffff" }}
                >
                  Request Service
                </Link>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "#112240" }}>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#e2e8f0" }}>
              Not Sure What You Need?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
              Give us a call and describe what&apos;s going on. We&apos;ll help
              you figure out whether you need a repair, a tune-up, or something
              new — no pressure, no upsell.
            </p>
            <a
              href="tel:8602961281"
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200"
              style={{ background: "#f59e0b", color: "#0a1628" }}
            >
              Call 860-296-1281
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
