# Pilze_Marinade – Multilingualer Säurerechner & Rezepte

Modernes React-Front‑End für sichere Pilzmarinaden. Der Rechner prüft Eingaben, berechnet Essig/Wasser‑Mengen, zeigt Eignung je Lagerzweck und liefert 20 geprüfte Rezepte. Mehrsprachig (DE/EN/RU), systembasiertes Theming (Hell/Dunkel) und mobile-first Layout.

> Zielgruppe: Junior-Entwickler. Jede Sektion erklärt, wo du was findest und wie du etwas anpasst.

## Inhalt
- [Features](#features)
- [Schnellstart](#schnellstart)
- [Scripts](#scripts)
- [Projektstruktur](#projektstruktur)
- [Wesentliche Komponenten](#wesentliche-komponenten)
- [Styling & Farben](#styling--farben)
- [Internationalisierung](#internationalisierung)
- [Theming](#theming)
- [Berechnung & Daten](#berechnung--daten)
- [Tests](#tests)
- [How-To: Änderungen vornehmen](#how-to-änderungen-vornehmen)
- [Troubleshooting](#troubleshooting)
- [Lizenz](#lizenz)

## Features
- **Säure-Rechner**: Plausibilitäts-Checks, Summenprüfung, pH-Indikator, Fehlertexte.
- **Lagerzweck-Presets**: Raumtemperatur / Kühllagerung / Kurzfristig setzen Ziel-Säure, zeigen Eignung.
- **Rezepte**: 20 geprüfte russische Marinaden, Modal-Details, mobil per Card-Tap/Enter/Space öffnend.
- **Mehrsprachig**: Deutsch, Englisch, Russisch (Texte + Zahlformat).
- **Theming**: Systembasiert, manuell umschaltbar; Hell/Dunkel nutzen Waldgrün-Palette.
- **Mobile-Optimiert**: Kompakter Rechner, Sticky-Ergebnisleiste nur bei Resultaten, Drawer-Navigation.
- **Accessibility**: ARIA-Live für Fehler/Resultate, Tastatursteuerung, sichtbare Fokuszustände.

## Schnellstart
```bash
npm install
npm run dev    # http://localhost:5173
```
Prod-Build:
```bash
npm run build
npm run preview
```

## Scripts
- `npm run dev` – Vite Dev-Server
- `npm run build` – Production-Bundle
- `npm run preview` – Serviert das Build lokal
- `npm test` – Jest-Suite

## Projektstruktur
```
public/
  Hero.jpeg            # aktuelles Hero-/Logo-Bild
src/
  components/          # UI-Bausteine
  hooks/               # z.B. useScrollReveal
  i18n/                # Sprachdateien (de/en/ru)
  lib/                 # calc, number, recipes, i18n helper
  styles/              # tokens, global, app, animations
  main.jsx             # React-Entry, bindet App
```

## Wesentliche Komponenten
- `SiteHeader.jsx`: Navigation, Drawer, Locale-Switcher, Theme-Toggle im Drawer.
- `Hero.jsx`: Intro mit Brand-Slab, Hintergrundbild (`public/Hero.jpeg`), CTA-Buttons.
- `MarinadeForm.jsx`: Säure-Rechner, Validierung, Lagerzweck-Presets, Eignungsstatus, pH-Hinweis.
- `RecipeGallery.jsx`: Filterbare Rezepte, Modal mit Zutaten/Schritten; Cards öffnen Modal per Click/Keyboard.
- `ThemeControls.jsx`: System/Light/Dark-Umschalter, setzt `data-scheme` + `data-theme` auf `waldgruen`.
- `useScrollReveal.js`: Fügt `.in` auf `.reveal`-Elemente beim Scroll hinzu (IntersectionObserver).

## Styling & Farben
- **Tokens** (`styles/tokens.css`): Enthält Farbvariablen, Schriftgrößen, Schatten. Light/Dark definieren eigene Paletten. Aktuell erzwingt auch Light die Waldgrün-Palette (kein Orange mehr).
- **Global** (`styles/global.css`): Basis-Typografie, Body-Hintergründe, Standardfarben für h1/h2/h3.
- **App** (`styles/app.css`): Komponenten-Layout, Drawer, Buttons, Hero-Overlays, Rechner-Kompaktmodus.
- **Animations** (`styles/animations.css`): Scroll-Reveal-Animationen, reduziert bei `prefers-reduced-motion`.

## Internationalisierung
- Dateien: `src/i18n/de.json`, `en.json`, `ru.json`.
- Helper: `t(locale, key)` aus `src/lib/i18n.js`. Fallback: Key, wenn nicht gefunden.
- Locale-Switch: Flaggen-Pills im Header/Drawer, `useLocale` Context steuert aktuelle Sprache.
- Zahlen: `parseLocalizedNumber` / `formatNumber` in `src/lib/number.js` nutzen Locale.

## Theming
- Datenattribute: `data-scheme` (light/dark/system) + `data-theme` (waldgruen).
- ThemeToggle: `ThemeControls` (Header-Drawer). Light/Dark erzwingen grüne Palette.
- Farbanpassung (falls nötig): `styles/tokens.css` → Variablen für `--accent`, `--accent-2`, `--accent-3`.

## Berechnung & Daten
- `src/lib/calc.js`: Kernformeln, Grenzwerte, Summencheck.
- `src/components/MarinadeForm.jsx`: Validierung, Fehlermeldungen, Eignungsstatus (safe/chilled/unsafe), pH-Logik, Lagerzweck-Presets, Mobile-Ergebnisleiste.
- `src/lib/recipes.js`: Rezeptdaten + Metadaten; `RecipeGallery` zeigt/filtern/öffnet Modal.

## Tests
- Jest (`npm test`):
  - `calc.spec.js` – Berechnung
  - `number.spec.js` – Parsing/Formatierung
  - `recipes.spec.js` – Datenvalidierung
  - (i18n wurde früher abgedeckt, kann bei neuen Keys ergänzt werden)

## How-To: Änderungen vornehmen
- **Texte ändern**: Passende Keys in `src/i18n/*.json` anpassen. Bei neuen Keys in allen Sprachen ergänzen.
- **Farben ändern**: `styles/tokens.css` bearbeiten; Light/Dark separat testen. Forciertes Grün aktuell in Light/Dark.
- **Hero-Bild tauschen**: Neues Bild nach `public/` legen (z.B. `Hero_new.jpg`), in `styles/app.css` → `.hero-photo` URL anpassen und ggf. Badge-Bild im Header (`SiteHeader.jsx` → `brand-badge`).
- **Drawer/Icon-Farben**: `styles/app.css` → `.drawer-close`, `.drawer-nav a` etc. Hover/Fokus beachten.
- **Neue Sektion mit Reveal**: Element mit `className="reveal"` versehen; `useScrollReveal` ist global aktiv.
- **Form-Logik erweitern**: `MarinadeForm.jsx` – Eingabefelder, Validierung, Fehlermeldungen; Grenzwerte in `ranges`.

## Troubleshooting
- **Farben wirken falsch im Light-Theme**: Prüfe `styles/tokens.css` (Light-Block) und Overrides in `app.css`/`global.css`. Der Toggle setzt immer `data-theme="waldgruen"`.
- **Bild wird nicht angezeigt**: Sicherstellen, dass Datei in `public/` liegt und Pfad `/Dateiname` in CSS/JS stimmt. Browser-Cache leeren.
- **Reveal-Animation triggert nicht**: Prüfe, ob `.reveal` gesetzt ist und `useScrollReveal` (App-UseEffect) läuft; bei `prefers-reduced-motion` deaktiviert.
- **Modal/Drawer nicht schließbar**: Overlay-Click, ESC und Buttons sind verdrahtet; Konsole auf Fehler prüfen.
- **Tests schlagen fehl**: `npm test` ausführen, Fehlermeldung beachten; häufig fehlen i18n-Keys oder Daten sind invalid.

## Lizenz
MIT-Lizenz – siehe `LICENSE`.
