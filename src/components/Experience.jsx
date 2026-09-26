// import { useScrollReveal } from '../hooks/useScrollReveal'

// const bullets = [
//   'Developed and maintained RESTful APIs using Node.js and Express.js to support application features',
//   'Designed and managed database schemas for efficient data storage and retrieval',
//   'Collaborated with frontend developers to integrate APIs and ensure seamless data flow',
//   'Tested and debugged API endpoints using Postman to improve reliability and performance',
//   'Applied best practices for authentication, data security, and scalable API architecture',
// ]

// export default function Experience() {
//   const labelRef = useScrollReveal()
//   const headRef  = useScrollReveal()
//   const itemRef  = useScrollReveal()

//   return (
//     <section id="experience" className="py-28 px-12 border-t border-gold/15">
//       <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
//         Experience
//       </p>

//       <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
//         Where I've <em className="italic text-gold">worked.</em>
//       </h2>

//       <div
//         ref={itemRef}
//         className="reveal grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 py-12 border-b border-gold/15 relative group"
//       >
//         <div className="absolute bottom-[-1px] left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
//         <div className="text-[11px] text-gold-dim tracking-wide pt-1">Jan 2026 — Apr 2026</div>
//         <div>
//           <h3 className="font-serif text-2xl font-normal text-warm mb-1">Backend Developer Intern</h3>
//           <p className="text-[11px] text-gold tracking-widest uppercase mb-5">Trueminds Innovations Ltd</p>
//           <div className="space-y-3">
//             {bullets.map((b, i) => (
//               <div key={i} className="flex items-baseline gap-3 text-[11px] text-muted leading-relaxed">
//                 <span className="text-gold-dim flex-shrink-0">→</span>
//                 {b}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { useScrollReveal } from '../hooks/useScrollReveal'

const experiences = [
  {
    period: 'Jun 2026 — Present',
    role: 'Full Stack Software Engineer Intern',
    company: 'FutureHold Group — BuildITLab (Remote)',
    bullets: [
      'Design, develop, and maintain responsive websites and web applications for FutureHold Group subsidiaries and external client projects',
      'Implement assigned features end-to-end, fix bugs, and contribute product improvements across full-stack client and internal projects',
      'Collaborate with developers, designers, and product/project teams to translate requirements into functional, user-friendly solutions',
      'Participate in testing, debugging, and optimization activities to improve platform performance, security, and user experience',
      'Follow established coding standards, Git-based version control workflows, and software engineering best practices',
      'Prepare and maintain technical documentation and project records, and participate in code reviews and technical discussions',
    ],
  },
  {
    period: 'Jun 2026 — Aug 2026',
    role: 'Backend Developer Intern',
    company: 'D1stclass Heritage — DomyHeritage',
    bullets: [
      'Rewrote an incomplete legacy JavaScript/raw-SQL codebase into a production-grade NestJS, TypeScript, PostgreSQL, and Prisma backend',
      'Designed a 28-model normalized database schema and implemented JWT dual-token authentication, OTP email verification, and role-based access control (RBAC)',
      'Built property search and listing backend logic, including featured and trending property queries and role-based dashboard endpoints',
      'Integrated Paystack payments with HMAC webhook verification, and built an escrow state machine with a full transaction ledger',
      'Implemented BVN/NIN identity verification and supporting compliance modules',
      'Introduced Redis caching and Winston logging to improve performance and observability',
      'Produced comprehensive Swagger/OpenAPI documentation across all endpoints as a core project requirement',
      'Applied rate limiting, a dedicated mail module, and modular NestJS architecture throughout the platform',
    ],
  },
  {
    period: 'Jan 2026 — Apr 2026',
    role: 'Backend Developer Intern',
    company: 'Trueminds Innovations Ltd',
    bullets: [
      'Developed and maintained RESTful APIs using Node.js and Express.js to support application features',
      'Designed and managed database schemas for efficient data storage and retrieval',
      'Collaborated with frontend developers to integrate APIs and ensure seamless data flow',
      'Tested and debugged API endpoints using Postman to improve reliability and performance',
      'Applied best practices for authentication, data security, and scalable API architecture',
    ],
  },
]

export default function Experience() {
  const labelRef = useScrollReveal()
  const headRef  = useScrollReveal()

  return (
    <section id="experience" className="py-28 px-12 border-t border-gold/15">
      <p ref={labelRef} className="reveal text-[10px] tracking-[.22em] uppercase text-gold-dim mb-14 flex items-center gap-4 after:content-[''] after:w-12 after:h-px after:bg-gold-dim">
        Experience
      </p>

      <h2 ref={headRef} className="reveal font-serif font-light text-warm leading-tight mb-16" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}>
        Where I've <em className="italic text-gold">worked.</em>
      </h2>

      <div>
        {experiences.map((exp) => (
          <ExperienceItem key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  )
}

function ExperienceItem({ exp }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 py-12 border-b border-gold/15 relative group"
    >
      <div className="absolute bottom-[-1px] left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
      <div className="text-[11px] text-gold-dim tracking-wide pt-1">{exp.period}</div>
      <div>
        <h3 className="font-serif text-2xl font-normal text-warm mb-1">{exp.role}</h3>
        <p className="text-[11px] text-gold tracking-widest uppercase mb-5">{exp.company}</p>
        <div className="space-y-3">
          {exp.bullets.map((b, i) => (
            <div key={i} className="flex items-baseline gap-3 text-[11px] text-muted leading-relaxed">
              <span className="text-gold-dim flex-shrink-0">→</span>
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}