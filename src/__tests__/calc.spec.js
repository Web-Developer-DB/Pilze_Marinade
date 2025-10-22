import { calcAcidVolumes } from "../lib/calc.js";

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
});
