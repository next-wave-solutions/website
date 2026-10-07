"use client";

import { useSyncExternalStore } from "react";
import { readThemePreference } from "@/lib/theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("nw-theme-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("nw-theme-change", onStoreChange);
  };
}

export function useThemePreference() {
  return useSyncExternalStore(subscribe, readThemePreference, () => "system" as const);
}
