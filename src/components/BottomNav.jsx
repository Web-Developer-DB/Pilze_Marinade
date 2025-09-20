
import React from 'react'

export default function BottomNav(){
  return (
    <nav className="bottom-nav" aria-label="Schnelle Aktionen">
      <a href="#marinade" aria-label="Zu den Marinaden">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3c4.5 5.8 7 9.2 7 12a7 7 0 1 1-14 0c0-2.8 2.5-6.2 7-12z" strokeWidth="1.7"/></svg>
        Marinade
      </a>
      <a href="#pasteurisieren" aria-label="Zum Pasteurisieren">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="9" width="18" height="10" rx="2" strokeWidth="1.7"/><path d="M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" strokeWidth="1.7"/></svg>
        Einkochen
      </a>
      <a href="#stuecklisten" aria-label="Zu den Stücklisten">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 6h12M8 12h12M8 18h12M3 6h.01M3 12h.01M3 18h.01" strokeWidth="1.7" /></svg>
        Stücklisten
      </a>
    </nav>
  )
}
