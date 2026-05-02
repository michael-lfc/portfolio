import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()
  const bodyRef  = useScrollReveal()
  const metaRef  = useScrollReveal()

  const meta = [
    { key: 'Role',     val: 'Full Stack Developer' },
    { key: 'Location', val: 'Surulere, Lagos, Nigeria' },
    { key: 'Stack',    val: 'MERN + TypeScript' },
    { key: 'Email',    val: <a href="mailto:realmike44@gmail.com" className="text-gold hover:underline">realmike44@gmail.com</a> },
    { key: 'GitHub',   val: <a href="https://github.com/michael-lfc" target="_blank" rel="noreferrer" className="text-gold hover:underline">michael-lfc</a> },
    { key: 'LinkedIn', val: <a href="https://www.linkedin.com/in/michaelagwogie" target="_blank" rel="noreferrer" className="text-gold hover:underline">michaelagwogie</a> },
    { key: 'Status',   val: <span className="text-gold">● Open to Work</span> },
  ]

  return (
    <section id="about" className="py-28 px-12 border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        About Me
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-14" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        Who I <em className="italic text-gold">am.</em>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div ref={bodyRef} className="reveal space-y-5">
          <p className="text-sm text-faint leading-loose">
            I'm a <strong className="text-gold-light font-normal">Full Stack Developer</strong> with
            a passion for building products that work — clean architecture, reliable APIs, and UIs
            that make sense to the people using them. I work across the MERN stack and have shipped
            multiple full-stack applications from authentication to deployment.
          </p>
          <p className="text-sm text-faint leading-loose">
            My professional experience as a <strong className="text-gold-light font-normal">Backend
            Developer Intern at Trueminds Innovations Ltd</strong> gave me real-world exposure to
            production API development, database schema design, and cross-team collaboration with
            frontend engineers. I take testing, debugging, and reliability seriously.
          </p>
          <p className="text-sm text-faint leading-loose">
            Before software, I earned a <strong className="text-gold-light font-normal">Postgraduate
            Diploma in Education</strong> from the University of Dundee and a{' '}
            <strong className="text-gold-light font-normal">B.Sc. in Chemical Engineering</strong>{' '}
            from Lagos State University. I hold a Full Stack Software Engineering qualification from{' '}
            <strong className="text-gold-light font-normal">IBT Learning</strong>, adding formal
            structure to the practical skills I've built across real projects.
          </p>
        </div>

        <div ref={metaRef} className="reveal">
          {meta.map(({ key, val }) => (
            <div key={key} className="flex justify-between items-baseline py-4 border-b border-gold/15 text-[11px] gap-3">
              <span className="text-muted tracking-widest uppercase flex-shrink-0">{key}</span>
              <span className="text-warm text-right">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}