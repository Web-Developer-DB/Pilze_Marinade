import { parseLocalizedNumber, formatNumber } from "../lib/number.js";

describe("parseLocalizedNumber", () => {
  it("parses comma decimals", () => {
    expect(parseLocalizedNumber("2,5")).toBeCloseTo(2.5);
  });

  it("parses dot decimals", () => {
    expect(parseLocalizedNumber("2.5")).toBeCloseTo(2.5);
  });

  it("parses european thousands format", () => {
    expect(parseLocalizedNumber("1.234,56")).toBeCloseTo(1234.56);
  });

  it("parses us thousands format", () => {
    expect(parseLocalizedNumber("1,234.56")).toBeCloseTo(1234.56);
  });

  it("parses negative values", () => {
    expect(parseLocalizedNumber("-0,75")).toBeCloseTo(-0.75);
  });
});

describe("formatNumber", () => {
  it("formats russian locale", () => {
    expect(formatNumber(277.777, "ru", 2)).toBe("277,78");
  });
});
