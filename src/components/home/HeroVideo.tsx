"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion, useResolvedTheme } from "@/components/effects/use-effect-env";
import styles from "./hero.module.css";

const VIDEO_SRC = {
  light: "/brand/hero-light-animado.mp4",
  dark: "/brand/hero-dark-animado.mp4",
} as const;

/* The clips are 16:9 and only animate the landscape plates. Keep in sync with LANDSCAPE_PLATE in Hero.tsx. */
const LANDSCAPE_QUERY =
  "(min-width: 48.0625rem) and (min-aspect-ratio: 1001/1000), (min-width: 75.0625rem)";

function useMatchesMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

function useSaveData() {
  const [saveData, setSaveData] = useState(true);

  useEffect(() => {
    const sync = () => {
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection;
      setSaveData(connection?.saveData === true);
    };
    sync();
  }, []);

  return saveData;
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const theme = useResolvedTheme();
  const reducedMotion = usePrefersReducedMotion();
  const landscape = useMatchesMedia(LANDSCAPE_QUERY);
  const saveData = useSaveData();
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  const eligible = !reducedMotion && landscape && !saveData;
  const shouldPlay = eligible && inView && !paused;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      setInView(entries.some((entry) => entry.isIntersecting));
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!shouldPlay) {
      video.pause();
      return;
    }

    // Set imperatively so a ~7 MB clip is only fetched when it will actually play.
    const src = VIDEO_SRC[theme];
    if (video.getAttribute("src") !== src) video.src = src;
    video.play().catch(() => setPlaying(false));
  }, [shouldPlay, theme]);

  return (
    <>
      <div className={styles.videoPlate} data-playing={playing || undefined} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.video}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEmptied={() => setPlaying(false)}
        />
      </div>

      {eligible ? (
        <button
          type="button"
          className={styles.videoToggle}
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Retomar animação de fundo" : "Pausar animação de fundo"}
        >
          {paused ? (
            <svg viewBox="0 0 24 24" className={styles.videoToggleIcon} aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className={styles.videoToggleIcon} aria-hidden="true">
              <path d="M7.5 5h3v14h-3zM13.5 5h3v14h-3z" fill="currentColor" />
            </svg>
          )}
        </button>
      ) : null}
    </>
  );
}
