import { ArrowIcon } from '../common/icons.jsx'
import { aboutPoints } from '../../data.js'
import './Practice.css'

export default function Practice() {
  return (
    <section id="about" className="practice">
      <div className="practice__inner">
        <div className="practice__photo">
          <img className="practice__img" src="/images/about-mentorship.jpg" alt="A Phoenix Academy mentor preparing a business owner for their visa interview" />
        </div>
        <div>
          <div className="eyebrow--gold">About Us</div>
          <h2 className="practice__title">More than paperwork. <em>Real interview readiness.</em></h2>
          <p className="practice__text">Phoenix Academy is the interview-preparation and migration-readiness arm of Phoenix Business Advisory. We work exclusively with established business owners, directors, and investors — preparing them to face their migration visa interview with clarity and confidence.</p>
          <p className="practice__text practice__text--last">A strong application gets you to the interview. We make sure you’re ready for it — rehearsing your answers, sharpening your business case, and knowing your documents inside out, so nothing catches you off guard on the day.</p>
          <ul className="practice__points">
            {aboutPoints.map((pt) => (
              <li key={pt} className="practice__point"><span className="dot-gold" />{pt}</li>
            ))}
          </ul>
          <a href="#contact" className="link-gold-underline">Request a Consultation <ArrowIcon size={13} /></a>
        </div>
      </div>
    </section>
  )
}
