import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher.jsx";
import ThemeControls from "./ThemeControls.jsx";
import { useLocale } from "../lib/locale-context.jsx";
import { t } from "../lib/i18n.js";

// Header kümmert sich um:
// - sichtbare Hauptnavigation (Desktop) + Drawer (Mobile)
// - Auto-Hide beim Scrollen
// - Locale-/Theme-Switcher im Header bzw. Drawer
const navItems = [
  { key: "nav.start", href: "#top", icon: "home" },
  { key: "nav.calculator", href: "#marinade-calculator", icon: "beaker" },
  { key: "nav.recipes", href: "#recipes", icon: "book" },
  { key: "nav.process", href: "#process", icon: "steps" },
  { key: "nav.safety", href: "#safety", icon: "shield" },
  { key: "nav.faq", href: "#faq", icon: "help" },
];

function NavIcon({ name }) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5V21H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" strokeWidth="1.7" />
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
    case "steps":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 18h4v-4h4v-4h4V6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10.5 9 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 5 6v6c0 3.8 2.8 6.9 7 8 4.2-1.1 7-4.2 7-8V6z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.5 12.5 11 14l3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "help":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.7 9.4a2.5 2.5 0 1 1 3.6 2.2c-.9.4-1.3.9-1.3 2.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="12" cy="16.8" r=".9" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteHeader() {
  const { locale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.setProperty("overflow", menuOpen ? "hidden" : "");
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (menuOpen) {
        setHidden(false);
        lastY = current;
        return;
      }
      if (current < 80) {
        setHidden(false);
      } else if (current > lastY + 8) {
        setHidden(true);
      } else if (current < lastY - 8) {
        setHidden(false);
      }
      lastY = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${hidden ? "hidden" : ""}`} aria-label={t(locale, "nav.aria.site")}>
      <div className="site-header-inner">
        <a className="brand" href="#top">
          <span className="brand-badge" aria-hidden="true">
            <img src="/Hero.jpeg" alt="" />
          </span>
          <span className="brand-copy sr-only">
            <strong>{t(locale, "brand.name")}</strong>
            <small>{t(locale, "nav.tagline")}</small>
          </span>
        </a>

        <div className="site-actions">
          <nav className="site-nav" aria-label={t(locale, "nav.aria.primary")}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="nav-link">
                <span className="nav-icon">
                  <NavIcon name={item.icon} />
                </span>
                <span>{t(locale, item.key)}</span>
              </a>
            ))}
          </nav>
          <div className="quick-links">
            {navItems.slice(0, 3).map((item) => (
              <a key={item.key} href={item.href}>
                {t(locale, item.key)}
              </a>
            ))}
          </div>
          <LocaleSwitcher />
          <button
            type="button"
            className="menu-trigger"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="site-drawer"
          >
            <span className="menu-trigger-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation" focusable="false">
                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <span className="menu-trigger-label">{t(locale, "nav.menu")}</span>
          </button>
        </div>
      </div>

      <div id="site-drawer" className={`site-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer-overlay" onClick={closeMenu} />
        <div className="drawer-panel">
          <button className="drawer-close" type="button" onClick={closeMenu} aria-label={t(locale, "nav.aria.close")}>
            ×
          </button>
          <nav className="drawer-nav" aria-label={t(locale, "nav.aria.drawer")} onClick={closeMenu}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="nav-link">
                <span className="nav-icon">
                  <NavIcon name={item.icon} />
                </span>
                <span>{t(locale, item.key)}</span>
              </a>
            ))}
          </nav>
          <div className="drawer-controls">
            <ThemeControls />
          </div>
        </div>
      </div>
    </header>
  );
}
