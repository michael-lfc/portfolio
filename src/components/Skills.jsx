import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { technicalSkills, softSkills } from '../data/skills'

export default function Skills() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()

  return (
    <section id="skills" className="py-28 px-12 border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Skills
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        What I bring <em className="italic text-gold">to the table.</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <TechnicalSkills />
        <SoftSkills />
      </div>
    </section>
  )
}

function TechnicalSkills() {
  const ref     = useScrollReveal()
  const barsRef = useRef(null)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.skill-fill').forEach((bar) => bar.classList.add('animated'))
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal">
      <h3 className="font-serif text-2xl font-light text-warm mb-9">
        Technical <em className="italic text-gold">Proficiency</em>
      </h3>
      <div ref={barsRef} className="space-y-5">
        {technicalSkills.map(({ name, pct }) => (
          <div key={name}>
            <div className="flex justify-between items-baseline mb-2 text-[11px]">
              <span className="text-faint tracking-wide">{name}</span>
              <span className="text-gold-dim">{pct}%</span>
            </div>
            <div className="h-px bg-surface2 w-full">
              <div className="skill-fill" style={{ '--pct': `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SoftSkills() {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="reveal">
      <h3 className="font-serif text-2xl font-light text-warm mb-9">
        Soft <em className="italic text-gold">Skills</em>
      </h3>
      <div className="grid grid-cols-2 gap-3.5">
        {softSkills.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="border border-gold/15 p-5 hover:border-gold/35 hover:bg-surface2 transition-all duration-300"
          >
            <span className="text-xl mb-2.5 block">{icon}</span>
            <p className="text-[12px] text-warm mb-1.5">{title}</p>
            <p className="text-[11px] text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}