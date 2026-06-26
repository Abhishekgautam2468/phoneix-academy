import { processSteps } from '../../data.js'
import './Academy.css'

// Repurposed as the "How It Works" / Learning Process section.
export default function Academy() {
  return (
    <section id="process" className="academy">
      <div className="academy__inner">
        <div className="academy__head">
          <div className="eyebrow--gold">How It Works</div>
          <h2 className="academy__title">A structured path <em>to interview day.</em></h2>
        </div>
        <div className="academy__grid">
          {processSteps.map((s) => (
            <div key={s.num} className="program">
              <div className="program__icon program__step">{s.num}</div>
              <div className="program__title">{s.title}</div>
              <div className="program__desc">{s.desc}</div>
              <div className="program__modules">Step {s.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
