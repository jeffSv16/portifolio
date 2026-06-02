import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'
import { useActiveSection, useScrolled } from '../hooks/useScroll'

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(navLinks.map((l) => l.id))

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="container nav">
        <button className="nav__logo" onClick={() => scrollTo('hero')} aria-label="Início">
          JV<span>.</span>
        </button>

        <button
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav__link ${active === link.id ? 'nav__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    className="nav__indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
