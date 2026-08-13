import { profile } from "@/data/portfolio";
import { Annotation, Reveal, SectionHead, Sticky } from "./primitives";

export function About() {
  return (
    <section
      id="about"
      className="border-b-2 border-ink flex min-h-[calc(100vh-65px)] flex-col justify-center px-5 py-8 md:px-8 md:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHead
          index="01"
          label="About"
          tone="pink"
          title={
            <>
              So, what do I <span className="font-serif normal-case italic">actually</span> do?
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:items-center">
          {/* left: artifact column */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="hard-lg grain relative bg-card p-4">
                <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden border-2 border-ink bg-paper">
                  <img
                    src="/aadrika.jpg"
                    alt="Aadrika Deokathe"
                    className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 right-2 border-2 border-ink bg-paper/95 p-2 backdrop-blur-sm">
                    <div className="mb-1 flex gap-1">
                      <span className="h-1.5 flex-1 bg-pink" />
                      <span className="h-1.5 flex-1 bg-violet" />
                      <span className="h-1.5 flex-1 bg-lime" />
                      <span className="h-1.5 flex-1 bg-cobalt" />
                    </div>
                    <p className="display text-lg leading-none text-ink">Aadrika Deokathe</p>
                    <p className="label-mono mt-0.5 text-[9px] text-muted-foreground">
                      NMIMS Indore · CE &apos;26
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>22.72° N, 75.86° E</span>
                  <span>fig. 01</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rule-box bg-paper p-4">
                <p className="label-mono mb-2 text-muted-foreground">Currently:</p>
                <ul className="space-y-1.5">
                  {profile.currently.map((c) => (
                    <li key={c} className="flex items-baseline gap-2 font-mono text-xs uppercase">
                      <span className="text-pink">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* right: editorial text */}
          <div className="relative">
            <Reveal>
              <p className="text-[clamp(1.05rem,2vw,1.45rem)] leading-[1.4]">{profile.about[0]}</p>
            </Reveal>

            <div className="my-5 flex flex-wrap items-center gap-3">
              <Sticky tone="lime" rotate={-2}>
                Founder · Hive
              </Sticky>
              <Sticky tone="violet" rotate={2}>
                PM Intern · Start Tech
              </Sticky>
              <Sticky tone="cobalt" rotate={-1}>
                Red Bull Student Marketeer
              </Sticky>
              <Annotation rotate={-4}>data &gt; vibes →</Annotation>
            </div>

            <Reveal delay={0.06}>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {profile.about[1]}
              </p>
            </Reveal>

            {/* tiny timeline */}
            <Reveal delay={0.1}>
              <div className="mt-6 grid grid-cols-2 border-2 border-ink sm:grid-cols-4">
                {[
                  ["2024", "MU20 · AI + analytics"],
                  ["2025", "Red Bull · campaigns"],
                  ["2025", "Hive · co-founded"],
                  ["2026", "Start Tech · PM"],
                ].map(([y, t], i) => (
                  <div
                    key={`${y}-${i}`}
                    className={
                      "p-3 " +
                      (i < 3 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-ink " : "") +
                      (i % 2 === 0 ? "border-r-2 sm:border-r-2 " : "")
                    }
                  >
                    <p className="display text-xl">{y}</p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
