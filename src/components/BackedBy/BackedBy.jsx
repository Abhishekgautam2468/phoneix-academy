import { ShieldCheck } from 'lucide-react'
import { parentStats } from '../../data.js'
import './BackedBy.css'

export default function BackedBy() {
  return (
    <section className="backed">
      <div className="backed__inner">
        <div className="backed__text">
          <div className="eyebrow--gold-bold">Backed by Phoenix Business Advisory</div>
          <h2 className="backed__title">The strength of a global migration practice <em>behind every applicant.</em></h2>
          <p className="backed__desc">Phoenix Academy is the interview-preparation division of Phoenix Business Advisory — “The Most Trusted Name in Business Migration,” serving the USA, Australia, New Zealand, and the European Union on a Visa-First, Investment-After model. The same senior advisors who structure your migration prepare you to command the interview.</p>
          <div className="backed__creds">
            <ShieldCheck size={18} color="#c4882f" strokeWidth={2} />
            <span>Registered Migration Agent <strong>MARN 1383279</strong> · MIA Member 6408 · NZ Licence 202506918</span>
          </div>
        </div>
        <div className="backed__stats">
          {parentStats.map((s) => (
            <div key={s.label} className="backed__stat">
              <div className="backed__stat-num">{s.num}</div>
              <div className="backed__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
