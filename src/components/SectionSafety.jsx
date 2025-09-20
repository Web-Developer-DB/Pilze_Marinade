
import React from 'react'

export default function SectionSafety(){
  return (
    <section id="sicherheit" className="card reveal" aria-labelledby="sicherheit-title">
      <h2 id="sicherheit-title">Sicherheit &amp; Vorbereitung</h2>
      <div className="twocol">
        <div>
          <h3>Du brauchst</h3>
          <ul>
            <li>Twist-off- oder Weck-Gläser (Deckel/Gummis), Einlegeboden/Tuch</li>
            <li>Großer Topf / Multikocher (Druckfunktion <strong>aus</strong>)</li>
            <li>Schöpfkelle, Einfülltrichter, Glasheber/Zange</li>
            <li>Saubere Tücher, pH-Streifen (optional)</li>
          </ul>
        </div>
        <div>
          <h3>Gläser vorbereiten</h3>
          <ul>
            <li>10 Min. abkochen <em>oder</em> 120 °C im Ofen (Deckel separat abkochen).</li>
            <li>Bis zum Befüllen heiß bereithalten.</li>
          </ul>
        </div>
      </div>
      <div className="danger"><strong>Achtung:</strong> Essigessenz 25 % niemals pur erhitzen. Immer mit Wasser verdünnt zur Marinade geben.</div>
    </section>
  )
}
