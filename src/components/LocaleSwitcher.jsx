import React from "react";
import { supportedLocales, t } from "../lib/i18n.js";
import { useLocale } from "../lib/locale-context.jsx";

function FlagIcon({ code }) {
  switch (code) {
    case "de":
      return (
        <svg viewBox="0 0 24 16" role="presentation" focusable="false">
          <rect width="24" height="16" fill="#000" />
          <rect width="24" height="10.6" y="5.4" fill="#dd0000" />
          <rect width="24" height="5.3" y="10.7" fill="#ffce00" />
        </svg>
      );
    case "en":
      return (
        <svg viewBox="0 0 24 16" role="presentation" focusable="false">
          <rect width="24" height="16" fill="#00247d" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#cf142b" strokeWidth="1.6" />
          <path d="M10 0h4v16h-4zM0 6h24v4H0z" fill="#fff" />
          <path d="M11 0h2v16h-2zM0 7h24v2H0z" fill="#cf142b" />
        </svg>
      );
    case "ru":
      return (
        <svg viewBox="0 0 24 16" role="presentation" focusable="false">
          <rect width="24" height="16" fill="#fff" />
          <rect width="24" height="10.6" y="5.4" fill="#0033a0" />
          <rect width="24" height="5.3" y="10.7" fill="#d52b1e" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 16" role="presentation" focusable="false">
          <rect width="24" height="16" fill="currentColor" />
        </svg>
      );
  }
}

export default function LocaleSwitcher({ controlId = "locale-switch-global" }) {
  const { locale, setLocale } = useLocale();
  const locales = supportedLocales();

  return (
    <div className="locale-toggle" role="group" aria-label={t(locale, "locale.switch")} id={controlId}>
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          className={`locale-pill ${loc === locale ? "active" : ""}`}
          onClick={() => setLocale(loc)}
          aria-pressed={loc === locale}
          aria-label={t(locale, `locale.${loc}`)}
        >
          <span className="locale-icon" aria-hidden="true">
            <FlagIcon code={loc} />
          </span>
          <span className="locale-code">{loc.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
