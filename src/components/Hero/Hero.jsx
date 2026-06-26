import { ArrowIcon, Stars } from '../common/icons.jsx'
import { BadgeCheck } from 'lucide-react'
import { avatars } from '../../data.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__dots" />
      <div className="hero__inner">
        {/* Left — message */}
        <div className="hero__content">
          <div className="hero__badge"><span className="hero__badge-dot" /> Visa interview preparation for business owners &amp; investors</div>
          <h1 className="hero__title">Your business has earned this. <em>Now master the interview.</em></h1>
          <p className="hero__lead">Phoenix Academy prepares established business owners and investors to present their case with authority at the migration visa interview — through senior-led coaching, rigorous mock interviews, and complete documentation mastery across the USA, Australia, New Zealand, and the EU.</p>
          <div className="hero__actions">
            <a href="#contact" className="btn-dark">Request a Consultation <ArrowIcon /></a>
            <a href="#programs" className="btn-outline">View Programs</a>
          </div>
          <div className="hero__trust">
            <div className="avatars">
              {avatars.map((av, i) => (
                <div key={i} className="avatar" style={{ background: av.bg }}>{av.i}</div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__trust-stars"><Stars /> <span>4.9/5</span></div>
              <div className="hero__trust-meta">Trusted by <strong>1000+</strong> business owners</div>
            </div>
          </div>
        </div>

        {/* Right — layered showcase */}
        <div className="hero__showcase">
          <div className="hero__accent" />
          <div className="hero__media">
            <img src="/images/hero-showcase.jpg" alt="A composed business owner prepared for their migration visa interview" />
          </div>
          <div className="hero__card">
            <div className="hero__card-icon"><BadgeCheck size={20} color="#0A1420" strokeWidth={2.4} /></div>
            <div>
              <div className="hero__card-num">98%</div>
              <div className="hero__card-label">Visa interview success rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
