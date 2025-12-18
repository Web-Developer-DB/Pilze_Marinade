# Changelog

## 2025-12-05

### Changed
- Navigation überarbeitet: Desktop-Navi mit Icons, vereinheitlichte Drawer-Bedienung (50 %-Breite), rote Close-Taste, Flaggen-basierte Sprachwahl und kompaktere Header-Leiste.
- Themes folgen nun strikt System-Hell/Dunkel mit automatischem Wald-Grund im Dunkelmodus; Kontraste von Hover/Fokus-States wurden für alle Schemen angehoben.
- Sicherheitspanel und weitere Karten erhalten hellere Hintergründe und Textfarben für bessere Lesbarkeit in dunklen Themes.
- Rechner im Kompaktmodus für Smartphones: Inputs, Modus-Umschalter und Ergebnisse sind ohne Scrollen sichtbar, Desktop-Resultate/Status werden auf kleinen Displays ausgeblendet.
- Lagerzweck-Presets plus Eignungsstatus hinzugefügt; Sprach- und Zweckpills mit besserem Kontrast und kompakterem Rechner-Layout.
- Drawer ergänzt um Theme-Umschalter, Rezeptkarten mobil klickbar, Modal-Close-Icon rot; Scroll-Reveal aktiviert.
- Neues Hero-Branding: großes Titel-Slab mit App-Namen, Hintergrundbild (Hero.jpeg) und Badge-Bild statt SVG-Pilz.
- Farbsystem weiter geschärft: Light-Theme erzwingt Waldgrün-Palette, Hero-Texte in Light/Dark separat abgedunkelt, Drawer-Close-Buttons und Navigation in hellen Schemen mit höherem Kontrast.
- Essigstärke-Eingabe merkt sich den Wert lokal im Browser.

### Removed
- Untere Persistent-Navigation zugunsten des vereinheitlichten Drawers/Headers.
- Unbenutzte Legacy-Sections (`Section*.jsx`) mit rein deutschem Inhalt entfernt.

## 2025-12-04

### Fixed
- Viewport-Scaling auf Mobilgeräten komplett deaktiviert, sodass Pinch-Gesten und Doppel-Tap-Zoom das Layout nicht mehr verschieben.

## 2025-12-03

### Fixed
- Rezeptdetails-Modal sitzt nun auf Smartphones sofort mittig, passt sich der Displayhöhe an und sperrt den Seiten-Scroll, sodass kein horizontales Verschieben mehr nötig ist.
- Header-Quicklinks und Burger-Menü bleiben auch auf schmalen Viewports vollständig erreichbar; horizontales Scrollen ist dort nicht mehr erforderlich.

## 2025-12-02

### Changed
- Sämtliche Beschriftungen, Hero-Texte und Formularhinweise beziehen ihre Inhalte jetzt aus dem i18n-Layer, wodurch neue Sprachen einfacher ergänzt werden können.
- Theme-Controls, Navigations-ARIA-Labels sowie die Rezept-Modaldialoge wurden vollständig lokalisiert.
- Deutsche, englische und russische Texte (inklusive Meta-Description und Footer) wurden redigiert, um Grammatik, Terminologie und Stil zu vereinheitlichen.

## 2025-12-01

### Added
- Sticky `SiteHeader` mit Desktop-Navigation, mobilem Drawer und Theme-Toggles.
- Hero-Metriken (Säure, pH, Sprachen) plus Rezept-Metadaten mit Punktlisten.
- Zweispaltige Rechner-Layoutpaneels inkl. Status- und Infobox.
- Neue i18n-Jest-Suite für Navigations- und KPI-Strings.
- Changelog-Dokumentation.

### Changed
- Komplettes Erscheinungsbild (Token-System, globale Typografie, kontraststarke Farben).
- Rezeptkarten, Filter und Footer-Link verlinken und strukturieren Inhalte semantisch korrekt.
- Hero-Badge zeigt jetzt ein stilisiertes Pilz-Icon in natürlichen Farben.
- README erweitert (Features, Scripts, Struktur).

### Removed
- Ehemaliges Glas-Visual im Hero zur Vermeidung von Platzverbrauch / Fotoanmutung.
