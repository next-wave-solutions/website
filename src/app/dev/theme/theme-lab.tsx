"use client";

import { useSyncExternalStore } from "react";
import { applyThemePreference, THEME_STORAGE_KEY, type ThemePreference } from "@/lib/theme";

const options: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
  { value: "system", label: "Sistema" },
];

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

export function ThemeLab() {
  const preference = useSyncExternalStore(subscribe, readPreference, () => "system");

  function choose(next: ThemePreference) {
    applyThemePreference(next);
    window.dispatchEvent(new Event("nw-theme-change"));
  }

  return (
    <main
      style={{
        minHeight: "100dvh",
        padding: "2rem",
        background: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
        Ferramenta temporária de desenvolvimento — não é o Theme Toggle
      </p>
      <h1 style={{ marginTop: "0.75rem", fontSize: "1.5rem" }}>Fundação de tema</h1>
      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={preference === option.value}
            onClick={() => choose(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
        Preferência em localStorage (<code>{THEME_STORAGE_KEY}</code>): {preference}. A escolha manual tem prioridade sobre o sistema.
      </p>
      <div
        style={{
          marginTop: "2rem",
          maxWidth: "20rem",
          padding: "1.25rem",
          borderRadius: "var(--radius-lg)",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <p style={{ color: "var(--text-primary)" }}>Texto primário</p>
        <p style={{ color: "var(--text-secondary)" }}>Texto secundário</p>
        <p style={{ color: "var(--text-muted)" }}>Texto muted</p>
        <p style={{ color: "var(--text-subtle)" }}>Texto subtle</p>
      </div>
    </main>
  );
}
