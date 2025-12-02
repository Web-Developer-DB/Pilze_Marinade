import React, { createContext, useContext, useMemo, useState } from "react";
import { supportedLocales } from "./i18n.js";

const LocaleContext = createContext(null);

function detectInitialLocale() {
  if (typeof navigator !== "undefined" && navigator.language) {
    const short = navigator.language.slice(0, 2).toLowerCase();
    if (supportedLocales().includes(short)) {
      return short;
    }
  }
  return "de";
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(detectInitialLocale);
  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
