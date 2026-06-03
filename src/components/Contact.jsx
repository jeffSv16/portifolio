import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Mail, Phone, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { SectionHeader } from './About'
import { useCanHover } from '../hooks/useCanHover'
import { hoverLift, tapFeedback } from '../utils/motion'

const contacts = [
  {
    id: 'email',
    label: 'E-mail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copyable: true,
  },
  {
    id: 'phone',
    label: 'Telefone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
    copyable: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jefersonvs',
    href: profile.linkedin,
    icon: Linkedin,
    copyable: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/jeffSv16',
    href: profile.github,
    icon: Github,
    copyable: false,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(null)
  const canHover = useCanHover()

  const handleCopy = async (id, text) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader
          tag="Contato"
          title="Vamos conversar?"
          subtitle="Clique para copiar e-mail ou telefone"
        />

        <div className="contact__grid">
          {contacts.map((item, index) => {
            const Icon = item.icon
            const isCopied = copied === item.id

            return (
              <motion.div
                key={item.id}
                className="contact__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileHover={hoverLift(canHover, -4) ? { y: -4 } : undefined}
              >
                <div className="contact__icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div className="contact__info">
                  <span className="contact__label">{item.label}</span>
                  {item.copyable ? (
                    <button
                      className="contact__value contact__value--btn"
                      onClick={() => handleCopy(item.id, item.value)}
                    >
                      {item.value}
                    </button>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__value">
                      {item.value}
                    </a>
                  )}
                </div>

                <div className="contact__actions">
                  {item.copyable && (
                    <motion.button
                      className="contact__copy"
                      onClick={() => handleCopy(item.id, item.value)}
                      whileTap={tapFeedback(canHover)}
                      aria-label={`Copiar ${item.label}`}
                    >
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Check size={16} />
                          </motion.span>
                        ) : (
                          <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <Copy size={16} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )}
                  <a href={item.href} className="contact__open" target={item.copyable ? undefined : '_blank'} rel="noopener noreferrer">
                    Abrir
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              className="toast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              Copiado para a área de transferência
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
