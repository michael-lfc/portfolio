// import { useScrollReveal } from '../hooks/useScrollReveal'
// import { projects } from '../data/projects'

// export default function Projects() {
//   const labelRef = useScrollReveal()
//   const headRef  = useScrollReveal()

//   return (
//     <section id="projects" className="py-28 px-12 bg-surface border-t border-gold/15">
//       <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
//         Projects
//       </p>

//       <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
//         Things I've <em className="italic text-gold">shipped.</em>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
//         {projects.map((project) => (
//           <ProjectCard key={project.num} project={project} />
//         ))}
//       </div>
//     </section>
//   )
// }

// function ProjectCard({ project }) {
//   const ref = useScrollReveal()

//   return (
//     <div ref={ref} className="reveal bg-surface2 hover:bg-surface3 flex flex-col group transition-colors duration-300">
//       <div className="p-8 flex-1 border-b border-gold/15">
//         <div className="font-serif text-5xl font-light text-surface group-hover:text-gold/15 transition-colors duration-300 mb-4 select-none">
//           {project.num}
//         </div>
//         <h3 className="font-serif text-xl font-normal text-warm mb-3 leading-snug">
//           {project.name}
//         </h3>
//         <p className="text-[11px] text-muted leading-relaxed">{project.desc}</p>
//         <div className="flex flex-wrap gap-1.5 mt-4">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="text-[10px] tracking-wider uppercase px-2 py-0.5 border border-gold/15 text-muted rounded-[1px]"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div
//         className="grid"
//         style={{ gridTemplateColumns: `repeat(${project.links.length}, 1fr)` }}
//       >
//         {project.links.map((link, i) => (
//           <a
//             key={i}
//             href={link.url}
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center justify-center gap-2 py-4 text-[10px] tracking-widest uppercase text-muted border-r border-gold/15 last:border-r-0 hover:bg-gold/5 hover:text-gold transition-all duration-200"
//           >
//             {link.label}
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }

export const projects = [
  {
    num: '01',
    name: 'Aurum — Project Manager',
    desc: 'Full-stack project management platform enabling teams to organize projects, manage tasks, and track workflow. Features real-time updates via Socket.io, JWT auth, role-based access control, and a React frontend.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'JWT', 'Socket.io'],
    links: [
      { label: 'BE Repo', url: 'https://github.com/michael-lfc/Task-Manager-backend' },
      { label: 'FE Repo', url: 'https://github.com/michael-lfc/project-manager-front-end' },
      { label: 'Live Demo', url: 'https://project-manager-front-end-alpha.vercel.app' },
    ],
  },
  {
    num: '02',
    name: 'TalentFlow LMS',
    desc: 'Learning Management System built during internship at Trueminds Innovations. Backend covers auth, course & enrollment management, lesson progress tracking, file uploads via Cloudinary, and automated certificate issuance.',
    tags: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Cloudinary', 'Docker'],
    links: [
      { label: 'BE Repo', url: 'https://github.com/team-tango790/talentflow-backend' },
      { label: 'Live Demo', url: 'https://talentflow-frontend-two.vercel.app/' },
    ],
  },
  {
    num: '03',
    name: 'Passwell — CBT Platform',
    desc: 'CBT examination and assessment platform serving civil servants, paramilitary officers, and recruitment candidates. Transformed a static website into a fully data-driven application — scaffolded the database, built backend modules for exam workflows, automated grading, candidate data, and server-side exam timing.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript', 'Full Stack'],
    links: [
      { label: 'Repo', url: 'https://github.com/builditlab2025/Passwell-webapp' },
      { label: 'Live Demo', url: 'https://passwellglobal.com' },
    ],
  },
  {
    num: '04',
    name: 'DomyHeritage — PropTech',
    desc: 'Backend for a live property-listing platform built with NestJS, TypeScript, PostgreSQL, and Prisma. Features a 28-model relational schema, JWT & dual-token auth, OTP verification, RBAC, Paystack payments with HMAC webhook verification, escrow workflow, BVN/NIN identity verification, Redis caching, Winston logging, and full Swagger/OpenAPI documentation.',
    tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'Paystack', 'Swagger'],
    links: [
      { label: 'BE Repo', url: 'https://github.com/D1stclass-Real-Tech/DomyHeritage-Backend' },
      { label: 'Live Demo', url: 'https://domyheritage.com' },
    ],
  },
]