import { useScrollReveal } from '../hooks/useScrollReveal'

const bullets = [
  'Developed and maintained RESTful APIs using Node.js and Express.js to support application features',
  'Designed and managed database schemas for efficient data storage and retrieval',
  'Collaborated with frontend developers to integrate APIs and ensure seamless data flow',
  'Tested and debugged API endpoints using Postman to improve reliability and performance',
  'Applied best practices for authentication, data security, and scalable API architecture',
]

export default function Experience() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()
  const itemRef  = useScrollReveal()

  return (
    <section id="experience" className="py-28 px-12 border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Experience
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        Where I've <em className="italic text-gold">worked.</em>
      </h2>

      <div
        ref={itemRef}
        className="reveal grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 py-12 border-b border-gold/15 relative group"
      >
        <div className="absolute bottom-[-1px] left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
        <div className="text-[11px] text-gold-dim tracking-wide pt-1">Jan 2026 — Apr 2026</div>
        <div>
          <h3 className="font-serif text-2xl font-normal text-warm mb-1">Backend Developer Intern</h3>
          <p className="text-[11px] text-gold tracking-widest uppercase mb-5">Trueminds Innovations Ltd</p>
          <div className="space-y-3">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-baseline gap-3 text-[11px] text-muted leading-relaxed">
                <span className="text-gold-dim flex-shrink-0">→</span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}