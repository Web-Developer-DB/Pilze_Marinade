import React, { useEffect, useMemo, useState } from "react";
import { useLocale } from "../lib/locale-context.jsx";
import { t } from "../lib/i18n.js";

const SCHEMES = [
  { value: "system", icon: "🖥️", labelKey: "theme.scheme.system" },
  { value: "light", icon: "☀️", labelKey: "theme.scheme.light" },
  { value: "dark", icon: "🌙", labelKey: "theme.scheme.dark" },
];

export default function ThemeControls({ renderButton = true }) {
  const { locale } = useLocale();
  const [schemePreference, setSchemePreference] = useState("system");
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(media?.matches ?? false);

    const onMediaChange = (event) => setPrefersDark(event.matches);
    media?.addEventListener("change", onMediaChange);

    const root = document.documentElement;
    const storedScheme =
      localStorage.getItem("schemePreference") || localStorage.getItem("scheme") || root.getAttribute("data-scheme");

    if (storedScheme) {
      setSchemePreference(storedScheme);
    }

    return () => media?.removeEventListener("change", onMediaChange);
  }, []);

  const resolvedScheme = useMemo(
    () => (schemePreference === "system" ? (prefersDark ? "dark" : "light") : schemePreference),
    [prefersDark, schemePreference],
  );

  useEffect(() => {
    const root = document.documentElement;
    const theme = resolvedScheme === "dark" ? "waldgruen" : "erdtoene";

    root.setAttribute("data-theme", theme);
    root.setAttribute("data-scheme", resolvedScheme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("schemePreference", schemePreference);
  }, [resolvedScheme, schemePreference]);

  const schemeToggleAria = t(locale, "theme.toggle.aria");
  const activeScheme = SCHEMES.find((option) => option.value === schemePreference) || SCHEMES[0];
  const resolvedLabel = t(locale, resolvedScheme === "dark" ? "theme.scheme.dark" : "theme.scheme.light");

  const toggleScheme = () => {
    if (schemePreference === "system") {
      setSchemePreference(resolvedScheme === "dark" ? "light" : "dark");
    } else {
      setSchemePreference("system");
    }
  };

  if (!renderButton) {
    return null;
  }

  return (
    <div className="scheme-toggle">
      <button
        type="button"
        onClick={toggleScheme}
        aria-label={`${schemeToggleAria} - ${t(locale, activeScheme.labelKey)}`}
      >
        <span className="pill-icon" aria-hidden="true">
          {activeScheme.icon}
        </span>
        <span className="pill-text">
          {t(locale, activeScheme.labelKey)}
          <small>{schemePreference === "system" ? resolvedLabel : t(locale, "theme.scheme.system")}</small>
        </span>
      </button>
      <span className="scheme-note" aria-live="polite">
        {resolvedScheme === "dark" ? t(locale, "theme.locked.forest") : t(locale, "theme.locked.free")}
      </span>
    </div>
  );
}
