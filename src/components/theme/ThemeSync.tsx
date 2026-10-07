"use client";

import { useEffect } from "react";
import { THEME_STORAGE_KEY, applyThemePreference, readThemePreference } from "@/lib/theme";

export function ThemeSync() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const followSystem = () => {
      if (readThemePreference() !== "system") return;
      applyThemePreference("system");
    };

    const followOtherTab = (event: StorageEvent) => {
      if (event.key !== null && event.key !== THEME_STORAGE_KEY) return;
      applyThemePreference(readThemePreference());
    };

    media.addEventListener("change", followSystem);
    window.addEventListener("storage", followOtherTab);

    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", followOtherTab);
    };
  }, []);

  return null;
}
