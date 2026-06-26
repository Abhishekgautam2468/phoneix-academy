import { Mic, FileCheck } from 'lucide-react'
import { focusTags } from '../../data.js'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Card 1 — focus areas */}
      <div className="services__card">
        <div className="eyebrow--gold-bold">What We Offer</div>
        <h2 className="services__title">Everything you need for <em>interview day.</em></h2>
        <p className="services__desc">From mock interviews to documentation — every part of your visa interview preparation, guided under one roof.</p>
        <div className="tag-list">
          {focusTags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="services__link-wrap">
          <a href="#programs" className="link-gold">Explore All Programs</a>
        </div>
      </div>

      {/* Card 2 — mock interviews */}
      <div className="panel panel--blue">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><Mic size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Real Practice</div>
          <h3 className="panel__title">Realistic mock interviews</h3>
          <p className="panel__text">Interviews modeled on actual consular and embassy interviews, with honest feedback from migration experts.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">98%</span>
            <span className="panel__stat-label">Interview success rate</span>
          </div>
        </div>
      </div>

      {/* Card 3 — documentation & business case */}
      <div className="panel panel--brown">
        <div className="panel__overlay" />
        <div className="panel__content">
          <div className="panel__badge"><FileCheck size={20} color="#0A1420" strokeWidth={2} /></div>
          <div className="panel__eyebrow">Know Your File</div>
          <h3 className="panel__title">Documents &amp; business case</h3>
          <p className="panel__text">Walk through your documents and business story until every answer is consistent, clear, and convincing.</p>
          <div className="panel__stat">
            <span className="panel__stat-num">1000+</span>
            <span className="panel__stat-label">Business owners coached</span>
          </div>
        </div>
      </div>
    </section>
  )
}
