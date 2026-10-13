"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useIsCompactViewport,
  useIsNearViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/effects/use-effect-env";

const LineWaves = dynamic(() => import("@/components/effects/LineWaves"), {
  ssr: false,
});

type AboutLineWavesFieldProps = {
  className: string;
  wavesClassName: string;
};

/**
 * React Bits Line Waves as the About background: fine lines rolling like a sea surface.
 * Desktop only (<1024px off); reduced motion gets one still frame.
 */
export function AboutLineWavesField({ className, wavesClassName }: AboutLineWavesFieldProps) {
  const light = useResolvedTheme() === "light";
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const fieldRef = useRef<HTMLDivElement>(null);
  const near = useIsNearViewport(fieldRef, !compact);

  if (compact) return null;

  return (
    <div ref={fieldRef} className={className} aria-hidden="true">
      {near ? (
        <LineWaves
          className={wavesClassName}
          speed={0.1}
          innerLineCount={20}
          outerLineCount={26}
          warpIntensity={0.7}
          rotation={-10}
          edgeFadeWidth={0.25}
          colorCycleSpeed={0.35}
          brightness={light ? 0.09 : 0.08}
          color1="#8b5cf6"
          color2="#14b8a6"
          color3="#7c3aed"
          enableMouseInteraction={false}
          lightMode={light}
          paused={reduced}
        />
      ) : null}
    </div>
  );
}
