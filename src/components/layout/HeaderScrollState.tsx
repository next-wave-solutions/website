"use client";

import { useEffect } from "react";

/** Header surface threshold, in px scrolled. */
const SCROLLED_AT = 12;

/**
 * Scroll-dependent header state, written straight to the DOM (no React re-renders):
 * - `data-scrolled` on the header: it gains a readable surface once content passes under it;
 * - `--scroll-progress` (0–1): reading progress line;
 * - `aria-current` on the in-page link whose section is under the reading line;
 * - `data-cta`: "quiet" while the Hero's own CTA is on screen, "lit" once it is gone;
 * - `data-glass="liquid"` where SVG backdrop filters are supported (Chromium).
 */
export function HeaderScrollState() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header) return;

    const brands = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } })
      .userAgentData?.brands;
    if (brands?.some(({ brand }) => brand === "Chromium")) header.dataset.glass = "liquid";

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      header.dataset.scrolled = window.scrollY > SCROLLED_AT ? "true" : "false";
      header.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const links = Array.from(header.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]'));
    const ids = [...new Set(links.map((link) => link.hash.slice(1)))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const setCurrent = (id: string | null) => {
      for (const link of links) {
        if (link.hash === `#${id}`) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      }
    };

    const visible = new Set<string>();
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setCurrent(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => spy.observe(section));

    const heroCta = document.querySelector("[data-hero-cta]");
    const ctaWatch = new IntersectionObserver(([entry]) => {
      header.dataset.cta = entry.isIntersecting ? "quiet" : "lit";
    });
    if (heroCta) ctaWatch.observe(heroCta);
    else header.dataset.cta = "lit";

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      spy.disconnect();
      ctaWatch.disconnect();
      setCurrent(null);
    };
  }, []);

  return null;
}
