import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          d="M12 2.5c3.6 4.4 6.4 7.9 6.4 11.2A6.4 6.4 0 0 1 12 20.1a6.4 6.4 0 0 1-6.4-6.4C5.6 10.4 8.4 6.9 12 2.5Z"
          fill="var(--gold)"
        />
        <path
          d="M12 8.6c1.7 2.2 3 3.9 3 5.5a3 3 0 1 1-6 0c0-1.6 1.3-3.3 3-5.5Z"
          fill="var(--background)"
          opacity="0.85"
        />
      </svg>
      <span
        className={cn(
          "font-display text-lg tracking-[0.14em] uppercase",
          tone === "light" ? "text-background" : "text-foreground",
        )}
      >
        Nuru <span className="text-gold">Oils</span>
      </span>
    </span>
  );
}