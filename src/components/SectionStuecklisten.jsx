
import React from 'react'

// Sicherheits-Hinweis: Ziel-pH < 4,6; kein Öl-Überstand bei mildem Sud. Hallimasch stets gründlich vorkochen und Kochwasser verwerfen.
export default function SectionStuecklisten(){
  return (
    <section id="stuecklisten" className="card reveal" aria-labelledby="stuecklisten-title">
      <h2 id="stuecklisten-title">Beispiel-Stücklisten (je 1000 g vorgekochte Pilze)</h2>
      <div className="twocol">
        <div>
          <h3>„Klassisch“ (Allround)</h3>
          <ul>
            <li>Wasser <strong>700 g</strong>; Salz <strong>23 g</strong>; Zucker <strong>14 g</strong></li>
            <li>Lorbeer <strong>0,5 g</strong>; Pfefferkörner <strong>1,8 g</strong>; Piment <strong>1,0 g</strong>; Knoblauch <strong>5 g</strong></li>
            <li><strong>Essigessenz 25 % 97 g + Zusatzwasser 175 g</strong></li>
          </ul>
        </div>
        <div>
          <h3>„Süß-sauer“ (für Maronen)</h3>
          <ul>
            <li>Wasser <strong>700 g</strong>; Salz <strong>21 g</strong>; Zucker <strong>24 g</strong></li>
            <li>Lorbeer <strong>0,5 g</strong>; Pfefferkörner <strong>2,0 g</strong>; Piment <strong>1,0 g</strong>; Knoblauch <strong>6 g</strong></li>
            <li><strong>Essigessenz 25 % 97 g + Zusatzwasser 175 g</strong></li>
          </ul>
        </div>
      </div>
      <div className="twocol">
        <div>
          <h3>„Rassig/kräftig“ (für Butterröhrlinge)</h3>
          <ul>
            <li>Wasser <strong>700 g</strong>; Salz <strong>24 g</strong>; Zucker <strong>12 g</strong></li>
            <li>Lorbeer <strong>0,5 g</strong>; Pfefferkörner <strong>2,0 g</strong>; Senfkörner <strong>2,1 g</strong></li>
            <li><strong>Essigessenz 25 % 97 g + Zusatzwasser 175 g</strong></li>
          </ul>
        </div>
        <div>
          <h3>„Mild &amp; pilzbetont“ (für Steinpilz pur)</h3>
          <ul>
            <li>Wasser <strong>700 g</strong>; Salz <strong>19 g</strong>; Zucker <strong>10 g</strong></li>
            <li>Nur Lorbeer <strong>0,3–0,4 g</strong> + Pfeffer <strong>1,5 g</strong></li>
            <li><strong>Essigessenz 25 % 97 g + Zusatzwasser 175 g</strong></li>
          </ul>
        </div>
      </div>
      <div className="note"><strong>Skalierung:</strong> Für 500 g Pilze alle Mengen <em>halbieren</em>, für 2000 g <em>verdoppeln</em>.</div>
    </section>
  )
}
