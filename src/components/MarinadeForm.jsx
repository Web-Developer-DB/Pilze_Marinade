import React, { useMemo, useState } from "react";
import { calcAcidVolumes, safetyStatus } from "../lib/calc.js";
import { parseLocalizedNumber, formatNumber } from "../lib/number.js";
import { supportedLocales, t } from "../lib/i18n.js";
import { useLocale } from "../lib/locale-context.jsx";

const ranges = {
  total: { min: 1, max: 20000 },
  vinegar: { min: 3, max: 25 },
  target: { min: 0, max: 5 },
};

const fieldOrder = ["total", "vinegar", "target"];

function getSafetyMeta(code) {
  switch (code) {
    case "safe":
      return { tone: "green", key: "status.safe" };
    case "chilled":
      return { tone: "yellow", key: "status.chilled" };
    case "unsafe":
      return { tone: "red", key: "status.unsafe" };
    default:
      return { tone: "neutral", key: "status.unknown" };
  }
}

function getPhMeta(code) {
  switch (code) {
    case "ok":
      return { tone: "green", key: "ph.status.ok" };
    case "warn":
      return { tone: "yellow", key: "ph.status.warn" };
    case "bad":
      return { tone: "red", key: "ph.status.bad" };
    default:
      return { tone: "neutral", key: "ph.status.none" };
  }
}

function buildAriaList(list) {
  return list.length ? list.join(" • ") : "";
}

