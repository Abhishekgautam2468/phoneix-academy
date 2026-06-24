import { ArrowIcon } from '../common/icons.jsx'

export default function VisaBody({ artSide, Icon, titleA, titleB, tagline, desc, subtitle, reqs, cta, ctaGold }) {
  const bodyClass = artSide === 'left'
    ? 'visa-card__body visa-card__body--right visa-card__body--bordered-left'
    : 'visa-card__body visa-card__body--bordered-right'
  return (
    <div className={bodyClass}>
      <div className="visa-card__flag"><Icon size={30} color="#c4882f" strokeWidth={1.8} /></div>
      <div className="visa-card__heading visa-card__heading--wrap">
        <span className="visa-card__country">{titleA}</span>
        <span className="visa-card__type">{titleB}</span>
      </div>
      <div className="visa-card__note">{tagline}</div>
      <div className="visa-card__rule" />
      <p className="visa-card__desc">{desc}</p>
      <div className="visa-card__subtitle">{subtitle}</div>
      <div className="visa-card__reqs">
        {reqs.map((r) => (
          <div key={r} className="req"><span className="req__dot" /><span>{r}</span></div>
        ))}
      </div>
      <a href="#contact" className={`visa-btn${ctaGold ? ' visa-btn--gold' : ''}`}>{cta} <ArrowIcon size={13} /></a>
    </div>
  )
}
