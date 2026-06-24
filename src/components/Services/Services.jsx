import { Mic, BookOpen } from 'lucide-react'
import { focusTags } from '../../data.js'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Card 1 — focus areas */}
      <div className="services__card">
        <div className="eyebrow--gold-bold">What We Offer</div>
        <h2 className="services__title">Career &amp; business training, <em>all in one place.</em></h2>
        <p className="services__desc">From interview preparation to entrepreneurship — every step of your growth, guided under one roof.</p>
        <div className="tag-list">
          {focusTags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="services__link-wrap">
          <a href="#programs" className="link-gold">Explore All Programs</a>
        </div>
      </div>

      {/* Card 2 — interview & coaching */}
      <div className="panel panel--blue">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><Mic size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Real Practice</div>
          <h3 className="panel__title">Interview &amp; career coaching</h3>
          <p className="panel__text">Mock interviews, live feedback, and personal-branding guidance led by experienced mentors.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">500+</span>
            <span className="panel__stat-label">Mock interviews conducted</span>
          </div>
        </div>
      </div>

      {/* Card 3 — mentor-led learning */}
      <div className="panel panel--brown">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><BookOpen size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Mentor-Led</div>
          <h3 className="panel__title">Practical, hands-on learning</h3>
          <p className="panel__text">Structured sessions built around real-world skills you can apply immediately in interviews and at work.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">95%</span>
            <span className="panel__stat-label">Program satisfaction rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
