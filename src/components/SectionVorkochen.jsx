
import React from 'react'

export default function SectionVorkochen(){
  return (
    <section id="vorkochen" className="card reveal" aria-labelledby="vorkochen-title">
      <h2 id="vorkochen-title">Putzen &amp; artenrein vorkochen</h2>
      <p>Vorkochen in reichlich Wasser mit ca. <strong>10 g Salz je 1000 g Wasser</strong>. Danach abgießen; Vorkochwasser verwerfen.</p>
      <div className="tablewrap">
        <table aria-label="Vorkochzeiten">
          <thead><tr><th>Art</th><th>Vorbereitung</th><th>Vorkochzeit</th></tr></thead>
          <tbody>
            <tr><td><strong>Steinpilz</strong> (<em>Boletus edulis</em>)</td><td>Putzen, in Stücke</td><td><strong>8–10 Min.</strong></td></tr>
            <tr><td><strong>Maronen-Röhrling</strong> (<em>Imleria badia</em>)</td><td>Putzen, in Stücke</td><td><strong>8–10 Min.</strong></td></tr>
            <tr><td><strong>Butterröhrlinge</strong> (<em>Suillus</em>)</td><td><strong>Huthaut abziehen</strong></td><td><strong>10–15 Min.</strong></td></tr>
            <tr><td><strong>Täublinge</strong> (<em>Russula</em>, essbare Arten)</td><td>Putzen, in Stücke</td><td><strong>5–8 Min.</strong></td></tr>
            <tr><td><strong>Hallimasch</strong> (<em>Armillaria</em>)</td><td>Gründlich waschen</td><td><strong>20–25 Min.</strong>, dann kurz abspülen</td></tr>
          </tbody>
        </table>
      </div>
      <div className="note"><strong>Hinweis:</strong> Arten erst <em>nach</em> dem Vorkochen mischen. Lamellenpilze sind zarter → in der Marinade <strong>3–5 Min.</strong> mitsimmern, Röhrlinge <strong>5–7 Min.</strong></div>
    </section>
  )
}
