export const THEME_STORAGE_KEY = "nw-theme";

export type ThemePreference = "light" | "dark" | "system";

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;var manual=s==="light"||s==="dark";var t=manual?s:(dark?"dark":"light");var root=document.documentElement;root.dataset.theme=t;root.dataset.themeSource=manual?"manual":"system";root.style.colorScheme=t;}catch(e){}})();`;

export function applyThemePreference(preference: ThemePreference) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = preference === "system" ? (systemDark ? "dark" : "light") : preference;

  localStorage.setItem(THEME_STORAGE_KEY, preference);
  root.dataset.theme = resolved;
  root.dataset.themeSource = preference === "system" ? "system" : "manual";
  root.style.colorScheme = resolved;
}
