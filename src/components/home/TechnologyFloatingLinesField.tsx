"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useIsCompactViewport,
  useIsNearViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./technology.module.css";

const FloatingLines = dynamic(() => import("@/components/lab/motion/FloatingLines"), {
  ssr: false,
});

const BRAND_GRADIENT = ["#8b5cf6", "#6366f1", "#06b6d4", "#10b981"];
const ENABLED_WAVES: Array<"top" | "middle" | "bottom"> = ["middle", "bottom"];
const LINE_COUNT = [3, 3];
const LINE_DISTANCE = [7, 6];

/**
 * Localized Floating Lines inside the Technology principles panel.
 * Desktop only (<1024px off). Keeps the section Server Component.
 */
export function TechnologyFloatingLinesField() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const slotRef = useRef<HTMLDivElement>(null);
  const near = useIsNearViewport(slotRef, !reduced && !compact);
  const light = theme === "light";

  if (reduced && !compact) {
    return <div className={styles.staticOrganism} aria-hidden="true" />;
  }

  if (reduced || compact) return null;

  return (
    <div ref={slotRef} className={styles.linesSlot} aria-hidden="true">
      {near ? (
        <FloatingLines
          className={styles.lines}
          linesGradient={BRAND_GRADIENT}
          enabledWaves={ENABLED_WAVES}
          lineCount={LINE_COUNT}
          lineDistance={LINE_DISTANCE}
          animationSpeed={0.28}
          interactive={false}
          parallax={false}
          mixBlendMode={light ? "multiply" : "screen"}
          lightMode={light}
          backgroundColor={light ? "#faf9f7" : "#0d1017"}
          maxPixelRatio={1.75}
        />
      ) : null}
    </div>
  );
}
