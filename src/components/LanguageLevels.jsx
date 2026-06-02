import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { languages } from '../data/portfolio'

function LanguageDonut({ progress, delay = 0 }) {
  const size = 46
  const stroke = 3
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="language-donut" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--gray-800)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--white)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="language-donut__pct">{progress}%</span>
    </div>
  )
}

export default function LanguageLevels() {
  return (
    <motion.div
      className="info-card info-card--languages"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 6, borderColor: 'var(--white)' }}
    >
      <div className="info-card__icon">
        <Languages size={20} strokeWidth={1.5} />
      </div>

      <div className="language-levels__body">
        <h3>Idiomas</h3>
        <ul className="language-levels__row">
          {languages.map((lang, index) => (
            <li key={lang.name} className="language-levels__item">
              <LanguageDonut progress={lang.progress} delay={index * 0.1} />
              <div className="language-levels__info">
                <span className="language-levels__name">{lang.name}</span>
                <span className="language-levels__badge">{lang.level}</span>
              </div>
              <span className="sr-only">
                {lang.name}: {lang.level}, {lang.progress}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
