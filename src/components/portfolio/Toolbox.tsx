import { useState } from "react";
import { toolbox } from "@/data/portfolio";
import { Reveal, SectionHead, TONE_BG, TONE_ON } from "./primitives";

export function Toolbox() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="toolbox" className="border-b-2 border-ink px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          index="06"
          label="Toolbox"
          tone="violet"
          title="What's in the kit."
          sub="Hover anything — it'll tell you where I actually used it."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {toolbox.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05}>
              <div className="hard h-full bg-card">
                <p
                  className={
                    "label-mono border-b-2 border-ink px-4 py-2 " +
                    TONE_BG[g.tone] +
                    " " +
                    TONE_ON[g.tone]
                  }
                >
                  {g.group}
                </p>
                <ul className="p-3">
                  {g.items.map((it) => {
                    const key = g.group + it.name;
                    const on = hovered === key;
                    return (
                      <li
                        key={key}
                        onMouseEnter={() => setHovered(key)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(key)}
                        onBlur={() => setHovered(null)}
                        tabIndex={0}
                        className="group flex cursor-default items-baseline justify-between gap-3 border-b border-ink/10 px-2 py-2 last:border-0 hover:bg-muted"
                      >
                        <span className="font-mono text-xs uppercase tracking-wide">{it.name}</span>
                        <span
                          className={
                            "text-right font-serif text-sm italic leading-tight text-muted-foreground transition-opacity duration-200 " +
                            (on ? "opacity-100" : "opacity-0")
                          }
                        >
                          {it.note}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
