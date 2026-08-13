import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import { profile } from "@/data/portfolio";
import { ArrowLink } from "./primitives";
import { Sculpture } from "./Sculpture";

const line = (delay: number) => ({
  initial: { opacity: 0, y: "0.35em" },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  const words = profile.hero.split(" ");
  const chunks = [
    words.slice(0, 3).join(" "),
    words.slice(3, 6).join(" "),
    words.slice(6, 10).join(" "),
    words.slice(10).join(" "),
  ].filter(Boolean);

  return (
    <section
      id="top"
      className="grain relative flex min-h-[calc(100vh-65px)] flex-col justify-center overflow-hidden border-b-2 border-ink"
    >
      <div className="grid-paper absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="min-w-0">
          <motion.div {...line(0.15)} className="mb-4">
            <h1 className="display text-[clamp(2.8rem,7vw,6.2rem)] leading-[0.9] text-ink">
              <span className="marker-underline text-pink">{profile.name}</span>
            </h1>
          </motion.div>

          <motion.p
            {...line(0.25)}
            className="label-mono mb-6 inline-flex items-center gap-2 border-2 border-ink bg-paper px-3 py-1.5"
          >
            <span className="size-1.5 rounded-full bg-pink" />
            Portfolio — 2026 / Indore, IN
          </motion.p>

          <div className="display text-[clamp(1.8rem,4.5vw,3.8rem)] leading-[1.05]">
            {chunks.map((c, i) => (
              <span key={c} className="block">
                <motion.span {...line(0.35 + i * 0.09)} className="inline-block">
                  {i === 1 ? (
                    <span className="marker-underline">{c}</span>
                  ) : i === 3 ? (
                    <span className="font-serif normal-case italic tracking-normal text-violet">
                      {c}
                    </span>
                  ) : (
                    c
                  )}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.p
            {...line(0.8)}
            className="mt-7 font-mono text-sm uppercase tracking-[0.2em] text-ink md:text-base"
          >
            Product thinker. <span className="text-pink">Data analyst.</span> Builder.
          </motion.p>

          <motion.p
            {...line(0.88)}
            className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            {profile.intro}
          </motion.p>

          <motion.div {...line(0.98)} className="mt-8 flex flex-wrap gap-3">
            <ArrowLink href="#projects" variant="solid">
              Explore my projects →
            </ArrowLink>
            <ArrowLink href="#contact" variant="lime">
              Let&apos;s talk ↗
            </ArrowLink>
            <ArrowLink href={profile.linkedin} external variant="outline" cursor="external">
              Download resume ↓
            </ArrowLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[340px] md:min-h-[460px]"
        >
          <Sculpture mx={sx} my={sy} />
        </motion.div>
      </div>
    </section>
  );
}
