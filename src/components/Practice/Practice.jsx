import { ArrowIcon } from '../common/icons.jsx'
import { aboutPoints } from '../../data.js'
import './Practice.css'

export default function Practice() {
  return (
    <section id="about" className="practice">
      <div className="practice__inner">
        <div className="practice__photo">
          <img className="practice__img" src="/images/about-mentorship.jpg" alt="A mentor guiding a learner during a training session at Phoenix Academy" />
        </div>
        <div>
          <div className="eyebrow--gold">About Us</div>
          <h2 className="practice__title">More than training. <em>A pathway to success.</em></h2>
          <p className="practice__text">Phoenix Academy bridges the gap between education and real-world opportunity. As the training arm of Phoenix Business Advisory, we help individuals develop industry-relevant skills, professional confidence, and strategic career direction through structured learning and expert mentorship.</p>
          <p className="practice__text practice__text--last">Our mission is simple: prepare people for the opportunities they deserve. Whether your goal is employment, career growth, entrepreneurship, or international expansion, we equip you with practical tools and actionable guidance to move forward with confidence.</p>
          <ul className="practice__points">
            {aboutPoints.map((pt) => (
              <li key={pt} className="practice__point"><span className="dot-gold" />{pt}</li>
            ))}
          </ul>
          <a href="#contact" className="link-gold-underline">Start Your Journey <ArrowIcon size={13} /></a>
        </div>
      </div>
    </section>
  )
}
