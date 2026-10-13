"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type Ref } from "react";
import styles from "./final-cta.module.css";

const WORDS = ["site", "aplicativo", "sistema", "e-commerce", "projeto"] as const;
const INTERVAL_MS = 2200;
const QUERY = "(prefers-reduced-motion: no-preference)";

/**
 * "Seu próximo ___ começa com uma conversa." The blank cycles letter by letter
 * and the line resizes around it. Screen readers get the full sentence once.
 */
export function CtaRotator() {
  const rootRef = useRef<HTMLParagraphElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const activeRef = useRef(0);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

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
      { threshold: 0.5 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const word = wordRef.current;
    if (!word) return;
    const measure = () => setWidth(word.offsetWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(word);
    return () => observer.disconnect();
  }, [active, enhanced]);

  useEffect(() => {
    if (!enhanced || !visible) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      const current = activeRef.current;
      activeRef.current = (current + 1) % WORDS.length;
      setPrevious(current);
      setActive(activeRef.current);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [enhanced, visible]);

  return (
    <p ref={rootRef} className={styles.rotator}>
      <span className="sr-only">
        Seu próximo site, aplicativo, sistema ou e-commerce começa com uma conversa.
      </span>
      <span aria-hidden="true">
        Seu próximo{" "}
        {enhanced ? (
          <span className={styles.rotatorStage} style={width ? { width } : undefined}>
            {previous !== null ? (
              <Word key={`out-${previous}-${active}`} text={WORDS[previous]} exiting />
            ) : null}
            <Word key={`in-${active}`} text={WORDS[active]} wordRef={wordRef} />
          </span>
        ) : (
          <span className={styles.rotatorStatic}>site, app ou sistema</span>
        )}{" "}
        começa com uma conversa.
      </span>
    </p>
  );
}

function Word({
  text,
  exiting = false,
  wordRef,
}: {
  text: string;
  exiting?: boolean;
  wordRef?: Ref<HTMLSpanElement>;
}) {
  return (
    <span ref={wordRef} className={styles.rotatorWord} data-exiting={exiting ? "" : undefined}>
      {Array.from(text).map((char, index) => (
        <span key={index} className={styles.rotatorChar} style={{ "--c": index } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  );
}
