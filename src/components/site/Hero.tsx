import { ArrowRight, Droplets, Gauge, ShieldCheck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { trustItems } from "@/lib/site-data";
import industrialImg from "@/assets/industrial-oil.jpg";

const trustIcons = [ShieldCheck, Gauge, Droplets, Handshake];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--amber), transparent 65%)" }}
      />
      <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <Reveal>
            <p className="eyebrow">Premium Oil Solutions</p>
            <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.04] font-medium">
              Engineered for Performance.
              <span className="block text-gold italic">Crafted for Life.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Premium oil solutions designed for modern industry, mobility, wellness and everyday
              performance.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#products" className="group">
                Explore Our Products
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-8 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Quality-focused products • Reliable supply • Business-ready solutions
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-gold/25 shadow-[var(--shadow-lift)]">
            <img
              src={industrialImg}
              width={1280}
              height={1600}
              alt="Golden industrial oil being poured into mechanical equipment"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--primary) 65%, transparent), transparent 55%)",
              }}
            />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-background/15 bg-primary/70 px-5 py-4 backdrop-blur-md">
              <p className="text-[0.625rem] tracking-[0.22em] text-gold uppercase">
                Precision Formulated
              </p>
              <p className="mt-1 text-sm text-primary-foreground/80">Industrial &amp; Automotive</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] sm:absolute sm:-right-4 sm:-bottom-6 sm:mt-0 sm:w-64 sm:flex-col sm:items-start lg:-right-8">
            <p className="text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
              Quality • Performance
            </p>
            <p className="font-display text-lg">Reliability</p>
          </div>
        </Reveal>
      </div>

      <div className="hairline">
        <ul className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = trustIcons[i]!;
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="flex gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h2 className="text-base font-medium">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}