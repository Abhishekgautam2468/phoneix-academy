import { CalendarIcon, PhoneIcon } from '../common/icons.jsx'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__circle--tr" />
      <div className="cta__circle--bl" />
      <div className="cta__inner">
        <div className="cta__eyebrow">Ready to unlock your potential?</div>
        <h2 className="cta__title">Take the next step <em>toward your future.</em></h2>
        <p className="cta__lead">Whether you're preparing for interviews, developing professional skills, exploring entrepreneurship, or planning for international opportunities, Phoenix Academy is here to support your journey.</p>
        <div className="cta__actions">
          <a href="#" className="cta-btn cta-btn--white"><CalendarIcon /> Book a Free Consultation</a>
          <a href="#programs" className="cta-btn cta-btn--outline">Explore Training Programs</a>
          <a href="tel:+18001234567" className="cta-btn cta-btn--outline-dim"><PhoneIcon /> Call us: +1 (800) 123-4567</a>
        </div>
      </div>
    </section>
  )
}
