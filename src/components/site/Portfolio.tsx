import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { categories, products } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="products" className="container-page py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Our Portfolio</p>
        <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight font-medium">
          One Portfolio. Multiple Possibilities.
        </h2>
        <p className="mt-5 text-muted-foreground">
          From demanding mechanical environments to refined wellness applications, our portfolio is
          designed around the needs of modern customers and businesses.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal as="article" key={cat.id} delay={i * 120}>
            <div
              id={cat.id}
              className={cn(
                "group h-full overflow-hidden rounded-[28px] border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
                cat.tone === "dark"
                  ? "border-primary/30 bg-primary text-primary-foreground"
                  : "border-border bg-sand text-foreground",
              )}
            >
              <div className="overflow-hidden">
                <img
                  src={cat.image}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  alt={cat.imageAlt}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-7 lg:p-9">
                <h3 className="font-display text-2xl">{cat.title}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    cat.tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {cat.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <li
                      key={tag}
                      className={cn(
                        "rounded-full border px-3 py-1 text-[0.6875rem] tracking-[0.1em] uppercase",
                        cat.tone === "dark"
                          ? "border-primary-foreground/20 text-primary-foreground/75"
                          : "border-foreground/15 text-muted-foreground",
                      )}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={cat.tone === "dark" ? "outlineLight" : "outlineGold"}
                  size="xl"
                  className="mt-8"
                  asChild
                >
                  <a href="#range" className="group/cta">
                    {cat.cta}
                    <ArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div id="range" className="mt-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Featured Products</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium">
            Explore Our Product Range
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal as="li" key={p.code} delay={i * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    loading="lazy"
                    width={1280}
                    height={1600}
                    alt={p.imageAlt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.625rem] tracking-[0.2em] text-gold uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <p className="mt-4 text-xs text-muted-foreground/80">
                    {p.applications.join(" • ")}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:text-gold"
                  >
                    View Product
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}