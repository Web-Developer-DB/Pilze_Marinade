
import React from 'react'

export default function SectionOverview(){
  return (
    <section id="ueberblick" className="card reveal" aria-labelledby="ueberblick-title">
      <h2 id="ueberblick-title">Kurzüberblick</h2>
      <p className="lead">Pilze sicher bestimmen, putzen, <strong>artenrein vorkochen</strong>, Vorkochwasser wegschütten. In Marinade mitsimmern, <strong>heiß abfüllen</strong>, <strong>sofort</strong> verschließen und im <strong>Wasserbad ohne Druck</strong> pasteurisieren.</p>
      <ul>
        <li>Essigbasis: <strong>25 % Essigessenz</strong> (z. B. ALDI Nord) – immer mit Wasser <em>verdünnen</em>.</li>
        <li>Alle Mengen unten sind in <strong>g</strong>. Ziel-pH typ. ≤ 4,2.</li>
        <li>Haltbarkeit: <strong>6–12 Monate</strong>. Geöffnet: <strong>7–10 Tage</strong> im Kühlschrank.</li>
      </ul>
      <div className="warn"><strong>Wichtig:</strong> Kein Einlegen „nur in Öl“ und keine Druckfunktion nutzen – bei Essigmarinade genügt 100 °C.</div>
    </section>
  )
}
