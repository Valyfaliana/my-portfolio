"use client";

import { useLayoutEffect, useRef, useState } from "react";

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setRevealed(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);

    const checkNow = () => {
      if (isInViewport(el)) {
        reveal();
        observer.disconnect();
      }
    };

    checkNow();
    requestAnimationFrame(checkNow);

    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}
