import { mediaOutlets } from '../../data.js'
import './MediaStrip.css'

export default function MediaStrip() {
  return (
    <section className="media">
      <div className="media__inner">
        <span className="media__label">As featured in</span>
        <div className="media__logos">
          {mediaOutlets.map((name) => (
            <span key={name} className="media__logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
