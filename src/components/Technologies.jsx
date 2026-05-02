import { useScrollReveal } from '../hooks/useScrollReveal'
import { techGroups } from '../data/skills'

export default function Technologies() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()

  return (
    <section id="technologies" className="py-28 px-12 bg-surface border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Technologies
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        The tools I <em className="italic text-gold">work with.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {techGroups.map((group) => (
          <TechGroup key={group.label} group={group} />
        ))}
      </div>
    </section>
  )
}

function TechGroup({ group }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-surface2 hover:bg-surface3 p-9 relative overflow-hidden transition-colors duration-300 group"
    >
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
      <p className="text-[10px] tracking-[.18em] uppercase text-gold-dim mb-5">{group.label}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1.5 px-3.5 py-1.5 border border-gold/15 text-[11px] text-faint tracking-wide rounded-[2px] hover:border-gold/40 hover:text-warm hover:bg-gold/5 transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-50 flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}