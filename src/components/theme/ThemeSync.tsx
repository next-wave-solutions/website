"use client";

import { useEffect } from "react";
import { THEME_STORAGE_KEY, applyThemePreference, type ThemePreference } from "@/lib/theme";

function storedPreference(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

export function ThemeSync() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const followSystem = () => {
      if (storedPreference() !== "system") return;
      applyThemePreference("system");
    };

    media.addEventListener("change", followSystem);
    window.addEventListener("storage", followSystem);

    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", followSystem);
    };
  }, []);

  return null;
}
