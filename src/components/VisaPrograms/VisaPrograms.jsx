import VisaArt from './VisaArt.jsx'
import VisaBody from './VisaBody.jsx'
import { programs } from '../../data.js'
import './VisaPrograms.css'

// Repurposed as the "Programs" section — each program is one card built from
// a text body (VisaBody) and a decorative art panel (VisaArt). The body/art
// sides alternate left↔right per card.
export default function VisaPrograms() {
  return (
    <section id="programs" className="visa">
      <div className="visa__inner">
        <div className="eyebrow--gold eyebrow--center">Our Programs</div>
        <h2 className="visa__title">Interview preparation, <em>built for business migration.</em></h2>
        <p className="visa__lead">Targeted, expert-led coaching that gets established business owners ready for every part of the visa interview — across all four destination markets.</p>

        {programs.map((p, i) => {
          const artSide = i % 2 === 0 ? 'right' : 'left'
          const body = (
            <VisaBody
              key="body" artSide={artSide} Icon={p.Icon} titleA={p.titleA} titleB={p.titleB}
              tagline={p.tagline} desc={p.desc} subtitle="Key Areas" reqs={p.keyAreas}
              cta={p.cta} ctaGold={i === programs.length - 1}
            />
          )
          const art = (
            <VisaArt
              key="art" artClass={p.artClass} Icon={p.Icon} title={`${p.titleA} ${p.titleB}`}
              region={p.region} statNum={p.stat} statLabel={p.statLabel}
            />
          )
          return (
            <div className="visa-card" key={p.titleA}>
              {artSide === 'left' ? [art, body] : [body, art]}
            </div>
          )
        })}
      </div>
    </section>
  )
}
