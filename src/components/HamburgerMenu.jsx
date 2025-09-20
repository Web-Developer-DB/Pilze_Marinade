
import React, { useEffect, useState } from 'react'
import ThemeControls from './ThemeControls.jsx'

export default function HamburgerMenu(){
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const onEsc = (e)=> e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onEsc)
    document.body.style.overflow = open ? 'hidden' : ''
    return ()=> { document.removeEventListener('keydown', onEsc); document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button className="hamburger-btn" aria-label="Menü öffnen" aria-expanded={open} aria-controls="drawer" aria-hidden={open}
        onClick={()=> setOpen(true)} style={{ display: open ? "none" : "inline-flex" }}>
        <svg className="hamburger-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div id="drawer" className={`drawer ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Seitennavigation">
        <div className="overlay" onClick={()=> setOpen(false)} />
        <aside className="panel">
          <div className="close-row">
            <button className="close-btn" aria-label="Menü schließen" onClick={()=> setOpen(false)}>✕</button>
          </div>
          <div className="menu-title">Menü</div>
          <nav onClick={()=> setOpen(false)}>
            <a href="#ueberblick">Überblick</a>
            <a href="#sicherheit">Sicherheit</a>
            <a href="#vorkochen">Vorkochen</a>
            <a href="#marinade">Marinade</a>
            <a href="#koch-einfuellen">Kochen &amp; Abfüllen</a>
            <a href="#pasteurisieren">Pasteurisieren</a>
            <a href="#varianten">Varianten</a>
            <a href="#stuecklisten">Stücklisten</a>
            <a href="#galerie">Galerie</a>
          </nav>
          <div style={{ marginTop: '8px' }}>
            <ThemeControls />
          </div>
        </aside>
      </div>
    </>
  )
}
