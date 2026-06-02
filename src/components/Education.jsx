import { motion } from 'framer-motion'
import { education } from '../data/portfolio'
import { SectionHeader } from './About'

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHeader tag="Formação" title="Educação & certificados" />

        <div className="education__grid">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className="edu-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: 'var(--white)' }}
            >
              <span className={`edu-card__badge edu-card__badge--${item.status}`}>{item.badge}</span>
              <h3>{item.title}</h3>
              <p className="edu-card__inst">{item.institution}</p>
              <span className="edu-card__date">{item.date}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
