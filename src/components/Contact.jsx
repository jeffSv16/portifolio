import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Mail, Phone, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { SectionHeader } from './About'

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
                whileHover={{ y: -4, borderColor: 'var(--white)' }}
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
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Copiar ${item.label}`}
                    >
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Check size={16} />
                          </motion.span>
                        ) : (
                          <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
