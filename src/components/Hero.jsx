import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useScroll'
import { useCanHover } from '../hooks/useCanHover'
import { tapFeedback } from '../utils/motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles, 70, 2200)
  const canHover = useCanHover()

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
            <motion.button
              className="btn btn--primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileTap={tapFeedback(canHover)}
            >
              Entrar em contato
            </motion.button>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <Github size={18} /> GitHub
            </a>
          </motion.div>

          <motion.div className="hero__social" custom={5} variants={fadeUp} initial="hidden" animate="visible">
            <SocialLink href={profile.linkedin} label="LinkedIn" canHover={canHover}><Linkedin size={18} /></SocialLink>
            <SocialLink href={profile.github} label="GitHub" canHover={canHover}><Github size={18} /></SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="E-mail" canHover={canHover}><Mail size={18} /></SocialLink>
          </motion.div>
        </div>

        <motion.div
          className="hero__photo-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__photo-frame">
            <img src={profile.photo} alt={profile.name} className="hero__photo" width={360} height={360} />
          </div>
          {canHover && (
            <motion.div
              className="hero__orbit"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </motion.div>
      </div>

      {canHover && (
        <motion.button
          className="hero__scroll"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Rolar para baixo"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.button>
      )}
    </section>
  )
}

function SocialLink({ href, label, children, canHover }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className="hero__social-link"
      whileHover={canHover ? { y: -4 } : undefined}
      whileTap={tapFeedback(canHover)}
    >
      {children}
    </motion.a>
  )
}
