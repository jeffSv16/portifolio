import { motion } from 'framer-motion'
import { aboutParagraphs, infoCards } from '../data/portfolio'
import LanguageLevels from './LanguageLevels'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeader tag="Sobre mim" title="Quem sou eu" />

        <div className="about__grid">
          <motion.div
            className="about__text"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {aboutParagraphs.map((p, i) => (
              <motion.p key={i} variants={item}>{p}</motion.p>
            ))}
          </motion.div>

          <motion.div
            className="about__cards"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {infoCards.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                className="info-card"
                variants={item}
                whileHover={{ x: 6, borderColor: 'var(--white)' }}
              >
                <div className="info-card__icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
            <LanguageLevels />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      className="section__header"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section__tag">{tag}</span>
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </motion.div>
  )
}
