import { metrics } from '../../data.js'
import './SuccessMetrics.css'

export default function SuccessMetrics() {
  return (
    <section id="metrics" className="metrics">
      <div className="metrics__inner">
        <h2 className="metrics__title">Trusted by business owners worldwide</h2>
        <div className="metrics__grid">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <div className="metric__num">{m.num}</div>
              <div className="metric__label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
