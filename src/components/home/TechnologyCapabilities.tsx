"use client";

import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
} from "react";
import styles from "./technology.module.css";

const INTERVAL_MS = 2400;
const QUERY = "(prefers-reduced-motion: no-preference)";

/**
 * React Bits "Rotating Text" for the capabilities: one large word cycles
 * letter by letter while the matching item lights up in the list below.
 * The list is the real content; the rotating word is decorative.
 */
export function TechnologyCapabilities({ items }: { items: readonly string[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const activeRef = useRef(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const [waveWidth, setWaveWidth] = useState(96);

  useLayoutEffect(() => {
    const word = wordRef.current;
    if (!word) return;
    const measure = () => setWaveWidth(Math.max(48, Math.round(word.offsetWidth)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(word);
    return () => observer.disconnect();
  }, [active, enhanced]);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
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
      { threshold: 0.4 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enhanced || !visible) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      const current = activeRef.current;
      activeRef.current = (current + 1) % items.length;
      setPrevious(current);
      setActive(activeRef.current);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [enhanced, visible, items.length]);

  return (
    <div ref={rootRef} className={styles.capabilitiesBlock} data-enhanced={enhanced ? "" : undefined}>
      {enhanced ? (
        <p className={styles.rotator} aria-hidden="true">
          <span className={styles.rotatorLabel}>Atuamos em</span>
          <span className={styles.rotatorStage}>
            {previous !== null ? (
              <Word key={`out-${previous}-${active}`} text={items[previous]} exiting />
            ) : null}
            <Word key={`in-${active}`} text={items[active]} ref={wordRef} />
          </span>
          <svg
            className={styles.rotatorWave}
            style={{ width: waveWidth }}
            viewBox={`0 0 ${waveWidth} 10`}
            fill="none"
            focusable="false"
          >
            <defs>
              <linearGradient id="tech-rotator-wave" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
                <stop offset="100%" style={{ stopColor: "var(--accent)" }} />
              </linearGradient>
            </defs>
            <path
              key={`${active}-${waveWidth}`}
              d={wavePath(waveWidth)}
              pathLength="1"
              stroke="url(#tech-rotator-wave)"
            />
          </svg>
        </p>
      ) : null}

      <p className={styles.capabilities}>
        <span className="sr-only">Áreas de atuação: </span>
        {items.map((item, index) => (
          <Fragment key={item}>
            {index > 0 ? (
              <span aria-hidden="true" className={styles.dot}>
                ·
              </span>
            ) : null}
            <span className={styles.capability} data-active={enhanced && index === active ? "" : undefined}>
              {item}
            </span>
          </Fragment>
        ))}
      </p>
    </div>
  );
}

/* Half-period of 15px keeps the ripple size constant whatever the word length */
function wavePath(width: number) {
  const half = 15;
  const steps = Math.max(2, Math.round((width - 2) / half));
  const step = (width - 2) / steps;
  let d = `M1 5`;
  for (let i = 0; i < steps; i += 1) {
    const x = 1 + step * i;
    const peak = i % 2 === 0 ? 0 : 10;
    d += `C${(x + step * 0.35).toFixed(1)} ${peak} ${(x + step * 0.65).toFixed(1)} ${peak} ${(x + step).toFixed(1)} 5`;
  }
  return d;
}

function Word({
  text,
  exiting = false,
  ref,
}: {
  text: string;
  exiting?: boolean;
  ref?: Ref<HTMLSpanElement>;
}) {
  return (
    <span ref={ref} className={styles.rotatorWord} data-exiting={exiting ? "" : undefined}>
      {Array.from(text).map((char, index) => (
        <span key={index} className={styles.rotatorChar} style={{ "--c": index } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  );
}
