import React from "react";
import { supportedLocales, t } from "../lib/i18n.js";
import { useLocale } from "../lib/locale-context.jsx";

export default function LocaleSwitcher({ controlId = "locale-switch-global" }) {
  const { locale, setLocale } = useLocale();
  const locales = supportedLocales();

  return (
    <label className="header-locale" htmlFor={controlId}>
      <span className="header-locale-icon" aria-hidden="true">
        🌐
      </span>
      <span className="sr-only">{t(locale, "locale.switch")}</span>
      <select
        id={controlId}
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        aria-label={t(locale, "locale.switch")}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {t(locale, `locale.${loc}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
