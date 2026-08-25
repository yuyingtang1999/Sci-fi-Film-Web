"use client";

import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section id="vision" className="relative z-10 flex min-h-[92svh] flex-col justify-center px-[var(--gutter)] py-16 sm:py-0">
      <div className="mx-auto w-full max-w-[var(--maxw)]">
        <div className="border-t border-[var(--line)] pt-3" />

        <Reveal className="mt-[clamp(48px,12vh,140px)]">
          <p className="code mb-8">Our Vision</p>
          <h2 className="display display-lg max-w-[14ch]">
            Create the Future.
            <br />
            <span className="text-[var(--amber)]">Tell the Story.</span>
          </h2>
          <p className="mt-8 max-w-[48rem] font-mono text-[0.66rem] leading-relaxed tracking-[0.08em] text-[var(--muted)] sm:mt-10 sm:text-[0.72rem] sm:tracking-[0.14em]">
            London · Hong Kong · Beijing · Shanghai · United States · More Cities Coming Soon
          </p>
          <p className="mt-4 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.14em] text-[var(--muted)] sm:text-[0.72rem] sm:tracking-[0.22em]">
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
