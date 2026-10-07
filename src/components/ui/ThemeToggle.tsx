"use client";

import { useState } from "react";
import { applyThemePreference, type ThemePreference } from "@/lib/theme";
import { useThemePreference } from "@/components/theme/use-theme-preference";
import styles from "./theme-toggle.module.css";

const nextPreference: Record<ThemePreference, ThemePreference> = {
  light: "dark",
  dark: "system",
  system: "light",
};

const label: Record<ThemePreference, string> = {
  light: "Tema claro. Alternar para escuro.",
  dark: "Tema escuro. Alternar para o sistema.",
  system: "Tema do sistema. Alternar para claro.",
};

const announcement: Record<ThemePreference, string> = {
  light: "Tema claro ativado.",
  dark: "Tema escuro ativado.",
  system: "Tema do sistema ativado.",
};

export function ThemeToggle() {
  const preference = useThemePreference();
  const [status, setStatus] = useState("");

  function cycle() {
    const next = nextPreference[preference];
    applyThemePreference(next);
    setStatus(announcement[next]);
  }

  return (
    <>
      <button type="button" className={styles.toggle} aria-label={label[preference]} onClick={cycle}>
        {preference === "dark" ? <MoonIcon /> : preference === "light" ? <SunIcon /> : <SystemIcon />}
      </button>
      <span className="sr-only" role="status">
        {status}
      </span>
    </>
  );
}

function SunIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.5 3.8A8.2 8.2 0 1 0 20.2 15 6.6 6.6 0 0 1 15.5 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 19.5h6M12 16v3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
