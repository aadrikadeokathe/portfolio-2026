import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Tone } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const TONE_BG: Record<Tone, string> = {
  violet: "bg-violet",
  pink: "bg-pink",
  lime: "bg-lime",
  cobalt: "bg-cobalt",
  amber: "bg-amber",
};

export const TONE_TEXT: Record<Tone, string> = {
  violet: "text-violet",
  pink: "text-pink",
  lime: "text-lime",
  cobalt: "text-cobalt",
  amber: "text-amber",
};

export const TONE_ON: Record<Tone, string> = {
  violet: "text-background",
  pink: "text-background",
  lime: "text-ink",
  cobalt: "text-background",
  amber: "text-ink",
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  const shown = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-IN");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

export function SectionHead({
  index,
  label,
  title,
  sub,
  tone = "violet",
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  sub?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <span className={cn("label-mono inline-block px-2 py-1", TONE_BG[tone], TONE_ON[tone])}>
            {index} / {label}
          </span>
          <span className="h-px flex-1 bg-ink/25" />
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="display text-[clamp(2.4rem,7.5vw,5.5rem)]">{title}</h2>
      </Reveal>
      {sub ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Annotation({
  children,
  className,
  rotate = -3,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      style={{ rotate: `${rotate}deg` }}
      className={cn(
        "inline-block font-serif text-lg italic leading-tight text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Sticky({
  children,
  tone,
  rotate = -2,
  className,
}: {
  children: ReactNode;
  tone: Tone;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className={cn(
        "hard px-3 py-2 font-mono text-[11px] uppercase tracking-widest",
        TONE_BG[tone],
        TONE_ON[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  variant = "solid",
  external,
  className,
  cursor,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "lime";
  external?: boolean;
  className?: string;
  cursor?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-ink text-paper"
      : variant === "lime"
        ? "bg-lime text-ink"
        : "bg-transparent text-ink";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      data-cursor={cursor ?? (external ? "external" : "link")}
      className={cn(
        "hard lift inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em]",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}
