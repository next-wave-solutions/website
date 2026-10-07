"use client";

import { type RefObject, useEffect, useState } from "react";

/**
 * Flips to true (once) when the element comes within `rootMargin` of the viewport.
 * Used to defer heavy WebGL chunks until their section is about to be seen.
 */
export function useIsNearViewport<T extends Element>(
  ref: RefObject<T | null>,
  enabled = true,
  rootMargin = "100% 0px",
) {
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (!enabled || near) return;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, near, ref, rootMargin]);

  return near;
}

export function usePrefersReducedMotion() {
  // Assume reduced until measured — avoids briefly starting WebGL for reduced-motion users.
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return reduced;
}

export function useIsCompactViewport(maxWidth = 768) {
  // Progressive enhancement: assume compact until measured (no WebGL flash on mobile).
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [maxWidth]);

  return compact;
}

export function useResolvedTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const read = () => {
      const value = document.documentElement.dataset.theme;
      setTheme(value === "dark" ? "dark" : "light");
    };
    read();
    window.addEventListener("nw-theme-change", read);
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => {
      window.removeEventListener("nw-theme-change", read);
      observer.disconnect();
    };
  }, []);

  return theme;
}
