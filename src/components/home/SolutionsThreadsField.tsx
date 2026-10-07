"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useIsCompactViewport,
  useIsNearViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./solutions.module.css";

const Threads = dynamic(() => import("@/components/lab/motion/Threads"), {
  ssr: false,
});

function hexToRgb01(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const n = Number.parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/**
 * Localized Web Threads field for Solutions.
 * Desktop only (<1024px off). Keeps the section Server Component.
 */
export function SolutionsThreadsField() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const fieldRef = useRef<HTMLDivElement>(null);
  const near = useIsNearViewport(fieldRef, !reduced && !compact);
  const light = theme === "light";

  if (reduced && !compact) {
    return <div className={styles.staticField} aria-hidden="true" />;
  }

  if (reduced || compact) return null;

  const colorStart = light
    ? hexToRgb01("#7c3aed")
    : ([0.58, 0.44, 0.98] as [number, number, number]);
  const colorMid = light
    ? hexToRgb01("#2563eb")
    : ([0.38, 0.52, 0.96] as [number, number, number]);
  const colorEnd = light
    ? hexToRgb01("#0d9488")
    : ([0.2, 0.78, 0.7] as [number, number, number]);

  return (
    <div ref={fieldRef} className={styles.threadsField} aria-hidden="true">
      {near ? (
        <Threads
          className={styles.threads}
          color={colorStart}
          colorMid={colorMid}
          colorEnd={colorEnd}
          amplitude={1.32}
          distance={0.46}
          lineCount={15}
          timeScale={0.55}
          chromaBoost={light ? 0.32 : 0.06}
          enableMouseInteraction
        />
      ) : null}
    </div>
  );
}
