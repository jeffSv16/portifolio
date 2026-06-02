import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experiences } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Experience() {
  const [expanded, setExpanded] = useState(experiences[0]?.id)

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeader tag="Carreira" title="Experiência profissional" subtitle="Clique para expandir cada experiência" />

        <div className="timeline">
          {experiences.map((exp, index) => {
            const isOpen = expanded === exp.id

            return (
              <motion.article
                key={exp.id}
                className={`timeline__item ${isOpen ? 'timeline__item--open' : ''}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className="timeline__trigger"
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                  aria-expanded={isOpen}
                >
                  <div className="timeline__marker" />
                  <div className="timeline__head">
                    <span className="timeline__date">{exp.date}</span>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <motion.span
                    className="timeline__chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="timeline__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ul className="timeline__list">
                        {exp.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
