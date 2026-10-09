"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/** Reveal once when scrolled into view. */
export function useReveal<T extends HTMLElement>(threshold = 0.18): [RefObject<T | null>, boolean, boolean] {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    setReady(true);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown, ready];
}

/** Current scroll position (throttled via rAF). */
export function useScrollY(): number {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return y;
}

/** Vertical parallax offset (px) as an element passes through the viewport. */
export function useParallax<T extends HTMLElement>(strength = 0.12): [RefObject<T | null>, number] {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        setOffset(-center * strength);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [strength]);
  return [ref, offset];
}
