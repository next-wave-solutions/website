"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import {
  useIsCompactViewport,
  useIsNearViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/effects/use-effect-env";

const Silk = dynamic(() => import("@/components/effects/Silk"), {
  ssr: false,
});

type Rgb = [number, number, number];

function hex(value: string): Rgb {
  const n = Number.parseInt(value.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/* Light: lilac/sea-glass folds under a sheen close to --background-secondary.
   Dark: folds sit on the section surface, crests catch a muted purple → teal. */
const PALETTE = {
  light: {
    purple: hex("#e4dcf2"),
    teal: hex("#d9ebe4"),
    highStart: hex("#f8f6f3"),
    highEnd: hex("#f7f7f3"),
  },
  dark: {
    lowStart: hex("#0f131b"),
    lowEnd: hex("#0f141a"),
    purple: hex("#251e40"),
    teal: hex("#11302d"),
  },
} as const;

/* Each section gets its own drape so the texture never repeats exactly. */
const VARIANTS = {
  process: { rotation: 0.35, scale: 0.7, speed: 0.22, flip: false },
  projects: { rotation: -0.55, scale: 0.5, speed: 0.16, flip: true },
} as const;

type SilkFieldProps = {
  variant: keyof typeof VARIANTS;
  className: string;
  silkClassName: string;
};

/**
 * React Bits Silk as a section background.
 * Desktop only (<1024px off); reduced motion gets one still frame.
 */
export function SilkField({ variant, className, silkClassName }: SilkFieldProps) {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const fieldRef = useRef<HTMLDivElement>(null);
  const near = useIsNearViewport(fieldRef, !compact);

  if (compact) return null;

  const { rotation, scale, speed, flip } = VARIANTS[variant];
  const colors =
    theme === "light"
      ? {
          lowStart: flip ? PALETTE.light.teal : PALETTE.light.purple,
          lowEnd: flip ? PALETTE.light.purple : PALETTE.light.teal,
          highStart: PALETTE.light.highStart,
          highEnd: PALETTE.light.highEnd,
        }
      : {
          lowStart: PALETTE.dark.lowStart,
          lowEnd: PALETTE.dark.lowEnd,
          highStart: flip ? PALETTE.dark.teal : PALETTE.dark.purple,
          highEnd: flip ? PALETTE.dark.purple : PALETTE.dark.teal,
        };

  return (
    <div ref={fieldRef} className={className} aria-hidden="true">
      {near ? (
        <Silk
          className={silkClassName}
          {...colors}
          rotation={rotation}
          scale={scale}
          speed={speed}
          paused={reduced}
        />
      ) : null}
    </div>
  );
}
