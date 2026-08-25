"use client";

export default function Hero() {
  return (
    <section id="top" className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[var(--gutter)] pb-8 pt-20 max-sm:pb-6 max-sm:pt-24">
      <div className="mx-auto w-full max-w-[var(--maxw)]">
        <div className="border-b border-[var(--line)] pb-3">
          <span
            className="code block whitespace-normal sm:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-mono-stack)",
              fontSize: "clamp(0.76rem, 2.2vw, 2.04rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              lineHeight: 1.15,
            }}
          >
            Science × Art × AI Global Co-Creation Initiative
          </span>
        </div>

        <div className="mt-[clamp(0.333rem,0.667vh,0.5rem)]">
          <h1 className="display display-xl max-w-none" style={{ lineHeight: 0.9 }}>
            Human–AI <span className="max-sm:hidden">Co-Creation</span>
            <span className="hidden max-sm:inline"><br />Co-Creation</span><br />
            for <span className="text-[var(--amber)]">Science Fiction</span><br />
            Filmmaking
          </h1>
          <p className="mt-6 max-w-[46ch] font-display text-[1rem] font-medium leading-snug text-[var(--muted)] sm:mt-8 sm:text-[1.4rem]">
            Imagining Future Worlds through Human–AI Co-Creation.
          </p>
        </div>

        <div className="mt-[clamp(2.25rem,5vh,3.5rem)]">
          <div className="flex items-end justify-between gap-4 border-t border-[var(--line)] pt-3">
            <span className="code max-w-[75%] leading-relaxed">Science · Cinema · Imagination · AI</span>
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
      </div>
    </section>
  );
}
