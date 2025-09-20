
import React, { useEffect, useState } from 'react'

const THEMES = [
  { value: 'erdtoene', label: 'Erdtöne (Standard)' },
  { value: 'waldgruen', label: 'Waldgrün' },
  { value: 'kontrast', label: 'Kontrastreich' },
]

export default function ThemeControls(){
  const [theme, setTheme] = useState('erdtoene')
  const [scheme, setScheme] = useState('dark')

  useEffect(()=>{
    const t = document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'erdtoene'
    const s = document.documentElement.getAttribute('data-scheme') || localStorage.getItem('scheme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(t); setScheme(s)
  },[])

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  useEffect(()=>{
    document.documentElement.setAttribute('data-scheme', scheme)
    localStorage.setItem('scheme', scheme)
  },[scheme])

  return (
    <div className="controls">
      <span className="select" title="Theme wählen">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6.5 20l2-7L3 9h7l2-7z" strokeWidth="1.3"/></svg>
        <label htmlFor="theme" className="sr-only">Theme</label>
        <select id="theme" value={theme} onChange={e=>setTheme(e.target.value)} aria-label="Theme wählen">
          {THEMES.map(t=> <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </span>

      <span className="toggle" title="Hell/Dunkel umschalten">
        <button type="button" onClick={()=> setScheme(prev => prev === 'light' ? 'dark' : 'light')} aria-label="Farbschema umschalten">
          {scheme === 'light' ? '🌙 Dunkel' : '☀️ Hell'}
        </button>
      </span>
    </div>
  )
}
