import React, { useEffect, useState } from "react";
import ThemeControls from "./ThemeControls.jsx";
import LocaleSwitcher from "./LocaleSwitcher.jsx";
import { useLocale } from "../lib/locale-context.jsx";
import { t } from "../lib/i18n.js";

const navItems = [
  { key: "nav.start", href: "#top" },
  { key: "nav.calculator", href: "#marinade-calculator" },
  { key: "nav.recipes", href: "#recipes" },
  { key: "nav.process", href: "#process" },
  { key: "nav.safety", href: "#safety" },
  { key: "nav.faq", href: "#faq" },
];

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
    <header className={`site-header ${hidden ? "hidden" : ""}`} aria-label="Pilze_Marinade Navigation">
      <div className="site-header-inner">
        <a className="brand" href="#top">
          <span className="brand-badge" aria-hidden="true">
            <span className="mushroom-cap" />
            <span className="mushroom-stem" />
          </span>
          <span className="brand-copy">
            <strong>Pilze_Marinade</strong>
            <small>{t(locale, "nav.tagline")}</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primär">
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>
              {t(locale, item.key)}
            </a>
          ))}
        </nav>

        <div className="site-actions">
          <div className="quick-links">
            {navItems.slice(0, 3).map((item) => (
              <a key={item.key} href={item.href}>
                {t(locale, item.key)}
              </a>
            ))}
          </div>
          <LocaleSwitcher />
          <ThemeControls />
          <button type="button" className="menu-trigger" onClick={() => setMenuOpen(true)}>
            <span aria-hidden="true">☰</span>
            <span>{t(locale, "nav.menu")}</span>
          </button>
        </div>
      </div>

      <div className={`site-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="drawer-overlay" onClick={closeMenu} />
        <div className="drawer-panel">
          <button className="drawer-close" type="button" onClick={closeMenu} aria-label="Menü schließen">
            ×
          </button>
          <nav className="drawer-nav" aria-label="Mobile Navigation" onClick={closeMenu}>
            {navItems.map((item) => (
              <a key={item.key} href={item.href}>
                {t(locale, item.key)}
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
