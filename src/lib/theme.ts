export const THEME_STORAGE_KEY = "nw-theme";

export type ThemePreference = "light" | "dark" | "system";

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=null;try{s=localStorage.getItem(k);}catch(e){}var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;var manual=s==="light"||s==="dark";var t=manual?s:(dark?"dark":"light");var root=document.documentElement;root.dataset.theme=t;root.dataset.themeSource=manual?"manual":"system";root.style.colorScheme=t;}catch(e){}})();`;

// Storage can throw (blocked cookies, sandboxed frames); keep the choice for the session instead.
let sessionPreference: ThemePreference = "system";

export function readThemePreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
    return "system";
  } catch {
    return sessionPreference;
  }
}

export function applyThemePreference(preference: ThemePreference) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = preference === "system" ? (systemDark ? "dark" : "light") : preference;

  sessionPreference = preference;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {}
  root.dataset.theme = resolved;
  root.dataset.themeSource = preference === "system" ? "system" : "manual";
  root.style.colorScheme = resolved;
  window.dispatchEvent(new Event("nw-theme-change"));
}
