"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import styles from "./technology.module.css";

const icons = {
  performance: ["M4 16a8 8 0 1 1 16 0", "M12 16l4.5-5", "M7 16h.01", "M17 16h.01"],
  security: ["M12 3.5l7 2.8v5.2c0 4.3-3 7.6-7 9-4-1.4-7-4.7-7-9V6.3z", "M9 12l2.2 2.2L15.5 10"],
  scale: ["M4 19.5h16", "M6.5 19.5v-4", "M11 19.5v-8", "M15.5 19.5V7", "M13.5 6.5l2-2 2 2"],
  maintenance: ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 16.5h7", "M16.5 13v7"],
} as const;

export type Principle = {
  title: string;
  description: string;
  icon: keyof typeof icons;
};

const INTERVAL_MS = 4200;
const DROP_MS = 650;
const DRAG_THRESHOLD = 110;
const STACK_QUERY = "(min-width: 48rem) and (prefers-reduced-motion: no-preference)";

/**
 * React Bits "Card Swap" without GSAP: slots are CSS custom properties, the
 * front card drops away and returns to the back of the 3D stack.
 * Without JS, on small screens or with reduced motion it stays a plain list.
 */
export function TechnologyCardSwap({ principles }: { principles: readonly Principle[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [order, setOrder] = useState(() => principles.map((_, index) => index));
  const [dropping, setDropping] = useState<number | null>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [hold, setHold] = useState(false);
  const [visible, setVisible] = useState(false);
  const busy = useRef(false);
  const drag = useRef<{ id: number; x: number; y: number; dx: number; dy: number } | null>(null);
  const orderRef = useRef(order);

  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  useEffect(() => {
    const media = window.matchMedia(STACK_QUERY);
    const sync = () => setEnhanced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? false),
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const advance = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    const current = orderRef.current;
    setDropping(current[0]);
    setOrder([...current.slice(1), current[0]]);
    window.setTimeout(() => {
      setDropping(null);
      busy.current = false;
    }, DROP_MS);
  }, []);

  const running = enhanced && visible && !userPaused && !hold;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      if (!document.hidden) advance();
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [running, advance]);

  const bringToFront = (index: number) => {
    const at = order.indexOf(index);
    if (at <= 0) return;
    setOrder([...order.slice(at), ...order.slice(0, at)]);
  };

  const onDragStart = (event: ReactPointerEvent<HTMLLIElement>) => {
    if (!enhanced || busy.current || event.button !== 0) return;
    if (!event.currentTarget.hasAttribute("data-front")) return;
    if (event.pointerType === "mouse") event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.setAttribute("data-dragging", "");
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, dy: 0 };
    setHold(true);
  };

  const onDragMove = (event: ReactPointerEvent<HTMLLIElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    state.dx = event.clientX - state.x;
    state.dy = event.clientY - state.y;
    const card = event.currentTarget;
    card.style.translate = `${state.dx}px ${state.dy}px`;
    card.style.rotate = `${Math.max(-12, Math.min(12, state.dx * 0.05))}deg`;
  };

  const onDragEnd = (event: ReactPointerEvent<HTMLLIElement>) => {
    const state = drag.current;
    if (!state || state.id !== event.pointerId) return;
    drag.current = null;
    const card = event.currentTarget;
    card.removeAttribute("data-dragging");
    if (Math.hypot(state.dx, state.dy) > DRAG_THRESHOLD) {
      advance();
      window.setTimeout(() => {
        card.style.translate = "";
        card.style.rotate = "";
      }, DROP_MS);
    } else {
      card.style.translate = "";
      card.style.rotate = "";
    }
    if (event.pointerType !== "mouse") setHold(false);
  };

  return (
    <div
      ref={rootRef}
      className={styles.swap}
      data-enhanced={enhanced ? "" : undefined}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHold(true)}
      onPointerLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHold(false);
      }}
    >
      <ul className={styles.cards}>
        {principles.map((principle, index) => {
          const slot = order.indexOf(index);
          return (
            <li
              key={principle.title}
              className={styles.card}
              style={{ "--slot": slot } as CSSProperties}
              data-front={slot === 0 ? "" : undefined}
              data-dropping={dropping === index ? "" : undefined}
              onPointerDown={onDragStart}
              onPointerMove={onDragMove}
              onPointerUp={onDragEnd}
              onPointerCancel={onDragEnd}
            >
              <span className={styles.cardTop} aria-hidden="true">
                <span className={styles.cardIndex}>
                  {String(index + 1).padStart(2, "0")}
                  <span className={styles.cardTotal}> / {String(principles.length).padStart(2, "0")}</span>
                </span>
                <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" focusable="false">
                  {icons[principle.icon].map((d) => (
                    <path key={d} d={d} pathLength="1" />
                  ))}
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{principle.title}</h3>
              <p className={styles.cardCopy}>{principle.description}</p>
              <svg
                className={styles.cardWave}
                viewBox="0 0 240 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M0 8C30 0 50 0 80 8S130 16 160 8 210 0 240 8" pathLength="1" />
              </svg>
            </li>
          );
        })}
      </ul>

      <div className={styles.controls}>
        {principles.map((principle, index) => (
          <button
            key={principle.title}
            type="button"
            className={styles.pick}
            aria-label={`Mostrar ${principle.title}`}
            aria-pressed={order[0] === index}
            onClick={() => bringToFront(index)}
          />
        ))}
        <button
          type="button"
          className={styles.pause}
          aria-pressed={userPaused}
          onClick={() => setUserPaused((value) => !value)}
        >
          {userPaused ? "Retomar" : "Pausar"}
        </button>
      </div>
    </div>
  );
}
