import { motion, useTransform, type MotionValue } from "motion/react";
import { heroLabels } from "@/data/portfolio";

const bars = [62, 88, 40, 96, 54, 74];

const labelPos = [
  { top: "2%", left: "4%" },
  { top: "14%", right: "-2%" },
  { top: "48%", left: "-4%" },
  { bottom: "20%", right: "0%" },
  { bottom: "2%", left: "10%" },
  { top: "32%", right: "12%" },
];

/**
 * CSS 3D "product artifact": stacked interface panels — a data chart,
 * a review/DB panel and a prioritization tile — rotating with the cursor.
 * No WebGL: fast, SSR-safe, degrades to a static composition.
 */
export function Sculpture({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  const rotY = useTransform(mx, [-1, 1], [-16, 16]);
  const rotX = useTransform(my, [-1, 1], [12, -12]);

  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
      <div style={{ perspective: 1200 }} className="relative h-full w-full max-w-[520px]">
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          className="relative h-full w-full"
        >
          {/* base plate */}
          <div
            style={{ transform: "translateZ(-70px) rotate(-6deg)" }}
            className="dotgrid absolute inset-x-6 inset-y-12 border-2 border-ink/30"
          />

          {/* chart panel */}
          <motion.div
            style={{ transform: "translateZ(20px) rotate(-4deg)" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hard-lg absolute left-[6%] top-[8%] w-[62%] bg-card p-4"
          >
            <p className="label-mono mb-3 text-muted-foreground">Sentiment / 8,000 reviews</p>
            <div className="flex h-24 items-end gap-2">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className={
                    i === 3 ? "flex-1 bg-pink" : i % 2 ? "flex-1 bg-cobalt" : "flex-1 bg-lime"
                  }
                  initial={{ height: "10%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ border: "2px solid var(--ink)" }}
                />
              ))}
            </div>
          </motion.div>

          {/* db / rows panel */}
          <motion.div
            style={{ transform: "translateZ(70px) rotate(5deg)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="hard absolute bottom-[16%] right-[2%] w-[54%] bg-paper p-3"
          >
            <div className="mb-2 flex items-center gap-1">
              <span className="size-2 border-2 border-ink bg-pink" />
              <span className="size-2 border-2 border-ink bg-amber" />
              <span className="size-2 border-2 border-ink bg-lime" />
              <span className="label-mono ml-auto text-muted-foreground">rice.sim</span>
            </div>
            {["Delivery delays", "Wrong items", "Refund flow"].map((r, i) => (
              <div
                key={r}
                className="flex items-center justify-between border-t border-ink/15 py-1.5 font-mono text-[10px] uppercase"
              >
                <span>{r}</span>
                <span className={i === 0 ? "text-pink" : "text-muted-foreground"}>
                  {[92, 64, 41][i]}
                </span>
              </div>
            ))}
          </motion.div>

          {/* stat chip */}
          <motion.div
            style={{ transform: "translateZ(120px) rotate(-8deg)" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hard absolute bottom-[6%] left-[2%] bg-violet px-4 py-3 text-background"
          >
            <p className="display text-3xl leading-none">2.6×</p>
            <p className="label-mono mt-1 opacity-80">worse</p>
          </motion.div>

          {/* floating labels */}
          {heroLabels.map((l, i) => (
            <motion.span
              key={l}
              style={{
                transform: `translateZ(${140 + i * 12}px)`,
                ...labelPos[i],
              }}
              animate={{ y: [0, i % 2 ? 9 : -9, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="absolute border-2 border-ink bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              {l}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
