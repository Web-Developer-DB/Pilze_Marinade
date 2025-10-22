
# Pilze_Marinade – Mehrsprachiger Marinade-Rechner

React-Anwendung zur sicheren Berechnung von Essig- und Wasseranteilen für eingelegtes Gemüse oder Pilze. Der Rechner ist internationalisiert (Deutsch, Englisch, Russisch), validiert Eingaben robust und informiert über die notwendige Säure für botulismussichere Vorräte.

## Kernfunktionen
- **Berechnung & Validierung:** mathematisch korrekte Volumenberechnung (2 Dezimalstellen) inkl. Summenprüfung und Fehlercodes.
- **Mehrsprachig:** UI-Strings in `de/en/ru`, Umschaltung per Dropdown, Ausgabe mit `Intl.NumberFormat`.
- **Sicherheits-Ampel:** Ampel-Logik für Ziel-Säure (≥ 2,5 % sicher, 2,0–2,49 % gekühlt, < 2,0 % unsicher) plus pH-Auswertung.
- **Barrierearm:** ARIA-Live-Feedback für Fehler und Ergebnisse, klare Hinweise und optionale Dokumentations- („Im Glas“-)Ansicht.
- **Rezeptgalerie:** 20 aus Russland stammende Traditionsmarinaden, filterbar nach Tags (Tradition, Wintervorrat, Knoblauch u. a.).
- **Unit-Tests:** Jest-Tests für Rechenkern und nummerische Parser.

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
Die Tests decken den Rechenkern (`calcAcidVolumes`), Parsing- und Formatierungsfunktionen sowie die Rezeptdatenbank (`recipes.spec.js`) ab.

## Sicherheitshinweise
- Für Lagerung bei Raumtemperatur Ziel-Säure ≥ 2,5 % und gemessener pH ≤ 4,6.
- Saubere Arbeitsweise: Gläser sterilisieren, heiß abfüllen, dunkel und kühl lagern.
- Bei geringerer Säure (< 2,5 %) ausschließlich gekühlt aufbewahren.

## Projektstruktur
```
src/
├─ components/
│  ├─ MarinadeForm.jsx
│  └─ RecipeGallery.jsx
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
   └─ recipes.spec.js
```

## Lizenz
MIT © 2024 – siehe `LICENSE`

---

Open-Source-Projekt von Dimitri B.  
Quellcode und Issues: https://github.com/Web-Developer-DB/Pilze_Marinade
