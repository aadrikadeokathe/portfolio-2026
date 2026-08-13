import { process } from "@/data/portfolio";
import { Reveal, TONE_BG, TONE_ON } from "./primitives";

export function Process() {
  return (
    <section
      id="process"
      className="border-b-2 border-ink bg-card flex min-h-[calc(100vh-65px)] flex-col justify-center px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="label-mono mb-5 inline-block border-2 border-ink px-2 py-1">
            02 / Method
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display max-w-3xl text-[clamp(2.2rem,6.5vw,5rem)]">
            I don&apos;t just build.
            <br />
            <span className="font-serif normal-case italic tracking-normal text-pink">
              I investigate.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border-2 border-ink md:grid-cols-2 xl:grid-cols-4">
          {process.map((s, i) => (
            <div
              key={s.n}
              className={
                "group relative overflow-hidden bg-paper p-6 transition-colors duration-300 md:p-8 " +
                (i < 3 ? "border-b-2 border-ink xl:border-b-0 xl:border-r-2 " : "") +
                (i % 2 === 0 ? "md:border-r-2 md:border-ink " : "") +
                "hover:" +
                TONE_BG[s.tone]
              }
            >
              <span
                aria-hidden
                className={
                  "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 " +
                  TONE_BG[s.tone]
                }
              />
              <div className={"relative " + "group-hover:" + TONE_ON[s.tone]}>
                <p className="display text-6xl leading-none opacity-25 transition-opacity group-hover:opacity-100 md:text-7xl">
                  {s.n}
                </p>
                <h3 className="mt-6 text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-current">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
