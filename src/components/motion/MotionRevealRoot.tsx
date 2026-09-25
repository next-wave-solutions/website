"use client";

import { useEffect } from "react";

const SELECTOR = ".motion-reveal, .motion-draw";

/**
 * Progressive-enhancement observer for `.motion-reveal` elements.
 * Without JS / with reduced motion, content stays fully visible.
 */
export function MotionRevealRoot() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const markAll = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        el.classList.add("is-revealed");
      });
    };

    if (media.matches) {
      markAll();
      return;
    }

    root.dataset.motion = "ready";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08,
      },
    );

    const watch = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains("is-revealed")) return;
        observer.observe(el);
      });
    };

    watch();

    const mutations = new MutationObserver(watch);
    mutations.observe(document.body, { childList: true, subtree: true });

    const onPreferenceChange = () => {
      if (!media.matches) return;
      delete root.dataset.motion;
      markAll();
      observer.disconnect();
    };

    media.addEventListener("change", onPreferenceChange);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      media.removeEventListener("change", onPreferenceChange);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
