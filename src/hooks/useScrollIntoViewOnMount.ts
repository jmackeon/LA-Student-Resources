import { useEffect, useRef } from "react";

/** Smoothly scrolls the returned ref's element into view once, when it mounts. Respects prefers-reduced-motion. */
export function useScrollIntoViewOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ref.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, []);

  return ref;
}
