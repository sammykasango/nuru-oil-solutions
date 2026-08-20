import {
  ArrowRight,
  Car,
  Check,
  Factory,
  Flower2,
  Leaf,
  PackageCheck,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { applications, reasons } from "@/lib/site-data";
import qualityImg from "@/assets/quality-story.jpg";
import industrialImg from "@/assets/industrial-oil.jpg";
import wellnessImg from "@/assets/wellness-oil.jpg";

const appIcons = [Car, Settings2, Factory, Flower2, Leaf, PackageCheck];

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-sand">
      <div className="container-page py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why Us</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-medium">Why Customers Choose Us</h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.num} delay={i * 90}>
              <div className="flex gap-6 border-t border-foreground/10 pt-6">
                <span className="font-display text-2xl text-gold">{r.num}</span>
                <div>
                  <h3 className="text-xl font-medium">{r.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {r.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function QualityStory() {
  const points = [
    "Quality-focused processes",
    "Consistent product standards",
    "Reliable commercial supply",
    "Customer-focused service",
  ];
  return (
    <section id="quality" className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <Reveal>
        <img
          src={qualityImg}
          loading="lazy"
          width={1280}
          height={1024}
          alt="Golden oil swirling in a laboratory beaker beside blending equipment"
          className="aspect-[5/4] w-full rounded-[28px] border border-border object-cover shadow-[var(--shadow-soft)]"
        />
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">Our Quality Promise</p>
        <h2 className="mt-4 text-[clamp(1.875rem,3.6vw,2.75rem)] leading-tight font-medium">
          Quality You Can See. Performance You Can Trust.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Our approach combines product quality, careful sourcing, consistent processes and
          customer-focused service to deliver oil solutions that businesses and consumers can rely
          on.
        </p>
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm">
              <Check className="size-4 text-gold" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
        <Button variant="ink" size="xl" className="mt-9" asChild>
          <a href="#contact" className="group">
            Learn About Our Quality
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </Reveal>
    </section>
  );
}

export function Applications() {
  return (
    <section id="applications" className="container-page py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Applications</p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-medium">
          Designed for Different Environments
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((a, i) => {
          const Icon = appIcons[i]!;
          return (
            <Reveal as="li" key={a.title} delay={i * 70} className="bg-card">
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-sand">
                <Icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-medium">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function IndustrialFeature() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src={industrialImg}
        loading="lazy"
        width={1280}
        height={1600}
        alt="Golden industrial oil being poured into mechanical equipment"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--primary) 30%, color-mix(in oklab, var(--primary) 55%, transparent))",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, var(--gold) 0 1px, transparent 1px 34px)",
        }}
      />
      <div className="container-page relative py-24 lg:py-32">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Industrial &amp; Automotive</p>
          <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.25rem)] leading-tight font-medium">
            Performance Where It Matters Most.
          </h2>
          <p className="mt-5 text-primary-foreground/75">
            Machines work harder when the right lubrication supports them. Our industrial oil
            solutions are positioned around reliability, consistency and performance.
          </p>
          <Button variant="gold" size="xl" className="mt-9" asChild>
            <a href="#industrial" className="group">
              Explore Industrial Solutions
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function WellnessFeature() {
  return (
    <section className="bg-sand">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal delay={100} className="order-2 lg:order-1">
          <p className="eyebrow">Natural &amp; Wellness</p>
          <h2 className="mt-4 text-[clamp(1.875rem,3.6vw,2.75rem)] leading-tight font-medium">
            Pure Ingredients. Elevated Everyday Rituals.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Our wellness-focused oils bring together natural aesthetics, premium presentation and
            versatile lifestyle applications.
          </p>
          <Button variant="outlineGold" size="xl" className="mt-9" asChild>
            <a href="#wellness" className="group">
              Explore Wellness Oils
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <img
            src={wellnessImg}
            loading="lazy"
            width={1280}
            height={1600}
            alt="Premium amber wellness oils with white flower and rolled towel"
            className="aspect-[4/5] w-full rounded-[28px] border border-gold/20 object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>
      </div>
    </section>
  );
}