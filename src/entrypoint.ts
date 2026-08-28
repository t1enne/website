import type { Alpine } from "alpinejs";
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
    mode: "system",
    open: false,

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
      this.$watch("mode", (val) => this.apply());
    },

    apply() {
      applyTheme();
    },

    setMode(mode) {
      this.mode = mode;
      storeTheme(mode);
      applyTheme();
    },
  }));
};
