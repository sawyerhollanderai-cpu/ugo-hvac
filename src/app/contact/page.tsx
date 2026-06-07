import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request HVAC service or get a free quote from Ugo DiGrazia Heating & Cooling. Call 860-296-1281 or fill out our service request form. 436 Franklin Ave, Hartford, CT 06114.",
};

const contactInfo = [
  { label: "Phone", value: "860-296-1281", href: "tel:8602961281" },
  { label: "Email", value: "ugo@ugohvac.com", href: "mailto:ugo@ugohvac.com" },
  {
    label: "Address",
    value: "436 Franklin Ave, Hartford, CT 06114",
    href: "https://maps.google.com/?q=436+Franklin+Ave+Hartford+CT",
  },
];

const paymentMethods = ["Cash", "Check", "All Major Credit Cards", "Financing*"];

export default function ContactPage() {
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
              "radial-gradient(circle at 50% 60%, #1e6fbf 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#f59e0b" }}
            >
              Get in Touch
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
              style={{ color: "#e2e8f0" }}
            >
              Request Service or Get a Quote
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8" }}>
              For emergencies, call us directly at{" "}
              <a href="tel:8602961281" className="font-semibold" style={{ color: "#f59e0b" }}>
                860-296-1281
              </a>
              . For everything else, fill out the form and we&apos;ll be in touch soon.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn direction="left">
              <div
                className="p-8 rounded-2xl space-y-6"
                style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
              >
                <h2 className="text-lg font-semibold" style={{ color: "#e2e8f0" }}>
                  Contact Information
                </h2>
                {contactInfo.map(({ label, value, href }) => (
                  <div key={label}>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "#f59e0b" }}
                    >
                      {label}
                    </p>
                    <a
                      href={href}
                      target={label === "Address" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "#94a3b8" }}
                    >
                      {value}
                    </a>
                  </div>
                ))}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(30,111,191,0.15)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "#f59e0b" }}
                  >
                    Hours
                  </p>
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    Mon–Fri: 8:00AM – 4:30PM
                  </p>
                  <p className="text-sm font-semibold mt-1" style={{ color: "#f59e0b" }}>
                    24/7 Emergency Service
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.2)",
                }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: "#f59e0b" }}>
                  Heating or AC Emergency?
                </p>
                <p className="text-sm mb-3" style={{ color: "#94a3b8" }}>
                  Don&apos;t wait — call us directly for immediate service.
                </p>
                <a
                  href="tel:8602961281"
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{ background: "#f59e0b", color: "#0a1628" }}
                >
                  Call Now
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div
                className="p-6 rounded-2xl"
                style={{ background: "#112240", border: "1px solid rgba(30,111,191,0.15)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "#f59e0b" }}
                >
                  Payment Methods Accepted
                </p>
                <ul className="space-y-2 mb-3">
                  {paymentMethods.map((method) => (
                    <li
                      key={method}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#cbd5e1" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#f59e0b" }}
                      />
                      {method}
                    </li>
                  ))}
                </ul>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  *With approved credit through our partner Hearth.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#f59e0b" }}
              >
                Visit Us
              </p>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#e2e8f0" }}>
                436 Franklin Ave, Hartford, CT
              </h2>
            </div>
            <MapEmbed height={460} />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
