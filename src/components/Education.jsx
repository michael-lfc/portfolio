import { useScrollReveal } from '../hooks/useScrollReveal'
import { education } from '../data/education'

export default function Education() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()

  return (
    <section id="education" className="py-28 px-12 bg-surface border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Education
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        How I've <em className="italic text-gold">grown.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {education.map((item) => (
          <EduCard key={item.institution} item={item} />
        ))}
      </div>
    </section>
  )
}

function EduCard({ item }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-surface2 hover:bg-surface3 p-8 relative overflow-hidden transition-colors duration-300 group"
    >
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
      <p className="text-[10px] tracking-widest uppercase text-gold-dim mb-3">{item.period}</p>
      <h3 className="font-serif text-lg font-normal text-warm leading-snug mb-2">{item.institution}</h3>
      <p className="text-[11px] text-muted leading-relaxed">{item.programme}</p>
    </div>
  )
}