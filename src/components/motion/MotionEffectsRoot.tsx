"use client";

import { useEffect } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const FINE_POINTER = "(hover: hover) and (pointer: fine)";
/** Max magnetic pull, in px. */
const MAGNET_RANGE = 6;

/**
 * Page-wide, DOM-only motion effects (no React re-renders):
 * - `[data-scroll-progress="exit"]` → `--exit` (0–1) while the element scrolls out the top;
 * - `[data-scroll-progress="read"]` → `--read` (0–1) as the element crosses the reading area;
 * - `[data-active-group]` → `data-active` on the `[data-active-item]` nearest the viewport middle;
 * - `[data-spotlight]` → `--spot-x` / `--spot-y` pointer position, `data-spot` while hovered;
 * - `[data-magnetic]` → a small pull toward the pointer.
 * Pointer effects only run on fine pointers; everything stays off with reduced motion.
 */
export function MotionEffectsRoot() {
  useEffect(() => {
    const reduced = window.matchMedia(REDUCED_MOTION);
    const fine = window.matchMedia(FINE_POINTER);
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointer: PointerEvent | null = null;
    let spotlight: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;

    const updateActive = (viewport: number) => {
      document.querySelectorAll<HTMLElement>("[data-active-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-active-item]");
        const rect = group.getBoundingClientRect();
        let active: HTMLElement | null = null;
        if (rect.bottom > viewport * 0.2 && rect.top < viewport * 0.8) {
          let closest = Infinity;
          items.forEach((item) => {
            const box = item.getBoundingClientRect();
            const distance = Math.abs(box.top + box.height / 2 - viewport * 0.5);
            if (distance < closest) {
              closest = distance;
              active = item;
            }
          });
        }
        items.forEach((item) => {
          if (item.hasAttribute("data-active") !== (item === active)) {
            item.toggleAttribute("data-active", item === active);
          }
        });
      });
    };

    const updateScroll = () => {
      scrollFrame = 0;
      const viewport = window.innerHeight;
      updateActive(viewport);
      document.querySelectorAll<HTMLElement>("[data-scroll-progress]").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -viewport || rect.top > viewport * 2) return;
        if (element.dataset.scrollProgress === "exit") {
          const exit = Math.min(1, Math.max(0, -rect.top / rect.height));
          element.style.setProperty("--exit", exit.toFixed(4));
        } else {
          const read = (viewport * 0.9 - rect.top) / (viewport * 0.35 + rect.height * 0.5);
          element.style.setProperty("--read", Math.min(1, Math.max(0, read)).toFixed(4));
        }
      });
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
    };

    const release = () => {
      spotlight?.removeAttribute("data-spot");
      if (magnet) magnet.style.translate = "";
      spotlight = null;
      magnet = null;
    };

    const updatePointer = () => {
      pointerFrame = 0;
      if (!pointer) return;
      const target = pointer.target instanceof Element ? pointer.target : null;

      const nextSpotlight = target?.closest<HTMLElement>("[data-spotlight]") ?? null;
      if (nextSpotlight !== spotlight) spotlight?.removeAttribute("data-spot");
      spotlight = nextSpotlight;
      if (spotlight) {
        const rect = spotlight.getBoundingClientRect();
        spotlight.style.setProperty("--spot-x", `${pointer.clientX - rect.left}px`);
        spotlight.style.setProperty("--spot-y", `${pointer.clientY - rect.top}px`);
        spotlight.setAttribute("data-spot", "");
      }

      const nextMagnet = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (nextMagnet !== magnet && magnet) magnet.style.translate = "";
      magnet = nextMagnet;
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const pull = (offset: number, size: number) =>
          Math.max(-MAGNET_RANGE, Math.min(MAGNET_RANGE, (offset / size) * MAGNET_RANGE * 2));
        const x = pull(pointer.clientX - (rect.left + rect.width / 2), rect.width);
        const y = pull(pointer.clientY - (rect.top + rect.height / 2), rect.height);
        magnet.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = event;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(updatePointer);
    };

    const onPointerLeave = () => {
      pointer = null;
      release();
    };

    let active = false;
    const sync = () => {
      const enable = !reduced.matches;
      if (enable && !active) {
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        updateScroll();
      } else if (!enable && active) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        document.querySelectorAll<HTMLElement>("[data-scroll-progress]").forEach((element) => {
          element.style.removeProperty("--exit");
          element.style.removeProperty("--read");
        });
        document.querySelectorAll("[data-active]").forEach((item) => item.removeAttribute("data-active"));
      }

      const pointerOn = enable && fine.matches;
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      if (pointerOn) {
        document.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);
      } else {
        release();
      }
      active = enable;
    };

    sync();
    reduced.addEventListener("change", sync);
    fine.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reduced.removeEventListener("change", sync);
      fine.removeEventListener("change", sync);
      release();
    };
  }, []);

  return null;
}
