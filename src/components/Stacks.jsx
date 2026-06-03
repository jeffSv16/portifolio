import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stackCategories } from '../data/portfolio'
import { SectionHeader } from './About'
import { useCanHover } from '../hooks/useCanHover'
import { hoverLift, tapFeedback } from '../utils/motion'

const allCategory = { id: 'all', label: 'Todas' }

export default function Stacks() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredStack, setHoveredStack] = useState(null)
  const canHover = useCanHover()

  const filtered =
    activeCategory === 'all'
      ? stackCategories.flatMap((c) => c.items.map((item) => ({ ...item, category: c.label })))
      : stackCategories
          .find((c) => c.id === activeCategory)
          ?.items.map((item) => ({
            ...item,
            category: stackCategories.find((c) => c.id === activeCategory)?.label,
          })) ?? []

  return (
    <section className="section stacks" id="stacks">
      <div className="container">
        <SectionHeader
          tag="Tecnologias"
          title="O que eu programo"
          subtitle={canHover ? 'Filtre por categoria e passe o mouse nos ícones' : 'Toque nos filtros para ver por categoria'}
        />

        <div className="stacks__filters">
          {[allCategory, ...stackCategories].map((cat) => (
            <button
              key={cat.id}
              className={`stacks__filter ${activeCategory === cat.id ? 'stacks__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.span
                  className="stacks__filter-bg"
                  layoutId="stack-filter"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <p className="stacks__preview">{hoveredStack ?? `${filtered.length} tecnologias`}</p>

        <div className="stacks__grid">
          <AnimatePresence mode={canHover ? 'popLayout' : 'sync'}>
            {filtered.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                className="stack-icon"
                layout={canHover}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: canHover ? i * 0.02 : 0 }}
                onMouseEnter={canHover ? () => setHoveredStack(name) : undefined}
                onMouseLeave={canHover ? () => setHoveredStack(null) : undefined}
                onTouchStart={() => setHoveredStack(name)}
                whileHover={hoverLift(canHover, -6) ? { y: -6 } : undefined}
                whileTap={tapFeedback(canHover)}
              >
                <Icon size={32} aria-label={name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
