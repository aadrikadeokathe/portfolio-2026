import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#toolbox", label: "Playground" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-[200] border-b-2 border-ink bg-paper/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1400px] items-stretch">
          <a
            href="#top"
            className="flex shrink-0 items-center border-r-2 border-ink px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] md:px-6"
          >
            Aadrika.Deokathe
          </a>
          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-8 lg:flex"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-violet"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-2 border-l-2 border-ink bg-lime px-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink md:flex">
            <span
              className="inline-block size-2 rounded-full bg-ink"
              style={{ animation: "blink-dot 1.6s infinite" }}
            />
            {profile.status}
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="ml-auto border-l-2 border-ink bg-ink px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper lg:hidden"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[300] flex flex-col bg-ink text-paper"
          >
            <div className="flex items-center justify-between border-b-2 border-paper/30 px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                Aadrika.Deokathe
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="bg-lime px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="display border-b border-paper/20 py-3 text-[13vw] leading-none"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center gap-2 border-t-2 border-paper/30 bg-lime px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink">
              <span className="inline-block size-2 rounded-full bg-ink" />
              {profile.status}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
