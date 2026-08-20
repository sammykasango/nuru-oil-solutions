import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { faqs, testimonials } from "@/lib/site-data";

const benefits = [
  "Wholesale purchasing",
  "Commercial supply",
  "Distributor opportunities",
  "Custom enquiries",
  "Product portfolio support",
];

export function Wholesale() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid gap-12 rounded-[28px] border border-border bg-card p-8 lg:grid-cols-2 lg:p-14">
        <Reveal>
          <p className="eyebrow">Business Supply</p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.6vw,2.75rem)] leading-tight font-medium">
            Looking for a Reliable Oil Supply Partner?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Whether you're a retailer, distributor, workshop, manufacturer, wellness business or
            commercial buyer, let's build a supply solution around your needs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact" className="group">
                Request a Wholesale Quote
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#contact">Become a Distributor</a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="divide-y divide-border">
            {benefits.map((b) => (
              <li key={b} className="flex items-center justify-between py-4 text-sm">
                <span>{b}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function DistributorCTA() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--gold) 1px, transparent 1.5px), radial-gradient(circle, var(--gold) 1px, transparent 1.5px)",
          backgroundSize: "48px 48px, 48px 48px",
          backgroundPosition: "0 0, 24px 24px",
        }}
      />
      <div className="container-page relative py-20 text-center lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow">Partnership</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium">
            Grow With Our Product Network.
          </h2>
          <p className="mt-5 text-secondary-foreground/75">
            We are building relationships with retailers, distributors and commercial partners who
            want dependable products and long-term opportunities.
          </p>
          <Button variant="gold" size="xl" className="mt-9" asChild>
            <a href="#contact" className="group">
              Partner With Us
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="container-page py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-medium">
          Trusted by Customers &amp; Partners
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 100} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <Quote className="size-5 text-gold" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 font-display text-lg leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                <span className="block font-medium">{t.name}</span>
                <span className="text-muted-foreground">{t.company}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Faq() {
  return (
    <section className="bg-sand">
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.6vw,2.5rem)] font-medium">
            Questions, Answered.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-foreground/10">
                <AccordionTrigger className="text-left text-base font-medium hover:text-gold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}