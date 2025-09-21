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

export default function AcidCalculator() {
  const [pilze, setPilze] = useState("1000");
  const [wasserFaktor, setWasserFaktor] = useState("0,7");
  const [ziel, setZiel] = useState("2,5"); // % Essigsäure im Gesamt-Sud
  const [modus, setModus] = useState("standard"); // 'standard' | 'robust'
  const [robustZiel, setRobustZiel] = useState("3,0");
  const [ph, setPh] = useState("");

  const results = useMemo(() => {
    const p = Math.max(0, parseNumberDE(pilze) || 0); // Pilzgewicht, g
    const wf = Math.max(0, parseNumberDE(wasserFaktor) || 0); // Wasserfaktor
    const zielPct = Math.max(0.1, parseNumberDE(ziel) || 0); // in % (verhindert 0)

    const wasser = p * wf; // g

    // 0,25 * e / (wasser + e + 1,8e) = ziel% / 100
    const A = 0.25; // 25 % Essigessenz
    const ratioZusatz = 1.8; // Zusatzwasser:Essenz
    const r = zielPct / 100;

    // Umstellen nach e: e = (r * wasser) / (A - r * (1 + ratioZusatz))
    const denom = A - r * (1 + ratioZusatz);
    const e = denom > 0 ? (r * wasser) / denom : NaN;
    const zusatz = Number.isFinite(e) ? ratioZusatz * e : NaN;
    const total = Number.isFinite(e) ? wasser + e + zusatz : wasser; // falls ungültig

    const valid = Number.isFinite(e) && e >= 0 && zusatz >= 0;

    return { wasser, e, zusatz, total, valid, rMax: (A / (1 + ratioZusatz)) * 100 };
  }, [pilze, wasserFaktor, ziel]);

  const phStatus = useMemo(() => {
    const v = parseNumberDE(ph);
    if (!Number.isFinite(v)) return { label: "—", cls: "status" };
    if (v <= 4.6) return { label: "OK (≤ 4,6)", cls: "status ok" };
    if (v <= 4.8) return { label: "Grenzfall (4,61–4,80)", cls: "status warn" };
    return { label: "Nicht OK (> 4,8)", cls: "status bad" };
  }, [ph]);

  // Hilfs-Setter, die Komma erlauben
  const onNumInput = (setter) => (e) => setter(e.target.value);

  return (
    <section className="acid-calc reveal" style={{ margin: "2rem 0" }}>
      <h2>Säure-Rechner (25 % Essigessenz, Verhältnis Zusatzwasser:Essenz = 1,8:1)</h2>

      <div
        className="mode-toggle"
        style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.25rem 0 0.5rem" }}
      >
        <label className={"chip " + (modus === "standard" ? "active" : "")}>
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
        <label className={"chip " + (modus === "robust" ? "active" : "")}>
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
          <span style={{ display: "inline-flex", gap: "0.4rem" }}>
            <button
              type="button"
              className={"btn " + (robustZiel === "3,0" ? "active" : "")}
              onClick={() => {
                setRobustZiel("3,0");
                setZiel("3,0");
              }}
            >
              3,0 %
            </button>
            <button
              type="button"
              className={"btn " + (robustZiel === "3,5" ? "active" : "")}
              onClick={() => {
                setRobustZiel("3,5");
                setZiel("3,5");
              }}
            >
              3,5 %
            </button>
          </span>
        )}
      </div>

      <div className="preset" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.5rem 0 0.75rem" }}>
        <button type="button" onClick={() => setZiel("2,5")} className="btn">
          2,5 %
        </button>
        <button type="button" onClick={() => setZiel("3,0")} className="btn">
          3,0 %
        </button>
        <button type="button" onClick={() => setZiel("3,5")} className="btn">
          3,5 %
        </button>
      </div>

      <div
        className="grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", alignItems: "end" }}
      >
        <label className="field">
          <span>Pilzgewicht (vorgekocht, g)</span>
          <input
            inputMode="decimal"
            aria-label="Pilzgewicht in Gramm"
            value={pilze}
            onChange={onNumInput(setPilze)}
          />
        </label>
        <label className="field">
          <span>Wasserfaktor</span>
          <input
            inputMode="decimal"
            aria-label="Wasserfaktor"
            value={wasserFaktor}
            onChange={onNumInput(setWasserFaktor)}
          />
          <small>Standard: 0,70 → Wasser ≈ 0,70 × Pilzgewicht</small>
        </label>
        <label className="field">
          <span>Ziel-Säure %</span>
          <input inputMode="decimal" aria-label="Ziel-Säure in Prozent" value={ziel} onChange={onNumInput(setZiel)} />
          <small>Empfohlen: 2,5 % (3,0 % möglich)</small>
        </label>
      </div>

      <div
        className="results"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}
      >
        <div className="badge">
          <strong>Wasser</strong>
          <div>{formatInt(results.wasser)} g</div>
        </div>
        <div className="badge">
          <strong>Essigessenz 25 %</strong>
          <div>{results.valid ? formatInt(results.e) : "—"} g</div>
        </div>
        <div className="badge">
          <strong>Zusatzwasser</strong>
          <div>{results.valid ? formatInt(results.zusatz) : "—"} g</div>
        </div>
        <div className="badge">
          <strong>Gesamt-Flüssigkeit</strong>
          <div>{results.valid ? formatInt(results.total) : formatInt(results.wasser)} g</div>
        </div>
      </div>

      <div
        className="ph-check reveal"
        style={{ marginTop: "0.75rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", alignItems: "center" }}
      >
        <label className="field">
          <span>pH-Wert eingeben (nach 12–24 h Gleichgewicht):</span>
          <input
            inputMode="decimal"
            aria-label="pH-Wert"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <strong>Status:</strong>
          <span className={phStatus.cls}>{phStatus.label}</span>
        </div>
      </div>

      {!results.valid && (
        <p style={{ color: "crimson", marginTop: "0.5rem" }}>
          Ziel-Prozent ist zu hoch für 25 % Essigessenz mit 1,8:1-Zusatzwasser. Bitte Zielwert reduzieren.
          <br />
          (Theoretisches Maximum bei diesen Annahmen: ≈ {formatInt(results.rMax * 10) / 10} %)
        </p>
      )}

      <p style={{ marginTop: "0.75rem", fontSize: "0.95rem" }}>
        Formel: 0,25 × e / (Wasser + e + 1,8e) = Ziel% / 100 ⇒ e = (Ziel%/100 × Wasser) / (0,25 − Ziel%/100 × (1 + 1,8)).
      </p>
      <p style={{ marginTop: "0.25rem" }}>
        Sicherheits-Hinweis: Ziel-pH ≤ 4,6; kein Öl-Überstand bei mildem Sud. Hallimasch stets gründlich vorkochen und
        Kochwasser verwerfen.
      </p>

      <style>{`
        .acid-calc .field input {
          width: 100%;
          padding: 0.5rem 0.6rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(0,0,0,0.15);
        }
        .acid-calc .badge {
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 1rem;
          padding: 0.75rem;
          box-shadow: 0 1px 8px rgba(0,0,0,0.04);
          background: white;
        }
        .chip { display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.6rem; border:1px solid rgba(0,0,0,0.15); border-radius:999px; background:#fff; cursor:pointer; }
        .chip input { display:none; }
        .chip.active { box-shadow: 0 1px 6px rgba(0,0,0,0.08); }
        .status { padding:0.25rem 0.5rem; border-radius:0.5rem; border:1px solid rgba(0,0,0,0.15); }
        .status.ok { background:#e9f7ef; border-color:#bde5c8; }
        .status.warn { background:#fff7e6; border-color:#ffe0a6; }
        .status.bad { background:#fdecea; border-color:#f5c6c2; }
        @media print {
          .btn, .mode-toggle, .preset, .print-actions, .grid, .ph-check { display:none !important; }
          .print-area { display:block; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
        .reveal { animation: reveal 0.6s ease both; }
        @keyframes reveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .btn { padding: 0.4rem 0.7rem; border: 1px solid rgba(0,0,0,0.15); border-radius: 0.6rem; background:#fff; cursor:pointer; }
        .btn:hover { box-shadow: 0 1px 6px rgba(0,0,0,0.08); }
      `}</style>

      <h3 style={{ marginTop: "1rem" }}>Prozess-Hinweis</h3>
      <ul>
        <li>Pilze vorgaren und gut abtropfen lassen.</li>
        <li>
          Marinade mit Gewürzen <strong>ohne Öl</strong> aufkochen, Pilze zugeben und <strong>10 Minuten</strong> simmernd
          ziehen lassen.
        </li>
        <li>
          <strong>Essigessenz erst zum Schluss einrühren</strong> und die Mischung nochmals <strong>1–2 Minuten sprudelnd
          aufkochen</strong>, damit der gesamte Sud hygienisch erhitzt ist.
        </li>
        <li>Heiß in sterilisierte Gläser füllen, nach geprüftem Verfahren wasserbad-verarbeiten (je nach Glasgröße).</li>
      </ul>

      <div className="print-actions" style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button type="button" className="btn" onClick={() => window.print()}>
          Drucken / Export
        </button>
      </div>

      <div className="prozess-checkliste reveal print-area" style={{ marginTop: "1rem" }}>
        <h3>Prozess-Checkliste</h3>
        <ol style={{ paddingLeft: "1.25rem" }}>
          <li>
            Pilze gründlich <strong>vorkochen</strong>, anschließend gut <strong>abtropfen</strong>.
          </li>
          <li>Marinade mit Gewürzen <strong>ohne Öl</strong> aufkochen.</li>
          <li>Pilze zugeben und <strong>10 Minuten</strong> simmernd ziehen lassen.</li>
          <li>
            <strong>Essigessenz am Ende</strong> einrühren und nochmals <strong>1–2 Minuten sprudelnd aufkochen</strong>.
          </li>
          <li>
            Heiß in sterilisierte Gläser füllen; nach <strong>geprüftem Verfahren</strong> im Wasserbad verarbeiten (je nach
            Glasgröße).
          </li>
          <li>
            Nach 12–24 h <strong>pH messen</strong> (Ziel ≤ 4,6; besser ≤ 4,2) und dokumentieren.
          </li>
        </ol>
      </div>
    </section>
  );
}
