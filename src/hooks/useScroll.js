import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [sectionIds])

  return active
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

export function useTypewriter(words, typingSpeed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)

        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)

        if (charIndex - 1 === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, deleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index, pause, typingSpeed, words])

  return text
}

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
