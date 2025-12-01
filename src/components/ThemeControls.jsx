import React, { useEffect, useState } from "react";
import { useLocale } from "../lib/locale-context.jsx";
import { t } from "../lib/i18n.js";

const THEMES = [
  { value: "erdtoene", labelKey: "theme.option.earth" },
  { value: "waldgruen", labelKey: "theme.option.forest" },
  { value: "kontrast", labelKey: "theme.option.contrast" },
];

export default function ThemeControls() {
  const { locale } = useLocale();
  const [theme, setTheme] = useState("erdtoene");
  const [scheme, setScheme] = useState("dark");

  useEffect(() => {
    const themeValue =
      document.documentElement.getAttribute("data-theme") ||
      localStorage.getItem("theme") ||
      "erdtoene";
    const schemeValue =
      document.documentElement.getAttribute("data-scheme") ||
      localStorage.getItem("scheme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(themeValue);
    setScheme(schemeValue);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-scheme", scheme);
    localStorage.setItem("scheme", scheme);
  }, [scheme]);

  const themeTitle = t(locale, "theme.select.title");
  const themeLabel = t(locale, "theme.select.label");
  const schemeToggleTitle = t(locale, "theme.toggle.title");
  const schemeToggleAria = t(locale, "theme.toggle.aria");
  const schemeTargetLabel = scheme === "light" ? t(locale, "theme.scheme.dark") : t(locale, "theme.scheme.light");
  const schemeIcon = scheme === "light" ? "🌙" : "☀️";

  return (
    <div className="controls">
      <span className="select" title={themeTitle}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6.5 20l2-7L3 9h7l2-7z" strokeWidth="1.3" />
        </svg>
        <label htmlFor="theme" className="sr-only">
          {themeLabel}
        </label>
        <select id="theme" value={theme} onChange={(event) => setTheme(event.target.value)} aria-label={themeLabel}>
          {THEMES.map((option) => (
            <option key={option.value} value={option.value}>
              {t(locale, option.labelKey)}
            </option>
          ))}
        </select>
      </span>

      <span className="toggle" title={schemeToggleTitle}>
        <button type="button" onClick={() => setScheme((prev) => (prev === "light" ? "dark" : "light"))} aria-label={schemeToggleAria}>
          {`${schemeIcon} ${schemeTargetLabel}`}
        </button>
      </span>
    </div>
  );
}
