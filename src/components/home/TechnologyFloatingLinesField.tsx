"use client";

import dynamic from "next/dynamic";
import {
  useIsCompactViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./technology.module.css";

const FloatingLines = dynamic(() => import("@/components/lab/motion/FloatingLines"), {
  ssr: false,
});

const BRAND_GRADIENT = ["#8b5cf6", "#6366f1", "#06b6d4", "#10b981"];

/**
 * Localized Floating Lines inside the Technology principles panel.
 * Desktop only (<1024px off). Keeps the section Server Component.
 */
export function TechnologyFloatingLinesField() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const light = theme === "light";

  if (reduced && !compact) {
    return <div className={styles.staticOrganism} aria-hidden="true" />;
  }

  if (reduced || compact) return null;

  return (
    <div className={styles.linesSlot} aria-hidden="true">
      <FloatingLines
        className={styles.lines}
        linesGradient={BRAND_GRADIENT}
        enabledWaves={["middle", "bottom"]}
        lineCount={[3, 3]}
        lineDistance={[7, 6]}
        animationSpeed={0.28}
        interactive={false}
        parallax={false}
        mixBlendMode={light ? "multiply" : "screen"}
        lightMode={light}
        backgroundColor={light ? "#faf9f7" : "#0d1017"}
        maxPixelRatio={1.75}
      />
    </div>
  );
}
