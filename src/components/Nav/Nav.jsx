import { useState } from 'react'
import { GraduationCap, Menu, X } from 'lucide-react'
import './Nav.css'

const links = [
  { href: '#programs', label: 'Programs' },
  { href: '#process', label: 'How It Works' },
  { href: '#metrics', label: 'Success' },
  { href: '#about', label: 'About Us' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <a href="#" className="nav__brand" onClick={close}>
        <div className="nav__logo"><GraduationCap size={20} color="#c4882f" strokeWidth={2.2} /></div>
        <div>
          <div className="nav__name">Phoenix<span className="dot">.</span></div>
          <div className="nav__sub">Academy</div>
        </div>
      </a>

      <div className={`nav__links${open ? ' nav__links--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav__link" onClick={close}>{l.label}</a>
        ))}
        <a href="#contact" className="nav__cta nav__cta--mobile" onClick={close}>Request a Consultation</a>
      </div>

      <div className="nav__right">
        <a href="#contact" className="nav__cta">Request a Consultation</a>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
