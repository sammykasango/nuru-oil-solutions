import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Reveal, Logo } from "./Reveal";
import { site } from "@/lib/site-data";

const customerTypes = [
  "Individual Customer",
  "Retailer",
  "Distributor",
  "Workshop",
  "Industrial Business",
  "Wellness Business",
  "Other",
];

const productInterests = [
  "Automotive Oils",
  "Industrial Oils",
  "Natural Oils",
  "Essential Oils",
  "Wellness Oils",
  "Wholesale Supply",
  "Distribution Partnership",
  "Other",
];

const selectClass =
  "h-10 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground transition-colors focus-visible:border-gold focus-visible:outline-none";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Enquiry received", {
      description: "Our team will get back to you shortly.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="container-page py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.6vw,2.75rem)] leading-tight font-medium">
            Let's Talk About Your Oil Requirements.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tell us what you need and our team will help you find the right product or supply
            solution.
          </p>
          <ul className="mt-10 space-y-3">
            {[
              { icon: MessageCircle, label: "WhatsApp Us", value: site.whatsapp, href: site.whatsapp },
              { icon: Phone, label: "Call Us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
              { icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}` },
            ].map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60"
                >
                  <c.icon className="size-5 text-gold" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="block font-medium">{c.label}</span>
                    <span className="text-muted-foreground">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="grid gap-5 rounded-[28px] border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:grid-cols-2 lg:p-10"
          >
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" required autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="customerType">Customer Type</Label>
              <select id="customerType" name="customerType" className={selectClass} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                {customerTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productInterest">Product Interest</Label>
              <select
                id="productInterest"
                name="productInterest"
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                {productInterests.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="quantity">Quantity / Requirement</Label>
              <Input id="quantity" name="quantity" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} />
            </div>
            <Button type="submit" variant="gold" size="xl" className="sm:col-span-2">
              Submit Enquiry
              <ArrowRight />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-64 opacity-40"
        style={{
          background: "radial-gradient(60% 100% at 50% 100%, var(--gold), transparent 70%)",
        }}
      />
      <div className="container-page relative py-24 text-center lg:py-32">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] leading-tight font-medium">
            Better Products. Better Performance. Better Partnerships.
          </h2>
          <p className="mt-5 text-primary-foreground/75">
            Discover an oil portfolio built around quality, reliability and modern customer needs.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#products">Explore Products</a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const footerCols = [
  {
    title: "Company",
    links: ["About", "Quality", "Products", "Applications", "Contact"],
  },
  { title: "Products", links: ["Automotive Oils", "Industrial Oils", "Natural Oils", "Wellness Oils"] },
  { title: "Business", links: ["Wholesale", "Distribution", "Partnerships", "Request a Quote"] },
  { title: "Connect", links: ["WhatsApp", "Facebook", "Instagram", "LinkedIn", "X"] },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm text-secondary-foreground/70">
            Premium oil solutions for modern industry, mobility, wellness and everyday applications.
          </p>
        </div>
        {footerCols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-[0.6875rem] tracking-[0.2em] text-gold uppercase">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#contact"
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-gold"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-secondary-foreground/60 sm:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p className="flex gap-4">
            <a href="#contact" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-gold">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 bottom-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:bg-amber ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}