import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/portfolio";
import { Annotation, ArrowLink, Counter, Reveal, SectionHead } from "./primitives";

const [zepto, hive, pitchos, sign] = projects;

function Meta({
  n,
  title,
  tagline,
  status,
  accent,
}: {
  n: string;
  title: string;
  tagline: string;
  status: string;
  accent: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="display text-5xl leading-none md:text-6xl">{n}</span>
        <span className="h-px flex-1 bg-ink/25" />
        <span className={`label-mono border-2 border-ink px-2 py-1 ${accent}`}>{status}</span>
      </div>
      <h3 className="display text-[clamp(1.9rem,4.6vw,3.4rem)]">{title}</h3>
      <p className="mt-4 max-w-lg font-serif text-xl italic leading-snug md:text-2xl">{tagline}</p>
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="border-2 border-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- 01 Zepto: data / editorial ---------------- */
function Zepto() {
  const p = zepto!;
  const bars = [
    { label: "Zepto", v: 29.7, cls: "bg-pink" },
    { label: "Blinkit", v: 11.9, cls: "bg-cobalt" },
    { label: "Instamart", v: 11.2, cls: "bg-cobalt" },
  ];
  return (
    <article
      id="zepto"
      data-cursor="project"
      className="border-b-2 border-ink px-5 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Reveal>
            <Meta
              n={p.n}
              title={p.title}
              tagline={p.tagline}
              status={p.status}
              accent="bg-cobalt text-background"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {p.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Stack items={p.stack} />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowLink href={p.live!} external variant="solid" cursor="external">
                Live dashboard ↗
              </ArrowLink>
              <ArrowLink href={p.code!} external variant="outline" cursor="external">
                GitHub ↗
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="hard-lg grid grid-cols-2 bg-card">
            <div className="col-span-2 border-b-2 border-ink bg-pink p-6 text-background">
              <p className="display text-[clamp(3.4rem,11vw,7rem)] leading-none">
                <Counter to={29.7} decimals={1} suffix="%" />
              </p>
              <p className="label-mono mt-2">Zepto negative sentiment</p>
              <p className="mt-4 border-t-2 border-background/40 pt-3 font-mono text-xs uppercase tracking-[0.18em]">
                2.6× worse than competitors
              </p>
            </div>
            <div className="border-r-2 border-b-2 border-ink p-5">
              <p className="label-mono mb-4 text-muted-foreground">Negative share</p>
              <div className="space-y-3">
                {bars.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between font-mono text-[10px] uppercase">
                      <span>{b.label}</span>
                      <span>{b.v}%</span>
                    </div>
                    <div className="mt-1 h-3 border-2 border-ink bg-paper">
                      <motion.div
                        className={"h-full " + b.cls}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(b.v / 30) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-b-2 border-ink p-5">
              <p className="label-mono mb-4 text-muted-foreground">RICE simulator</p>
              {[
                ["Delivery delays", "92"],
                ["Wrong / missing items", "71"],
                ["Refund friction", "58"],
                ["App performance", "44"],
                ["Pricing surprises", "37"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-t border-ink/15 py-1.5 font-mono text-[10px] uppercase"
                >
                  <span>{k}</span>
                  <span className="bg-lime px-1">{v}</span>
                </div>
              ))}
            </div>
            <div className="col-span-2 flex flex-wrap items-center justify-between gap-3 p-5">
              <p className="display text-2xl">
                <Counter to={8000} suffix="+" /> reviews analyzed
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                ₹82–394 Cr revenue at risk
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ---------------- 02 Hive: marketplace ---------------- */
function Hive() {
  const p = hive!;
  const creators = ["@meher.edits", "@indore.eats", "@studio.ram", "@finance.by.k"];
  const brands = ["Cafe Kaapi", "FitLab", "Nova Skin", "Local D2C"];
  return (
    <article
      id="hive"
      data-cursor="project"
      className="grain relative overflow-hidden border-b-2 border-ink bg-ink px-5 py-14 text-paper md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="display text-5xl leading-none md:text-6xl">{p.n}</span>
                <span className="h-px flex-1 bg-paper/25" />
                <span className="label-mono border-2 border-paper bg-lime px-2 py-1 text-ink">
                  {p.status}
                </span>
              </div>
              <h3 className="display text-[clamp(3rem,10vw,7rem)] text-lime">{p.title}</h3>
              <p className="mt-4 max-w-lg font-serif text-xl italic leading-snug text-paper/90 md:text-2xl">
                {p.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/70 md:text-base">
                {p.body}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="border-2 border-paper/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="border-2 border-paper/40 bg-pink p-4 text-background">
                  <p className="display text-4xl">10%</p>
                  <p className="label-mono mt-1">Platform commission</p>
                </div>
                <div className="border-2 border-paper/40 bg-amber p-4 text-ink">
                  <p className="display text-4xl">15%</p>
                  <p className="label-mono mt-1">Outreach commission</p>
                </div>
              </div>
              {p.live ? (
                <div className="mt-6">
                  <ArrowLink href={p.live} external variant="lime" cursor="external">
                    Live website ↗
                  </ArrowLink>
                </div>
              ) : null}
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="label-mono text-paper/60">Creators</p>
                {creators.map((c, i) => (
                  <motion.div
                    key={c}
                    animate={{ y: [0, i % 2 ? 6 : -6, 0] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-3 border-2 border-paper bg-paper p-2 text-ink"
                  >
                    <span className="grid size-8 shrink-0 place-items-center border-2 border-ink bg-violet font-mono text-xs text-background">
                      {c[1]?.toUpperCase()}
                    </span>
                    <span className="truncate font-mono text-[11px]">{c}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="label-mono text-paper/60">Brands</p>
                {brands.map((b, i) => (
                  <motion.div
                    key={b}
                    animate={{ y: [0, i % 2 ? -6 : 6, 0] }}
                    transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-3 border-2 border-paper bg-lime p-2 text-ink"
                  >
                    <span className="grid size-8 shrink-0 place-items-center border-2 border-ink bg-paper font-mono text-xs">
                      {b[0]}
                    </span>
                    <span className="truncate font-mono text-[11px]">{b}</span>
                  </motion.div>
                ))}
              </div>
              <div className="col-span-2 border-2 border-paper bg-violet p-4 text-background">
                <p className="label-mono mb-2 opacity-80">Mutual match</p>
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                  <span>Creator</span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 border-t-2 border-dashed border-background/70"
                  />
                  <span>↔</span>
                  <motion.span
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 border-t-2 border-dashed border-background/70"
                  />
                  <span>Brand</span>
                </div>
                <p className="mt-4 border-t-2 border-background/40 pt-3 font-mono text-[10px] uppercase tracking-[0.18em]">
                  Project workspace · brief → shoot → deliver → pay
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* ---------------- 03 PitchOS ---------------- */
function PitchOS() {
  const p = pitchos!;
  const slides = [
    { n: "Slide 01", t: "Problem Statement", s: 78, cls: "bg-lime" },
    { n: "Slide 02", t: "Market", s: 54, cls: "bg-amber" },
    { n: "Slide 03", t: "GTM", s: 42, cls: "bg-pink" },
  ];
  return (
    <article
      id="pitchos"
      data-cursor="project"
      className="border-b-2 border-ink bg-card px-5 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <div className="hard-lg bg-paper">
            <div className="flex items-center gap-2 border-b-2 border-ink bg-violet px-4 py-2 text-background">
              <span className="size-2 rounded-full bg-background/70" />
              <span className="size-2 rounded-full bg-background/70" />
              <span className="label-mono ml-2">pitchos / analysis</span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="ml-auto font-mono text-[10px] uppercase tracking-widest"
              >
                ● analyzing
              </motion.span>
            </div>
            <div className="divide-y-2 divide-ink">
              {slides.map((s, i) => (
                <div key={s.n} className="flex items-center gap-4 p-4">
                  <div className="grid h-14 w-20 shrink-0 place-items-center border-2 border-ink bg-card font-mono text-[9px] uppercase text-muted-foreground">
                    deck
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="label-mono text-muted-foreground">{s.n}</p>
                    <p className="truncate font-mono text-sm uppercase tracking-wide">{s.t}</p>
                    <div className="mt-2 h-2 border-2 border-ink bg-card">
                      <motion.div
                        className={"h-full " + s.cls}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.s}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 * i }}
                      />
                    </div>
                  </div>
                  <p className="display text-3xl">{s.s}</p>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-ink p-4">
              <p className="label-mono mb-3 text-muted-foreground">AI follow-up Q&amp;A</p>
              <div className="space-y-2">
                <p className="border-2 border-ink bg-card p-2 font-mono text-[11px]">
                  &ldquo;Your TAM assumes 100% smartphone penetration. What&apos;s the serviceable
                  number?&rdquo;
                </p>
                <p className="border-2 border-ink bg-lime p-2 font-mono text-[11px]">
                  &ldquo;What happens to CAC when the referral loop saturates?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Meta
              n={p.n}
              title={p.title}
              tagline={p.tagline}
              status={p.status}
              accent="bg-violet text-background"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {p.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Stack items={p.stack} />
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {p.code ? (
                <ArrowLink href={p.code} external variant="solid" cursor="external">
                  GitHub ↗
                </ArrowLink>
              ) : null}
              {p.live ? (
                <ArrowLink href={p.live} external variant="lime" cursor="external">
                  Live demo ↗
                </ArrowLink>
              ) : null}
              <span className="text-2xl text-pink">↳</span>
              <Annotation rotate={-3}>&ldquo;{p.note}&rdquo;</Annotation>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* ---------------- 04 Sign language ---------------- */
function SignLanguage() {
  const p = sign!;
  return (
    <article
      id="signlang"
      data-cursor="project"
      className="border-b-2 border-ink px-5 py-14 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Meta
            n={p.n}
            title={p.title}
            tagline={p.tagline}
            status={p.status}
            accent="bg-lime text-ink"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.06}>
            <div className="hard relative aspect-video overflow-hidden bg-ink">
              <div className="dotgrid absolute inset-0 opacity-25" />
              {/* landmark skeleton */}
              <svg
                viewBox="0 0 200 120"
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-label="Abstract hand landmark tracking visualization"
              >
                {[
                  [100, 95, 100, 60],
                  [100, 60, 78, 38],
                  [100, 60, 92, 28],
                  [100, 60, 108, 26],
                  [100, 60, 122, 36],
                  [100, 60, 134, 54],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--lime)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * i }}
                  />
                ))}
                {[
                  [100, 95],
                  [100, 60],
                  [78, 38],
                  [92, 28],
                  [108, 26],
                  [122, 36],
                  [134, 54],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.6" fill="var(--pink)" />
                ))}
              </svg>
              <div className="absolute left-3 top-3 border-2 border-lime px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-lime">
                ● tracking · mediapipe
              </div>
              <div className="absolute bottom-3 left-3 right-3 border-2 border-paper bg-paper/95 p-3">
                <p className="label-mono text-muted-foreground">Translated output</p>
                <p className="display text-2xl">&ldquo;Thank you&rdquo;</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: 96.4, d: 1, s: "%", l: "Accuracy", cls: "bg-lime text-ink" },
              { v: 55, d: 0, s: "", l: "ASL classes", cls: "bg-cobalt text-background" },
              { v: 36, d: 0, s: "", l: "ISL classes", cls: "bg-violet text-background" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.06 * i}>
                <div className={"hard h-full p-5 " + s.cls}>
                  <p className="display text-[clamp(2rem,5vw,3.4rem)] leading-none">
                    <Counter to={s.v} decimals={s.d} suffix={s.s} />
                  </p>
                  <p className="label-mono mt-2 opacity-80">{s.l}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="hard h-full bg-amber p-5 text-ink">
                <p className="display text-2xl leading-tight">2nd runner-up</p>
                <p className="label-mono mt-2 opacity-80">TechFiesta Hackathon</p>
              </div>
            </Reveal>
            <div className="col-span-2">
              <Reveal delay={0.24}>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.body}
                </p>
                <Stack items={p.stack} />
                {p.code ? (
                  <div className="mt-6">
                    <ArrowLink href={p.code} external variant="solid" cursor="external">
                      GitHub ↗
                    </ArrowLink>
                  </div>
                ) : null}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

const projectComponents = [
  { id: "zepto", name: "Zepto Review Intelligence", component: <Zepto /> },
  { id: "hive", name: "Hive", component: <Hive /> },
  { id: "pitchos", name: "PitchOS", component: <PitchOS /> },
  { id: "signlang", name: "Sign Language Recognition", component: <SignLanguage /> },
];

export function Work() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? projectComponents.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === projectComponents.length - 1 ? 0 : c + 1));
  };

  return (
    <section id="projects" className="border-b-2 border-ink">
      <div className="border-b-2 border-ink px-5 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionHead
            index="04"
            label="Projects"
            tone="lime"
            title="Things I've built."
            sub={
              <>
                Some are products. Some are experiments. Some started because I couldn&apos;t stop
                asking &ldquo;why does this work like this?&rdquo;
              </>
            }
          />

          {/* Carousel controls header bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-2 border-ink bg-card p-4">
            {/* Direct selector tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {projectComponents.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={
                    "border-2 border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors " +
                    (current === i
                      ? "bg-lime font-bold text-ink"
                      : "bg-paper text-muted-foreground hover:bg-muted")
                  }
                >
                  0{i + 1}. {projects[i]?.title}
                </button>
              ))}
            </div>

            {/* Indicator & Arrow buttons */}
            <div className="flex items-center gap-3">
              <span className="label-mono border-2 border-ink bg-paper px-3 py-1.5 font-bold">
                0{current + 1} / 0{projectComponents.length}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                  className="flex h-10 w-12 items-center justify-center border-2 border-ink bg-paper text-lg font-bold transition-colors hover:bg-lime active:translate-y-0.5"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="flex h-10 w-12 items-center justify-center border-2 border-ink bg-paper text-lg font-bold transition-colors hover:bg-lime active:translate-y-0.5"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel active slide view */}
      <div className="relative overflow-hidden min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {projectComponents[current].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
