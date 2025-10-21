
# Pilze marinieren – React (Modern UI)

Aktualisierte Einmach-Anleitung mit einer modernen, animierten Oberfläche. Das Interface bringt klare Kontraste, Glas-Effekte und flüssige Reveal-Animationen, damit Rezepte und Sicherheitsangaben schnell erfassbar bleiben – egal ob mobil oder am Desktop.

## Highlights
- **Hero-Redesign:** animierte Ambient-Light-Flächen, prägnante CTAs und Chips-Navigation.
- **Theme Controls:** persistente Farbwelten (Erdtöne, Waldgrün, Kontrast) inklusive Light/Dark-Schalter.
- **Säure-Rechner 2.0:** strukturierte Kartenansicht, Status-Pills für den pH-Wert, printbare Checkliste.
- **Micro-Interactions:** Hover-, Orbit- und Scroll-Reveal-Effekte für Karten, Buttons und Badges.
- **Barrierearme Typografie:** optimierte Abstände, Farbkontraste und responsiver Satz auf Basis von Vite + React 18.

## Installation & Entwicklung
```bash
npm install
npm run dev
```

- Development-Server: http://localhost:5173
- Production-Build: `npm run build` (Artefakte landen in `dist/`)
- Preview-Build: `npm run preview`

## Sicherheits-Update (Essigsäure)

Die App kalkuliert weiterhin mit **25 % Essigessenz** im Verhältnis **1,8 : 1** zu Zusatzwasser. Ziel-pH liegt bei **≤ 4,6**.

### Modus & pH-Check
- **Standard:** 2,5 % Essigsäure
- **Robust:** 3,0 % oder 3,5 % (Schnellauswahl-Buttons)
- **pH-Ampel:** OK ≤ 4,6 · Grenzfall 4,61 – 4,80 · Nicht OK > 4,8
- **Print-Ansicht:** Prozess-Checkliste via Browser-Druck exportieren

*Hinweis:* Für 1000 g vorgekochte Pilze + 700 g Wasser ergeben sich bei 3,5 % Ziel-Säure 161,2 g Essigessenz 25 % + 290,1 g Zusatzwasser.

## Technik
- Vite 5 · React 18
- CSS mit modernen Farb-Mix-Funktionen (oklab), glassmorphische Layer, IntersectionObserver für Scroll-Reveal
- Keine Server-Komponenten – vollständig clientseitig und offline nutzbar

## Lizenz
MIT © 2024 – Siehe `LICENSE`
