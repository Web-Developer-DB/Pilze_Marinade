import React, { useMemo, useState } from "react";

/**
 * Säure-Rechner für eingelegte Pilze
 * - 25 % Essigessenz (massenprozent), Zusatzwasser:Essenz = 1,8:1
 * - Ziel-Säure in % bezieht sich auf den Gesamt-Sud (Masse ~ Volumen bei ~1 g/ml angenommen)
 *
 * Verbesserungen gegenüber Vorlage:
 * - Sauberes State-Handling (keine DOM-Manipulation; pH-Status via State)
 * - Dezimal-Komma-Unterstützung bei Eingaben ("," → ".")
 * - Komponentenisolation, a11y, kleine Textfehler behoben ("10 Minutes" → "10 Minuten")
 * - CSS-Template korrekt geschlossen (kein „herausgefallenes“ CSS)
 * - Validierungslogik & numerische Kantenfälle robuster
 */

function parseNumberDE(value) {
  if (value == null) return NaN;
  const trimmed = String(value).trim();
  if (!trimmed) return NaN;

  const compact = trimmed.replace(/[\s\u00a0\u202f']/g, '');
  const lastComma = compact.lastIndexOf(',');
  const lastDot = compact.lastIndexOf('.');
  let normalized = compact;

  if (lastComma > lastDot) {
    normalized = normalized.replace(/\./g, '').replace(/,/g, '.');
  } else if (lastDot > lastComma) {
    const candidate = normalized.replace(/^[+-]/, '');
    if (/^\d{1,3}(\.\d{3})+$/.test(candidate)) {
      normalized = normalized.replace(/\./g, '');
    } else {
      const dotCount = (normalized.match(/\./g) || []).length;
      if (dotCount > 1) {
        normalized = normalized.replace(/\.(?=.*\.)/g, '');
      }
    }
    normalized = normalized.replace(/,/g, '');
  } else {
    normalized = normalized.replace(/,/g, '.');
  }

  const n = Number(normalized);
  return Number.isFinite(n) ? n : NaN;
}

function formatInt(n) {
  return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(Math.round(n));
}

function formatDecimal(n, digits = 1) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}

export default function AcidCalculator() {
  const [pilze, setPilze] = useState("1000");
  const [wasserFaktor, setWasserFaktor] = useState("0,7");
  const [ziel, setZiel] = useState("2,5"); // % Essigsäure im Gesamt-Sud
  const [modus, setModus] = useState("standard"); // 'standard' | 'robust'
  const [robustZiel, setRobustZiel] = useState("3,0");
  const [ph, setPh] = useState("");

  const results = useMemo(() => {
    const ratioZusatz = 1.8; // Zusatzwasser:Essenz
    const ratioMax = (0.25 / (1 + ratioZusatz)) * 100; // theoretisches Maximum in %

    const parsedPilze = parseNumberDE(pilze);
    const parsedWasserFaktor = parseNumberDE(wasserFaktor);
    const parsedZiel = parseNumberDE(ziel);

    const invalidInputs = [];
    if (!Number.isFinite(parsedPilze) || parsedPilze <= 0) invalidInputs.push('pilze');
    if (!Number.isFinite(parsedWasserFaktor) || parsedWasserFaktor <= 0) invalidInputs.push('wasserFaktor');
    if (!Number.isFinite(parsedZiel) || parsedZiel <= 0) invalidInputs.push('ziel');

    if (invalidInputs.length) {
      return {
        valid: false,
        reason: 'input',
        invalidInputs,
        wasser: null,
        e: null,
        zusatz: null,
        total: null,
        rMax: ratioMax,
      };
    }

    const wasser = parsedPilze * parsedWasserFaktor; // g
    const A = 0.25; // 25 % Essigessenz
    const r = parsedZiel / 100;
    const denom = A - r * (1 + ratioZusatz);

    if (denom <= 0) {
      return {
        valid: false,
        reason: 'limit',
        invalidInputs: [],
        wasser,
        e: null,
        zusatz: null,
        total: null,
        rMax: ratioMax,
      };
    }

    const e = (r * wasser) / denom;
    const zusatz = ratioZusatz * e;
    const total = wasser + e + zusatz;

    if (!Number.isFinite(e) || e < 0 || !Number.isFinite(zusatz) || zusatz < 0 || !Number.isFinite(total) || total <= 0) {
      return {
        valid: false,
        reason: 'math',
        invalidInputs: [],
        wasser: Number.isFinite(wasser) ? wasser : null,
        e: null,
        zusatz: null,
        total: null,
        rMax: ratioMax,
      };
    }

    return {
      valid: true,
      reason: null,
      invalidInputs: [],
      wasser,
      e,
      zusatz,
      total,
      rMax: ratioMax,
    };
  }, [pilze, wasserFaktor, ziel]);

  const phStatus = useMemo(() => {
    const v = parseNumberDE(ph);
    if (!Number.isFinite(v)) return { label: "—", state: "neutral" };
    if (v <= 4.6) return { label: "OK (≤ 4,6)", state: "ok" };
    if (v <= 4.8) return { label: "Grenzfall (4,61–4,80)", state: "warn" };
    return { label: "Nicht OK (> 4,8)", state: "bad" };
  }, [ph]);

  const invalidKeys = useMemo(() => new Set(results.invalidInputs || []), [results.invalidInputs]);

  const formatResult = (value) => (Number.isFinite(value) ? formatInt(value) : "—");

  const fieldLabels = {
    pilze: "Pilzgewicht",
    wasserFaktor: "Wasserfaktor",
    ziel: "Ziel-Säure %",
  };

  let alertContent = null;
  if (results.reason === "input") {
    const labels = results.invalidInputs.map((key) => fieldLabels[key]).filter(Boolean);
    alertContent = labels.length
      ? <>Bitte gültige, positive Zahlen für {labels.join(", ")} eingeben (nur Ziffern, Komma oder Punkt).</>
      : <>Bitte Eingaben prüfen – nur positive Zahlen verwenden.</>;
  } else if (results.reason === "limit") {
    alertContent = (
      <>
        Ziel-Prozent ist zu hoch für 25&nbsp;% Essigessenz bei 1,8&nbsp;:&nbsp;1 Zusatzwasser. Bitte Zielwert reduzieren
        (Maximum ≈ {formatDecimal(results.rMax, 1)}&nbsp;%).
      </>
    );
  } else if (results.reason === "math") {
    alertContent = <>Berechnung fehlgeschlagen (Zahlenbereich zu groß oder unplausibel). Bitte Eingaben überprüfen.</>;
  }

  // Hilfs-Setter, die Komma erlauben
  const onNumInput = (setter) => (e) => setter(e.target.value);

  return (
    <section id="saeure-rechner" className="card acid-calc reveal" aria-labelledby="acid-title">
      <h2 id="acid-title">Säure-Rechner (25 % Essigessenz, Verhältnis Zusatzwasser:Essenz = 1,8:1)</h2>

      <div className="mode-toggle" role="group" aria-label="Rechenmodus">
        <label className={`chip ${modus === "standard" ? "active" : ""}`}>
          <input
            type="radio"
            name="mode"
            value="standard"
            checked={modus === "standard"}
            onChange={() => {
              setModus("standard");
              setZiel("2,5");
            }}
          />
          Standard (2,5 %)
        </label>
        <label className={`chip ${modus === "robust" ? "active" : ""}`}>
          <input
            type="radio"
            name="mode"
            value="robust"
            checked={modus === "robust"}
            onChange={() => {
              setModus("robust");
              setZiel(robustZiel);
            }}
          />
          Robust
        </label>
        {modus === "robust" && (
          <div className="robust-options">
            <button
              type="button"
              className={`btn ${robustZiel === "3,0" ? "active" : ""}`}
              onClick={() => {
                setRobustZiel("3,0");
                setZiel("3,0");
              }}
            >
              3,0 %
            </button>
            <button
              type="button"
              className={`btn ${robustZiel === "3,5" ? "active" : ""}`}
              onClick={() => {
                setRobustZiel("3,5");
                setZiel("3,5");
              }}
            >
              3,5 %
            </button>
          </div>
        )}
      </div>

      <div className="preset-buttons" aria-label="Schnellauswahl Ziel-Säure">
        <button type="button" onClick={() => setZiel("2,5")} className={`btn ${ziel === "2,5" ? "active" : ""}`}>
          2,5 %
        </button>
        <button type="button" onClick={() => setZiel("3,0")} className={`btn ${ziel === "3,0" ? "active" : ""}`}>
          3,0 %
        </button>
        <button type="button" onClick={() => setZiel("3,5")} className={`btn ${ziel === "3,5" ? "active" : ""}`}>
          3,5 %
        </button>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>Pilzgewicht (vorgekocht, g)</span>
          <input
            inputMode="decimal"
            aria-label="Pilzgewicht in Gramm"
            value={pilze}
            onChange={onNumInput(setPilze)}
            className={invalidKeys.has('pilze') ? "invalid" : ""}
            aria-invalid={invalidKeys.has('pilze')}
          />
        </label>
        <label className="field">
          <span>Wasserfaktor</span>
          <input
            inputMode="decimal"
            aria-label="Wasserfaktor"
            value={wasserFaktor}
            onChange={onNumInput(setWasserFaktor)}
            className={invalidKeys.has('wasserFaktor') ? "invalid" : ""}
            aria-invalid={invalidKeys.has('wasserFaktor')}
          />
          <small>Standard: 0,70 → Wasser ≈ 0,70 × Pilzgewicht</small>
        </label>
        <label className="field">
          <span>Ziel-Säure %</span>
          <input
            inputMode="decimal"
            aria-label="Ziel-Säure in Prozent"
            value={ziel}
            onChange={onNumInput(setZiel)}
            className={invalidKeys.has('ziel') ? "invalid" : ""}
            aria-invalid={invalidKeys.has('ziel')}
          />
          <small>Empfohlen: 2,5 % (3,0 % möglich)</small>
        </label>
      </div>

      <div className="result-grid">
        <div className="badge result-pill">
          <strong>Wasser</strong>
          <span>{formatResult(results.wasser)} g</span>
        </div>
        <div className="badge result-pill">
          <strong>Essigessenz 25 %</strong>
          <span>{formatResult(results.e)} g</span>
        </div>
        <div className="badge result-pill">
          <strong>Zusatzwasser</strong>
          <span>{formatResult(results.zusatz)} g</span>
        </div>
        <div className="badge result-pill">
          <strong>Gesamt-Flüssigkeit</strong>
          <span>{results.valid ? formatResult(results.total) : formatResult(results.wasser)} g</span>
        </div>
      </div>

      <div className="ph-check">
        <label className="field">
          <span>pH-Wert eingeben (nach 12–24 h Gleichgewicht):</span>
          <input
            inputMode="decimal"
            aria-label="pH-Wert"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </label>
        <div className="status-wrap">
          <strong>Status:</strong>
          <span className={`status ${phStatus.state}`}>{phStatus.label}</span>
        </div>
      </div>

      {alertContent && (
        <p className={`calc-alert ${results.reason === "input" ? "warn" : "danger"}`}>
          {alertContent}
        </p>
      )}

      <p className="formula">
        Formel: 0,25 × e / (Wasser + e + 1,8e) = Ziel% / 100 ⇒ e = (Ziel%/100 × Wasser) / (0,25 − Ziel%/100 × (1 + 1,8)).
      </p>
      <p className="calc-note">
        Sicherheits-Hinweis: Ziel-pH ≤ 4,6; kein Öl-Überstand bei mildem Sud. Hallimasch stets gründlich vorkochen und Kochwasser
        verwerfen.
      </p>

      <h3>Prozess-Hinweis</h3>
      <ul className="calc-list">
        <li>Pilze vorgaren und gut abtropfen lassen.</li>
        <li>
          Marinade mit Gewürzen <strong>ohne Öl</strong> aufkochen, Pilze zugeben und <strong>10 Minuten</strong> simmernd ziehen lassen.
        </li>
        <li>
          <strong>Essigessenz erst zum Schluss einrühren</strong> und die Mischung nochmals <strong>1–2 Minuten sprudelnd aufkochen</strong>, damit der gesamte Sud hygienisch erhitzt ist.
        </li>
        <li>Heiß in sterilisierte Gläser füllen, nach geprüftem Verfahren wasserbad-verarbeiten (je nach Glasgröße).</li>
      </ul>

      <div className="print-actions">
        <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
          Drucken / Export
        </button>
      </div>

      <div className="prozess-checkliste reveal print-area">
        <h3>Prozess-Checkliste</h3>
        <ol>
          <li>
            Pilze gründlich <strong>vorkochen</strong>, anschließend gut <strong>abtropfen</strong>.
          </li>
          <li>Marinade mit Gewürzen <strong>ohne Öl</strong> aufkochen.</li>
          <li>Pilze zugeben und <strong>10 Minuten</strong> simmernd ziehen lassen.</li>
          <li>
            <strong>Essigessenz am Ende</strong> einrühren und nochmals <strong>1–2 Minuten sprudelnd aufkochen</strong>.
          </li>
          <li>
            Heiß in sterilisierte Gläser füllen; nach <strong>geprüftem Verfahren</strong> im Wasserbad verarbeiten (je nach Glasgröße).
          </li>
          <li>
            Nach 12–24 h <strong>pH messen</strong> (Ziel ≤ 4,6; besser ≤ 4,2) und dokumentieren.
          </li>
        </ol>
      </div>
    </section>
  );
}
