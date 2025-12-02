import React, { useMemo, useState, useEffect } from "react";
import { useLocale } from "../lib/locale-context.jsx";
import { getRecipesForLocale } from "../lib/recipes.js";
import { t } from "../lib/i18n.js";
import { formatNumber } from "../lib/number.js";

function buildTagList(recipes) {
  const set = new Set();
  recipes.forEach((recipe) => {
    recipe.tags.forEach((tag) => set.add(tag));
  });
  return Array.from(set).sort();
}

export default function RecipeGallery() {
  const { locale } = useLocale();
  const recipes = useMemo(() => getRecipesForLocale(locale), [locale]);
  const tags = useMemo(() => buildTagList(recipes), [recipes]);
  const [activeTag, setActiveTag] = useState("all");
  const [openRecipe, setOpenRecipe] = useState(null);

  useEffect(() => {
    setActiveTag("all");
    setOpenRecipe(null);
  }, [locale]);

  const filtered = activeTag === "all" ? recipes : recipes.filter((recipe) => recipe.tags.includes(activeTag));

  return (
    <section className="section recipes" id="recipes">
      <div className="section-header">
        <h2>{t(locale, "recipes.title")}</h2>
        <p className="section-subtitle">{t(locale, "recipes.subtitle")}</p>
      </div>

      <div className="recipe-filters" role="group" aria-label={t(locale, "recipes.filter.label")}>
        <button
          type="button"
          className={`recipe-tag ${activeTag === "all" ? "active" : ""}`}
          onClick={() => setActiveTag("all")}
        >
          {t(locale, "recipes.filter.all")}
        </button>
        {tags.map((tag) => (
          <button
            type="button"
            key={tag}
            className={`recipe-tag ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {t(locale, `recipes.tags.${tag}`)}
          </button>
        ))}
      </div>

      <div className="recipe-grid">
        {filtered.map((recipe) => {
          const metaItems = [
            {
              id: "acid",
              label: t(locale, "recipes.meta.acid"),
              value: `${formatNumber(recipe.acidGoal, locale, 2)}${t(locale, "recipes.meta.percentSuffix")}`,
            },
            {
              id: "rest",
              label: t(locale, "recipes.meta.rest"),
              value: `${recipe.restHours} ${t(locale, "recipes.meta.hoursSuffix")}`,
            },
            {
              id: "tags",
              label: t(locale, "recipes.meta.tags"),
              value: recipe.tags.map((tag) => t(locale, `recipes.tags.${tag}`)).join(t(locale, "recipes.meta.tagSeparator")),
            },
          ];
          return (
            <article key={recipe.id} className="recipe-card">
              <header className="recipe-head">
                <div>
                  <h3>{recipe.text.name}</h3>
                  <p>{recipe.text.intro}</p>
                </div>
                <ul className="recipe-meta">
                  {metaItems.map((item) => (
                    <li key={item.id}>
                      <span className="meta-dot" aria-hidden="true">
                        •
                      </span>
                      <div>
                        <span className="meta-label">{item.label}</span>
                        <span className="meta-value">{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </header>

              <div className="recipe-details">
                <button type="button" onClick={() => setOpenRecipe(recipe)}>
                  {t(locale, "recipes.details")}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {openRecipe && (
        <div className="recipe-modal" role="dialog" aria-modal="true" aria-label={openRecipe.text.name}>
          <div className="recipe-modal-backdrop" onClick={() => setOpenRecipe(null)} />
          <div className="recipe-modal-panel">
            <button
              className="recipe-modal-close"
              type="button"
              aria-label={t(locale, "recipes.modal.close")}
              onClick={() => setOpenRecipe(null)}
            >
              ×
            </button>
            <h3>{openRecipe.text.name}</h3>
            <p>{openRecipe.text.intro}</p>
            <div className="recipe-modal-body">
              <div>
                <h4>{t(locale, "recipes.headers.ingredients")}</h4>
                <ul>
                  {openRecipe.text.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{t(locale, "recipes.headers.steps")}</h4>
                <ol>
                  {openRecipe.text.steps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