export default function MarinadeForm() {
  const { locale, setLocale } = useLocale();
  const [mode, setMode] = useState("calc"); // calc | jar
  const [inputs, setInputs] = useState({
    total: "",
    vinegar: "",
    target: "",
    ph: "",
  });
  const [touched, setTouched] = useState({});

  const evaluation = useMemo(() => {
    const parsed = {};
    const fieldErrors = {};
    const missing = new Set();

    for (const field of fieldOrder) {
      const raw = inputs[field];
      if (!raw || !raw.trim()) {
        fieldErrors[field] = "required";
        missing.add(field);
        continue;
      }
      const value = parseLocalizedNumber(raw);
      if (!Number.isFinite(value)) {
        fieldErrors[field] = "invalidNumber";
        continue;
      }
      const range = ranges[field];
      if (range && (value < range.min || value > range.max)) {
        fieldErrors[field] = "range";
      } else {
        parsed[field] = value;
      }
    }

    if (!fieldErrors.target && parsed.target != null && parsed.vinegar != null && parsed.target > parsed.vinegar) {
      fieldErrors.target = "ratio";
    }

    let result = null;
    let sumOk = false;

    const blockingErrors = Object.values(fieldErrors).some(Boolean);
    const readyForCalc = mode === "calc" && !blockingErrors;

    if (readyForCalc) {
      try {
        result = calcAcidVolumes({
          totalMl: parsed.total,
          targetPct: parsed.target,
          vinegarPct: parsed.vinegar,
        });
        sumOk = Math.abs(result.vinegarMl + result.waterMl - parsed.total) <= 0.01;
      } catch (err) {
        fieldErrors.generic = "math";
        result = null;
        sumOk = false;
      }
    }

    const targetForStatus = parsed.target;
    const safety = Number.isFinite(targetForStatus) ? safetyStatus(targetForStatus) : "unknown";

    const phRaw = inputs.ph;
    let phError = null;
    let phState = "none";
    let phValue = null;

    if (phRaw && phRaw.trim()) {
      const parsedPh = parseLocalizedNumber(phRaw);
      if (!Number.isFinite(parsedPh)) {
        phError = "invalidNumber";
      } else {
        phValue = parsedPh;
        if (parsedPh <= 4.6) phState = "ok";
        else if (parsedPh <= 4.8) phState = "warn";
        else phState = "bad";
      }
    }

    return {
      parsed,
      fieldErrors,
      result,
      sumOk,
      safety,
      missing,
      phError,
      phState,
      phValue,
      readyForCalc,
    };
  }, [inputs, mode]);

  const localeOptions = supportedLocales();

  const onInputChange = (field) => (event) => {
    const value = event.target.value;
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const onBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const showFieldError = (field) => {
    const code = evaluation.fieldErrors[field];
    if (!code) return null;
    if (code === "required" && !touched[field]) return null;
    return t(locale, `errors.${code}`);
  };

  const errorsForAnnouncement = [];
  for (const field of fieldOrder) {
    const message = showFieldError(field);
    if (message) errorsForAnnouncement.push(message);
  }
  if (evaluation.fieldErrors.generic) {
    errorsForAnnouncement.push(t(locale, `errors.${evaluation.fieldErrors.generic}`));
  }
  if (evaluation.phError) {
    errorsForAnnouncement.push(t(locale, `errors.${evaluation.phError}`));
  }

  const safetyMeta = getSafetyMeta(evaluation.safety);
  const phMeta = getPhMeta(evaluation.phState);
  const targetValue = Number.isFinite(evaluation.parsed?.target)
    ? formatNumber(evaluation.parsed.target, locale, 2)
    : null;

  const formattedResult = evaluation.result
    ? {
        vinegar: formatNumber(evaluation.result.vinegarMl, locale, 2),
        water: formatNumber(evaluation.result.waterMl, locale, 2),
        total: formatNumber(evaluation.parsed.total, locale, 2),
        target: formatNumber(evaluation.parsed.target, locale, 2),
        vinegarPct: formatNumber(evaluation.parsed.vinegar, locale, 2),
      }
    : null;

  const resultAnnouncement = evaluation.result
    ? [
        `${t(locale, "results.vinegar")}: ${formattedResult.vinegar}`,
        `${t(locale, "results.water")}: ${formattedResult.water}`,
      ].join(" • ")
    : "";

  return (
    <section id="marinade-calculator" className="marinade-card" aria-labelledby="marinade-title">
      <header className="marinade-header">
        <div>
          <p className="eyebrow">Pilze_Marinade</p>
          <h1 id="marinade-title">{t(locale, "app.title")}</h1>
          <p className="lead">{t(locale, "app.lead")}</p>
        </div>
        <label className="locale-switch" htmlFor="locale-select">
          <span className="locale-label" aria-hidden="true">🌍</span>
          <span className="locale-text">{t(locale, "locale.switch")}</span>
          <select
            id="locale-select"
            value={locale}
            onChange={(event) => setLocale(event.target.value)}
            aria-label={t(locale, "locale.switch")}
          >
            {localeOptions.map((loc) => (
              <option value={loc} key={loc}>
                {t(locale, `locale.${loc}`)}
              </option>
            ))}
          </select>
        </label>
      </header>

      <div className="mode-toggle" role="group" aria-label="Mode">
        <label className={mode === "calc" ? "active" : ""}>
          <input
            type="radio"
            name="mode"
            value="calc"
            checked={mode === "calc"}
            onChange={() => setMode("calc")}
          />
          {t(locale, "input.mode.calculated")}
        </label>
        <label className={mode === "jar" ? "active" : ""}>
          <input
            type="radio"
            name="mode"
            value="jar"
            checked={mode === "jar"}
            onChange={() => setMode("jar")}
          />
          {t(locale, "input.mode.jar")}
        </label>
      </div>

      {mode === "jar" && <p className="mode-note">{t(locale, "input.mode.note")}</p>}

      <form className="marinade-form" noValidate>
        <fieldset>
          <legend className="sr-only">Inputs</legend>
          <div className="field">
            <label htmlFor="field-total">{t(locale, "input.total.label")}</label>
            <input
              id="field-total"
              inputMode="decimal"
              autoComplete="off"
              placeholder={t(locale, "placeholder.number")}
              value={inputs.total}
              onChange={onInputChange("total")}
              onBlur={onBlur("total")}
              aria-describedby="total-help"
            />
            <p id="total-help" className="hint">
              {t(locale, "input.total.help")}
            </p>
            {showFieldError("total") && <p className="error">{showFieldError("total")}</p>}
          </div>

          <div className="field">
            <label htmlFor="field-vinegar">{t(locale, "input.vinegar.label")}</label>
            <input
              id="field-vinegar"
              inputMode="decimal"
              autoComplete="off"
              placeholder={t(locale, "placeholder.number")}
              value={inputs.vinegar}
              onChange={onInputChange("vinegar")}
              onBlur={onBlur("vinegar")}
              aria-describedby="vinegar-help"
            />
            <p id="vinegar-help" className="hint">
              {t(locale, "input.vinegar.help")}
            </p>
            {showFieldError("vinegar") && <p className="error">{showFieldError("vinegar")}</p>}
          </div>

          <div className="field">
            <label htmlFor="field-target">{t(locale, "input.target.label")}</label>
            <input
              id="field-target"
              inputMode="decimal"
              autoComplete="off"
              placeholder={t(locale, "placeholder.number")}
              value={inputs.target}
              onChange={onInputChange("target")}
              onBlur={onBlur("target")}
              aria-describedby="target-help"
            />
            <p id="target-help" className="hint">
              {t(locale, "input.target.help")}
            </p>
            {showFieldError("target") && <p className="error">{showFieldError("target")}</p>}
          </div>

          <div className="field">
            <label htmlFor="field-ph">{t(locale, "input.ph.label")}</label>
            <input
              id="field-ph"
              inputMode="decimal"
              autoComplete="off"
              placeholder="4,50"
              value={inputs.ph}
              onChange={onInputChange("ph")}
              onBlur={onBlur("ph")}
            />
            {evaluation.phError && (
              <p className="error">{t(locale, `errors.${evaluation.phError}`)}</p>
            )}
          </div>
        </fieldset>
      </form>

      <div className="sr-only" role="status" aria-live="polite">
        {buildAriaList(errorsForAnnouncement)}
      </div>

      <section
        className={`status-block status-${safetyMeta.tone}`}
        aria-live="polite"
        aria-label={t(locale, "status.title")}
      >
        <div className="status-head">
          <h2>{t(locale, "status.title")}</h2>
          <div className={`acid-pill ${targetValue ? "ready" : ""}`}>
            <span>{t(locale, "input.target.label")}</span>
            <strong>{targetValue ? `${targetValue} %` : "—"}</strong>
          </div>
        </div>
        <p>{t(locale, safetyMeta.key)}</p>
      </section>

      <section className={`status-block status-${phMeta.tone}`} aria-label="pH">
        <h2>pH</h2>
        <p>{t(locale, phMeta.key)}</p>
        {Number.isFinite(evaluation.phValue) && (
          <p className="status-value">
            pH: {formatNumber(evaluation.phValue, locale, 2)}
          </p>
        )}
      </section>

      <section className="results-block" aria-live="polite" aria-label={t(locale, "accessibility.results")}>
        <h2>{t(locale, "results.title")}</h2>
        {mode === "jar" && <p>{t(locale, "results.none")}</p>}
        {mode !== "jar" && formattedResult && (
          <div className="results-grid">
            <div>
              <span className="result-label">{t(locale, "results.vinegar")}</span>
              <strong>{formattedResult.vinegar}</strong>
              <span className="result-suffix">{t(locale, "results.label.ml")}</span>
            </div>
            <div>
              <span className="result-label">{t(locale, "results.water")}</span>
              <strong>{formattedResult.water}</strong>
              <span className="result-suffix">{t(locale, "results.label.ml")}</span>
            </div>
            <div>
              <span className="result-label">{t(locale, "input.total.label")}</span>
              <strong>{formattedResult.total}</strong>
              <span className="result-suffix">{t(locale, "results.label.ml")}</span>
            </div>
            <div>
              <span className="result-label">{t(locale, "input.vinegar.label")}</span>
              <strong>{formattedResult.vinegarPct}</strong>
              <span className="result-suffix">{t(locale, "results.label.percent")}</span>
            </div>
          </div>
        )}
        {mode !== "jar" && !formattedResult && (
          <p>{t(locale, "results.none")}</p>
        )}
        {mode !== "jar" && formattedResult && (
          <p className={evaluation.sumOk ? "sum-ok" : "sum-bad"}>
            {t(locale, evaluation.sumOk ? "results.sum.ok" : "results.sum.fail")}
          </p>
        )}
        {evaluation.fieldErrors.generic && (
          <p className="error">{t(locale, `errors.${evaluation.fieldErrors.generic}`)}</p>
        )}
      </section>

      <div className="sr-only" role="status" aria-live="polite">
        {resultAnnouncement}
      </div>

      <aside className="info-box">
        <h2>{t(locale, "info.title")}</h2>
        <ul>
          <li>{t(locale, "info.ph")}</li>
          <li>{t(locale, "info.hygiene")}</li>
          <li>{t(locale, "info.storage")}</li>
        </ul>
      </aside>
    </section>
  );
}
