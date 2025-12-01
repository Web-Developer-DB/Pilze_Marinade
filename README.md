
# Pilze_Marinade – Mehrsprachiger Marinade-Rechner

Pilze_Marinade ist ein modernes React-Interface zum sicheren Marinieren von Pilzen und Gemüse. Die App kombiniert ein präzises Säure-Berechnungstool mit einer kuratierten Rezeptgalerie, farbtheoretisch abgestimmten Themes, responsivem Layout sowie umfangreichen Accessibility-Maßnahmen (ARIA Live Regions, Tastaturfokus, Screenreader-Texte).

## Features
- **Berechnung & Validierung** – mathematisch korrekte Volumenberechnung in Millilitern mit Summenprüfung, Fehlercodes, optionalem Jar-Modus und zweistufiger Sicherheitsampel (Ziel-Säure/Puffer pH).
- **Mehrsprachig & formatbewusst** – alle Texte liegen in `de`, `en`, `ru`; Umschaltung verändert gleichzeitig Zahlformate dank `Intl.NumberFormat`.
- **Theming & Color Scheme** – Theme-Dropdown plus Light/Dark Toggle greifen auf CSS-Custom-Properties zurück und passen Kontraste automatisch an.
- **Navigation & Layout** – Sticky Header mit mobilem Drawer, Hero-Stats, Highlight Cards, Prozess- & FAQ-Blöcke sowie eine zweigeteilte Rechnerfläche.
- **Rezeptgalerie** – 20 geprüfte russische Traditionsmarinaden mit Tag-Filter, Zutatenliste und Schritt-Anleitungen.
- **Barrierefreiheit** – ARIA-Live-Ankündigungen, klare Fokuszustände, strukturierte Lists/Details, semantische Headings.
- **Unit-Tests** – Jest-Suite prüft Rechenkern, Number-Parser, Rezeptdaten und i18n-Schlüssel.

## Installation & Entwicklung
```bash
npm install
npm run dev
```
- Entwicklungsserver: http://localhost:5173  
- Produktionsbuild: `npm run build`  
- Vorschau-Build: `npm run preview`

## Tests
```bash
npm test
```
Die Tests decken `calcAcidVolumes`, Parser/Formatter (`number.js`), Rezept-Mapping sowie die i18n-Metadaten ab.

## Sicherheitshinweise
- Für Lagerung bei Raumtemperatur Ziel-Säure ≥ 2,5 % und gemessener pH ≤ 4,6.
- Saubere Arbeitsweise: Gläser sterilisieren, heiß abfüllen, dunkel und kühl lagern.
- Bei geringerer Säure (< 2,5 %) ausschließlich gekühlt aufbewahren.

## Projektstruktur
```
src/
├─ components/
│  ├─ MarinadeForm.jsx
│  ├─ RecipeGallery.jsx
│  └─ SiteHeader.jsx
├─ lib/
│  ├─ calc.js
│  ├─ i18n.js
│  ├─ number.js
│  └─ recipes.js
├─ i18n/
│  ├─ de.json
│  ├─ en.json
│  └─ ru.json
└─ __tests__/
   ├─ calc.spec.js
   ├─ number.spec.js
   ├─ recipes.spec.js
   └─ i18n.spec.js
```

## Lizenz
MIT © 2024 – siehe `LICENSE`

---

Open-Source-Projekt von Dimitri B.  
#### Quellcode und Issues: https://github.com/Web-Developer-DB/Pilze_Marinade
