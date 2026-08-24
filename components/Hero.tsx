"use client";

export default function Hero() {
  return (
    <section id="top" className="relative z-10 flex min-h-[100svh] flex-col px-[var(--gutter)] pt-24 pb-8">
      <div className="mx-auto w-full max-w-[var(--maxw)]">
        <div className="border-b border-[var(--line)] pb-3">
          <span className="code">Science × Art × AI Global Co-Creation Initiative</span>
        </div>
      </div>

      <div className="mx-auto mt-[clamp(0.333rem,0.667vh,0.5rem)] w-full max-w-[var(--maxw)]">
        <h1 className="display display-xl max-w-none" style={{ lineHeight: 0.9 }}>
          Human–AI Co-Creation<br />
          for <span className="text-[var(--amber)]">Science Fiction</span><br />
          Filmmaking
        </h1>
        <p className="mt-8 max-w-[46ch] font-display text-[1.15rem] font-medium text-[var(--muted)] sm:text-[1.4rem]">
          Imagining Future Worlds through Human–AI Co-Creation.
        </p>
      </div>

      <div className="mx-auto mt-[clamp(2.25rem,5vh,3.5rem)] w-full max-w-[var(--maxw)]">
        <div className="flex items-end justify-between border-t border-[var(--line)] pt-3">
          <span className="code">Science · Cinema · Imagination · AI</span>
          <button
            onClick={() => document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--faint)] transition-colors hover:text-[var(--fg)]"
          >
            Enter
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" style={{ animation: "floatY 2.4s ease-in-out infinite" }}>
              <path d="M5 1v13M1 10l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
