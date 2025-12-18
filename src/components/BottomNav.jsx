
import React from "react";
import { useLocale } from "../lib/locale-context.jsx";
import { t } from "../lib/i18n.js";

const navItems = [
  { key: "nav.start", href: "#top", icon: "home" },
  { key: "nav.calculator", href: "#marinade-calculator", icon: "beaker" },
  { key: "nav.recipes", href: "#recipes", icon: "book" },
  { key: "nav.safety", href: "#safety", icon: "shield" },
];

function Icon({ name }) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5V21H5a1 1 0 0 1-1-1z" fill="currentColor" />
        </svg>
      );
    case "beaker":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4h8v2l-1 1v5.5c0 1.1-.3 2.2-.9 3.2l-.9 1.5a3 3 0 0 1-2.6 1.6h0a3 3 0 0 1-2.6-1.6l-.9-1.5A6 6 0 0 1 7 12.5V7L6 6V4z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10 12.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.5 4H18a1 1 0 0 1 1 1v14H7a1.5 1.5 0 0 0-1.5 1.5V4z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7 4h9.5A1.5 1.5 0 0 1 18 5.5V20" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 5 6v6c0 3.8 2.8 6.9 7 8 4.2-1.1 7-4.2 7-8V6z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.5 12.5 11 14l3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BottomNav() {
  const { locale } = useLocale();

  return (
    <nav className="bottom-nav" aria-label={t(locale, "nav.aria.primary")}>
      {navItems.map((item) => (
        <a key={item.key} href={item.href}>
          <Icon name={item.icon} />
          <span>{t(locale, item.key)}</span>
        </a>
      ))}
    </nav>
  );
}
