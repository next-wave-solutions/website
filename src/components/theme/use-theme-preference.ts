"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type ThemePreference } from "@/lib/theme";

function readPreference(): ThemePreference {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("nw-theme-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("nw-theme-change", onStoreChange);
  };
}

export function useThemePreference() {
  return useSyncExternalStore(subscribe, readPreference, () => "system" as const);
}
