"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "brief", label: "Brief" },
  { id: "people", label: "People" },
  { id: "partners", label: "Partners" },
  { id: "vision", label: "Vision" },
];

export default function NavBar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: solid ? "rgba(11,10,8,0.82)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: `1px solid ${solid ? "var(--line)" : "transparent"}`,
      }}
    >
      <nav className="mx-auto flex max-w-[var(--maxw)] items-center justify-between px-[var(--gutter)] py-3.5">
        <button onClick={() => go("top")} className="group flex items-center gap-3 text-left">
          <span className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.1em] text-[var(--fg)] sm:text-[0.74rem] sm:tracking-[0.14em]">
            Human–AI Co-Creation
          </span>
        </button>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--amber-bright)]"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            className="flex h-8 w-8 items-center justify-center border border-[var(--line-2)] md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <div className="space-y-[3px]">
              <span className="block h-px w-4 bg-[var(--fg)]" />
              <span className="block h-px w-4 bg-[var(--fg)]" />
              <span className="block h-px w-4 bg-[var(--fg)]" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[rgba(11,10,8,0.96)] px-[var(--gutter)] py-4 md:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full py-2 text-left font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
