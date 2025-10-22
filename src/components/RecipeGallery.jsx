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

  useEffect(() => {
    setActiveTag("all");
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
        {filtered.map((recipe) => (
          <article key={recipe.id} className="recipe-card">
            <header className="recipe-head">
              <div>
                <h3>{recipe.text.name}</h3>
                <p>{recipe.text.intro}</p>
              </div>
              <dl className="recipe-meta">
                <div>
                  <dt>{t(locale, "recipes.meta.acid")}</dt>
                  <dd>
                    {formatNumber(recipe.acidGoal, locale, 2)}
                    {t(locale, "recipes.meta.percentSuffix")}
                  </dd>
                </div>
                <div>
                  <dt>{t(locale, "recipes.meta.rest")}</dt>
                  <dd>
                    {recipe.restHours} {t(locale, "recipes.meta.hoursSuffix")}
                  </dd>
                </div>
                <div>
                  <dt>{t(locale, "recipes.meta.tags")}</dt>
                  <dd>
                    {recipe.tags
                      .map((tag) => t(locale, `recipes.tags.${tag}`))
                      .join(t(locale, "recipes.meta.tagSeparator"))}
                  </dd>
                </div>
              </dl>
            </header>

            <details className="recipe-details">
              <summary>{t(locale, "recipes.details")}</summary>
              <div className="recipe-body">
                <div>
                  <h4>{t(locale, "recipes.headers.ingredients")}</h4>
                  <ul>
                    {recipe.text.ingredients.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>{t(locale, "recipes.headers.steps")}</h4>
                  <ol>
                    {recipe.text.steps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
