import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#070f1c", borderTop: "1px solid rgba(30,111,191,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10/ugo-logo.png"
              alt="Ugo DiGrazia Heating & Cooling"
              width={56}
              height={56}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              Hartford&apos;s trusted HVAC company since the 1960s.
              Carrier Factory-Authorized Dealer. License #306632.
            </p>
            <div className="mt-4">
              <Image
                src="https://ugodigraziaheatingandcooling.com/wp-content/uploads/2023/10/carrier-factory-authorized-dealer.png"
                alt="Carrier Factory Authorized Dealer"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#f59e0b" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-amber-400"
                    style={{ color: "#94a3b8" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#f59e0b" }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "#94a3b8" }}>
              <li>
                <a href="tel:8602961281" className="hover:text-white transition-colors">
                  860-296-1281
                </a>
              </li>
              <li>
                <a href="mailto:ugo@ugohvac.com" className="hover:text-white transition-colors">
                  ugo@ugohvac.com
                </a>
              </li>
              <li>436 Franklin Ave, Hartford, CT 06114</li>
              <li>Mon–Fri: 8:00AM – 4:30PM</li>
              <li className="font-medium" style={{ color: "#f59e0b" }}>
                24/7 Emergency Service
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(30,111,191,0.1)", color: "#475569" }}
        >
          <p>&copy; {new Date().getFullYear()} Ugo DiGrazia Heating & Cooling LLC. All rights reserved.</p>
          <p>Serving Greater Hartford, CT</p>
        </div>
      </div>
    </footer>
  );
}
