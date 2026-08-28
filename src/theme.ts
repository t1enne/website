/**
 * Shared theme helpers.
 *
 * The persisted choice lives in localStorage ("theme"): "light" | "dark" | absent (system).
 * We always apply it to <html> via the `data-theme` attribute + `.dark` class.
 *
 * Used both by the Alpine `themeStore` (entrypoint) and the pre-paint inline
 * script in <BaseHead> (which cannot import modules yet, so it imports this
 * module — see below).
 */

export type ThemeMode = "light" | "dark" | "system";

export function readTheme(): { resolved: ThemeMode; isDark: boolean } {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {
    /* storage unavailable — fall back to system */
  }

  // No stored preference means the user is following the system.
  const resolved: ThemeMode =
    stored === "light" || stored === "dark" ? stored : "system";

  let isDark = resolved === "dark";
  if (resolved === "system") {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return { resolved, isDark };
}

/** Applies the persisted theme to <html>. */
export function applyTheme(): void {
  const { resolved, isDark } = readTheme();
  const root = document.documentElement;
  root.setAttribute("data-theme", resolved);
  root.classList.toggle("dark", isDark);
}

/** Persist a user-chosen mode; "system" clears the stored override. */
export function storeTheme(mode: ThemeMode): void {
  try {
    if (mode === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", mode);
  } catch (e) {
    /* ignore storage errors */
  }
}
