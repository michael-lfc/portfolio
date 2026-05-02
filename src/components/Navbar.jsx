import { useEffect, useState } from 'react'

const links = ['about', 'technologies', 'skills', 'projects', 'experience', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gold/15 bg-ink/90 backdrop-blur-md transition-all duration-300 ${scrolled ? 'py-3 px-12' : 'py-5 px-12'}`}>
      <a href="#hero" className="font-serif text-xl font-semibold tracking-wide text-gold">
        MA.
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className="text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
        <span className={`w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ink/95 border-b border-gold/15 flex flex-col py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setMenuOpen(false)}
              className="px-12 py-3 text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}