import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'

export default function Projects() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()

  return (
    <section id="projects" className="py-28 px-12 bg-surface border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Projects
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        Things I've <em className="italic text-gold">shipped.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="reveal bg-surface2 hover:bg-surface3 flex flex-col group transition-colors duration-300">
      <div className="p-8 flex-1 border-b border-gold/15">
        <div className="font-serif text-5xl font-light text-surface group-hover:text-gold/15 transition-colors duration-300 mb-4 select-none">
          {project.num}
        </div>
        <h3 className="font-serif text-xl font-normal text-warm mb-3 leading-snug">
          {project.name}
        </h3>
        <p className="text-[11px] text-muted leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-gold/15 text-muted rounded-[1px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${project.links.length}, 1fr)` }}
      >
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-4 text-[10px] tracking-widest uppercase text-muted border-r border-gold/15 last:border-r-0 hover:bg-gold/5 hover:text-gold transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}