import type { Alpine } from "alpinejs";
import type { ThemeMode } from "./theme";
import { applyTheme, storeTheme, readTheme } from "./theme";

/**
 * Alpine entrypoint (@astrojs/alpinejs integration).
 * Runs once, prior to Alpine.start(), so we can register global stores/directives
 * and listen to Astro's navigation lifecycle for theme persistence.
 */
export default (Alpine: Alpine) => {
  // Re-apply the persisted theme after every view-transition navigation, since
  // the incoming <html> element is freshly server-rendered and drops the state
  // that was applied to the outgoing page. Persisted choice lives in localStorage.
  document.addEventListener("astro:page-load", applyTheme);

  Alpine.data("themeStore", () => ({
    mode: "system" as ThemeMode | "system",
    open: false,

    // Media query listening for OS-level scheme changes (system mode).
    media: null as MediaQueryList | null,
    // Bound change listener, torn down on navigation.
    onMediaChange: null as ((e: MediaQueryListEvent) => void) | null,

    // Human-readable label used for aria-label / title on the trigger.
    get a11yLabel() {
      return `Theme: ${this.mode}`;
    },

    init() {
      // Re-read the current preference so the store matches the applied <html>.
      const { resolved } = readTheme();
      this.mode = resolved;
      applyTheme();

      this.media = window.matchMedia("(prefers-color-scheme: dark)");
      this.onMediaChange = (e) => {
        if (this.mode === "system") this.apply();
      };
      this.media.addEventListener("change", this.onMediaChange);

      // Keep <html> in sync when the mode changes via the store.
      this.$watch("mode", () => this.apply());
    },

    apply() {
      applyTheme();
    },

    setMode(mode: ThemeMode) {
      this.mode = mode;
      storeTheme(mode);
      applyTheme();
    },
  }));
};
