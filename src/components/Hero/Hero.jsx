import { ArrowIcon, Stars } from '../common/icons.jsx'
import { TrendingUp } from 'lucide-react'
import { avatars } from '../../data.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__dots" />
      <div className="hero__inner">
        {/* Left — message */}
        <div className="hero__content">
          <div className="hero__badge"><span className="hero__badge-dot" /> Now enrolling · Career &amp; interview training</div>
          <h1 className="hero__title">Build the skills. Gain the confidence. <em>Achieve your goals.</em></h1>
          <p className="hero__lead">Phoenix Academy empowers students, professionals, and aspiring entrepreneurs with practical training, mentorship, and global business readiness — designed for real-world success.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn-dark">Start Your Journey <ArrowIcon /></a>
            <a href="#programs" className="btn-outline">Explore Programs</a>
          </div>
          <div className="hero__trust">
            <div className="avatars">
              {avatars.map((av, i) => (
                <div key={i} className="avatar" style={{ background: av.bg }}>{av.i}</div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__trust-stars"><Stars /> <span>4.9/5</span></div>
              <div className="hero__trust-meta">Trusted by <strong>1000+</strong> learners</div>
            </div>
          </div>
        </div>

        {/* Right — layered showcase */}
        <div className="hero__showcase">
          <div className="hero__accent" />
          <div className="hero__media">
            <img src="/images/hero-showcase.jpg" alt="A Phoenix Academy coach leading a career-training session" />
          </div>
          <div className="hero__card">
            <div className="hero__card-icon"><TrendingUp size={20} color="#0A1420" strokeWidth={2.4} /></div>
            <div>
              <div className="hero__card-num">95%</div>
              <div className="hero__card-label">Program satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
