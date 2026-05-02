import { useScrollReveal } from '../hooks/useScrollReveal'

const contactItems = [
  {
    type: 'Email',
    val: 'realmike44@gmail.com',
    href: 'mailto:realmike44@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    type: 'GitHub',
    val: 'github.com/michael-lfc',
    href: 'https://github.com/michael-lfc',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    type: 'LinkedIn',
    val: 'linkedin.com/in/michaelagwogie',
    href: 'https://www.linkedin.com/in/michaelagwogie',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    type: 'Phone',
    val: '+234 802 852 9233',
    href: 'tel:+2348028529233',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gold fill-none" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="contact" className="py-28 px-12 border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Contact
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        Let's build <em className="italic text-gold">something.</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div ref={leftRef} className="reveal space-y-5">
          <p className="text-sm text-faint leading-loose">
            I'm actively looking for opportunities — whether that's a full-time role, a contract,
            or a collaboration on something interesting.
          </p>
          <p className="text-sm text-faint leading-loose">
            If you're working on something that needs a developer who cares about both the frontend
            and backend, let's talk.
          </p>
          
          <a
            href="mailto:realmike44@gmail.com"
            className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 text-[10px] tracking-widest uppercase bg-gold text-ink border border-gold hover:bg-gold-light transition-all font-mono"
          >
            Send me an email →
          </a>
        </div>

        <div ref={rightRef} className="reveal">
          {contactItems.map(({ type, val, href, icon }) => (
            <div key={type} className="flex items-center gap-4 py-5 border-b border-gold/15">
              <div className="w-9 h-9 border border-gold/15 flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted mb-0.5">{type}</p>
                
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-[12px] text-warm hover:text-gold transition-colors"
                >
                  {val}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}