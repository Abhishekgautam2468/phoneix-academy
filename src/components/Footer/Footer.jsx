import { GraduationCap, Phone, Mail, Clock } from 'lucide-react'
import './Footer.css'

// Brand logos (Lucide removed brand marks, so these are inline SVGs)
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z"/></svg>
)
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
)
const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>
)
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/></svg>
)

const socials = [
  { Icon: LinkedInIcon, label: 'LinkedIn' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: XIcon, label: 'X' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent" />
      <div className="footer__inner">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <div className="footer__logo"><GraduationCap size={22} color="#c4882f" strokeWidth={2} /></div>
              <div>
                <span className="footer__name">Phoenix<span className="dot">.</span> Academy</span>
                <span className="footer__parent">A division of Phoenix Business Advisory</span>
              </div>
            </div>
            <p className="footer__tagline">Visa interview preparation &amp; migration readiness for established business owners — the training arm of Phoenix Business Advisory.</p>
            <div className="footer__socials">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="footer__social"><Icon size={17} /></a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="footer__col">
            <h4 className="footer__col-title">Programs</h4>
            <a href="#programs" className="footer__link">Visa Interview Mastery</a>
            <a href="#programs" className="footer__link">Business Case Presentation</a>
            <a href="#programs" className="footer__link">Documentation Readiness</a>
            <a href="#programs" className="footer__link">Country-Specific Briefing</a>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <a href="#about" className="footer__link">About Us</a>
            <a href="#process" className="footer__link">How It Works</a>
            <a href="#metrics" className="footer__link">Success Stories</a>
            <a href="#contact" className="footer__link">Book a Consultation</a>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get in Touch</h4>
            <a href="tel:+18001234567" className="footer__contact"><Phone size={15} /> +1 (800) 123-4567</a>
            <a href="mailto:hello@phoenixacademy.com" className="footer__contact"><Mail size={15} /> hello@phoenixacademy.com</a>
            <span className="footer__contact footer__contact--static"><Clock size={15} /> Open 7 days · 9am–7pm</span>
          </div>
        </div>

        <p className="footer__seo">
          Phoenix Academy prepares established business owners and investors for their business migration
          visa interview across the USA, Australia, New Zealand, and the European Union. Through expert
          coaching, realistic mock interviews, business-case preparation, and documentation readiness, we
          help applicants walk into their visa interview confident, consistent, and fully prepared.
        </p>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Phoenix Academy. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__link">Terms of Service</a>
            <a href="#" className="footer__link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
