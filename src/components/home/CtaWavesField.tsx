"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useIsCompactViewport,
  useIsNearViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/effects/use-effect-env";

const Waves = dynamic(() => import("@/components/effects/Waves"), {
  ssr: false,
});

type CtaWavesFieldProps = {
  className: string;
  wavesClassName: string;
};

/**
 * React Bits Waves as the closing sea: lines flow on their own, part around the cursor
 * and ripple on click. Desktop only (<1024px keeps the SVG wave); reduced motion gets one still frame.
 */
export function CtaWavesField({ className, wavesClassName }: CtaWavesFieldProps) {
  const light = useResolvedTheme() === "light";
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const fieldRef = useRef<HTMLDivElement>(null);
  const near = useIsNearViewport(fieldRef, !compact);

  if (compact) return null;

  return (
    <div ref={fieldRef} className={className} aria-hidden="true">
      {near ? (
        <Waves
          className={wavesClassName}
          lineColor={light ? "#a78bfa" : "#4f5a7a"}
          accentColor={light ? "#14b8a6" : "#2dd4bf"}
          opacity={light ? 0.55 : 0.9}
          rotation={90}
          spacing={14}
          amplitude={30}
          speed={0.3}
          twist={0.7}
          fade={0.3}
          mouseRadius={190}
          mouseStrength={1.1}
          mouseInteraction={!reduced}
          clickRipple={!reduced}
          lightMode={light}
          paused={reduced}
        />
      ) : null}
    </div>
  );
}
