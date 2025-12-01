import { calcAcidVolumes, safetyStatus } from "../lib/calc.js";

const close = (a, b, tolerance = 0.01) => Math.abs(a - b) <= tolerance;

describe("calcAcidVolumes", () => {
  it("computes volumes for 1000 ml, target 2.5 %, strength 9 %", () => {
    const result = calcAcidVolumes({ totalMl: 1000, targetPct: 2.5, vinegarPct: 9 });
    expect(close(result.vinegarMl, 277.78)).toBe(true);
    expect(close(result.waterMl, 722.22)).toBe(true);
  });

  it("throws when target exceeds vinegar strength", () => {
    expect(() =>
      calcAcidVolumes({ totalMl: 1000, targetPct: 5.1, vinegarPct: 5 })
    ).toThrow("ERR_RATIO");
  });

  it("throws on invalid total volume", () => {
    expect(() => calcAcidVolumes({ totalMl: 0, targetPct: 2, vinegarPct: 9 })).toThrow("ERR_TOTAL");
  });

  it("keeps sum consistency within tolerance", () => {
    const result = calcAcidVolumes({ totalMl: 2500, targetPct: 3.5, vinegarPct: 12 });
    expect(close(result.vinegarMl + result.waterMl, 2500)).toBe(true);
  });
});

describe("safetyStatus", () => {
  it("returns safe for ≥ 2.5 %", () => {
    expect(safetyStatus(2.5)).toBe("safe");
    expect(safetyStatus(3)).toBe("safe");
  });

  it("returns chilled for 2.0–2.49 %", () => {
    expect(safetyStatus(2.2)).toBe("chilled");
  });

  it("returns unsafe below 2.0 %", () => {
    expect(safetyStatus(1.9)).toBe("unsafe");
  });

  it("returns unknown for invalid input", () => {
    expect(safetyStatus(undefined)).toBe("unknown");
    expect(safetyStatus(NaN)).toBe("unknown");
  });
});
