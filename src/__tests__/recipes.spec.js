import { recipes, getRecipesForLocale } from "../lib/recipes.js";

describe("recipes dataset", () => {
  it("contains 20 entries", () => {
    expect(recipes).toHaveLength(20);
  });

  it("provides localized bundles", () => {
    const locales = ["de", "en", "ru"];
    recipes.forEach((recipe) => {
      locales.forEach((locale) => {
        expect(recipe.locale[locale]).toBeDefined();
        expect(Array.isArray(recipe.locale[locale].ingredients)).toBe(true);
        expect(Array.isArray(recipe.locale[locale].steps)).toBe(true);
      });
    });
  });

  it("maps locale bundles with fallback", () => {
    const mapped = getRecipesForLocale("en");
    expect(mapped[0].text).toStrictEqual(recipes[0].locale.en);
    const fallback = getRecipesForLocale("fr");
    expect(fallback[0].text).toStrictEqual(recipes[0].locale.ru);
  });
});
