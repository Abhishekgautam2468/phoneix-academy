import { features } from '../../data.js'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why__inner">
        <div className="eyebrow--gold">Why Choose Us</div>
        <h2 className="why__title">Why business owners choose <em>Phoenix Academy.</em></h2>
        <div className="feature-list">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <div className="feature__icon"><f.Icon size={22} color="#c4882f" strokeWidth={2} /></div>
              <div>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
