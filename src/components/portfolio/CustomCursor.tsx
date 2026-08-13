import { useEffect, useState } from "react";

type Mode = "default" | "link" | "project" | "external" | "image";

const LABEL: Record<Mode, string> = {
  default: "",
  link: "",
  project: "View project →",
  external: "↗",
  image: "Open",
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<Mode>("default");
  const [down, setDown] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    let raf = 0;
    let target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };

    const onMove = (e: PointerEvent) => {
      target = { x: e.clientX, y: e.clientY };
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor],a,button");
      const attr = el?.dataset?.["cursor"] as Mode | undefined;
      setMode(attr ?? (el ? "link" : "default"));
    };
    const loop = () => {
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;
      setPos({ x: current.x, y: current.y });
      raf = requestAnimationFrame(loop);
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  if (!enabled) return null;

  const label = LABEL[mode];
  const big = mode === "project" || mode === "image";
  const size = big ? 92 : mode === "link" || mode === "external" ? 44 : 12;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className="flex items-center justify-center rounded-full border-2 border-ink font-mono text-[10px] font-bold uppercase tracking-widest text-ink transition-[width,height,background-color] duration-200"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          background:
            mode === "default"
              ? "var(--ink)"
              : big
                ? "var(--lime)"
                : "color-mix(in oklab, var(--lime) 55%, transparent)",
          scale: down ? 0.85 : 1,
        }}
      >
        {label ? <span className="px-2 text-center leading-tight">{label}</span> : null}
      </div>
    </div>
  );
}
