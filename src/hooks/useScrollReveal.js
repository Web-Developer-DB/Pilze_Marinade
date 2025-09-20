
export default function useScrollReveal(){
  if (typeof window === 'undefined') return
  const els = Array.from(document.querySelectorAll('.reveal'))
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced){
    els.forEach(el => el.classList.add('in'))
    return
  }
  if (!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('in'))
    return
  }
  const obs = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('in')
        obs.unobserve(e.target)
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' })
  els.forEach(el => obs.observe(el))
}
