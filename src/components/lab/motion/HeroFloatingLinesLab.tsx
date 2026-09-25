"use client";

import dynamic from "next/dynamic";
import { GradientText } from "@/components/ui/GradientText";
import {
  useIsCompactViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./hero-floating-lines.module.css";

const FloatingLines = dynamic(() => import("@/components/lab/motion/FloatingLines"), {
  ssr: false,
});

const BRAND_GRADIENT = ["#8b5cf6", "#6366f1", "#06b6d4", "#10b981"];

function StaticFlowFallback({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className={styles.fallback} data-theme-surface={theme} aria-hidden="true">
      <svg className={styles.fallbackWave} viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
        <path
          d="M-40 220 C 160 140, 320 140, 480 210 S 780 300, 960 200 S 1120 120, 1240 180"
          stroke="url(#lab-fl-grad)"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M-40 260 C 180 190, 340 185, 500 240 S 800 320, 980 250 S 1140 160, 1240 210"
          stroke="url(#lab-fl-grad)"
          strokeWidth="1.2"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="lab-fl-grad" x1="0" y1="200" x2="1200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="45%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Experimental Hero using Floating Lines instead of the approved plate image.
 * Lab-only — does not replace the production Hero.
 */
export function HeroFloatingLinesLab() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(768);
  const light = theme === "light";

  return (
    <section className={styles.hero} aria-labelledby="hero-fl-heading">
      <div className={styles.stage} aria-hidden="true">
        {reduced ? (
          <StaticFlowFallback theme={theme} />
        ) : (
          <FloatingLines
            className={styles.lines}
            linesGradient={BRAND_GRADIENT}
            enabledWaves={compact ? ["middle", "bottom"] : ["top", "middle", "bottom"]}
            lineCount={compact ? [3, 4] : [3, 5, 4]}
            lineDistance={compact ? [7, 6] : [8, 5, 7]}
            animationSpeed={compact ? 0.28 : 0.38}
            interactive={!compact}
            parallax={!compact}
            parallaxStrength={0.08}
            bendRadius={4.2}
            bendStrength={-0.28}
            mouseDamping={0.04}
            mixBlendMode={light ? "normal" : "screen"}
            lightMode={light}
            backgroundColor={light ? "#faf9f7" : "#0d1017"}
          />
        )}
      </div>

      <div className={styles.scrim} data-theme-surface={theme} aria-hidden="true" />

      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span>Lab · Floating Lines</span>
        </p>
        <h1 id="hero-fl-heading" className={styles.headline}>
          <span className={styles.line}>Cada ideia tem</span>
          <GradientText className={styles.flow}>seu próprio fluxo.</GradientText>
        </h1>
        <p className={styles.subcopy}>
          Transformamos ideias em produtos digitais que evoluem com o seu negócio.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#contato">
            Falar com o time
            <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.secondary} href="#projetos">
            Ver nossos projetos
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
