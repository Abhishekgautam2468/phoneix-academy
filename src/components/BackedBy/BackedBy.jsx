import { ShieldCheck } from 'lucide-react'
import { parentStats } from '../../data.js'
import './BackedBy.css'

export default function BackedBy() {
  return (
    <section className="backed">
      <div className="backed__inner">
        <div className="backed__text">
          <div className="eyebrow--gold-bold">Backed by Phoenix Business Advisory</div>
          <h2 className="backed__title">The strength of a global migration practice <em>behind every learner.</em></h2>
          <p className="backed__desc">Phoenix Academy is the training arm of Phoenix Business Advisory — a licensed business-migration practice serving the USA, Australia, New Zealand, and the European Union. The same expertise that moves businesses across borders shapes the way we prepare you.</p>
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
