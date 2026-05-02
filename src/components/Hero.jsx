export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 grid grid-cols-1 lg:grid-cols-2 items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 40% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Gold glow */}
      <div
        className="absolute rounded-full z-0 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(196,151,58,0.07) 0%, transparent 68%)',
          top: '50%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
          animation: 'glowPulse 8s ease-in-out infinite',
        }}
      />

      {/* Left content */}
      <div className="px-12 pb-20 pt-8 relative z-10">
        <div className="flex items-center gap-3 text-[10px] tracking-[.2em] uppercase text-gold mb-7">
          <span className="w-7 h-px bg-gold" />
          Full Stack Developer
        </div>

        <h1
          className="font-serif font-light leading-[0.92] tracking-tight text-warm mb-3"
          style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
        >
          Michael
          <br />
          <em className="italic text-gold">Agwogie</em>
        </h1>

        <p
          className="font-serif font-light text-muted tracking-wide mb-9"
          style={{ fontSize: 'clamp(17px, 2.2vw, 26px)' }}
        >
          Building scalable web applications
        </p>

        <p className="text-xs text-faint leading-loose max-w-md pl-5 border-l border-gold/15 mb-12">
          Full Stack Developer with hands-on experience building and deploying scalable web
          applications using the MERN stack. Skilled in RESTful APIs, secure authentication,
          and clean, maintainable code. Based in Lagos, Nigeria.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3.5 text-[10px] tracking-widest uppercase bg-gold text-ink border border-gold hover:bg-gold-light hover:border-gold-light transition-all font-mono"
          >
            View Projects
          </a>
          
          <a
            href="https://github.com/michael-lfc"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 text-[10px] tracking-widest uppercase border border-gold/15 text-faint hover:text-warm hover:border-gold/40 hover:bg-surface2 transition-all font-mono"
          >
            GitHub ↗
          </a>
          
          <a
            href="mailto:realmike44@gmail.com"
            className="px-7 py-3.5 text-[10px] tracking-widest uppercase border border-gold/15 text-faint hover:text-warm hover:border-gold/40 hover:bg-surface2 transition-all font-mono"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right — photo */}
      <div className="w-full h-full bg-surface2 border border-gold/15 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold opacity-45" />
        <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold opacity-45" />
        <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold opacity-45" />
        <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold opacity-45" />

        <img
          src="/profile.jpg"
          alt="Michael Agwogie"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <style>{`
        @keyframes glowPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%       { transform: translate(-50%, -50%) scale(1.06); }
        }
      `}</style>
    </section>
  )
}