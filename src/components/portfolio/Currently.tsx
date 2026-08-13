import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { looking } from "@/data/portfolio";
import { Reveal } from "./primitives";

export function Currently() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % looking.words.length), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section className="grain relative overflow-hidden border-b-2 border-ink bg-violet px-5 py-16 text-background md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="label-mono mb-6 inline-block border-2 border-background px-2 py-1">
            07 / Currently
          </span>
        </Reveal>

        <h2 className="display text-[clamp(2.6rem,10vw,8rem)] leading-[0.85]">
          Right now I&apos;m
          <br />
          <span className="inline-flex min-h-[1em] items-baseline">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={looking.words[i]}
                initial={{ opacity: 0, y: "0.25em" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-0.25em" }}
                transition={{ duration: 0.35 }}
                className="bg-lime px-3 text-ink"
              >
                {looking.words[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Reveal className="md:col-span-3">
            <p className="font-serif text-2xl italic md:text-3xl">{looking.line}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="border-2 border-background p-5">
              <p className="label-mono mb-3 opacity-70">Cities</p>
              <ul className="space-y-1">
                {looking.cities.map((c) => (
                  <li key={c} className="display text-2xl">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-2 border-background bg-pink p-5">
              <p className="label-mono mb-3 opacity-80">Timeline</p>
              <p className="display text-3xl leading-tight">{looking.timeline}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-2 border-background bg-lime p-5 text-ink">
              <p className="label-mono mb-3 opacity-70">Open to</p>
              <ul className="space-y-1">
                {looking.open.map((o) => (
                  <li key={o} className="display text-2xl leading-tight">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
