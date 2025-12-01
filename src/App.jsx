import React, { useEffect } from "react";
import MarinadeForm from "./components/MarinadeForm.jsx";
import RecipeGallery from "./components/RecipeGallery.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import { LocaleProvider, useLocale } from "./lib/locale-context.jsx";
import { t } from "./lib/i18n.js";

function Hero() {
  const { locale } = useLocale();
  const stats = [
    {
      value: t(locale, "hero.stat.acid.value"),
      label: t(locale, "hero.stat.acid.label"),
    },
    {
      value: t(locale, "hero.stat.ph.value"),
      label: t(locale, "hero.stat.ph.label"),
    },
    {
      value: t(locale, "hero.stat.languages.value"),
      label: t(locale, "hero.stat.languages.label"),
    },
  ];
  return (
    <section className="hero-section" id="top">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">{t(locale, "brand.name")}</p>
        <h1>{t(locale, "hero.title")}</h1>
        <p className="hero-lead">{t(locale, "hero.subtitle")}</p>
        <div className="hero-actions">
          <a className="btn hero-btn" href="#marinade-calculator">
            {t(locale, "hero.cta.primary")}
          </a>
          <a className="btn hero-btn ghost" href="#process">
            {t(locale, "hero.cta.secondary")}
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const { locale } = useLocale();
  const items = [
    {
      emoji: "🧮",
      title: t(locale, "highlights.calc.title"),
      body: t(locale, "highlights.calc.body"),
    },
    {
      emoji: "🛡️",
      title: t(locale, "highlights.safety.title"),
      body: t(locale, "highlights.safety.body"),
    },
    {
      emoji: "🌍",
      title: t(locale, "highlights.i18n.title"),
      body: t(locale, "highlights.i18n.body"),
    },
    {
      emoji: "♿",
      title: t(locale, "highlights.accessibility.title"),
      body: t(locale, "highlights.accessibility.body"),
    },
  ];

  return (
    <section className="section highlights" id="highlights">
      <div className="section-header">
        <h2>{t(locale, "highlights.title")}</h2>
      </div>
      <div className="highlight-grid">
        {items.map((item) => (
          <article key={item.title} className="highlight-card">
            <span className="highlight-icon" aria-hidden="true">
              {item.emoji}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const { locale } = useLocale();
  const steps = [
    {
      title: t(locale, "process.step1.title"),
      body: t(locale, "process.step1.body"),
    },
    {
      title: t(locale, "process.step2.title"),
      body: t(locale, "process.step2.body"),
    },
    {
      title: t(locale, "process.step3.title"),
      body: t(locale, "process.step3.body"),
    },
  ];

  return (
    <section className="section process" id="process">
      <div className="section-header">
        <h2>{t(locale, "process.title")}</h2>
      </div>
      <ol className="process-list">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="step-number">{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SafetySection() {
  const { locale } = useLocale();
  const items = [
    t(locale, "safety.list1"),
    t(locale, "safety.list2"),
    t(locale, "safety.list3"),
  ];
  return (
    <section className="section safety" id="safety">
      <div className="safety-card">
        <h2>{t(locale, "safety.title")}</h2>
        <p className="safety-lead">{t(locale, "safety.lead")}</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="safety-cta">{t(locale, "safety.cta")}</p>
      </div>
    </section>
  );
}

function FaqSection() {
  const { locale } = useLocale();
  const questions = [
    {
      title: t(locale, "faq.q1.title"),
      body: t(locale, "faq.q1.body"),
    },
    {
      title: t(locale, "faq.q2.title"),
      body: t(locale, "faq.q2.body"),
    },
    {
      title: t(locale, "faq.q3.title"),
      body: t(locale, "faq.q3.body"),
    },
  ];
  return (
    <section className="section faq" id="faq">
      <div className="section-header">
        <h2>{t(locale, "faq.title")}</h2>
      </div>
      <div className="faq-items">
        {questions.map((item) => (
          <details key={item.title}>
            <summary>{item.title}</summary>
            <p>{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function PageFooter() {
  const { locale } = useLocale();
  return (
    <footer className="page-footer">
      <p>{t(locale, "footer.credits")}</p>
      <p>
        <a href="https://github.com/Web-Developer-DB/Pilze_Marinade" target="_blank" rel="noopener noreferrer">
          {t(locale, "footer.source")}
        </a>
      </p>
    </footer>
  );
}

function AppContent() {
  const { locale } = useLocale();

  useEffect(() => {
    document.title = t(locale, "app.title");
  }, [locale]);

  return (
    <div className="page">
      <Hero />
      <Highlights />
      <div className="section calculator-shell">
        <MarinadeForm />
      </div>
      <RecipeGallery />
      <ProcessSection />
      <SafetySection />
      <FaqSection />
      <PageFooter />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <div className="app-surface">
        <SiteHeader />
        <main className="app-shell">
          <AppContent />
        </main>
      </div>
    </LocaleProvider>
  );
}
