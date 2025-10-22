/**
 * Parses a localized number string that may contain commas, dots, or thin spaces.
 * Supports typical European and US thousand/decimal separators.
 * @param {string} str
 * @returns {number}
 */
export function parseLocalizedNumber(str) {
  if (typeof str !== "string") return NaN;
  let s = str.replace(/\s|\u00A0/g, "").trim();
  if (!s) return NaN;
  let sign = 1;
  if (s[0] === "+") s = s.slice(1);
  else if (s[0] === "-") {
    sign = -1;
    s = s.slice(1);
  }

  const hasComma = s.includes(",");
  const hasDot = s.includes(".");

  if (hasComma && hasDot) {
    const lastComma = s.lastIndexOf(",");
    const lastDot = s.lastIndexOf(".");
    const decimalIsComma = lastComma > lastDot;
    if (decimalIsComma) {
      s = s.replace(/\./g, "");
      s = s.replace(",", ".");
    } else {
      s = s.replace(/,/g, "");
    }
  } else if (hasComma) {
    s = s.replace(",", ".");
  }

  const n = Number(s);
  return Number.isFinite(n) ? sign * n : NaN;
}

export function formatNumber(n, locale = "de", digits = 2) {
  if (!Number.isFinite(n)) return "";
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}
