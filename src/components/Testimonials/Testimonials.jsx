import { Stars } from '../common/icons.jsx'
import { testimonials } from '../../data.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="eyebrow--gold eyebrow--center">Testimonials</div>
        <h2 className="testimonials__title"><em>Prepared.</em> And approved.</h2>
        <p className="testimonials__lead">Business owners who walked into their visa interview ready — and walked out approved.</p>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial">
              <div className="testimonial__stars"><Stars /></div>
              <p className="testimonial__quote">"{t.quote}"</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__role">{t.role}</div>
                  <div className="testimonial__dest">{t.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
