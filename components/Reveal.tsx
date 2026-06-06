"use client";

import { useRef, useEffect, useState, type ElementType, type ReactNode } from "react";

/**
 * Scroll ile görünür olunca içeriği yumuşakça beliren sarmalayıcı.
 * (IntersectionObserver; reduced-motion'da anında gösterir.)
 *
 * - `delay`: ms cinsinden gecikme (ızgaralarda staggered efekt için).
 * - `y`: başlangıç dikey ötelemesi (px).
 * - `as`: render edilecek HTML etiketi (varsayılan div).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
