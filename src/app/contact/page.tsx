import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import {
  PhoneIcon,
  ClockIcon,
  PinIcon,
  BoltIcon,
  CheckIcon,
} from "@/components/icons";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS,
  LICENSE,
  HOURS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request HVAC service or get a free quote from Ugo DiGrazia Heating & Cooling. Call 860-296-1281 or send a service request. 436 Franklin Ave, Hartford, CT 06114. 24/7 emergency service.",
};

const paymentMethods = ["Cash", "Check", "All major credit cards", "Financing*"];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-40 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-14 md:pt-48">
          <Reveal>
            <p className="eyebrow text-body">/ Contact — get in touch</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5rem)] text-ink">
              Talk to a{" "}
              <em className="wonk text-ember italic">DiGrazia</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
              For emergencies, call us directly — a person answers, 24/7. For
              everything else, send the form and we&apos;ll get back to you
              soon.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a href={PHONE_TEL} className="btn btn-ember mt-9">
              <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
              <span className="font-mono text-[0.8rem] tracking-wide">
                {PHONE_DISPLAY}
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className="rounded-[2rem] border border-line bg-[#fffdf8] p-8">
                <p className="eyebrow text-ember">Contact information</p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember-soft text-ember">
                      <PhoneIcon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="eyebrow !text-[0.55rem] text-body/60">
                        Phone
                      </p>
                      <a
                        href={PHONE_TEL}
                        className="display text-xl text-ink hover:text-ember"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-glacier-soft text-glacier">
                      <PinIcon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="eyebrow !text-[0.55rem] text-body/60">
                        Address
                      </p>
                      <a
                        href="https://maps.google.com/?q=436+Franklin+Ave+Hartford+CT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink-2 hover:text-ember"
                      >
                        {ADDRESS}
                      </a>
                      <p className="mt-1 text-sm text-ink-2">
                        <a
                          href={`mailto:${EMAIL}`}
                          className="hover:text-ember"
                        >
                          {EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                      <ClockIcon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="eyebrow !text-[0.55rem] text-body/60">
                        Hours
                      </p>
                      <p className="font-mono text-[0.78rem] text-ink-2">
                        {HOURS}
                      </p>
                      <p className="mt-1 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-wider text-ember uppercase">
                        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-ember" />
                        24/7 emergency service
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-7 border-t border-line pt-6">
                  <p className="eyebrow !text-[0.55rem] text-body/60">
                    Licensing
                  </p>
                  <p className="mt-2 text-sm text-ink-2">
                    Carrier Factory-Authorized Dealer
                  </p>
                  <p className="mt-1 font-mono text-xs text-body">{LICENSE}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-ember/25 blur-[80px]"
                />
                <div className="relative">
                  <p className="eyebrow flex items-center gap-2 text-amber">
                    <BoltIcon className="h-3.5 w-3.5" strokeWidth={2} />
                    No heat? No AC?
                  </p>
                  <p className="display mt-3 text-2xl text-paper">
                    Don&apos;t wait on a form.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">
                    Call us directly for immediate service — nights, weekends,
                    holidays.
                  </p>
                  <a href={PHONE_TEL} className="btn btn-ember mt-6 !py-3">
                    Call now
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-[2rem] border border-line bg-[#fffdf8] p-8">
                <p className="eyebrow text-ember">Payment accepted</p>
                <ul className="mt-5 space-y-2.5">
                  {paymentMethods.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2.5 text-sm text-ink-2"
                    >
                      <CheckIcon
                        className="h-4 w-4 text-ember"
                        strokeWidth={2.2}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-body/70">
                  *With approved credit through our partner Hearth.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-body">/ Visit the shop</p>
              <h2 className="display mt-3 text-3xl text-ink md:text-4xl">
                Franklin Avenue,{" "}
                <em className="wonk text-ember italic">Hartford</em>.
              </h2>
            </div>
            <p className="eyebrow !text-[0.6rem] text-body/60">
              Serving all of Greater Hartford
            </p>
          </div>
          <MapEmbed />
        </Reveal>
      </section>
    </>
  );
}
