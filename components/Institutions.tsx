"use client";

import { INSTITUTIONS, type Institution } from "@/lib/data";
import Reveal from "./Reveal";

function Logo({ inst, featured }: { inst: Institution; featured: boolean }) {
  return (
    <figure className="flex h-full flex-col items-center justify-start text-center">
      <div className={`flex items-center justify-center px-2 ${featured ? "h-[88px]" : "h-[66px]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={inst.logo}
          alt={inst.name}
          className={`w-auto max-w-full object-contain ${featured ? "max-h-[84px]" : "max-h-[62px]"}`}
        />
      </div>
      <figcaption
        className={`mt-3 font-display leading-snug text-[#3a3020] ${
          featured ? "text-[0.82rem] font-semibold" : "text-[0.72rem] font-medium"
        }`}
      >
        {inst.name}
      </figcaption>
    </figure>
  );
}

export default function Institutions() {
  const featured = INSTITUTIONS.filter((i) => i.featured);
  const rest = INSTITUTIONS.filter((i) => !i.featured);

  return (
    <section id="partners" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="border-t border-[var(--line)] pt-3" />

      <Reveal className="mt-12">
        <h2 className="h-sec max-w-[16ch]">Collaborating institutions</h2>
        <p className="lede mt-5">
          The workshop brings together collaborators from universities, research
          organizations, and creative institutions across artificial intelligence,
          science, film, media, art, and design.
        </p>
      </Reveal>

      {/* All logos sit directly on one large light-gold panel. */}
      <Reveal className="mt-9 sm:mt-12">
        <div className="rounded-xl bg-[#ece1c2] p-4 sm:rounded-2xl sm:p-10">
          {/* Five primary institutions — first row, larger */}
          <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5">
            {featured.map((inst) => (
              <Logo key={inst.name} inst={inst} featured />
            ))}
          </div>

          <div className="my-6 h-px w-full bg-[rgba(0,0,0,0.08)] sm:my-8" />

          {/* Remaining institutions — six per row */}
          <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-6">
            {rest.map((inst) => (
              <Logo key={inst.name} inst={inst} featured={false} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
