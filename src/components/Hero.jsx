import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useScroll'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles, 70, 2200)

  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p className="hero__greeting" custom={0} variants={fadeUp} initial="hidden" animate="visible">
            Olá, eu sou
          </motion.p>

          <motion.h1 className="hero__name" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            Jeferson <span className="hero__highlight">Vasselai</span>
          </motion.h1>

          <motion.div className="hero__role-wrap" custom={2} variants={fadeUp} initial="hidden" animate="visible">
            <p className="hero__role">{typedRole}</p>
            <span className="hero__cursor" aria-hidden="true" />
          </motion.div>

          <motion.p className="hero__summary" custom={3} variants={fadeUp} initial="hidden" animate="visible">
            {profile.summary}
          </motion.p>

          <motion.div className="hero__actions" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Entrar em contato
            </MagneticButton>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          <motion.div className="hero__social" custom={5} variants={fadeUp} initial="hidden" animate="visible">
            <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink>
            <SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="E-mail"><Mail size={18} /></SocialLink>
          </motion.div>
        </div>

        <motion.div
          className="hero__photo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__photo-frame"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img src={profile.photo} alt={profile.name} className="hero__photo" width={360} height={360} />
          </motion.div>
          <motion.div
            className="hero__orbit"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Rolar para baixo"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className="hero__social-link"
      whileHover={{ y: -4, borderColor: 'var(--white)' }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

function MagneticButton({ children, onClick }) {
  return (
    <motion.button
      className="btn btn--primary"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
