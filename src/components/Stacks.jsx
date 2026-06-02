import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stackCategories } from '../data/portfolio'
import { SectionHeader } from './About'

const allCategory = { id: 'all', label: 'Todas' }

export default function Stacks() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredStack, setHoveredStack] = useState(null)

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
          subtitle="Filtre por categoria e passe o mouse nos ícones"
        />

        <div className="stacks__filters">
          {[allCategory, ...stackCategories].map((cat) => (
            <motion.button
              key={cat.id}
              className={`stacks__filter ${activeCategory === cat.id ? 'stacks__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.span
                  className="stacks__filter-bg"
                  layoutId="stack-filter"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.p
          key={hoveredStack ?? 'default'}
          className="stacks__preview"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {hoveredStack ?? `${filtered.length} tecnologias`}
        </motion.p>

        <motion.div className="stacks__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                className="stack-icon"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                onMouseEnter={() => setHoveredStack(name)}
                onMouseLeave={() => setHoveredStack(null)}
                whileHover={{ y: -8, borderColor: 'var(--white)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={32} aria-label={name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
