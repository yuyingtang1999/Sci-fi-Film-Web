"use client";

import { GROUPS, type Person } from "@/lib/data";
import Reveal from "./Reveal";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function Card({ p }: { p: Person }) {
  const NameTag: React.ElementType = p.link ? "a" : "span";
  const nameProps = p.link
    ? { href: p.link, target: "_blank", rel: "noopener noreferrer", className: "dlink font-display text-[1.02rem] font-semibold leading-tight" }
    : { className: "font-display text-[1.02rem] font-semibold leading-tight text-[var(--fg)]" };

  return (
    <figure className="group">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--line-2)] bg-[var(--panel)]">
        {p.photo ? (
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.photo}
              alt={p.name}
              className="h-full w-full object-cover"
              style={{
                objectPosition: p.photoPosition ?? "50% 50%",
                transform: `scale(${p.photoScale ?? 1})`,
                transformOrigin: p.photoOrigin ?? "50% 50%",
              }}
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-[1.5rem] tracking-[0.06em] text-[var(--amber)]">
            {initials(p.name)}
          </div>
        )}
        {/* soft corner ticks for the dossier feel */}
        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[rgba(214,164,90,0.06)]" />
      </div>

      <figcaption className="mt-3">
        <NameTag {...nameProps}>
          {p.name}
          {p.link && (
            <svg className="ml-1 inline-block -translate-y-px" width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path d="M2.5 7.5L7.5 2.5M3.5 2.5h4v4" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          )}
        </NameTag>
        <p className="mt-1 text-[0.8rem] leading-snug text-[var(--muted)]">{p.role}</p>
        {p.affiliation && (
          <p className="mt-1 font-mono text-[0.64rem] leading-snug tracking-[0.02em] text-[var(--amber)]">
            {p.affiliation}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

export default function People() {
  return (
    <section id="people" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="border-t border-[var(--line)] pt-3" />

      <Reveal className="mt-12">
        <h2 className="h-sec max-w-[18ch]">The Minds Behind the Initiative</h2>
        <p className="lede mt-5">
          An interdisciplinary community spanning artificial intelligence, science,
          film, media, art, and design.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {GROUPS.map((g) => (
          <div key={g.id}>
            <Reveal>
              <h3 className={`${g.description ? "mb-5" : "mb-8"} border-b border-[var(--line)] pb-3 font-display text-[1.05rem] font-semibold uppercase tracking-[0.04em] text-[var(--fg)]`}>
                {g.title}
              </h3>
            </Reveal>
            {g.description && (
              <Reveal>
                <p className="lede mb-8">
                  {g.description.prefix}
                  <strong className="font-semibold text-[var(--fg)]">{g.description.emphasis}</strong>
                  {g.description.suffix}
                </p>
              </Reveal>
            )}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {g.people.map((p, i) => (
                <Reveal key={p.name} delay={(i % 5) * 50}>
                  <Card p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
