import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Reveal";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "#about" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center text-[0.6875rem] tracking-[0.16em] uppercase">
          <span>Premium Oil Solutions • Wholesale &amp; Distribution Available</span>
          <span className="hidden text-primary-foreground/55 md:inline">
            Serving Automotive, Industrial, Wellness &amp; Commercial Markets
          </span>
        </div>
      </div>

      <nav
        aria-label="Main"
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-background",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6">
          <a href="#top" aria-label="Nuru Oils home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button variant="gold" size="xl" className="hidden sm:inline-flex" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold lg:hidden"
            >
              {open ? <Menu className="hidden" /> : null}
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
            <ul className="container-page flex flex-col py-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 text-base font-medium text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <Button variant="gold" size="xl" className="w-full" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Request a Quote
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}