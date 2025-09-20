
import React from 'react'

export default function SectionPasteurize(){
  return (
    <section id="pasteurisieren" className="card reveal" aria-labelledby="paste-title">
      <h2 id="paste-title">Pasteurisieren im Multikocher/Schnellkochtopf <em>ohne Druck</em></h2>
      <ol>
        <li>Einlegeboden/Tuch in den Topf, Gläser gestellt (ohne Berührung).</li>
        <li>Mit heißem Wasser auffüllen, Gläser <strong>2–3 cm</strong> überdeckt.</li>
        <li><strong>Deckel schließen, Ventil offen</strong> (kein Druck). Programm „Kochen/Boil“ oder „Dämpfen/Steam“ ≈ 100 °C.</li>
        <li><strong>Ab Siedepunkt:</strong> 250–500 ml <strong>12–15 Min.</strong> | 1 l <strong>20 Min.</strong> <em>(schonend: 85–90 °C für 20–25 Min.)</em></li>
        <li>Gerät aus, <strong>5 Min.</strong> ruhen, Gläser entnehmen. <strong>Nicht</strong> kalt abschrecken.</li>
      </ol>
      <div className="note">Warum kein Druck? Säure + 100 °C reichen vollkommen; Druck (115–121 °C) macht Pilze weich und flacht die Essignote ab.</div>
    </section>
  )
}
