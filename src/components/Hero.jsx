
import React from 'react'
import ChipsNav from './ChipsNav.jsx'

export default function Hero(){
  return (
    <header className="hero reveal" aria-label="Titelbereich">
      <h1>Pilze marinieren &amp; haltbar machen – Modern Edition</h1>
      <p className="subtitle">
        Naturfreundliches UI mit sanften Animationen, exakten Grammangaben und sicheren Einmach-Schritten – ohne Druck, ideal für Röhrlinge &amp; Lamellenpilze.
      </p>
      <div className="badges" aria-label="Kerneigenschaften">
        <span className="badge" title="Exakte Grammangaben">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 7h18M6 7l3 12h6l3-12M8 7a4 4 0 1 1 8 0" strokeWidth="1.6" /></svg>
          grammgenau
        </span>
        <span className="badge" title="Sicher einmachen">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path opacity=".25" d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" /><path d="M12 5.2l6 3v3.8c0 4.1-2.7 7.6-6 8.3-3.3-.7-6-4.2-6-8.3V8.2l6-3z" /></svg>
          sicher &amp; haltbar
        </span>
        <span className="badge" title="Ohne Druck">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z" strokeWidth="1.6" /></svg>
          Wasserbad
        </span>
      </div>
      <ChipsNav />
    </header>
  )
}
