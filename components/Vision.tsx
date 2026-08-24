"use client";

import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section id="vision" className="relative z-10 flex min-h-[92svh] flex-col justify-center px-[var(--gutter)]">
      <div className="mx-auto w-full max-w-[var(--maxw)]">
        <div className="border-t border-[var(--line)] pt-3" />

        <Reveal className="mt-[clamp(48px,12vh,140px)]">
          <p className="code mb-8">Our Vision</p>
          <h2 className="display display-lg max-w-[14ch]">
            Create the Future.
            <br />
            <span className="text-[var(--amber)]">Tell the Story.</span>
          </h2>
          <p className="mt-10 font-mono text-[0.72rem] tracking-[0.14em] text-[var(--muted)]">
            London · Hong Kong · Beijing · Shanghai · United States · More Cities Coming Soon
          </p>
          <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">
            Science · Cinema · Imagination · Artificial Intelligence
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-[clamp(48px,12vh,140px)] w-full max-w-[var(--maxw)]">
        <div className="rule" />
      </div>
    </section>
  );
}
