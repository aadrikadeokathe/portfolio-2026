import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { ArrowLink, Reveal, SectionHead } from "./primitives";

export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="border-b-2 border-ink px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHead
            index="08"
            label="Contact"
            tone="pink"
            title="Let's make something."
            sub={
              <>
                Have a product problem? A startup idea? An interesting opportunity? Let&apos;s talk.
              </>
            }
          />

          <Reveal>
            <div className="flex flex-wrap gap-3" onMouseLeave={() => setOpen(false)}>
              <span onMouseEnter={() => setOpen(true)} className="inline-block">
                <ArrowLink href={`mailto:${profile.email}`} variant="solid" cursor="external">
                  Email me ↗
                </ArrowLink>
              </span>
              <ArrowLink href={profile.linkedin} external variant="lime" cursor="external">
                LinkedIn ↗
              </ArrowLink>
              <ArrowLink href={profile.github} external variant="outline" cursor="external">
                GitHub ↗
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-10 grid grid-cols-1 border-2 border-ink sm:grid-cols-2">
              <div className="border-b-2 border-ink p-5 sm:border-b-0 sm:border-r-2">
                <dt className="label-mono mb-2 text-muted-foreground">Email</dt>
                <dd className="break-all font-mono text-sm">{profile.email}</dd>
              </div>
              <div className="p-5">
                <dt className="label-mono mb-2 text-muted-foreground">Location</dt>
                <dd className="font-mono text-sm">{profile.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* paper-plane / envelope artifact */}
        <Reveal delay={0.1} className="flex items-center justify-center">
          <div style={{ perspective: 900 }} className="w-full max-w-sm">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: open ? -3 : 0 }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="hard-lg relative bg-card p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{ rotateX: open ? -155 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top center" }}
                className="absolute inset-x-0 top-0 h-24 border-b-2 border-ink bg-pink"
              >
                <div className="h-full w-full [clip-path:polygon(0_0,100%_0,50%_100%)] bg-pink" />
              </motion.div>
              <div className="relative mt-16 border-2 border-ink bg-paper p-4">
                <p className="label-mono text-muted-foreground">To:</p>
                <p className="display text-xl">Aadrika Deokathe</p>
                <p className="mt-3 font-serif text-lg italic text-muted-foreground">
                  &ldquo;I read everything. I reply to the interesting ones fast.&rdquo;
                </p>
                <div className="mt-4 flex gap-1">
                  <span className="h-2 flex-1 bg-violet" />
                  <span className="h-2 flex-1 bg-lime" />
                  <span className="h-2 flex-1 bg-amber" />
                  <span className="h-2 flex-1 bg-cobalt" />
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                hover &ldquo;email me&rdquo; to open
              </p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-paper md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="display text-[clamp(2rem,9vw,6rem)] leading-none">Aadrika.Deokathe</p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-lime">
          Product × Technology × Building
        </p>
        <p className="mt-8 max-w-md font-serif text-lg italic text-paper/70">
          Built with curiosity, caffeine and probably too many browser tabs.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-paper/25 pt-6 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="text-paper/60">© 2026 Aadrika Deokathe</span>
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="external"
              className="hover:text-lime"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="external"
              className="hover:text-lime"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} data-cursor="external" className="hover:text-lime">
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
