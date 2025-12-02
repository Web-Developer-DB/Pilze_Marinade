/**
 * Calculates vinegar and water volumes required to reach a target acidity.
 * @param {Object} params
 * @param {number} params.totalMl - Total marinade volume in millilitres.
 * @param {number} params.targetPct - Target acidity percentage for the final mixture.
 * @param {number} params.vinegarPct - Vinegar strength (percentage of acetic acid).
 * @returns {{vinegarMl: number, waterMl: number}}
 * @throws {Error} when inputs are invalid or ratios are impossible.
 */
export function calcAcidVolumes({ totalMl, targetPct, vinegarPct }) {
  if (!Number.isFinite(totalMl) || totalMl <= 0) throw new Error("ERR_TOTAL");
  if (!Number.isFinite(targetPct) || targetPct < 0) throw new Error("ERR_TARGET");
  if (!Number.isFinite(vinegarPct) || vinegarPct <= 0) throw new Error("ERR_STRENGTH");
  if (targetPct > vinegarPct) throw new Error("ERR_RATIO");

  const vinegarMl = (targetPct / vinegarPct) * totalMl;
  const waterMl = Math.max(0, totalMl - vinegarMl);
  return { vinegarMl, waterMl };
}

export function safetyStatus(targetPct) {
  if (!Number.isFinite(targetPct)) return "unknown";
  if (targetPct >= 2.5) return "safe";
  if (targetPct >= 2.0) return "chilled";
  return "unsafe";
}
