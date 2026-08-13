import { leadership } from "@/data/portfolio";
import { Reveal, SectionHead, TONE_BG, TONE_ON } from "./primitives";

export function Leadership() {
  return (
    <section id="leadership" className="border-b-2 border-ink bg-card px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead index="05" label="Leadership" tone="amber" title="Things I lead." />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {leadership.map((l, i) => (
            <Reveal key={l.role + l.org} delay={i * 0.06}>
              <article
                style={{ rotate: `${i % 2 ? 1 : -1}deg` }}
                className={
                  "hard lift flex h-full flex-col p-5 md:p-6 " +
                  TONE_BG[l.tone] +
                  " " +
                  TONE_ON[l.tone]
                }
              >
                <span className="label-mono opacity-70">0{i + 1}</span>
                <h3 className="mt-4 text-2xl leading-none">{l.role}</h3>
                <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] opacity-80">
                  {l.org}
                </p>
                <ul className="mt-auto space-y-1 pt-6">
                  {l.facts.map((f) => (
                    <li key={f} className="display text-2xl leading-tight">
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
