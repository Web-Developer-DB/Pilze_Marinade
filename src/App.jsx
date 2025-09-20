import AcidCalculator from './components/AcidCalculator';

import React, { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import SectionOverview from './components/SectionOverview.jsx'
import SectionSafety from './components/SectionSafety.jsx'
import SectionVorkochen from './components/SectionVorkochen.jsx'
import SectionMarinade from './components/SectionMarinade.jsx'
import SectionCookFill from './components/SectionCookFill.jsx'
import SectionPasteurize from './components/SectionPasteurize.jsx'
import SectionStorage from './components/SectionStorage.jsx'
import SectionVariants from './components/SectionVariants.jsx'
import SectionStuecklisten from './components/SectionStuecklisten.jsx'
import SectionFehler from './components/SectionFehler.jsx'
import SectionExtras from './components/SectionExtras.jsx'
import SectionGalerie from './components/SectionGalerie.jsx'
import BottomNav from './components/BottomNav.jsx'
import Footer from './components/Footer.jsx'
import ThemeControls from './components/ThemeControls.jsx'
import HamburgerMenu from './components/HamburgerMenu.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App(){
  useEffect(()=>{
    document.title = 'Mobile Leitfaden – Pilze marinieren (Modern)'
    const root = document.documentElement
    const savedTheme = localStorage.getItem('theme') || 'erdtoene'
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedScheme = localStorage.getItem('scheme') || (prefersDark ? 'dark' : 'light')
    root.setAttribute('data-theme', savedTheme)
    root.setAttribute('data-scheme', savedScheme)

    useScrollReveal()

    const supports = 'scrollBehavior' in document.documentElement.style
    const handler = (e)=>{
      const a = e.currentTarget
      const href = a.getAttribute('href')
      if(!href || !href.startsWith('#')) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if(el && !supports){
        e.preventDefault()
        const top = el.getBoundingClientRect().top + window.pageYOffset - 72
        window.scrollTo(0, top)
      }
    }
    const links = Array.from(document.querySelectorAll('a[href^="#"]'))
    links.forEach(a=>a.addEventListener('click', handler))
    return ()=> links.forEach(a=>a.removeEventListener('click', handler))
  },[])

  return (
    <>
      <HamburgerMenu />
      <div className="wrap">
        <div className="theme-controls" aria-label="Design & Farbschema">
          <ThemeControls />
        </div>
        <Hero />
        <SectionOverview />
        <SectionSafety />
        <SectionVorkochen />
        <SectionMarinade />
        <SectionCookFill />
        <SectionPasteurize />
        <SectionStorage />
        <SectionVariants />
        <SectionStuecklisten />
        <SectionFehler />
        <SectionExtras />
        <SectionGalerie />
        <BottomNav />
        <AcidCalculator />
<Footer />
      </div>
    </>
  )
}
