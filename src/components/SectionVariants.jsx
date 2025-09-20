
import React from 'react'

// Sicherheits-Hinweis: Ziel-pH < 4,6; kein Öl-Überstand bei mildem Sud. Hallimasch stets gründlich vorkochen und Kochwasser verwerfen.
export default function SectionVariants(){
  return (
    <section id="varianten" className="card reveal" aria-labelledby="varianten-title">
      <h2 id="varianten-title">Varianten nach Pilztyp</h2>
      <div className="twocol">
        <div>
          <h3>Röhrlinge (Schwamm unten)</h3>
          <ul>
            <li><strong>Steinpilz:</strong> Profil <em>Mild</em> oder <em>Klassisch</em> (z. B. Salz 20–22 g, Zucker 12–14 g, Essenz 24–30 g + Zusatzwasser 175 g).</li>
            <li><strong>Maronen:</strong> <em>Süß-sauer</em> mildert Bitterstoffe (Salz 21–23 g, Zucker 20–26 g, Essenz 30–33 g + 54–59 g).</li>
            <li><strong>Butterröhrlinge:</strong> <em>Rassig</em> für Biss (Salz 22–24 g, Zucker 14–18 g, Essenz 36–38 g + 64–67 g).</li>
          </ul>
        </div>
        <div>
          <h3>Lamellenpilze (zarter)</h3>
          <ul>
            <li><strong>Täublinge:</strong> Kurz vorgaren (5–8 Min.), in Marinade nur <strong>3–4 Min.</strong> simmern → sonst weich. Profile <em>Mild</em> oder <em>Klassisch</em>.</li>
            <li><strong>Hallimasch:</strong> Immer <strong>20–25 Min.</strong> vorkochen, dann abspülen. <em>Klassisch</em> bis leicht <em>Süß-sauer</em>; Zwiebel + 2–3 Nelken passen gut.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
