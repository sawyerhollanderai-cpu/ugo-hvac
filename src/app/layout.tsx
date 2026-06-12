import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { EMAIL, towns } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Ugo DiGrazia Heating & Cooling",
  slogan: "Warm in January. Cool in July.",
  telephone: "+1-860-296-1281",
  email: EMAIL,
  url: "https://ugodigraziaheatingandcooling.com",
  foundingDate: "1972",
  address: {
    "@type": "PostalAddress",
    streetAddress: "436 Franklin Ave",
    addressLocality: "Hartford",
    addressRegion: "CT",
    postalCode: "06114",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-16:30",
  areaServed: towns.map((name) => ({ "@type": "City", name })),
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ugodigraziaheatingandcooling.com"),
  title: {
    default:
      "Ugo DiGrazia Heating & Cooling | Hartford, CT HVAC — Since 1972",
    template: "%s | Ugo DiGrazia Heating & Cooling",
  },
  description:
    "Two generations of the DiGrazia family keeping Greater Hartford comfortable since 1972. Carrier Factory-Authorized Dealer. Installation, repair, and 24/7 emergency service for heating, cooling, and indoor air quality.",
  openGraph: {
    title: "Ugo DiGrazia Heating & Cooling — Warm in January. Cool in July.",
    description:
      "Hartford's family-owned HVAC company since 1972. Carrier Factory-Authorized installation, honest repair, 24/7 emergency service.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <a
          href="#main"
          className="btn btn-ink sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
