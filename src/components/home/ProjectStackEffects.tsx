"use client";

import { useEffect } from "react";

/**
 * Drives the Projects scroll stack (React Bits "Scroll Stack" behaviour on
 * native `position: sticky`): sets `--cover` (0–1) on a panel while the next
 * one slides over it, and `data-in-view` so screen loops only run on screen.
 */
export function ProjectStackEffects() {
  useEffect(() => {
    const stack = document.querySelector<HTMLElement>("[data-project-stack]");
    if (!stack) return;
    const items = Array.from(stack.querySelectorAll<HTMLElement>("[data-stack-item]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.toggleAttribute("data-in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.35 },
    );
    items.forEach((item) => observer.observe(item));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduce.matches) return;
      const viewport = window.innerHeight;
      items.forEach((item, index) => {
        const next = items[index + 1];
        if (!next) return;
        const stickTop = parseFloat(getComputedStyle(next).top) || 0;
        const top = next.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (viewport - top) / Math.max(1, viewport - stickTop)));
        item.style.setProperty("--cover", progress.toFixed(3));
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      items.forEach((item) => item.style.removeProperty("--cover"));
    };
  }, []);

  return null;
}
