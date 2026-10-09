"use client";

import { useReveal } from "./hooks";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, shown, ready] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${ready ? "reveal-ready" : ""} ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
