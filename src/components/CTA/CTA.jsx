import { CalendarIcon, PhoneIcon } from '../common/icons.jsx'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__circle--tr" />
      <div className="cta__circle--bl" />
      <div className="cta__inner">
        <div className="cta__eyebrow">Begin your preparation</div>
        <h2 className="cta__title">Walk in fully prepared. <em>Walk out approved.</em></h2>
        <p className="cta__lead">Arrange a private consultation and let our senior advisors prepare you to present your business with authority — whatever your destination.</p>
        <div className="cta__actions">
          <a href="#" className="cta-btn cta-btn--white"><CalendarIcon /> Request a Consultation</a>
          <a href="#programs" className="cta-btn cta-btn--outline">View Programs</a>
          <a href="tel:+18001234567" className="cta-btn cta-btn--outline-dim"><PhoneIcon /> Call us: +1 (800) 123-4567</a>
        </div>
      </div>
    </section>
  )
}
