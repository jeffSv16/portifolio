import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { languages } from '../data/portfolio'

export default function LanguageLevels() {
  return (
    <motion.div
      className="language-levels"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="language-levels__header">
        <div className="language-levels__icon">
          <Languages size={20} strokeWidth={1.5} />
        </div>
        <h3>Idiomas</h3>
      </div>

      <ul className="language-levels__list">
        {languages.map((lang, index) => (
          <li key={lang.name} className="language-levels__item">
            <div className="language-levels__meta">
              <span className="language-levels__name">{lang.name}</span>
              <span className="language-levels__badge">{lang.level}</span>
            </div>
            <div className="language-levels__track" aria-hidden="true">
              <motion.span
                className="language-levels__fill"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: lang.progress / 100 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="sr-only">
              {lang.name}: nível {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
