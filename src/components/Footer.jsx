import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; 2026 {profile.name}. Todos os direitos reservados.</p>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
