import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service HVAC installation, repair, and maintenance in Greater Hartford, CT. Heating, cooling, indoor air quality, plumbing, sheet metal fabrication, and more.",
};

const BASE = "https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10";

const services = [
  {
    id: "heating",
    title: "Heating",
    img: `${BASE}/Heating.jpg`,
    description:
      "Connecticut winters are no joke, and a reliable heating system isn't optional — it's essential. We install, service, and repair Carrier gas furnaces, hot water boilers, and heat pump systems. Every installation is sized for your home and tuned for maximum efficiency.",
    features: [
      "Carrier gas furnaces & boilers",
      "Heat pump systems (13–21 SEER)",
      "2-stage compressors & variable-speed fans",
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
      "Stay cool all summer with a system that's sized right and installed properly. Carrier systems range from 13 SEER to 21 SEER, with sound-reduction Silencer System II™ design and WeatherArmor Ultra™ protection built in.",
    features: [
      "Carrier central AC installation",
      "Silencer System II™ sound reduction",
      "WeatherArmor Ultra™ durability",
      "Seasonal tune-ups",
      "Emergency AC repair",
      "Air handlers & condenser replacement",
    ],
  },
  {
    id: "air-quality",
    title: "Indoor Air Quality",
    img: `${BASE}/Indoor-Air-Quality-image.jpg`,
    stat: "The air inside your home can be 2–5× more polluted than the air outside.",
    description:
      "Allergens, bacteria, humidity imbalance, and stale air all affect how your family feels day to day. We integrate a full range of air-quality products directly with your existing HVAC system.",
    features: [
      "Whole-home air cleaners",
      "UV germicidal lights",
      "Whole-home humidifiers",
      "Energy recovery ventilators",
      "Carbon monoxide detectors",
      "Programmable thermostats & zoning",
    ],
  },
  {
    id: "duct-free",
    title: "Duct-Free Systems",
    img: `${BASE}/Duct-Free-System-Heat-Pumps.jpg`,
    description:
      "Mini-split heat pumps are the most flexible, efficient way to heat and cool spaces that don't have ductwork — sunrooms, finished basements, additions, garages. Also ideal for whole-home zoning when you want independent temperature control in different rooms.",
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
      "Packaged HVAC systems combine heating and cooling in a single outdoor unit, keeping mechanical equipment out of your living space. Common in Connecticut homes without a basement or utility closet for a traditional split system.",
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
      "Don't wait until your water heater fails. We install tank and tankless heaters and help you choose the right size and fuel type for your household. Tankless units deliver hot water on demand and last significantly longer than tank heaters.",
    features: [
      "Tank & tankless installation",
      "Gas & electric options",
      "Emergency replacement",
      "Efficiency upgrades",
      "Annual inspections",
    ],
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal Fabrication",
    img: `${BASE}/carrier-1.jpg`,
    description:
      "What sets us apart: we fabricate sheet metal in-house. That means custom duct systems, lab hoods, and specialty exhaust built precisely for your space — in welded black iron, aluminum, or stainless steel — without waiting on third-party shops.",
    features: [
      "Custom duct systems",
      "Lab hoods & exhaust systems",
      "Welded black iron fabrication",
      "Aluminum & stainless steel work",
      "Specialty one-off pieces",
    ],
  },
  {
    id: "duct-sealing",
    title: "Duct Sealing",
    img: `${BASE}/Heating.jpg`,
    stat: "Approximately 20% of air is lost through leaks and poorly connected ducts.",
    description:
      "Leaky ductwork is one of the biggest hidden causes of high utility bills and uneven temperatures. We test, seal, and rebalance duct systems so the air you pay to heat or cool actually reaches the rooms it's supposed to.",
    features: [
      "Duct leak testing",
      "Sealing & rebalancing",
      "Lower utility bills",
      "Better whole-home comfort",
      "Existing system optimization",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    img: `${BASE}/Water-Heaters.jpg`,
    description:
      "We handle plumbing installation and repair alongside our HVAC work. One call, one trusted team — useful when a project touches both systems (water heater swaps, gas line work, condensate drains).",
    features: [
      "Installation & repair",
      "On-site assessment",
      "Gas line work",
      "Drain & condensate work",
      "Coordinated with HVAC projects",
    ],
  },
];

// 5 guide entry points — anchored to relevant services
const guides = [
  { label: "Select a New System", href: "#heating", description: "Compare options and pick the right fit." },
  { label: "Repair or Replace?", href: "#cooling", description: "Get an honest answer about your current system." },
  { label: "Energy Bill Concerns", href: "#duct-sealing", description: "Find and fix what's costing you money." },
  { label: "Healthier Home", href: "#air-quality", description: "Cleaner, fresher air for your family." },
  { label: "Ready for Maintenance", href: "#service-agreement", description: "Two tune-ups, priority service, more." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-36 pb-16 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #112240 0%, #0a1628 100%)" }}
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
              From first-time installs to emergency repairs, custom sheet-metal
              fabrication to indoor air quality — we handle every part of home
              comfort, plus plumbing when projects need it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick-start guides strip */}
      <section className="px-6 -mt-8 mb-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div
              className="rounded-2xl p-6"
              style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.2)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4 text-center"
                style={{ color: "#94a3b8" }}
              >
                Quick Start — what brings you here?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {guides.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="px-3 py-3 rounded-xl text-center text-xs font-semibold transition-all duration-200 hover:opacity-100"
                    style={{
                      background: "rgba(30,111,191,0.1)",
                      color: "#e2e8f0",
                      border: "1px solid rgba(30,111,191,0.15)",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-28">
          {services.map(({ id, title, img, description, features, stat }, i) => (
            <div
              key={id}
              id={id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image src={img} alt={title} fill className="object-cover" />
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
                {stat && (
                  <div
                    className="mb-5 p-4 rounded-xl"
                    style={{
                      background: "rgba(245,158,11,0.08)",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    <p className="text-sm italic leading-relaxed" style={{ color: "#fbbf24" }}>
                      {stat}
                    </p>
                  </div>
                )}
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

      {/* Service Agreement callout */}
      <section id="service-agreement" className="py-20 px-6">
        <FadeIn>
          <div
            className="max-w-5xl mx-auto rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,111,191,0.15) 0%, rgba(10,22,40,0.6) 100%)",
              border: "1px solid rgba(30,111,191,0.3)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
              Maintenance Plan
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "#e2e8f0" }}>
              Service Agreement
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: "#94a3b8" }}>
              Annual coverage that pays for itself. Two tune-ups, priority status
              when something breaks, and discounts on everything else.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "2 annual performance tune-ups (furnace + AC)",
                "24-hour priority emergency service, 365 days/year",
                "10% off replacement parts and repair labor",
                "No trip charges",
                "Energy-saving coil cleaning included",
                "30-day labor warranty",
                "10% off new unit purchases",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#e2e8f0" }}>
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 text-xs font-bold"
                    style={{ background: "#f59e0b", color: "#0a1628" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold"
              style={{ background: "#f59e0b", color: "#0a1628" }}
            >
              Ask About a Service Agreement
            </Link>
          </div>
        </FadeIn>
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
