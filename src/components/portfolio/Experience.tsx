import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experience, impactStats } from "@/data/portfolio";
import { Counter, Reveal, SectionHead, TONE_BG, TONE_ON } from "./primitives";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="border-b-2 border-ink px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead index="03" label="Experience" tone="cobalt" title="Where I've been." />

        <div className="border-2 border-ink">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <div key={e.org} className={i > 0 ? "border-t-2 border-ink" : ""}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={
                    "flex w-full flex-col gap-2 p-5 text-left transition-colors md:flex-row md:items-center md:gap-6 md:p-7 " +
                    (isOpen ? TONE_BG[e.tone] + " " + TONE_ON[e.tone] : "hover:bg-muted")
                  }
                >
                  <span className="label-mono w-14 shrink-0 opacity-70">0{i + 1}</span>
                  <span className="display flex-1 text-[clamp(1.5rem,3.6vw,2.6rem)]">{e.org}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] md:w-56">
                    {e.role}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 md:w-64 md:text-right">
                    {e.when} · {e.place}
                  </span>
                  <span className="hidden text-2xl md:block">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t-2 border-ink bg-card"
                    >
                      <ul className="grid gap-3 p-5 md:grid-cols-2 md:p-7">
                        {e.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-1 size-2 shrink-0 border-2 border-ink" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 border-2 border-ink lg:grid-cols-4">
          {impactStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={
                "bg-paper p-5 md:p-7 " +
                (i < 3 ? "lg:border-r-2 lg:border-ink " : "") +
                (i % 2 === 0 ? "border-r-2 border-ink " : "") +
                (i < 2 ? "border-b-2 border-ink lg:border-b-0 " : "")
              }
            >
              <p className="display text-[clamp(2rem,5vw,3.6rem)] leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
