"use client";

import { useEffect, useId, useRef } from "react";

type Point = readonly [number, number];

type FlowPathProps = {
  className?: string;
  /**
   * `scroll`: the line draws with scroll progress.
   * `loop`: it draws itself once in view, then breathes and carries a light pulse along the
   * nodes on its own, marking the node the pulse last passed with `data-current`.
   */
  mode?: "scroll" | "loop";
  /** Shows a small marker at the tip of the line (scroll) or of the pulse (loop). */
  head?: boolean;
};

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
/** Loop timings, in ms. */
const DRAW_MS = 1600;
const TRAVEL_MS = 5200;
/** Pause on the last node before the pulse starts over. */
const HOLD_MS = 1900;
/** Breathing amplitude across the line, in px. */
const BREATHE_PX = 7;

/** Catmull-Rom spline through every point, as cubic Bézier segments. */
function toSegments(points: Point[]) {
  return points.slice(1).map((p2, index) => {
    const p1 = points[index];
    const p0 = points[index - 1] ?? p1;
    const p3 = points[index + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    return `C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
  });
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Wave line drawn through the parent's `[data-flow-node]` elements, measured from the real
 * layout so it always meets them. Reached nodes get `data-reached`.
 * The parent must be positioned; the SVG is decorative.
 */
export function FlowPath({ className, mode = "scroll", head = false }: FlowPathProps) {
  const gradientId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = svg?.parentElement;
    const track = trackRef.current;
    const line = lineRef.current;
    const pulse = pulseRef.current;
    const measure = measureRef.current;
    const gradient = gradientRef.current;
    if (!svg || !container || !track || !line || !pulse || !measure || !gradient) return;

    const reduced = window.matchMedia(REDUCED_MOTION);
    let nodes: HTMLElement[] = [];
    let base: Point[] = [];
    let horizontal = true;
    let stops: number[] = [];
    let length = 0;
    let frame = 0;

    /* Offsets ignore transforms, so reveal animations in progress don't skew the points */
    const centerOf = (node: HTMLElement): Point | null => {
      if (!node.offsetWidth) return null;
      let x = node.offsetWidth / 2;
      let y = node.offsetHeight / 2;
      let element: HTMLElement | null = node;
      while (element && element !== container) {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent as HTMLElement | null;
      }
      return element === container ? [Math.round(x * 10) / 10, Math.round(y * 10) / 10] : null;
    };

    const setPath = (points: Point[]) => {
      const segments = toSegments(points);
      const start = `M${points[0][0]} ${points[0][1]}`;
      const d = `${start}${segments.join("")}`;
      track.setAttribute("d", d);
      line.setAttribute("d", d);
      pulse.setAttribute("d", d);
      length = line.getTotalLength();
      stops = points.map((_, index) => {
        if (index === 0) return 0;
        measure.setAttribute("d", `${start}${segments.slice(0, index).join("")}`);
        return measure.getTotalLength();
      });
    };

    const layout = () => {
      const all = Array.from(container.querySelectorAll<HTMLElement>("[data-flow-node]"));
      const centers = all.map(centerOf);
      nodes = all.filter((_, index) => centers[index] !== null);
      base = centers.filter((point): point is Point => point !== null);
      const hidden = getComputedStyle(svg).display === "none";

      if (hidden || base.length < 2) {
        length = 0;
        delete container.dataset.flowReady;
        return false;
      }

      const xs = base.map(([x]) => x);
      const ys = base.map(([, y]) => y);
      horizontal = Math.max(...xs) - Math.min(...xs) >= Math.max(...ys) - Math.min(...ys);
      svg.setAttribute("viewBox", `0 0 ${container.offsetWidth} ${container.offsetHeight}`);
      setPath(base);

      const [first, last] = [base[0], base[base.length - 1]];
      gradient.setAttribute("x1", String(first[0]));
      gradient.setAttribute("y1", String(first[1]));
      gradient.setAttribute("x2", String(last[0]));
      gradient.setAttribute("y2", String(last[1]));
      container.dataset.flowReady = "";
      return true;
    };

    const markNodes = (drawn: number, current: number) => {
      nodes.forEach((node, index) => {
        const reached = stops[index] !== undefined && stops[index] <= drawn + 0.5;
        if (reached !== node.hasAttribute("data-reached")) node.toggleAttribute("data-reached", reached);
        const isCurrent = index === current;
        if (isCurrent !== node.hasAttribute("data-current")) node.toggleAttribute("data-current", isCurrent);
      });
    };

    const placeHead = (at: number, visible: boolean) => {
      const tip = headRef.current;
      if (!tip) return;
      const point = line.getPointAtLength(at);
      tip.setAttribute("transform", `translate(${point.x} ${point.y})`);
      tip.style.opacity = visible ? "1" : "0";
    };

    const drawLine = (drawn: number) => {
      line.style.strokeDasharray = `${length} ${length}`;
      line.style.strokeDashoffset = String(length - drawn);
    };

    let cleanupMode = () => {};

    if (mode === "loop") {
      let visible = false;
      let started = 0;
      let last = 0;
      let elapsed = 0;

      const render = (time: number) => {
        frame = 0;
        if (!length && !layout()) return;
        if (last) elapsed += time - last;
        last = time;
        if (!started) started = 1;

        /* Breathing: nodes and line drift together, a little out of phase with each other */
        const phase = elapsed / 1000;
        const points = base.map(([x, y], index): Point => {
          const drift = Math.sin(phase * 0.9 + index * 1.25) * BREATHE_PX;
          return horizontal ? [x, y + drift] : [x + drift * 0.45, y];
        });
        nodes.forEach((node, index) => {
          const [dx, dy] = [points[index][0] - base[index][0], points[index][1] - base[index][1]];
          node.style.translate = `${dx.toFixed(2)}px ${dy.toFixed(2)}px`;
        });
        setPath(points);

        const draw = Math.min(1, elapsed / DRAW_MS);
        drawLine(length * easeOut(draw));

        if (draw < 1) {
          markNodes(length * easeOut(draw), -1);
          placeHead(length * easeOut(draw), head);
          pulse.style.opacity = "0";
        } else {
          const cycle = (elapsed - DRAW_MS) % (TRAVEL_MS + HOLD_MS);
          const travel = Math.min(1, cycle / TRAVEL_MS);
          const at = length * travel;
          let current = -1;
          stops.forEach((stop, index) => {
            if (stop <= at + 1) current = index;
          });
          markNodes(length, current);
          placeHead(at, head && cycle < TRAVEL_MS + HOLD_MS - 600);
          const trail = Math.min(140, length * 0.22);
          pulse.style.strokeDasharray = `${trail} ${length * 2}`;
          pulse.style.strokeDashoffset = String(trail - at);
          pulse.style.opacity = travel < 1 ? "1" : "0";
        }

        if (visible) frame = requestAnimationFrame(render);
      };

      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !reduced.matches) {
            last = 0;
            if (!frame) frame = requestAnimationFrame(render);
          }
        },
        { threshold: 0.25 },
      );

      const showStatic = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        if (!layout()) return;
        nodes.forEach((node) => (node.style.translate = ""));
        drawLine(length);
        markNodes(length, -1);
        placeHead(0, false);
        pulse.style.opacity = "0";
      };

      const onReducedChange = () => {
        if (reduced.matches) showStatic();
        else if (visible && !frame) frame = requestAnimationFrame(render);
      };

      const relayout = () => {
        if (!layout()) return;
        if (reduced.matches) showStatic();
        else if (!started) {
          drawLine(0);
          markNodes(0, -1);
        }
      };

      const resize = new ResizeObserver(relayout);
      relayout();
      resize.observe(container);
      io.observe(container);
      reduced.addEventListener("change", onReducedChange);
      document.fonts?.ready.then(relayout);

      cleanupMode = () => {
        io.disconnect();
        resize.disconnect();
        reduced.removeEventListener("change", onReducedChange);
        nodes.forEach((node) => {
          node.style.translate = "";
          node.removeAttribute("data-current");
        });
      };
    } else {
      let target = 0;
      let current = 0;

      const paint = (progress: number) => {
        if (!length) return;
        const drawn = length * progress;
        drawLine(drawn);
        markNodes(drawn, -1);
        placeHead(drawn, progress > 0.01 && progress < 0.995);
      };

      const readTarget = () => {
        if (reduced.matches) return 1;
        const rect = container.getBoundingClientRect();
        const viewport = window.innerHeight;
        const progress = (viewport * 0.85 - rect.top) / (viewport * 0.5 + rect.height * 0.6);
        return Math.min(1, Math.max(0, progress));
      };

      /* Eases toward the scroll target, so the line keeps a little inertia */
      const tick = () => {
        frame = 0;
        const delta = target - current;
        current = Math.abs(delta) < 0.001 || reduced.matches ? target : current + delta * 0.12;
        paint(current);
        if (current !== target) frame = requestAnimationFrame(tick);
      };

      const onScroll = () => {
        target = readTarget();
        if (!frame) frame = requestAnimationFrame(tick);
      };

      const resize = new ResizeObserver(() => {
        layout();
        paint(current);
        onScroll();
      });
      resize.observe(container);
      document.fonts?.ready.then(() => {
        layout();
        onScroll();
      });

      target = readTarget();
      current = reduced.matches ? target : 0;
      layout();
      paint(current);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      reduced.addEventListener("change", onScroll);

      cleanupMode = () => {
        resize.disconnect();
        window.removeEventListener("scroll", onScroll);
        reduced.removeEventListener("change", onScroll);
      };
    }

    return () => {
      cancelAnimationFrame(frame);
      cleanupMode();
      delete container.dataset.flowReady;
    };
  }, [mode, head]);

  return (
    <svg
      ref={svgRef}
      className={className}
      data-flow-path=""
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient ref={gradientRef} id={gradientId} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="55%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path ref={trackRef} data-flow-track="" />
      <path ref={lineRef} data-flow-line="" stroke={`url(#${gradientId})`} />
      <path ref={pulseRef} data-flow-pulse="" stroke={`url(#${gradientId})`} style={{ opacity: 0 }} />
      <path ref={measureRef} stroke="none" />
      {head ? (
        <g ref={headRef} data-flow-head="" style={{ opacity: 0 }}>
          <circle r="9" fill={`url(#${gradientId})`} opacity="0.18" />
          <circle r="3.5" fill={`url(#${gradientId})`} />
        </g>
      ) : null}
    </svg>
  );
}
