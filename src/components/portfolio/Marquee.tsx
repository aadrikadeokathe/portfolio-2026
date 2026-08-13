import { marqueeWords } from "@/data/portfolio";

export function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden border-b-2 border-ink bg-ink py-3 text-paper">
      <div
        className="flex w-max gap-8 whitespace-nowrap"
        style={{ animation: "scroll-x 34s linear infinite" }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8">
            {row.map((w, i) => (
              <span key={`${dup}-${w}-${i}`} className="flex items-center gap-8">
                <span
                  className={
                    "display text-2xl md:text-4xl " +
                    (i % 4 === 1
                      ? "text-lime"
                      : i % 4 === 2
                        ? "text-pink"
                        : i % 4 === 3
                          ? "text-amber"
                          : "")
                  }
                >
                  {w}
                </span>
                <span className="text-lg text-violet">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
